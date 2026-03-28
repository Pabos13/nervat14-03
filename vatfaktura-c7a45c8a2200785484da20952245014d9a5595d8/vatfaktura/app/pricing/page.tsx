'use client'

import { Button } from '@/components/ui/button'
import { Check, X, CreditCard, Shield, Zap } from 'lucide-react'
import { useUser } from '@/hooks/useUser'
import { SUBSCRIPTION_PLANS, PREMIUM_PRICE_PLN } from '@/lib/stripe'
import { FREE_INVOICE_LIMIT } from '@/lib/subscription-limits'
import Link from 'next/link'
import { AdSenseDisplay728x90, AdSenseDisplayAuto } from '@/components/adsense-banner'

export default function PricingPage() {
  const { user } = useUser()
  const isPremium = user?.subscription?.plan === 'premium'

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
            Prosty cennik
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 px-4">
            Zacznij za darmo, a gdy potrzebujesz wiecej - wykup Premium
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Free Plan */}
          <div className="relative rounded-xl bg-slate-800/50 border border-slate-700 p-6 sm:p-8">
            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{SUBSCRIPTION_PLANS.free.name}</h3>
              <p className="text-slate-400 text-sm">Idealny na start</p>
            </div>

            <div className="mb-6">
              <span className="text-4xl sm:text-5xl font-bold text-white">0 PLN</span>
              <span className="text-slate-400 ml-2 text-sm">zawsze</span>
            </div>

            <Link href={user ? '/dashboard' : '/register'} className="block w-full mb-6">
              <Button 
                variant="outline" 
                className="w-full min-h-[44px] text-sm sm:text-base font-semibold border-slate-600 hover:bg-slate-700 text-white"
              >
                {user ? 'Przejdz do dashboardu' : 'Rozpocznij za darmo'}
              </Button>
            </Link>

            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm"><strong>{FREE_INVOICE_LIMIT} faktur</strong> za darmo</span>
              </li>
              {SUBSCRIPTION_PLANS.free.features.slice(1).map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-slate-300 text-sm">{feature}</span>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <X className="w-5 h-5 text-slate-500 flex-shrink-0" />
                <span className="text-slate-500 text-sm">Nieograniczone faktury</span>
              </li>
            </ul>
          </div>

          {/* Premium Plan */}
          <div className="relative rounded-xl bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-2 border-cyan-500/50 p-6 sm:p-8 shadow-xl shadow-cyan-500/20">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                Najpopularniejszy
              </span>
            </div>

            <div className="mb-6 pt-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{SUBSCRIPTION_PLANS.premium.name}</h3>
              <p className="text-cyan-300 text-sm">Dla profesjonalistow</p>
            </div>

            <div className="mb-6">
              <span className="text-4xl sm:text-5xl font-bold text-white">{PREMIUM_PRICE_PLN} PLN</span>
              <span className="text-cyan-300 ml-2 text-sm">/miesiac</span>
            </div>

            <Link href={isPremium ? '/dashboard' : '/dashboard/billing'} className="block w-full mb-6">
              <Button 
                className="w-full min-h-[44px] text-sm sm:text-base font-semibold bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg"
              >
                {isPremium ? 'Masz Premium' : 'Wykup Premium'}
              </Button>
            </Link>

            <ul className="space-y-3">
              {SUBSCRIPTION_PLANS.premium.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-200 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            {/* PayPal Badge */}
            <div className="mt-6 pt-4 border-t border-cyan-500/30">
              <div className="flex items-center justify-center gap-2 text-sm text-cyan-300">
                <CreditCard className="w-4 h-4" />
                <span>Platnosc przez PayPal</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
            <Shield className="w-8 h-8 text-green-400" />
            <div>
              <p className="text-white font-semibold text-sm">Bezpieczne platnosci</p>
              <p className="text-slate-400 text-xs">PayPal Buyer Protection</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
            <Zap className="w-8 h-8 text-yellow-400" />
            <div>
              <p className="text-white font-semibold text-sm">Natychmiastowy dostep</p>
              <p className="text-slate-400 text-xs">Po oplacie od razu aktywne</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg bg-slate-800/50 border border-slate-700">
            <CreditCard className="w-8 h-8 text-blue-400" />
            <div>
              <p className="text-white font-semibold text-sm">Anuluj kiedy chcesz</p>
              <p className="text-slate-400 text-xs">Bez zobowiazan</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 sm:p-8 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-6">Pytania i odpowiedzi</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-2">Ile faktur moge wystawic za darmo?</h3>
              <p className="text-sm text-slate-300">
                W planie Starter mozesz wystawic <strong>{FREE_INVOICE_LIMIT} faktur calkowicie za darmo</strong>. 
                Po wykorzystaniu limitu, mozesz wykupic Premium aby kontynuowac.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-2">Jak dziala platnosc przez PayPal?</h3>
              <p className="text-sm text-slate-300">
                Po kliknieciu &quot;Wykup Premium&quot; zostaniesz przekierowany do PayPal, gdzie bezpiecznie oplacisz subskrypcje. 
                Mozesz uzyc konta PayPal lub karty kredytowej/debetowej.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-2">Czy moge anulowac subskrypcje?</h3>
              <p className="text-sm text-slate-300">
                Tak! Mozesz anulowac subskrypcje w dowolnym momencie bezposrednio w PayPal. 
                Dostep Premium pozostanie aktywny do konca oplaconego okresu.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base font-semibold text-white mb-2">Co sie stanie z moimi fakturami jesli anuluję?</h3>
              <p className="text-sm text-slate-300">
                Wszystkie Twoje faktury pozostana w systemie i bedziesz mogl je przegladac. 
                Jednak bez aktywnego Premium nie bedziesz mogl tworzyc nowych faktur ponad darmowy limit.
              </p>
            </div>
          </div>
        </div>

        {/* AdSense */}
        <div className="mt-12">
          <AdSenseDisplay728x90 />
        </div>

        {/* Footer CTA */}
        {!user && (
          <div className="text-center mt-12">
            <p className="text-slate-300 mb-4">Gotowy zaczac?</p>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white h-12 px-8 text-lg font-semibold">
                Zaloz konto za darmo
              </Button>
            </Link>
          </div>
        )}

        <div className="mt-12">
          <AdSenseDisplayAuto />
        </div>
      </div>
    </div>
  )
}
