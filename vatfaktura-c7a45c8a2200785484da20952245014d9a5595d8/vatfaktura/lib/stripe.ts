import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export const SUBSCRIPTION_PLANS = {
  free: {
    id: 'free',
    name: 'Starter',
    price: 0,
    invoicesTotal: 5,
    stripePriceId: 'price_free',
    features: [
      '5 faktur za darmo',
      'Eksport do PDF',
      'Zarządzanie kontrahentami',
      'Raporty VAT',
      'Integracja z kSEF',
      'Historia i archiwum',
    ],
  },
  premium: {
    id: 'premium',
    name: 'Premium',
    price: 99,
    invoicesTotal: -1,
    stripePriceId: 'price_premium',
    paypalPlanId: 'P-PREMIUM-MONTHLY',
    features: [
      'Nieograniczone faktury',
      'Wszystkie funkcje Starter',
      'Zaawansowane szablony',
      'Automatyczne przypomnienia',
      'Priorytetowe wsparcie',
      'Zaawansowana analityka',
    ],
  },
};

export const PREMIUM_PRICE_PLN = 99;
export const PAYPAL_ENABLED = true;
