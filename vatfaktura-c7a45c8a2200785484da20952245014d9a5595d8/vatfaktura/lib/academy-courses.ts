// Academy and Courses Data

export interface CourseLesson {
  id: string
  title: string
  description: string
  videoUrl?: string
  duration: number // minutes
  content: string
}

export interface Course {
  id: string
  title: string
  description: string
  category: string
  level: 'beginner' | 'intermediate' | 'advanced'
  duration: number // minutes total
  lessons: CourseLesson[]
  quizzes: number
  certificate: boolean
  free: boolean
  image: string
}

export const ACADEMY_COURSES: Course[] = [
  {
    id: 'zaloz-firme',
    title: 'Jak Założyć Firmę Online',
    description: 'Kompletny kurs dla początkujących przedsiębiorców. Dowiedz się, jak założyć firmę, wybrać formę opodatkowania i rozpocząć działalność.',
    category: 'Przedsiębiorczość',
    level: 'beginner',
    duration: 120,
    certificate: true,
    free: true,
    image: '/images/academy/zaloz-firme.jpg',
    lessons: [
      {
        id: '1-1',
        title: 'Formy organizacyjno-prawne',
        description: 'Poznaj różne formy biznesu: działalność gospodarcza, spółka, S.A.',
        duration: 20,
        content: 'Działalność gospodarcza to najprostszy sposób na rozpoczęcie biznesu. Nie wymaga wpisania do rejestru spółek i można ją zarejestrować w ciągu kilku dni...'
      },
      {
        id: '1-2',
        title: 'Rejestracja w CEIDG',
        description: 'Jak zarejestrować działalność gospodarczą w CEIDG.',
        duration: 15,
        content: 'CEIDG (Centralna Ewidencja i Informacja o Działalności Gospodarczej) to elektroniczny rejestr...'
      },
      {
        id: '1-3',
        title: 'Wybór formy opodatkowania',
        description: 'Porównanie PIT-37, podatku liniowego i ryczałtu.',
        duration: 20,
        content: 'Wybór formy opodatkowania jest kluczowy dla twojego biznesu. Każda forma ma inne wymagania i koszty...'
      },
      {
        id: '1-4',
        title: 'Konto bankowe i księgowość',
        description: 'Jak otworzyć konto biznesowe i prowadzić księgowość.',
        duration: 20,
        content: 'Konto bankowe jest obowiązkowe dla firm. Pozwala oddzielić finanse biznesu od prywatnych...'
      },
      {
        id: '1-5',
        title: 'Ubezpieczenia i ZUS',
        description: 'Jakie ubezpieczenia potrzebujesz i jak się zarejestrować w ZUS.',
        duration: 25,
        content: 'ZUS jest obowiązkowy dla wszystkich przedsiębiorców. Musisz opłacać składki na emeryturę, rentę i ubezpieczenie...'
      },
      {
        id: '1-6',
        title: 'Pierwsze kroki po założeniu',
        description: 'Praktyczne porady na start.',
        duration: 20,
        content: 'Po zarejestrowania firmy musisz: opłacić ZUS, otworzyć konto, prowadzić dokumentację...'
      }
    ],
    quizzes: 2
  },

  {
    id: 'tajniki-pit',
    title: 'Tajniki Rozliczenia PIT',
    description: 'Naucz się poprawnie rozliczać PIT-37, PIT-36 i inne formularze. Zoptymalizuj swoje podatki.',
    category: 'Podatki',
    level: 'intermediate',
    duration: 100,
    certificate: true,
    free: true,
    image: '/images/academy/pit.jpg',
    lessons: [
      {
        id: '2-1',
        title: 'Różnice między PIT-37 i PIT-36',
        description: 'Kiedy użyć którego formularza.',
        duration: 20,
        content: 'PIT-37 to uniwersalny formularz dla wszystkich. PIT-36 jest dla przedsiębiorców...'
      },
      {
        id: '2-2',
        title: 'Koszty uzyskania przychodu (KUP)',
        description: 'Jak zgłaszać koszty biznesu.',
        duration: 20,
        content: 'KUP to procent przychodu, który możesz odliczyć jako koszt...'
      },
      {
        id: '2-3',
        title: 'Ulgi i odliczenia podatkowe',
        description: 'Ulga na start, na B+R i inne.',
        duration: 20,
        content: 'Istnieje wiele ulg, które mogą zmniejszyć twój PIT...'
      },
      {
        id: '2-4',
        title: 'E-Deklaracje i wysyłka',
        description: 'Jak wysłać PIT do urzędu skarbowego online.',
        duration: 20,
        content: 'E-Deklaracje to system wysyłania oświadczeń podatkowych elektronicznie...'
      },
      {
        id: '2-5',
        title: 'Błędy do uniknięcia',
        description: 'Najczęstsze pomyłki w rozliczeniu.',
        duration: 20,
        content: 'Wiele osób popełnia błędy, które mogą doprowadzić do kontroli US...'
      }
    ],
    quizzes: 2
  },

  {
    id: 'ksef-podstawy',
    title: 'KSEF od Podstaw',
    description: 'Kompletny poradnik po Krajowym Systemie e-Faktur. Jak zarejestrować się, wysyłać faktury i rozliczać się w KSEF.',
    category: 'Faktury',
    level: 'beginner',
    duration: 80,
    certificate: true,
    free: true,
    image: '/images/academy/ksef.jpg',
    lessons: [
      {
        id: '3-1',
        title: 'Czym jest KSEF?',
        description: 'Wprowadzenie do Krajowego Systemu e-Faktur.',
        duration: 15,
        content: 'KSEF to centralna baza faktur prowadzona przez Ministerstwo Finansów...'
      },
      {
        id: '3-2',
        title: 'Rejestracja w KSEF',
        description: 'Jak się zarejestrować i uzyskać dostęp.',
        duration: 20,
        content: 'Rejestracja w KSEF jest obowiązkowa dla firm od określonej kwoty przychodów...'
      },
      {
        id: '3-3',
        title: 'Wysyłanie faktur',
        description: 'Praktyczne wysyłanie faktur do KSEF.',
        duration: 25,
        content: 'Faktury muszą być wysłane w określonym formacie XML...'
      },
      {
        id: '3-4',
        title: 'JPK_FA raport',
        description: 'Jak generować i wysyłać raporty.',
        duration: 20,
        content: 'JPK_FA to miesięczny raport wszystkich faktur wysłanych i otrzymanych...'
      }
    ],
    quizzes: 1
  },

  {
    id: 'ksiegowosc-dla-poczatkujacych',
    title: 'Księgowość dla Początkujących',
    description: 'Naucz się prowadzić księgowość firmę. Jak rejestrować operacje, tworzyć sprawozdania i kontrolować finanse.',
    category: 'Księgowość',
    level: 'beginner',
    duration: 150,
    certificate: true,
    free: true,
    image: '/images/academy/ksiegowosc.jpg',
    lessons: [
      {
        id: '4-1',
        title: 'Podstawowe pojęcia',
        description: 'Przychody, koszty, aktywa, pasywa.',
        duration: 20,
        content: 'Księgowość opiera się na kilku podstawowych koncepcjach...'
      },
      {
        id: '4-2',
        title: 'Prowadzenie księgi przychodów i wydatków',
        description: 'Najprostsza forma ewidencji.',
        duration: 25,
        content: 'Księga przychodów i wydatków to najprostsza forma ewidencji finansowej...'
      },
      {
        id: '4-3',
        title: 'Faktury i dokumenty',
        description: 'Jakie dokumenty musisz przechowywać.',
        duration: 20,
        content: 'Faktury muszą zawierać określone dane i muszą być przechowywane...'
      },
      {
        id: '4-4',
        title: 'VAT - rozliczanie i raporty',
        description: 'Jak się rozliczać z VAT.',
        duration: 25,
        content: 'VAT jest podatkiem pośrednim, który musisz zbierać od klientów...'
      },
      {
        id: '4-5',
        title: 'Analiza finansowa',
        description: 'Jak czytać sprawozdania finansowe.',
        duration: 25,
        content: 'Sprawozdania finansowe pokazują zdrowotę biznesu...'
      },
      {
        id: '4-6',
        title: 'Rozliczenie roczne',
        description: 'Jak się przygotować do rozliczenia.',
        duration: 15,
        content: 'Rozliczenie roczne musi zawierać roczne sprawozdanie...'
      }
    ],
    quizzes: 2
  },

  {
    id: 'optymalizacja-podatkowa',
    title: 'Optymalizacja Podatkowa',
    description: 'Zaawansowany kurs o strategiach zmniejszania podatków w zgodzie z prawem.',
    category: 'Podatki',
    level: 'advanced',
    duration: 120,
    certificate: true,
    free: true,
    image: '/images/academy/optymalizacja.jpg',
    lessons: [
      {
        id: '5-1',
        title: 'Strategie optymalizacji',
        description: 'Legalne sposoby na zmniejszenie podatków.',
        duration: 25,
        content: 'Optymalizacja podatkowa to legalne zmniejszenie obciążenia podatkowego...'
      },
      {
        id: '5-2',
        title: 'Forma opodatkowania',
        description: 'Wybór optymalnej formy opodatkowania.',
        duration: 25,
        content: 'Każda forma opodatkowania ma inne konsekwencje finansowe...'
      },
      {
        id: '5-3',
        title: 'Ulgi i preferencje',
        description: 'Jakie ulgi są dostępne dla Ciebie.',
        duration: 20,
        content: 'Istnieje wiele ulg specjalnych dla różnych branż...'
      },
      {
        id: '5-4',
        title: 'Planowanie na przyszłość',
        description: 'Jak planować finansowo na długoterminowo.',
        duration: 25,
        content: 'Dobre planowanie podatkowe zaczyna się na rok naprzód...'
      },
      {
        id: '5-5',
        title: 'Błędy do uniknięcia',
        description: 'Co NIE robić w optymalizacji.',
        duration: 25,
        content: 'Istnieją cienkie granice między optymalizacją a unikaniem podatków...'
      }
    ],
    quizzes: 2
  }
]

export function getCourseById(id: string): Course | undefined {
  return ACADEMY_COURSES.find(c => c.id === id)
}

export function getCoursesByCategory(category: string): Course[] {
  return ACADEMY_COURSES.filter(c => c.category === category)
}

export function getTotalDuration(course: Course): number {
  return course.lessons.reduce((total, lesson) => total + lesson.duration, 0)
}
