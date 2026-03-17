import { NextRequest, NextResponse } from 'next/server'
import { createLemonSqueezyCheckoutSession } from '@/lib/lemon-squeezy'
import { getLemonSqueezyApiKey, getLemonSqueezyStoreId, getLemonSqueezyPremiumProductId } from '@/lib/env'

export async function POST(request: NextRequest) {
  try {
    const { plan, userId, email } = await request.json()

    // Debug: Check if env vars are available using getter functions
    console.log('[v0] Checkout request:', { plan, userId, email })
    console.log('[v0] Checking env vars:')
    const apiKey = getLemonSqueezyApiKey()
    const storeId = getLemonSqueezyStoreId()
    const productId = getLemonSqueezyPremiumProductId()
    
    console.log('[v0]   LEMON_SQUEEZY_API_KEY:', apiKey ? '***SET***' : 'MISSING')
    console.log('[v0]   LEMON_SQUEEZY_STORE_ID:', storeId || 'MISSING')
    console.log('[v0]   LEMON_SQUEEZY_PREMIUM_PRODUCT_ID:', productId || 'MISSING')

    // If env vars missing, return helpful error
    if (!apiKey || !storeId || !productId) {
      console.error('[v0] Missing Lemon Squeezy environment variables! Configure in Vercel Settings → Environment Variables')
      return NextResponse.json(
        { 
          error: 'Lemon Squeezy not configured',
          message: 'Please set LEMON_SQUEEZY_API_KEY, LEMON_SQUEEZY_STORE_ID, and LEMON_SQUEEZY_PREMIUM_PRODUCT_ID in Vercel Settings → Environment Variables'
        },
        { status: 503 }
      )
    }

    const { checkoutUrl, sessionId } = await createLemonSqueezyCheckoutSession(
      email,
      userId,
      'premium'
    )

    return NextResponse.json({
      success: true,
      checkoutUrl,
      sessionId,
    })
  } catch (error) {
    console.error('[v0] Checkout error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}
