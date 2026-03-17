'use client'

import { Button } from '@/components/ui/button'
import { useUser } from '@/hooks/useUser'
import { PRICING_PLANS } from '@/lib/lemon-squeezy'
import { PricingCard } from '@/components/pricing-card'
import Link from 'next/link'
import { useState } from 'react'
import { AdSenseDisplay728x90, AdSenseDisplayAuto } from '@/components/adsense-banner'

export default function PricingPage() {
  const { user } = useUser()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleBasicPlan = () => {
    if (!user) {
      // Niezalogowany - idź do rejestracji
      window.location.href = '/register'
      return
    }
    // Zalogowany - już ma Podstawowy, nic nie rób
  }

  const handleUpgradeToPremium = async () => {
    if (!user) {
      // Niezalogowany - idź do checkoutu z emailem
      window.location.href = '/register?plan=premium'
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/lemon-squeezy/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          plan: 'premium',
          email: user.email,
          userId: user.id
        }),
      })

      const data = await response.json()
      
      if (!response.ok) {
        console.error('[v0] Checkout error:', data.error)
        throw new Error(data.error || 'Failed to create checkout session')
      }

      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl
      }
    } catch (err) {
      console.error('[v0] Error:', err)
      setError(err instanceof Error ? err.message : 'An error occurred. Make sure Lemon Squeezy environment variables are configured.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 px-3 sm:px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full">
            <span className="text-xs sm:text-sm font-semibold text-blue-300">NOWY MODEL CENOWY</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
            Prosty i przejrzysty cennik
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 px-4">
            Zacznij z planem Podstawowym (5 faktur za darmo), a następnie przejdź na Premium dla nieograniczonych możliwości.
          </p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-center text-red-300">
            {error}
          </div>
        )}

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-6 md:gap-8 mb-8 sm:mb-12 max-w-4xl mx-auto">
          <PricingCard
            name={PRICING_PLANS.BASIC.name}
            price={PRICING_PLANS.BASIC.price}
            description={PRICING_PLANS.BASIC.description}
            features={PRICING_PLANS.BASIC.features}
            isPurchased={user?.subscription?.plan === 'basic'}
            onSelectPlan={handleBasicPlan}
          />
          <PricingCard
            name={PRICING_PLANS.PREMIUM.name}
            price={PRICING_PLANS.PREMIUM.price}
            description={PRICING_PLANS.PREMIUM.description}
            features={PRICING_PLANS.PREMIUM.features}
            isPopular={true}
            isPurchased={user?.subscription?.plan === 'premium' && user?.subscription?.subscriptionStatus === 'active'}
            onSelectPlan={handleUpgradeToPremium}
          />
        </div>

        {/* FAQ / Info Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">Pytania i odpowiedzi</h2>
          
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Co to jest plan Podstawowy?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Plan Podstawowy to idealne rozwiązanie dla nowych użytkowników. Otrzymasz 5 bezpłatnych faktur, aby przetestować aplikację. Licznik resetuje się dla każdego użytkownika niezależnie.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Co mogę zrobić po wyczerpaniu 5 faktur?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Po wyczerpaniu limitu możesz przejść na plan Premium za 99 PLN/miesiąc. Dostajesz wtedy nieograniczoną liczbę faktur i dostęp do wszystkich funkcji.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Czy mogę anulować Premium w każdej chwili?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Tak! Możesz anulować subskrypcję w dowolnym momencie bez kar. Po anulowaniu powrócisz do planu Podstawowego z 5 bezpłatnymi faktury z tego momentu.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Jakie są moje faktury sprzed zmiany cen?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Faktury utworzone przed zmianą modelu cenowego nie liczą się do limitu 5 faktur. Liczy się tylko liczba faktur od dzisiaj.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Czy mogę korzystać z KSeF na obu planach?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Tak! Integracja z KSeF (Krajowy System e-Faktur) jest dostępna na obu planach - zarówno Podstawowym jak i Premium.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Jak portal się finansuje?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Zarabiamy z dwóch źródeł: prowizji ze subskrypcji Premium (99 PLN/miesiąc) oraz prowizji z linków partnerskich (Wise, Stripe, Google Workspace). <Link href="/#partners" className="text-cyan-400 hover:text-cyan-300 transition">Poznaj naszych partnerów →</Link>
              </p>
            </div>
          </div>
        </div>

        {/* AdSense - baner przed CTA */}
        <div className="mt-12">
          <AdSenseDisplay728x90 />
        </div>

        {/* Footer CTA */}
        {!user && (
          <div className="text-center mt-12">
            <p className="text-slate-300 mb-4">Gotowy zacząć za darmo?</p>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white h-12 px-8 text-lg font-semibold">
                Zarejestruj się za darmo
              </Button>
            </Link>
          </div>
        )}
        
        {user && user.subscription?.plan === 'basic' && (
          <div className="text-center mt-12">
            <p className="text-slate-300 mb-4">Chcesz wybrać Premium?</p>
            <Button
              onClick={handleUpgradeToPremium}
              disabled={isLoading}
              className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white h-12 px-8 text-lg font-semibold disabled:opacity-50"
            >
              {isLoading ? 'Ładowanie...' : 'Przejdź na Premium'}
            </Button>
          </div>
        )}

        {/* AdSense - baner na dole */}
        <div className="mt-12">
          <AdSenseDisplayAuto />
        </div>
      </div>
    </div>
  )
}
