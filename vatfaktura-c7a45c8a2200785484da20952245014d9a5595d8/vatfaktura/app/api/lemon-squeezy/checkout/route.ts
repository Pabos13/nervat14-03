import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getUserById, updateUserSubscription } from '@/lib/users-store'
import { createLemonSqueezyCheckoutSession } from '@/lib/lemon-squeezy'

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const userIdCookie = cookieStore.get('userId')?.value

    if (!userIdCookie) {
      return NextResponse.json(
        { error: 'Unauthorized - no user session' },
        { status: 401 }
      )
    }

    const user = getUserById(userIdCookie)
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Check if user already has Premium subscription
    if (user.subscription.plan === 'premium' && user.subscription.subscriptionStatus === 'active') {
      return NextResponse.json(
        { error: 'User already has an active Premium subscription' },
        { status: 400 }
      )
    }

    const { plan } = await request.json()

    if (plan !== 'premium') {
      return NextResponse.json(
        { error: 'Invalid plan' },
        { status: 400 }
      )
    }

    const { checkoutUrl, sessionId } = await createLemonSqueezyCheckoutSession(
      user.email,
      userIdCookie,
      'premium'
    )

    return NextResponse.json({
      success: true,
      checkoutUrl,
      sessionId,
    })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}
