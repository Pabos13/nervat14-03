'use client'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'

interface PricingCardProps {
  name: string
  price: number
  description: string
  features: string[]
  isPopular?: boolean
  onSelectPlan?: () => void
  isPurchased?: boolean
}

export function PricingCard({
  name,
  price,
  description,
  features,
  isPopular = false,
  onSelectPlan,
  isPurchased = false,
}: PricingCardProps) {
  return (
    <Card
      className={`relative p-8 transition-all duration-300 ${
        isPopular
          ? 'bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border-blue-500 shadow-2xl scale-105'
          : 'bg-slate-800/50 border-blue-500/20 hover:border-blue-500/50'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
            Najpopularniejszy
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
        <p className="text-blue-200/70 text-sm">{description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold text-white">{price}</span>
        {price > 0 && <span className="text-blue-200/70 ml-2">PLN/miesiąc</span>}
      </div>

      {!isPurchased ? (
        <Button
          onClick={onSelectPlan}
          className={`w-full mb-6 ${
            isPopular
              ? 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {price === 0 ? 'Zacznij za darmo' : 'Wybierz plan'}
        </Button>
      ) : (
        <div className="w-full mb-6 p-3 bg-green-500/20 border border-green-500/50 rounded-lg text-center text-green-300 font-medium">
          Aktywny plan
        </div>
      )}

      <div className="space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
            <span className="text-blue-100/80">{feature}</span>
          </div>
        ))}
      </div>
    </Card>
  )
}
