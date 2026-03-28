'use client'

import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import { useInvoices } from '@/app/invoice-context'
import { SUBSCRIPTION_PLANS, PREMIUM_PRICE_PLN } from '@/lib/stripe'
import { FREE_INVOICE_LIMIT, getInvoiceCountTotal } from '@/lib/subscription-limits'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ChevronLeft, CheckCircle, AlertTriangle, CreditCard, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function BillingPage() {
  const router = useRouter()
  const { user, isLoading } = useUser()
  const { invoices } = useInvoices()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-500/30 border-t-blue-500"></div>
      </div>
    )
  }

  if (!user) {
    router.push('/login')
    return null
  }

  const isPremium = user.subscription?.plan === 'premium'
  const planDetails = isPremium ? SUBSCRIPTION_PLANS.premium : SUBSCRIPTION_PLANS.free
  const userInvoices = invoices.filter(inv => inv.userId === user.id)
  const totalInvoices = getInvoiceCountTotal(userInvoices)
  const remainingFree = Math.max(0, FREE_INVOICE_LIMIT - totalInvoices)
  const isAtLimit = !isPremium && totalInvoices >= FREE_INVOICE_LIMIT

  const handlePayPalCheckout = () => {
    // TODO: Replace with your actual PayPal checkout URL
    // This would typically be a PayPal subscription button or redirect to PayPal checkout
    window.open('https://www.paypal.com/paypalme/vatfaktura', '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-4">
          <button
            onClick={() => router.push('/dashboard')}
            className="p-2 hover:bg-blue-500/20 rounded-lg transition-colors text-blue-400 hover:text-blue-300"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Subskrypcja i platnosci
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Current Plan Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Twoj obecny plan</h2>
          <Card className={`p-6 sm:p-8 ${isPremium ? 'bg-gradient-to-r from-cyan-600/10 to-blue-600/10 border-cyan-500/30' : 'bg-slate-800/50 border-slate-700'}`}>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Plan Info */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-2xl font-bold text-white">{planDetails.name}</h3>
                  {isPremium && (
                    <span className="px-2 py-1 bg-cyan-500/20 border border-cyan-500/50 rounded text-xs font-semibold text-cyan-300">
                      AKTYWNY
                    </span>
                  )}
                </div>
                <p className="text-3xl font-bold text-white">
                  {isPremium ? `${PREMIUM_PRICE_PLN} PLN` : '0 PLN'}
                  <span className="text-sm text-slate-400 font-normal ml-2">
                    {isPremium ? '/miesiac' : 'zawsze'}
                  </span>
                </p>
              </div>

              {/* Usage Info */}
              <div className="border-l border-slate-700 pl-6">
                <h4 className="text-sm font-semibold text-slate-300 mb-4">Wykorzystanie faktur</h4>
                <div className="space-y-3">
                  <div>
                    <p className="text-2xl font-bold text-white">
                      {totalInvoices}
                      {!isPremium && <span className="text-slate-400 text-lg">/{FREE_INVOICE_LIMIT}</span>}
                    </p>
                    <p className="text-sm text-slate-400">
                      {isPremium ? 'faktur (bez limitu)' : `wystawionych faktur`}
                    </p>
                  </div>
                  {!isPremium && (
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${isAtLimit ? 'bg-red-500' : 'bg-cyan-500'}`}
                        style={{ width: `${Math.min(100, (totalInvoices / FREE_INVOICE_LIMIT) * 100)}%` }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Status */}
              <div className="border-l border-slate-700 pl-6">
                <h4 className="text-sm font-semibold text-slate-300 mb-4">Status</h4>
                {isPremium ? (
                  <div className="flex items-center gap-2 text-cyan-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Premium aktywny</span>
                  </div>
                ) : isAtLimit ? (
                  <div className="flex items-center gap-2 text-red-400">
                    <AlertTriangle className="w-5 h-5" />
                    <span className="font-semibold">Limit osiagniety</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Pozostalo {remainingFree} darmowych</span>
                  </div>
                )}
              </div>
            </div>
          </Card>
        </div>

        {/* Upgrade Section - show only for free users */}
        {!isPremium && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Wykup Premium</h2>
            <Card className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border-2 border-cyan-500/50 p-6 sm:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Premium - {PREMIUM_PRICE_PLN} PLN/miesiac
                  </h3>
                  <p className="text-slate-300 mb-6">
                    Odblokuj nieograniczona liczbe faktur i wszystkie funkcje premium.
                  </p>
                  <ul className="space-y-3 mb-6">
                    {SUBSCRIPTION_PLANS.premium.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        <span className="text-slate-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col justify-center">
                  <Button
                    onClick={handlePayPalCheckout}
                    className="w-full min-h-[56px] text-lg font-bold bg-[#0070ba] hover:bg-[#005ea6] text-white shadow-lg mb-4"
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Zaplac przez PayPal
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-center text-sm text-slate-400">
                    Bezpieczna platnosc przez PayPal. Mozesz anulowac w kazdej chwili.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Features Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">Dostepne funkcje</h2>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <ul className="grid md:grid-cols-2 gap-4">
              {planDetails.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle className={`w-5 h-5 flex-shrink-0 ${isPremium ? 'text-cyan-400' : 'text-green-400'}`} />
                  <span className="text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Invoice History */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Historia faktur</h2>
          <Card className="bg-slate-800/50 border-slate-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-slate-300">
                  Wszystkich faktur: <span className="font-bold text-white">{totalInvoices}</span>
                </p>
                {!isPremium && (
                  <p className="text-sm text-slate-400">
                    Pozostalo darmowych: {remainingFree}
                  </p>
                )}
              </div>
              <Link href="/dashboard/invoices">
                <Button className={isPremium ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-green-600 hover:bg-green-700'}>
                  Przejdz do faktur
                </Button>
              </Link>
            </div>
          </Card>
        </div>

        {/* PayPal Info */}
        <div className="mt-8 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
          <div className="flex items-start gap-3">
            <CreditCard className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-slate-300">
              <p className="font-semibold text-white mb-1">Platnosci PayPal</p>
              <p>
                Wszystkie platnosci sa przetwarzane bezpiecznie przez PayPal. Mozesz uzyc konta PayPal 
                lub karty kredytowej/debetowej. Subskrypcje mozesz anulowac bezposrednio w PayPal.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
