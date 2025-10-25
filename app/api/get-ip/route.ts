import { NextResponse } from 'next/server'

// Mark this route as dynamic since it uses request headers
export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    // Get IP from various possible headers (in order of preference)
    const forwarded = request.headers.get('x-forwarded-for')
    const realIp = request.headers.get('x-real-ip')
    const cfConnectingIp = request.headers.get('cf-connecting-ip') // Cloudflare

    // x-forwarded-for can contain multiple IPs, take the first one
    const ip = forwarded?.split(',')[0]?.trim() ||
               realIp ||
               cfConnectingIp ||
               'IP not available'

    return NextResponse.json({
      ip,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error getting IP:', error)
    return NextResponse.json(
      { ip: 'Error retrieving IP', timestamp: new Date().toISOString() },
      { status: 500 }
    )
  }
}
