'use client'

import { useState } from 'react'
import { Scale, Phone, Mail, Globe, MapPin, Clock, ChevronDown, CheckCircle2 } from 'lucide-react'
import { polishCities } from '@/lib/data/polish-cities'
import { legalAdviceData, getLegalAdviceByCity, type LegalAdvice } from '@/lib/data/legal-advice-data'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function LegalAdviceSearchComponent() {
  const [selectedCity, setSelectedCity] = useState<string>('Warszawa')
  const [selectedSpecializations, setSelectedSpecializations] = useState<string[]>([])
  const [expandedFilters, setExpandedFilters] = useState(false)
  const [selectedAdvice, setSelectedAdvice] = useState<string | null>(null)

  const allAdvice = getLegalAdviceByCity(selectedCity)

  const advices = allAdvice.filter((advice) => selectedSpecializations.length === 0 || selectedSpecializations.some((spec) => advice.specialization.includes(spec)))

  // Get all unique specializations
  const allSpecializations = Array.from(
    new Set(legalAdviceData.flatMap((a) => a.specialization))
  ).sort()

  const handleSpecializationToggle = (spec: string) => {
    setSelectedSpecializations((prev) => (prev.includes(spec) ? prev.filter((s) => s !== spec) : [...prev, spec]))
  }

  return (
    <div className="w-full space-y-6">
      {/* Search Controls */}
      <div className="space-y-4">
        {/* City Selector */}
        <div>
          <label className="block text-sm font-semibold text-white mb-2">Wybierz miasto:</label>
          <select
            value={selectedCity}
            onChange={(e) => {
              setSelectedCity(e.target.value)
              setSelectedSpecializations([])
            }}
            className="w-full px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white focus:outline-none focus:border-cyan-500/50 transition-colors"
          >
            {polishCities.map((city) => (
              <option key={city.id} value={city.name}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        {/* Specialization Filters */}
        <div>
          <button
            onClick={() => setExpandedFilters(!expandedFilters)}
            className="w-full flex items-center justify-between px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white hover:bg-slate-700 transition-colors"
          >
            <span className="text-sm font-semibold">Specjalizacja {selectedSpecializations.length > 0 && `(${selectedSpecializations.length})`}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${expandedFilters ? 'rotate-180' : ''}`} />
          </button>

          {expandedFilters && (
            <div className="mt-2 p-4 bg-slate-800 border border-white/10 rounded-lg space-y-2 max-h-40 overflow-y-auto">
              {allSpecializations.map((spec) => (
                <label key={spec} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedSpecializations.includes(spec)}
                    onChange={() => handleSpecializationToggle(spec)}
                    className="w-4 h-4 rounded bg-slate-700 border-white/20 text-cyan-500 checked:bg-cyan-500 cursor-pointer"
                  />
                  <span className="text-sm text-blue-200 group-hover:text-white transition-colors capitalize">{spec}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Clear Filters */}
        {selectedSpecializations.length > 0 && (
          <Button
            onClick={() => setSelectedSpecializations([])}
            variant="outline"
            className="w-full border-white/20 text-blue-300 hover:bg-white/5"
          >
            Wyczyść filtry
          </Button>
        )}
      </div>

      {/* Results Count */}
      <div className="text-sm text-blue-200/70">
        Znalezione porady: <span className="font-semibold text-cyan-300">{advices.length}</span>
      </div>

      {/* Advice List */}
      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {advices.length > 0 ? (
          advices.map((advice) => (
            <Card
              key={advice.id}
              className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 border transition-all cursor-pointer ${
                selectedAdvice === advice.id ? 'border-green-500 shadow-lg shadow-green-500/20' : 'border-white/10 hover:border-green-500/40'
              } p-4`}
              onClick={() => setSelectedAdvice(selectedAdvice === advice.id ? null : advice.id)}
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-green-600 flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-white truncate">{advice.name}</h3>
                    {advice.isFree && <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />}
                  </div>
                  <p className="text-xs text-green-200/60">{advice.type}</p>
                </div>
              </div>

              {selectedAdvice === advice.id && (
                <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                  {/* Description */}
                  <p className="text-sm text-green-200/80">{advice.description}</p>

                  {/* Address */}
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <div className="text-green-200/80">
                      <p>{advice.address}</p>
                      <p>{advice.zipCode}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  {advice.phone.length > 0 && (
                    <div className="flex items-start gap-2 text-sm">
                      <Phone className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <div className="text-green-200/80">
                        {advice.phone.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Email */}
                  {advice.email && (
                    <div className="flex items-start gap-2 text-sm">
                      <Mail className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <a href={`mailto:${advice.email}`} className="text-green-400 hover:text-green-300">
                        {advice.email}
                      </a>
                    </div>
                  )}

                  {/* Website */}
                  {advice.website && (
                    <div className="flex items-start gap-2 text-sm">
                      <Globe className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <a href={advice.website} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 break-all">
                        Strona internetowa
                      </a>
                    </div>
                  )}

                  {/* Hours */}
                  <div className="flex items-start gap-2 text-sm mt-2">
                    <Clock className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    <div className="text-green-200/80 text-xs space-y-1">
                      {advice.hours.map((h) => (
                        <p key={h.day}>
                          <span className="font-semibold capitalize">{h.day}:</span> {h.hours}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="flex flex-wrap gap-1 mt-2">
                    {advice.specialization.map((spec) => (
                      <span key={spec} className="px-2 py-1 text-xs bg-green-500/20 text-green-300 rounded capitalize">
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </Card>
          ))
        ) : (
          <div className="text-center py-8 text-green-200/60">Brak porad spełniających kryteria</div>
        )}
      </div>
    </div>
  )
}
