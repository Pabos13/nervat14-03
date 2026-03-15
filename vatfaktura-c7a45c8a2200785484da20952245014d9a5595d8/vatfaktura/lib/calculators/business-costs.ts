// Business Cost Calculator - Obliczanie kosztów prowadzenia biznesu

export interface BusinessCosts {
  revenue: number
  kupPercentage: number
  fixedCosts: number
  variableCosts: number
  totalCosts: number
  profit: number
  profitMargin: number
  roiPercentage: number
}

export interface IndustryKUP {
  industry: string
  kupPercentage: number
  description: string
}

export const INDUSTRY_KUP_RATES: IndustryKUP[] = [
  { industry: 'IT / Usługi', kupPercentage: 30, description: 'Programiści, konsultanci, usługi IT' },
  { industry: 'Edukacja', kupPercentage: 30, description: 'Kursy, szkolenia, tutoring' },
  { industry: 'Projektowanie', kupPercentage: 30, description: 'Grafika, design, UI/UX' },
  { industry: 'Doradztwo', kupPercentage: 50, description: 'Doradcy, coachowie, mentorzy' },
  { industry: 'Transport', kupPercentage: 80, description: 'Taxi, przewóz ładunków' },
  { industry: 'Hurtownia', kupPercentage: 80, description: 'Obrót towarami' },
  { industry: 'Usługi osobiste', kupPercentage: 50, description: 'Fryzjer, kosmetyka, masaż' },
  { industry: 'Sprzedaż detaliczna', kupPercentage: 70, description: 'Sklepy, e-commerce' },
  { industry: 'Gastronomia', kupPercentage: 60, description: 'Restauracje, kawiarnie' },
  { industry: 'Budowlanka', kupPercentage: 80, description: 'Roboty budowlane' },
]

export function calculateBusinessCosts(
  revenue: number,
  kupPercentage: number,
  fixedCosts: number,
  variableCosts: number
): BusinessCosts {
  const kupCost = revenue * (kupPercentage / 100)
  const totalCosts = kupCost + fixedCosts + variableCosts
  const profit = revenue - totalCosts
  const profitMargin = revenue > 0 ? (profit / revenue) * 100 : 0
  const roiPercentage = totalCosts > 0 ? (profit / totalCosts) * 100 : 0

  return {
    revenue,
    kupPercentage,
    fixedCosts,
    variableCosts,
    totalCosts,
    profit,
    profitMargin,
    roiPercentage
  }
}

export interface FixedCostTemplate {
  category: string
  items: Array<{ name: string; monthlyEstimate: number }>
}

export const FIXED_COST_TEMPLATES: FixedCostTemplate[] = [
  {
    category: 'Biuro/Lokal',
    items: [
      { name: 'Czynsz/wynajęcie', monthlyEstimate: 2000 },
      { name: 'Media (prąd, woda, gaz)', monthlyEstimate: 300 },
      { name: 'Internet/Telefon', monthlyEstimate: 100 }
    ]
  },
  {
    category: 'Ubezpieczenia',
    items: [
      { name: 'Ubezpieczenie firmy OC', monthlyEstimate: 200 },
      { name: 'Ubezpieczenie mienia', monthlyEstimate: 150 },
      { name: 'Ubezpieczenie pracowników', monthlyEstimate: 300 }
    ]
  },
  {
    category: 'Personel',
    items: [
      { name: 'Pensje pracowników', monthlyEstimate: 5000 },
      { name: 'Dodatki socjalne', monthlyEstimate: 500 }
    ]
  },
  {
    category: 'Marketing',
    items: [
      { name: 'Reklama online', monthlyEstimate: 500 },
      { name: 'Druki i materiały', monthlyEstimate: 200 }
    ]
  }
]

export function calculateMonthlyViabilityIndex(
  monthlyRevenue: number,
  monthlyFixedCosts: number,
  kupPercentage: number
): { viability: number; breakEvenRevenue: number; recommendation: string } {
  const kupRate = kupPercentage / 100
  const breakEvenRevenue = monthlyFixedCosts / (1 - kupRate)
  const viability = monthlyRevenue > 0 ? (monthlyRevenue / breakEvenRevenue) * 100 : 0

  let recommendation = ''
  if (viability < 100) {
    recommendation = 'Przychody poniżej progu rentowności. Rozważ redukcję kosztów lub wzrost przychodów.'
  } else if (viability < 150) {
    recommendation = 'Marża bezpieczeństwa niska. Monitoruj koszty.'
  } else if (viability < 200) {
    recommendation = 'Biznes rentowny. Potencjał wzrostu.'
  } else {
    recommendation = 'Silna pozycja finansowa. Możliwe inwestycje w rozwój.'
  }

  return { viability, breakEvenRevenue, recommendation }
}
