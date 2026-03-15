export interface LegalAdvice {
  id: string
  city: string
  name: string
  type: string
  address: string
  zipCode: string
  phone: string[]
  email?: string
  website?: string
  specialization: string[]
  hours: { day: string; hours: string }[]
  isFree: boolean
  description: string
  coordinates: { lat: number; lng: number }
}

const defaultHours = [
  { day: 'poniedziałek', hours: '09:00 - 17:00' },
  { day: 'wtorek', hours: '09:00 - 17:00' },
  { day: 'środa', hours: '09:00 - 17:00' },
  { day: 'czwartek', hours: '09:00 - 17:00' },
  { day: 'piątek', hours: '09:00 - 15:00' },
  { day: 'sobota', hours: '10:00 - 13:00' },
  { day: 'niedziela', hours: 'nieczynne' },
]

export const legalAdviceData: LegalAdvice[] = [
  // WARSZAWA
  {
    id: 'warszawa-porady-1',
    city: 'Warszawa',
    name: 'Poradnia Obywatelska - Warszawa Centrum',
    type: 'Poradnia Obywatelska',
    address: 'ul. Nowy Świat 10',
    zipCode: '00-511',
    phone: ['+48 22 6201234'],
    email: 'porady@um.warszawa.pl',
    website: 'https://um.warszawa.pl/porady',
    specialization: ['prawo konsumenckie', 'prawo pracy', 'sprawy mieszkaniowe', 'prawo rodzinne'],
    hours: defaultHours,
    isFree: true,
    description: 'Darmowe porady prawne dla obywateli. Porada trwa ok. 30 minut. Bez konieczności wcześniejszej rejestracji.',
    coordinates: { lat: 52.2332, lng: 21.0122 },
  },
  {
    id: 'warszawa-porady-2',
    city: 'Warszawa',
    name: 'Ośrodek Pomocy Prawnej - Warszawa Północ',
    type: 'Ośrodek Pomocy Prawnej',
    address: 'ul. Grzybowska 89',
    zipCode: '00-844',
    phone: ['+48 22 6204567'],
    specialization: ['prawo pracy', 'sprawy emerytalne', 'prawo ubezpieczeniowe'],
    hours: [
      { day: 'poniedziałek', hours: '10:00 - 18:00' },
      { day: 'wtorek', hours: '10:00 - 18:00' },
      { day: 'środa', hours: '10:00 - 18:00' },
      { day: 'czwartek', hours: '10:00 - 18:00' },
      { day: 'piątek', hours: '10:00 - 16:00' },
      { day: 'sobota', hours: 'nieczynne' },
      { day: 'niedziela', hours: 'nieczynne' },
    ],
    isFree: true,
    description: 'Bezpłatne porady dla osób ze statusem niezamożności. Wiele lokalizacji w Warszawie.',
    coordinates: { lat: 52.2371, lng: 21.0261 },
  },

  // KRAKÓW
  {
    id: 'krakow-porady-1',
    city: 'Kraków',
    name: 'Poradnia Obywatelska - Kraków',
    type: 'Poradnia Obywatelska',
    address: 'ul. Pijarska 5',
    zipCode: '31-015',
    phone: ['+48 12 6211111'],
    specialization: ['prawo konsumenckie', 'prawo pracy', 'ochrona konsumenta'],
    hours: defaultHours,
    isFree: true,
    description: 'Darmowe porady dla mieszkańców Krakowa. Kontakt telefoniczny również dostępny.',
    coordinates: { lat: 50.0626, lng: 19.9449 },
  },
  {
    id: 'krakow-porady-2',
    city: 'Kraków',
    name: 'Biuro Porad Dla Przedsiębiorców - Kraków',
    type: 'Biuro Porad',
    address: 'ul. Grodzka 3',
    zipCode: '31-006',
    phone: ['+48 12 4287654'],
    specialization: ['prawo biznesu', 'prawo handlowe', 'podatki'],
    hours: [
      { day: 'poniedziałek', hours: '09:00 - 17:00' },
      { day: 'wtorek', hours: '09:00 - 17:00' },
      { day: 'środa', hours: '09:00 - 17:00' },
      { day: 'czwartek', hours: '09:00 - 17:00' },
      { day: 'piątek', hours: '09:00 - 15:00' },
      { day: 'sobota', hours: 'nieczynne' },
      { day: 'niedziela', hours: 'nieczynne' },
    ],
    isFree: true,
    description: 'Darmowe konsultacje dla Start-upów i małych przedsiębiorstw. Finansowane z budżetu miasta.',
    coordinates: { lat: 50.0598, lng: 19.9374 },
  },

  // ŁÓDŹ
  {
    id: 'lodz-porady-1',
    city: 'Łódź',
    name: 'Poradnia Obywatelska Łódź',
    type: 'Poradnia Obywatelska',
    address: 'ul. Piotrkowska 106',
    zipCode: '90-962',
    phone: ['+48 42 6394343'],
    specialization: ['prawo konsumenckie', 'sprawy mieszkaniowe', 'prawo rodzinne'],
    hours: defaultHours,
    isFree: true,
    description: 'Punkty porad w różnych dzielnicach Łodzi.',
    coordinates: { lat: 51.7703, lng: 19.4550 },
  },

  // WROCŁAW
  {
    id: 'wroclaw-porady-1',
    city: 'Wrocław',
    name: 'Poradnia Obywatelska - Wrocław',
    type: 'Poradnia Obywatelska',
    address: 'ul. Kielbasy 10',
    zipCode: '50-265',
    phone: ['+48 71 3452800'],
    specialization: ['prawo konsumenckie', 'prawo pracy', 'ubezpieczenia'],
    hours: defaultHours,
    isFree: true,
    description: 'Darmowe porady dla wrocławian. Wiele punktów na terenie miasta.',
    coordinates: { lat: 51.1094, lng: 17.0267 },
  },

  // POZNAŃ
  {
    id: 'poznan-porady-1',
    city: 'Poznań',
    name: 'Ośrodek Pomocy Prawnej - Poznań',
    type: 'Ośrodek Pomocy Prawnej',
    address: 'ul. Ratajczaka 35',
    zipCode: '61-816',
    phone: ['+48 61 6462500'],
    specialization: ['prawo pracy', 'prawo rodzinne', 'prawo mieszkaniowe'],
    hours: defaultHours,
    isFree: true,
    description: 'Bezpłatne porady dla osób o niskich dochodach oraz seniorów.',
    coordinates: { lat: 52.4090, lng: 16.9388 },
  },

  // GDAŃSK
  {
    id: 'gdansk-porady-1',
    city: 'Gdańsk',
    name: 'Poradnia Obywatelska - Gdańsk',
    type: 'Poradnia Obywatelska',
    address: 'ul. Nowe Ogrody 82',
    zipCode: '80-804',
    phone: ['+48 58 3017300'],
    specialization: ['prawo konsumenckie', 'sprawy mieszkaniowe', 'ochrona konsumenta'],
    hours: defaultHours,
    isFree: true,
    description: 'Darmowe porady dla mieszkańców Gdańska.',
    coordinates: { lat: 54.3700, lng: 18.6386 },
  },

  // SZCZECIN
  {
    id: 'szczecin-porady-1',
    city: 'Szczecin',
    name: 'Ośrodek Pomocy Prawnej - Szczecin',
    type: 'Ośrodek Pomocy Prawnej',
    address: 'ul. Wały Chrobrego 7',
    zipCode: '70-013',
    phone: ['+48 91 4334802'],
    specialization: ['prawo pracy', 'prawo rodzinne', 'ubezpieczenia'],
    hours: defaultHours,
    isFree: true,
    description: 'Poradnictwo bezpłatne w siedzibie i za pośrednictwem telefonu.',
    coordinates: { lat: 53.4316, lng: 14.5528 },
  },

  // BYDGOSZCZ
  {
    id: 'bydgoszcz-porady-1',
    city: 'Bydgoszcz',
    name: 'Poradnia Obywatelska - Bydgoszcz',
    type: 'Poradnia Obywatelska',
    address: 'ul. Śniadeckich 2',
    zipCode: '85-030',
    phone: ['+48 52 3862300'],
    specialization: ['prawo konsumenckie', 'prawo pracy', 'sprawy majątkowe'],
    hours: defaultHours,
    isFree: true,
    description: 'Darmowe porady dla mieszkańców Bydgoszczy. Również poradnictwo telefoniczne.',
    coordinates: { lat: 53.1237, lng: 18.0044 },
  },

  // LUBLIN
  {
    id: 'lublin-porady-1',
    city: 'Lublin',
    name: 'Poradnia Obywatelska - Lublin',
    type: 'Poradnia Obywatelska',
    address: 'pl. Litewski 2',
    zipCode: '20-070',
    phone: ['+48 81 4301800'],
    specialization: ['prawo konsumenckie', 'prawo pracy', 'prawo rodzinne'],
    hours: defaultHours,
    isFree: true,
    description: 'Darmowe porady dla lublinian.',
    coordinates: { lat: 51.2461, lng: 22.5684 },
  },

  // TORUŃ
  {
    id: 'torun-porady-1',
    city: 'Toruń',
    name: 'Poradnia Obywatelska - Toruń',
    type: 'Poradnia Obywatelska',
    address: 'Rynek Staromiejski 2',
    zipCode: '87-100',
    phone: ['+48 56 6222100'],
    specialization: ['prawo konsumenckie', 'prawo pracy', 'ubezpieczenia'],
    hours: defaultHours,
    isFree: true,
    description: 'Darmowe porady dla torunian. Wiele punktów na terenie miasta finansowanych przez samorząd.',
    coordinates: { lat: 53.0149, lng: 18.5949 },
  },
  {
    id: 'torun-porady-2',
    city: 'Toruń',
    name: 'Punkt Porad Dla Przedsiębiorców - Toruń Śródmieście',
    type: 'Biuro Porad',
    address: 'ul. Kopernika 24',
    zipCode: '87-100',
    phone: ['+48 56 6222101'],
    specialization: ['prawo biznesu', 'podatki', 'prawo handlowe'],
    hours: [
      { day: 'poniedziałek', hours: '09:00 - 17:00' },
      { day: 'wtorek', hours: '09:00 - 17:00' },
      { day: 'środa', hours: '09:00 - 17:00' },
      { day: 'czwartek', hours: '09:00 - 17:00' },
      { day: 'piątek', hours: '09:00 - 15:00' },
      { day: 'sobota', hours: 'nieczynne' },
      { day: 'niedziela', hours: 'nieczynne' },
    ],
    isFree: true,
    description: 'Darmowe konsultacje dla start-upów i małych firm. Również w innych dzielnicach miasta.',
    coordinates: { lat: 53.0124, lng: 18.5934 },
  },
  {
    id: 'torun-porady-3',
    city: 'Toruń',
    name: 'Punkt Porad Dla Przedsiębiorców - Toruń Bielany',
    type: 'Biuro Porad',
    address: 'ul. Słowackiego 15',
    zipCode: '87-100',
    phone: ['+48 56 6222102'],
    specialization: ['prawo biznesu', 'podatki', 'prawo pracy'],
    hours: [
      { day: 'poniedziałek', hours: '09:00 - 17:00' },
      { day: 'wtorek', hours: '09:00 - 17:00' },
      { day: 'środa', hours: '09:00 - 17:00' },
      { day: 'czwartek', hours: '09:00 - 17:00' },
      { day: 'piątek', hours: '09:00 - 15:00' },
      { day: 'sobota', hours: 'nieczynne' },
      { day: 'niedziela', hours: 'nieczynne' },
    ],
    isFree: true,
    description: 'Darmowe porady dla przedsiębiorców finansowane przez miasto.',
    coordinates: { lat: 53.0156, lng: 18.5889 },
  },

  // KATOWICE
  {
    id: 'katowice-porady-1',
    city: 'Katowice',
    name: 'Ośrodek Pomocy Prawnej - Katowice',
    type: 'Ośrodek Pomocy Prawnej',
    address: 'ul. Stawowa 3',
    zipCode: '40-001',
    phone: ['+48 32 3590100'],
    specialization: ['prawo pracy', 'prawo rodzinne', 'ubezpieczenia'],
    hours: defaultHours,
    isFree: true,
    description: 'Bezpłatne porady prawne dla katowickan.',
    coordinates: { lat: 50.2558, lng: 19.0227 },
  },

  // BIAŁYSTOK
  {
    id: 'bialystok-porady-1',
    city: 'Białystok',
    name: 'Poradnia Obywatelska - Białystok',
    type: 'Poradnia Obywatelska',
    address: 'ul. Lipowa 8',
    zipCode: '15-418',
    phone: ['+48 85 7451200'],
    specialization: ['prawo konsumenckie', 'prawo pracy', 'prawo rodzinne'],
    hours: defaultHours,
    isFree: true,
    description: 'Darmowe porady dla białystoczan.',
    coordinates: { lat: 53.1288, lng: 23.1895 },
  },

  // RZESZÓW
  {
    id: 'rzeszow-porady-1',
    city: 'Rzeszów',
    name: 'Ośrodek Pomocy Prawnej - Rzeszów',
    type: 'Ośrodek Pomocy Prawnej',
    address: 'ul. Łąkowa 32',
    zipCode: '35-959',
    phone: ['+48 17 8606100'],
    specialization: ['prawo pracy', 'prawo rodzinne', 'ubezpieczenia'],
    hours: defaultHours,
    isFree: true,
    description: 'Bezpłatne porady dla mieszkańców.',
    coordinates: { lat: 50.0413, lng: 21.9994 },
  },

  // GDYNIA
  {
    id: 'gdynia-porady-1',
    city: 'Gdynia',
    name: 'Poradnia Obywatelska - Gdynia',
    type: 'Poradnia Obywatelska',
    address: '10-Lutego 56',
    zipCode: '81-368',
    phone: ['+48 58 7324800'],
    specialization: ['prawo konsumenckie', 'sprawy mieszkaniowe', 'ubezpieczenia'],
    hours: defaultHours,
    isFree: true,
    description: 'Darmowe porady dla gdynian.',
    coordinates: { lat: 54.4816, lng: 18.5305 },
  },

  // RADOM
  {
    id: 'radom-porady-1',
    city: 'Radom',
    name: 'Poradnia Obywatelska - Radom',
    type: 'Poradnia Obywatelska',
    address: 'ul. Żeromskiego 3',
    zipCode: '26-610',
    phone: ['+48 48 3609000'],
    specialization: ['prawo konsumenckie', 'prawo pracy', 'sprawy majątkowe'],
    hours: defaultHours,
    isFree: true,
    description: 'Darmowe porady dla radomian.',
    coordinates: { lat: 51.4028, lng: 21.1472 },
  },

  // OLSZTYN
  {
    id: 'olsztyn-porady-1',
    city: 'Olsztyn',
    name: 'Ośrodek Pomocy Prawnej - Olsztyn',
    type: 'Ośrodek Pomocy Prawnej',
    address: 'Al. Niepodległości 3',
    zipCode: '10-957',
    phone: ['+48 89 5353700'],
    specialization: ['prawo pracy', 'prawo rodzinne', 'ubezpieczenia'],
    hours: defaultHours,
    isFree: true,
    description: 'Bezpłatne porady dla mieszkańców.',
    coordinates: { lat: 53.7796, lng: 20.4744 },
  },

  // KIELCE
  {
    id: 'kielce-porady-1',
    city: 'Kielce',
    name: 'Poradnia Obywatelska - Kielce',
    type: 'Poradnia Obywatelska',
    address: 'ul. Żeglarska 5',
    zipCode: '25-375',
    phone: ['+48 41 3424700'],
    specialization: ['prawo konsumenckie', 'prawo pracy', 'sprawy mieszkaniowe'],
    hours: defaultHours,
    isFree: true,
    description: 'Darmowe porady dla kielczan.',
    coordinates: { lat: 50.8745, lng: 21.1287 },
  },

  // GLIWICE
  {
    id: 'gliwice-porady-1',
    city: 'Gliwice',
    name: 'Poradnia Obywatelska - Gliwice',
    type: 'Poradnia Obywatelska',
    address: 'ul. Zwycięstwa 23',
    zipCode: '44-100',
    phone: ['+48 32 2389300'],
    specialization: ['prawo konsumenckie', 'prawo pracy', 'ubezpieczenia'],
    hours: defaultHours,
    isFree: true,
    description: 'Darmowe porady dla gliwican.',
    coordinates: { lat: 50.2946, lng: 18.6750 },
  },

  // ZABRZE
  {
    id: 'zabrze-porady-1',
    city: 'Zabrze',
    name: 'Ośrodek Pomocy Prawnej - Zabrze',
    type: 'Ośrodek Pomocy Prawnej',
    address: 'ul. Krakowska 22',
    zipCode: '41-800',
    phone: ['+48 32 2716200'],
    specialization: ['prawo pracy', 'prawo rodzinne', 'ubezpieczenia'],
    hours: defaultHours,
    isFree: true,
    description: 'Bezpłatne porady dla zabrzeń.',
    coordinates: { lat: 50.3156, lng: 18.7839 },
  },

  // SOSNOWIEC
  {
    id: 'sosnowiec-porady-1',
    city: 'Sosnowiec',
    name: 'Poradnia Obywatelska - Sosnowiec',
    type: 'Poradnia Obywatelska',
    address: 'ul. Modrzejowska 5',
    zipCode: '41-200',
    phone: ['+48 32 2958300'],
    specialization: ['prawo konsumenckie', 'prawo pracy', 'sprawy majątkowe'],
    hours: defaultHours,
    isFree: true,
    description: 'Darmowe porady dla sosnowiczan.',
    coordinates: { lat: 50.2837, lng: 19.1049 },
  },
]

export function getLegalAdviceByCity(cityName: string): LegalAdvice[] {
  return legalAdviceData.filter((advice) => advice.city === cityName)
}

export function getLegalAdviceBySpecialization(specialization: string): LegalAdvice[] {
  return legalAdviceData.filter((advice) => advice.specialization.includes(specialization))
}

export function getFreeLegalAdviceByCity(cityName: string): LegalAdvice[] {
  return legalAdviceData.filter((advice) => advice.city === cityName && advice.isFree)
}
