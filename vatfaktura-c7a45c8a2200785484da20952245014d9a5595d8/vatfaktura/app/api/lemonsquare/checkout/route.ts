import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/lemonsquare';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, email, returnUrl } = body;

    if (!userId || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: userId, email' },
        { status: 400 }
      );
    }

    const checkout = await createCheckoutSession(
      userId,
      email,
      returnUrl || `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard`
    );

    return NextResponse.json(checkout);
  } catch (error) {
    console.error('Checkout route error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Checkout failed' },
      { status: 500 }
    );
  }
}
