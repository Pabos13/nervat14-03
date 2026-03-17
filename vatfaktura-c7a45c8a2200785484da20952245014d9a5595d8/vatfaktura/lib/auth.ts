/**
 * Simple authentication utility using localStorage
 * In production, use proper session management with HTTP-only cookies
 */

export interface UserSubscription {
  plan: 'basic' | 'premium'
  lemonSqueezyCustomerId?: string
  lemonSqueezySubscriptionId?: string
  subscriptionStatus?: 'active' | 'paused' | 'cancelled' | 'expired'
  currentPeriodStart?: Date
  currentPeriodEnd?: Date
  invoicesCreatedAfterMigration: number
  migrationDate: Date
}

export type AccountType = 'private' | 'business'

export interface User {
  id: string
  email: string
  accountType: AccountType
  company: string
  nip: string
  firstName?: string
  lastName?: string
  pesel?: string
  address?: string
  city?: string
  postalCode?: string
  subscription?: UserSubscription
}

export function getAuthToken(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('vatfaktura_auth_token')
}

export function getUser(): User | null {
  if (typeof window === 'undefined') return null
  const user = localStorage.getItem('vatfaktura_user')
  return user ? JSON.parse(user) : null
}

export function setAuth(token: string, user: User) {
  if (typeof window === 'undefined') return
  localStorage.setItem('vatfaktura_auth_token', token)
  localStorage.setItem('vatfaktura_user', JSON.stringify(user))
}

export function logout() {
  if (typeof window === 'undefined') return
  localStorage.removeItem('vatfaktura_auth_token')
  localStorage.removeItem('vatfaktura_user')
}

export function isAuthenticated(): boolean {
  return !!getAuthToken()
}
