import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const DATA_FILE = path.join(process.cwd(), 'data', 'recent-submissions.json')
const ADMIN_PASSWORD = '31060'

function verifyAuth(request: Request): boolean {
  const authHeader = request.headers.get('authorization')
  if (!authHeader) return false
  const password = authHeader.replace('Bearer ', '')
  return password === ADMIN_PASSWORD
}

// GET - Retrieve recent submissions (admin only)
export async function GET(request: Request) {
  if (!verifyAuth(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8')
    const parsed = JSON.parse(data)

    // Return last 50 submissions, sorted by most recent first
    const submissions = parsed.submissions.slice(-50).reverse()

    return NextResponse.json({ submissions })
  } catch (error) {
    return NextResponse.json({ submissions: [] })
  }
}

// POST - Log a new submission
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, ip, pickupCity, deliveryCity, loadType } = body

    let data: { submissions: any[] } = { submissions: [] }

    try {
      const fileContent = await fs.readFile(DATA_FILE, 'utf-8')
      data = JSON.parse(fileContent)
    } catch (error) {
      // File doesn't exist yet, use empty array
    }

    // Add new submission
    data.submissions.push({
      name,
      phone,
      email: email || 'Not provided',
      ip,
      pickupCity,
      deliveryCity,
      loadType,
      timestamp: new Date().toISOString()
    })

    // Keep only last 100 submissions to prevent file from growing too large
    if (data.submissions.length > 100) {
      data.submissions = data.submissions.slice(-100)
    }

    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2))
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error logging submission:', error)
    return NextResponse.json({ error: 'Failed to log submission' }, { status: 500 })
  }
}
