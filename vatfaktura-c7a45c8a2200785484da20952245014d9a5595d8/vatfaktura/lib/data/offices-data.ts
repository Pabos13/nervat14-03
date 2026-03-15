export type OfficeType = 'city_office' | 'tax_office' | 'labor_office' | 'governor' | 'gus' | 'zus' | 'district'

export interface Office {
  id: string
  city: string
  name: string
  type: OfficeType
  address: string
  zipCode: string
  phone: string[]
  email?: string
  website?: string
  hours: { day: string; hours: string }[]
  coordinates: { lat: number; lng: number }
  description?: string
}

const officeTypeLabels: Record<OfficeType, string> = {
  city_office: 'Urząd Miasta',
  tax_office: 'Urząd Skarbowy',
  labor_office: 'Powiatowy Urząd Pracy',
  governor: 'Wojewoda',
  gus: 'Główny Urząd Statystyczny',
  zus: 'Zakład Ubezpieczeń Społecznych',
  district: 'Starostwo Powiatowe',
}

export function getOfficeTypeLabel(type: OfficeType): string {
  return officeTypeLabels[type]
}

// Helper funkcja do utworzenia domyślnych godzin
const defaultHours = [
  { day: 'poniedziałek', hours: '08:00 - 16:00' },
  { day: 'wtorek', hours: '08:00 - 16:00' },
  { day: 'środa', hours: '08:00 - 16:00' },
  { day: 'czwartek', hours: '08:00 - 16:00' },
  { day: 'piątek', hours: '08:00 - 14:00' },
  { day: 'sobota', hours: 'nieczynne' },
  { day: 'niedziela', hours: 'nieczynne' },
]

