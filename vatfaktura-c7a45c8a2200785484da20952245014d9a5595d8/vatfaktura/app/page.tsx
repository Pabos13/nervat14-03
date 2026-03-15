'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import { useLanguage } from '@/hooks/use-language'
import { t } from '@/lib/i18n/translations'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { CheckCircle, Zap, Shield, TrendingUp, Clock, FileText, Users, Star, Award, LogIn, Edit3, Download, Building2, ArrowRight, Calculator } from 'lucide-react'
import Link from 'next/link'
import { MobileNav } from '@/components/mobile-nav'
import { HeaderMenu } from '@/components/header-menu'
import { LanguageSwitcher } from '@/components/language-switcher'
import { UkrainianBanner } from '@/components/ukrainian-banner'
import { PartnerPopup } from '@/components/partner-popup'
import { SupportBanner } from '@/components/support-banner'
import { AdSenseDisplay728x90, AdSenseDisplay300x250, AdSenseDisplayAuto } from '@/components/adsense-banner'
import { NewsletterSignup } from '@/components/newsletter-signup'

export default function Home() {
  const router = useRouter()
  const { user, isLoading } = useUser()
  const { language } = useLanguage()

  useEffect(() => {
    if (!isLoading && user) {
      router.push('/dashboard')
    }
  }, [user, isLoading, router])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Support Banner */}
      <SupportBanner />

      {/* Ukrainian Banner */}
      <UkrainianBanner />

      {/* Partner Popup */}
      <PartnerPopup />

      {/* Animated background elements - optimized for mobile */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-0"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="hidden sm:block absolute -bottom-8 left-1/2 w-32 h-32 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 flex items-center justify-between min-h-[56px] sm:min-h-[64px]">
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50 flex-shrink-0">
                <FileText className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent truncate">VAT Faktura</h1>
            </div>
            <nav className="hidden sm:flex items-center gap-1 md:gap-1.5">
              {/* Expandable Menu */}
              <HeaderMenu />

              {/* Other nav links */}
              <Link href="/faq" className="px-3 py-2 text-sm font-medium text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200">
                {t('nav.faq', language)}
              </Link>
              <Link href="/blog" className="px-3 py-2 text-sm font-medium text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200">
                {t('nav.blog', language)}
              </Link>

              {/* Divider */}
              <div className="w-px h-5 bg-white/15 mx-1" />

              <Link href="/pricing" className="px-3 py-2 text-sm font-medium text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200">
                {t('nav.pricing', language)}
              </Link>
              <Link href="/#partners" className="px-3 py-2 text-sm font-medium text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200">
                {t('nav.partners', language)}
              </Link>

              {/* Divider */}
              <div className="w-px h-5 bg-white/15 mx-1" />

              {/* Language Switcher */}
              <LanguageSwitcher />

              <Link href="/login">
                <Button variant="outline" className="h-9 px-4 text-sm border-blue-500/40 hover:bg-blue-500/10 text-blue-300">
                  {t('nav.login', language)}
                </Button>
              </Link>
              <Link href="/register">
                <Button className="h-9 px-4 text-sm bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 shadow-lg shadow-green-500/30 font-semibold">
                  {t('nav.register', language)}
                </Button>
              </Link>
            </nav>
            <MobileNav />
          </div>
        </header>

        {/* Hero */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-16 sm:py-24 md:py-32 lg:py-40 relative">
          <div className="text-center space-y-8 sm:space-y-10 md:space-y-12">
            {/* Free Badge */}
            <div className="inline-block px-4 sm:px-5 py-2 sm:py-3 bg-gradient-to-r from-green-500/30 to-cyan-500/30 border border-green-400/60 rounded-full backdrop-blur-sm hover:border-green-300/80 transition-all duration-300">
              <span className="text-xs sm:text-sm font-bold tracking-wider text-green-300 uppercase">{t('home.badge', language)}</span>
            </div>
            
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight px-2 tracking-tight">
                <span className="bg-gradient-to-r from-green-400 via-cyan-300 to-green-300 bg-clip-text text-transparent drop-shadow-lg">
                  {t('home.heroTitle1', language)}
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
                  {t('home.heroTitle2', language)}
                </span>
                <br />
                <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white/80 font-bold">{t('home.heroTitle3', language)}</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-200/80 max-w-3xl mx-auto leading-relaxed px-4 font-light">
                {t('home.heroDesc', language)}
              </p>
            </div>
            
            {/* Trust Signals */}
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 max-w-2xl mx-auto py-4 sm:py-6">
              {[
                { textKey: 'home.signalsItem1', icon: '∞' },
                { textKey: 'home.signalsItem2', icon: '∞' },
                { textKey: 'home.signalsItem3', icon: '💳' },
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col items-center gap-1 p-2 sm:p-3 rounded-lg bg-blue-500/10 border border-blue-400/30 hover:bg-blue-500/15 hover:border-blue-300/50 transition-all duration-300">
                  <span className="text-lg sm:text-2xl">{item.icon}</span>
                  <span className="text-xs sm:text-sm text-blue-200 font-medium text-center">{t(item.textKey, language)}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center pt-4 sm:pt-8 px-3">
              <Link href="/register">
                <Button className="min-h-[50px] sm:min-h-[52px] px-8 sm:px-10 md:px-12 lg:px-14 py-3 text-base sm:text-lg font-bold bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 shadow-xl shadow-green-500/50 hover:shadow-green-500/80 transition-all duration-300 transform hover:scale-110 active:scale-95 text-white">
                  {t('home.cta.start', language)}
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" className="min-h-[50px] sm:min-h-[52px] px-8 sm:px-10 md:px-12 lg:px-14 py-3 text-base sm:text-lg font-bold border-2 border-blue-400/60 hover:border-blue-300 hover:bg-blue-500/20 text-blue-100 hover:text-blue-50 transition-all duration-300 transform hover:scale-110 active:scale-95 backdrop-blur-sm">
                  {t('home.cta.login', language)}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Urzędy i Porady section */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20 sm:py-28 md:py-32">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-cyan-600/15 to-purple-600/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative overflow-hidden rounded-2xl border-2 border-cyan-500/30 bg-gradient-to-br from-blue-900/20 via-slate-900/40 to-cyan-900/20 backdrop-blur-xl p-8 sm:p-12 md:p-16 group-hover:border-cyan-400/50 transition-all duration-500">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-1.5 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full"></div>
                      <span className="text-xs sm:text-sm font-bold tracking-widest text-cyan-300 uppercase">Nowe narzędzie</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-300 bg-clip-text text-transparent mb-4 leading-tight">
                      Urzędy i Porady Prawne
                    </h2>
                    <p className="text-blue-200/80 text-base sm:text-lg mb-4 leading-relaxed">
                      Znajduj urzędy publiczne, darmowe porady prawne i ważne terminy w 40 największych miastach Polski. Wszystkie informacje w jednym miejscu - adresy, numery telefonów, godziny otwarcia i mapy lokalizacji.
                    </p>
                    <p className="text-blue-200/70 text-sm sm:text-base mb-6">
                      Dostęp do Poradni Obywatelskich, OPP, bezpłatnych konsultacji dla przedsiębiorców, terminiarza PIT, ZUS, VAT i kSEF.
                    </p>
                    <Link href="/urzedy-i-porady">
                      <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold px-8 py-3 text-base shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all flex items-center gap-2">
                        Otwórz wyszukiwarkę
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="relative h-64 md:h-80 rounded-xl overflow-hidden border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all flex-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/30 to-blue-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <Building2 className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-300 mx-auto mb-4 opacity-80" />
                        <p className="text-cyan-200 text-sm sm:text-base font-semibold">Inteligentne wyszukiwarki</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works - 3 kroków */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20 sm:py-28 md:py-32">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="w-1.5 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded-full"></div>
              <span className="text-xs sm:text-sm font-bold tracking-widest text-orange-300 uppercase">{t('home.newsSection', language)}</span>
              <div className="w-1.5 h-6 bg-gradient-to-b from-orange-400 to-red-400 rounded-full"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t('home.newsTitle', language)}
            </h2>
            <p className="text-blue-200/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Odkryj najnowsze narzędzia do zarządzania biznesem online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                titleKey: 'home.newFeature1',
                descKey: 'home.newFeature1Desc',
                icon: Building2,
                color: 'green'
              },
              {
                titleKey: 'home.newFeature2',
                descKey: 'home.newFeature2Desc',
                icon: FileText,
                color: 'orange'
              },
              {
                titleKey: 'home.newFeature3',
                descKey: 'home.newFeature3Desc',
                icon: Calculator,
                color: 'emerald'
              }
            ].map((feature, idx) => {
              const IconComponent = feature.icon
              const colorClasses = {
                green: 'border-green-500/30 hover:border-green-500/60 bg-green-900/10 hover:bg-green-900/20',
                orange: 'border-orange-500/30 hover:border-orange-500/60 bg-orange-900/10 hover:bg-orange-900/20',
                emerald: 'border-emerald-500/30 hover:border-emerald-500/60 bg-emerald-900/10 hover:bg-emerald-900/20'
              }
              const textColors = {
                green: 'text-green-400',
                orange: 'text-orange-400',
                emerald: 'text-emerald-400'
              }
              return (
                <Card key={idx} className={`p-6 sm:p-8 border-2 transition-all duration-300 group cursor-default ${colorClasses[feature.color]}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${textColors[feature.color]}`}>
                      <IconComponent className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-blue-200/80 text-sm sm:text-base leading-relaxed">{feature.description}</p>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Link href="/#features">
              <Button variant="outline" className="border-blue-500/40 text-blue-300 hover:bg-blue-500/10 hover:border-blue-500/60">
                Zobacz wszystkie funkcje
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* How it works - 3 kroków */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20 sm:py-28 md:py-32">
          <div className="text-center mb-16 sm:mb-20 md:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">
              {t('home.howTitle', language)}
            </h2>
            <p className="text-blue-200/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Zaledwie 3 proste kroki, aby zacząć wystawiać faktury za darmo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative">
            {/* Connecting line - hidden on mobile */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>

            {/* Step 1 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center border-4 border-slate-900 shadow-2xl shadow-blue-500/50">
                    <LogIn className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-slate-900">
                    1
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{t('home.step1Title', language)}</h3>
                <p className="text-blue-200/70 text-sm sm:text-base leading-relaxed">
                  {t('home.step1Desc', language)}
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center border-4 border-slate-900 shadow-2xl shadow-purple-500/50">
                    <Edit3 className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-slate-900">
                    2
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{t('home.step2Title', language)}</h3>
                <p className="text-blue-200/70 text-sm sm:text-base leading-relaxed">
                  {t('home.step2Desc', language)}
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6 z-10">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center border-4 border-slate-900 shadow-2xl shadow-emerald-500/50">
                    <Download className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-slate-900">
                    3
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{t('home.step3Title', language)}</h3>
                <p className="text-blue-200/70 text-sm sm:text-base leading-relaxed">
                  {t('home.step3Desc', language)}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-16 sm:mt-20 text-center">
            <Link href="/register">
              <Button className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-white font-bold px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all">
                {t('home.ctaButton', language)}
              </Button>
            </Link>
          </div>
        </section>

        {/* AdSense - baner po How it works */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <AdSenseDisplay728x90 />
        </div>

        {/* kSEF Highlight */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20 sm:py-28 md:py-32">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/30 via-cyan-600/20 to-green-600/30 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            <div className="relative overflow-hidden rounded-2xl border-2 border-green-500/40 bg-gradient-to-br from-green-900/30 via-cyan-900/20 to-green-900/30 backdrop-blur-xl p-8 sm:p-12 md:p-16 lg:p-20 group-hover:border-green-400/60 transition-all duration-500">
              {/* Animated background */}
              <div className="absolute top-0 right-0 -mr-12 -mt-12 w-40 h-40 sm:w-48 sm:h-48 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
              <div className="absolute top-1/2 left-0 -ml-20 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-blob animation-delay-2000"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-emerald-400 rounded-full"></div>
                  <span className="text-xs sm:text-sm font-bold tracking-widest text-green-300 uppercase">{t('home.premiumIntegration', language)}</span>
                </div>
                
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {t('home.kSEFTitle', language)}
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    { textKey: 'home.kSEFFeature1', highlight: true },
                    { textKey: 'home.kSEFFeature2', highlight: false },
                    { textKey: 'home.kSEFFeature3', highlight: false },
                  ].map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${item.highlight ? 'bg-green-500/20 border border-green-400/50 group-hover:bg-green-500/30' : 'bg-blue-500/10 border border-blue-400/30 group-hover:bg-blue-500/20'}`}>
                      <span className={`text-xl font-bold ${item.highlight ? 'text-green-300' : 'text-cyan-300'}`}>✓</span>
                      <span className="text-sm sm:text-base text-blue-100">{t(item.textKey, language)}</span>
                    </div>
                  ))}
                </div>
                
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Pełna integracja z <span className="bg-gradient-to-r from-green-300 to-cyan-300 bg-clip-text text-transparent">Krajowym Systemem e-Faktur</span>
                </h3>
                
                <p className="text-base sm:text-lg md:text-xl text-blue-100/90 mb-8 max-w-3xl leading-relaxed">
                  VAT Faktura jest w pełni zintegrowana z <span className="font-semibold text-green-300">kSEF (Krajowym Systemem e-Faktur)</span>. Wysyłaj faktury bezpośrednio do kSEF za jednym kliknięciem - dostępne dla wszystkich użytkowników bez dodatkowych opłat.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    { icon: '✓', text: 'Integracja z kSEF', highlight: true },
                    { icon: '✓', text: 'Wysyłanie e-faktur', highlight: false },
                    { icon: '✓', text: 'Pełna zgodność prawna', highlight: false },
                  ].map((item, idx) => (
                    <div key={idx} className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-300 ${item.highlight ? 'bg-green-500/20 border border-green-400/50 group-hover:bg-green-500/30' : 'bg-blue-500/10 border border-blue-400/30 group-hover:bg-blue-500/20'}`}>
                      <span className={`text-xl font-bold ${item.highlight ? 'text-green-300' : 'text-cyan-300'}`}>{item.icon}</span>
                      <span className="text-sm sm:text-base text-blue-100">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PIT Section */}
        <section id="pit" className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20 sm:py-28 md:py-32">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-400/50 rounded-full">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-emerald-300 uppercase">Nowe — Rozliczenia PIT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300 bg-clip-text text-transparent px-4">
              {t('home.pitTitle', language)}
            </h2>
            <p className="text-blue-200/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
              {t('home.pitDesc', language)}
            </p>
          </div>

          {/* PIT Forms Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
            {[
              { name: 'PIT-37', desc: 'Pracownicy i zleceniobiorcy', color: 'from-emerald-600/20 to-teal-600/20', border: 'border-emerald-500/30 hover:border-emerald-400/60' },
              { name: 'PIT-36', desc: 'Działalność gospodarcza', color: 'from-teal-600/20 to-cyan-600/20', border: 'border-teal-500/30 hover:border-teal-400/60' },
              { name: 'PIT-36L', desc: 'Podatek liniowy 19%', color: 'from-cyan-600/20 to-blue-600/20', border: 'border-cyan-500/30 hover:border-cyan-400/60' },
              { name: 'PIT-28', desc: 'Ryczałt ewidencjonowany', color: 'from-blue-600/20 to-indigo-600/20', border: 'border-blue-500/30 hover:border-blue-400/60' },
              { name: 'PIT-38', desc: 'Kapitały pieniężne', color: 'from-indigo-600/20 to-purple-600/20', border: 'border-indigo-500/30 hover:border-indigo-400/60' },
              { name: 'PIT-39', desc: 'Odpłatne zbycie nieruchomości', color: 'from-violet-600/20 to-purple-600/20', border: 'border-violet-500/30 hover:border-violet-400/60' },
              { name: 'PIT-16A', desc: 'Karta podatkowa', color: 'from-purple-600/20 to-pink-600/20', border: 'border-purple-500/30 hover:border-purple-400/60' },
              { name: 'PIT-19A', desc: 'Ulga prorodzinna', color: 'from-pink-600/20 to-rose-600/20', border: 'border-pink-500/30 hover:border-pink-400/60' },
            ].map((pit) => (
              <Link key={pit.name} href="/dashboard/pit">
                <div className={`group bg-gradient-to-br ${pit.color} border ${pit.border} rounded-xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer`}>
                  <div className="font-black text-xl sm:text-2xl text-white group-hover:text-emerald-300 transition-colors">{pit.name}</div>
                  <div className="text-xs sm:text-sm text-blue-200/70 mt-1 leading-snug">{pit.desc}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* PIT Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-10">
            {[
              {
                titleKey: 'home.pitFeature1',
                descKey: 'home.pitFeature1Desc',
                color: 'from-emerald-600/20 to-teal-600/20',
                border: 'border-emerald-500/30 hover:border-emerald-500/60',
                icon: (
                  <svg className="w-10 h-10 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                ),
              },
              {
                titleKey: 'home.pitFeature2',
                descKey: 'home.pitFeature2Desc',
                color: 'from-teal-600/20 to-cyan-600/20',
                border: 'border-teal-500/30 hover:border-teal-500/60',
                icon: (
                  <svg className="w-10 h-10 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                titleKey: 'home.pitFeature3',
                descKey: 'home.pitFeature3Desc',
                color: 'from-cyan-600/20 to-blue-600/20',
                border: 'border-cyan-500/30 hover:border-cyan-500/60',
                icon: (
                  <svg className="w-10 h-10 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
            ].map((card, idx) => (
              <div key={idx} className={`group bg-gradient-to-br ${card.color} border ${card.border} rounded-xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}>
                <div className="mb-4">{card.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{t(card.titleKey, language)}</h3>
                <p className="text-sm text-blue-200/70 leading-relaxed">{t(card.descKey, language)}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/dashboard/pit">
              <Button className="min-h-[48px] px-10 py-3 text-base font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-xl shadow-emerald-500/40 hover:shadow-emerald-500/60 transition-all duration-300 transform hover:scale-105">
                Rozlicz PIT teraz — bezpłatnie
              </Button>
            </Link>
          </div>

          {/* AdSense — dwa prostokąty 300x250 obok siebie po sekcji PIT */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <AdSenseDisplay300x250 />
            <AdSenseDisplay300x250 />
          </div>
        </section>

        {/* ZUS Section */}
        <section id="zus" className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20 sm:py-28 md:py-32">
          <div className="text-center mb-12 sm:mb-16 space-y-4">
            <div className="inline-block px-4 sm:px-5 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/50 rounded-full">
              <span className="text-xs sm:text-sm font-bold tracking-widest text-orange-300 uppercase">Nowe — Formularze ZUS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-300 to-orange-300 bg-clip-text text-transparent px-4">
              Generatory formularzy ZUS online
            </h2>
            <p className="text-blue-200/70 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-4">
              Wypełnij formularze ZUS online, oblicz zasiłki i pobierz gotowe PDF do wysłania przez PUE ZUS — wszystko bezpłatnie.
            </p>
          </div>

          {/* ZUS Tools Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 mb-12">
            {[
              { name: 'ZUS Z-3', desc: 'Zaświadczenie chorobowe', href: '/generator-zus-z3' },
              { name: 'ZUS Z-15', desc: 'Zasiłek opiekuńczy', href: '/generator-zus-z15' },
              { name: 'Zasiłek chorobowy', desc: 'Kalkulator', href: '/kalkulator-zasilek-chorobowy' },
              { name: 'Zasiłek macierzyński', desc: 'Kalkulator', href: '/kalkulator-zasilek-macierzynski' },
              { name: 'Składki ZUS', desc: 'Kalkulator', href: '/kalkulator-zus' },
              { name: 'Kalendarz ZUS', desc: 'Terminy', href: '/kalendarz-zus' },
            ].map((tool) => (
              <Link key={tool.name} href={tool.href}>
                <div className="group bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 hover:border-orange-400/60 rounded-xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer h-full">
                  <div className="font-bold text-base sm:text-lg text-white group-hover:text-orange-300 transition-colors">{tool.name}</div>
                  <div className="text-xs sm:text-sm text-blue-200/70 mt-1 leading-snug">{tool.desc}</div>
                </div>
              </Link>
            ))}
          </div>

          {/* ZUS Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-10">
            {[
              {
                title: 'Generatory formularzy',
                desc: 'Wypełnij ZUS Z-3, Z-15 i inne formularze online. Pobierz gotowy PDF do wysłania przez PUE ZUS.',
                icon: (
                  <svg className="w-10 h-10 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
              {
                title: 'Kalkulatory zasiłków',
                desc: 'Oblicz zasiłek chorobowy, macierzyński i opiekuńczy. Sprawdź ile otrzymasz od ZUS.',
                icon: (
                  <svg className="w-10 h-10 text-red-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'Poradnik PUE ZUS',
                desc: 'Krok po kroku jak logować się do PUE i wysyłać formularze do ZUS online.',
                icon: (
                  <svg className="w-10 h-10 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 hover:border-orange-500/60 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 group">
                <div className="mb-4 sm:mb-5">{feature.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-orange-300 transition-colors">{feature.title}</h3>
                <p className="text-sm sm:text-base text-blue-200/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/formularze-zus">
              <Button className="min-h-[48px] px-10 py-3 text-base font-bold bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 shadow-xl shadow-orange-500/40 hover:shadow-orange-500/60 transition-all duration-300 transform hover:scale-105">
                Wszystkie narzędzia ZUS
              </Button>
            </Link>
          </div>
        </section>

        {/* AdSense - baner po sekcji ZUS */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <AdSenseDisplay728x90 />
        </div>

        {/* Keywords Section */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20 sm:py-28 md:py-32" id="keywords">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 sm:p-12 md:p-16 border border-blue-500/20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Program do Fakturowania 100% Za Darmo
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Program do Fakturowania', desc: 'Profesjonalny program dla firm i freelancerów', link: '/blog/system-fakturowania-dla-malych-firm' },
                { title: 'Faktury Za Darmo', desc: 'Wystawiaj faktury bez żadnych opłat', link: '/faq' },
                { title: 'Integracja KSEF', desc: 'Pełna integracja z systemem e-faktur', link: '/blog/kompletny-przewodnik-po-ksef' },
                { title: 'Faktury VAT', desc: 'Zarządzanie fakturami VAT i podatkami', link: '/blog/jak-prawidlowo-wystawic-fakture-vat' },
              ].map((item, idx) => (
                <Link key={idx} href={item.link}>
                  <div className="bg-blue-500/10 border border-blue-400/30 rounded-lg p-4 hover:bg-blue-500/20 transition-all cursor-pointer group">
                    <h3 className="text-sm sm:text-base font-semibold text-blue-300 mb-2 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-blue-200/70">{item.desc}</p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-blue-500/20 text-center">
              <p className="text-blue-200/70 text-sm sm:text-base mb-6">
                VAT Faktura to kompleksowe rozwiązanie do fakturowania dostępne 100% za darmo. Bezpieczne, proste i zintegrowane z systemem KSEF.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register">
                  <Button className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 shadow-lg shadow-green-500/50 font-bold">
                    Zacznij Za Darmo
                  </Button>
                </Link>
                <Link href="/faq">
                  <Button variant="outline" className="border-blue-500/50 hover:bg-blue-500/20 text-blue-300 font-bold">
                    Przeczytaj FAQ
                  </Button>
                </Link>
                <Link href="/blog">
                  <Button variant="outline" className="border-blue-500/50 hover:bg-blue-500/20 text-blue-300 font-bold">
                    Artykuły
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Partners Section - AGGRESSIVE */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-24 sm:py-32 md:py-40 relative" id="partners">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-600/5 via-orange-600/5 to-red-600/5 rounded-3xl pointer-events-none"></div>

          <div className="relative z-10">
            <div className="text-center mb-16 sm:mb-20 md:mb-28 space-y-4 sm:space-y-8">
              <div className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-600/20 to-orange-600/20 border border-amber-500/50 rounded-full mb-4 animate-pulse">
                <p className="text-xs sm:text-sm font-bold text-amber-300">💰 ZARABIAJ Z NAMI</p>
              </div>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent leading-tight">
                Poleceni Partnerzy
              </h3>
              <p className="text-base sm:text-lg md:text-xl text-blue-200/80 max-w-3xl mx-auto leading-relaxed">
                Narzędzia dla profesjonalistów. Zarabiamy prowizje, ty korzystasz 100% za darmo
              </p>
            </div>

            {/* Partners Grid - LARGER */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
              {[
                {
                  name: 'Wise',
                  description: 'Przelewy międzynarodowe tanio i szybko',
                  icon: '💳',
                  color: 'from-blue-600/20 to-cyan-600/20',
                  borderColor: 'border-blue-500/30 hover:border-blue-500/60',
                  link: 'https://wise.com',
                },
                {
                  name: 'Stripe',
                  description: 'Płatności online dla Twojej firmy',
                  icon: '💰',
                  color: 'from-purple-600/20 to-pink-600/20',
                  borderColor: 'border-purple-500/30 hover:border-purple-500/60',
                  link: 'https://stripe.com',
                },
                {
                  name: 'Comarch',
                  description: 'Zaawansowane rozwiązania księgowe',
                  icon: '📊',
                  color: 'from-green-600/20 to-emerald-600/20',
                  borderColor: 'border-green-500/30 hover:border-green-500/60',
                  link: 'https://comarch.com',
                },
                {
                  name: 'Namecheap',
                  description: 'Domeny i hosting dla Twojej firmy',
                  icon: '🌐',
                  color: 'from-orange-600/20 to-red-600/20',
                  borderColor: 'border-orange-500/30 hover:border-orange-500/60',
                  link: 'https://namecheap.com',
                },
                {
                  name: 'Google Workspace',
                  description: 'Email i narzędzia dla zespołu',
                  icon: '📧',
                  color: 'from-red-600/20 to-rose-600/20',
                  borderColor: 'border-red-500/30 hover:border-red-500/60',
                  link: 'https://workspace.google.com',
                },
                {
                  name: 'Canva',
                  description: 'Tw��rz materiały marketingowe',
                  icon: '🎨',
                  color: 'from-indigo-600/20 to-purple-600/20',
                  borderColor: 'border-indigo-500/30 hover:border-indigo-500/60',
                  link: 'https://canva.com',
                },
              ].map((partner, index) => (
                <a
                  key={index}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative h-full"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${partner.color} rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110`}></div>
                  <div className={`relative h-full bg-slate-800/40 backdrop-blur-xl rounded-2xl p-8 sm:p-10 border-2 ${partner.borderColor} transition-all duration-500 group-hover:bg-slate-800/80 group-hover:shadow-2xl group-hover:shadow-blue-500/30 transform group-hover:-translate-y-3 flex flex-col gap-6`}>
                    <div className="flex items-start justify-between">
                      <div className="text-5xl sm:text-6xl">{partner.icon}</div>
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-300/50 group-hover:text-blue-300/100 transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-2xl sm:text-3xl font-black text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">{partner.name}</h4>
                      <p className="text-base sm:text-lg text-blue-200/70 group-hover:text-blue-100/90 transition-colors duration-300 leading-relaxed">{partner.description}</p>
                    </div>
                    <div className="h-1.5 bg-gradient-to-r from-blue-500/0 via-blue-500/80 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full"></div>
                    <div className="pt-4 border-t border-blue-500/20">
                      <div className="text-sm font-bold text-cyan-300 group-hover:text-cyan-200 transition-colors">
                        Dowiedz się więcej →
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-amber-600/30 via-orange-600/30 to-red-600/30 border-2 border-amber-500/50 rounded-2xl p-8 sm:p-12 text-center backdrop-blur-xl">
              <p className="text-lg sm:text-2xl font-bold text-white mb-2">
                Każdy link wspiera VAT Faktura
              </p>
              <p className="text-sm sm:text-base text-amber-100 mb-6">
                Będąc użytkownikiem naszego portalu wspierasz jego dalszy rozwój. Dziękujemy!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
                <Link href="/partners">
                  <Button className="bg-white/20 hover:bg-white/30 border border-white/50 text-white font-bold">
                    Wszystkie Partnerzy (12+)
                  </Button>
                </Link>
                <p className="text-xs sm:text-sm text-amber-200/60">
                  Sprawdź co jeszcze polecamy
                </p>
              </div>
              <p className="text-xs sm:text-sm text-amber-200/60 italic">
                Zarabiamy prowizje z linków affiliate. To pozwala nam utrzymywać portal 100% bezpłatnym dla Ciebie.
              </p>
            </div>
          </div>
        </section>

        {/* AdSense — Leaderboard przed finalnym CTA */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <AdSenseDisplay728x90 />
        </div>

        {/* CTA Final */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20 sm:py-28 md:py-32 relative">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-cyan-600 to-green-600 rounded-3xl blur-3xl opacity-40 group-hover:opacity-60 transition-all duration-700 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-green-600 to-cyan-600 rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 text-center group-hover:shadow-2xl group-hover:shadow-green-500/50 transition-all duration-500 transform group-hover:scale-105">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 space-y-6 sm:space-y-8">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                    {t('home.ctaTitle', language)}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                    {t('home.ctaDesc', language)}
                  </p>
                </div>
                
                <Link href="/register">
                  <Button className="min-h-[48px] sm:min-h-[52px] px-8 sm:px-10 md:px-14 py-3 sm:py-4 text-base sm:text-lg font-bold bg-white text-green-600 hover:bg-blue-50 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95">
                    {t('home.cta.start', language)}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-20 sm:py-28 md:py-32">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl opacity-50"></div>
            <div className="relative bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-3xl p-8 sm:p-12 md:p-16 backdrop-blur-xl">
              <div className="max-w-2xl mx-auto text-center">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                  {t('home.newsletterTitle', language)}
                </h3>
                <p className="text-blue-200/80 text-sm sm:text-base mb-6 sm:mb-8">
                  {t('home.newsletterDesc', language)}
                </p>
                <NewsletterSignup />
              </div>
            </div>
          </div>
        </section>


      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-0 {
          animation-delay: 0s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
