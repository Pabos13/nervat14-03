// Konfiguracja Lemon Squeezy
const LEMON_SQUEEZY_API_KEY = process.env.LEMON_SQUEEZY_API_KEY
const LEMON_SQUEEZY_WEBHOOK_SECRET = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET
const LEMON_SQUEEZY_STORE_ID = process.env.LEMON_SQUEEZY_STORE_ID

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
    lemonSqueezyProductId: process.env.LEMON_SQUEEZY_PREMIUM_PRODUCT_ID,
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
  if (!LEMON_SQUEEZY_API_KEY) {
    throw new Error('LEMON_SQUEEZY_API_KEY not configured - set it in environment variables')
  }

  const productId = PRICING_PLANS.PREMIUM.lemonSqueezyProductId
  if (!productId) {
    throw new Error('LEMON_SQUEEZY_PREMIUM_PRODUCT_ID not configured - set it in environment variables')
  }

  if (!LEMON_SQUEEZY_STORE_ID) {
    throw new Error('LEMON_SQUEEZY_STORE_ID not configured - set it in environment variables')
  }

  try {
    const response = await fetch('https://api.lemonsqueezy.com/v1/checkouts', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LEMON_SQUEEZY_API_KEY}`,
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
                id: LEMON_SQUEEZY_STORE_ID,
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

    if (!response.ok) {
      console.error('Lemon Squeezy API error:', result)
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
  if (!LEMON_SQUEEZY_WEBHOOK_SECRET) {
    console.error('LEMON_SQUEEZY_WEBHOOK_SECRET not configured')
    return false
  }

  try {
    const crypto = require('crypto')
    const hmac = crypto
      .createHmac('sha256', LEMON_SQUEEZY_WEBHOOK_SECRET)
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
