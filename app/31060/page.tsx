'use client'

import { useState, useEffect } from 'react'
import { Shield, Trash2, Plus, RefreshCw, Eye, EyeOff, LogOut } from 'lucide-react'

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

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [authError, setAuthError] = useState('')

  const [blockedIps, setBlockedIps] = useState<BlockedIP[]>([])
  const [blockedRanges, setBlockedRanges] = useState<BlockedRange[]>([])
  const [submissions, setSubmissions] = useState<Submission[]>([])

  const [newIp, setNewIp] = useState('')
  const [newIpReason, setNewIpReason] = useState('')
  const [newRange, setNewRange] = useState('')
  const [newRangeReason, setNewRangeReason] = useState('')

  const [loading, setLoading] = useState(false)
  const [activeTab, setActiveTab] = useState<'blocked' | 'submissions'>('blocked')

  const ADMIN_PASSWORD = '31060'

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setAuthError('')
      fetchData()
    } else {
      setAuthError('Incorrect password')
      setPassword('')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setPassword('')
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      // Fetch blocked IPs
      const ipsResponse = await fetch('/api/admin/blocked-ips', {
        headers: { 'Authorization': `Bearer ${ADMIN_PASSWORD}` }
      })
      const ipsData = await ipsResponse.json()
      setBlockedIps(ipsData.blockedIps || [])
      setBlockedRanges(ipsData.blockedRanges || [])

      // Fetch recent submissions
      const submissionsResponse = await fetch('/api/admin/submissions', {
        headers: { 'Authorization': `Bearer ${ADMIN_PASSWORD}` }
      })
      const submissionsData = await submissionsResponse.json()
      setSubmissions(submissionsData.submissions || [])
    } catch (error) {
      console.error('Error fetching data:', error)
    } finally {
      setLoading(false)
    }
  }

  const addBlockedIp = async () => {
    if (!newIp.trim()) return

    try {
      const response = await fetch('/api/admin/blocked-ips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ADMIN_PASSWORD}`
        },
        body: JSON.stringify({
          action: 'add-ip',
          ip: newIp.trim(),
          reason: newIpReason.trim() || 'Spam'
        })
      })

      if (response.ok) {
        setNewIp('')
        setNewIpReason('')
        fetchData()
      }
    } catch (error) {
      console.error('Error adding IP:', error)
    }
  }

  const removeBlockedIp = async (ip: string) => {
    try {
      const response = await fetch('/api/admin/blocked-ips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ADMIN_PASSWORD}`
        },
        body: JSON.stringify({
          action: 'remove-ip',
          ip
        })
      })

      if (response.ok) {
        fetchData()
      }
    } catch (error) {
      console.error('Error removing IP:', error)
    }
  }

  const addBlockedRange = async () => {
    if (!newRange.trim()) return

    try {
      const response = await fetch('/api/admin/blocked-ips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ADMIN_PASSWORD}`
        },
        body: JSON.stringify({
          action: 'add-range',
          range: newRange.trim(),
          reason: newRangeReason.trim() || 'Spam'
        })
      })

      if (response.ok) {
        setNewRange('')
        setNewRangeReason('')
        fetchData()
      }
    } catch (error) {
      console.error('Error adding range:', error)
    }
  }

  const removeBlockedRange = async (range: string) => {
    try {
      const response = await fetch('/api/admin/blocked-ips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ADMIN_PASSWORD}`
        },
        body: JSON.stringify({
          action: 'remove-range',
          range
        })
      })

      if (response.ok) {
        fetchData()
      }
    } catch (error) {
      console.error('Error removing range:', error)
    }
  }

  const quickBlockIp = async (ip: string) => {
    try {
      const response = await fetch('/api/admin/blocked-ips', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${ADMIN_PASSWORD}`
        },
        body: JSON.stringify({
          action: 'add-ip',
          ip,
          reason: 'Blocked from submissions list'
        })
      })

      if (response.ok) {
        fetchData()
      }
    } catch (error) {
      console.error('Error blocking IP:', error)
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  // Login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
        <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 w-full max-w-md border border-gray-700">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-blue-500 mr-3" />
            <h1 className="text-3xl font-bold text-white">Admin Panel</h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm font-semibold mb-2">
                Enter Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  placeholder="Enter admin password"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {authError && (
                <p className="text-red-400 text-sm mt-2">{authError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Access Admin Panel
            </button>
          </form>

          <p className="text-gray-500 text-xs text-center mt-6">
            Secure admin area - Authorized access only
          </p>
        </div>
      </div>
    )
  }

  // Main admin panel
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gray-800 rounded-2xl shadow-xl p-6 mb-6 border border-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Shield className="w-8 h-8 text-blue-500 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-white">IP Management Dashboard</h1>
                <p className="text-gray-400 text-sm">Manage blocked IPs and view submissions</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={fetchData}
                disabled={loading}
                className="flex items-center space-x-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-all"
              >
                <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-all"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('blocked')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'blocked'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Blocked IPs & Ranges
          </button>
          <button
            onClick={() => setActiveTab('submissions')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeTab === 'submissions'
                ? 'bg-blue-600 text-white shadow-lg'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            Recent Submissions
          </button>
        </div>

        {/* Blocked IPs & Ranges Tab */}
        {activeTab === 'blocked' && (
          <div className="space-y-6">
            {/* Add IP Section */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-4">Block Individual IP</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  value={newIp}
                  onChange={(e) => setNewIp(e.target.value)}
                  placeholder="Enter IP address (e.g., 123.45.67.89)"
                  className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  value={newIpReason}
                  onChange={(e) => setNewIpReason(e.target.value)}
                  placeholder="Reason (optional)"
                  className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={addBlockedIp}
                  className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all"
                >
                  <Plus className="w-5 h-5" />
                  <span>Block IP</span>
                </button>
              </div>
            </div>

            {/* Add Range Section */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-4">Block IP Range</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  value={newRange}
                  onChange={(e) => setNewRange(e.target.value)}
                  placeholder="Enter range (e.g., 192.168.)"
                  className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  value={newRangeReason}
                  onChange={(e) => setNewRangeReason(e.target.value)}
                  placeholder="Reason (optional)"
                  className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={addBlockedRange}
                  className="flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-lg transition-all"
                >
                  <Plus className="w-5 h-5" />
                  <span>Block Range</span>
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Example: "192.168." blocks all IPs starting with 192.168.x.x
              </p>
            </div>

            {/* Blocked IPs List */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-4">
                Blocked IPs ({blockedIps.length})
              </h2>
              {blockedIps.length === 0 ? (
                <p className="text-gray-400">No blocked IPs yet</p>
              ) : (
                <div className="space-y-2">
                  {blockedIps.map((item) => (
                    <div
                      key={item.ip}
                      className="flex items-center justify-between bg-gray-700 p-4 rounded-lg"
                    >
                      <div>
                        <p className="text-white font-mono font-bold">{item.ip}</p>
                        <p className="text-gray-400 text-sm">{item.reason}</p>
                        <p className="text-gray-500 text-xs">{formatDate(item.dateAdded)}</p>
                      </div>
                      <button
                        onClick={() => removeBlockedIp(item.ip)}
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-all"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Blocked Ranges List */}
            <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-4">
                Blocked Ranges ({blockedRanges.length})
              </h2>
              {blockedRanges.length === 0 ? (
                <p className="text-gray-400">No blocked ranges yet</p>
              ) : (
                <div className="space-y-2">
                  {blockedRanges.map((item) => (
                    <div
                      key={item.range}
                      className="flex items-center justify-between bg-gray-700 p-4 rounded-lg"
                    >
                      <div>
                        <p className="text-white font-mono font-bold">{item.range}*</p>
                        <p className="text-gray-400 text-sm">{item.reason}</p>
                        <p className="text-gray-500 text-xs">{formatDate(item.dateAdded)}</p>
                      </div>
                      <button
                        onClick={() => removeBlockedRange(item.range)}
                        className="bg-red-600 hover:bg-red-700 text-white p-2 rounded-lg transition-all"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Recent Submissions Tab */}
        {activeTab === 'submissions' && (
          <div className="bg-gray-800 rounded-2xl shadow-xl p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-white mb-4">
              Recent Form Submissions ({submissions.length})
            </h2>
            {submissions.length === 0 ? (
              <p className="text-gray-400">No submissions yet</p>
            ) : (
              <div className="space-y-4">
                {submissions.map((sub, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 p-4 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <p className="text-white font-bold">{sub.name}</p>
                        <p className="text-gray-300">{sub.phone}</p>
                        <p className="text-gray-400 text-sm">{sub.email}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-white font-mono font-bold">{sub.ip}</p>
                        <button
                          onClick={() => quickBlockIp(sub.ip)}
                          className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm mt-2 transition-all"
                        >
                          Block IP
                        </button>
                      </div>
                    </div>
                    <div className="border-t border-gray-600 pt-2 mt-2">
                      <p className="text-gray-300 text-sm">
                        <span className="font-semibold">Pickup:</span> {sub.pickupCity}
                      </p>
                      <p className="text-gray-300 text-sm">
                        <span className="font-semibold">Delivery:</span> {sub.deliveryCity}
                      </p>
                      <p className="text-gray-300 text-sm">
                        <span className="font-semibold">Load:</span> {sub.loadType}
                      </p>
                      <p className="text-gray-500 text-xs mt-2">{formatDate(sub.timestamp)}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
