'use client'

import { Card } from '@/components/ui/card'
import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

interface SubscriptionStatusProps {
  plan: 'basic' | 'premium'
  invoicesUsed?: number
  invoicesLimit?: number
  subscriptionStatus?: 'active' | 'paused' | 'cancelled' | 'expired'
}

export function SubscriptionStatus({
  plan,
  invoicesUsed = 0,
  invoicesLimit = 5,
  subscriptionStatus = 'active',
}: SubscriptionStatusProps) {
  const isPremium = plan === 'premium'
  const isLimitNear = !isPremium && invoicesUsed >= invoicesLimit - 1
  const isLimitReached = !isPremium && invoicesUsed >= invoicesLimit

  return (
    <Card className="bg-slate-800/50 border-blue-500/20 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Status subskrypcji</h3>
        <div
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            isPremium
              ? 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-300 border border-cyan-500/50'
              : 'bg-blue-500/20 text-blue-300 border border-blue-500/50'
          }`}
        >
          {isPremium ? 'Premium' : 'Podstawowy'}
        </div>
      </div>

      {!isPremium && (
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-blue-200/70">Faktury utworzone:</span>
            <span className="text-sm font-medium text-white">
              {invoicesUsed} / {invoicesLimit}
            </span>
          </div>
          <div className="w-full bg-slate-700 rounded-full h-2">
            <div
              className={`h-2 rounded-full transition-all ${
                isLimitReached
                  ? 'bg-red-500'
                  : isLimitNear
                    ? 'bg-yellow-500'
                    : 'bg-cyan-500'
              }`}
              style={{ width: `${(invoicesUsed / invoicesLimit) * 100}%` }}
            />
          </div>
        </div>
      )}

      {isLimitReached && (
        <div className="mb-4 p-4 bg-red-500/10 border border-red-500/50 rounded-lg flex gap-3">
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-red-300 mb-2">
              Limit faktur wyczerpany
            </p>
            <p className="text-xs text-red-200/70 mb-3">
              Przejdź na plan Premium aby tworzyć nieograniczone faktury
            </p>
            <Link href="/pricing">
              <button className="text-xs bg-red-500/20 hover:bg-red-500/30 text-red-300 px-3 py-1 rounded transition-colors">
                Upgrade do Premium
              </button>
            </Link>
          </div>
        </div>
      )}

      {isPremium && subscriptionStatus === 'active' && (
        <div className="p-4 bg-cyan-500/10 border border-cyan-500/50 rounded-lg">
          <p className="text-sm text-cyan-300">
            Masz dostęp do wszystkich funkcji Premium i nieograniczonej liczby faktur
          </p>
        </div>
      )}

      {isPremium && subscriptionStatus !== 'active' && (
        <div className="p-4 bg-yellow-500/10 border border-yellow-500/50 rounded-lg">
          <p className="text-sm text-yellow-300 font-medium">
            Status subskrypcji: {subscriptionStatus === 'paused' ? 'Wznowiona' : subscriptionStatus}
          </p>
        </div>
      )}
    </Card>
  )
}
