'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Building2, FileText, Calculator, Briefcase } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/hooks/use-language'
import { t } from '@/lib/i18n/translations'

export function HeaderMenu() {
  const { language } = useLanguage()
  const [open, setOpen] = useState(false)
  let hoverTimeout: NodeJS.Timeout

  const menuItems = [
    { href: '/zaloz-firme-online', labelKey: 'menu.company', icon: <Building2 className="w-4 h-4" />, accent: 'green' },
    { href: '/dashboard', labelKey: 'menu.invoice', icon: <FileText className="w-4 h-4" />, accent: 'blue' },
    { href: '/dashboard/pit', labelKey: 'menu.pit', icon: <Calculator className="w-4 h-4" />, accent: 'emerald' },
    { href: '/dashboard/zus', labelKey: 'menu.zus', icon: <Briefcase className="w-4 h-4" />, accent: 'orange' },
    { href: '/urzedy-i-porady', labelKey: 'menu.offices', icon: <Building2 className="w-4 h-4" />, accent: 'cyan' },
  ]

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout)
    setOpen(true)
  }

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setOpen(false)
    }, 300)
  }

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className="hidden sm:flex items-center gap-1 px-3 py-2 text-sm font-semibold text-blue-200 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200 group"
      >
        <span>{t('nav.menu', language)}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 group-hover:text-cyan-300 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute left-0 top-full mt-2 w-56 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Arrow */}
          <div className="absolute -top-1.5 left-6 w-3 h-3 bg-slate-900 border-t border-l border-white/10 transform rotate-45 z-10" />

          <div className="bg-slate-900/98 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden">
            <div className="px-2 py-2 space-y-0.5">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 group ${
                    item.accent === 'green'
                      ? 'text-green-300 hover:text-green-100 hover:bg-green-500/15'
                      : item.accent === 'emerald'
                      ? 'text-emerald-300 hover:text-emerald-100 hover:bg-emerald-500/15'
                      : item.accent === 'orange'
                      ? 'text-orange-300 hover:text-orange-100 hover:bg-orange-500/15'
                      : item.accent === 'cyan'
                      ? 'text-cyan-300 hover:text-cyan-100 hover:bg-cyan-500/15'
                      : 'text-blue-200/80 hover:text-white hover:bg-white/8'
                  }`}
                >
                  <span className={`flex-shrink-0 transition-transform duration-150 group-hover:scale-110 ${
                    item.accent === 'green' ? 'text-green-400' : item.accent === 'emerald' ? 'text-emerald-400' : item.accent === 'orange' ? 'text-orange-400' : item.accent === 'cyan' ? 'text-cyan-400' : 'text-blue-400/70'
                  }`}>
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium">{t(item.labelKey, language)}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
