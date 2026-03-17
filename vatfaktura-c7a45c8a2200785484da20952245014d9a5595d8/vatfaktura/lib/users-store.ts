import crypto from 'crypto'

export type AccountType = 'private' | 'business'
export type PlanType = 'starter' | 'premium'

export interface UserSubscription {
  plan: PlanType
  stripeCustomerId?: string
  stripeSubscriptionId?: string
  currentPeriodStart?: Date
  currentPeriodEnd?: Date
  invoicesUsedThisMonth: number
  // Lemonsquare subscription fields
  lemonsquareCustomerId?: string
  lemonsquareSubscriptionId?: string
  lemonsquareSubscriptionStatus?: 'active' | 'paused' | 'cancelled' | 'expired' | 'past_due'
  lemonsquareCurrentPeriodEnd?: number
  invoicesCreatedTotal: number // Total count of invoices created (never resets for Starter limit check)
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
      plan: 'starter',
      invoicesUsedThisMonth: 0,
      invoicesCreatedTotal: 0,
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

export function getUser(userId: string) {
  for (const [_, user] of users.entries()) {
    if (user.id === userId) {
      return user
    }
  }
  return null
}

export function updateUser(userId: string, updates: Partial<User>) {
  for (const [email, user] of users.entries()) {
    if (user.id === userId) {
      const updatedUser = { ...user, ...updates }
      users.set(email, updatedUser)
      return updatedUser
    }
  }
  return null
}

export function getUsersStore() {
  return {
    getUser,
    updateUser,
    getUsers,
    registerUser,
    loginUser,
    updateUserSubscription,
  }
}
