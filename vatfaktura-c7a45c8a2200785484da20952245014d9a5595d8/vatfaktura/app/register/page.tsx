'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Eye, EyeOff, AlertCircle, FileText, Building2, User } from 'lucide-react'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

type AccountType = 'private' | 'business'

export default function RegisterPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const planFromUrl = searchParams.get('plan') || 'basic'
  
  const [accountType, setAccountType] = useState<AccountType>('private')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [pesel, setPesel] = useState('')
  const [nip, setNip] = useState('')
  const [company, setCompany] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Hasła się nie zgadzają')
      return
    }

    if (password.length < 6) {
      setError('Hasło musi mieć co najmniej 6 znaków')
      return
    }

    if (accountType === 'private' && !pesel && !firstName) {
      setError('Podaj imię i nazwisko')
      return
    }

    setIsLoading(true)

    try {
      const body =
        accountType === 'private'
          ? { email, password, accountType, firstName, lastName, pesel, company: `${firstName} ${lastName}`, nip: '', plan: planFromUrl }
          : { email, password, accountType, company, nip, firstName: '', lastName: '', pesel: '', plan: planFromUrl }

      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const data = await response.json()

      if (!response.ok) {
        setError(data.error || 'Błąd rejestracji')
        return
      }

      if (data.token) {
        localStorage.setItem('vatfaktura_user', JSON.stringify({
          id: data.userId,
          email: data.email,
          company: data.company,
          nip: data.nip,
          accountType: data.accountType,
          firstName: data.firstName,
          lastName: data.lastName,
          subscription: data.subscription,
        }))
        localStorage.setItem('vatfaktura_auth_token', data.token)
      }

      await new Promise(resolve => setTimeout(resolve, 500))
      
      // Jeśli użytkownik wybrał Premium z pricing page, przejdź do checkout
      if (planFromUrl === 'premium') {
        try {
          const checkoutResponse = await fetch('/api/lemon-squeezy/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              plan: 'premium',
              userId: data.userId,
              email: data.email
            }),
          })
          
          const checkoutData = await checkoutResponse.json()
          
          if (checkoutResponse.ok && checkoutData.checkoutUrl) {
            window.location.href = checkoutData.checkoutUrl
            return
          } else {
            console.error('[v0] Checkout error:', checkoutData.error)
            setError(`Błąd checkout: ${checkoutData.error}. Upewnij się że Lemon Squeezy zmienne środowiskowe są ustawione (LEMON_SQUEEZY_API_KEY, LEMON_SQUEEZY_STORE_ID, LEMON_SQUEEZY_PREMIUM_PRODUCT_ID)`)
          }
        } catch (err) {
          console.error('[v0] Checkout error:', err)
          setError('Error: ' + (err instanceof Error ? err.message : 'Unknown error'))
        }
      }
      
      router.push('/dashboard')
    } catch (err) {
      setError('Błąd sieci - spróbuj ponownie')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 flex items-center justify-center px-3 sm:px-4 py-6 sm:py-8 relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="hidden sm:block absolute top-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl opacity-50" />
        <div className="hidden sm:block absolute -bottom-20 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <div className="mb-6 sm:mb-8 space-y-2 text-center">
          <div className="inline-block px-3 sm:px-4 py-1 sm:py-2 bg-blue-500/20 border border-blue-500/50 rounded-full">
            <span className="text-xs sm:text-sm font-semibold text-blue-300">
              {planFromUrl === 'premium' ? 'UPGRADE DO PREMIUM' : '5 FAKTUR ZA DARMO'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300">
            {planFromUrl === 'premium' ? 'Nieograniczone faktury • Pełen dostęp' : 'Bez karty kredytowej • Zacznij natychmiast'}
          </p>
        </div>

        <Card className="bg-slate-800/50 backdrop-blur-xl border border-blue-500/20 shadow-2xl shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300">
          <CardHeader className="text-center px-6 pt-6">
            <div className="mb-4 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white mb-4 shadow-lg shadow-blue-500/50">
                <FileText className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
            </div>
            <CardTitle className="text-white text-2xl sm:text-3xl font-bold">Rejestracja</CardTitle>
            <CardDescription className="text-sm text-blue-200/60 mt-2">
              {planFromUrl === 'premium' 
                ? 'Załóż konto i przejdź do płatności Premium'
                : 'Wybierz typ konta i załóż je za darmo'}
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 pb-6">
            {/* Account type selector */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <button
                type="button"
                onClick={() => setAccountType('private')}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  accountType === 'private'
                    ? 'border-blue-500 bg-blue-500/20 text-blue-300'
                    : 'border-blue-500/20 bg-slate-700/30 text-slate-400 hover:border-blue-500/40 hover:bg-slate-700/50'
                }`}
              >
                <User className="w-6 h-6" />
                <div className="text-center">
                  <p className="text-sm font-semibold">Osoba prywatna</p>
                  <p className="text-xs opacity-70 mt-0.5">Bez NIP</p>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setAccountType('business')}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all ${
                  accountType === 'business'
                    ? 'border-cyan-500 bg-cyan-500/20 text-cyan-300'
                    : 'border-blue-500/20 bg-slate-700/30 text-slate-400 hover:border-cyan-500/40 hover:bg-slate-700/50'
                }`}
              >
                <Building2 className="w-6 h-6" />
                <div className="text-center">
                  <p className="text-sm font-semibold">Firma / Działalność</p>
                  <p className="text-xs opacity-70 mt-0.5">Z NIP</p>
                </div>
              </button>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-lg bg-rose-500/20 border border-rose-500/30 mb-4 animate-in fade-in slide-in-from-top-2">
                <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-rose-300">{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-blue-300 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="twoj@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="min-h-[44px] bg-blue-500/10 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                />
              </div>

              {accountType === 'private' ? (
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-blue-300 mb-2">Imię</label>
                      <Input
                        type="text"
                        placeholder="Jan"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                        className="min-h-[44px] bg-blue-500/10 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-blue-300 mb-2">Nazwisko</label>
                      <Input
                        type="text"
                        placeholder="Kowalski"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                        className="min-h-[44px] bg-blue-500/10 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-blue-300 mb-2">
                      PESEL <span className="text-blue-300/50 font-normal">(opcjonalnie)</span>
                    </label>
                    <Input
                      type="text"
                      placeholder="12345678901"
                      value={pesel}
                      onChange={(e) => setPesel(e.target.value)}
                      maxLength={11}
                      className="min-h-[44px] bg-blue-500/10 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                    />
                    <p className="text-xs text-blue-300/40 mt-1">Potrzebny do podpisu elektronicznego PIT</p>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-blue-300 mb-2">NIP</label>
                    <Input
                      type="text"
                      placeholder="1234567890"
                      value={nip}
                      onChange={(e) => setNip(e.target.value)}
                      required
                      maxLength={10}
                      className="min-h-[44px] bg-blue-500/10 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-blue-300 mb-2">Nazwa firmy</label>
                    <Input
                      type="text"
                      placeholder="Twoja Firma Sp. z o.o."
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                      className="min-h-[44px] bg-blue-500/10 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-xs sm:text-sm font-medium text-blue-300 mb-1">Hasło</label>
                <div className="relative">
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="min-h-[44px] pr-10 bg-blue-500/10 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 hover:text-blue-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-blue-300 mb-1">Potwierdź hasło</label>
                <div className="relative">
                  <Input
                    type={showConfirm ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="min-h-[44px] pr-10 bg-blue-500/10 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/30 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-300 hover:text-blue-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
                  >
                    {showConfirm ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 shadow-lg shadow-green-500/50 min-h-[44px] text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all mt-4"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <span className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full"></span>
                    Rejestracja...
                  </span>
                ) : (
                  'Zarejestruj się'
                )}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-blue-500/20"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-slate-800/50 text-blue-300/70">Lub</span>
              </div>
            </div>

            <p className="text-center text-blue-200/70 text-sm">
              Masz już konto?{' '}
              <Link href="/login" className="text-green-400 hover:text-green-300 font-semibold transition-colors underline hover:underline">
                Zaloguj się
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
