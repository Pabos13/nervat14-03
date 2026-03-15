import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Urzędy, Porady Prawne i Terminarz Wydaż | VAT Faktura - Wyszukiwarka Urzędów w Polsce',
  description: 'Inteligentne wyszukiwarki urzędów publicznych, darmowych porad prawnych i terminiarza wydaż urzędniczych. Znajdź urząd miasta, urzęd skarbowy, ZUS, poradnie obywatelskie i darmowe konsultacje w 40 miastach Polski.',
  keywords: 'urzędy w Polsce, porady prawne darmowe, poradnia obywatelska, darmowe konsultacje, OPP, poradnia dla przedsiębiorców, urząd miasta, urząd skarbowy, ZUS, GUS, darmowe porady dla biznesu, terminy PIT, terminy ZUS, terminarz podatkowy, wydatki urzędnicze',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'Urzędy i Porady Prawne - Wyszukiwarka Urzędów w Polsce | VAT Faktura',
    description: 'Znajdź urzędy publiczne, darmowe porady prawne i ważne terminy w 40 największych miastach Polski. Adresy, numery telefonów, godziny otwarcia i mapy.',
    type: 'website',
    locale: 'pl_PL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wyszukiwarka Urzędów i Porad Prawnych | VAT Faktura',
    description: 'Inteligentne wyszukiwarki urzędów, porad prawnych i terminiarza wydaż. Wszystko o polskich urzędach w jednym miejscu.',
  },
}

export default function OfficesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
