import { NextRequest, NextResponse } from 'next/server'
import { createLemonSqueezyCheckoutSession } from '@/lib/lemon-squeezy'

export async function POST(request: NextRequest) {
  try {
    const { plan, userId, email } = await request.json()

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
