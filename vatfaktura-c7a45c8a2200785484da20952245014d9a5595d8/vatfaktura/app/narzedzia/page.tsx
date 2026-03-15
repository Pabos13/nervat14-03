'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Calculator, FileText, Zap, BarChart3, Users, ArrowRight, BookOpen } from 'lucide-react'
import { AdSenseDisplay728x90, AdSenseDisplayAuto, AdSenseDisplay300x250 } from '@/components/adsense-banner'

const tools = [
  {
    title: 'Kalkulator VAT',
    description: 'Oblicz VAT dla różnych stawek. Konwertuj między brutto i netto. Idealny do tworzenia faktury.',
    icon: FileText,
    href: '/kalkulator-vat',
    color: 'from-blue-600/20 to-cyan-600/20',
    borderColor: 'border-blue-500/30 hover:border-blue-500/60',
    iconColor: 'text-blue-400',
  },
  {
    title: 'Kalkulator PIT',
    description: 'Rozlicz PIT-37, PIT-36, podatek liniowy. Oblicz należny podatek dochodowy do urzędu skarbowego.',
    icon: BarChart3,
    href: '/kalkulator-pit',
    color: 'from-green-600/20 to-emerald-600/20',
    borderColor: 'border-green-500/30 hover:border-green-500/60',
    iconColor: 'text-green-400',
  },
  {
    title: 'Kalkulator ZUS',
    description: 'Oblicz składki ZUS dla przedsiębiorców. Emerytura, renta, choroba i ubezpieczenie zdrowotne.',
    icon: Zap,
    href: '/kalkulator-zus',
    color: 'from-purple-600/20 to-pink-600/20',
    borderColor: 'border-purple-500/30 hover:border-purple-500/60',
    iconColor: 'text-purple-400',
  },
  {
    title: 'Kalkulator Wynagrodzeń',
    description: 'Oblicz pensję brutto/netto na 2024. Podatek PIT, ZUS i ubezpieczenia w jednym miejscu.',
    icon: Calculator,
    href: '/kalkulator-wynagrodzen',
    color: 'from-orange-600/20 to-red-600/20',
    borderColor: 'border-orange-500/30 hover:border-orange-500/60',
    iconColor: 'text-orange-400',
  },
  {
    title: 'Generator Faktur',
    description: 'Twórz profesjonalne faktury VAT w kilka sekund. Export do PDF i integracja z KSEF.',
    icon: FileText,
    href: '/dashboard',
    color: 'from-cyan-600/20 to-blue-600/20',
    borderColor: 'border-cyan-500/30 hover:border-cyan-500/60',
    iconColor: 'text-cyan-400',
  },
  {
    title: 'Rozliczenie PIT',
    description: 'Rozlicz PIT-37 online z podpisem elektronicznym i wysyłką do urzędu skarbowego.',
    icon: Users,
    href: '/dashboard/pit',
    color: 'from-teal-600/20 to-green-600/20',
    borderColor: 'border-teal-500/30 hover:border-teal-500/60',
    iconColor: 'text-teal-400',
  },
  {
    title: 'Kalkulator Podatków',
    description: 'Porównaj formy opodatkowania: PIT-37, podatek liniowy i skalę podatkową.',
    icon: Calculator,
    href: '/kalkulatory/kalkulator-podatków',
    color: 'from-blue-600/20 to-cyan-600/20',
    borderColor: 'border-blue-500/30 hover:border-blue-500/60',
    iconColor: 'text-blue-400',
  },
  {
    title: 'Kalkulator Kosztów Biznesu',
    description: 'Analizuj rentowność biznesu, koszty stałe, zmienne i próg rentowności.',
    icon: BarChart3,
    href: '/kalkulatory/kalkulator-kosztów',
    color: 'from-purple-600/20 to-pink-600/20',
    borderColor: 'border-purple-500/30 hover:border-purple-500/60',
    iconColor: 'text-purple-400',
  },
  {
    title: 'Kalkulator Wynagrodzeń',
    description: 'Oblicz pensję brutto/netto, PIT, ZUS i całkowite koszty dla pracodawcy.',
    icon: Users,
    href: '/kalkulatory/kalkulator-pracownika',
    color: 'from-orange-600/20 to-red-600/20',
    borderColor: 'border-orange-500/30 hover:border-orange-500/60',
    iconColor: 'text-orange-400',
  },
  {
    title: 'Generator Dokumentów',
    description: 'Generuj profesjonalne umowy, regulaminy i dokumenty biznesowe.',
    icon: FileText,
    href: '/dokumenty/generator-umow',
    color: 'from-green-600/20 to-emerald-600/20',
    borderColor: 'border-green-500/30 hover:border-green-500/60',
    iconColor: 'text-green-400',
  },
  {
    title: 'Akademia VAT Faktura',
    description: 'Bezpłatne kursy online o podatках, ZUS, KSEF i prowadzeniu biznesu.',
    icon: BookOpen,
    href: '/akademia/kursy',
    color: 'from-indigo-600/20 to-purple-600/20',
    borderColor: 'border-indigo-500/30 hover:border-indigo-500/60',
    iconColor: 'text-indigo-400',
  },
  {
    title: 'Asystent AI',
    description: '24/7 dostępny bot odpowiadający na pytania o podatки, ZUS i biznes.',
    icon: Zap,
    href: '/asystent/chat',
    color: 'from-pink-600/20 to-rose-600/20',
    borderColor: 'border-pink-500/30 hover:border-pink-500/60',
    iconColor: 'text-pink-400',
  },
  {
    title: 'Dashboard Finansowy',
    description: 'Analizuj przepływy pieniężne, monitoruj przychody i zaplanuj biznes.',
    icon: Zap,
    href: '/dashboard/analytics',
    color: 'from-teal-600/20 to-cyan-600/20',
    borderColor: 'border-teal-500/30 hover:border-teal-500/60',
    iconColor: 'text-teal-400',
  },
  {
    title: 'Katalog Specjalistów',
    description: 'Znajdź doświadczonych doradców, księgowych, audytorów i ekspertów.',
    icon: Users,
    href: '/katalog-specjalistow',
    color: 'from-violet-600/20 to-indigo-600/20',
    borderColor: 'border-violet-500/30 hover:border-violet-500/60',
    iconColor: 'text-violet-400',
  },
]

