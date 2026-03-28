export interface SubscriptionLimitCheck {
  canCreateInvoice: boolean
  currentCount: number
  limit: number
  message?: string
  isPremium: boolean
}

export const FREE_INVOICE_LIMIT = 5

export function checkSubscriptionLimit(
  planId: string,
  currentInvoiceCount: number
): SubscriptionLimitCheck {
  const isPremium = planId === 'premium'
  
  // Premium users have unlimited invoices
  if (isPremium) {
    return {
      canCreateInvoice: true,
      currentCount: currentInvoiceCount,
      limit: Infinity,
      isPremium: true,
    }
  }
  
  // Free users: 5 invoices limit (total, not monthly)
  const canCreate = currentInvoiceCount < FREE_INVOICE_LIMIT
  
  return {
    canCreateInvoice: canCreate,
    currentCount: currentInvoiceCount,
    limit: FREE_INVOICE_LIMIT,
    isPremium: false,
    message: canCreate 
      ? `Wykorzystano ${currentInvoiceCount} z ${FREE_INVOICE_LIMIT} darmowych faktur`
      : 'Osiągnąłeś limit 5 darmowych faktur. Wykup Premium aby kontynuować.',
  }
}

export function getInvoiceCountTotal(invoices: any[]): number {
  return invoices.length
}

export function getInvoiceCountThisMonth(invoices: any[]): number {
  const now = new Date()
  const currentMonth = now.getMonth()
  const currentYear = now.getFullYear()

  return invoices.filter(invoice => {
    const invoiceDate = new Date(invoice.issueDate)
    return invoiceDate.getMonth() === currentMonth && invoiceDate.getFullYear() === currentYear
  }).length
}

export function getUpgradeMessage(planId: string): string {
  if (planId === 'premium') {
    return 'Masz aktywny plan Premium - nieograniczone faktury!'
  }
  return 'Wykup Premium za 99 zł/msc aby tworzyć nieograniczoną liczbę faktur.'
}
