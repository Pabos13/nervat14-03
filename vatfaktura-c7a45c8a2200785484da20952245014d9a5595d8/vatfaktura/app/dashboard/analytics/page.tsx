'use client'

import Link from 'next/link'
import { ArrowLeft, BarChart3 } from 'lucide-react'
import AnalyticsDashboard from '@/components/analytics-dashboard'

export default function DashboardAnalyticsPage() {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <Link href="/narzedzia" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
              <ArrowLeft className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Wróć do narzędzi</span>
            </Link>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Title */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-teal-600 to-cyan-600 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Dashboard Finansowy
              </h1>
            </div>
            <p className="text-lg text-blue-200/70 max-w-2xl">
              Analizuj przepływy pieniężne, monitoruj przychody i wydatki, planuj biznes na podstawie danych. Wszystko w jednym miejscu.
            </p>
          </div>

          {/* Dashboard */}
          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-8">
            <AnalyticsDashboard />
          </div>

          {/* Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-600/15 border border-blue-500/30 rounded-lg p-6">
              <h3 className="font-bold text-blue-300 mb-3">Monitorowanie</h3>
              <ul className="space-y-2 text-blue-200/70 text-sm">
                <li>• Przychody i wydatki</li>
                <li>• Trendy finansowe</li>
                <li>• Marża zysku</li>
                <li>• ROI i wskaźniki</li>
              </ul>
            </div>

            <div className="bg-green-600/15 border border-green-500/30 rounded-lg p-6">
              <h3 className="font-bold text-green-300 mb-3">Planowanie</h3>
              <ul className="space-y-2 text-green-200/70 text-sm">
                <li>• Prognozy na przyszłość</li>
                <li>• Scenariusze wzrostu</li>
                <li>• Budżetowanie</li>
                <li>• Alerty i terminy</li>
              </ul>
            </div>

            <div className="bg-cyan-600/15 border border-cyan-500/30 rounded-lg p-6">
              <h3 className="font-bold text-cyan-300 mb-3">Eksport</h3>
              <ul className="space-y-2 text-cyan-200/70 text-sm">
                <li>• PDF raporty</li>
                <li>• Excel eksport</li>
                <li>• Dane historyczne</li>
                <li>• Integracja z bankami</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
