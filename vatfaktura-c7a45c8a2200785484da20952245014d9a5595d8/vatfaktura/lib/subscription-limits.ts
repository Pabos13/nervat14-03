export interface SubscriptionLimitCheck {
  canCreateInvoice: boolean
  currentCount: number
  limit: number
  message?: string
  planType?: 'basic' | 'premium'
}

// Plan limits configuration
const PLAN_LIMITS = {
  basic: 5, // 5 free invoices per account lifetime
  premium: Infinity, // Unlimited invoices
}

export function checkSubscriptionLimit(
  planType: 'basic' | 'premium',
  invoicesCreatedAfterMigration: number
): SubscriptionLimitCheck {
  const limit = PLAN_LIMITS[planType]
  const canCreateInvoice = invoicesCreatedAfterMigration < limit

  let message: string | undefined
  if (planType === 'basic' && !canCreateInvoice) {
    message = `Limit 5 bezpłatnych faktur wyczerpany. Przejdź na plan Premium, aby utworzyć nieograniczone faktury.`
  }

  return {
    canCreateInvoice,
    currentCount: invoicesCreatedAfterMigration,
    limit,
    message,
    planType,
  }
}

export function getInvoiceCountAfterMigration(
  invoices: any[],
  migrationDate: Date
): number {
  return invoices.filter(invoice => {
    const invoiceDate = new Date(invoice.issueDate || invoice.createdAt)
    return invoiceDate >= migrationDate
  }).length
}

export function getUpgradeMessage(planType: 'basic' | 'premium'): string {
  if (planType === 'premium') {
    return 'Masz dostęp do wszystkich funkcji Premium!'
  }
  return 'Upgrade do planu Premium aby uzyskać nieograniczone faktury i dodatkowe funkcje.'
}
