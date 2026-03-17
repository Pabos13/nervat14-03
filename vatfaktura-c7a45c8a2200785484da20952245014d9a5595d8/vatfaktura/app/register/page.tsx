'use client'

import { Suspense } from 'react'
import RegisterForm from '@/components/register-form'

export const dynamic = 'force-dynamic'

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />}>
      <RegisterForm />
    </Suspense>
  )
}
