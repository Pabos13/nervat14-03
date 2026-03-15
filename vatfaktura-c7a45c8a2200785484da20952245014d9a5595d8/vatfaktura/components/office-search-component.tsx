'use client'

import { useState } from 'react'
import { Building2, Phone, Mail, Globe, MapPin, Clock, ChevronDown } from 'lucide-react'
import { polishCities } from '@/lib/data/polish-cities'
import { officesData, getOfficesByCity, getOfficeTypeLabel, type OfficeType } from '@/lib/data/offices-data'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const officeTypes: { value: OfficeType; label: string }[] = [
  { value: 'city_office', label: 'Urząd Miasta' },
  { value: 'tax_office', label: 'Urząd Skarbowy' },
  { value: 'labor_office', label: 'Powiatowy Urząd Pracy' },
  { value: 'governor', label: 'Wojewoda' },
  { value: 'gus', label: 'GUS' },
  { value: 'zus', label: 'ZUS' },
  { value: 'district', label: 'Starostwo' },
]

export function OfficeSearchComponent() {
  const [selectedCity, setSelectedCity] = useState<string>('Warszawa')
  const [selectedTypes, setSelectedTypes] = useState<OfficeType[]>([])
  const [expandedFilters, setExpandedFilters] = useState(false)
  const [selectedOffice, setSelectedOffice] = useState<string | null>(null)

  const offices = getOfficesByCity(selectedCity).filter((office) => selectedTypes.length === 0 || selectedTypes.includes(office.type))

  const handleTypeToggle = (type: OfficeType) => {
    setSelectedTypes((prev) => (prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]))
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
              setSelectedTypes([])
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

        {/* Type Filters */}
        <div>
          <button
            onClick={() => setExpandedFilters(!expandedFilters)}
            className="w-full flex items-center justify-between px-4 py-3 bg-slate-800 border border-white/10 rounded-lg text-white hover:bg-slate-700 transition-colors group"
          >
            <span className="text-sm font-semibold">Typ urzędu {selectedTypes.length > 0 && `(${selectedTypes.length})`}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${expandedFilters ? 'rotate-180' : ''}`} />
          </button>

          {expandedFilters && (
            <div className="mt-2 p-4 bg-slate-800 border border-white/10 rounded-lg space-y-2">
              {officeTypes.map((type) => (
                <label key={type.value} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type.value)}
                    onChange={() => handleTypeToggle(type.value)}
                    className="w-4 h-4 rounded bg-slate-700 border-white/20 text-cyan-500 checked:bg-cyan-500 cursor-pointer"
                  />
                  <span className="text-sm text-blue-200 group-hover:text-white transition-colors">{type.label}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Clear Filters */}
        {selectedTypes.length > 0 && (
          <Button
            onClick={() => setSelectedTypes([])}
            variant="outline"
            className="w-full border-white/20 text-blue-300 hover:bg-white/5"
          >
            Wyczyść filtry
          </Button>
        )}
      </div>

      {/* Results Count */}
      <div className="text-sm text-blue-200/70">
        Znalezione urzędy: <span className="font-semibold text-cyan-300">{offices.length}</span>
      </div>

      {/* Offices List */}
      <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
        {offices.length > 0 ? (
          offices.map((office) => (
            <Card
              key={office.id}
              className={`bg-gradient-to-br from-slate-800/50 to-slate-900/50 border transition-all cursor-pointer ${
                selectedOffice === office.id ? 'border-cyan-500 shadow-lg shadow-cyan-500/20' : 'border-white/10 hover:border-cyan-500/40'
              } p-4`}
              onClick={() => setSelectedOffice(selectedOffice === office.id ? null : office.id)}
            >
              <div className="flex items-start gap-3 mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white truncate">{office.name}</h3>
                  <p className="text-xs text-blue-200/60">{getOfficeTypeLabel(office.type)}</p>
                </div>
              </div>

              {selectedOffice === office.id && (
                <div className="mt-3 pt-3 border-t border-white/10 space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div className="text-blue-200/80">
                      <p>{office.address}</p>
                      <p>{office.zipCode}</p>
                    </div>
                  </div>

                  {office.phone.length > 0 && (
                    <div className="flex items-start gap-2 text-sm">
                      <Phone className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <div className="text-blue-200/80">
                        {office.phone.map((p) => (
                          <p key={p}>{p}</p>
                        ))}
                      </div>
                    </div>
                  )}

                  {office.email && (
                    <div className="flex items-start gap-2 text-sm">
                      <Mail className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <a href={`mailto:${office.email}`} className="text-cyan-400 hover:text-cyan-300">
                        {office.email}
                      </a>
                    </div>
                  )}

                  {office.website && (
                    <div className="flex items-start gap-2 text-sm">
                      <Globe className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <a href={office.website} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 break-all">
                        Strona internetowa
                      </a>
                    </div>
                  )}

                  <div className="flex items-start gap-2 text-sm mt-2">
                    <Clock className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div className="text-blue-200/80 text-xs space-y-1">
                      {office.hours.map((h) => (
                        <p key={h.day}>
                          <span className="font-semibold capitalize">{h.day}:</span> {h.hours}
                        </p>
                      ))}
                    </div>
                  </div>

                  {office.description && <p className="text-xs text-blue-200/60 italic mt-2">{office.description}</p>}
                </div>
              )}
            </Card>
          ))
        ) : (
          <div className="text-center py-8 text-blue-200/60">Brak urzędów spełniających kryteria</div>
        )}
      </div>
    </div>
  )
}
