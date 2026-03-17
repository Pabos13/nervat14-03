// Environment configuration - loaded at runtime from process.env
// Using getters to ensure variables are loaded when functions are called, not at import time

// Real credentials for sandbox - loaded from .env.local or Vercel Environment Variables
const SANDBOX_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NGQ1OWNlZi1kYmI4LTRlYTUtYjE3OC1kMjU0MGZjZDY5MTkiLCJqdGkiOiJjYzZkNTYyMjYzZmIzZDExOTgyNzE2NTU0MTVlNTlmOTFhMTVkOWU2YTNkZTEyNzc1ODIxOGNlMDJmODQwY2UwY2E0NTA5NmU5MGZmMGIyYiIsImlhdCI6MTc3MzcyMzM5MC4xNDg1MzIsIm5iZiI6MTc3MzcyMzM5MC4xNDg1MzUsImV4cCI6MTc4OTYwMzIwMC4wMjk0NjEsInN1YiI6IjY2NzkxODQiLCJzY29wZXMiOltdfQ.zkQNJRn2j-3F1-mb8sLbzRzSaSiT2g--XabifFGpO_XuGB8V_HSPQcab-h0LpqqjbxIDVtTWT_DSNh1bRlYSCGJGR-Pm7BKpcsfK5qhdmDEeEh-dQ3ooID-i1HEs0KNKhs041-8rxFJXfe6CBOwbr_X6wW58hKX2PWWQrG5eEg1uL1mSa9AcaFIttZbXJt4vVEX5TyCJhPcnMW8YvaCB1iWqkkr0oUkRDSzkZw1eHTftmvwnCR5mGulWWCXxCFg2yCRrobl72JAuNNHOBdj67y8663Bm-YCUt0mJTKgC3KNAM6YBNEUOnPMjZk8EOdgUCHSlGRDnVYTRsKHYPQjfziyuraS-DVhrIpmeE5E5HaolPq67UNma2u8G9y2ik4UTlME2WyLNw2ZfTL9jF7CQnAO8cLRPyLowakcgMr-FwZRRcHyeg0R-h-a5I88aKanPByCJQzv7VKBC0e1zliytf0qSeY5yJhgMLMPGyjj3CcXbtEkmB9QoIeIq6TYx-9u3KNFaLC6yiGx1t-5tbhl28eR5FA3p6-BvZloT-dXQmyU5BsJD01UuCbq8-YjSaLfQZ03wMd_9188lqQGgYbvUsaWzXMOya4d9bffq_ud1Dwf3Va5oOIKkVyKs0GZXnMsV2T9sNVxvFmSZJoznfNHaOnkw0KXw3-dc0FwsE-YUkd4'
const SANDBOX_STORE_ID = 'notjet'
const SANDBOX_PRODUCT_ID = '1410828'
const SANDBOX_WEBHOOK_SECRET = 'Skolpi111'

export function getLemonSqueezyApiKey() {
  const key = process.env.LEMON_SQUEEZY_API_KEY || process.env.NEXT_PUBLIC_LEMON_SQUEEZY_API_KEY
  return key || SANDBOX_API_KEY
}

export function getLemonSqueezyWebhookSecret() {
  const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET || process.env.NEXT_PUBLIC_LEMON_SQUEEZY_WEBHOOK_SECRET
  return secret || SANDBOX_WEBHOOK_SECRET
}

export function getLemonSqueezyStoreId() {
  const id = process.env.LEMON_SQUEEZY_STORE_ID || process.env.NEXT_PUBLIC_LEMON_SQUEEZY_STORE_ID
  return id || SANDBOX_STORE_ID
}

export function getLemonSqueezyPremiumProductId() {
  const id = process.env.LEMON_SQUEEZY_PREMIUM_PRODUCT_ID || process.env.NEXT_PUBLIC_LEMON_SQUEEZY_PREMIUM_PRODUCT_ID
  return id || SANDBOX_PRODUCT_ID
}
