// Tax Calculator 2025 - Obliczanie podatków dla różnych form opodatkowania

export interface TaxCalculationResult {
  income: number
  taxForm: 'pit37' | 'pit36' | 'linear' | 'scale'
  taxAmount: number
  healthInsurance: number
  zusContribution: number
  netIncome: number
  effectiveTaxRate: number
}

export interface TaxRates2025 {
  pit37Brackets: Array<{ limit: number; rate: number }>
  linearRate: number
  scaleRates: Array<{ limit: number; rate: number }>
  healthInsuranceRate: number
  zusContributions: {
    pension: number
    disability: number
    illness: number
    accidentFund: number
  }
}

const TAX_RATES_2025: TaxRates2025 = {
  pit37Brackets: [
    { limit: 120000, rate: 0.12 },
    { limit: Infinity, rate: 0.32 }
  ],
  linearRate: 0.19,
  scaleRates: [
    { limit: 30000, rate: 0.17 },
    { limit: 120000, rate: 0.32 },
    { limit: Infinity, rate: 0.39 }
  ],
  healthInsuranceRate: 0.09,
  zusContributions: {
    pension: 0.1952,
    disability: 0.08,
    illness: 0.0245,
    accidentFund: 0.0167
  }
}

export function calculatePIT37(grossIncome: number): TaxCalculationResult {
  let tax = 0
  let remaining = grossIncome

  for (const bracket of TAX_RATES_2025.pit37Brackets) {
    if (remaining <= 0) break
    const bracketed = Math.min(remaining, bracket.limit)
    tax += bracketed * bracket.rate
    remaining -= bracketed
  }

  const healthInsurance = grossIncome * TAX_RATES_2025.healthInsuranceRate
  const zusTotal = Object.values(TAX_RATES_2025.zusContributions).reduce((a, b) => a + b, 0)
  const zusAmount = grossIncome * zusTotal

  return {
    income: grossIncome,
    taxForm: 'pit37',
    taxAmount: tax,
    healthInsurance,
    zusContribution: zusAmount,
    netIncome: grossIncome - tax - healthInsurance - zusAmount,
    effectiveTaxRate: tax / grossIncome
  }
}

export function calculateLinearTax(grossIncome: number): TaxCalculationResult {
  const tax = grossIncome * TAX_RATES_2025.linearRate
  const healthInsurance = grossIncome * TAX_RATES_2025.healthInsuranceRate
  const zusTotal = Object.values(TAX_RATES_2025.zusContributions).reduce((a, b) => a + b, 0)
  const zusAmount = grossIncome * zusTotal

  return {
    income: grossIncome,
    taxForm: 'linear',
    taxAmount: tax,
    healthInsurance,
    zusContribution: zusAmount,
    netIncome: grossIncome - tax - healthInsurance - zusAmount,
    effectiveTaxRate: tax / grossIncome
  }
}

export function calculateScaleTax(grossIncome: number): TaxCalculationResult {
  let tax = 0
  let remaining = grossIncome

  for (const bracket of TAX_RATES_2025.scaleRates) {
    if (remaining <= 0) break
    const bracketed = Math.min(remaining, bracket.limit)
    tax += bracketed * bracket.rate
    remaining -= bracketed
  }

  const healthInsurance = grossIncome * TAX_RATES_2025.healthInsuranceRate
  const zusTotal = Object.values(TAX_RATES_2025.zusContributions).reduce((a, b) => a + b, 0)
  const zusAmount = grossIncome * zusTotal

  return {
    income: grossIncome,
    taxForm: 'scale',
    taxAmount: tax,
    healthInsurance,
    zusContribution: zusAmount,
    netIncome: grossIncome - tax - healthInsurance - zusAmount,
    effectiveTaxRate: tax / grossIncome
  }
}

export function compareAllTaxForms(grossIncome: number) {
  return {
    pit37: calculatePIT37(grossIncome),
    linear: calculateLinearTax(grossIncome),
    scale: calculateScaleTax(grossIncome)
  }
}

export function calculateScaledZUS(grossIncome: number, scale: number = 1) {
  const zusTotal = Object.values(TAX_RATES_2025.zusContributions).reduce((a, b) => a + b, 0)
  return grossIncome * zusTotal * scale
}
