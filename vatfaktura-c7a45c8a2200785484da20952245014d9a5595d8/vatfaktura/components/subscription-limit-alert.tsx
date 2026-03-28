import { AlertCircle, ArrowRight, Crown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FREE_INVOICE_LIMIT } from '@/lib/subscription-limits'
import { PREMIUM_PRICE_PLN } from '@/lib/stripe'

interface SubscriptionLimitAlertProps {
  canCreateInvoice: boolean
  currentCount: number
  limit: number
  message?: string
  planId: string
  isPremium?: boolean
}

export function SubscriptionLimitAlert({
  canCreateInvoice,
  currentCount,
  limit,
  message,
  planId,
  isPremium = false,
}: SubscriptionLimitAlertProps) {
  // Premium users - no alert needed
  if (isPremium || planId === 'premium') {
    return null
  }

  // Free users who still have invoices left and not near limit
  if (canCreateInvoice && currentCount < limit - 1) {
    return null
  }

  const isAtLimit = !canCreateInvoice
  const isNearLimit = !isAtLimit && currentCount >= limit - 1

  return (
    <div
      className={`rounded-lg p-4 mb-6 flex flex-col sm:flex-row items-start gap-4 ${
        isAtLimit
          ? 'bg-red-500/10 border border-red-500/30'
          : 'bg-yellow-500/10 border border-yellow-500/30'
      }`}
    >
      <AlertCircle
        className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
          isAtLimit ? 'text-red-400' : 'text-yellow-400'
        }`}
      />
      <div className="flex-1">
        <p
          className={`font-semibold mb-2 ${
            isAtLimit ? 'text-red-300' : 'text-yellow-300'
          }`}
        >
          {isAtLimit
            ? 'Osiagnales limit darmowych faktur'
            : `Pozostala ${limit - currentCount} darmowa faktura`}
        </p>
        <p className={`text-sm ${isAtLimit ? 'text-red-200/80' : 'text-yellow-200/80'}`}>
          {isAtLimit
            ? `Wykorzystales ${FREE_INVOICE_LIMIT} darmowych faktur. Wykup Premium za ${99} PLN/msc aby kontynuowac.`
            : `Wykorzystano ${currentCount} z ${FREE_INVOICE_LIMIT} darmowych faktur.`}
        </p>
      </div>
      <Link href="/dashboard/billing" className="flex-shrink-0 w-full sm:w-auto">
        <Button
          size="sm"
          className={`w-full sm:w-auto ${
            isAtLimit
              ? 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500'
              : 'bg-yellow-500 hover:bg-yellow-600 text-black'
          }`}
        >
          <Crown className="w-4 h-4 mr-2" />
          {isAtLimit ? 'Wykup Premium' : 'Zobacz Premium'}
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </Link>
    </div>
  )
}


