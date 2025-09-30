import { NextResponse } from 'next/server'

// Node.js runtime (required for handling files comfortably)
export const runtime = 'nodejs'

async function verifyRecaptcha(token: string | null | undefined, req?: Request) {
  const secret =
    process.env.RECAPTCHA_SECRET_KEY ||
    process.env.RECAPTCHA_SECRET ||
    process.env.NEXT_RECAPTCHA_SECRET ||
    process.env.RECAPTCHA_SECRETKEY

  // Permitir bypass en local (host localhost/127.0.0.1) o en desarrollo si no hay secreto o token
  const hostHeader = req?.headers.get('x-forwarded-host') || req?.headers.get('host') || ''
  const isLocalHost = /localhost|127\.0\.0\.1|\[::1\]/i.test(hostHeader)
  if ((process.env.NODE_ENV !== 'production' || isLocalHost) && (!secret || !token)) {
    return { ok: true, raw: { bypass: true, reason: 'dev-bypass-no-secret-or-token' } }
  }
  if (!secret) {
    return { ok: false, reason: 'Falta RECAPTCHA_SECRET_KEY' }
  }
  if (!token) {
    return { ok: false, reason: 'Token reCAPTCHA faltante' }
  }

  const params = new URLSearchParams()
  params.append('secret', secret)
  params.append('response', token)

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
    cache: 'no-store'
  })

  const data = await res.json().catch(() => ({} as any))
  const errorCodes = (data as any)["error-codes"] as string[] | undefined
  return { ok: Boolean((data as any).success), raw: data, errorCodes }
}

export async function POST(req: Request) {
  try {
    const form = await req.formData()

    const name = String(form.get('name') ?? '')
    const documentType = String(form.get('documentType') ?? '')
    const document = String(form.get('document') ?? '')
    const phone = String(form.get('phone') ?? '')
    const email = String(form.get('email') ?? '')
    const plateOrTicket = String(form.get('plateOrTicket') ?? '')
    const date = String(form.get('date') ?? '')
    const place = String(form.get('place') ?? '')
    const description = String(form.get('description') ?? '')
    const recaptchaToken = String(form.get('recaptchaToken') ?? '')

    // Archivos (pueden venir con la clave 'files')
    const files: Array<{ filename: string; contentType: string; base64: string }> = []
    for (const [key, value] of form.entries()) {
      if (key === 'files' && value instanceof File) {
        const file = value
        const ab = await file.arrayBuffer()
        const base64 = Buffer.from(ab).toString('base64')
        files.push({ filename: file.name, contentType: file.type || 'application/octet-stream', base64 })
      }
    }

    // Validar reCAPTCHA
    const recaptcha = await verifyRecaptcha(recaptchaToken, req)
    if (!recaptcha.ok) {
      return NextResponse.json(
        { success: false, error: 'Validación reCAPTCHA fallida', details: recaptcha.raw, errorCodes: recaptcha.errorCodes },
        { status: 400 }
      )
    }

    const flowUrl = process.env.PQR_FLOW_URL
    if (!flowUrl) {
      return NextResponse.json({ success: false, error: 'Falta PQR_FLOW_URL en variables de entorno' }, { status: 500 })
    }

    // Cuerpo esperado por Power Automate (ajusta nombres si tu Flow requiere otro esquema)
    const payload = {
      name,
      documentType,
      document,
      phone,
      email,
      plateOrTicket,
      date,
      place,
      description,
      attachments: files,
    }

    const flowRes = await fetch(flowUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })

    const flowJson = await flowRes.json().catch(() => ({}))
    if (!flowRes.ok) {
      return NextResponse.json(
        { success: false, error: 'Error desde Power Automate', details: flowJson },
        { status: 502 }
      )
    }

    // Intentar detectar el consecutivo en distintas propiedades comunes
    const consecutivo = (flowJson?.consecutivo ?? flowJson?.Consecutivo ?? flowJson?.id ?? flowJson?.ticket ?? null) as string | null

    return NextResponse.json({ success: true, consecutivo, response: flowJson })
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Error interno procesando PQR' }, { status: 500 })
  }
}


