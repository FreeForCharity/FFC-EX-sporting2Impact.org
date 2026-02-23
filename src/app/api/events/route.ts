import { NextResponse } from 'next/server'

export async function GET() {
  const pageId = process.env.FACEBOOK_PAGE_ID
  const pageToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN
  const appId = process.env.FACEBOOK_APP_ID
  const appSecret = process.env.FACEBOOK_APP_SECRET

  if (!pageId) {
    return NextResponse.json({ error: 'Missing FACEBOOK_PAGE_ID' }, { status: 400 })
  }

  // Prefer an explicit page access token; fall back to app token if provided
  const accessToken = pageToken || (appId && appSecret ? `${appId}|${appSecret}` : undefined)
  if (!accessToken) {
    return NextResponse.json(
      {
        error:
          'Missing Facebook access token. Set FACEBOOK_PAGE_ACCESS_TOKEN or FACEBOOK_APP_ID and FACEBOOK_APP_SECRET',
      },
      { status: 400 }
    )
  }

  const fields = ['id', 'name', 'start_time', 'place', 'cover', 'description']
  const url = `https://graph.facebook.com/v17.0/${encodeURIComponent(pageId)}/events?fields=${encodeURIComponent(fields.join(','))}&access_token=${encodeURIComponent(accessToken)}`

  try {
    const res = await fetch(url)
    if (!res.ok) {
      const errText = await res.text()
      return NextResponse.json(
        { error: 'Facebook API error', details: errText },
        { status: res.status }
      )
    }
    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ error: 'Fetch failed', details: String(err) }, { status: 500 })
  }
}
