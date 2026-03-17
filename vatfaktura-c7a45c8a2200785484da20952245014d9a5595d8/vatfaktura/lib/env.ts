// Environment configuration - loaded at runtime
export const LEMON_SQUEEZY_API_KEY = process.env.LEMON_SQUEEZY_API_KEY || ''
export const LEMON_SQUEEZY_WEBHOOK_SECRET = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET || ''
export const LEMON_SQUEEZY_STORE_ID = process.env.LEMON_SQUEEZY_STORE_ID || ''
export const LEMON_SQUEEZY_PREMIUM_PRODUCT_ID = process.env.LEMON_SQUEEZY_PREMIUM_PRODUCT_ID || ''

export function validateLemonSqueezyEnv() {
  const missing: string[] = []
  
  if (!LEMON_SQUEEZY_API_KEY) missing.push('LEMON_SQUEEZY_API_KEY')
  if (!LEMON_SQUEEZY_STORE_ID) missing.push('LEMON_SQUEEZY_STORE_ID')
  if (!LEMON_SQUEEZY_PREMIUM_PRODUCT_ID) missing.push('LEMON_SQUEEZY_PREMIUM_PRODUCT_ID')
  
  if (missing.length > 0) {
    console.warn('[v0] Missing Lemon Squeezy env vars:', missing)
    console.warn('[v0] Available env vars:', Object.keys(process.env).filter(k => k.includes('LEMON')))
    return false
  }
  
  return true
}
