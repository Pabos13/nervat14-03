/**
 * Lemonsquare Payment Integration
 * Handles checkout sessions and subscription management
 */

export interface LemonsquareCheckoutResponse {
  checkoutUrl: string;
  sessionId: string;
}

export interface LemonsquareWebhookPayload {
  event: string;
  data: {
    subscription?: {
      id: string;
      status: string;
      customerId: string;
      productId: string;
      renewsAt?: number;
      canceledAt?: number;
    };
    customer?: {
      id: string;
      email: string;
    };
  };
}

export interface SubscriptionData {
  status: 'active' | 'paused' | 'cancelled' | 'expired' | 'past_due';
  customerId: string;
  subscriptionId: string;
  productId: string;
  currentPeriodEnd: number;
  canceledAt?: number;
}

/**
 * Create a checkout session for premium subscription
 */
export async function createCheckoutSession(
  userId: string,
  userEmail: string,
  returnUrl: string
): Promise<LemonsquareCheckoutResponse> {
  const apiKey = process.env.LEMONSQUEZE_API_KEY;

  if (!apiKey) {
    console.warn('LEMONSQUEZE_API_KEY is not configured - using mock checkout for testing');
    // Return a mock checkout URL for testing purposes
    return {
      checkoutUrl: `https://lemonsquare.com/mock-checkout?customer=${encodeURIComponent(userEmail)}&userId=${userId}&return=${encodeURIComponent(returnUrl)}`,
      sessionId: 'mock-session-' + Date.now(),
    };
  }

  try {
    console.log('[v0] Creating checkout session for:', userEmail);
    const response = await fetch('https://api.lemonsquare.com/v1/checkout-sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        customerEmail: userEmail,
        returnUrl,
        productId: process.env.LEMONSQUEZE_PREMIUM_PRODUCT_ID || 'premium-99',
        metadata: {
          userId,
        },
      }),
    });

    console.log('[v0] Lemonsquare API response status:', response.status);
    
    if (!response.ok) {
      const error = await response.json();
      console.error('[v0] Lemonsquare API error:', error);
      throw new Error(`Lemonsquare API error: ${error.message}`);
    }

    const data = await response.json();
    console.log('[v0] Checkout session created successfully');
    return {
      checkoutUrl: data.checkoutUrl,
      sessionId: data.id,
    };
  } catch (error) {
    console.error('[v0] Lemonsquare checkout error:', error);
    throw error;
  }
}

/**
 * Verify webhook signature from Lemonsquare
 */
export function verifyWebhookSignature(
  payload: string,
  signature: string
): boolean {
  const secret = process.env.LEMONSQUEZE_WEBHOOK_SECRET;

  if (!secret) {
    throw new Error('LEMONSQUEZE_WEBHOOK_SECRET is not configured');
  }

  const crypto = require('crypto');
  const hash = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');

  return hash === signature;
}

/**
 * Extract user subscription data from webhook
 */
export function extractSubscriptionData(webhookData: any): SubscriptionData | null {
  if (!webhookData.data?.subscription) {
    return null;
  }

  const sub = webhookData.data.subscription;

  return {
    status: sub.status,
    customerId: sub.customerId,
    subscriptionId: sub.id,
    productId: sub.productId,
    currentPeriodEnd: sub.renewsAt || 0,
    canceledAt: sub.canceledAt,
  };
}
