'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown, FileText, Receipt, HelpCircle, Briefcase, Building2 } from 'lucide-react'
import { AdSenseDisplayAuto } from '@/components/adsense-banner'

const zusFaqs = [
  {
    question: 'Co to jest formularz ZUS Z-3?',
    answer: 'Formularz ZUS Z-3 to zaświadczenie o niezdolności do pracy wydawane przez lekarza. Jest wymagane do złożenia wniosku o zasiłek chorobowy w ZUS. Mamy darmowy generator Z-3 w naszym serwisie.'
  },
  {
    question: 'Ile wynosi zasiłek chorobowy w 2025 roku?',
    answer: 'Zasiłek chorobowy wynosi 80% średniej pensji przez pierwsze 33 dni absencji, a 100% od 34 dnia. Minimalna wysokość to ok. 50 PLN dziennie, maksymalna ok. 200 PLN dziennie. Użyj naszego kalkulatora zasiłku chorobowego.'
  },
  {
    question: 'Jaki jest termin na złożenie Z-3 do ZUS?',
    answer: 'Formularz Z-3 należy złożyć w ciągu 7 dni od zakończenia choroby. Po tym terminie ZUS może nie honorować zasiłku. Przez PUE ZUS można wysłać elektronicznie — pokaż mu nasz poradnik PUE.'
  },
  {
    question: 'Jak się zalogować do PUE ZUS i wysłać formularz?',
    answer: 'Potrzebujesz Profilu Zaufanego lub e-Dowodu. Zaloguj się na portal ZUS, przejdź do sekcji formularzy, załaduj PDF i wyślij. Mamy szczegółowy poradnik krok po kroku jak wysyłać do ZUS.'
  },
  {
    question: 'Ile wynosi zasiłek macierzyński?',
    answer: 'Zasiłek macierzyński wynosi 100% średniej pensji i przysługuje przez 20 tygodni (28 dla matki). Zasiłek porodu to ryczałt 1000 PLN. Użyj naszego kalkulatora zasiłku macierzyńskiego.'
  },
  {
    question: 'Jak się zarejestrować w ZUS jako przedsiębiorca?',
    answer: 'Potrzebujesz zaświadczenia z CEIDG. Następnie możesz złożyć wniosek przez Profil Zaufany lub osobiście w ZUS. Składki wynoszą ok. 30% przychodu. Mamy szczegółowy poradnik rejestracji w ZUS.'
  },
  {
    question: 'Czy są ulgi na start w ZUS?',
    answer: 'Tak, "ulga na start" zwalnia nowych przedsiębiorców z niektórych składek przez 24 miesiące. Dodatkowo jest program "Mały ZUS Plus" ze składkami proporcjonalnymi do przychodu. Obliczymy to dla Ciebie naszym kalkulatorem ZUS.'
  },
  {
    question: 'Gdzie znaleźć generator formularzy ZUS?',
    answer: 'Mamy kompletny hub z generatorami formularzy ZUS. Tam znajdziesz generatory Z-3, Z-3a, Z-3b, Z-15, kalkulatory zasiłków i poradnik PUE ZUS. Wszystko darmowe i gotowe do druku.'
  },
]

