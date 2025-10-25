# IP Address Tracking & Spam Prevention Guide

## Overview
This implementation tracks the IP address of every form submission to help identify and block spam requests.

## What's Been Added

### 1. IP Tracking API Route
**Location:** `/app/api/get-ip/route.ts`

This API endpoint captures the user's IP address from request headers, supporting:
- `x-forwarded-for` (most common proxy/load balancer header)
- `x-real-ip` (nginx and other proxies)
- `cf-connecting-ip` (Cloudflare)

### 2. Form Submission Updates
**Location:** `/components/QuoteSection.tsx`

The form now:
- Fetches the user's IP address before submission
- Includes the IP in both the custom field (`ip_address`) and in the message body
- Includes submission timestamp for tracking

## How to Use This Data

### Viewing IP Addresses
Every form submission email will now include:
- **IP Address field:** Shows the submitter's IP
- **Submission time:** Timestamp of when the form was submitted

### Identifying Spam Patterns
Look for these red flags:
1. **Multiple submissions from the same IP** in a short time period
2. **Sequential IPs** (like 123.45.67.1, 123.45.67.2, 123.45.67.3) - indicates bot network
3. **Common spam IP ranges** - check against spam databases
4. **Mismatched location data** - IP from Nigeria but requesting local Texas service

### Blocking Spam IPs

#### Option 1: Block at Web3Forms Level
1. Log into your Web3Forms dashboard
2. Go to your form settings
3. Look for spam filtering or IP blocking options
4. Add the spam IP addresses to the blocklist

#### Option 2: Client-Side IP Blocking (Quick Implementation)
Add this to your `QuoteSection.tsx`:

```typescript
// Add blocked IPs list at the top of your component
const BLOCKED_IPS = [
  '192.168.1.1',  // Example spam IP
  '10.0.0.1',     // Add more as you identify them
]

// In handleSubmit, after getting the IP:
if (BLOCKED_IPS.includes(userIp)) {
  alert('Unable to submit. Please contact us directly at (956) 372-6956')
  setIsSubmitting(false)
  return
}
```

#### Option 3: Server-Side IP Blocking (Recommended)
Create a middleware or update the API route to check against a blocklist before forwarding to Web3Forms.

### Recommended Tools for IP Analysis

1. **AbuseIPDB** (https://www.abuseipdb.com)
   - Check if an IP has been reported for spam
   - Free API for checking IPs

2. **IPQualityScore** (https://www.ipqualityscore.com)
   - Fraud detection and proxy/VPN detection
   - Free tier available

3. **Google Sheets Tracking**
   - Copy IP addresses from emails into a spreadsheet
   - Track frequency and patterns
   - Easier to spot repeat offenders

## Next Steps

### Immediate Actions
1. Monitor your email submissions for the new IP address field
2. Start keeping a log of suspicious IPs
3. After identifying 2-3 spam IPs, implement Option 2 above

### Long-Term Improvements
1. Set up a database to log all submissions with IPs
2. Create an admin dashboard to view submission history
3. Implement rate limiting (max 3 submissions per IP per day)
4. Add geolocation checking (block IPs outside your service area)

## Example Email Format

You'll now receive emails like this:

```
Contact Information:
Name: John Doe
Phone: (956) 123-4567
Email: john@example.com
Company: ABC Construction

Shipment Details:
Pickup City: McAllen
Delivery City: Brownsville
Load Type: Backhoe

Additional Details:
Need urgent transport

Security Information:
IP Address: 123.45.67.89
Submitted: 1/25/2025, 3:45:00 PM
```

## Blocking IP Ranges

If you notice spam from entire IP ranges, you can block by prefix:

```typescript
const isBlockedIP = (ip: string) => {
  const blockedRanges = [
    '192.168.',   // Block entire 192.168.x.x range
    '10.0.',      // Block 10.0.x.x range
  ]
  return blockedRanges.some(range => ip.startsWith(range))
}
```

## Need Help?

If you need assistance implementing more advanced spam protection:
- Rate limiting
- Database logging
- IP geolocation blocking
- Admin dashboard for managing blocked IPs

Let me know and I can help implement these features!
