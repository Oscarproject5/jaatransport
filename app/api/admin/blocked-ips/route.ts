import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'blocked-ips.json')

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
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    return NextResponse.json(JSON.parse(data))
  } catch (error) {
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

    const fileContent = await fs.readFile(DATA_FILE, 'utf-8')
    const data = JSON.parse(fileContent)

    if (action === 'add-ip' && ip) {
      // Check if IP already exists
      const exists = data.blockedIps.some((item: any) => item.ip === ip)
      if (!exists) {
        data.blockedIps.push({
          ip,
          reason: reason || 'Spam',
          dateAdded: new Date().toISOString()
        })
      }
    } else if (action === 'remove-ip' && ip) {
      data.blockedIps = data.blockedIps.filter((item: any) => item.ip !== ip)
    } else if (action === 'add-range' && range) {
      // Check if range already exists
      const exists = data.blockedRanges.some((item: any) => item.range === range)
      if (!exists) {
        data.blockedRanges.push({
          range,
          reason: reason || 'Spam',
          dateAdded: new Date().toISOString()
        })
      }
    } else if (action === 'remove-range' && range) {
      data.blockedRanges = data.blockedRanges.filter((item: any) => item.range !== range)
    }

    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2))
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

    const fileContent = await fs.readFile(DATA_FILE, 'utf-8')
    const data = JSON.parse(fileContent)

    // Check exact IP match
    const isBlocked = data.blockedIps.some((item: any) => item.ip === ip)
    if (isBlocked) {
      return NextResponse.json({ blocked: true })
    }

    // Check IP range match
    const isRangeBlocked = data.blockedRanges.some((item: any) => ip.startsWith(item.range))
    return NextResponse.json({ blocked: isRangeBlocked })
  } catch (error) {
    return NextResponse.json({ blocked: false })
  }
}
