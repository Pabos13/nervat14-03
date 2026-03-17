export interface SubscriptionLimitCheck {
  canCreateInvoice: boolean
  currentCount: number
  limit: number
  message?: string
}

export function checkSubscriptionLimit(
  planId: string,
  currentInvoiceCount: number
): SubscriptionLimitCheck {
  // Starter plan: max 5 invoices total (not monthly)
  if (planId === 'starter') {
    const canCreateInvoice = currentInvoiceCount < 5
    return {
      canCreateInvoice,
      currentCount: currentInvoiceCount,
      limit: 5,
      message: !canCreateInvoice 
        ? 'Osiągnąłeś limit 5 faktur dla planu Starter. Przejdź na plan Premium, aby tworzyć nieograniczone faktury.'
        : undefined,
    }
  }
  
  // Premium plan: unlimited invoices
  if (planId === 'premium') {
    return {
      canCreateInvoice: true,
      currentCount: currentInvoiceCount,
      limit: Infinity,
    }
  }

  // Default (free): max 5 invoices for backwards compatibility
  const canCreateInvoice = currentInvoiceCount < 5
  return {
    canCreateInvoice,
    currentCount: currentInvoiceCount,
    limit: 5,
    message: !canCreateInvoice 
      ? 'Osiągnąłeś limit 5 faktur dla planu Starter. Przejdź na plan Premium, aby tworzyć nieograniczone faktury.'
      : undefined,
  }
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

export function getTotalInvoiceCount(invoices: any[]): number {
  // For Starter plan, we count ALL invoices, not just this month
  return invoices.length
}

export function getUpgradeMessage(planId: string): string {
  if (planId === 'starter') {
    return 'Limit 5 faktur osiągnięty. Przejdź na Premium na nieograniczone faktury za 99 zł/msc.'
  }
  if (planId === 'premium') {
    return 'Jesteś na planie Premium - nieograniczone faktury!'
  }
  return 'Wybierz plan, aby kontynuować'
}
