import { NextResponse } from 'next/server'
import { getSubmissions, addSubmission } from '@/lib/db'

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
    const submissions = await getSubmissions()

    // Return last 50 submissions, sorted by most recent first
    const recentSubmissions = submissions.slice(-50).reverse()

    return NextResponse.json({ submissions: recentSubmissions })
  } catch (error) {
    console.error('Error getting submissions:', error)
    return NextResponse.json({ submissions: [] })
  }
}

// POST - Log a new submission
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, ip, pickupCity, deliveryCity, loadType } = body

    await addSubmission({
      name,
      phone,
      email: email || 'Not provided',
      ip,
      pickupCity,
      deliveryCity,
      loadType,
      timestamp: new Date().toISOString()
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error logging submission:', error)
    return NextResponse.json({ error: 'Failed to log submission' }, { status: 500 })
  }
}