const pitFaqs = [
  {
    question: 'Jakie formularze PIT mogę rozliczyć w VAT Faktura?',
    answer: 'VAT Faktura obsługuje wszystkie główne deklaracje: PIT-37 (pracownicy, zleceniobiorcy), PIT-36 (działalność gospodarcza, skala), PIT-36L (podatek liniowy 19%), PIT-28 (ryczałt ewidencjonowany), PIT-38 (kapitały pieniężne, giełda), PIT-39 (zbycie nieruchomości), PIT-16A (karta podatkowa) oraz PIT-19A (ulga prorodzinna).'
  },
  {
    question: 'Czy mogę wysłać deklarację PIT bezpośrednio do urzędu skarbowego?',
    answer: 'Tak. Po wypełnieniu formularza i podpisaniu elektronicznym deklaracja jest wysyłana bezpośrednio do systemu e-Deklaracje Ministerstwa Finansów. Otrzymasz UPO (Urzędowe Potwierdzenie Odbioru) jako dowód złożenia zeznania.'
  },
  {
    question: 'Jak działa podpis elektroniczny przy rozliczaniu PIT?',
    answer: 'Możesz podpisać deklarację kwalifikowanym podpisem elektronicznym (certyfikat kwalifikowany) lub danymi autoryzującymi (kwota przychodu z roku poprzedniego). Obydwie metody są akceptowane przez Krajową Administrację Skarbową.'
  },
  {
    question: 'Czy rozliczenie PIT w VAT Faktura jest bezpłatne?',
    answer: 'Tak, rozliczanie wszystkich deklaracji PIT jest całkowicie bezpłatne — bez limitów, bez abonamentów, bez karty kredytowej. To część pakietu VAT Faktura dostępnego 100% za darmo.'
  },
  {
    question: 'Kiedy jest termin złożenia PIT?',
    answer: 'Standardowy termin złożenia PIT rocznego upływa 30 kwietnia roku następnego (np. PIT za 2025 rok należy złożyć do 30 kwietnia 2026 r.). Wyjątek: PIT-28 (ryczałt) do końca lutego. VAT Faktura wyświetla przypomnienia o zbliżających się terminach.'
  },
  {
    question: 'Czy mogę rozliczyć PIT wspólnie z małżonkiem?',
    answer: 'Tak, formularze PIT-37 i PIT-36 umożliwiają wspólne rozliczenie z małżonkiem. W VAT Faktura wystarczy zaznaczyć opcję "rozliczenie wspólne" i uzupełnić dane małżonka — system automatycznie wyliczy korzystniejszy wynik podatkowy.'
  },
  {
    question: 'Jakie ulgi podatkowe uwzględnia VAT Faktura przy rozliczeniu PIT?',
    answer: 'System obsługuje m.in.: ulgę na dziecko (prorodzinną), ulgę rehabilitacyjną, ulgę internetową, odliczenia IKZE, składki ZUS i NFZ, ulgę dla młodych (do 26 r.ż.), ulgę dla pracujących seniorów, 1,5% na OPP oraz kwotę zmniejszającą podatek.'
  },
  {
    question: 'Co to jest UPO i jak je uzyskać po wysłaniu PIT?',
    answer: 'UPO (Urzędowe Potwierdzenie Odbioru) to dokument potwierdzający, że urząd skarbowy przyjął Twoją deklarację. VAT Faktura automatycznie pobiera i wyświetla UPO zaraz po pomyślnym wysłaniu deklaracji — możesz je zapisać lub wydrukować.'
  },
  {
    question: 'Czy VAT Faktura obsługuje rozliczenie PIT dla działalności gospodarczej?',
    answer: 'Tak. PIT-36 (zasady ogólne, skala podatkowa 12%/32%) i PIT-36L (podatek liniowy 19%) są w pełni obsługiwane. Możesz wprowadzić przychody, koszty uzyskania, zapłacone zaliczki i odliczenia — system wyliczy należny podatek lub nadpłatę.'
  },
  {
    question: 'Co zrobić, jeśli popełnię błąd w złożonej deklaracji PIT?',
    answer: 'Możesz złożyć korektę deklaracji — formularz korygujący to ten sam typ PIT z zaznaczoną opcją "korekta zeznania". VAT Faktura obsługuje składanie korekt przez cały rok podatkowy. Korektę należy złożyć tak szybko jak to możliwe, szczególnie jeśli zaniżyłeś podatek.'
  },
  {
    question: 'Czy mogę rozliczyć przychody z zagranicy w VAT Faktura?',
    answer: 'Tak, PIT-36 obsługuje przychody z zagranicy z uwzględnieniem metody wyłączenia z progresją lub proporcjonalnego odliczenia (w zależności od umowy o unikaniu podwójnego opodatkowania z danym krajem).'
  },
  {
    question: 'Jak VAT Faktura chroni moje dane przy rozliczeniu PIT?',
    answer: 'Dane deklaracji PIT są szyfrowane i przesyłane bezpiecznie do systemu e-Deklaracje przez szyfrowane połączenie HTTPS. Nie są przechowywane na serwerach VAT Faktura — trafiają bezpośrednio do Ministerstwa Finansów.'
  },
]

