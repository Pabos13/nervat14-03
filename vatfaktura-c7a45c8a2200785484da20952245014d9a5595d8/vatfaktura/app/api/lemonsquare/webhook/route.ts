import { NextRequest, NextResponse } from 'next/server';
import { verifyWebhookSignature, extractSubscriptionData } from '@/lib/lemonsquare';
import { getUsersStore } from '@/lib/users-store';

export async function POST(request: NextRequest) {
  try {
    const signature = request.headers.get('x-lemonsquare-signature');
    if (!signature) {
      return NextResponse.json(
        { error: 'Missing signature header' },
        { status: 401 }
      );
    }

    const body = await request.text();
    
    // Verify webhook signature
    if (!verifyWebhookSignature(body, signature)) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    const webhookData = JSON.parse(body);
    const event = webhookData.event;

    console.log(`[Lemonsquare Webhook] Event: ${event}`);

    // Handle subscription events
    if (event === 'subscription.created' || event === 'subscription.updated') {
      const subscriptionData = extractSubscriptionData(webhookData);
      
      if (subscriptionData && webhookData.data?.subscription?.customerId) {
        const usersStore = getUsersStore();
        const userId = webhookData.data.subscription.customerId;
        
        // Update user subscription data
        const user = usersStore.getUser(userId);
        if (user) {
          usersStore.updateUser(userId, {
            ...user,
            subscriptionStatus: subscriptionData.status,
            subscriptionId: subscriptionData.subscriptionId,
            subscriptionCurrentPeriodEnd: subscriptionData.currentPeriodEnd,
            plan: 'premium',
          });
          
          console.log(`[Lemonsquare Webhook] User ${userId} subscribed to premium`);
        }
      }
    }

    if (event === 'subscription.cancelled' || event === 'subscription.expired') {
      const userId = webhookData.data?.subscription?.customerId;
      
      if (userId) {
        const usersStore = getUsersStore();
        const user = usersStore.getUser(userId);
        
        if (user) {
          usersStore.updateUser(userId, {
            ...user,
            plan: 'starter',
            subscriptionStatus: 'cancelled',
            subscriptionId: undefined,
          });
          
          console.log(`[Lemonsquare Webhook] User ${userId} subscription cancelled, downgraded to starter`);
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
