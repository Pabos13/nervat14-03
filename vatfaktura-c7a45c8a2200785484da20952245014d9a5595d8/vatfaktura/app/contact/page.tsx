'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Clock, MapPin, MessageCircle, Send, HelpCircle, FileText, BookOpen, Shield } from 'lucide-react'

const WHATSAPP_NUMBER = '48727141252'
const EMAIL = 'pawsli2532@gmail.com'

const topics = [
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Pytania o fakturowanie',
    desc: 'Faktury VAT, faktury proforma, korekty, duplikaty, eksport do PDF.',
  },
  {
    icon: <HelpCircle className="w-5 h-5" />,
    title: 'Rozliczenia PIT',
    desc: 'PIT-37, PIT-36, PIT-28, podpis elektroniczny, e-Deklaracje, UPO.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'KSEF i integracje',
    desc: 'Konfiguracja KSEF, wysyłka faktur, certyfikaty, tokeny autoryzacyjne.',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Konto i dane',
    desc: 'Rejestracja, logowanie, usunięcie konta, eksport danych (RODO).',
  },
]

const faq = [
  {
    q: 'Ile kosztuje VAT Faktura?',
    a: 'Pierwsze 5 faktur jest calkowicie za darmo. Po wykorzystaniu limitu mozesz wykupic Premium za 99 PLN/miesiac. Platnosc przez PayPal.',
  },
  {
    q: 'Czy moje faktury są bezpieczne?',
    a: 'Tak. Dane faktur przechowywane są wyłącznie lokalnie w Twojej przeglądarce (localStorage). Nic nie jest przesyłane na nasze serwery.',
  },
  {
    q: 'Jak wysłać PIT do urzędu skarbowego przez VAT Faktura?',
    a: 'Przejdź do sekcji "Rozlicz PIT", wybierz odpowiedni formularz, wypełnij dane, podpisz elektronicznie i wyślij jednym kliknięciem.',
  },
  {
    q: 'Czy VAT Faktura obsługuje KSEF?',
    a: 'Tak, VAT Faktura jest w pełni zintegrowana z Krajowym Systemem e-Faktur (KSEF). Możesz wysyłać i odbierać faktury strukturyzowane bezpośrednio z aplikacji.',
  },
]