const invoiceFaqs = [
  {
    question: 'Czy VAT Faktura jest naprawdę 100% bezpłatna?',
    answer: 'Tak, VAT Faktura jest w pełni bezpłatna. Nie trzeba podawać karty kredytowej, nie ma ukrytych opłat, a wszystkie funkcje są dostępne dla wszystkich użytkowników.'
  },
  {
    question: 'Czy mogę eksportować faktury do PDF?',
    answer: 'Tak, każdą fakturę możesz wyeksportować do pliku PDF i wydrukować. Faktury można również wysyłać jako e-faktury poprzez system KSEF.'
  },
  {
    question: 'Co to jest KSEF i czy VAT Faktura go wspiera?',
    answer: 'KSEF (Krajowy System e-Faktur) to obowiązkowy system do przesyłania faktur. VAT Faktura ma pełną integrację z KSEF, dzięki czemu możesz wysyłać faktury bezpośrednio z aplikacji.'
  },
  {
    question: 'Czy moje dane są bezpieczne?',
    answer: 'Tak, VAT Faktura przechowuje dane bezpośrednio w twojej przeglądarce. Twoje faktury i dane nigdy nie trafiają na serwery. Dodatkowo wszystkie dane są szyfrowane.'
  },
  {
    question: 'Czy mogę używać VAT Faktura na telefonie?',
    answer: 'Tak, aplikacja jest w pełni responsywna i działa na wszystkich urządzeniach - smartfonach, tabletach i komputerach.'
  },
  {
    question: 'Czy VAT Faktura wspiera wiele użytkowników/zespołów?',
    answer: 'Aktualnie każdy użytkownik ma swoje konto. Jeśli potrzebujesz zespołowego fakturowania, polecamy kontakt przez formularz kontaktowy.'
  },
  {
    question: 'Czy mogę importować dane z innego programu?',
    answer: 'Tak, VAT Faktura wspiera import danych z popularnych formatów. W sekcji ustawień znajdziesz opcje importu.'
  },
  {
    question: 'Czy faktury są archiwizowane?',
    answer: 'Tak, wszystkie faktury są automatycznie archiwizowane. Możesz do nich wracać i je edytować w każdej chwili.'
  },
  {
    question: 'Jakie są wymagania techniczne do używania aplikacji?',
    answer: 'VAT Faktura działa w każdej nowoczesnej przeglądarce (Chrome, Firefox, Safari, Edge). Nie trzeba instalować nic dodatkowego.'
  },
  {
    question: 'Czy VAT Faktura zmienia się w przyszłości?',
    answer: 'Tak, stale dodajemy nowe funkcje. Wszystkie aktualizacje są bezpłatne dla wszystkich użytkowników.'
  },
  {
    question: 'Czy wystawienie faktury w VAT Faktura jest legalne?',
    answer: 'Tak, VAT Faktura jest w pełni zgodna z ustawą o podatku VAT i wymogami KSEF. Faktury wystawiane są zgodnie z polskim prawem.'
  },
  {
    question: 'Czy mogę mieć nieograniczoną ilość kontrahentów?',
    answer: 'Tak, nie ma żadnych limitów na ilość kontrahentów. Możesz dodać każdego kontrahenta, któremu wystawiasz faktury.'
  },
  {
    question: 'Czy VAT Faktura wspiera faktury korygujące?',
    answer: 'Tak, aplikacja w pełni wspiera faktury korygujące. Możesz łatwo korygować błędy na poprzednich fakturach.'
  },
  {
    question: 'Czy mogę eksportować wszystkie faktury na raz?',
    answer: 'Tak, możesz exportować wiele faktur jednocześnie w formacie CSV lub PDF. Funkcja masowego exportu znajduje się w ustawieniach.'
  },
  {
    question: 'Czy VAT Faktura ma kopie zapasowe moich danych?',
    answer: 'Tak, wszystkie dane są automatycznie szyfrowane i kopiowane. Twoje faktury są bezpieczne nawet jeśli stracisz dostęp do urz��dzenia.'
  },
  {
    question: 'Jak długo mogę przechowywać faktury w VAT Faktura?',
    answer: 'Bez ograniczeń. Możesz przechowywać faktury na zawsze. Po wystawieniu faktury nigdy nie zostaną usunięte.'
  },
  {
    question: 'Czy VAT Faktura wspiera faktury proforma?',
    answer: 'Tak, możesz wystawiać faktury proforma. Są to faktury informacyjne, które nie mają odpisu VAT.'
  },
  {
    question: 'Czy mogę importować faktury z poprzednich lat?',
    answer: 'Tak, możesz zaimportować faktury z poprzednich lat w formacie CSV. Przydatne przy przechodzeniu z innego programu.'
  },
  {
    question: 'Czy VAT Faktura wspiera faktury zaliczki?',
    answer: 'Tak, możesz wystawiać faktury zaliczki i faktury końcowe. System automatycznie śledzi zaliczki na kontach.'
  },
  {
    question: 'Jakie języki wspiera VAT Faktura?',
    answer: 'Aplikacja wspiera polski i angielski. Faktury mogą być wysyłane w dowolnym języku poprzez KSEF.'
  },
  {
    question: 'Czy VAT Faktura ma API dla integracji z innymi systemami?',
    answer: 'Tak, API jest dostępne dla zaawansowanych użytkowników. Skontaktuj się z nami aby otrzymać dokumentację API.'
  },
  {
    question: 'Czy mogę zmienić dane firmy w VAT Faktura?',
    answer: 'Tak, dane firmy można edytować w ustawieniach konta. Zmiany dotyczą wszystkich przyszłych faktur.'
  },
  {
    question: 'Czy VAT Faktura ma sms/email przypomnienia o terminie zapłaty?',
    answer: 'Funkcja powiadomień jest dostępna w ustawieniach. Możesz otrzymywać przypomnienia o zbliżających się terminach.'
  },
]

