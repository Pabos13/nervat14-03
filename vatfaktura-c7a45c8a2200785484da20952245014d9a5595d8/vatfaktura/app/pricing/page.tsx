'use client'

import { Button } from '@/components/ui/button'
import { Check, X, Zap, Building2, Calculator, FileText, Users, BookOpen, MessageSquare, BarChart3, Star } from 'lucide-react'
import { useUser } from '@/hooks/useUser'
import Link from 'next/link'
import { AdSenseDisplay728x90, AdSenseDisplayAuto } from '@/components/adsense-banner'

export default function PricingPage() {
  const { user } = useUser()

  const plans = [
    {
      id: 'free',
      name: 'Darmowy',
      price: '0 PLN',
      period: 'zawsze',
      description: 'Podstawowe narzędzia do fakturowania i rozliczeń',
      popular: false,
      features: [
        { text: 'Nieograniczone faktury VAT', included: true },
        { text: 'Eksport do PDF', included: true },
        { text: 'Integracja kSEF', included: true },
        { text: 'Rozliczenie PIT-37', included: true },
        { text: 'Podstawowe formularze ZUS', included: true },
        { text: 'Wyszukiwarka urzędów', included: true },
        { text: 'Wyszukiwarka porad prawnych', included: true },
        { text: 'Terminarz urzędowy', included: true },
        { text: 'Kalkulator podatków (podstawowy)', included: true },
        { text: 'Asystent AI', included: false },
        { text: 'Generator dokumentów', included: false },
        { text: 'Dashboard finansowy', included: false },
        { text: 'Akademia - wszystkie kursy', included: false },
        { text: 'Priorytetowe wsparcie', included: false },
      ],
      cta: 'Rozpocznij za darmo',
      ctaVariant: 'outline' as const,
    },
    {
      id: 'pro',
      name: 'Pro',
      price: '29 PLN',
      period: '/miesiąc',
      description: 'Pełny dostęp do wszystkich narzędzi i funkcji',
      popular: true,
      features: [
        { text: 'Wszystko z planu Darmowego', included: true },
        { text: 'Asystent AI 24/7', included: true },
        { text: 'Generator dokumentów (umowy, regulaminy)', included: true },
        { text: 'Dashboard finansowy z analizą', included: true },
        { text: 'Akademia - wszystkie kursy', included: true },
        { text: 'Kalkulator kosztów biznesu', included: true },
        { text: 'Kalkulator wynagrodzeń', included: true },
        { text: 'Katalog specjalistów - kontakt bezpośredni', included: true },
        { text: 'Rozliczenie wszystkich PIT-ów', included: true },
        { text: 'Wszystkie formularze ZUS', included: true },
        { text: 'Eksport do CSV/Excel', included: true },
        { text: 'Priorytetowe wsparcie email', included: true },
        { text: 'Brak reklam', included: true },
        { text: 'Dedykowany opiekun klienta', included: false },
      ],
      cta: 'Wybierz Pro',
      ctaVariant: 'default' as const,
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: '99 PLN',
      period: '/miesiąc',
      description: 'Dla firm z wieloma pracownikami i zaawansowanymi potrzebami',
      popular: false,
      features: [
        { text: 'Wszystko z planu Pro', included: true },
        { text: 'Do 10 użytkowników w zespole', included: true },
        { text: 'Dedykowany opiekun klienta', included: true },
        { text: 'Konsultacje z doradcą podatkowym', included: true },
        { text: 'API dostęp do integracji', included: true },
        { text: 'Niestandardowe szablony faktur', included: true },
        { text: 'Raporty finansowe na żądanie', included: true },
        { text: 'Szkolenia dla zespołu', included: true },
        { text: 'SLA 99.9% uptime', included: true },
        { text: 'Wsparcie telefoniczne 24/7', included: true },
        { text: 'Onboarding dedykowany', included: true },
        { text: 'Fakturowanie zbiorcze', included: true },
        { text: 'Integracja z systemami ERP', included: true },
        { text: 'White-label branding', included: true },
      ],
      cta: 'Kontakt z nami',
      ctaVariant: 'outline' as const,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-8 sm:py-12 px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 px-3 sm:px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full">
            <span className="text-xs sm:text-sm font-semibold text-blue-300">CENNIK 2025</span>
          </div>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-2">
            Wybierz plan dla siebie
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 px-4 max-w-2xl mx-auto">
            Zacznij za darmo z podstawowymi funkcjami. Uaktualnij, gdy potrzebujesz więcej narzędzi i wsparcia.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
            <FileText className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <p className="text-xs sm:text-sm text-slate-300">Faktury VAT</p>
          </div>
          <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
            <Calculator className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-xs sm:text-sm text-slate-300">Kalkulatory</p>
          </div>
          <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
            <Building2 className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <p className="text-xs sm:text-sm text-slate-300">Wyszukiwarka urzędów</p>
          </div>
          <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-slate-700">
            <MessageSquare className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <p className="text-xs sm:text-sm text-slate-300">Asystent AI</p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-xl transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-b from-blue-900/50 to-slate-800 border-2 border-blue-500 shadow-xl shadow-blue-500/20 scale-105 z-10' 
                  : 'bg-slate-800 border border-slate-700 hover:border-slate-600'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    NAJPOPULARNIEJSZY
                  </div>
                </div>
              )}
              
              <div className="p-4 sm:p-6 md:p-8">
                {/* Plan Name */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-4">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className={`text-3xl sm:text-4xl md:text-5xl font-bold ${plan.popular ? 'text-blue-400' : 'text-white'}`}>
                    {plan.price}
                  </span>
                  <span className="text-slate-400 ml-2 text-sm">{plan.period}</span>
                </div>

                {/* CTA Button */}
                <Link href={user ? '/dashboard' : '/register'} className="block w-full mb-6">
                  <Button 
                    variant={plan.ctaVariant}
                    className={`w-full min-h-[44px] text-sm font-semibold ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white border-0' 
                        : plan.ctaVariant === 'outline' 
                          ? 'border-slate-600 hover:bg-slate-700 text-white'
                          : ''
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>

                {/* Features */}
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 sm:gap-3">
                      {feature.included ? (
                        <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={`text-xs sm:text-sm ${feature.included ? 'text-slate-300' : 'text-slate-500'}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison note */}
        <div className="text-center mb-8">
          <p className="text-slate-400 text-sm">
            Wszystkie ceny są netto. Dla firm VAT jest odliczany.
          </p>
        </div>

        {/* FAQ / Info Section */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6 md:p-8 max-w-3xl mx-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 sm:mb-6">Pytania i odpowiedzi</h2>
          
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Co zawiera plan Darmowy?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Plan Darmowy zawiera podstawowe narzędzia do fakturowania: nieograniczone faktury VAT, eksport PDF, integrację z kSEF, rozliczenie PIT-37, wyszukiwarki urzędów i porad prawnych oraz terminarz. Idealne na start.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Czy mogę zmienić plan w dowolnym momencie?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Tak! Możesz uaktualnić lub zmienić plan w dowolnym momencie. Przy uaktualnieniu zostaniesz obciążony proporcjonalnie za pozostały okres.
              </p>
            </div>
            
            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Jakie metody płatności akceptujecie?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Akceptujemy karty kredytowe/debetowe (Visa, Mastercard), przelewy bankowe, BLIK oraz PayPal. Faktury VAT wystawiamy automatycznie.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Czy mogę anulować subskrypcję?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Oczywiście. Możesz anulować subskrypcję w dowolnym momencie bez żadnych opłat. Twoje dane pozostaną dostępne do końca opłaconego okresu.
              </p>
            </div>

            <div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-2">Jak portal się finansuje?</h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Oprócz subskrypcji Pro i Enterprise, zarabiamy prowizje z linków partnerskich (Wise, Stripe, Google Workspace). <Link href="/#partners" className="text-cyan-400 hover:text-cyan-300 transition">Poznaj naszych partnerów</Link>
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
            <p className="text-slate-300 mb-4">Nie wiesz który plan wybrać? Zacznij za darmo!</p>
            <Link href="/register">
              <Button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white h-12 px-8 text-lg font-semibold">
                Załóż darmowe konto
              </Button>
            </Link>
          </div>
        )}

        {/* AdSense */}
        <div className="mt-12">
          <AdSenseDisplayAuto />
        </div>
      </div>
    </div>
  )
}
