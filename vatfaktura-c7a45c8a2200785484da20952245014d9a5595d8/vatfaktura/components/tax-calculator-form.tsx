'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { compareAllTaxForms } from '@/lib/calculators/tax-calculator'
import { Download, TrendingUp } from 'lucide-react'

export default function TaxCalculatorForm() {
  const [income, setIncome] = useState(60000)
  const results = compareAllTaxForms(income)

  const handleDownloadPDF = () => {
    const doc = `
VAT Faktura - Porównanie Form Opodatkowania
============================================

Przychód roczny: ${income.toLocaleString('pl-PL')} zł

--- PIT 37 ---
Podatek: ${results.pit37.taxAmount.toFixed(2)} zł
ZUS: ${results.pit37.zusContribution.toFixed(2)} zł
Ubezpieczenie zdrowotne: ${results.pit37.healthInsurance.toFixed(2)} zł
Dochód netto: ${results.pit37.netIncome.toFixed(2)} zł
Efektywna stawka podatkowa: ${(results.pit37.effectiveTaxRate * 100).toFixed(2)}%

--- Podatek Liniowy 19% ---
Podatek: ${results.linear.taxAmount.toFixed(2)} zł
ZUS: ${results.linear.zusContribution.toFixed(2)} zł
Ubezpieczenie zdrowotne: ${results.linear.healthInsurance.toFixed(2)} zł
Dochód netto: ${results.linear.netIncome.toFixed(2)} zł
Efektywna stawka podatkowa: ${(results.linear.effectiveTaxRate * 100).toFixed(2)}%

--- Skala podatkowa ---
Podatek: ${results.scale.taxAmount.toFixed(2)} zł
ZUS: ${results.scale.zusContribution.toFixed(2)} zł
Ubezpieczenie zdrowotne: ${results.scale.healthInsurance.toFixed(2)} zł
Dochód netto: ${results.scale.netIncome.toFixed(2)} zł
Efektywna stawka podatkowa: ${(results.scale.effectiveTaxRate * 100).toFixed(2)}%

Generowane: ${new Date().toLocaleString('pl-PL')}
    `
    
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(doc))
    element.setAttribute('download', 'porownanie-opodatkowania.txt')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const bestForm = [results.pit37, results.linear, results.scale].reduce((best, current) =>
    current.netIncome > best.netIncome ? current : best
  )

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <Card className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/30 p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-blue-200 mb-2">
              Przychód roczny (zł)
            </label>
            <input
              type="range"
              min="10000"
              max="500000"
              step="1000"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <input
              type="number"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              className="mt-3 w-full px-4 py-2 bg-slate-800 border border-blue-500/30 rounded-lg text-white text-lg font-semibold"
            />
          </div>
        </div>
      </Card>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* PIT 37 */}
        <Card className={`p-6 border transition-all ${
          bestForm.taxForm === 'pit37'
            ? 'border-green-500/60 bg-green-600/15 ring-2 ring-green-500/50'
            : 'border-blue-500/30 bg-blue-600/10'
        }`}>
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-bold text-white">PIT 37</h3>
            {bestForm.taxForm === 'pit37' && <span className="text-xs bg-green-500/30 text-green-300 px-3 py-1 rounded-full font-semibold">Najlepszy</span>}
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-blue-200">
              <span>Podatek:</span>
              <span className="font-semibold">{results.pit37.taxAmount.toFixed(2)} zł</span>
            </div>
            <div className="flex justify-between text-blue-200">
              <span>ZUS:</span>
              <span className="font-semibold">{results.pit37.zusContribution.toFixed(2)} zł</span>
            </div>
            <div className="flex justify-between text-blue-200">
              <span>Ubezpiecz.:</span>
              <span className="font-semibold">{results.pit37.healthInsurance.toFixed(2)} zł</span>
            </div>
            <div className="border-t border-blue-500/20 pt-2 mt-2 flex justify-between font-bold text-cyan-300">
              <span>Netto:</span>
              <span>{results.pit37.netIncome.toFixed(2)} zł</span>
            </div>
            <div className="flex justify-between text-blue-200 text-xs">
              <span>Stawka eff.:</span>
              <span>{(results.pit37.effectiveTaxRate * 100).toFixed(2)}%</span>
            </div>
          </div>
        </Card>

        {/* Podatek Liniowy */}
        <Card className={`p-6 border transition-all ${
          bestForm.taxForm === 'linear'
            ? 'border-green-500/60 bg-green-600/15 ring-2 ring-green-500/50'
            : 'border-purple-500/30 bg-purple-600/10'
        }`}>
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Podatek Liniowy</h3>
            {bestForm.taxForm === 'linear' && <span className="text-xs bg-green-500/30 text-green-300 px-3 py-1 rounded-full font-semibold">Najlepszy</span>}
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-blue-200">
              <span>Podatek 19%:</span>
              <span className="font-semibold">{results.linear.taxAmount.toFixed(2)} zł</span>
            </div>
            <div className="flex justify-between text-blue-200">
              <span>ZUS:</span>
              <span className="font-semibold">{results.linear.zusContribution.toFixed(2)} zł</span>
            </div>
            <div className="flex justify-between text-blue-200">
              <span>Ubezpiecz.:</span>
              <span className="font-semibold">{results.linear.healthInsurance.toFixed(2)} zł</span>
            </div>
            <div className="border-t border-purple-500/20 pt-2 mt-2 flex justify-between font-bold text-cyan-300">
              <span>Netto:</span>
              <span>{results.linear.netIncome.toFixed(2)} zł</span>
            </div>
            <div className="flex justify-between text-blue-200 text-xs">
              <span>Stawka eff.:</span>
              <span>{(results.linear.effectiveTaxRate * 100).toFixed(2)}%</span>
            </div>
          </div>
        </Card>

        {/* Skala Podatkowa */}
        <Card className={`p-6 border transition-all ${
          bestForm.taxForm === 'scale'
            ? 'border-green-500/60 bg-green-600/15 ring-2 ring-green-500/50'
            : 'border-orange-500/30 bg-orange-600/10'
        }`}>
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-lg font-bold text-white">Skala Podatkowa</h3>
            {bestForm.taxForm === 'scale' && <span className="text-xs bg-green-500/30 text-green-300 px-3 py-1 rounded-full font-semibold">Najlepszy</span>}
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between text-blue-200">
              <span>Podatek:</span>
              <span className="font-semibold">{results.scale.taxAmount.toFixed(2)} zł</span>
            </div>
            <div className="flex justify-between text-blue-200">
              <span>ZUS:</span>
              <span className="font-semibold">{results.scale.zusContribution.toFixed(2)} zł</span>
            </div>
            <div className="flex justify-between text-blue-200">
              <span>Ubezpiecz.:</span>
              <span className="font-semibold">{results.scale.healthInsurance.toFixed(2)} zł</span>
            </div>
            <div className="border-t border-orange-500/20 pt-2 mt-2 flex justify-between font-bold text-cyan-300">
              <span>Netto:</span>
              <span>{results.scale.netIncome.toFixed(2)} zł</span>
            </div>
            <div className="flex justify-between text-blue-200 text-xs">
              <span>Stawka eff.:</span>
              <span>{(results.scale.effectiveTaxRate * 100).toFixed(2)}%</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Export Button */}
      <Button
        onClick={handleDownloadPDF}
        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-3 flex items-center justify-center gap-2"
      >
        <Download className="w-4 h-4" />
        Pobierz porównanie jako plik
      </Button>
    </div>
  )
}
