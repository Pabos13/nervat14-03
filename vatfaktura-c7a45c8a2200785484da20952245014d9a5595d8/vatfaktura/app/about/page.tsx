import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Mail, MapPin, Clock, Users, Shield, Zap, Star } from 'lucide-react'
import { AdSenseDisplay728x90, AdSenseDisplayAuto } from '@/components/adsense-banner'

export const metadata: Metadata = {
  title: 'O nas — VAT Faktura | Darmowy Program do Fakturowania i Rozliczenia PIT',
  description: 'Dowiedz się kim jesteśmy. VAT Faktura to bezpłatny program do fakturowania online z integracją KSEF i rozliczaniem PIT dla freelancerów i małych firm w Polsce.',
  alternates: { canonical: 'https://www.vatfaktura.pl/about' },
  openGraph: {
    title: 'O nas — VAT Faktura',
    description: 'Bezpłatny program do fakturowania i rozliczania PIT dla polskich przedsiębiorców. Poznaj naszą misję i wartości.',
    url: 'https://www.vatfaktura.pl/about',
    type: 'website',
    locale: 'pl_PL',
  },
}

const stats = [
  { value: '50 000+', label: 'aktywnych użytkowników' },
  { value: '2 000 000+', label: 'wystawionych faktur' },
  { value: '100%', label: 'bezpłatnie na zawsze' },
  { value: '4.9/5', label: 'średnia ocena użytkowników' },
]

const values = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Bezpieczeństwo danych',
    desc: 'Twoje faktury i dane podatkowe pozostają wyłącznie na Twoim urządzeniu. Nic nie trafia na zewnętrzne serwery — masz pełną kontrolę nad swoimi dokumentami.',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Prostota i szybkość',
    desc: 'Fakturę wystawisz w 30 sekund, a PIT wypełnisz w kilka minut. Intuicyjny interfejs zaprojektowany z myślą o przedsiębiorcach, nie o księgowych.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Dostępność dla wszystkich',
    desc: 'Wierzymy, że profesjonalne narzędzia biznesowe powinny być dostępne dla każdego — niezależnie od wielkości firmy czy budżetu.',
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Ciągły rozwój',
    desc: 'Regularnie wdrażamy nowe funkcje na podstawie opinii użytkowników. KSEF, e-Deklaracje, PIT online — zawsze aktualne z polskim prawem podatkowym.',
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/50 to-slate-900">

      {/* Hero */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-500/15 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300 mb-6">
            Polska firma — polskie rozwiązanie
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            O VAT Faktura
          </h1>
          <p className="text-xl text-blue-200/70 max-w-2xl mx-auto leading-relaxed">
            Tworzymy narzedzia finansowe dla polskich przedsiebiorcow. 5 faktur za darmo, Premium od 99 PLN/msc. KSEF i rozliczenia PIT.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 text-center">
                <div className="text-3xl font-black text-white mb-1">{s.value}</div>
                <div className="text-sm text-blue-200/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Nasza misja</h2>
              <p className="text-blue-200/80 leading-relaxed mb-4 text-lg">
                VAT Faktura powstała z prostego przekonania: każdy polski przedsiębiorca zasługuje na profesjonalne narzędzia bez ukrytych opłat i skomplikowanych interfejsów.
              </p>
              <p className="text-blue-200/80 leading-relaxed mb-4 text-lg">
                Zaczęliśmy od generatora faktur, który działał w przeglądarce bez rejestracji i serwerów. Dziś obsługujemy pełne rozliczenia PIT (PIT-37, PIT-36, PIT-36L, PIT-28, PIT-38 i inne), integrację z KSEF oraz wysyłkę e-Deklaracji z podpisem elektronicznym.
              </p>
              <p className="text-blue-200/80 leading-relaxed text-lg">
                Oferujemy 5 darmowych faktur na start, a potem Premium za 99 PLN/miesiac z nieograniczona liczba faktur. Platnosc przez PayPal.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600/15 to-cyan-600/15 border border-blue-500/30 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-5">Co oferujemy</h3>
              <ul className="space-y-3">
                {[
                  '5 faktur za darmo, potem Premium 99 PLN/msc',
                  'Integracja z KSEF (Krajowy System e-Faktur)',
                  'Rozliczenie PIT-37, PIT-36, PIT-36L, PIT-28, PIT-38, PIT-39',
                  'Podpis elektroniczny i wysyłka do urzędu skarbowego',
                  'Pobieranie UPO (Urzędowe Potwierdzenie Odbioru)',
                  'Eksport faktur do PDF',
                  'Zarządzanie bazą kontrahentów',
                  'Raporty i statystyki sprzedaży',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span className="text-blue-100 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center">Nasze wartości</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/40 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-blue-500/15 rounded-lg text-cyan-300">{v.icon}</div>
                  <h3 className="text-lg font-bold text-white">{v.title}</h3>
                </div>
                <p className="text-blue-200/70 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Twórca projektu</h2>
          <div className="bg-slate-800/50 border border-cyan-500/20 rounded-2xl p-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="flex-shrink-0 w-28 h-28 rounded-xl overflow-hidden border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                <Image
                  src="/images/pawel-sliwinski.png"
                  alt="Paweł Śliwiński - Założyciel VAT Faktura"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">Paweł Śliwiński</h3>
                <p className="text-cyan-300 text-sm mb-3">Założyciel i główny deweloper</p>
                <p className="text-blue-200/70 leading-relaxed mb-4">
                  Programista i przedsiębiorca z wieloletnim doświadczeniem w tworzeniu aplikacji webowych dla sektora finansowego. Twórca VAT Faktura — projektu zainicjowanego z potrzeby stworzenia prostego, bezpłatnego narzędzia do fakturowania, które szanuje prywatność użytkownika.
                </p>
                <div className="flex items-center gap-2 text-sm text-blue-300">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:pawsli2532@gmail.com" className="hover:text-cyan-300 transition-colors">pawsli2532@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8">Dane kontaktowe</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-cyan-300" />
                <span className="font-semibold text-white">Email</span>
              </div>
              <a href="mailto:pawsli2532@gmail.com" className="text-cyan-300 hover:text-cyan-200 transition-colors text-sm">
                pawsli2532@gmail.com
              </a>
            </div>
            <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-cyan-300" />
                <span className="font-semibold text-white">Godziny</span>
              </div>
              <p className="text-blue-200/70 text-sm">Pon–Pt, 9:00–18:00 CET</p>
            </div>
            <div className="bg-slate-800/50 border border-blue-500/20 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-cyan-300" />
                <span className="font-semibold text-white">Adres</span>
              </div>
              <p className="text-blue-200/70 text-sm">ul. Kościuszki 15e/2</p>
              <p className="text-blue-200/70 text-sm">87-100 Toruń</p>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense - baner przed CTA */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AdSenseDisplay728x90 />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-10">
          <h2 className="text-3xl font-bold text-white mb-4">Zacznij korzystać bezpłatnie</h2>
          <p className="text-blue-200/70 mb-8 text-lg">
            Dołącz do dziesiątek tysięcy polskich przedsiębiorców, którzy wystawiają faktury i rozliczają PIT z VAT Faktura.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-white font-bold rounded-xl shadow-lg transition-all"
            >
              Załóż darmowe konto
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-blue-500/40 hover:bg-blue-500/10 text-blue-200 hover:text-white font-medium rounded-xl transition-all"
            >
              Skontaktuj się z nami
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense - baner na dole */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <AdSenseDisplayAuto />
        </div>
      </section>

    </main>
  )
}