// Dane urzędów dla każdego miasta
export const officesData: Office[] = [
  // WARSZAWA
  {
    id: 'warszawa-um',
    city: 'Warszawa',
    name: 'Urząd Miasta Stołecznego Warszawy',
    type: 'city_office',
    address: 'ul. Nowy Świat 6/12',
    zipCode: '00-511',
    phone: ['+48 22 4438000'],
    email: 'info@um.warszawa.pl',
    website: 'https://um.warszawa.pl',
    hours: defaultHours,
    coordinates: { lat: 52.2332, lng: 21.0122 },
  },
  {
    id: 'warszawa-us',
    city: 'Warszawa',
    name: 'Urząd Skarbowy Warszawa Centrum',
    type: 'tax_office',
    address: 'Al. Ujazdowskie 49',
    zipCode: '00-536',
    phone: ['+48 22 5084500'],
    email: 'info@mf.gov.pl',
    website: 'https://www.podatki.gov.pl',
    hours: defaultHours,
    coordinates: { lat: 52.2196, lng: 21.0252 },
  },
  {
    id: 'warszawa-pup',
    city: 'Warszawa',
    name: 'Powiatowy Urząd Pracy Warszawa',
    type: 'labor_office',
    address: 'ul. Grzybowska 87',
    zipCode: '00-844',
    phone: ['+48 22 5350100'],
    website: 'https://www.pup.warszawa.pl',
    hours: defaultHours,
    coordinates: { lat: 52.2371, lng: 21.0261 },
  },
  {
    id: 'warszawa-zus',
    city: 'Warszawa',
    name: 'Zakład Ubezpieczeń Społecznych - Warszawa',
    type: 'zus',
    address: 'al. Niepodległości 7',
    zipCode: '02-653',
    phone: ['+48 22 2524200'],
    email: 'info@zus.pl',
    website: 'https://www.zus.pl',
    hours: defaultHours,
    coordinates: { lat: 52.1833, lng: 21.0456 },
  },
  {
    id: 'warszawa-gus',
    city: 'Warszawa',
    name: 'Główny Urząd Statystyczny',
    type: 'gus',
    address: 'ul. 1-go Sierpnia 21',
    zipCode: '02-134',
    phone: ['+48 22 4081000'],
    website: 'https://stat.gov.pl',
    hours: defaultHours,
    coordinates: { lat: 52.2145, lng: 21.0473 },
  },

  // KRAKÓW
  {
    id: 'krakow-um',
    city: 'Kraków',
    name: 'Urząd Miasta Krakowa',
    type: 'city_office',
    address: 'ul. Pijarska 1',
    zipCode: '31-015',
    phone: ['+48 12 6165200'],
    email: 'info@um.krakow.pl',
    website: 'https://www.krakow.pl',
    hours: defaultHours,
    coordinates: { lat: 50.0626, lng: 19.9449 },
  },
  {
    id: 'krakow-us',
    city: 'Kraków',
    name: 'Urząd Skarbowy Kraków Miasto',
    type: 'tax_office',
    address: 'ul. Grodzka 5',
    zipCode: '31-006',
    phone: ['+48 12 6194500'],
    website: 'https://www.podatki.gov.pl',
    hours: defaultHours,
    coordinates: { lat: 50.0598, lng: 19.9374 },
  },
  {
    id: 'krakow-zus',
    city: 'Kraków',
    name: 'Zakład Ubezpieczeń Społecznych - Kraków',
    type: 'zus',
    address: 'ul. Ułasza 9',
    zipCode: '31-225',
    phone: ['+48 12 3965300'],
    website: 'https://www.zus.pl',
    hours: defaultHours,
    coordinates: { lat: 50.0821, lng: 19.9249 },
  },

  // ŁÓDŹ
  {
    id: 'lodz-um',
    city: 'Łódź',
    name: 'Urząd Miasta Łodzi',
    type: 'city_office',
    address: 'ul. Piotrkowska 104',
    zipCode: '90-962',
    phone: ['+48 42 6391111'],
    email: 'info@um.lodz.pl',
    website: 'https://um.lodz.pl',
    hours: defaultHours,
    coordinates: { lat: 51.7703, lng: 19.4550 },
  },
  {
    id: 'lodz-us',
    city: 'Łódź',
    name: 'Urząd Skarbowy Łódź-Miasto',
    type: 'tax_office',
    address: 'ul. Piotrkowska 114',
    zipCode: '90-963',
    phone: ['+48 42 6682400'],
    website: 'https://www.podatki.gov.pl',
    hours: defaultHours,
    coordinates: { lat: 51.7710, lng: 19.4549 },
  },

  // WROCŁAW
  {
    id: 'wroclaw-um',
    city: 'Wrocław',
    name: 'Urząd Miasta Wrocławia',
    type: 'city_office',
    address: 'ul. Kielbasy 8',
    zipCode: '50-265',
    phone: ['+48 71 3452700'],
    email: 'info@um.wroclaw.pl',
    website: 'https://www.wroclaw.pl',
    hours: defaultHours,
    coordinates: { lat: 51.1094, lng: 17.0267 },
  },
  {
    id: 'wroclaw-zus',
    city: 'Wrocław',
    name: 'Zakład Ubezpieczeń Społecznych - Wrocław',
    type: 'zus',
    address: 'ul. Dmowskiego 8',
    zipCode: '50-234',
    phone: ['+48 71 3635800'],
    website: 'https://www.zus.pl',
    hours: defaultHours,
    coordinates: { lat: 51.1079, lng: 17.0302 },
  },

  // POZNAŃ
  {
    id: 'poznan-um',
    city: 'Poznań',
    name: 'Urząd Miasta Poznania',
    type: 'city_office',
    address: 'ul. Ratajczaka 33',
    zipCode: '61-816',
    phone: ['+48 61 6463600'],
    email: 'info@um.poznan.pl',
    website: 'https://www.poznan.pl',
    hours: defaultHours,
    coordinates: { lat: 52.4090, lng: 16.9388 },
  },

  // GDAŃSK
  {
    id: 'gdansk-um',
    city: 'Gdańsk',
    name: 'Urząd Miasta Gdańska',
    type: 'city_office',
    address: 'ul. Nowe Ogrody 80-82',
    zipCode: '80-804',
    phone: ['+48 58 3017200'],
    email: 'urzad@gdansk.pl',
    website: 'https://www.gdansk.pl',
    hours: defaultHours,
    coordinates: { lat: 54.3700, lng: 18.6386 },
  },
  {
    id: 'gdansk-zus',
    city: 'Gdańsk',
    name: 'Zakład Ubezpieczeń Społecznych - Gdańsk',
    type: 'zus',
    address: 'ul. Maja 6',
    zipCode: '80-253',
    phone: ['+48 58 3084000'],
    website: 'https://www.zus.pl',
    hours: defaultHours,
    coordinates: { lat: 54.3645, lng: 18.6427 },
  },

  // SZCZECIN
  {
    id: 'szczecin-um',
    city: 'Szczecin',
    name: 'Urząd Miasta Szczecina',
    type: 'city_office',
    address: 'ul. Wały Chrobrego 6',
    zipCode: '70-013',
    phone: ['+48 91 4334801'],
    email: 'urzad@szczecin.eu',
    website: 'https://www.szczecin.eu',
    hours: defaultHours,
    coordinates: { lat: 53.4316, lng: 14.5528 },
  },

  // BYDGOSZCZ
  {
    id: 'bydgoszcz-um',
    city: 'Bydgoszcz',
    name: 'Urząd Miasta Bydgoszczy',
    type: 'city_office',
    address: 'ul. Śniadeckich 1',
    zipCode: '85-030',
    phone: ['+48 52 3862200'],
    email: 'info@um.bydgoszcz.pl',
    website: 'https://www.bydgoszcz.pl',
    hours: defaultHours,
    coordinates: { lat: 53.1237, lng: 18.0044 },
  },

  // LUBLIN
  {
    id: 'lublin-um',
    city: 'Lublin',
    name: 'Urząd Miasta Lublina',
    type: 'city_office',
    address: 'pl. Litewski 1',
    zipCode: '20-070',
    phone: ['+48 81 4301700'],
    email: 'info@um.lublin.eu',
    website: 'https://www.lublin.eu',
    hours: defaultHours,
    coordinates: { lat: 51.2461, lng: 22.5684 },
  },

  // TORUŃ
  {
    id: 'torun-um',
    city: 'Toruń',
    name: 'Urząd Miasta Torunia',
    type: 'city_office',
    address: 'Rynek Staromiejski 1',
    zipCode: '87-100',
    phone: ['+48 56 6226212'],
    email: 'info@um.torun.pl',
    website: 'https://www.um.torun.pl',
    hours: defaultHours,
    coordinates: { lat: 53.0149, lng: 18.5949 },
  },
  {
    id: 'torun-porady',
    city: 'Toruń',
    name: 'Biuro Porad Dla Przedsiębiorców - Toruń',
    type: 'labor_office',
    address: 'ul. Kopernika 23',
    zipCode: '87-100',
    phone: ['+48 56 6221313'],
    website: 'https://www.um.torun.pl',
    hours: [
      { day: 'poniedziałek', hours: '09:00 - 15:00' },
      { day: 'wtorek', hours: '09:00 - 15:00' },
      { day: 'środa', hours: '09:00 - 15:00' },
      { day: 'czwartek', hours: '09:00 - 15:00' },
      { day: 'piątek', hours: '09:00 - 13:00' },
      { day: 'sobota', hours: 'nieczynne' },
      { day: 'niedziela', hours: 'nieczynne' },
    ],
    coordinates: { lat: 53.0124, lng: 18.5934 },
    description: 'Bezpłatne porady prawne dla przedsiębiorców w wielu punktach na terenie miasta',
  },

  // KATOWICE
  {
    id: 'katowice-um',
    city: 'Katowice',
    name: 'Urząd Miasta Katowic',
    type: 'city_office',
    address: 'ul. Stawowa 1',
    zipCode: '40-001',
    phone: ['+48 32 3590000'],
    email: 'info@um.katowice.pl',
    website: 'https://www.katowice.pl',
    hours: defaultHours,
    coordinates: { lat: 50.2558, lng: 19.0227 },
  },

  // BIAŁYSTOK
  {
    id: 'bialystok-um',
    city: 'Białystok',
    name: 'Urząd Miasta Białegostoku',
    type: 'city_office',
    address: 'ul. Lipowa 6',
    zipCode: '15-418',
    phone: ['+48 85 7451111'],
    email: 'info@bialystok.pl',
    website: 'https://www.bialystok.pl',
    hours: defaultHours,
    coordinates: { lat: 53.1288, lng: 23.1895 },
  },

  // RZESZÓW
  {
    id: 'rzeszow-um',
    city: 'Rzeszów',
    name: 'Urząd Miasta Rzeszowa',
    type: 'city_office',
    address: 'ul. Łąkowa 30',
    zipCode: '35-959',
    phone: ['+48 17 8606000'],
    email: 'info@um.rzeszow.pl',
    website: 'https://www.rzeszow.pl',
    hours: defaultHours,
    coordinates: { lat: 50.0413, lng: 21.9994 },
  },

  // GDYNIA
  {
    id: 'gdynia-um',
    city: 'Gdynia',
    name: 'Urząd Miasta Gdyni',
    type: 'city_office',
    address: '10-Lutego 54',
    zipCode: '81-368',
    phone: ['+48 58 7324700'],
    email: 'urzad@gdynia.pl',
    website: 'https://www.gdynia.pl',
    hours: defaultHours,
    coordinates: { lat: 54.4816, lng: 18.5305 },
  },

  // RADOM
  {
    id: 'radom-um',
    city: 'Radom',
    name: 'Urząd Miasta Radomia',
    type: 'city_office',
    address: 'ul. Żeromskiego 1',
    zipCode: '26-610',
    phone: ['+48 48 3608900'],
    email: 'info@um.radom.pl',
    website: 'https://www.um.radom.pl',
    hours: defaultHours,
    coordinates: { lat: 51.4028, lng: 21.1472 },
  },

  // OLSZTYN
  {
    id: 'olsztyn-um',
    city: 'Olsztyn',
    name: 'Urząd Miasta Olsztyna',
    type: 'city_office',
    address: 'Al. Niepodległości 1',
    zipCode: '10-957',
    phone: ['+48 89 5353620'],
    email: 'info@um.olsztyn.pl',
    website: 'https://www.olsztyn.pl',
    hours: defaultHours,
    coordinates: { lat: 53.7796, lng: 20.4744 },
  },

  // KIELCE
  {
    id: 'kielce-um',
    city: 'Kielce',
    name: 'Urząd Miasta Kielc',
    type: 'city_office',
    address: 'ul. Żeglarska 3',
    zipCode: '25-375',
    phone: ['+48 41 3424600'],
    email: 'info@um.kielce.pl',
    website: 'https://www.um.kielce.pl',
    hours: defaultHours,
    coordinates: { lat: 50.8745, lng: 21.1287 },
  },

  // GLIWICE
  {
    id: 'gliwice-um',
    city: 'Gliwice',
    name: 'Urząd Miasta Gliwic',
    type: 'city_office',
    address: 'ul. Zwycięstwa 21',
    zipCode: '44-100',
    phone: ['+48 32 2389250'],
    email: 'info@um.gliwice.pl',
    website: 'https://www.gliwice.pl',
    hours: defaultHours,
    coordinates: { lat: 50.2946, lng: 18.6750 },
  },

  // ZABRZE
  {
    id: 'zabrze-um',
    city: 'Zabrze',
    name: 'Urząd Miasta Zabrza',
    type: 'city_office',
    address: 'ul. Krakowska 20',
    zipCode: '41-800',
    phone: ['+48 32 2716100'],
    email: 'info@um.zabrze.pl',
    website: 'https://www.zabrze.pl',
    hours: defaultHours,
    coordinates: { lat: 50.3156, lng: 18.7839 },
  },

  // SOSNOWIEC
  {
    id: 'sosnowiec-um',
    city: 'Sosnowiec',
    name: 'Urząd Miasta Sosnowca',
    type: 'city_office',
    address: 'ul. Modrzejowska 3',
    zipCode: '41-200',
    phone: ['+48 32 2958200'],
    email: 'info@um.sosnowiec.pl',
    website: 'https://www.um.sosnowiec.pl',
    hours: defaultHours,
    coordinates: { lat: 50.2837, lng: 19.1049 },
  },
]

export function getOfficesByCity(cityName: string): Office[] {
  return officesData.filter((office) => office.city === cityName)
}

export function getOfficesByType(type: OfficeType): Office[] {
  return officesData.filter((office) => office.type === type)
}

export function getOfficesByCityAndType(cityName: string, type: OfficeType): Office[] {
  return officesData.filter((office) => office.city === cityName && office.type === type)
}
