// Document Templates for Contracts and Business Documents

export interface ContractTemplate {
  id: string
  name: string
  description: string
  category: string
  template: string
  variables: string[]
}

export const CONTRACT_TEMPLATES: ContractTemplate[] = [
  {
    id: 'umowa-b2b',
    name: 'Umowa B2B - Umowa o Pracę na Czas Określony',
    description: 'Standardowa umowa B2B dla niezależnych kontrahentów',
    category: 'Umowy',
    variables: ['nazwaFirmy', 'imieNazwisko', 'dataRozpoczecia', 'dataZakonczenia', 'wynagrodzenie', 'opis'],
    template: `UMOWA B2B - UMOWA O PRACĘ NA CZAS OKREŚLONY

zawarta w dniu {{dataUmowy}} roku w {{miejsce}}

między:

{{nazwaFirmy}}, z siedzibą w {{adres}}, NIP: {{nip}}, REGON: {{regon}}
reprezentowaną przez {{osoba}},
zwaną dalej "Zamawiającym"

a

{{imieNazwisko}}, {{adres}}, PESEL/NIP: {{pesel}}
zwaną dalej "Wykonawcą"

W wyniku rozmów ustalono, co następuje:

I. PRZEDMIOT UMOWY
1. Zamawiający powierza Wykonawcy wykonanie prac:
   {{opisPrac}}

2. Praca będzie wykonywana na umowę o pracę na czas określony.

II. OKRES ZATRUDNIENIA
1. Umowa zostaje zawarta na okres od dnia {{dataRozpoczecia}} roku do dnia {{dataZakonczenia}} roku.
2. Okres próbny wynosi {{okresProby}} dni.

III. WARUNKI WYNAGRODZE NIA
1. Zamawiający zobowiązuje się do zapłaty Wykonawcy wynagrodzenia w wysokości {{wynagrodzenie}} PLN
2. Wynagrodzenie wypłacane będzie {{okresWyplaty}}
3. Zapłata dokonywana będzie przelewem na rachunek: {{numerRachunku}}

IV. CZAS PRACY
1. Wykonawca zobowiązuje się do wykonywania pracy w wymiarze {{wymiarCzasu}} godzin tygodniowo
2. Czas pracy wynosi od {{godzRozpoczecia}} do {{godzZakonczenia}}

V. OBOWIĄZKI STRON
1. Wykonawca zobowiązuje się do sumiennego i rzetelnego wykonywania powierzonej mu pracy
2. Zamawiający zapewni warunki niezbędne do wykonania pracy oraz wypłaci wynagrodzenie

VI. POSTANOWIENIA OGÓLNE
1. Umowa podlega prawu polskiemu
2. Wszelkie zmiany wymagają formy pisemnej
3. Umowa obowiązuje od dnia jej podpisania

_______________________          _______________________
Zamawiający                       Wykonawca
`
  },

  {
    id: 'umowa-zlecenia',
    name: 'Umowa Zlecenia',
    description: 'Umowa zlecenia dla usług jednorazowych lub okresowych',
    category: 'Umowy',
    variables: ['zamawiajacy', 'wykonawca', 'przedmiot', 'wynagrodzenie', 'termin'],
    template: `UMOWA ZLECENIA

zawarta w dniu {{dataUmowy}} roku

między {{zamawiajacy}} (Zamawiający)
a {{wykonawca}} (Wykonawca)

I. PRZEDMIOT UMOWY
Wykonawca zobowiązuje się wykonać dla Zamawiającego następujące zlecenie:
{{przedmiotZlecenia}}

II. WYNAGRODZENIE
Zamawiający zobowiązuje się zapłacić Wykonawcy wynagrodzenie w wysokości {{wynagrodzenie}} PLN
za wykonanie zlecenia.

III. TERMIN WYKONANIA
Zlecenie musi być wykonane do dnia {{terminWykonania}} roku.

IV. POSTANOWIENIA KOŃCOWE
Niniejsza umowa wchodzi w życie z dniem podpisania.

_______________________          _______________________
Zamawiający                       Wykonawca
`
  },

  {
    id: 'umowa-dzieilo',
    name: 'Umowa o Dzieło',
    description: 'Umowa o dzieło dla projektów i prac specjalistycznych',
    category: 'Umowy',
    variables: ['zamawiajacy', 'wykonawca', 'dzieilo', 'wynagrodzenie', 'termin'],
    template: `UMOWA O DZIEŁO

zawarta w dniu {{dataUmowy}} roku

Zamawiający: {{zamawiajacy}}
Wykonawca: {{wykonawca}}

1. PRZEDMIOT UMOWY
Wykonawca podejmuje się wykonania następującego dzieła:
{{opisDziela}}

2. WYNAGRODZENIE
Za wykonanie dzieła Zamawiający zobowiązuje się do zapłaty {{wynagrodzenie}} PLN.

3. TERMIN ODDANIA DZIEŁA
Dzieło powinno być ukończone i oddane do dnia {{terminOddania}} roku.

4. ODBIÓR DZIEŁA
Zamawiający ma prawo do wglądu w dzieło w trakcie jego wykonywania i może żądać zmian
związanych z jego realizacją.

5. ZASADY POSTĘPOWANIA
Niniejsza umowa jest zawarta na podstawie artykułu 627 i następnych Kodeksu Cywilnego.

_______________________          _______________________
Zamawiający                       Wykonawca
`
  },

  {
    id: 'polityka-prywatnosci',
    name: 'Polityka Prywatności (RODO)',
    description: 'Szablon polityki prywatności zgodny z RODO',
    category: 'Dokumenty prawne',
    variables: ['nazwaFirmy', 'emailKontakt', 'adresSedziby'],
    template: `POLITYKA PRYWATNOŚCI

1. ADMINISTRATOR DANYCH
Administrator danych osobowych: {{nazwaFirmy}}
Adres: {{adresSedziby}}
Email: {{emailKontakt}}

2. WYKAZ DANYCH PRZETWARZANYCH
Administrator przetwarza następujące dane osobowe użytkowników:
- Imię i nazwisko
- Adres email
- Numer telefonu
- Adres zamieszkania
- Informacje o transakcjach

3. CEL PRZETWARZANIA
Dane przetwarzane są w następujących celach:
- Świadczenie usług
- Komunikacja z klientem
- Rozliczenia
- Marketing (za zgodą)

4. PODSTAWA PRAWNA
Przetwarzanie odbywa się na podstawie:
- Artykułu 6(1)a RODO - zgoda użytkownika
- Artykułu 6(1)b RODO - wykonanie umowy
- Artykułu 6(1)c RODO - obowiązek prawny
- Artykułu 6(1)f RODO - prawnie uzasadniony interes

5. PRAWA UŻYTKOWNIKA
Użytkownik ma prawo do:
- Dostępu do swoich danych
- Sprostowania danych
- Usunięcia danych
- Ograniczenia przetwarzania
- Przenoszenia danych
- Sprzeciwu wobec przetwarzania
- Niepoddawania się zautomatyzowanemu podejmowaniu decyzji

6. ODBIORCY DANYCH
Dane mogą być przekazywane:
- Podmiotom zaangażowanym w dostawę usług
- Organom publicznym na żądanie
- Dostawcom usług IT

7. OKRES PRZECHOWYWANIA
Dane przechowywane są przez:
- Okres trwania umowy
- Czas wymagany przepisami prawa
- Okres przedawnienia roszczeń

8. COOKIES
Strona wykorzystuje cookies do:
- Analityki
- Poprawy funkcjonalności
- Personalizacji treści

9. KONTAKT
W sprawie ochrony danych prosimy kontaktować się pod adresem: {{emailKontakt}}

Data wejścia w życie: {{dataWejscia}}
`
  },

  {
    id: 'regulamin-sklepu',
    name: 'Regulamin Sklepu Internetowego',
    description: 'Regulamin dla sklepu e-commerce',
    category: 'Dokumenty prawne',
    variables: ['nazwaSklepu', 'emailSklepu', 'nip', 'skladowisko'],
    template: `REGULAMIN SKLEPU INTERNETOWEGO

1. POSTANOWIENIA OGÓLNE
1.1. Niniejszy regulamin określa zasady korzystania ze sklepu internetowego {{nazwaSklepu}}
1.2. Sprzedawca: {{nazwaSklepu}}, NIP: {{nip}}
1.3. Adres siedziby: {{adresSedziby}}
1.4. Kontakt: {{emailSklepu}}

2. ZASADY KORZYSTANIA
2.1. Użytkownik zobowiązany jest do używania Sklepu zgodnie z przepisami prawa
2.2. Użytkownik odpowiada za prawdziwość podanych danych
2.3. Zabrania się zamieszczania treści niezgodnych z prawem

3. OFERTA I ZAMAWIANIE
3.1. Towary wyświetlane w sklepie stanowią ofertę zaproszenia do złożenia oświadczenia woli
3.2. Zamówienie stanowi oświadczenie woli zawarcia umowy sprzedaży
3.3. Zawarcie umowy następuje w momencie potwierdzenia zamówienia przez Sprzedawcę

4. CENY I PODATKI
4.1. Wszystkie ceny zawierają podatek VAT
4.2. Przesyłka dodatkowo obciążona kosztem dostawy
4.3. Sprzedawca zastrzega sobie prawo do zmiany cen

5. DOSTAWA
5.1. Dostawa następuje na adres podany przez Kupującego
5.2. Czas dostawy wynosi {{czasDostawy}} dni roboczych
5.3. Ryzyko utraty towaru przechodzi na Kupującego w momencie odebrania towaru

6. PRAWO ODSTĄPIENIA
6.1. Kupujący ma prawo do odstąpienia od umowy bez podawania przyczyny w ciągu 14 dni
6.2. Towar musi być w stanie niepousuniętym
6.3. Koszty zwrotu pokrywa Kupujący

7. GWARANCJA
7.1. Na wszystkie towary udzielana jest gwarancja producenta
7.2. Roszczenia gwarancyjne składać należy u Sprzedawcy

8. POSTANOWIENIA KOŃCOWE
Regulamin wchodzi w życie z dniem publikacji na stronie Sklepu.
`
  }
]

export function getTemplateById(id: string): ContractTemplate | undefined {
  return CONTRACT_TEMPLATES.find(t => t.id === id)
}

export function getTemplatesByCategory(category: string): ContractTemplate[] {
  return CONTRACT_TEMPLATES.filter(t => t.category === category)
}

export function generateFromTemplate(templateId: string, variables: Record<string, string>): string {
  const template = getTemplateById(templateId)
  if (!template) return ''

  let result = template.template
  Object.entries(variables).forEach(([key, value]) => {
    const regex = new RegExp(`{{${key}}}`, 'g')
    result = result.replace(regex, value || '')
  })

  return result
}
