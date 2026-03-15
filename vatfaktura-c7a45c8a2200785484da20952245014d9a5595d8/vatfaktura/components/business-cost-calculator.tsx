'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { calculateBusinessCosts, INDUSTRY_KUP_RATES, calculateMonthlyViabilityIndex } from '@/lib/calculators/business-costs'
import { TrendingUp, TrendingDown } from 'lucide-react'

export default function BusinessCostCalculator() {
  const [revenue, setRevenue] = useState(120000)
  const [kupPercentage, setKupPercentage] = useState(30)
  const [fixedCosts, setFixedCosts] = useState(3000)
  const [variableCosts, setVariableCosts] = useState(2000)

  const results = calculateBusinessCosts(revenue, kupPercentage, fixedCosts, variableCosts)
  const viability = calculateMonthlyViabilityIndex(revenue / 12, (fixedCosts + variableCosts) / 12, kupPercentage)

  const selectedIndustry = INDUSTRY_KUP_RATES.find(i => i.kupPercentage === kupPercentage)

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Revenue */}
        <Card className="bg-blue-600/15 border-blue-500/30 p-6">
          <label className="block text-sm font-semibold text-blue-200 mb-2">
            Przychód roczny (zł)
          </label>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="w-full px-4 py-2 bg-slate-800 border border-blue-500/30 rounded-lg text-white font-semibold"
          />
          <input
            type="range"
            min="10000"
            max="500000"
            step="5000"
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="w-full mt-2 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
        </Card>

        {/* Industry Selection */}
        <Card className="bg-purple-600/15 border-purple-500/30 p-6">
          <label className="block text-sm font-semibold text-purple-200 mb-2">
            Branża (Koszty Uzyskania Przychodu)
          </label>
          <select
            value={kupPercentage}
            onChange={(e) => setKupPercentage(Number(e.target.value))}
            className="w-full px-4 py-2 bg-slate-800 border border-purple-500/30 rounded-lg text-white font-semibold"
          >
            {INDUSTRY_KUP_RATES.map(ind => (
              <option key={ind.kupPercentage} value={ind.kupPercentage}>
                {ind.industry} ({ind.kupPercentage}%)
              </option>
            ))}
          </select>
          <p className="text-xs text-purple-200/60 mt-2">{selectedIndustry?.description}</p>
        </Card>

        {/* Fixed Costs */}
        <Card className="bg-orange-600/15 border-orange-500/30 p-6">
          <label className="block text-sm font-semibold text-orange-200 mb-2">
            Koszty stałe miesięczne (zł)
          </label>
          <input
            type="number"
            value={fixedCosts}
            onChange={(e) => setFixedCosts(Number(e.target.value))}
            className="w-full px-4 py-2 bg-slate-800 border border-orange-500/30 rounded-lg text-white font-semibold"
          />
          <p className="text-xs text-orange-200/60 mt-2">Czynsz, media, internet, ubezpieczenia</p>
        </Card>

        {/* Variable Costs */}
        <Card className="bg-red-600/15 border-red-500/30 p-6">
          <label className="block text-sm font-semibold text-red-200 mb-2">
            Koszty zmienne miesięczne (zł)
          </label>
          <input
            type="number"
            value={variableCosts}
            onChange={(e) => setVariableCosts(Number(e.target.value))}
            className="w-full px-4 py-2 bg-slate-800 border border-red-500/30 rounded-lg text-white font-semibold"
          />
          <p className="text-xs text-red-200/60 mt-2">Materiały, personel, transport</p>
        </Card>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-blue-600/15 border-blue-500/30 p-4">
          <p className="text-xs text-blue-200/60 mb-1">Przychód</p>
          <p className="text-2xl font-bold text-blue-300">{results.revenue.toLocaleString('pl-PL')} zł</p>
        </Card>

        <Card className="bg-purple-600/15 border-purple-500/30 p-4">
          <p className="text-xs text-purple-200/60 mb-1">Koszty (KUP + stałe + zmienne)</p>
          <p className="text-2xl font-bold text-purple-300">{results.totalCosts.toLocaleString('pl-PL')} zł</p>
        </Card>

        <Card className={`p-4 border ${
          results.profit > 0
            ? 'bg-green-600/15 border-green-500/30'
            : 'bg-red-600/15 border-red-500/30'
        }`}>
          <p className={`text-xs mb-1 ${results.profit > 0 ? 'text-green-200/60' : 'text-red-200/60'}`}>
            Zysk netto
          </p>
          <p className={`text-2xl font-bold ${results.profit > 0 ? 'text-green-300' : 'text-red-300'}`}>
            {results.profit.toLocaleString('pl-PL')} zł
          </p>
        </Card>

        <Card className="bg-cyan-600/15 border-cyan-500/30 p-4">
          <p className="text-xs text-cyan-200/60 mb-1">Marża zysku</p>
          <p className="text-2xl font-bold text-cyan-300">{results.profitMargin.toFixed(1)}%</p>
        </Card>
      </div>

      {/* Viability Index */}
      <Card className={`p-6 border ${
        viability.viability >= 150
          ? 'bg-green-600/15 border-green-500/30'
          : viability.viability >= 100
          ? 'bg-yellow-600/15 border-yellow-500/30'
          : 'bg-red-600/15 border-red-500/30'
      }`}>
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
            viability.viability >= 150
              ? 'bg-green-500/20'
              : viability.viability >= 100
              ? 'bg-yellow-500/20'
              : 'bg-red-500/20'
          }`}>
            {viability.viability >= 150 ? (
              <TrendingUp className={`w-6 h-6 ${
                viability.viability >= 150 ? 'text-green-400' : 'text-yellow-400'
              }`} />
            ) : (
              <TrendingDown className="w-6 h-6 text-red-400" />
            )}
          </div>
          <div className="flex-1">
            <h3 className={`font-bold text-lg mb-2 ${
              viability.viability >= 150 ? 'text-green-300' : 'text-yellow-300'
            }`}>
              Indeks Rentowności: {viability.viability.toFixed(0)}%
            </h3>
            <p className={`text-sm mb-2 ${
              viability.viability >= 150 ? 'text-green-200/70' : 'text-yellow-200/70'
            }`}>
              {viability.recommendation}
            </p>
            <p className="text-xs text-blue-200/60">
              Próg rentowności: {viability.breakEvenRevenue.toLocaleString('pl-PL')} zł/miesiąc
            </p>
          </div>
        </div>
      </Card>

      {/* Comparison Table */}
      <Card className="bg-slate-800/50 border border-white/10 p-6">
        <h3 className="font-bold text-cyan-300 mb-4">Analiza roczna:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-blue-200/60">KUP ({kupPercentage}%)</p>
            <p className="font-bold text-white">{(results.revenue * kupPercentage / 100).toLocaleString('pl-PL')} zł</p>
          </div>
          <div>
            <p className="text-blue-200/60">Koszty stałe</p>
            <p className="font-bold text-white">{(fixedCosts * 12).toLocaleString('pl-PL')} zł</p>
          </div>
          <div>
            <p className="text-blue-200/60">Koszty zmienne</p>
            <p className="font-bold text-white">{(variableCosts * 12).toLocaleString('pl-PL')} zł</p>
          </div>
          <div>
            <p className="text-blue-200/60">ROI</p>
            <p className="font-bold text-white">{results.roiPercentage.toFixed(1)}%</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
