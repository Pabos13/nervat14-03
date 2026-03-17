import { NextRequest, NextResponse } from 'next/server'
import { createLemonSqueezyCheckoutSession } from '@/lib/lemon-squeezy'

export async function POST(request: NextRequest) {
  try {
    const { plan, userId, email } = await request.json()

    // Debug: Check if env vars are available
    console.log('[v0] Checkout request:', { plan, userId, email })
    console.log('[v0] Checking env vars:')
    console.log('[v0]   LEMON_SQUEEZY_API_KEY:', process.env.LEMON_SQUEEZY_API_KEY ? '***SET***' : 'MISSING')
    console.log('[v0]   LEMON_SQUEEZY_STORE_ID:', process.env.LEMON_SQUEEZY_STORE_ID || 'MISSING')
    console.log('[v0]   LEMON_SQUEEZY_PREMIUM_PRODUCT_ID:', process.env.LEMON_SQUEEZY_PREMIUM_PRODUCT_ID || 'MISSING')

    // If env vars missing, return helpful error
    if (!process.env.LEMON_SQUEEZY_API_KEY || !process.env.LEMON_SQUEEZY_STORE_ID || !process.env.LEMON_SQUEEZY_PREMIUM_PRODUCT_ID) {
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
