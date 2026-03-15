'use client'

import Link from 'next/link'
import { ArrowLeft, Bot } from 'lucide-react'
import { Card } from '@/components/ui/card'
import TaxAssistantChat from '@/components/tax-assistant-chat'

export default function AIAssistantPage() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
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
          {/* Title */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-600 to-rose-600 flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-pink-400 via-rose-300 to-pink-300 bg-clip-text text-transparent">
                Asystent AI - VAT Faktura
              </h1>
            </div>
            <p className="text-lg text-blue-200/70 max-w-2xl">
              24/7 dostępny asystent odpowiadający na pytania o podatki, ZUS, KSEF i zarządzanie biznesem. Odpowiedzi w sekundach.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Chat */}
            <div className="lg:col-span-2">
              <Card className="bg-slate-800/50 border border-white/10 p-6 h-full min-h-96">
                <TaxAssistantChat />
              </Card>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-4">
              <Card className="bg-pink-600/15 border-pink-500/30 p-6">
                <h3 className="font-bold text-pink-300 mb-3">O Asystencie</h3>
                <ul className="space-y-2 text-pink-200/70 text-sm">
                  <li>✓ Odpowiadaj na pytania 24/7</li>
                  <li>✓ Informacje o PIT, ZUS, KSEF</li>
                  <li>✓ Porady dotyczące biznesu</li>
                  <li>✓ Pomocne w wyborach</li>
                </ul>
              </Card>

              <Card className="bg-blue-600/15 border-blue-500/30 p-6">
                <h3 className="font-bold text-blue-300 mb-3">Tematy</h3>
                <ul className="space-y-2 text-blue-200/70 text-sm">
                  <li>🧮 Kalkulacje podatkowe</li>
                  <li>📋 Formularze PIT</li>
                  <li>💼 Zarządzanie biznesem</li>
                  <li>💰 Planowanie finansowe</li>
                </ul>
              </Card>

              <Card className="bg-cyan-600/15 border-cyan-500/30 p-6">
                <h3 className="font-bold text-cyan-300 mb-3">Wskazówka</h3>
                <p className="text-cyan-200/70 text-sm">
                  Możesz pisać naturalne pytania w języku polskim. Asystent postara się udzielić wyczerpującej odpowiedzi.
                </p>
              </Card>

              <Card className="bg-yellow-600/15 border-yellow-500/30 p-6">
                <h3 className="font-bold text-yellow-300 mb-3">Ograniczenia</h3>
                <p className="text-yellow-200/70 text-sm">
                  Asystent udziela ogólnych informacji. Dla skomplikowanych spraw skonsultuj się z doradcą podatkowym.
                </p>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
