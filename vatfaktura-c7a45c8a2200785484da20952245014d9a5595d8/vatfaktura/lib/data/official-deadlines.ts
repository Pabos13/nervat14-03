export type DeadlineCategory = 'PIT' | 'ZUS' | 'VAT' | 'KSEF' | 'FIRMA' | 'INNE'

export interface OfficialDeadline {
  id: string
  title: string
  date: string // Format: YYYY-MM-DD
  category: DeadlineCategory
  description: string
  notes?: string
  priority: 'critical' | 'high' | 'medium' | 'low'
}

export const officialDeadlines: OfficialDeadline[] = [
  // PIT 2024
  {
    id: 'pit-37-2024',
    title: 'PIT-37 - Termin rozliczenia rocznego',
    date: '2025-04-30',
    category: 'PIT',
    description: 'Skrajna data złożenia deklaracji PIT-37 (dla pracowników) za rok 2024 do urzędu skarbowego',
    notes: 'Rozliczenie za rok podatkowy 2024. e-Deklaracje dostępne od 15 lutego.',
    priority: 'critical',
  },
  {
    id: 'pit-36-2024',
    title: 'PIT-36 - Termin rozliczenia rocznego',
    date: '2025-04-30',
    category: 'PIT',
    description: 'Skrajna data złożenia deklaracji PIT-36 (dla przedsiębiorców) za rok 2024',
    notes: 'Przedsiębiorcy mogą złożyć PIT-36 od 15 lutego 2025 r.',
    priority: 'critical',
  },
  {
    id: 'pit-28-2024',
    title: 'PIT-28 - Ryczałt ewidencjonowany',
    date: '2025-04-30',
    category: 'PIT',
    description: 'Termin złożenia rocznego zeznania za osoby prowadzące działalność na zasadzie ryczałtu ewidencjonowanego',
    priority: 'critical',
  },
  {
    id: 'pit-cit-2024',
    title: 'CIT-8 - Termin rozliczenia dla spółek',
    date: '2025-03-31',
    category: 'PIT',
    description: 'Termin złożenia zeznania CIT dla spółek z ograniczoną odpowiedzialnością za rok 2024',
    priority: 'critical',
  },
  {
    id: 'pit-19-2024',
    title: 'PIT-19 - Wpłata zaliczki za I kwartał 2025',
    date: '2025-04-15',
    category: 'PIT',
    description: 'Termin wpłaty podatku zaliczkowego za pierwszy kwartał 2025 roku',
    priority: 'high',
  },

  // ZUS
  {
    id: 'zus-skladka-01',
    title: 'ZUS - Składka za styczeń 2025',
    date: '2025-02-15',
    category: 'ZUS',
    description: 'Termin wpłaty składek ZUS za styczeń 2025 (emerytura, renta, ubezpieczenie zdrowotne)',
    notes: 'Dla przedsiębiorców, osób prowadzących działalność na własny rachunek',
    priority: 'critical',
  },
  {
    id: 'zus-skladka-02',
    title: 'ZUS - Składka za luty 2025',
    date: '2025-03-15',
    category: 'ZUS',
    description: 'Termin wpłaty składek ZUS za luty 2025',
    priority: 'critical',
  },
  {
    id: 'zus-skladka-03',
    title: 'ZUS - Składka za marzec 2025',
    date: '2025-04-15',
    category: 'ZUS',
    description: 'Termin wpłaty składek ZUS za marzec 2025',
    priority: 'critical',
  },
  {
    id: 'zus-skladka-04',
    title: 'ZUS - Składka za kwiecień 2025',
    date: '2025-05-15',
    category: 'ZUS',
    description: 'Termin wpłaty składek ZUS za kwiecień 2025',
    priority: 'critical',
  },
  {
    id: 'zus-rzs-roczne',
    title: 'ZUS - RZS (Roczne Zeznanie) za 2024',
    date: '2025-02-28',
    category: 'ZUS',
    description: 'Termin złożenia rocznego zeznania składek do ZUS za rok 2024',
    priority: 'critical',
  },

  // VAT
  {
    id: 'vat-deklaracja-01',
    title: 'VAT - Deklaracja za styczeń 2025',
    date: '2025-02-25',
    category: 'VAT',
    description: 'Termin złożenia deklaracji VAT-7K za styczeń 2025 (dla płatników VAT)',
    notes: 'Złożenie do 25-go dnia następnego miesiąca',
    priority: 'critical',
  },
  {
    id: 'vat-deklaracja-02',
    title: 'VAT - Deklaracja za luty 2025',
    date: '2025-03-25',
    category: 'VAT',
    description: 'Termin złożenia deklaracji VAT-7K za luty 2025',
    priority: 'critical',
  },
  {
    id: 'vat-deklaracja-03',
    title: 'VAT - Deklaracja za marzec 2025',
    date: '2025-04-25',
    category: 'VAT',
    description: 'Termin złożenia deklaracji VAT-7K za marzec 2025',
    priority: 'critical',
  },
  {
    id: 'vat-roczna-2024',
    title: 'VAT - Zeznanie roczne za 2024',
    date: '2025-02-28',
    category: 'VAT',
    description: 'Termin złożenia rocznego zeznania VAT-12 za rok 2024',
    priority: 'critical',
  },

  // kSEF
  {
    id: 'ksef-obligatoryjne',
    title: 'kSEF - Przejście na obowiązkową raportację',
    date: '2025-01-01',
    category: 'KSEF',
    description: 'Od 1 stycznia 2025 wszystkie faktury muszą być raportowane w Krajowym Systemie e-Faktur (kSEF)',
    notes: 'Dotyczy wszystkich podatników VAT. Wysyłka faktur poprzez kSEF jest obowiązkowa.',
    priority: 'critical',
  },
  {
    id: 'ksef-faktura-limit',
    title: 'kSEF - Limit wartości faktury bez e-podpisu',
    date: '2025-06-01',
    category: 'KSEF',
    description: 'Od czerwca 2025 faktury powyżej 15 000 PLN wymagają podpisu elektronicznego',
    priority: 'high',
  },

  // Rejestracja firm
  {
    id: 'ceidg-rejestracja',
    title: 'CEIDG - Rejestracja działalności gospodarczej',
    date: '2025-12-31',
    category: 'FIRMA',
    description: 'Rejestracja działalności w Centralnej Ewidencji i Informacji o Działalności Gospodarczej',
    notes: 'Można zarejestrować się online za pośrednictwem Internetu lub papierowo',
    priority: 'medium',
  },
  {
    id: 'nip-regon',
    title: 'GUS - Rejestracja w GUS (uzyskanie numeru REGON)',
    date: '2025-12-31',
    category: 'FIRMA',
    description: 'Każda działalność gospodarcza powinna być zarejestrowana w Głównym Urzędzie Statystycznym',
    priority: 'medium',
  },

  // Inne terminy
  {
    id: 'sprawozdanie-roczne',
    title: 'Sprawozdanie finansowe za 2024',
    date: '2025-03-31',
    category: 'INNE',
    description: 'Termin złożenia sprawozdania finansowego za rok 2024 dla spółek',
    priority: 'high',
  },
  {
    id: 'zus-swiadectwo',
    title: 'Świadectwo ubezpieczenia społecznego',
    date: '2025-02-28',
    category: 'ZUS',
    description: 'Termin złożenia zaświadczenia o ubezpieczeniu społecznym do pracodawcy',
    priority: 'high',
  },
  {
    id: 'podatek-od-nieruchomosci-q1',
    title: 'Podatek od nieruchomości - I rata 2025',
    date: '2025-03-15',
    category: 'INNE',
    description: 'Termin wpłaty pierwszej raty podatku od nieruchomości za 2025 rok',
    notes: 'Do urzędu gminy właściwego dla terenu nieruchomości',
    priority: 'high',
  },
  {
    id: 'podatek-od-nieruchomosci-q2',
    title: 'Podatek od nieruchomości - II rata 2025',
    date: '2025-06-15',
    category: 'INNE',
    description: 'Termin wpłaty drugiej raty podatku od nieruchomości za 2025 rok',
    priority: 'high',
  },
  {
    id: 'podatek-od-nieruchomosci-q3',
    title: 'Podatek od nieruchomości - III rata 2025',
    date: '2025-09-15',
    category: 'INNE',
    description: 'Termin wpłaty trzeciej raty podatku od nieruchomości za 2025 rok',
    priority: 'high',
  },
  {
    id: 'podatek-od-nieruchomosci-q4',
    title: 'Podatek od nieruchomości - IV rata 2025',
    date: '2025-11-15',
    category: 'INNE',
    description: 'Termin wpłaty czwartej raty podatku od nieruchomości za 2025 rok',
    priority: 'high',
  },
  {
    id: 'ipo-ip6',
    title: 'IP.6 - Wniosek o zwolnienie z VAT',
    date: '2025-01-20',
    category: 'VAT',
    description: 'Termin złożenia wniosku o zwolnienie podatkowe dla podatników VAT',
    priority: 'medium',
  },
]

export function getDeadlinesByCategory(category: DeadlineCategory): OfficialDeadline[] {
  return officialDeadlines.filter((d) => d.category === category)
}

export function getUpcomingDeadlines(days: number = 30): OfficialDeadline[] {
  const today = new Date()
  const futureDate = new Date(today.getTime() + days * 24 * 60 * 60 * 1000)

  return officialDeadlines
    .filter((d) => {
      const deadlineDate = new Date(d.date)
      return deadlineDate >= today && deadlineDate <= futureDate
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

export function getCriticalDeadlines(): OfficialDeadline[] {
  return officialDeadlines.filter((d) => d.priority === 'critical').sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00Z')
  return date.toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
