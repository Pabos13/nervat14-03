'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, X, Crown, AlertCircle } from 'lucide-react'
import { useUser } from '@/hooks/useUser'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface UpgradeModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => Promise<void>
  isLoading: boolean
}

function UpgradeModal({ isOpen, onClose, onConfirm, isLoading }: UpgradeModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-md w-full p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-600 to-yellow-500 flex items-center justify-center">
            <Crown className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">Przejdź na Premium</h2>
            <p className="text-sm text-slate-400">Nieograniczone faktury teraz</p>
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-lg p-4 mb-6 border border-slate-700">
          <div className="text-3xl font-bold text-white mb-2">99 zł<span className="text-lg text-slate-400">/msc</span></div>
          <p className="text-sm text-slate-300">+ 14 dni darmowej próby</p>
        </div>

        <ul className="space-y-3 mb-6">
          <li className="flex items-center gap-2 text-slate-300 text-sm">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
            Nieograniczone faktury
          </li>
          <li className="flex items-center gap-2 text-slate-300 text-sm">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
            Integracja z KSeF
          </li>
          <li className="flex items-center gap-2 text-slate-300 text-sm">
            <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
            Wszystkie funkcje
          </li>
        </ul>

        <div className="space-y-3">
          <Button
            onClick={onConfirm}
            disabled={isLoading}
            className="w-full min-h-[44px] bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white font-semibold shadow-lg shadow-yellow-500/30"
          >
            {isLoading ? 'Przetwarzanie...' : 'Przejdź do płatności'}
          </Button>
          <Button
            onClick={onClose}
            disabled={isLoading}
            variant="outline"
            className="w-full min-h-[44px] border-slate-600 text-slate-300 hover:bg-slate-800"
          >
            Anuluj
          </Button>
        </div>

        <p className="text-xs text-slate-500 text-center mt-4">
          Możesz anulować subskrypcję w każdej chwili
        </p>
      </div>
    </div>
  )
}