export default function NarzedziaPage() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Calculator className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold text-white">VAT Faktura</span>
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/pricing">
                <Button variant="outline" className="hidden sm:flex border-blue-500/40 text-blue-300 hover:bg-blue-500/10">
                  Cennik
                </Button>
              </Link>
              <Link href="/register">
                <Button className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-white font-semibold">
                  Rejestracja
                </Button>
              </Link>
            </div>
          </div>
        </header>

        {/* Main */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent mb-4">
              Narzędzia
            </h1>
            <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
              Kompleksowy ekosystem narzędzi: kalkulatory, generatory dokumentów, akademia, asystent AI, dashboard finansowy i katalog specjalistów. Wszystko dla Twojego biznesu.
            </p>
          </div>

          {/* AdSense */}
          <div className="mb-12">
            <AdSenseDisplay728x90 />
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {tools.map((tool, index) => {
              const IconComponent = tool.icon
              return (
                <Link key={index} href={tool.href}>
                  <Card className={`bg-gradient-to-br ${tool.color} border ${tool.borderColor} p-6 h-full cursor-pointer group transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:-translate-y-2`}>
                    <div className="flex flex-col h-full gap-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`w-6 h-6 ${tool.iconColor}`} />
                      </div>
                      
                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {tool.title}
                        </h3>
                        <p className="text-blue-200/70 text-sm leading-relaxed">
                          {tool.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all">
                        <span className="text-sm font-semibold">Otwórz narzędzie</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>

          {/* Banery AdSense */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <AdSenseDisplay300x250 />
            <AdSenseDisplay300x250 />
          </div>

          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
              Dlaczego wybrać nasze narzędzia?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-800/50 border-blue-500/20 p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">100% Bezpłatnie</h3>
                <p className="text-blue-200/70 text-sm">
                  Wszystkie narzędzia są całkowicie bezpłatne i zawsze takie będą. Bez konieczności podania karty kredytowej.
                </p>
              </Card>

              <Card className="bg-slate-800/50 border-green-500/20 p-6">
                <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
                  <Calculator className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Dokładne Obliczenia</h3>
                <p className="text-blue-200/70 text-sm">
                  Stawki 2024 na dzień dzisiejszy. Obliczenia zgodne z rzeczywistymi przepisami podatkowymi.
                </p>
              </Card>

              <Card className="bg-slate-800/50 border-cyan-500/20 p-6">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Łatwe do użycia</h3>
                <p className="text-blue-200/70 text-sm">
                  Intuicyjny interfejs. Brak zbędnych komplikacji. Po prostu wpisz dane i gotowe.
                </p>
              </Card>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <Link href="/register">
              <Button className="bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-white font-bold px-8 py-3 text-lg">
                Rozpocznij za darmo
              </Button>
            </Link>
          </div>
        </main>

        {/* Footer CTA */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <AdSenseDisplayAuto />
        </section>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  )
}
