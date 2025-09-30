import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({})) as any
    const token: string | undefined = body?.token || body?.response
    const remoteip: string | undefined = body?.remoteip

    const secret =
      process.env.RECAPTCHA_SECRET_KEY ||
      process.env.RECAPTCHA_SECRET ||
      process.env.NEXT_RECAPTCHA_SECRET ||
      process.env.RECAPTCHA_SECRETKEY

  // Bypass en desarrollo si no hay secreto o token
  if (process.env.NODE_ENV !== 'production' && (!secret || !token)) {
    return NextResponse.json({ success: true, bypass: true, reason: 'dev-bypass-no-secret-or-token' })
  }

  if (!secret) {
      return NextResponse.json(
        { success: false, error: 'Falta la variable de entorno del secreto de reCAPTCHA' },
        { status: 500 }
      )
    }

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Token de reCAPTCHA faltante' },
        { status: 400 }
      )
    }

    const params = new URLSearchParams()
    params.append('secret', secret)
    params.append('response', token)
    if (remoteip) params.append('remoteip', remoteip)

    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString(),
      cache: 'no-store'
    })

    const data = await verifyRes.json()
    const success = Boolean((data as any).success)
    const score = typeof (data as any).score === 'number' ? (data as any).score : undefined
    const action = (data as any).action

    return NextResponse.json({
      success,
      score,
      action,
      hostname: (data as any).hostname,
      challenge_ts: (data as any).challenge_ts,
      'error-codes': (data as any)['error-codes'] ?? undefined
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error interno al validar reCAPTCHA' },
      { status: 500 }
    )
  }
}


