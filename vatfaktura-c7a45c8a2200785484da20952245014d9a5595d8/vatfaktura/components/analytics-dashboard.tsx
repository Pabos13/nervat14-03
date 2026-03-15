'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { TrendingUp, TrendingDown, Calendar, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function AnalyticsDashboard() {
  const [period, setPeriod] = useState('year')

  // Mock data
  const data = {
    totalRevenue: 125000,
    totalExpenses: 45000,
    profit: 80000,
    profitMargin: 64,
    monthlyData: [
      { month: 'Styczeń', revenue: 8000, expenses: 3000 },
      { month: 'Luty', revenue: 9500, expenses: 3200 },
      { month: 'Marzec', revenue: 10200, expenses: 3500 },
      { month: 'Kwiecień', revenue: 11000, expenses: 3800 },
      { month: 'Maj', revenue: 12500, expenses: 4000 },
      { month: 'Czerwiec', revenue: 13200, expenses: 4200 },
      { month: 'Lipiec', revenue: 14000, expenses: 4300 },
      { month: 'Sierpień', revenue: 13500, expenses: 4100 },
      { month: 'Wrzesień', revenue: 12800, expenses: 4000 },
      { month: 'Październik', revenue: 11500, expenses: 3800 },
      { month: 'Listopad', revenue: 10700, expenses: 3600 },
      { month: 'Grudzień', revenue: 12500, expenses: 3500 }
    ],
    upcomingDeadlines: [
      { name: 'PIT-37 2024', daysUntil: 15, type: 'tax' },
      { name: 'ZUS marzec', daysUntil: 5, type: 'zus' },
      { name: 'VAT raport', daysUntil: 3, type: 'vat' },
      { name: 'KSEF roczna', daysUntil: 45, type: 'ksef' }
    ]
  }

  const maxRevenue = Math.max(...data.monthlyData.map(d => d.revenue))
  const maxExpenses = Math.max(...data.monthlyData.map(d => d.expenses))
  const maxHeight = Math.max(maxRevenue, maxExpenses)

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-blue-600/15 border-blue-500/30 p-6">
          <p className="text-blue-200/60 text-sm mb-2">Przychody roczne</p>
          <p className="text-3xl font-bold text-blue-300">{data.totalRevenue.toLocaleString('pl-PL')} zł</p>
          <p className="text-xs text-green-400 mt-2 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            +8.5% vs rok ubiegły
          </p>
        </Card>

        <Card className="bg-red-600/15 border-red-500/30 p-6">
          <p className="text-red-200/60 text-sm mb-2">Wydatki roczne</p>
          <p className="text-3xl font-bold text-red-300">{data.totalExpenses.toLocaleString('pl-PL')} zł</p>
          <p className="text-xs text-red-400 mt-2 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            +2.3% vs rok ubiegły
          </p>
        </Card>

        <Card className="bg-green-600/15 border-green-500/30 p-6">
          <p className="text-green-200/60 text-sm mb-2">Zysk netto</p>
          <p className="text-3xl font-bold text-green-300">{data.profit.toLocaleString('pl-PL')} zł</p>
          <p className="text-xs text-green-400 mt-2 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            +13.2% vs rok ubiegły
          </p>
        </Card>

        <Card className="bg-purple-600/15 border-purple-500/30 p-6">
          <p className="text-purple-200/60 text-sm mb-2">Marża zysku</p>
          <p className="text-3xl font-bold text-purple-300">{data.profitMargin}%</p>
          <p className="text-xs text-purple-400 mt-2">Zdywersyfikuj koszty</p>
        </Card>
      </div>

      {/* Chart */}
      <Card className="bg-slate-800/50 border border-white/10 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-white text-lg">Przychody vs Wydatki</h3>
          <div className="flex gap-2">
            {['month', 'quarter', 'year'].map(p => (
              <button
                key={p}
                onClick={() => setPeriod(p)}
                className={`px-3 py-1 text-xs font-semibold rounded transition-all ${
                  period === p
                    ? 'bg-cyan-600 text-white'
                    : 'bg-slate-700 text-blue-200 hover:bg-slate-600'
                }`}
              >
                {p === 'month' ? 'Miesiąc' : p === 'quarter' ? 'Kwartał' : 'Rok'}
              </button>
            ))}
          </div>
        </div>

        {/* Mini Chart */}
        <div className="flex items-end justify-between gap-1 h-40">
          {data.monthlyData.slice(0, 12).map((item, index) => (
            <div key={index} className="flex-1 flex flex-col items-center gap-1">
              <div className="w-full flex gap-0.5">
                <div
                  className="flex-1 bg-blue-500/60 rounded-t hover:bg-blue-500 transition-all"
                  style={{ height: `${(item.revenue / maxHeight) * 100}%` }}
                  title={`Przychód: ${item.revenue} zł`}
                ></div>
                <div
                  className="flex-1 bg-red-500/60 rounded-t hover:bg-red-500 transition-all"
                  style={{ height: `${(item.expenses / maxHeight) * 100}%` }}
                  title={`Wydatki: ${item.expenses} zł`}
                ></div>
              </div>
              <p className="text-xs text-blue-200/50 mt-1">{item.month.substring(0, 3)}</p>
            </div>
          ))}
        </div>

        <div className="flex gap-4 mt-6 pt-6 border-t border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded"></div>
            <span className="text-sm text-blue-200/70">Przychody</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span className="text-sm text-red-200/70">Wydatki</span>
          </div>
        </div>
      </Card>

      {/* Upcoming Deadlines */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-cyan-600/15 border-cyan-500/30 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-cyan-400" />
            <h3 className="font-bold text-cyan-300">Nadchodzące Terminy</h3>
          </div>
          <div className="space-y-3">
            {data.upcomingDeadlines.map((deadline, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-cyan-500/20">
                <div>
                  <p className="font-semibold text-white text-sm">{deadline.name}</p>
                  <p className="text-xs text-cyan-200/60">Typ: {deadline.type.toUpperCase()}</p>
                </div>
                <div className={`text-lg font-bold ${
                  deadline.daysUntil <= 7 ? 'text-red-400' : 'text-yellow-400'
                }`}>
                  {deadline.daysUntil}d
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-green-600/15 border-green-500/30 p-6">
          <h3 className="font-bold text-green-300 mb-4">Rekomendacje</h3>
          <div className="space-y-3">
            <div className="p-3 bg-slate-800/50 rounded-lg border border-green-500/20">
              <p className="font-semibold text-white text-sm">Optymalizacja kosztów</p>
              <p className="text-xs text-green-200/70">Koszt materiałów wzrósł o 8%. Rozważ negocjacje z dostawcami.</p>
            </div>
            <div className="p-3 bg-slate-800/50 rounded-lg border border-green-500/20">
              <p className="font-semibold text-white text-sm">Rezerwa finansowa</p>
              <p className="text-xs text-green-200/70">Zalecana rezerwa 3x wydatki miesięczne. Masz 2.7x.</p>
            </div>
            <div className="p-3 bg-slate-800/50 rounded-lg border border-green-500/20">
              <p className="font-semibold text-white text-sm">Wzrost przychodów</p>
              <p className="text-xs text-green-200/70">Trend wzrostu! Przychody rosną średnio 4.5% m-o-m.</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Export */}
      <Button className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-3 flex items-center justify-center gap-2">
        <Download className="w-4 h-4" />
        Eksportuj raport finansowy
      </Button>
    </div>
  )
}