export default function ContactPage() {
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')

  const handleWhatsApp = () => {
    const text = name
      ? `Cześć, mam na imię ${name}. ${message}`
      : message
    const encoded = encodeURIComponent(text.trim() || 'Cześć, chciałem/chciałam zapytać o VAT Faktura.')
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900 pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 text-balance">Skontaktuj się z nami</h1>
          <p className="text-blue-200/70 text-lg max-w-xl mx-auto">
            Masz pytanie lub problem? Napisz do nas — odpiszemy lub oddzwonimy tak szybko jak to możliwe.
          </p>
        </div>

        {/* Contact cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="group bg-slate-800/60 border border-blue-500/20 hover:border-blue-400/40 rounded-2xl p-6 transition-all flex flex-col gap-3"
          >
            <div className="p-2.5 bg-blue-500/15 rounded-xl w-fit">
              <Mail className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-1">Email</p>
              <p className="text-cyan-300 text-sm group-hover:text-cyan-200 transition-colors break-all">{EMAIL}</p>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-800/60 border border-green-500/25 hover:border-green-400/50 rounded-2xl p-6 transition-all flex flex-col gap-3"
          >
            <div className="p-2.5 bg-green-500/15 rounded-xl w-fit">
              <MessageCircle className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-1">WhatsApp</p>
              <p className="text-green-400 text-sm group-hover:text-green-300 transition-colors">+48 727 141 252</p>
              <p className="text-blue-200/50 text-xs mt-1">Pon–Pt, 9:00–18:00</p>
            </div>
          </a>

          {/* Address */}
          <div className="bg-slate-800/60 border border-blue-500/20 rounded-2xl p-6 flex flex-col gap-3">
            <div className="p-2.5 bg-blue-500/15 rounded-xl w-fit">
              <MapPin className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <p className="text-sm font-semibold text-white mb-1">Adres</p>
              <p className="text-blue-200/70 text-sm">ul. Kościuszki 15e/2</p>
              <p className="text-blue-200/70 text-sm">87-100 Toruń</p>
              <p className="text-blue-200/50 text-xs mt-1">Polska</p>
            </div>
          </div>
        </div>

        {/* WhatsApp form */}
        <div className="bg-slate-800/60 border border-green-500/25 rounded-2xl p-8 sm:p-10 mb-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-green-500/15 rounded-xl">
              <MessageCircle className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Napisz do nas na WhatsApp</h2>
              <p className="text-blue-200/60 text-sm">Wiadomość otworzy się w Twojej aplikacji WhatsApp</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="wa-name" className="block text-sm font-medium text-blue-200/80 mb-1.5">
                Imię <span className="text-blue-200/40">(opcjonalnie)</span>
              </label>
              <input
                id="wa-name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="np. Jan"
                className="w-full bg-slate-700/50 border border-blue-500/20 focus:border-green-500/50 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-blue-300/30 text-sm transition-colors"
              />
            </div>

            <div>
              <label htmlFor="wa-message" className="block text-sm font-medium text-blue-200/80 mb-1.5">
                Wiadomość
              </label>
              <textarea
                id="wa-message"
                rows={4}
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Opisz swoje pytanie lub problem..."
                className="w-full bg-slate-700/50 border border-blue-500/20 focus:border-green-500/50 focus:outline-none rounded-xl px-4 py-3 text-white placeholder-blue-300/30 text-sm transition-colors resize-none"
              />
            </div>

            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-bold rounded-xl shadow-lg shadow-green-900/30 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Otwórz WhatsApp
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Hours + email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
          <div className="bg-slate-800/40 border border-blue-500/15 rounded-2xl p-6 flex gap-4 items-start">
            <div className="p-2.5 bg-blue-500/15 rounded-xl flex-shrink-0">
              <Clock className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Czas odpowiedzi</h3>
              <p className="text-blue-200/70 text-sm">Email: do 24 godzin roboczych</p>
              <p className="text-blue-200/70 text-sm">WhatsApp: zwykle tego samego dnia</p>
              <p className="text-blue-200/50 text-xs mt-2">Poniedziałek–Piątek, 9:00–18:00 CET</p>
            </div>
          </div>

          <div className="bg-slate-800/40 border border-blue-500/15 rounded-2xl p-6 flex gap-4 items-start">
            <div className="p-2.5 bg-blue-500/15 rounded-xl flex-shrink-0">
              <Mail className="w-5 h-5 text-cyan-300" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-1">Wolisz email?</h3>
              <p className="text-blue-200/70 text-sm mb-2">Wyślij wiadomość bezpośrednio na adres:</p>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/30 text-cyan-300 hover:text-cyan-200 rounded-lg text-sm font-medium transition-all"
              >
                <Mail className="w-4 h-4" />
                {EMAIL}
              </a>
            </div>
          </div>
        </div>

        {/* Topics */}
        <h2 className="text-2xl font-bold text-white mb-6">W czym możemy pomóc</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          {topics.map((t, i) => (
            <div key={i} className="bg-slate-800/40 border border-blue-500/15 rounded-xl p-5 flex gap-4 items-start hover:border-blue-400/30 transition-colors">
              <div className="p-2 bg-blue-500/15 rounded-lg text-cyan-300 flex-shrink-0">{t.icon}</div>
              <div>
                <h3 className="font-semibold text-white mb-1">{t.title}</h3>
                <p className="text-sm text-blue-200/60">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 className="text-2xl font-bold text-white mb-6">Najczęstsze pytania</h2>
        <div className="space-y-4 mb-14">
          {faq.map((item, i) => (
            <div key={i} className="bg-slate-800/40 border border-blue-500/15 rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-blue-200/70 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex flex-wrap gap-4 justify-center pt-6 border-t border-blue-500/15">
          <Link href="/" className="text-sm text-blue-300 hover:text-white transition-colors">Strona główna</Link>
          <Link href="/faq" className="text-sm text-blue-300 hover:text-white transition-colors">Pełne FAQ</Link>
          <Link href="/privacy" className="text-sm text-blue-300 hover:text-white transition-colors">Polityka Prywatności</Link>
          <Link href="/terms" className="text-sm text-blue-300 hover:text-white transition-colors">Regulamin</Link>
          <Link href="/about" className="text-sm text-blue-300 hover:text-white transition-colors">O nas</Link>
        </div>

      </div>
    </main>
  )
}
