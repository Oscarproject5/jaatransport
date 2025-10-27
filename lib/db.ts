import { Redis } from '@upstash/redis'
import fs from 'fs/promises'
import path from 'path'

// Initialize Upstash Redis client (only if environment variables are set)
const redis = process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL,
      token: process.env.UPSTASH_REDIS_REST_TOKEN,
    })
  : null

// Check if we're using Redis storage
const isRedis = !!redis

// File paths for local development fallback
const BLOCKED_IPS_FILE = path.join(process.cwd(), 'data', 'blocked-ips.json')
const SUBMISSIONS_FILE = path.join(process.cwd(), 'data', 'recent-submissions.json')

interface BlockedIP {
  ip: string
  reason: string
  dateAdded: string
}

interface BlockedRange {
  range: string
  reason: string
  dateAdded: string
}

interface BlockedData {
  blockedIps: BlockedIP[]
  blockedRanges: BlockedRange[]
}

interface Submission {
  name: string
  phone: string
  email: string
  ip: string
  pickupCity: string
  deliveryCity: string
  loadType: string
  timestamp: string
}

interface SubmissionsData {
  submissions: Submission[]
}

// ==================== BLOCKED IPS ====================

export async function getBlockedIps(): Promise<BlockedData> {
  if (isRedis) {
    try {
      const data = await redis!.get<BlockedData>('blocked-ips')
      return data || { blockedIps: [], blockedRanges: [] }
    } catch (error) {
      console.error('Redis get error:', error)
      return { blockedIps: [], blockedRanges: [] }
    }
  } else {
    // Local file fallback
    try {
      const fileContent = await fs.readFile(BLOCKED_IPS_FILE, 'utf-8')
      return JSON.parse(fileContent)
    } catch (error) {
      return { blockedIps: [], blockedRanges: [] }
    }
  }
}

export async function saveBlockedIps(data: BlockedData): Promise<void> {
  if (isRedis) {
    try {
      await redis!.set('blocked-ips', data)
    } catch (error) {
      console.error('Redis set error:', error)
      throw error
    }
  } else {
    // Local file fallback
    await fs.writeFile(BLOCKED_IPS_FILE, JSON.stringify(data, null, 2))
  }
}

export async function isIpBlocked(ip: string): Promise<boolean> {
  const data = await getBlockedIps()

  // Check exact IP match
  const isBlocked = data.blockedIps.some((item) => item.ip === ip)
  if (isBlocked) return true

  // Check IP range match
  const isRangeBlocked = data.blockedRanges.some((item) => ip.startsWith(item.range))
  return isRangeBlocked
}

// ==================== SUBMISSIONS ====================

export async function getSubmissions(): Promise<Submission[]> {
  if (isRedis) {
    try {
      const data = await redis!.get<SubmissionsData>('submissions')
      return data?.submissions || []
    } catch (error) {
      console.error('Redis get submissions error:', error)
      return []
    }
  } else {
    // Local file fallback
    try {
      const fileContent = await fs.readFile(SUBMISSIONS_FILE, 'utf-8')
      const data: SubmissionsData = JSON.parse(fileContent)
      return data.submissions || []
    } catch (error) {
      return []
    }
  }
}

export async function addSubmission(submission: Submission): Promise<void> {
  const submissions = await getSubmissions()
  submissions.push(submission)

  // Keep only last 100 submissions
  const trimmedSubmissions = submissions.slice(-100)

  if (isRedis) {
    try {
      await redis!.set('submissions', { submissions: trimmedSubmissions })
    } catch (error) {
      console.error('Redis set submissions error:', error)
      throw error
    }
  } else {
    // Local file fallback
    await fs.writeFile(
      SUBMISSIONS_FILE,
      JSON.stringify({ submissions: trimmedSubmissions }, null, 2)
    )
  }
}
