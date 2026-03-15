'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { calculateEmployeeSalary, calculateTotalCost, calculateFromNetSalary } from '@/lib/calculators/salary-calculator'
import { Download } from 'lucide-react'

export default function SalaryCalculatorForm() {
  const [inputType, setInputType] = useState<'gross' | 'net'>('gross')
  const [amount, setAmount] = useState(5000)

  const calculation = inputType === 'gross'
    ? calculateEmployeeSalary(amount)
    : calculateFromNetSalary(amount)

  const costData = calculateTotalCost(calculation.grossSalary)

  const handleDownload = () => {
    const doc = `VAT Faktura - Kalkulator Wynagrodzeń
==========================================

Plik do druku dla pracownika

Wynagrodzenie brutto: ${calculation.grossSalary.toFixed(2)} zł

SKŁADNIKI WYNAGRODZENIA:
- Wynagrodzenie brutto: ${calculation.grossSalary.toFixed(2)} zł
- Podatek PIT: -${calculation.pit.toFixed(2)} zł
- ZUS (pracownik): -${(calculation.pensionContribution + calculation.disabilityInsurance + calculation.illnessInsurance).toFixed(2)} zł
- Ubezpieczenie zdrowotne: -${calculation.healthInsurance.toFixed(2)} zł
---
- Wynagrodzenie netto: ${calculation.netSalary.toFixed(2)} zł

KOSZTY PRACODAWCY:
- Wynagrodzenie brutto: ${calculation.grossSalary.toFixed(2)} zł
- ZUS pracodawcy: +${calculation.employerCosts.toFixed(2)} zł
---
- KOSZT CAŁKOWITY: ${costData.totalCost.toFixed(2)} zł

Procent netto: ${((calculation.netSalary / calculation.grossSalary) * 100).toFixed(1)}%
Koszt dla pracodawcy: ${((costData.totalCost / calculation.grossSalary) * 100).toFixed(1)}%

Data wygenerowania: ${new Date().toLocaleString('pl-PL')}
    `

    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(doc))
    element.setAttribute('download', 'kalkulator-wynagrodzen.txt')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="space-y-6">
      {/* Input Selection */}
      <div className="flex gap-2 mb-6">
        <Button
          onClick={() => setInputType('gross')}
          className={`flex-1 py-3 font-semibold transition-all ${
            inputType === 'gross'
              ? 'bg-cyan-600 text-white'
              : 'bg-slate-800 text-blue-200 border border-blue-500/30 hover:bg-slate-700'
          }`}
        >
          Oblicz z brutto
        </Button>
        <Button
          onClick={() => setInputType('net')}
          className={`flex-1 py-3 font-semibold transition-all ${
            inputType === 'net'
              ? 'bg-cyan-600 text-white'
              : 'bg-slate-800 text-blue-200 border border-blue-500/30 hover:bg-slate-700'
          }`}
        >
          Oblicz z netto
        </Button>
      </div>

      {/* Input Card */}
      <Card className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/30 p-6">
        <label className="block text-sm font-semibold text-blue-200 mb-3">
          {inputType === 'gross' ? 'Wynagrodzenie brutto (zł)' : 'Wynagrodzenie netto (zł)'}
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full px-4 py-3 bg-slate-800 border border-blue-500/30 rounded-lg text-white text-lg font-semibold"
        />
        <input
          type="range"
          min="1000"
          max="20000"
          step="100"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full mt-3 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
        />
      </Card>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Employee Side */}
        <Card className="bg-blue-600/15 border-blue-500/30 p-6">
          <h3 className="font-bold text-blue-300 mb-4">Po stronie pracownika:</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-blue-200">
              <span>Wynagrodzenie brutto:</span>
              <span className="font-semibold">{calculation.grossSalary.toFixed(2)} zł</span>
            </div>
            <div className="flex justify-between text-red-300">
              <span>Podatek PIT:</span>
              <span className="font-semibold">-{calculation.pit.toFixed(2)} zł</span>
            </div>
            <div className="flex justify-between text-red-300">
              <span>ZUS (emerytura, renta):</span>
              <span className="font-semibold">-{(calculation.pensionContribution + calculation.disabilityInsurance).toFixed(2)} zł</span>
            </div>
            <div className="flex justify-between text-red-300">
              <span>Ubezpieczenie zdrowotne:</span>
              <span className="font-semibold">-{calculation.healthInsurance.toFixed(2)} zł</span>
            </div>
            <div className="flex justify-between text-red-300 text-xs">
              <span>Ubezpieczenie chorobowe:</span>
              <span className="font-semibold">-{calculation.illnessInsurance.toFixed(2)} zł</span>
            </div>
            <div className="border-t border-blue-500/20 pt-3 mt-3 flex justify-between font-bold text-cyan-300">
              <span>WYNAGRODZENIE NETTO:</span>
              <span>{calculation.netSalary.toFixed(2)} zł</span>
            </div>
            <div className="flex justify-between text-blue-200/60 text-xs">
              <span>Procent netto:</span>
              <span>{((calculation.netSalary / calculation.grossSalary) * 100).toFixed(1)}%</span>
            </div>
          </div>
        </Card>

        {/* Employer Side */}
        <Card className="bg-purple-600/15 border-purple-500/30 p-6">
          <h3 className="font-bold text-purple-300 mb-4">Po stronie pracodawcy:</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between text-purple-200">
              <span>Wynagrodzenie brutto:</span>
              <span className="font-semibold">{calculation.grossSalary.toFixed(2)} zł</span>
            </div>
            <div className="flex justify-between text-purple-200">
              <span>ZUS pracodawcy:</span>
              <span className="font-semibold">+{calculation.employerCosts.toFixed(2)} zł</span>
            </div>
            <div className="border-t border-purple-500/20 pt-3 mt-3 flex justify-between font-bold text-cyan-300">
              <span>KOSZT CAŁKOWITY:</span>
              <span>{costData.totalCost.toFixed(2)} zł</span>
            </div>
            <div className="flex justify-between text-purple-200/60 text-xs">
              <span>Koszty pracodawcy:</span>
              <span>{((costData.totalCost - calculation.grossSalary) / calculation.grossSalary * 100).toFixed(1)}%</span>
            </div>
          </div>
        </Card>
      </div>

      {/* Summary */}
      <Card className="bg-green-600/15 border-green-500/30 p-6">
        <h3 className="font-bold text-green-300 mb-4">Podsumowanie:</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <p className="text-green-200/60">Pracownik otrzyma</p>
            <p className="font-bold text-white text-lg">{calculation.netSalary.toFixed(2)} zł</p>
          </div>
          <div>
            <p className="text-green-200/60">Pracownik zapłaci podatki</p>
            <p className="font-bold text-white text-lg">{(calculation.pit + calculation.healthInsurance + calculation.pensionContribution + calculation.disabilityInsurance + calculation.illnessInsurance).toFixed(2)} zł</p>
          </div>
          <div>
            <p className="text-green-200/60">Pracodawca zapłaci ZUS</p>
            <p className="font-bold text-white text-lg">{calculation.employerCosts.toFixed(2)} zł</p>
          </div>
          <div>
            <p className="text-green-200/60">Razem dla budżetu</p>
            <p className="font-bold text-white text-lg">{(calculation.pit + calculation.healthInsurance + calculation.pensionContribution + calculation.disabilityInsurance + calculation.illnessInsurance + calculation.employerCosts).toFixed(2)} zł</p>
          </div>
        </div>
      </Card>

      {/* Download */}
      <Button
        onClick={handleDownload}
        className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold py-3 flex items-center justify-center gap-2"
      >
        <Download className="w-4 h-4" />
        Pobierz raport
      </Button>
    </div>
  )
}
