'use client'

import { useState } from 'react'
import { Calendar, AlertCircle, Clock, ChevronDown } from 'lucide-react'
import { officialDeadlines, getDeadlinesByCategory, type DeadlineCategory, formatDate } from '@/lib/data/official-deadlines'
import { Card } from '@/components/ui/card'

const categories: { value: DeadlineCategory; label: string; color: string }[] = [
  { value: 'PIT', label: 'PIT', color: 'from-blue-600 to-blue-500' },
  { value: 'ZUS', label: 'ZUS', color: 'from-orange-600 to-orange-500' },
  { value: 'VAT', label: 'VAT', color: 'from-green-600 to-green-500' },
  { value: 'KSEF', label: 'kSEF', color: 'from-purple-600 to-purple-500' },
  { value: 'FIRMA', label: 'Rejestracja Firmy', color: 'from-pink-600 to-pink-500' },
  { value: 'INNE', label: 'Inne', color: 'from-slate-600 to-slate-500' },
]

const priorityColors = {
  critical: 'text-red-400 bg-red-500/20 border-red-500/30',
  high: 'text-yellow-400 bg-yellow-500/20 border-yellow-500/30',
  medium: 'text-blue-400 bg-blue-500/20 border-blue-500/30',
  low: 'text-gray-400 bg-gray-500/20 border-gray-500/30',
}

const priorityLabels = {
  critical: 'Pilne',
  high: 'Ważne',
  medium: 'Normalne',
  low: 'Niskie',
}

export function OfficialCalendarComponent() {
  const [selectedCategories, setSelectedCategories] = useState<DeadlineCategory[]>([])
  const [expandedDeadline, setExpandedDeadline] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  const deadlines = officialDeadlines
    .filter((d) => selectedCategories.length === 0 || selectedCategories.includes(d.category))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

  const handleCategoryToggle = (category: DeadlineCategory) => {
    setSelectedCategories((prev) => (prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]))
  }

  return (
    <div className="w-full space-y-6">
      {/* Filter Section */}
      <div className="space-y-3">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="w-full flex items-center justify-between px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white hover:bg-slate-700 transition-colors"
        >
          <span className="text-sm font-semibold">Kategorie {selectedCategories.length > 0 && `(${selectedCategories.length})`}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </button>

        {showFilters && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-4 bg-slate-800 border border-white/10 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => handleCategoryToggle(cat.value)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                  selectedCategories.includes(cat.value)
                    ? `bg-gradient-to-r ${cat.color} text-white shadow-lg`
                    : 'bg-slate-700 text-blue-200 hover:bg-slate-600'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results Count */}
      <div className="text-sm text-blue-200/70">
        Znaleziono terminów: <span className="font-semibold text-cyan-300">{deadlines.length}</span>
      </div>

      {/* Deadlines List */}
      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {deadlines.length > 0 ? (
          deadlines.map((deadline) => {
            const categoryInfo = categories.find((c) => c.value === deadline.category)
            const isExpanded = expandedDeadline === deadline.id

            return (
              <Card
                key={deadline.id}
                className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 border transition-all cursor-pointer overflow-hidden ${
                  isExpanded
                    ? `border-${deadline.category === 'PIT' ? 'blue' : deadline.category === 'ZUS' ? 'orange' : deadline.category === 'VAT' ? 'green' : 'purple'}-500 shadow-lg`
                    : 'border-white/10 hover:border-white/20'
                }`}
                onClick={() => setExpandedDeadline(isExpanded ? null : deadline.id)}
              >
                {/* Header */}
                <div className={`px-4 py-3 flex items-start gap-3 bg-gradient-to-r ${categoryInfo?.color}`}>
                  <Calendar className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white text-sm truncate">{deadline.title}</h3>
                    <p className="text-xs text-white/80">{formatDate(deadline.date)}</p>
                  </div>
                  <div
                    className={`px-2 py-1 rounded text-xs font-semibold flex-shrink-0 border ${priorityColors[deadline.priority]}`}
                  >
                    {priorityLabels[deadline.priority]}
                  </div>
                </div>

                {/* Details */}
                {isExpanded && (
                  <div className="px-4 py-3 border-t border-white/10 bg-slate-900/30 space-y-2">
                    <p className="text-sm text-blue-200/80">{deadline.description}</p>

                    {deadline.notes && (
                      <div className="flex gap-2 text-sm p-2 bg-blue-500/10 border border-blue-500/20 rounded">
                        <AlertCircle className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <p className="text-blue-200/70">{deadline.notes}</p>
                      </div>
                    )}

                    <div className="flex items-center gap-2 text-xs text-blue-200/60 pt-2">
                      <Clock className="w-3 h-3" />
                      <span>{formatDate(deadline.date)}</span>
                    </div>
                  </div>
                )}
              </Card>
            )
          })
        ) : (
          <div className="text-center py-8 text-blue-200/60">Brak terminów spełniających kryteria</div>
        )}
      </div>

      {/* Legend */}
      <div className="p-4 bg-slate-800/40 border border-white/10 rounded-lg space-y-2">
        <p className="text-xs font-semibold text-blue-200 mb-2">Priorytety:</p>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {Object.entries(priorityColors).map(([priority, colors]) => (
            <div key={priority} className={`px-2 py-1 rounded border flex items-center gap-2 ${colors}`}>
              <span className="w-2 h-2 rounded-full bg-current"></span>
              {priorityLabels[priority as keyof typeof priorityLabels]}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
