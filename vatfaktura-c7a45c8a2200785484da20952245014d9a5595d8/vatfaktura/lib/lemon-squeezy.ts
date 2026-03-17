import { getLemonSqueezyApiKey, getLemonSqueezyWebhookSecret, getLemonSqueezyStoreId, getLemonSqueezyPremiumProductId } from './env'

// Pricing plans in Lemon Squeezy
export const PRICING_PLANS = {
  BASIC: {
    id: 'basic',
    name: 'Podstawowy',
    price: 0,
    description: 'Pierwsze 5 faktur za darmo',
    features: [
      '5 bezpłatnych faktur',
      'Podstawowe funkcje',
      'Wsparcie email',
    ],
  },
  PREMIUM: {
    id: 'premium',
    name: 'Premium',
    price: 99,
    description: 'Nieograniczone faktury',
    // Note: lemonSqueezyProductId is fetched at runtime in createLemonSqueezyCheckoutSession, not here
    features: [
      'Nieograniczone faktury',
      'Wszystkie funkcje',
      'Priorytetowe wsparcie',
      'Zaawansowana analityka',
    ],
  },
}

export async function createLemonSqueezyCheckoutSession(
  email: string,
  userId: string,
  plan: 'premium'
): Promise<{ checkoutUrl: string; sessionId: string }> {
  const apiKey = getLemonSqueezyApiKey()
  const productId = getLemonSqueezyPremiumProductId()
  const storeId = getLemonSqueezyStoreId()
  
  console.log('[v0] Getter function values:', {
    apiKey: apiKey ? apiKey.substring(0, 30) + '...' : 'EMPTY',
    productId: productId,
    storeId: storeId,
  })
  
  if (!apiKey) {
    throw new Error('LEMON_SQUEEZY_API_KEY not configured - set it in environment variables')
  }

  if (!productId) {
    throw new Error('LEMON_SQUEEZY_PREMIUM_PRODUCT_ID not configured - set it in environment variables')
  }

  if (!storeId) {
    throw new Error('LEMON_SQUEEZY_STORE_ID not configured - set it in environment variables')
  }

  try {
    console.log('[v0] Making request to Lemon Squeezy API...')
    console.log('[v0] Store ID:', storeId)
    console.log('[v0] Product ID:', productId)
    console.log('[v0] API Key begins with:', apiKey.substring(0, 20))
    
    const response = await fetch('https://api.lemonsqueezy.com/v1/checkouts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          type: 'checkouts',
          attributes: {
            checkout_data: {
              custom: {
                user_id: userId,
                email: email,
              },
            },
          },
          relationships: {
            store: {
              data: {
                type: 'stores',
                id: storeId,
              },
            },
            variant: {
              data: {
                type: 'variants',
                id: productId,
              },
            },
          },
        },
      }),
    })

    const result = await response.json()
    
    console.log('[v0] Lemon Squeezy response status:', response.status)

    if (!response.ok) {
      console.error('[v0] Lemon Squeezy API error:', result)
      throw new Error(`Failed to create checkout: ${result.errors?.[0]?.detail || 'Unknown error'}`)
    }

    return {
      checkoutUrl: result.data.attributes.url,
      sessionId: result.data.id,
    }
  } catch (error) {
    console.error('Error creating Lemon Squeezy checkout:', error)
    throw error
  }
}

export async function verifyLemonSqueezyWebhookSignature(
  body: Buffer,
  signature: string
): Promise<boolean> {
  const webhookSecret = getLemonSqueezyWebhookSecret()
  
  if (!webhookSecret) {
    console.error('LEMON_SQUEEZY_WEBHOOK_SECRET not configured')
    return false
  }

  try {
    const crypto = require('crypto')
    const hmac = crypto
      .createHmac('sha256', webhookSecret)
      .update(body)
      .digest('hex')

    return hmac === signature
  } catch (error) {
    console.error('Error verifying webhook signature:', error)
    return false
  }
}

export function parseLemonSqueezyWebhookEvent(data: any) {
  return {
    eventType: data.meta.event_name,
    customData: data.data.attributes.custom_data,
    subscriptionData: {
      id: data.data.id,
      status: data.data.attributes.status,
      customerId: data.data.attributes.customer_id,
    },
  }
}
