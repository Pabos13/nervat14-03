'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from '@/hooks/useUser'
import { useInvoices } from '../invoice-context'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Plus, LogOut, FileText, CreditCard, Search, Filter, X, Calculator, Shield, Briefcase, Building2 } from 'lucide-react'
import Link from 'next/link'
import InvoicesList from '@/components/invoices-list'
import DashboardStats from '@/components/dashboard-stats'
import { SubscriptionStatus } from '@/components/subscription-status'
import { getInvoiceCountAfterMigration } from '@/lib/subscription-limits'
import { SupportBanner } from '@/components/support-banner'

export default function DashboardPage() {
  const router = useRouter()
  const { user, isLoading, logout } = useUser()
  const { getInvoicesByUser } = useInvoices()
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'draft' | 'sent' | 'paid'>('all')
  const [sortBy, setSortBy] = useState<'date' | 'amount' | 'client'>('date')

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/login')
    }
  }, [user, isLoading, router])

  if (isLoading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center relative">
        <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-500/30 border-t-blue-500"></div>
      </div>
    )
  }

  const userInvoices = getInvoicesByUser(user.id)

  // Filtrowanie i sortowanie
  const filteredInvoices = userInvoices
    .filter(invoice => {
      const matchesSearch = 
        invoice.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
        invoice.client.name.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesStatus = filterStatus === 'all' || invoice.status === filterStatus
      
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime()
      } else if (sortBy === 'amount') {
        const totalA = a.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
        const totalB = b.items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0)
        return totalB - totalA
      } else if (sortBy === 'client') {
        return a.client.name.localeCompare(b.client.name)
      }
      return 0
    })

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <div className="min-h-screen relative">
      {/* Header */}
      <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-2 sm:py-4 flex items-center justify-between min-h-[56px] sm:min-h-[64px]">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="inline-flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/50 flex-shrink-0">
                <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="min-w-0">
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent truncate">VAT Faktura</h1>
                <p className="text-blue-300/70 text-xs sm:text-sm truncate hidden xs:block">Witaj, {user.company}</p>
              </div>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm text-blue-300 hover:text-white hover:bg-blue-500/20 rounded-lg transition-all border border-blue-500/30 hover:border-blue-500/50 min-h-[44px] ml-2"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Wyloguj się</span>
            <span className="sm:hidden">Wyloguj</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 relative z-10 space-y-6 sm:space-y-8">
        {/* Support Banner */}
        <SupportBanner />

        {/* Stats */}
        <DashboardStats invoices={userInvoices} />

        {/* Subscription Status */}
        <SubscriptionStatus
          plan={user.subscription?.plan || 'basic'}
          invoicesUsed={getInvoiceCountAfterMigration(userInvoices, user.subscription?.migrationDate || new Date())}
          invoicesLimit={5}
          subscriptionStatus={user.subscription?.subscriptionStatus}
        />

        {/* KSeF Banner - only for business accounts */}
        {user.accountType === 'business' && (
          <div className="mt-2 p-4 rounded-xl bg-gradient-to-r from-green-900/40 to-cyan-900/40 border border-green-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Integracja z KSeF</p>
                <p className="text-green-300/70 text-xs">Wysyłaj faktury do Krajowego Systemu e-Faktur przez Profil Zaufany</p>
              </div>
            </div>
            <Link href="/dashboard/ksef" className="flex-shrink-0">
              <Button className="min-h-[40px] bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-700 hover:to-cyan-700 text-xs sm:text-sm shadow-lg shadow-green-500/30 whitespace-nowrap">
                Połącz z KSeF
              </Button>
            </Link>
          </div>
        )}

        {/* PIT Banner */}
        <div className="mt-2 p-4 rounded-xl bg-gradient-to-r from-blue-900/60 to-cyan-900/60 border border-blue-500/30 flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Rozlicz PIT za rok 2024</p>
              <p className="text-blue-300/70 text-xs">Wypełnij PIT-37 lub PIT-36, podpisz elektronicznie i wyślij do US</p>
            </div>
          </div>
          <Link href="/dashboard/pit" className="flex-shrink-0">
            <Button className="min-h-[40px] bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-xs sm:text-sm shadow-lg shadow-blue-500/30 whitespace-nowrap">
              Rozlicz PIT
            </Button>
          </Link>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 sm:mt-6 grid grid-cols-2 sm:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
          <Link href="/dashboard/create-invoice" className="group">
            <Button className="w-full min-h-[44px] text-xs sm:text-sm font-medium bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/75 transition-all">
              <Plus className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Nowa faktura</span>
              <span className="sm:hidden">Nowa</span>
            </Button>
          </Link>
          <Link href="/zaloz-firme-online" className="group">
            <Button variant="outline" className="w-full min-h-[44px] text-xs sm:text-sm font-medium border-green-500/30 hover:bg-green-500/10 text-green-300 group-hover:border-green-500/50 transition-all">
              <Building2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Załóż firmę</span>
              <span className="sm:hidden">Firma</span>
            </Button>
          </Link>
          {user.accountType === 'business' && (
            <Link href="/dashboard/ksef" className="group">
              <Button variant="outline" className="w-full min-h-[44px] text-xs sm:text-sm font-medium border-green-500/30 hover:bg-green-500/10 text-green-300 group-hover:border-green-500/50 transition-all">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">KSeF</span>
                <span className="sm:hidden">KSeF</span>
              </Button>
            </Link>
          )}
          <Link href="/dashboard/pit" className="group">
            <Button variant="outline" className="w-full min-h-[44px] text-xs sm:text-sm font-medium border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-300 group-hover:border-cyan-500/50 transition-all">
              <Calculator className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Rozlicz PIT</span>
              <span className="sm:hidden">PIT</span>
            </Button>
          </Link>
          <Link href="/dashboard/zus" className="group">
            <Button variant="outline" className="w-full min-h-[44px] text-xs sm:text-sm font-medium border-orange-500/30 hover:bg-orange-500/10 text-orange-300 group-hover:border-orange-500/50 transition-all">
              <Briefcase className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">ZUS</span>
              <span className="sm:hidden">ZUS</span>
            </Button>
          </Link>
          <Link href="/pricing" className="group">
            <Button variant="outline" className="w-full min-h-[44px] text-xs sm:text-sm font-medium border-blue-500/30 hover:bg-blue-500/10 text-blue-300 group-hover:border-blue-500/50 transition-all">
              <CreditCard className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">{user.subscription?.plan === 'premium' ? 'Premium' : 'Upgrade'}</span>
              <span className="sm:hidden">{user.subscription?.plan === 'premium' ? 'Prem' : 'Upg'}</span>
            </Button>
          </Link>
          <Link href="/dashboard/settings" className="group">
            <Button variant="outline" className="w-full min-h-[44px] text-xs sm:text-sm font-medium border-blue-500/30 hover:bg-blue-500/10 text-blue-300 group-hover:border-blue-500/50 transition-all">
              <span className="hidden sm:inline">Ustawienia</span>
              <span className="sm:hidden">Ust</span>
            </Button>
          </Link>
        </div>

        {/* Invoices List */}
        <div className="mt-6 sm:mt-8">
          <div className="mb-4 sm:mb-6 space-y-3 sm:space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-blue-300/50" />
              <Input
                type="text"
                placeholder="Szukaj faktury..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 sm:pl-10 bg-slate-700/50 border-blue-500/30 text-white placeholder:text-blue-300/50 focus:border-blue-500/50 min-h-[44px] text-sm"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-300/50 hover:text-blue-300 min-h-[44px] min-w-[44px] flex items-center justify-center"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              )}
            </div>

            {/* Filters */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="w-4 h-4 text-blue-300/70 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-blue-300/70">Status:</span>
                <div className="flex gap-1 sm:gap-2 flex-wrap flex-1">
                  {(['all', 'draft', 'sent', 'paid'] as const).map((status) => (
                    <button
                      key={status}
                      onClick={() => setFilterStatus(status)}
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all min-h-[36px] sm:min-h-[40px] flex items-center justify-center ${
                        filterStatus === status
                          ? 'bg-blue-600 text-white'
                          : 'bg-slate-700/50 text-blue-300/70 hover:bg-slate-700'
                      }`}
                    >
                      {status === 'all' ? 'Wszystkie' : status === 'draft' ? 'Drafty' : status === 'sent' ? 'Wysłane' : 'Zapłacone'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs sm:text-sm text-blue-300/70">Sortuj:</span>
                <div className="flex gap-1 sm:gap-2 flex-wrap flex-1">
                  {(['date', 'amount', 'client'] as const).map((sort) => (
                    <button
                      key={sort}
                      onClick={() => setSortBy(sort)}
                      className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all min-h-[36px] sm:min-h-[40px] flex items-center justify-center ${
                        sortBy === sort
                          ? 'bg-cyan-600 text-white'
                          : 'bg-slate-700/50 text-blue-300/70 hover:bg-slate-700'
                      }`}
                    >
                      {sort === 'date' ? 'Dacie' : sort === 'amount' ? 'Kwocie' : 'Kliencie'}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <p className="text-xs sm:text-sm text-blue-300/70">
              Znaleziono {filteredInvoices.length} faktur{filteredInvoices.length === 1 ? 'ę' : filteredInvoices.length % 10 === 2 || filteredInvoices.length % 10 === 3 || filteredInvoices.length % 10 === 4 ? 'y' : ''}
            </p>
          </div>

          <InvoicesList invoices={filteredInvoices} />
        </div>
      </main>
    </div>
  )
}
