// Salary Calculator - Obliczanie wynagrodzeń pracowników

export interface SalaryCalculation {
  grossSalary: number
  pit: number
  healthInsurance: number
  pensionContribution: number
  disabilityInsurance: number
  illnessInsurance: number
  netSalary: number
  employerCosts: number
}

export interface EmployerContributions {
  pensionFund: number
  disabilityFund: number
  laborFund: number
  healthFundBase: number
  healthFundRegistration: number
}

const SALARY_THRESHOLDS_2025 = {
  exemptionAmount: 3600,
  firstBracketLimit: 120000,
  firstBracketRate: 0.12,
  secondBracketRate: 0.32
}

export function calculateEmployeeSalary(grossSalary: number): SalaryCalculation {
  // PIT calculation
  let pit = 0
  if (grossSalary > SALARY_THRESHOLDS_2025.exemptionAmount) {
    const taxableIncome = grossSalary - SALARY_THRESHOLDS_2025.exemptionAmount
    
    if (taxableIncome <= SALARY_THRESHOLDS_2025.firstBracketLimit) {
      pit = taxableIncome * SALARY_THRESHOLDS_2025.firstBracketRate
    } else {
      const firstBracket = SALARY_THRESHOLDS_2025.firstBracketLimit * SALARY_THRESHOLDS_2025.firstBracketRate
      const secondBracket = (taxableIncome - SALARY_THRESHOLDS_2025.firstBracketLimit) * SALARY_THRESHOLDS_2025.secondBracketRate
      pit = firstBracket + secondBracket
    }
  }

  // Health Insurance (Employee pays 9%)
  const healthInsurance = grossSalary * 0.09

  // Pension/ZUS contributions (Employee side - 13.71% total, but reduced by health insurance)
  const pensionContribution = grossSalary * 0.0976
  const disabilityInsurance = grossSalary * 0.015
  const illnessInsurance = grossSalary * 0.0245

  const netSalary = grossSalary - pit - healthInsurance - pensionContribution - disabilityInsurance - illnessInsurance

  // Employer contributions
  const employerContributions: EmployerContributions = {
    pensionFund: grossSalary * 0.1976,
    disabilityFund: grossSalary * 0.065,
    laborFund: grossSalary * 0.015,
    healthFundBase: grossSalary * 0.09,
    healthFundRegistration: grossSalary * 0.001975
  }

  const employerCosts = Object.values(employerContributions).reduce((a, b) => a + b, 0)

  return {
    grossSalary,
    pit,
    healthInsurance,
    pensionContribution,
    disabilityInsurance,
    illnessInsurance,
    netSalary,
    employerCosts
  }
}

export function calculateFromNetSalary(netSalary: number): SalaryCalculation {
  // Reverse calculation - estimate gross salary from net
  // Starting approximation
  let gross = netSalary / 0.77 // rough estimate
  
  // Iterate to find accurate gross salary
  for (let i = 0; i < 5; i++) {
    const calc = calculateEmployeeSalary(gross)
    if (Math.abs(calc.netSalary - netSalary) < 1) {
      return calc
    }
    gross = gross * (netSalary / calc.netSalary)
  }

  return calculateEmployeeSalary(gross)
}

export function calculateTotalCost(grossSalary: number): {
  grossSalary: number
  employeeSide: number
  employerSide: number
  totalCost: number
  totalTax: number
} {
  const salary = calculateEmployeeSalary(grossSalary)
  
  const employeeSideTaxes = salary.pit + salary.healthInsurance + salary.pensionContribution + salary.disabilityInsurance + salary.illnessInsurance
  const totalTax = employeeSideTaxes + salary.employerCosts
  const totalCost = grossSalary + salary.employerCosts

  return {
    grossSalary,
    employeeSide: employeeSideTaxes,
    employerSide: salary.employerCosts,
    totalCost,
    totalTax
  }
}

export function calculateBonusAndSalaryExtra(
  baseSalary: number,
  bonusAmount: number,
  extraHours: number = 0,
  hourlyRate: number = 0
): SalaryCalculation {
  const extra = extraHours * hourlyRate
  const totalGross = baseSalary + bonusAmount + extra
  
  return calculateEmployeeSalary(totalGross)
}

export interface SalaryComparison {
  salary: number
  net: number
  employerCost: number
  netPercentage: number
  costToEmployer: number
}

export function compareSalaries(salaries: number[]): SalaryComparison[] {
  return salaries.map(salary => {
    const calc = calculateTotalCost(salary)
    return {
      salary,
      net: calculateEmployeeSalary(salary).netSalary,
      employerCost: calc.totalCost,
      netPercentage: (calculateEmployeeSalary(salary).netSalary / salary) * 100,
      costToEmployer: (calc.totalCost / salary) * 100
    }
  })
}
