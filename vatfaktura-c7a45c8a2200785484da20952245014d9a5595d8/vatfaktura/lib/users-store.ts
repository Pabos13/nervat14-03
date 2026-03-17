import crypto from 'crypto'

export type AccountType = 'private' | 'business'
export type PlanType = 'basic' | 'premium'

export interface UserSubscription {
  plan: PlanType
  lemonSqueezyCustomerId?: string
  lemonSqueezySubscriptionId?: string
  subscriptionStatus?: 'active' | 'paused' | 'cancelled' | 'expired'
  currentPeriodStart?: Date
  currentPeriodEnd?: Date
  invoicesCreatedAfterMigration: number // Liczba faktur utworzonych od dzisiaj (2024-01-XX)
  migrationDate: Date // Data gdy zmieniliśmy model z free na freemium
}

export interface User {
  id: string
  email: string
  password: string
  accountType: AccountType
  // Business fields
  company: string
  nip: string
  // Private person fields
  firstName: string
  lastName: string
  pesel?: string
  createdAt: Date
  subscription: UserSubscription
  ksefToken?: string
  ksefSessionId?: string
}

// Use globalThis to persist across requests in Node.js
let users: Map<string, any> = (globalThis as any).usersStore || new Map()
;(globalThis as any).usersStore = users

export function registerUser(
  email: string,
  password: string,
  options: {
    accountType: AccountType
    company?: string
    nip?: string
    firstName?: string
    lastName?: string
    pesel?: string
    plan?: PlanType
  }
) {
  if (users.has(email)) {
    throw new Error('Ten email jest już zarejestrowany')
  }

  const hashedPassword = crypto
    .createHash('sha256')
    .update(password + (process.env.NEXT_PUBLIC_SECRET || 'secret'))
    .digest('hex')

  const userId = crypto.randomUUID()

  const displayName =
    options.accountType === 'private'
      ? `${options.firstName || ''} ${options.lastName || ''}`.trim()
      : options.company || ''

  const user = {
    id: userId,
    email,
    password: hashedPassword,
    accountType: options.accountType,
    company: displayName,
    nip: options.nip || '',
    firstName: options.firstName || '',
    lastName: options.lastName || '',
    pesel: options.pesel || '',
    createdAt: new Date(),
    subscription: {
      plan: options.plan || 'basic',
      invoicesCreatedAfterMigration: 0,
      migrationDate: new Date(),
    } as UserSubscription,
  }

  users.set(email, user)

  return {
    userId,
    email,
    company: user.company,
    nip: user.nip,
    accountType: user.accountType,
    firstName: user.firstName,
    lastName: user.lastName,
    subscription: user.subscription,
  }
}

export function loginUser(email: string, password: string) {
  const user = users.get(email)
  if (!user) {
    throw new Error('Nieprawidłowy email lub hasło')
  }

  const hashedPassword = crypto
    .createHash('sha256')
    .update(password + (process.env.NEXT_PUBLIC_SECRET || 'secret'))
    .digest('hex')

  if (user.password !== hashedPassword) {
    throw new Error('Nieprawidłowy email lub hasło')
  }

  return user
}

export function getUsers() {
  return users
}

export function getUserById(userId: string) {
  for (const [_, user] of users.entries()) {
    if (user.id === userId) {
      return user
    }
  }
  return null
}

export function updateUserSubscription(userId: string, subscription: Partial<UserSubscription>) {
  for (const [email, user] of users.entries()) {
    if (user.id === userId) {
      user.subscription = { ...user.subscription, ...subscription }
      users.set(email, user)
      return user
    }
  }
  return null
}
