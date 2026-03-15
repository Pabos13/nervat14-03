// Specialists and Services Catalog

export interface Specialist {
  id: string
  name: string
  title: string
  specialization: string
  city: string
  phone: string
  email: string
  website?: string
  rating: number
  reviewsCount: number
  experience: number // years
  services: string[]
  priceRange: string
  availability: boolean
}

export const SPECIALISTS: Specialist[] = [
  {
    id: '1',
    name: 'Marek Kowalski',
    title: 'Biegły Rewident',
    specialization: 'Audyt i Sprawozdawczość',
    city: 'Warszawa',
    phone: '+48 12 345 67 89',
    email: 'marek@revisor.pl',
    website: 'www.revisor.pl',
    rating: 4.9,
    reviewsCount: 42,
    experience: 15,
    services: ['Audyt finansowy', 'Sprawozdania roczne', 'Dokumentacja VAT', 'Konsultacje'],
    priceRange: '150-250 zł/h',
    availability: true
  },
  {
    id: '2',
    name: 'Anna Lewandowska',
    title: 'Doradca Podatkowy',
    specialization: 'Optymalizacja podatkowa',
    city: 'Kraków',
    phone: '+48 98 765 43 21',
    email: 'anna@podatki.pl',
    rating: 4.8,
    reviewsCount: 38,
    experience: 12,
    services: ['Planowanie podatkowe', 'PIT rozliczenia', 'ZUS konsultacje', 'KSEF'],
    priceRange: '120-200 zł/h',
    availability: true
  },
  {
    id: '3',
    name: 'Jan Nowak',
    title: 'Księgowy',
    specialization: 'Prowadzenie księgowości',
    city: 'Wrocław',
    phone: '+48 55 123 45 67',
    email: 'jan@ksiegowość.pl',
    rating: 4.7,
    reviewsCount: 56,
    experience: 10,
    services: ['Księgowość pełna', 'Rozliczenia VAT', 'Raporty finansowe', 'Kadrowo-płacowa'],
    priceRange: '2000-5000 zł/m',
    availability: true
  },
  {
    id: '4',
    name: 'Katarzyna Sikorska',
    title: 'Ubezpieczeniowiec',
    specialization: 'Ubezpieczenia dla biznesu',
    city: 'Gdańsk',
    phone: '+48 77 888 99 00',
    email: 'katarzyna@ubezpieczenia.pl',
    rating: 4.6,
    reviewsCount: 31,
    experience: 8,
    services: ['OC pracodawcy', 'Majątkowe', 'Medyczne dla firm', 'Dofinansowanie'],
    priceRange: 'Od 500 zł/rok',
    availability: true
  },
  {
    id: '5',
    name: 'Piotr Zieliński',
    title: 'Konsultant ds. Biznesu',
    specialization: 'Rozwój biznesu',
    city: 'Poznań',
    phone: '+48 66 777 55 44',
    email: 'piotr@konsult.pl',
    rating: 4.8,
    reviewsCount: 27,
    experience: 14,
    services: ['Business Plan', 'Strategia biznesu', 'Coaching', 'Mentoring'],
    priceRange: '200-300 zł/h',
    availability: true
  },
  {
    id: '6',
    name: 'Paulina Wójcik',
    title: 'Specjalista HR',
    specialization: 'Kadry i płace',
    city: 'Szczecin',
    phone: '+48 44 333 22 11',
    email: 'paulina@hr.pl',
    rating: 4.7,
    reviewsCount: 24,
    experience: 9,
    services: ['Kadrowo-płacowa', 'Umowy pracy', 'Bezpieczeństwo pracy', 'Raporty'],
    priceRange: '1500-3000 zł/m',
    availability: true
  },
  {
    id: '7',
    name: 'Tomasz Kwiatkowski',
    title: 'Doradca IT',
    specialization: 'Systemy informatyczne',
    city: 'Łódź',
    phone: '+48 33 666 88 77',
    email: 'tomasz@it-konsult.pl',
    rating: 4.9,
    reviewsCount: 45,
    experience: 11,
    services: ['Wdrażanie systemów', 'ERP', 'CRM', 'Cyberbezpieczeństwo'],
    priceRange: '100-200 zł/h',
    availability: true
  },
  {
    id: '8',
    name: 'Monika Nowacka',
    title: 'Adwokat',
    specialization: 'Prawo biznesu',
    city: 'Warszawa',
    phone: '+48 11 999 88 77',
    email: 'monika@prawo.pl',
    rating: 4.8,
    reviewsCount: 35,
    experience: 13,
    services: ['Umowy biznesowe', 'Spory handlowe', 'Prawo pracy', 'Ochrona IP'],
    priceRange: '250-400 zł/h',
    availability: true
  }
]

export interface SpecialistCategory {
  name: string
  icon: string
  description: string
  count: number
}

export const SPECIALIST_CATEGORIES: SpecialistCategory[] = [
  {
    name: 'Audyt i Sprawozdawczość',
    icon: '📊',
    description: 'Biegli rewidenci i audytorzy',
    count: 12
  },
  {
    name: 'Podatki',
    icon: '💰',
    description: 'Doradcy podatkowi i specjaliści',
    count: 28
  },
  {
    name: 'Księgowość',
    icon: '📝',
    description: 'Księgowi i specjaliści finansowi',
    count: 35
  },
  {
    name: 'Kadry i Płace',
    icon: '👥',
    description: 'Specjaliści HR i kadrowo-płacowi',
    count: 18
  },
  {
    name: 'Ubezpieczenia',
    icon: '🛡️',
    description: 'Agenci ubezpieczeniowych',
    count: 15
  },
  {
    name: 'Prawo',
    icon: '⚖️',
    description: 'Adwokaci i doradcy prawni',
    count: 22
  },
  {
    name: 'Doradztwo',
    icon: '🎯',
    description: 'Doradcy biznesu i coachowie',
    count: 19
  },
  {
    name: 'IT i Systemy',
    icon: '💻',
    description: 'Specjaliści informatyczni',
    count: 16
  }
]

export function getSpecialistsByCategory(specialization: string): Specialist[] {
  return SPECIALISTS.filter(s => s.specialization.toLowerCase().includes(specialization.toLowerCase()))
}

export function getSpecialistsByCity(city: string): Specialist[] {
  return SPECIALISTS.filter(s => s.city.toLowerCase() === city.toLowerCase())
}

export function searchSpecialists(query: string): Specialist[] {
  const lowerQuery = query.toLowerCase()
  return SPECIALISTS.filter(s =>
    s.name.toLowerCase().includes(lowerQuery) ||
    s.specialization.toLowerCase().includes(lowerQuery) ||
    s.city.toLowerCase().includes(lowerQuery) ||
    s.services.some(service => service.toLowerCase().includes(lowerQuery))
  )
}

export function getTopRatedSpecialists(limit: number = 5): Specialist[] {
  return [...SPECIALISTS].sort((a, b) => b.rating - a.rating).slice(0, limit)
}

export function getAvailableSpecialists(): Specialist[] {
  return SPECIALISTS.filter(s => s.availability)
}
