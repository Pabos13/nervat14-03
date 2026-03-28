import Link from 'next/link'

export function Footer() {
  return (
    <footer className="border-t border-white/10 backdrop-blur-sm bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12 mb-8">
          {/* About */}
          <div>
            <h4 className="text-white font-semibold mb-4">O nas</h4>
            <p className="text-sm text-blue-200/60 leading-relaxed">
              Narzedzie do fakturowania z integracja kSEF. 5 faktur za darmo, Premium 99 PLN/msc.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Produkt</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/#features" className="text-blue-300 hover:text-blue-100 transition">Funkcje</Link></li>
              <li><Link href="/pricing" className="text-blue-300 hover:text-blue-100 transition">Cennik</Link></li>
              <li><Link href="/#partners" className="text-blue-300 hover:text-blue-100 transition">Partnerzy</Link></li>
              <li><Link href="/blog" className="text-blue-300 hover:text-blue-100 transition">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Zasoby</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="text-blue-300 hover:text-blue-100 transition">FAQ</Link></li>
              <li><Link href="/blog" className="text-blue-300 hover:text-blue-100 transition">Poradniki</Link></li>
              <li><Link href="/reviews" className="text-blue-300 hover:text-blue-100 transition">Recenzje</Link></li>
              <li><Link href="/narzedzia" className="text-blue-300 hover:text-blue-100 transition">Narzędzia</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kalkulatory</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/kalkulator-vat" className="text-blue-300 hover:text-blue-100 transition">Kalkulator VAT</Link></li>
              <li><Link href="/kalkulator-pit" className="text-blue-300 hover:text-blue-100 transition">Kalkulator PIT</Link></li>
              <li><Link href="/kalkulator-zus" className="text-blue-300 hover:text-blue-100 transition">Kalkulator ZUS</Link></li>
              <li><Link href="/formularze-zus" className="text-blue-300 hover:text-blue-100 transition">Formularze ZUS</Link></li>
            </ul>
          </div>

          {/* Legal - Important for AdSense */}
          <div>
            <h4 className="text-white font-semibold mb-4">Informacje prawne</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-blue-300 hover:text-blue-100 transition">Polityka Prywatnosci</Link></li>
              <li><Link href="/terms" className="text-blue-300 hover:text-blue-100 transition">Regulamin</Link></li>
              <li><Link href="/disclaimer" className="text-blue-300 hover:text-blue-100 transition">Disclaimer</Link></li>
              <li><Link href="/contact" className="text-blue-300 hover:text-blue-100 transition">Kontakt</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-blue-200/60">
          <p>&copy; {new Date().getFullYear()} VAT Faktura. Wszystkie prawa zastrzezone.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 text-xs">
            <Link href="/about" className="text-blue-300 hover:text-blue-100 transition">O nas</Link>
            <span className="text-blue-500/30">|</span>
            <Link href="/privacy" className="text-blue-300 hover:text-blue-100 transition">Polityka Prywatnosci</Link>
            <span className="text-blue-500/30">|</span>
            <Link href="/terms" className="text-blue-300 hover:text-blue-100 transition">Regulamin</Link>
            <span className="text-blue-500/30">|</span>
            <Link href="/disclaimer" className="text-blue-300 hover:text-blue-100 transition">Disclaimer</Link>
            <span className="text-blue-500/30">|</span>
            <Link href="/contact" className="text-blue-300 hover:text-blue-100 transition">Kontakt</Link>
          </div>
          <p className="text-xs mt-4 text-blue-200/50">
            Strona zawiera reklamy Google AdSense oraz linki partnerskie, z ktorych mozemy otrzymywac prowizje.
            Nie wplywa to na tresc ani bezstronnosc naszych uslug.
          </p>
        </div>
      </div>
    </footer>
  )
}
