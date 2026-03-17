'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function CheckoutSuccessPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const email = searchParams.get('email')
  const userId = searchParams.get('userId')
  const sessionId = searchParams.get('sessionId')

  useEffect(() => {
    // W realnym scenariuszu webhook by to obsłużył
    // Tymczasowo - aktualizuj plan w localStorage
    if (userId) {
      const user = JSON.parse(localStorage.getItem('vatfaktura_user') || '{}')
      if (user.id === userId) {
        user.subscription = user.subscription || {}
        user.subscription.plan = 'premium'
        user.subscription.subscriptionStatus = 'active'
        localStorage.setItem('vatfaktura_user', JSON.stringify(user))
      }
    }
  }, [userId])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="bg-slate-800/50 border border-blue-500/20 rounded-lg p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 mb-4">
            <span className="text-3xl">✓</span>
          </div>
        </div>

        <h1 className="text-2xl font-bold text-white mb-2">Gratulacje!</h1>
        <p className="text-slate-300 mb-2">Twoja płatność Premium została przetworzona.</p>
        <p className="text-sm text-slate-400 mb-6">Email: {email}</p>

        <div className="space-y-3">
          <Link href="/dashboard" className="block">
            <Button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
              Przejdź do Dashboard
            </Button>
          </Link>
        </div>

        <p className="text-xs text-slate-500 mt-6">Session ID: {sessionId}</p>
      </div>
    </div>
  )
}
