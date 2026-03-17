import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getUserById, updateUserSubscription } from '@/lib/users-store'
import { createLemonSqueezyCheckoutSession } from '@/lib/lemon-squeezy'

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies()
    const userIdCookie = cookieStore.get('userId')?.value
    const { plan, userId, email } = await request.json()

    let user = null
    let finalUserId = userId || userIdCookie

    // Spróbuj pobrać użytkownika z ID z cookie lub request body
    if (finalUserId) {
      user = getUserById(finalUserId)
    }

    // Jeśli nie znaleziono użytkownika i mamy email, to jest nowy użytkownik z rejestracji
    if (!user && email) {
      // Tworzymy tymczasowy checkout dla nowego użytkownika
      // Pełne dane będą zsynchronizowane po webhoku z Lemon Squeezy
      finalUserId = `new_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
    } else if (!user) {
      return NextResponse.json(
        { error: 'Unauthorized - no user session or email provided' },
        { status: 401 }
      )
    }

    if (plan !== 'premium') {
      return NextResponse.json(
        { error: 'Invalid plan' },
        { status: 400 }
      )
    }

    // Check if existing user already has Premium subscription
    if (user && user.subscription.plan === 'premium' && user.subscription.subscriptionStatus === 'active') {
      return NextResponse.json(
        { error: 'User already has an active Premium subscription' },
        { status: 400 }
      )
    }

    const { checkoutUrl, sessionId } = await createLemonSqueezyCheckoutSession(
      email || user?.email,
      finalUserId,
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
