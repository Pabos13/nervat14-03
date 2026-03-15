'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Building2, Scale, Calendar, ArrowRight } from 'lucide-react'
import { OfficeSearchComponent } from '@/components/office-search-component'
import { LegalAdviceSearchComponent } from '@/components/legal-advice-search'
import { OfficialCalendarComponent } from '@/components/official-calendar'
import { Button } from '@/components/ui/button'

type Tab = 'offices' | 'legal' | 'deadlines'

export default function OfficesAndAdvicePage() {
  const [activeTab, setActiveTab] = useState<Tab>('offices')

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Building2 className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold text-white">VAT Faktura</span>
            </Link>
            <Link href="/">
              <Button variant="outline" className="hidden sm:flex border-blue-500/40 text-blue-300 hover:bg-blue-500/10">
                Powrót na stronę główną
              </Button>
            </Link>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-green-300 bg-clip-text text-transparent mb-4">
              Urzędy i Porady
            </h1>
            <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
              Znajdź urzędy, darmowe porady prawne i ważne terminy w 40 największych miastach Polski
            </p>
          </div>

          {/* Tabs */}
          <div className="mb-8 flex flex-wrap gap-2 sm:gap-3 justify-center">
            {[
              { id: 'offices', label: 'Urzędy', icon: Building2, color: 'from-blue-600 to-cyan-600' },
              { id: 'legal', label: 'Porady Prawne', icon: Scale, color: 'from-green-600 to-emerald-600' },
              { id: 'deadlines', label: 'Terminarz', icon: Calendar, color: 'from-purple-600 to-pink-600' },
            ].map((tab) => {
              const Icon = tab.icon
              const isActive = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as Tab)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 ${
                    isActive
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg shadow-blue-500/20`
                      : 'bg-slate-800 text-blue-200 border border-white/10 hover:bg-slate-700 hover:border-white/20'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              )
            })}
          </div>

          {/* Content Section */}
          <div className="bg-slate-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8">
            {activeTab === 'offices' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Wyszukiwarka Urzędów</h2>
                <OfficeSearchComponent />
              </div>
            )}

            {activeTab === 'legal' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Porady Prawne - Darmowe Konsultacje</h2>
                <p className="text-sm text-green-200/70 mb-4">Darmowe porady prawne finansowane przez gminy. W wielu miastach dostępne w kilku punktach.</p>
                <LegalAdviceSearchComponent />
              </div>
            )}

            {activeTab === 'deadlines' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Terminarz Ważnych Wydaż</h2>
                <p className="text-sm text-purple-200/70 mb-4">Ważne daty dla podatników PIT, ZUS, VAT i właścicieli firm w 2025 roku.</p>
                <OfficialCalendarComponent />
              </div>
            )}
          </div>

          {/* Quick Links Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-xl p-6 hover:shadow-lg hover:shadow-blue-500/20 transition-all">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-3">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Urzędy Publiczne</h3>
              <p className="text-sm text-blue-200/70 mb-4">Adresy, numery telefonów, godziny otwarcia i mapy lokalizacji urzędów w Twoim mieście.</p>
            </div>

            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-6 hover:shadow-lg hover:shadow-green-500/20 transition-all">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center mb-3">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Bezpłatne Porady</h3>
              <p className="text-sm text-green-200/70 mb-4">Darmowe konsultacje prawne w sprawach pracy, podatków, rodziny i konsumenckiego.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-3">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Wichtne Daty</h3>
              <p className="text-sm text-purple-200/70 mb-4">Terminy PIT, ZUS, VAT, kSEF i inne ważne daty dla przedsiębiorców i pracowników.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-green-600/20 border border-white/10 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">Potrzebujesz więcej narzędzi?</h3>
            <p className="text-blue-200/70 mb-6">VAT Faktura to kompletna platforma do zarządzania finansami biznesu. Faktury, PIT, ZUS - wszystko w jednym miejscu.</p>
            <Link href="/narzedzia">
              <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold inline-flex items-center gap-2">
                Odkryj wszystkie narzędzia
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}