const companyFaqs = [
  {
    question: 'Jak założyć firmę online za pomocą VAT Faktura?',
    answer: 'Wchodz na stronę "Załóż firmę online" i wypełnij formularz rejestracyjny. Podasz dane firmy, dane właściciela i adres siedziby. Następnie nasza platforma złoży wniosek do CEIDG, GUS i ZUS. Cały proces trwa kilka minut.'
  },
  {
    question: 'Jakie dane potrzebuję do założenia firmy online?',
    answer: 'Będziesz potrzebować: imienia, nazwiska i numeru PESEL właściciela, nazwy firmy, adresu siedziby, rodzaju działalności (PKD), oraz informacji o strukturze organizacyjnej. Wszystkie dane muszą być zgodne z dokumentami.'
  },
  {
    question: 'Czy mogę założyć firmę bez wychodzenia z domu?',
    answer: 'Tak! Cały proces rejestracji firmy w systemach CEIDG, GUS i ZUS można przeprowadzić online. Nie musisz odwiedzać żadnego urzędu. Wszystkie dokumenty są wysyłane elektronicznie.'
  },
  {
    question: 'Ile czasu trwa rejestracja firmy online?',
    answer: 'Złożenie wniosku trwa kilka minut. Rejestracja w CEIDG zwykle trwa 1-2 dni robocze. Rejestracja w GUS i ZUS może potrwać kilka dni. W sumie cały proces to zazwyczaj 5-10 dni roboczych.'
  },
  {
    question: 'Czy rejestracja firmy online jest bezpłatna?',
    answer: 'Rejestracja w CEIDG jest bezpłatna. VAT Faktura nie pobiera opłat za pomoc w rejestracji. Jedyne koszty to składki ZUS, które są obowiązkowe dla każdego przedsiębiorcy.'
  },
  {
    question: 'Jaki jest kod PKD dla mojej działalności?',
    answer: 'Kod PKD (Polska Klasyfikacja Działalności) określa rodzaj prowadzonej działalności. Możesz znaleźć odpowiedni kod na stronie GUS. Na naszej stronie rejestracji mamy wyszukiwarkę kodów PKD z podpowiedziami.'
  },
  {
    question: 'Co to jest CEIDG, GUS i ZUS?',
    answer: 'CEIDG to Centralna Ewidencja i Informacja o Działalności Gospodarczej. GUS to Główny Urząd Statystyczny. ZUS to Zakład Ubezpieczeń Społecznych. Do rozpoczęcia działalności musisz się zarejestrować we wszystkich trzech instytucjach.'
  },
  {
    question: 'Czy po założeniu firmy online mogę od razu wystawiać faktury?',
    answer: 'Nie, przed wystawianiem faktur musisz poczekać na potwierdzenie rejestracji w ZUS i GUS. Zwykle trwa to kilka dni. Jednak możesz już zacząć korzystać z VAT Faktura do tworzenia szablonów.'
  },
  {
    question: 'Czy mogę zmienić dane firmy po rejestracji?',
    answer: 'Tak, wiele danych można zmienić w CEIDG (np. adres, nazwa), ale niektóre zmiany wymagają wniosku. Najłatwiej możesz to zrobić online w systemie CEIDG lub skontaktować się z urzędem.'
  },
  {
    question: 'Czy VAT Faktura może pomóc w rejestracji spółki sp. z o.o.?',
    answer: 'Aktualnie obsługujemy rejestrację działalności gospodarczej osób fizycznych (CEIDG). Rejestracja spółek kapitałowych wymaga bardziej zaawansowanego procesu, który planujemy dodać w przyszłości.'
  },
]

