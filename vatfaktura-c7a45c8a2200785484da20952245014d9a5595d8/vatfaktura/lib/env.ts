// Environment configuration - loaded at runtime from process.env
// Using getters to ensure variables are loaded when functions are called, not at import time

// Real credentials for sandbox - loaded from .env.local or Vercel Environment Variables
const SANDBOX_API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NGQ1OWNlZi1kYmI4LTRlYTUtYjE3OC1kMjU0MGZjZDY5MTkiLCJqdGkiOiIzMzZkNjQ3YmY5OWM3MTEyNmUxMzk2ZjY0NGFjZmUwYjRkMThjZjg2MmI5YjM4N2NkMzcwY2RmOTc2YWIyYjFiNjE2ZDZjZDA4ZTJlOTY1OSIsImlhdCI6MTc3MzczMDA3My4yNjAxNjIsIm5iZiI6MTc3MzczMDA3My4yNjAxNjUsImV4cCI6MTc4OTYwMzIwMC4wMjY4MjYsInN1YiI6IjY2NzkxODQiLCJzY29wZXMiOltdfQ.Z199_X_HymGMgW4ww34TNqaRv2qPEDvXlZNtInHkD0BHNpEgpwTCe7r3juRSRy1pKdcBqYx-d9yrmV4eZPNQos6Byq5kYICJlLVM-zV4WCSPXZZ7-TiFwOwlE-ZNUnWQhX2ABlUpKwUY54Df6qvzof-xnky2uI7Cr7kQLeM-nK2MmOmqbQSQfJHlG9azuuJYvkTD_CKKyvUxTWlNkAfbhxL6uICgkMSvIGSpL6WXsgkm5x0Qi3oHV5P44cWVMMxWKsC0Rz94EHh2vBDjg-T-aRjmBN5dUGPtUdeRSOoF0ZDWs6Iem8jPqiwtw96S7JnCrWJoTe0SUbvTSXheCXAzor3ZkMLul5OgTkV6lY4i2D_9kqLG2HPVOii9zCZ6ODW0Z95CyM7IGRBlXLQO-cXaoftOHyTgySVKUVQKJ94vavaP0ZWb-mU8dim4HiHpg6FR8SP4vY-0gmsDhr6QFUpLgbGXgSZLcEul4LCPmQPJhjovB200KImV0Ta3z40vrEgqJfCM3-0ZY3m4QMVFoCeFtRUnnr7Qsc8CWqzUZerPanYWOTRghIGCDsLjaQMnp_d4OMHAXYp97rdPQKbClvBwNguuxsDlFUYMgDHQyUF6SVxCBWakWav6Y3zijU_vz-BYlUq9adC40MjG-dALRy_FKqdLd8vvkeQuD0TokJDLP74'
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
