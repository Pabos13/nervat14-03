import { NextRequest, NextResponse } from 'next/server'
import { getUserById, updateUserSubscription } from '@/lib/users-store'
import {
  verifyLemonSqueezyWebhookSignature,
  parseLemonSqueezyWebhookEvent,
} from '@/lib/lemon-squeezy'

export async function POST(request: NextRequest) {
  try {
    // Get the raw body for signature verification
    const body = await request.arrayBuffer()
    const signature = request.headers.get('X-Signature') || ''

    // Verify webhook signature
    const isValid = await verifyLemonSqueezyWebhookSignature(Buffer.from(body), signature)
    if (!isValid) {
      console.error('Invalid webhook signature')
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    const data = JSON.parse(new TextDecoder().decode(body))
    const event = parseLemonSqueezyWebhookEvent(data)

    const userId = event.customData?.user_id
    if (!userId) {
      console.error('No user_id in webhook data')
      return NextResponse.json({ error: 'Missing user_id' }, { status: 400 })
    }

    const user = getUserById(userId)
    if (!user) {
      console.error('User not found:', userId)
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Handle different event types
    if (
      event.eventType === 'order_created' ||
      event.eventType === 'subscription_created'
    ) {
      // User successfully purchased Premium
      updateUserSubscription(userId, {
        plan: 'premium',
        lemonSqueezySubscriptionId: event.subscriptionData.id,
        lemonSqueezyCustomerId: event.subscriptionData.customerId,
        subscriptionStatus: 'active',
        currentPeriodStart: new Date(),
        currentPeriodEnd: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
      })

      console.log(`[Webhook] Premium subscription activated for user ${userId}`)
    } else if (event.eventType === 'subscription_cancelled') {
      updateUserSubscription(userId, {
        subscriptionStatus: 'cancelled',
      })

      console.log(`[Webhook] Subscription cancelled for user ${userId}`)
    } else if (event.eventType === 'subscription_expired') {
      // Subscription expired, user reverts to basic plan
      updateUserSubscription(userId, {
        plan: 'basic',
        subscriptionStatus: 'expired',
      })

      console.log(`[Webhook] Subscription expired for user ${userId}`)
    } else if (event.eventType === 'subscription_paused') {
      updateUserSubscription(userId, {
        subscriptionStatus: 'paused',
      })

      console.log(`[Webhook] Subscription paused for user ${userId}`)
    } else if (event.eventType === 'subscription_resumed') {
      updateUserSubscription(userId, {
        subscriptionStatus: 'active',
      })

      console.log(`[Webhook] Subscription resumed for user ${userId}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}
