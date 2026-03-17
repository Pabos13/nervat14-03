// Environment configuration - loaded at runtime from process.env
// Using getters to ensure variables are loaded when functions are called, not at import time

export function getLemonSqueezyApiKey() {
  return process.env.LEMON_SQUEEZY_API_KEY || ''
}

export function getLemonSqueezyWebhookSecret() {
  return process.env.LEMON_SQUEEZY_WEBHOOK_SECRET || ''
}

export function getLemonSqueezyStoreId() {
  return process.env.LEMON_SQUEEZY_STORE_ID || ''
}

export function getLemonSqueezyPremiumProductId() {
  return process.env.LEMON_SQUEEZY_PREMIUM_PRODUCT_ID || ''
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
