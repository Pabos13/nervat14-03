'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { SPECIALISTS, SPECIALIST_CATEGORIES, searchSpecialists, getTopRatedSpecialists } from '@/lib/specialists-catalog'
import { Star, Phone, Mail, MapPin, Search, Users } from 'lucide-react'

export default function SpecialistsCatalogPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  
  const filteredSpecialists = searchQuery 
    ? searchSpecialists(searchQuery)
    : selectedCategory
    ? SPECIALISTS.filter(s => s.specialization === selectedCategory)
    : getTopRatedSpecialists(8)

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/narzedzia" className="inline-flex items-center gap-2 text-cyan-400 hover:opacity-70 transition-opacity">
              <span className="text-sm font-semibold">← Wróć do narzędzi</span>
            </Link>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="w-8 h-8 text-violet-400" />
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-violet-400 via-cyan-300 to-violet-300 bg-clip-text text-transparent">
                Katalog Specjalistów
              </h1>
            </div>
            <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
              Znajdź doświadczonych doradców, księgowych, audytorów i specjalistów dla Twojego biznesu.
            </p>
          </div>

          {/* Search */}
          <div className="mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-4 w-5 h-5 text-blue-200/40" />
              <input
                type="text"
                placeholder="Szukaj specjalisty, usługi lub miasta..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setSelectedCategory('')
                }}
                className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-blue-200/40 focus:border-cyan-500/60 focus:outline-none"
              />
            </div>
          </div>

          {/* Categories */}
          <div className="mb-12">
            <h3 className="text-lg font-bold text-blue-300 mb-4">Kategorie usług</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button
                onClick={() => {
                  setSelectedCategory('')
                  setSearchQuery('')
                }}
                className={`p-4 rounded-lg border transition-all text-center ${
                  !selectedCategory && !searchQuery
                    ? 'bg-cyan-600 border-cyan-500 text-white'
                    : 'bg-slate-800 border-blue-500/30 text-blue-200 hover:border-blue-500'
                }`}
              >
                <p className="text-2xl mb-1">⭐</p>
                <p className="text-sm font-semibold">Top Specjaliści</p>
              </button>
              
              {SPECIALIST_CATEGORIES.map(cat => (
                <button
                  key={cat.name}
                  onClick={() => {
                    setSelectedCategory(cat.name)
                    setSearchQuery('')
                  }}
                  className={`p-4 rounded-lg border transition-all text-center ${
                    selectedCategory === cat.name
                      ? 'bg-cyan-600 border-cyan-500 text-white'
                      : 'bg-slate-800 border-blue-500/30 text-blue-200 hover:border-blue-500'
                  }`}
                >
                  <p className="text-2xl mb-1">{cat.icon}</p>
                  <p className="text-xs font-semibold">{cat.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Specialists Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredSpecialists.map(specialist => (
              <Card key={specialist.id} className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 p-6 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                <div className="space-y-4 h-full flex flex-col">
                  {/* Header */}
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{specialist.name}</h3>
                    <p className="text-sm font-semibold text-cyan-300">{specialist.title}</p>
                    <p className="text-xs text-blue-200/60 mt-1">{specialist.specialization}</p>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < Math.round(specialist.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-blue-200/30'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-blue-200/70">
                      {specialist.rating} ({specialist.reviewsCount} recenzji)
                    </span>
                  </div>

                  {/* Info */}
                  <div className="space-y-2 text-sm text-blue-200/70 flex-grow">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-cyan-400" />
                      <span>{specialist.city}</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-blue-300 mb-1">Doświadczenie:</p>
                      <p className="text-xs">{specialist.experience} lat w branży</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-blue-300 mb-1">Stawka:</p>
                      <p className="text-xs text-green-400 font-semibold">{specialist.priceRange}</p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex gap-2 pt-4 border-t border-white/10">
                    <a
                      href={`tel:${specialist.phone}`}
                      className="flex-1 flex items-center justify-center gap-1 bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/30 rounded py-2 text-xs font-semibold text-blue-300 transition-all"
                    >
                      <Phone className="w-3 h-3" />
                      <span className="hidden sm:inline">Tel</span>
                    </a>
                    <a
                      href={`mailto:${specialist.email}`}
                      className="flex-1 flex items-center justify-center gap-1 bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-500/30 rounded py-2 text-xs font-semibold text-cyan-300 transition-all"
                    >
                      <Mail className="w-3 h-3" />
                      <span className="hidden sm:inline">Email</span>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredSpecialists.length === 0 && (
            <div className="text-center py-12">
              <p className="text-blue-200/70 text-lg">Brak specjalistów spełniających kryteria wyszukiwania.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
