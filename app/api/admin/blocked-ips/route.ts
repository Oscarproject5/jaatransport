import { NextResponse } from 'next/server'
import { getBlockedIps, saveBlockedIps, isIpBlocked } from '@/lib/db'

// Admin password (in production, use environment variable)
const ADMIN_PASSWORD = '31060'

function verifyAuth(request: Request): boolean {
  const authHeader = request.headers.get('authorization')
  if (!authHeader) return false

  // Expecting "Bearer password"
  const password = authHeader.replace('Bearer ', '')
  return password === ADMIN_PASSWORD
}

export async function GET(request: Request) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await getBlockedIps()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error getting blocked IPs:', error)
    return NextResponse.json({ blockedIps: [], blockedRanges: [] })
  }
}

export async function POST(request: Request) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const body = await request.json()
    const { action, ip, range, reason } = body

    const data = await getBlockedIps()

    if (action === 'add-ip' && ip) {
      // Check if IP already exists
      const exists = data.blockedIps.some((item) => item.ip === ip)
      if (!exists) {
        data.blockedIps.push({
          ip,
          reason: reason || 'Spam',
          dateAdded: new Date().toISOString()
        })
      }
    } else if (action === 'remove-ip' && ip) {
      data.blockedIps = data.blockedIps.filter((item) => item.ip !== ip)
    } else if (action === 'add-range' && range) {
      // Check if range already exists
      const exists = data.blockedRanges.some((item) => item.range === range)
      if (!exists) {
        data.blockedRanges.push({
          range,
          reason: reason || 'Spam',
          dateAdded: new Date().toISOString()
        })
      }
    } else if (action === 'remove-range' && range) {
      data.blockedRanges = data.blockedRanges.filter((item) => item.range !== range)
    }

    await saveBlockedIps(data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Error managing blocked IPs:', error)
    return NextResponse.json({ error: 'Failed to manage blocked IPs' }, { status: 500 })
  }
}

// Check if an IP is blocked (used by form)
export async function PUT(request: Request) {
  try {
    const body = await request.json()
    const { ip } = body

    const blocked = await isIpBlocked(ip)
    return NextResponse.json({ blocked })
  } catch (error) {
    console.error('Error checking IP:', error)
    return NextResponse.json({ blocked: false })
  }
}
