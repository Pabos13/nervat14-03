'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ACADEMY_COURSES, getTotalDuration } from '@/lib/academy-courses'
import { BookOpen, Clock, Award, ArrowRight, Zap } from 'lucide-react'

export default function CoursesPage() {
  const categories = ['Wszystkie', ...new Set(ACADEMY_COURSES.map(c => c.category))]
  const [selectedCategory, setSelectedCategory] = React.useState('Wszystkie')
  
  const filteredCourses = selectedCategory === 'Wszystkie'
    ? ACADEMY_COURSES
    : ACADEMY_COURSES.filter(c => c.category === selectedCategory)

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
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
          {/* Title Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-8 h-8 text-indigo-400" />
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                VAT Faktura Academy
              </h1>
            </div>
            <p className="text-lg text-blue-200/70 max-w-2xl mx-auto">
              Bezpłatne kursy online dla przedsiębiorców. Naucz się jak prowadzić biznes, rozliczać podatki i zarządzać finansami firmy.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-12 justify-center">
            {categories.map(cat => (
              <Button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-600 text-white'
                    : 'bg-slate-800 text-blue-200 border border-blue-500/30 hover:border-blue-500'
                }`}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => {
              const duration = getTotalDuration(course)
              const levelColors = {
                beginner: 'bg-green-500/20 border-green-500/50 text-green-300',
                intermediate: 'bg-yellow-500/20 border-yellow-500/50 text-yellow-300',
                advanced: 'bg-red-500/20 border-red-500/50 text-red-300'
              }
              const levelLabels = {
                beginner: 'Początkujący',
                intermediate: 'Średniozaawansowany',
                advanced: 'Zaawansowany'
              }

              return (
                <Link key={course.id} href={`/akademia/kursy/${course.id}`}>
                  <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 border border-white/10 p-6 h-full hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 cursor-pointer group">
                    <div className="space-y-4 h-full flex flex-col">
                      {/* Header */}
                      <div>
                        <div className="flex items-start justify-between mb-3">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${levelColors[course.level]}`}>
                            {levelLabels[course.level]}
                          </span>
                          {course.free && (
                            <span className="text-xs font-bold text-green-300 bg-green-500/20 px-3 py-1 rounded-full">
                              DARMOWY
                            </span>
                          )}
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                          {course.title}
                        </h3>
                        <p className="text-blue-200/70 text-sm">
                          {course.description}
                        </p>
                      </div>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-4 text-xs text-blue-200/60 py-4 border-t border-white/5">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-cyan-400" />
                          <span>{duration} minut</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4 text-cyan-400" />
                          <span>{course.lessons.length} lekcji</span>
                        </div>
                        {course.certificate && (
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4 text-cyan-400" />
                            <span>Certyfikat</span>
                          </div>
                        )}
                      </div>

                      {/* Button */}
                      <div className="flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all font-semibold text-sm mt-auto">
                        <span>Przejdź do kursu</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>

          {/* Info Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-blue-600/15 border-blue-500/30 p-6">
              <Zap className="w-8 h-8 text-blue-400 mb-3" />
              <h3 className="font-bold text-blue-300 mb-2">100% Bezpłatne</h3>
              <p className="text-blue-200/70 text-sm">
                Wszystkie kursy są całkowicie darmowe. Brak ukrytych opłat ani abonamentów.
              </p>
            </Card>

            <Card className="bg-cyan-600/15 border-cyan-500/30 p-6">
              <BookOpen className="w-8 h-8 text-cyan-400 mb-3" />
              <h3 className="font-bold text-cyan-300 mb-2">Dostęp 24/7</h3>
              <p className="text-cyan-200/70 text-sm">
                Ucz się o własnym tempie. Dostęp do wszystkich materiałów w dowolnym momencie.
              </p>
            </Card>

            <Card className="bg-green-600/15 border-green-500/30 p-6">
              <Award className="w-8 h-8 text-green-400 mb-3" />
              <h3 className="font-bold text-green-300 mb-2">Certyfikaty</h3>
              <p className="text-green-200/70 text-sm">
                Otrzymaj certyfikat po ukończeniu kursu. Pokaż swoją wiedzę potencjalnym klientom.
              </p>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

import React from 'react'