const calculatorFaqs = [
  {
    question: 'Jak korzystać z Kalkulatora Podatków?',
    answer: 'Wpisz przychód roczny i kalkulator automatycznie obliczy podatki dla PIT-37, podatku liniowego i skali podatkowej. Możesz porównać wszystkie trzy formy i wybrać najkorzystniejszą dla Twojego biznesu.'
  },
  {
    question: 'Czy Kalkulator Kosztów jest dokładny?',
    answer: 'Kalkulator używa rzeczywistych stawek KUP dla poszczególnych branż. Szacuje rentowność biznesu, ale rzeczywiste wyniki mogą się różnić. Zawsze konsultuj z księgowym.'
  },
  {
    question: 'Czy mogę pobrać wynik z kalkulatora?',
    answer: 'Tak! Wszystkie kalkulatory mają funkcję pobierania raportu jako plik tekstowy. Możesz także skopiować wyniki bezpośrednio.'
  },
  {
    question: 'Ile wynoszą stawki ZUS w kalkulatorze?',
    answer: 'Kalkulator używa aktualnych stawek 2025-2026: ok. 30% dla przedsiębiorców na zasadach ogólnych, z możliwością obniżek dla "Małego ZUS Plus" czy ulg na start.'
  },
]

const documentFaqs = [
  {
    question: 'Jakie szablony dokumentów są dostępne?',
    answer: 'Mamy szablony: umowy B2B, umowy zlecenia, umowy o dzieło, politykę prywatności (RODO), regulamin sklepu internetowego i inne. Wszystkie szablony są gotowe do druku i zmian.'
  },
  {
    question: 'Czy szablony są legalne?',
    answer: 'Nasze szablony są wzorem poprawnych dokumentów opracowanymi przez ekspertów. Jednak zawsze zalecamy sprawdzenie u adwokata przed użyciem, szczególnie dla warunków specjalnych.'
  },
  {
    question: 'Czy mogę edytować pobrane dokumenty?',
    answer: 'Oczywiście! Pobierasz dokument w formacie tekstowym, który możesz edytować w Wordzie, dokumentach Google czy innym edytorze. Możesz dostosować go do swoich potrzeb.'
  },
]

const academyFaqs = [
  {
    question: 'Czy kursy w Akademii są naprawdę darmowe?',
    answer: 'Tak, wszystkie kursy w VAT Faktura Academy są całkowicie darmowe. Nie ma ukrytych opłat, abonamentów ani certyfikatów płatnych.'
  },
  {
    question: 'Czy mogę otrzymać certyfikat po ukończeniu kursu?',
    answer: 'Tak, po ukończeniu kursu i zaliczeniu quizu możesz pobrać certyfikat potwierdzający Twoją wiedzę. Certyfikat ma datę wydania i możesz go umieścić w swoim CV.'
  },
  {
    question: 'Ile czasu trwa każdy kurs?',
    answer: 'Kursy trwają od 80 do 150 minut w zależności od poziomu zaawansowania. Możesz uczyć się we własnym tempie - bez ograniczeń czasowych.'
  },
]

const aiAssistantFaqs = [
  {
    question: 'Czy Asystent AI może odpowiadać na wszystkie pytania?',
    answer: 'Asystent AI ma bazę wiedzy na temat podatków, ZUS, KSEF i zarządzania biznesem. Dla skomplikowanych spraw zalecamy konsultację z doradcą podatkowym.'
  },
  {
    question: 'Czy rozmowy z Asystentem są prywatne?',
    answer: 'Tak, Twoje rozmowy z Asystentem nie są przechowywane ani udostępniane. Dane są chronione i szyfrowane.'
  },
  {
    question: 'Kiedy dostęp do Asystenta?',
    answer: 'Asystent AI jest dostępny 24/7. Możesz zadawać pytania o każdej porze i otrzymywać odpowiedzi w kilka sekund.'
  },
]

