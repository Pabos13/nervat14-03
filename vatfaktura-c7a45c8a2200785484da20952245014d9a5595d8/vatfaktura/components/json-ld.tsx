export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://www.vatfaktura.pl/#website',
        'url': 'https://www.vatfaktura.pl',
        'name': 'VAT Faktura',
        'description': 'Bezpłatny program do fakturowania, rozliczania PIT, znajdowania urzędów i porad prawnych. Faktury w 30 sekund, PIT-37/36/36L/28/38 z podpisem elektronicznym, wyszukiwarka urzędów w 40 miastach Polski, darmowe porady prawne i terminarz wydaż.',
        'inLanguage': 'pl-PL',
        'potentialAction': {
          '@type': 'SearchAction',
          'target': {
            '@type': 'EntryPoint',
            'urlTemplate': 'https://www.vatfaktura.pl/search?q={search_term_string}'
          }
        }
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://www.vatfaktura.pl/#app',
        'name': 'VAT Faktura',
        'description': 'Bezpłatny program do fakturowania i rozliczania PIT online dla firm i freelancerów. Obsługa KSEF, e-Deklaracje, podpis elektroniczny.',
        'applicationCategory': 'BusinessApplication',
        'applicationSubCategory': 'AccountingApplication',
        'operatingSystem': 'Web-based',
        'browserRequirements': 'Requires JavaScript',
        'url': 'https://www.vatfaktura.pl',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'PLN',
          'availability': 'https://schema.org/InStock',
          'description': '100% bezpłatnie na zawsze, bez limitów, bez karty kredytowej. Faktury VAT, rozliczenie PIT, integracja KSEF.'
        },
        'featureList': [
          'Faktury VAT online',
          'Integracja KSEF (Krajowy System e-Faktur)',
          'Rozliczenie PIT-37 online',
          'Rozliczenie PIT-36 dla działalności gospodarczej',
          'Rozliczenie PIT-36L podatek liniowy',
          'Rozliczenie PIT-28 ryczałt ewidencjonowany',
          'Rozliczenie PIT-38 kapitały pieniężne',
          'Rozliczenie PIT-39 zbycie nieruchomości',
          'Podpis elektroniczny (dane autoryzujące, Profil Zaufany)',
          'Wysyłka e-Deklaracje do urzędu skarbowego',
          'UPO (Urzędowe Potwierdzenie Odbioru)',
          'Eksport PDF',
          'Wyszukiwarka urzędów w 40 miastach Polski',
          'Darmowe porady prawne i poradnia obywatelska',
          'Terminarz ważnych dat urzędniczych',
          'Mapy i dane kontaktowe urzędów',
          '100% bezpłatny'
        ],
        'aggregateRating': {
          '@type': 'AggregateRating',
          'ratingValue': '4.9',
          'ratingCount': '312',
          'bestRating': '5',
          'worstRating': '1'
        },
        'review': [
          {
            '@type': 'Review',
            'author': { '@type': 'Person', 'name': 'Piotr M.' },
            'datePublished': '2026-03-05',
            'description': 'Świetny program! Intuicyjny interfejs i pełna integracja KSEF. Rozliczyłem też PIT w 5 minut. Polecam każdemu.',
            'name': 'Najlepszy darmowy program do fakturowania i PIT',
            'reviewRating': { '@type': 'Rating', 'ratingValue': '5' }
          },
          {
            '@type': 'Review',
            'author': { '@type': 'Person', 'name': 'Anna K.' },
            'datePublished': '2026-03-04',
            'description': 'Rozliczyłam PIT-37 i PIT-28 bez problemu. Podpis Profilem Zaufanym i wysyłka do US — wszystko w jednym miejscu.',
            'name': 'Rozliczenie PIT nigdy nie było prostsze',
            'reviewRating': { '@type': 'Rating', 'ratingValue': '5' }
          },
          {
            '@type': 'Review',
            'author': { '@type': 'Person', 'name': 'Marek T.' },
            'datePublished': '2026-03-03',
            'description': 'Wygodny program, brak problemów z KSEF, szybkie wysyłanie faktur elektronicznie i zeznań PIT.',
            'name': 'Wygodny i bezpłatny — faktury i PIT',
            'reviewRating': { '@type': 'Rating', 'ratingValue': '5' }
          }
        ]
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://www.vatfaktura.pl/#pit-service',
        'name': 'Rozliczenie PIT Online — VAT Faktura',
        'description': 'Bezpłatne rozliczanie deklaracji PIT online: PIT-37, PIT-36, PIT-36L, PIT-28, PIT-38, PIT-39, PIT-16A, PIT-19A. Podpis elektroniczny i wysyłka do e-Deklaracje.',
        'url': 'https://www.vatfaktura.pl/dashboard/pit',
        'provider': {
          '@type': 'Organization',
          'name': 'VAT Faktura',
          'url': 'https://www.vatfaktura.pl'
        },
        'areaServed': {
          '@type': 'Country',
          'name': 'Polska'
        },
        'serviceType': 'Tax Filing',
        'offers': {
          '@type': 'Offer',
          'price': '0',
          'priceCurrency': 'PLN',
          'description': 'Rozliczenie PIT online 100% bezpłatnie — PIT-37, PIT-36, PIT-36L, PIT-28, PIT-38, PIT-39'
        }
      },
      {
        '@type': 'GovernmentService',
        '@id': 'https://www.vatfaktura.pl/#offices-service',
        'name': 'Wyszukiwarka Urzędów i Porad Prawnych — VAT Faktura',
        'description': 'Inteligentna wyszukiwarka urzędów publicznych, darmowych porad prawnych i terminiarza wydaż urzędniczych w 40 największych miastach Polski. Znajduj urzędy miasta, skarbowe, ZUS, poradnie obywatelskie i darmowe konsultacje dla przedsiębiorców.',
        'url': 'https://www.vatfaktura.pl/urzedy-i-porady',
        'provider': {
          '@type': 'Organization',
          'name': 'VAT Faktura',
          'url': 'https://www.vatfaktura.pl'
        },
        'areaServed': {
          '@type': 'Country',
          'name': 'Polska'
        },
        'serviceType': [
          'Government Services',
          'Legal Services',
          'Public Information',
          'Civic Services'
        ],
        'availableChannel': {
          '@type': 'ServiceChannel',
          'serviceUrl': 'https://www.vatfaktura.pl/urzedy-i-porady',
          'servicePhone': '+48727141252',
          'availableLanguage': 'Polish'
        },
        'coverage': [
          'Warszawa',
          'Kraków',
          'Łódź',
          'Wrocław',
          'Poznań',
          'Gdańsk',
          'Szczecin',
          'Toruń',
          'Kielce',
          'Bydgoszcz',
          'Radom',
          'Zielona Góra',
          'Rzeszów',
          'Tarnów',
          'Tychy',
          'Gliwice',
          'Zabrze',
          'Chorzów',
          'Rybnik',
          'Opole',
          'Piła',
          'Suwałki',
          'Słupsk',
          'Grudziądz',
          'Legnica',
          'Lubin',
          'Chelmno',
          'Jastrzębie-Zdrój',
          'Elbląg',
          'Gdynia',
          'Sopot',
          'Częstochowa',
          'Radomsko',
          'Katowice',
          'Sosnowiec',
          'Dąbrowa Górnicza',
          'Bytom',
          'Mysłowice',
          'Pabianice',
          'Siedlce'
        ]
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.vatfaktura.pl/#organization',
        'name': 'VAT Faktura',
        'url': 'https://www.vatfaktura.pl',
        'logo': 'https://www.vatfaktura.pl/icon.svg',
        'founder': {
          '@type': 'Person',
          '@id': 'https://www.vatfaktura.pl/#founder'
        },
        'sameAs': [
          'https://www.facebook.com/vatfaktura',
          'https://www.twitter.com/vatfaktura'
        ],
        'contactPoint': {
          '@type': 'ContactPoint',
          'contactType': 'Customer Support',
          'email': 'pawsli2532@gmail.com',
          'telephone': '+48727141252',
          'address': {
            '@type': 'PostalAddress',
            'streetAddress': 'ul. Kościuszki 15e/2',
            'addressLocality': 'Toruń',
            'postalCode': '87-100',
            'addressCountry': 'PL'
          },
          'availableLanguage': 'Polish'
        }
      },
      {
        '@type': 'Person',
        '@id': 'https://www.vatfaktura.pl/#founder',
        'name': 'Paweł Śliwiński',
        'jobTitle': 'Założyciel i główny deweloper',
        'image': 'https://www.vatfaktura.pl/images/pawel-sliwinski.png',
        'email': 'pawsli2532@gmail.com',
        'url': 'https://www.vatfaktura.pl/about',
        'worksFor': {
          '@type': 'Organization',
          '@id': 'https://www.vatfaktura.pl/#organization'
        },
        'knowsAbout': ['Fakturowanie', 'KSEF', 'PIT', 'Programowanie', 'Podatki w Polsce'],
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Toruń',
          'addressCountry': 'PL'
        }
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.vatfaktura.pl/faq#faqpage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'Czy VAT Faktura jest naprawdę 100% bezpłatna?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Tak, VAT Faktura jest w pełni bezpłatna — zarówno do fakturowania, jak i rozliczania PIT. Nie trzeba podawać karty kredytowej, nie ma ukrytych opłat, wszystkie formularze PIT i funkcje fakturowania są dostępne bezpłatnie.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Jakie formularze PIT mogę rozliczyć w VAT Faktura?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'VAT Faktura obsługuje wszystkie główne deklaracje PIT: PIT-37 (pracownicy, zleceniobiorcy), PIT-36 (działalność gospodarcza, skala podatkowa), PIT-36L (podatek liniowy 19%), PIT-28 (ryczałt ewidencjonowany), PIT-38 (kapitały pieniężne, giełda, krypto), PIT-39 (zbycie nieruchomości), PIT-16A (karta podatkowa) i PIT-19A.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Czy mogę wysłać PIT bezpośrednio do urzędu skarbowego przez VAT Faktura?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Tak. Po wypełnieniu i podpisaniu elektronicznym (danymi autoryzującymi lub Profilem Zaufanym) deklaracja PIT jest wysyłana bezpośrednio do systemu e-Deklaracje Ministerstwa Finansów. Automatycznie pobieramy UPO (Urzędowe Potwierdzenie Odbioru) jako dowód złożenia.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Co to jest KSEF i czy VAT Faktura go wspiera?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'KSEF (Krajowy System e-Faktur) to rządowy system do wymiany faktur elektronicznych. VAT Faktura ma pełną integrację z KSEF — możesz wysyłać faktury bezpośrednio z aplikacji bez żadnych dodatkowych narzędzi.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Jak podpisać deklarację PIT elektronicznie?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Deklarację PIT możesz podpisać danymi autoryzującymi (PESEL + kwota przychodu z roku poprzedniego), Profilem Zaufanym lub kwalifikowanym podpisem elektronicznym. Wszystkie metody są akceptowane przez Krajową Administrację Skarbową.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Kiedy jest termin złożenia PIT-37?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'PIT-37 za rok 2025 należy złożyć do 30 kwietnia 2026 roku. Wyjątek: PIT-28 (ryczałt) do końca lutego. VAT Faktura wyświetla przypomnienia o terminach.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Czy moje dane przy rozliczeniu PIT są bezpieczne?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Dane deklaracji PIT są szyfrowane i przesyłane bezpiecznie przez HTTPS bezpośrednio do systemu e-Deklaracje Ministerstwa Finansów — nie są przechowywane na serwerach VAT Faktura.'
            }
          },
          {
            '@type': 'Question',
            'name': 'Czy mogę eksportować faktury do PDF?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Tak, każdą fakturę możesz wyeksportować do pliku PDF i wydrukować. Faktury można również wysyłać elektronicznie przez KSEF.'
            }
          }
        ]
      },
      {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Strona główna',
            'item': 'https://www.vatfaktura.pl'
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Urzędy i Porady',
            'item': 'https://www.vatfaktura.pl/urzedy-i-porady'
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': 'Rozlicz PIT',
            'item': 'https://www.vatfaktura.pl/dashboard/pit'
          },
          {
            '@type': 'ListItem',
            'position': 4,
            'name': 'FAQ',
            'item': 'https://www.vatfaktura.pl/faq'
          },
          {
            '@type': 'ListItem',
            'position': 5,
            'name': 'Blog',
            'item': 'https://www.vatfaktura.pl/blog'
          },
          {
            '@type': 'ListItem',
            'position': 6,
            'name': 'Cennik',
            'item': 'https://www.vatfaktura.pl/pricing'
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}