export default function PricingPage() {
  const { user, isLoading: userLoading } = useUser()
  const router = useRouter()
  const [isUpgradeModalOpen, setIsUpgradeModalOpen] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      price: '0 zł',
      period: 'zawsze',
      description: 'Idealne do testowania',
      cta: 'Twój plan',
      badge: 'AKTUALNIE',
      features: [
        { text: '5 faktur maksymalnie', included: true },
        { text: 'Podstawowe szablony', included: true },
        { text: 'Export do PDF', included: true },
        { text: 'KSeF integracja', included: false },
        { text: 'Nieograniczone faktury', included: false },
        { text: 'Wsparcie priorytetowe', included: false },
      ],
      highlighted: false,
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '99 zł',
      period: '/msc',
      description: '14 dni darmowego okresu próby',
      cta: 'Przejdź na Premium',
      badge: '14 DNI ZA DARMO',
      features: [
        { text: 'Nieograniczone faktury', included: true },
        { text: 'Wszystkie szablony', included: true },
        { text: 'Export do PDF', included: true },
        { text: 'KSeF integracja', included: true },
        { text: 'Wsparcie priorytetowe', included: true },
        { text: 'Brak limitów', included: true },
      ],
      highlighted: true,
    },
  ]

  const handleUpgrade = async () => {
    if (!user) {
      router.push('/register')
      return
    }

    setIsProcessing(true)
    try {
      console.log('[v0] Starting upgrade process for user:', user.id)
      const response = await fetch('/api/lemonsquare/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user.id,
          email: user.email,
          returnUrl: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard`,
        }),
      })

      console.log('[v0] Checkout response status:', response.status)
      
      if (!response.ok) {
        const errorData = await response.json()
        console.error('[v0] Checkout error:', errorData)
        throw new Error(errorData.error || 'Checkout failed')
      }

      const data = await response.json()
      console.log('[v0] Checkout data received:', data)
      
      if (!data.checkoutUrl) {
        throw new Error('No checkout URL returned from server')
      }
      
      console.log('[v0] Redirecting to:', data.checkoutUrl)
      window.location.href = data.checkoutUrl
    } catch (error) {
      console.error('[v0] Upgrade error:', error)
      alert('Nie udało się przejść do płatności. Spróbuj ponownie. Error: ' + (error instanceof Error ? error.message : 'Unknown error'))
    } finally {
      setIsProcessing(false)
      setIsUpgradeModalOpen(false)
    }
  }

  if (userLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-500/30 border-t-blue-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 px-3 sm:px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full">
            <span className="text-xs sm:text-sm font-semibold text-blue-300">PROSTE PLANY CENOWE</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
            Wybierz plan dla Ciebie
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 px-4">
            Zacznij za darmo i przejdź na premium, gdy będziesz gotowy
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-xl transition-all duration-300 ${
                plan.highlighted
                  ? 'md:scale-105 bg-gradient-to-b from-slate-800 to-slate-900 border-2 border-yellow-500/50 shadow-2xl shadow-yellow-500/20'
                  : 'bg-slate-800/50 border border-slate-700 hover:border-slate-600'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-8">
                {/* Plan Name */}
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-400 mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-6 sm:mb-8">
                  <span className="text-4xl sm:text-5xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400 ml-2 text-sm">{plan.period}</span>
                </div>

                {/* CTA Button */}
                {plan.id === 'starter' && user?.plan === 'starter' ? (
                  <Button disabled className="w-full min-h-[44px] text-sm font-semibold bg-slate-700 text-slate-300">
                    Twój obecny plan
                  </Button>
                ) : plan.id === 'premium' && user?.plan === 'premium' ? (
                  <Button disabled className="w-full min-h-[44px] text-sm font-semibold bg-slate-700 text-slate-300">
                    Jesteś na Premium
                  </Button>
                ) : plan.id === 'premium' && user ? (
                  <button
                    onClick={() => setIsUpgradeModalOpen(true)}
                    className="w-full min-h-[44px] text-sm font-semibold bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white rounded-lg transition-all shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50"
                  >
                    Przejdź na Premium
                  </button>
                ) : plan.id === 'premium' && !user ? (
                  <Link href="/register" className="block">
                    <Button className="w-full min-h-[44px] text-sm font-semibold bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-700 hover:to-yellow-600 text-white">
                      Załóż konto
                    </Button>
                  </Link>
                ) : (
                  <Link href={user ? '/dashboard' : '/register'} className="block">
                    <Button className="w-full min-h-[44px] text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white">
                      {user ? 'Przejdź do dashboardu' : 'Załóż konto'}
                    </Button>
                  </Link>
                )}

                {/* Features */}
                <ul className="space-y-4 mt-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-slate-600 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-slate-200' : 'text-slate-500'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Info Banner */}
        {user?.plan === 'starter' && (user?.subscription?.invoicesCreatedTotal || 0) >= 4 && (
          <div className="bg-gradient-to-r from-yellow-900/40 to-orange-900/40 border border-yellow-500/30 rounded-lg p-4 sm:p-6 mb-8 flex gap-4">
            <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-300 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold text-sm sm:text-base mb-2">
                Osiągnąłeś limit faktur na planie Starter!
              </p>
              <p className="text-yellow-200 text-xs sm:text-sm mb-3">
                Aby utworzyć więcej faktur, przejdź na plan Premium i uzyskaj nieograniczony dostęp.
              </p>
              <button
                onClick={() => setIsUpgradeModalOpen(true)}
                className="text-yellow-300 hover:text-yellow-200 font-semibold text-sm underline"
              >
                Przejdź na Premium teraz →
              </button>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 sm:p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Pytania i odpowiedzi</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                Jaka jest różnica między planami?
              </h3>
              <p className="text-sm text-slate-300">
                Plan Starter pozwala na utworzenie 5 faktur i zawiera podstawowe funkcje. Premium ma limit 99 zł/msc i oferuje nieograniczone faktury oraz dostęp do wszystkich funkcji jak KSeF.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                Czy mogę zmienić plan lub anulować?
              </h3>
              <p className="text-sm text-slate-300">
                Tak, możesz anulować premium w każdej chwili bez żadnych kar. Zmiana planu jest natychmiastowa.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                Czy faktury są chronione?
              </h3>
              <p className="text-sm text-slate-300">
                Oczywiście. Twoje faktury są przechowywane bezpiecznie i są dostępne wyłącznie dla Ciebie.
              </p>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                Co się stanie po 14 dniach próby premium?
              </h3>
              <p className="text-sm text-slate-300">
                Po upływie 14 dni darmowej próby, Twoja karta zostanie obciążona kwotą 99 zł. Możesz anulować subskrypcję w dowolnym momencie, zanim to nastąpi.
              </p>
            </div>
          </div>
        </div>
      </div>

      <UpgradeModal
        isOpen={isUpgradeModalOpen}
        onClose={() => setIsUpgradeModalOpen(false)}
        onConfirm={handleUpgrade}
        isLoading={isProcessing}
      />
    </div>
  )
}