const catalogFaqs = [
  {
    question: 'Jak znaleźć specjalistę w moim mieście?',
    answer: 'Użyj wyszukiwarki w Katalogu Specjalistów, wpisz miasto lub kategorię usługi. Wyfiltruje listę dostępnych specjalistów w Twojej lokalizacji.'
  },
  {
    question: 'Czy mogę zaufać specjalistom z katalogu?',
    answer: 'Wszyscy specjaliści w katalogu mają oceny i recenzje od rzeczywistych klientów. Wyświetlamy ich doświadczenie i liczbę obsłużonych spraw.'
  },
  {
    question: 'Ile wynoszą opłaty za konsultacje?',
    answer: 'Stawki każdego specjalisty są wyraźnie wyświetlone (np. 150-200 zł/h lub 2000 zł/miesiąc). Możesz skontaktować się bezpośrednio i uzgodnić warunki.'
  },
]

function AccordionItem({
  question,
  answer,
  index,
  accent,
}: {
  question: string
  answer: string
  index: number
  accent: 'emerald' | 'blue' | 'orange' | 'green'
}) {
  const [open, setOpen] = useState(false)

  const borderClasses = {
    emerald: 'border-emerald-500/15 bg-slate-900/50 hover:border-emerald-500/35 hover:bg-emerald-950/20',
    blue: 'border-blue-500/15 bg-slate-900/50 hover:border-blue-500/35 hover:bg-blue-950/20',
    orange: 'border-orange-500/15 bg-slate-900/50 hover:border-orange-500/35 hover:bg-orange-950/20',
    green: 'border-green-500/15 bg-slate-900/50 hover:border-green-500/35 hover:bg-green-950/20'
  }
  
  const openClasses = {
    emerald: 'border-emerald-500/50 bg-emerald-950/40 shadow-lg shadow-emerald-900/30',
    blue: 'border-blue-500/50 bg-blue-950/30 shadow-lg shadow-blue-900/20',
    orange: 'border-orange-500/50 bg-orange-950/40 shadow-lg shadow-orange-900/30',
    green: 'border-green-500/50 bg-green-950/40 shadow-lg shadow-green-900/30'
  }
  
  const iconClasses = {
    emerald: 'bg-emerald-500/10 text-emerald-400',
    blue: 'bg-blue-500/10 text-blue-400',
    orange: 'bg-orange-500/10 text-orange-400',
    green: 'bg-green-500/10 text-green-400'
  }
  
  const iconOpenClasses = {
    emerald: 'bg-emerald-500/30 text-emerald-200',
    blue: 'bg-blue-500/30 text-blue-200',
    orange: 'bg-orange-500/30 text-orange-200',
    green: 'bg-green-500/30 text-green-200'
  }
  
  const textOpenClasses = {
    emerald: 'text-emerald-200',
    blue: 'text-blue-200',
    orange: 'text-orange-200',
    green: 'text-green-200'
  }
  
  const chevronClasses = {
    emerald: 'text-emerald-400',
    blue: 'text-blue-400',
    orange: 'text-orange-400',
    green: 'text-green-400'
  }
  
  const answerClasses = {
    emerald: 'text-emerald-100/70',
    blue: 'text-blue-100/70',
    orange: 'text-orange-100/70',
    green: 'text-green-100/70'
  }

  return (
    <div
      className={`faq-item rounded-xl border transition-all duration-300 overflow-hidden ${
        open ? openClasses[accent] : borderClasses[accent]
      }`}
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-4 px-5 py-5 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span
          className={`flex-shrink-0 w-6 h-6 mt-0.5 rounded-full flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
            open ? iconOpenClasses[accent] : iconClasses[accent]
          }`}
        >
          {index + 1}
        </span>
        <span className={`flex-1 font-semibold text-sm sm:text-base leading-snug transition-colors duration-200 ${
          open
            ? textOpenClasses[accent]
            : 'text-white/90'
        }`}>
          {question}
        </span>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 mt-0.5 transition-all duration-300 ${
            open ? 'rotate-180 ' + chevronClasses[accent] : 'text-white/30'
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ease-in-out ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className={`px-5 pb-5 pl-[3.75rem] text-sm sm:text-base leading-relaxed ${answerClasses[accent]}`}>
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

function SectionHeader({
  icon,
  title,
  count,
  accent,
  id,
}: {
  icon: React.ReactNode
  title: string
  count: number
  accent: 'emerald' | 'blue' | 'orange' | 'green'
  id?: string
}) {
  const accentClasses = {
    emerald: 'bg-emerald-500/20 text-emerald-300',
    blue: 'bg-blue-500/20 text-blue-300',
    orange: 'bg-orange-500/20 text-orange-300',
    green: 'bg-green-500/20 text-green-300'
  }
  
  const badgeClasses = {
    emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
    blue: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
    orange: 'bg-orange-500/10 border-orange-500/30 text-orange-300',
    green: 'bg-green-500/10 border-green-500/30 text-green-300'
  }
  
  return (
    <div id={id} className="flex items-center gap-4 mb-6 pt-2 scroll-mt-24">
      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${accentClasses[accent]}`}>
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight">{title}</h2>
      </div>
      <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-semibold border ${badgeClasses[accent]}`}>
        {count} pytań
      </span>
    </div>
  )
}

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-emerald-600/8 rounded-full filter blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-cyan-600/8 rounded-full filter blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero */}
        <div className="py-16 sm:py-20 md:py-24 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/25 rounded-full">
            <HelpCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-blue-300">Centrum pomocy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent text-balance">
            Najczęściej zadawane pytania
          </h1>
          <p className="text-base sm:text-lg text-blue-200/60 max-w-xl mx-auto text-balance">
            Odpowiedzi na pytania o fakturowaniu, KSEF, rozliczeniach PIT i bezpieczeństwie danych.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-1">
            <a href="#company" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-green-500/10 border border-green-500/25 rounded-full text-xs font-semibold text-green-300 hover:bg-green-500/20 transition-colors">
              <Building2 className="w-3.5 h-3.5" />
              Załóż firmę
            </a>
            <a href="#pit" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/25 rounded-full text-xs font-semibold text-emerald-300 hover:bg-emerald-500/20 transition-colors">
              <Receipt className="w-3.5 h-3.5" />
              PIT
            </a>
            <a href="#zus" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-orange-500/10 border border-orange-500/25 rounded-full text-xs font-semibold text-orange-300 hover:bg-orange-500/20 transition-colors">
              <Briefcase className="w-3.5 h-3.5" />
              ZUS
            </a>
            <a href="#faktury" className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/25 rounded-full text-xs font-semibold text-blue-300 hover:bg-blue-500/20 transition-colors">
              <FileText className="w-3.5 h-3.5" />
              Faktury
            </a>
          </div>
        </div>

        {/* Company FAQ */}
        <section id="company" className="scroll-mt-20 mb-16">
          <SectionHeader
            id="company-header"
            icon={<Building2 className="w-5 h-5" />}
            title="Założenie Firmy Online"
            count={companyFaqs.length}
            accent="green"
          />
          <div className="space-y-2">
            {companyFaqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                index={idx}
                accent="green"
              />
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-green-500/8 border border-green-500/20 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold text-green-300">Gotowy założyć firmę?</p>
              <p className="text-xs text-green-200/60 mt-0.5">Rozpocznij rejestrację online i uzyskaj NIP w kilka minut.</p>
            </div>
            <Link href="/zaloz-firme-online">
              <Button className="h-9 px-5 text-sm bg-green-600 hover:bg-green-500 text-white font-semibold flex-shrink-0">
                Załóż firmę
              </Button>
            </Link>
          </div>
        </section>

        {/* PIT FAQ */}
        <section id="pit" className="scroll-mt-20 mb-16">
          <SectionHeader
            id="pit-header"
            icon={<Receipt className="w-5 h-5" />}
            title="Rozliczenia PIT"
            count={pitFaqs.length}
            accent="emerald"
          />
          <div className="space-y-2">
            {pitFaqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                index={idx}
                accent="emerald"
              />
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-emerald-500/8 border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold text-emerald-300">Gotowy rozliczyć PIT?</p>
              <p className="text-xs text-emerald-200/60 mt-0.5">Wypełnij deklarację w kilka minut i wyślij do urzędu skarbowego.</p>
            </div>
            <Link href="/dashboard/pit">
              <Button className="h-9 px-5 text-sm bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex-shrink-0">
                Rozlicz PIT
              </Button>
            </Link>
          </div>
        </section>

        {/* ZUS FAQ */}
        <section id="zus" className="scroll-mt-20 mb-16">
          <SectionHeader
            id="zus-header"
            icon={<Briefcase className="w-5 h-5" />}
            title="Formularze i Zasiłki ZUS"
            count={zusFaqs.length}
            accent="orange"
          />
          <div className="space-y-2">
            {zusFaqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                index={idx}
                accent="orange"
              />
            ))}
          </div>
          <div className="mt-6 p-4 rounded-xl bg-orange-500/8 border border-orange-500/20 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <div className="flex-1">
              <p className="text-sm font-semibold text-orange-300">Potrzebujesz formularza ZUS?</p>
              <p className="text-xs text-orange-200/60 mt-0.5">Mamy bezpłatne generatory Z-3, kalkulatory zasiłków i porady.</p>
            </div>
            <Link href="/formularze-zus">
              <Button className="h-9 px-5 text-sm bg-orange-600 hover:bg-orange-500 text-white font-semibold flex-shrink-0">
                Generatory ZUS
              </Button>
            </Link>
          </div>
        </section>

        {/* Invoice FAQ */}
        <section id="faktury" className="scroll-mt-20 mb-16">
          <SectionHeader
            icon={<FileText className="w-5 h-5" />}
            title="Fakturowanie i KSEF"
            count={invoiceFaqs.length}
            accent="blue"
          />
          <div className="space-y-2">
            {invoiceFaqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                index={idx}
                accent="blue"
              />
            ))}
          </div>
        </section>

        {/* Calculators FAQ */}
        <section id="kalkulatory" className="scroll-mt-20 mb-16">
          <SectionHeader
            icon={<Receipt className="w-5 h-5" />}
            title="Kalkulatory"
            count={calculatorFaqs.length}
            accent="green"
          />
          <div className="space-y-2">
            {calculatorFaqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                index={idx}
                accent="green"
              />
            ))}
          </div>
        </section>

        {/* Documents FAQ */}
        <section id="dokumenty" className="scroll-mt-20 mb-16">
          <SectionHeader
            icon={<FileText className="w-5 h-5" />}
            title="Generator Dokumentów"
            count={documentFaqs.length}
            accent="emerald"
          />
          <div className="space-y-2">
            {documentFaqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                index={idx}
                accent="emerald"
              />
            ))}
          </div>
        </section>

        {/* Academy FAQ */}
        <section id="akademia" className="scroll-mt-20 mb-16">
          <SectionHeader
            icon={<HelpCircle className="w-5 h-5" />}
            title="Akademia VAT Faktura"
            count={academyFaqs.length}
            accent="blue"
          />
          <div className="space-y-2">
            {academyFaqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                index={idx}
                accent="blue"
              />
            ))}
          </div>
        </section>

        {/* AI Assistant FAQ */}
        <section id="asystent" className="scroll-mt-20 mb-16">
          <SectionHeader
            icon={<Briefcase className="w-5 h-5" />}
            title="Asystent AI"
            count={aiAssistantFaqs.length}
            accent="orange"
          />
          <div className="space-y-2">
            {aiAssistantFaqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                index={idx}
                accent="orange"
              />
            ))}
          </div>
        </section>

        {/* Catalog FAQ */}
        <section id="katalog" className="scroll-mt-20 mb-16">
          <SectionHeader
            icon={<Building2 className="w-5 h-5" />}
            title="Katalog Specjalistów"
            count={catalogFaqs.length}
            accent="green"
          />
          <div className="space-y-2">
            {catalogFaqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                question={faq.question}
                answer={faq.answer}
                index={idx}
                accent="green"
              />
            ))}
          </div>
        </section>

        {/* AdSense */}
        <div className="my-10">
          <AdSenseDisplayAuto />
        </div>

        {/* CTA */}
        <div className="mb-24 p-8 sm:p-10 bg-gradient-to-r from-blue-600/15 via-cyan-600/10 to-blue-600/15 border border-blue-500/25 rounded-2xl text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Nie znalazles odpowiedzi?</h2>
          <p className="text-blue-200/60 text-sm sm:text-base">Skontaktuj sie z nami lub zacznij korzystac z aplikacji.</p>
          <Link href="/register">
            <Button className="h-11 px-8 bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 font-semibold shadow-lg shadow-green-500/25">
              Zacznij za darmo
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
