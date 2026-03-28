export type Language = 'pl' | 'uk';

export const translations: Record<Language, Record<string, string>> = {
  pl: {
    // Header & Navigation
    'nav.menu': 'Menu',
    'nav.language': 'Język',
    'nav.polish': 'Polski',
    'nav.ukrainian': 'Українська',
    'nav.faq': 'FAQ',
    'nav.blog': 'Blog',
    'nav.pricing': 'Cennik',
    'nav.partners': 'Partnerzy',
    'nav.login': 'Zaloguj się',
    'nav.register': 'Załóż konto',

    // Menu Items
    'menu.company': 'Załóż firmę',
    'menu.invoice': 'Faktura',
    'menu.pit': 'PIT',
    'menu.zus': 'ZUS',
    'menu.offices': 'Urzędy i Porady',

    // Hero Section
    'hero.title': 'Faktury, PIT, ZUS i Rejestracja Firmy Online',
    'hero.subtitle': 'Wszystko czego potrzebujesz do zarządzania biznesem w Polsce',
    'hero.cta': 'Zacznij za Darmo',

    // Company Registration
    'company.title': 'Załóż firmę online',
    'company.description': 'Rejestracja firmy w systemach CEIDG, ZUS i GUS bez wychodzenia z domu',
    'company.button': 'Załóż firmę teraz',

    // Forms
    'form.companyName': 'Nazwa firmy',
    'form.ownerName': 'Imię i nazwisko',
    'form.address': 'Adres siedziby',
    'form.pkd': 'Kod PKD',
    'form.submit': 'Załóż firmę',
    'form.previous': 'Wróć',
    'form.next': 'Dalej',

    // For Foreigners Page
    'foreigners.title': 'Poradnik dla Obcokrajowców',
    'foreigners.subtitle': 'Jak założyć firmę w Polsce jako obcokrajowiec',
    'foreigners.section.documents': 'Wymagane dokumenty',
    'foreigners.section.registration': 'Proces rejestracji',
    'foreigners.section.accounts': 'Konto bankowe',
    'foreigners.section.visa': 'Wymogi wizowe',

    // Additional Navigation Keys
    'nav.mainMenu': 'Główne',
    'nav.more': 'Więcej',
    'nav.account': 'Konto',
    'nav.foreigners': 'Dla obcokrajowców',
    'nav.zusForm': 'Formularze ZUS',
    'nav.openMenu': 'Otwórz menu',
    'nav.closeMenu': 'Zamknij menu',

    // Home Page Hero
    'home.badge': 'Podstawowe funkcje za darmo',
    'home.heroTitle1': 'Fakturowanie',
    'home.heroTitle2': 'bez limitów',
    'home.heroTitle3': 'bez dodatkowych kosztów',
    'home.heroDesc': 'Profesjonalna, nowoczesna platforma do tworzenia faktur z pełnymi funkcjami. Żadnych limitów, żadnej karty kredytowej, żadnych ukrytych opłat.',
    'home.signalsItem1': 'Plan darmowy',
    'home.signalsItem2': 'Bez limitów',
    'home.signalsItem3': 'Brak karty',
    'home.cta.start': 'Rozpocznij za darmo',
    'home.cta.login': 'Zaloguj się',
    
    // Social Proof
    'home.users': 'aktywnych użytkowników',
    'home.invoices': 'wystawionych faktur',
    'home.rating': 'średnia ocena',
    'home.free': 'plan darmowy dostępny',

    // Affiliate Disclosure
    'home.disclosure': 'Ujawnienie:',
    'home.disclosureText': 'VAT Faktura zawiera linki partnerskie. Jeśli dokonasz zakupu poprzez te linki, możemy otrzymać prowizję bez dodatkowych kosztów dla Ciebie.',
    'home.moreInfo': 'Więcej informacji',

    // Features Section
    'home.featuresTitle': 'Dlaczego VAT Faktura?',
    'home.featuresDesc': 'Zaawansowane narzędzia zaprojektowane do maksymalnej wydajności. Wszystko czego potrzebujesz do profesjonalnego fakturowania.',
    'home.feature.quickCreate': 'Szybkie tworzenie',
    'home.feature.quickCreateDesc': 'Utwórz profesjonalną fakturę w kilka sekund dzięki intuicyjnemu interfejsowi',
    'home.feature.secure': 'Bezpieczne',
    'home.feature.secureDesc': 'Twoje dane są chronione i przechowywane bezpiecznie w przeglądarce',
    'home.feature.pdf': 'Export do PDF',
    'home.feature.pdfDesc': 'Pobierz i wyślij faktury w formacie PDF gotowym do druku',
    'home.feature.templates': 'Szablony',
    'home.feature.templatesDesc': 'Korzystaj z gotowych szablonów i stwórz własne dla swojej firmy',
    'home.feature.math': 'Automatyczne obliczenia',
    'home.feature.mathDesc': 'Wszystkie matematyczne obliczenia wykonywane automatycznie',
    'home.feature.professional': 'Profesjonalny wygląd',
    'home.feature.professionalDesc': 'Faktury z profesjonalnym designem dla Twojej firmy',

    // Company Registration Section
    'home.newService': 'Nowa usługa',
    'home.companyTitle': 'Załóż firmę online za pomocą VAT Faktura',
    'home.companyDesc': 'Nie musisz już odwiedzać urzędu! VAT Faktura pomaga w rejestracji Twojej firmy online. Pełna obsługa procesu rejestracji w systemach CEIDG, GUS i ZUS.',
    'home.companyList1': 'Szybka rejestracja online',
    'home.companyList2': 'Bez wizyt w urzędach',
    'home.companyList3': 'Pełna obsługa dokumentacji',
    'home.companyList4': 'Integracja z fakturaowaniem',
    'home.companyButton': 'Załóż firmę teraz',
    'home.companySubtitle': 'Załóż firmę w kilka minut',

    // Nowości Section
    'home.newsSection': 'Nowości',
    'home.newsTitle': 'Nowe funkcje w VAT Faktura',
    'home.newFeature1': 'Nowy system PIT',
    'home.newFeature1Desc': 'Wszystkie rodzaje PIT-ów w jednym miejscu. PIT-37, PIT-36, PIT-28 z obsługą ulg podatkowych.',
    'home.newFeature2': 'Dashboard ZUS',
    'home.newFeature2Desc': 'Zarządzaj składkami ZUS, śledź status płatności i odbieraj potwierdzenia online.',
    'home.newFeature3': 'Integracja kSEF',
    'home.newFeature3Desc': 'Pełna integracja z Krajowym Systemem e-Faktur. Wysyłaj faktury do kSEF za jednym kliknięciem.',

    // Jak to działa Section
    'home.howTitle': 'Jak to działa?',
    'home.step1Title': 'Zarejestruj się',
    'home.step1Desc': 'Załóż bezpłatne konto w ciągu 30 sekund. Nie potrzebujesz karty kredytowej ani jakichkolwiek danych.',
    'home.step2Title': 'Utwórz fakturę',
    'home.step2Desc': 'Wypełnij dane odbiorcy, towary/usługi i gotowe. System automatycznie obliczy VAT i sumy.',
    'home.step3Title': 'Wyślij lub pobierz',
    'home.step3Desc': 'Wyślij fakturę emailem lub pobierz jako PDF. Wszystko zapisuje się automatycznie w historii.',

    // Premium Integration Section
    'home.premiumIntegration': 'Integracja Premium',
    'home.kSEFTitle': 'VAT Faktura jest w pełni zintegrowana z kSEF (Krajowym Systemem e-Faktur). Wysyłaj faktury bezpośrednio do kSEF za jednym kliknięciem - dostępne dla wszystkich użytkowników bez dodatkowych opłat.',
    'home.kSEFFeature1': 'Integracja z kSEF',
    'home.kSEFFeature2': 'Automatyczne wyliczanie VAT',
    'home.kSEFFeature3': 'Elektroniczny podpis',
    'home.kSEFFeature4': 'Brak dodatkowych opłat',

    // PIT Section
    'home.pitTitle': 'Rozlicz PIT bezpośrednio w VAT Faktura',
    'home.pitDesc': 'Wypełnij deklarację podatkową online, podpisz elektronicznie i wyślij bezpośrednio do urzędu skarbowego — wszystko w jednym miejscu, 100% bezpłatnie.',
    'home.pit36': 'PIT-36',
    'home.pit36Desc': 'Działalność gospodarcza',
    'home.pit37': 'PIT-37',
    'home.pit37Desc': 'Umowa o pracę',
    'home.pit28': 'PIT-28',
    'home.pit28Desc': 'Ryczałt ewidencjonowany',
    'home.pit16A': 'PIT-16A',
    'home.pit16ADesc': 'Karta podatkowa',

    // PIT Features
    'home.pitFeature1': 'Integracja z urzędem skarbowym',
    'home.pitFeature1Desc': 'Deklaracja trafia bezpośrednio do systemu e-Deklaracje Ministerstwa Finansów — bez papierów, bez wizyt w urzędzie.',
    'home.pitFeature2': 'Obliczanie podatku',
    'home.pitFeature2Desc': 'System automatycznie oblicza podatek na podstawie dochodu i wydatków.',
    'home.pitFeature3': 'Ulgii podatkowe',
    'home.pitFeature3Desc': 'Zastosuj ulgi podatkowe dla osób niepełnosprawnych, rodzin lub studentów.',

    // Call to Action
    'home.ctaTitle': 'Gotów na zmianę?',
    'home.ctaDesc': 'Załóż darmowe konto i zacznij fakturować dzisiaj. Bez limitów, bez karty kredytowej, zawsze bezpłatnie.',
    'home.ctaButton': 'Začnij za darmo teraz',

    // Blog Section
    'home.blogTitle': 'Artykuły i poradniki',
    'home.kSEFGuide': 'Kompletny przewodnik po kSEF',
    'home.vatInvoice': 'Zarządzanie fakturami VAT i podatkami',

    // Newsletter
    'home.newsletterTitle': 'Bądź na bieżąco',
    'home.newsletterDesc': 'Subskrybuj nasz newsletter i otrzymuj tips do podatkowe, nowości i aktualizacje bezpłatnie',
    'home.supportTeam': 'Każdy link wspiera VAT Faktura',
  },
  uk: {
    // Header & Navigation
    'nav.menu': 'Меню',
    'nav.language': 'Мова',
    'nav.polish': 'Польська',
    'nav.ukrainian': 'Українська',
    'nav.faq': 'Питання',
    'nav.blog': 'Блог',
    'nav.pricing': 'Ціни',
    'nav.partners': 'Партнери',
    'nav.login': 'Увійти',
    'nav.register': 'Створити рахунок',

    // Menu Items
    'menu.company': 'Реєстрація ФОП',
    'menu.invoice': 'Рахунки',
    'menu.pit': 'Податки',
    'menu.zus': 'Соціальні внески',
    'menu.offices': 'Офіси та Поради',

    // Hero Section
    'hero.title': 'Рахунки, Податки, Соціальні внески та Реєстрація ФОП',
    'hero.subtitle': 'Все що вам потрібно для управління бізнесом у Польщі',
    'hero.cta': 'Почніть Безкоштовно',

    // Company Registration
    'company.title': 'Зареєструйте ФОП онлайн',
    'company.description': 'Реєстрація у CEIDG, ZUS та GUS без відвідування офісів',
    'company.button': 'Розпочати реєстрацію',

    // Forms
    'form.companyName': "Назва бізнесу",
    'form.ownerName': 'Ім\'я та прізвище',
    'form.address': 'Адреса місцезнаходження',
    'form.pkd': 'Код PKD',
    'form.submit': 'Зареєструвати ФОП',
    'form.previous': 'Назад',
    'form.next': 'Далі',

    // For Foreigners Page
    'foreigners.title': 'Путівник для іноземців',
    'foreigners.subtitle': 'Як зареєструвати ФОП у Польщі як іноземець',
    'foreigners.section.documents': 'Необхідні документи',
    'foreigners.section.registration': 'Процес реєстрації',
    'foreigners.section.accounts': 'Банківський рахунок',
    'foreigners.section.visa': 'Вимоги щодо віз',

    // Additional Navigation Keys
    'nav.mainMenu': 'Основне',
    'nav.more': 'Більше',
    'nav.account': 'Рахунок',
    'nav.foreigners': 'Для іноземців',
    'nav.zusForm': 'Форми ZUS',
    'nav.openMenu': 'Відкрити меню',
    'nav.closeMenu': 'Закрити меню',

    // Home Page Hero
    'home.badge': 'Базові функції безкоштовно',
    'home.heroTitle1': 'Виставлення рахунків',
    'home.heroTitle2': 'без обмежень',
    'home.heroTitle3': 'без додаткових витрат',
    'home.heroDesc': 'Професійна, сучасна платформа для створення рахунків з повним функціоналом. Жодних обмежень, жод��ої кредитної карти, жодних прихованих зборів.',
    'home.signalsItem1': 'Безкоштовний план',
    'home.signalsItem2': 'Без обмежень',
    'home.signalsItem3': 'Без карти',
    'home.cta.start': 'Почніть безкоштовно',
    'home.cta.login': 'Увійти',
    
    // Social Proof
    'home.users': 'активних користувачів',
    'home.invoices': 'виставлених рахунків',
    'home.rating': 'середня оцінка',
    'home.free': 'безкоштовний план',

    // Affiliate Disclosure
    'home.disclosure': 'Розкриття інформації:',
    'home.disclosureText': 'VAT Faktura містить партнерські посилання. Якщо ви здійснюєте покупку через ці посилання, ми можемо отримати комісію без додаткових витрат для вас.',
    'home.moreInfo': 'Докладніше',

    // Features Section
    'home.featuresTitle': 'Чому VAT Faktura?',
    'home.featuresDesc': 'Розширені інструменти, розроблені для максимальної продуктивності. Все, що вам потрібно для професійного виставлення рахунків.',
    'home.feature.quickCreate': 'Швидке створення',
    'home.feature.quickCreateDesc': 'Створіть професійний рахунок за кілька секунд завдяки інтуїтивному інтерфейсу',
    'home.feature.secure': 'Безпечно',
    'home.feature.secureDesc': 'Ваші дані захищені та безпечно зберігаються в браузері',
    'home.feature.pdf': 'Експорт у PDF',
    'home.feature.pdfDesc': 'Завантажуйте та надсилайте рахунки у форматі PDF, готові до друку',
    'home.feature.templates': 'Шаблони',
    'home.feature.templatesDesc': 'Використовуйте готові шаблони та створюйте власні для вашої компанії',
    'home.feature.math': 'Автоматичні розрахунки',
    'home.feature.mathDesc': 'Усі математичні розрахунки виконуються автоматично',
    'home.feature.professional': 'Професійний вигляд',
    'home.feature.professionalDesc': 'Рахунки з професійним дизайном для вашої компанії',

    // Company Registration Section
    'home.newService': 'Нова послуга',
    'home.companyTitle': 'Зареєструйте ФОП онлайн за допомогою VAT Faktura',
    'home.companyDesc': 'Вам більше не потрібно відвідувати офіс! VAT Faktura допомагає у реєстрації вашого бізнесу онлайн. Повна підтримка процесу реєстрації в системах CEIDG, GUS та ZUS.',
    'home.companyList1': 'Швидка реєстрація онлайн',
    'home.companyList2': 'Без відвідування офісів',
    'home.companyList3': 'Повна підтримка документації',
    'home.companyList4': 'Інтеграція з виставленням рахунків',
    'home.companyButton': 'Зареєструйте ФОП зараз',
    'home.companySubtitle': 'Зареєструйте ФОП за кілька хвилин',

    // Nowości Section
    'home.newsSection': 'Новини',
    'home.newsTitle': 'Нові функції у VAT Faktura',
    'home.newFeature1': 'Нова система податків',
    'home.newFeature1Desc': 'Усі типи податків в одному місці. ПДВ-37, ПДВ-36, ПДВ-28 з підтримкою податкових пільг.',
    'home.newFeature2': 'Панель управління ZUS',
    'home.newFeature2Desc': 'Керуйте внесками ZUS, відстежуйте статус платежів та отримуйте підтвердження онлайн.',
    'home.newFeature3': 'Інтеграція kSEF',
    'home.newFeature3Desc': 'Повна інтеграція з Національною системою електронних рахунків. Надсилайте рахунки до kSEF одним кліком.',

    // Jak to działa Section
    'home.howTitle': 'Як це працює?',
    'home.step1Title': 'Зареєструйтеся',
    'home.step1Desc': 'Створіть безпаспортний рахунок за 30 секунд. Вам не потрібна кредитна карта чи будь-які дані.',
    'home.step2Title': 'Створіть рахунок',
    'home.step2Desc': 'Заповніть дані оде��жувача, товари/послуги і готово. Система автоматично обчислить податок та суми.',
    'home.step3Title': 'Надішліть або завантажте',
    'home.step3Desc': 'Надішліть рахунок електронною поштою або завантажте як PDF. Все автоматично зберігається в історії.',

    // Premium Integration Section
    'home.premiumIntegration': 'Премієм-інтеграція',
    'home.kSEFTitle': 'VAT Faktura повністю інтегрована з kSEF (Національною системою електронних рахунків). Надсилайте рахунки прямо до kSEF одним кліком - доступно для всіх користувачів без додаткової плати.',
    'home.kSEFFeature1': 'Інтеграція з kSEF',
    'home.kSEFFeature2': 'Автоматичне обчислення податку',
    'home.kSEFFeature3': 'Електронний підпис',
    'home.kSEFFeature4': 'Без додаткових платежів',

    // PIT Section
    'home.pitTitle': 'Подайте податкову декларацію прямо в VAT Faktura',
    'home.pitDesc': 'Заповніть податкову декларацію онлайн, підпишіть електронно та надішліть прямо в податківку — все в одному місці, 100% безпаспортно.',
    'home.pit36': 'ПДВ-36',
    'home.pit36Desc': 'Підприємницька діяльність',
    'home.pit37': 'ПДВ-37',
    'home.pit37Desc': 'Трудова угода',
    'home.pit28': 'ПДВ-28',
    'home.pit28Desc': 'Лавовий реєстр',
    'home.pit16A': 'ПДВ-16A',
    'home.pit16ADesc': 'Податкова карта',

    // PIT Features
    'home.pitFeature1': 'Інтеграція з податківкою',
    'home.pitFeature1Desc': 'Декларація відправляється прямо в систему e-Декларування Міністерства фінансів — без паперу, без відвідин офісу.',
    'home.pitFeature2': 'Розрахунок податку',
    'home.pitFeature2Desc': 'Система автоматично розраховує податок на основі доходу та витрат.',
    'home.pitFeature3': 'Податкові пільги',
    'home.pitFeature3Desc': 'Застосуйте податкові пільги для осіб з інвалідністю, сімей або студентів.',

    // Call to Action
    'home.ctaTitle': 'Готові до змін?',
    'home.ctaDesc': 'Створіть безпаспортний рахунок і почніть видавати рахунки сьогодні. Без обмежень, без кредитної карти, завжди безпаспортно.',
    'home.ctaButton': 'Почніть безпаспортно зараз',

    // Blog Section
    'home.blogTitle': 'Статті та посібники',
    'home.kSEFGuide': 'Повний посібник до kSEF',
    'home.vatInvoice': 'Управління рахунками ПДВ та податками',

    // Newsletter
    'home.newsletterTitle': 'Будьте в курсі',
    'home.newsletterDesc': 'Підпишіться на нашу розсилку і отримуйте поради з податків, новини та оновлення безпаспортно',
    'home.supportTeam': 'Кожне посилання підтримує VAT Faktura',
  },
};

export function t(key: string, lang: Language = 'pl'): string {
  return translations[lang]?.[key] || key;
}
