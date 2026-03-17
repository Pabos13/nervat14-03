// Environment configuration - loaded at runtime from process.env
// Using getters to ensure variables are loaded when functions are called, not at import time

// Sandbox test values - will be overridden by actual environment variables in production
const SANDBOX_API_KEY = 'test_lemon_squeezy_api_key_sandbox_only'
const SANDBOX_STORE_ID = 'notjet'
const SANDBOX_PRODUCT_ID = '1410828'
const SANDBOX_WEBHOOK_SECRET = 'test_webhook_secret_sandbox_only'

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

export function validateLemonSqueezyEnv() {
  const apiKey = getLemonSqueezyApiKey()
  const storeId = getLemonSqueezyStoreId()
  const productId = getLemonSqueezyPremiumProductId()
  
  const missing: string[] = []
  
  if (!apiKey) missing.push('LEMON_SQUEEZY_API_KEY')
  if (!storeId) missing.push('LEMON_SQUEEZY_STORE_ID')
  if (!productId) missing.push('LEMON_SQUEEZY_PREMIUM_PRODUCT_ID')
  
  if (missing.length > 0) {
    console.warn('[v0] Missing Lemon Squeezy env vars:', missing)
    console.warn('[v0] Loaded env vars:', {
      apiKey: apiKey ? '***' : 'undefined',
      storeId: storeId,
      productId: productId,
    })
    return false
  }
  
  return true
}
