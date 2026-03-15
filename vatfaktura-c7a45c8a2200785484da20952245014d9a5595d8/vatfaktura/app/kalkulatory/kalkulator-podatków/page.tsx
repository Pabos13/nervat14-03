'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calculator, ArrowLeft } from 'lucide-react'
import TaxCalculatorForm from '@/components/tax-calculator-form'

export default function TaxCalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/narzedzia" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <ArrowLeft className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Wróć do narzędzi</span>
            </Link>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Title Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center">
                <Calculator className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Kalkulator Podatków
              </h1>
            </div>
            <p className="text-lg text-blue-200/70 max-w-2xl">
              Porównaj dochodы netto dla PIT-37, podatku liniowego i skali podatkowej. Dowiedz się, która forma opodatkowania jest dla Ciebie najkorzystniejsza.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-blue-600/15 border border-blue-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-blue-300 mb-2">PIT-37</h3>
              <p className="text-sm text-blue-200/70">Rozliczenie na zasadzie dochodów i wydatków. Stawki: 12% i 32%.</p>
            </div>
            <div className="bg-purple-600/15 border border-purple-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-purple-300 mb-2">Podatek Liniowy</h3>
              <p className="text-sm text-purple-200/70">Zryczałtowana stawka 19% dla osób fizycznych wykonujących działalność.</p>
            </div>
            <div className="bg-orange-600/15 border border-orange-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-orange-300 mb-2">Skala Podatkowa</h3>
              <p className="text-sm text-orange-200/70">Standardowe przedziały dochodowe: 17%, 32% i 39%.</p>
            </div>
          </div>

          {/* Calculator */}
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8 mb-12">
            <TaxCalculatorForm />
          </div>

          {/* Tips Section */}
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 rounded-lg p-6">
            <h3 className="text-lg font-bold text-cyan-300 mb-4">Porady przy wyborze formy opodatkowania:</h3>
            <ul className="space-y-2 text-blue-200/80">
              <li>• <strong>PIT-37</strong> jest najlepszy dla firm z niskimi przychodami i wysokimi kosztami</li>
              <li>• <strong>Podatek Liniowy 19%</strong> sprawdza się dla stabilnych biznesów ze średnimi przychodami</li>
              <li>• <strong>Skala Podatkowa</strong> może być korzystna dla bardzo wysokich dochodów, ale rzadko dla startupów</li>
              <li>• Pamiętaj o zmianach stawek - zawsze sprawdź aktualnie obowiązujące przepisy!</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}
