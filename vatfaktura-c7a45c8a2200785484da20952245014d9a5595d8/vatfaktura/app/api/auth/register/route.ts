import { NextRequest, NextResponse } from 'next/server'
import { registerUser } from '@/lib/users-store'

export async function POST(request: NextRequest) {
  try {
    const { email, password, accountType, company, nip, firstName, lastName, pesel, plan } = await request.json()

    if (!email || !password || !accountType) {
      return NextResponse.json(
        { error: 'Email, hasło i typ konta są wymagane' },
        { status: 400 }
      )
    }

    if (accountType === 'business' && (!company || !nip)) {
      return NextResponse.json(
        { error: 'Dla konta firmowego wymagane są NIP i nazwa firmy' },
        { status: 400 }
      )
    }

    if (accountType === 'private' && (!firstName || !lastName)) {
      return NextResponse.json(
        { error: 'Dla konta osoby prywatnej wymagane są imię i nazwisko' },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Hasło musi mieć co najmniej 6 znaków' },
        { status: 400 }
      )
    }

    const user = registerUser(email, password, {
      accountType,
      company,
      nip,
      firstName,
      lastName,
      pesel,
      plan: (plan === 'premium' ? 'premium' : 'basic') as 'basic' | 'premium',
    })

    const token = Buffer.from(JSON.stringify({ userId: user.userId, email })).toString('base64')

    return NextResponse.json(
      {
        message: 'Rejestracja udana',
        token,
        userId: user.userId,
        email,
        company: user.company,
        nip: user.nip,
        accountType: user.accountType,
        firstName: user.firstName,
        lastName: user.lastName,
        subscription: user.subscription,
      },
      { status: 201 }
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Błąd serwera'
    return NextResponse.json(
      { error: message },
      { status: error instanceof Error && message.includes('już zarejestrowany') ? 400 : 500 }
    )
  }
}
