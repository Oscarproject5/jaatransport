# Admin Panel Guide

## ⚠️ IMPORTANT: Upstash Redis Setup Required

**If your admin panel isn't working (can't add IPs), you need to set up Upstash Redis first!**

📘 **[READ THE SETUP GUIDE HERE: UPSTASH-REDIS-SETUP.md](./UPSTASH-REDIS-SETUP.md)**

This takes 5 minutes and is required for the admin panel to work on Vercel.

---

## Accessing the Admin Panel

Your secure admin panel is accessible at: **`/31060`**

**Password:** `31060`

## Features

### 1. Block Individual IPs

- Enter any IP address (e.g., `123.45.67.89`)
- Optionally add a reason (e.g., "Spam submission")
- Click "Block IP"
- The IP will be immediately blocked from submitting forms

### 2. Block IP Ranges

- Enter an IP prefix (e.g., `192.168.` or `123.45.`)
- This blocks ALL IPs starting with that prefix
- Example: `192.168.` blocks all `192.168.x.x` addresses
- Useful for blocking entire spam networks

### 3. View Recent Submissions

- See all form submissions with:
  - Name, phone, email
  - IP address
  - Pickup/delivery locations
  - Load type
  - Submission timestamp
- Quick "Block IP" button next to each submission
- Last 50 submissions are displayed

### 4. Manage Blocked Lists

- View all currently blocked IPs
- View all blocked IP ranges
- Remove IPs or ranges with the trash icon
- See when each IP was blocked and why

## How It Works

### Automatic IP Blocking

1. User fills out the quote form
2. System checks their IP against your blocked list
3. If blocked, they see a friendly message to call instead
4. If not blocked, form submits normally and gets logged

### Submission Tracking

- Every legitimate form submission is automatically logged
- You can review submissions to identify spam patterns
- Quick-block suspicious IPs directly from the submissions list

## Security

- Password-protected access
- Password is required for all API operations
- Only you can access the admin panel
- The `/data` folder is excluded from git (won't be committed)

## Data Storage

### Production (Vercel)
All data is stored in **Upstash Redis** database:
- Persists between deployments
- Fast and reliable
- See [UPSTASH-REDIS-SETUP.md](./UPSTASH-REDIS-SETUP.md) for setup

### Local Development
All data is stored in JSON files in the `/data` folder:
- `blocked-ips.json` - List of blocked IPs and ranges
- `recent-submissions.json` - Last 100 form submissions

## Tips

### Identifying Spam

Look for:
- Multiple submissions from the same IP
- Nonsense names (e.g., "asdfgh", "test")
- Fake phone numbers (e.g., "1111111111")
- Submissions at odd hours (3am bot activity)

### Using IP Ranges Effectively

If you notice spam from:
- `123.45.67.1`
- `123.45.67.2`
- `123.45.67.3`

Block the entire range `123.45.67.` to stop all of them at once.

### Quick Workflow

1. Check "Recent Submissions" tab regularly
2. Identify spam submissions
3. Click "Block IP" next to suspicious entries
4. IP is immediately blocked

## Backup and Deployment

When deploying to Vercel:

1. Set up Upstash Redis (see [UPSTASH-REDIS-SETUP.md](./UPSTASH-REDIS-SETUP.md))
2. Add environment variables to Vercel
3. Deploy your code
4. Manually re-add your blocked IPs via the admin panel

Your data will persist in Upstash Redis between deployments.

## Troubleshooting

**Can't log in?**
- Make sure you're using the password: `31060`
- Try clearing your browser cache

**Blocked IPs aren't working?**
- Make sure you've set up Upstash Redis (see setup guide)
- Check environment variables are set in Vercel
- Verify you redeployed after adding environment variables

**Submissions not showing?**
- Submissions only appear after users submit the form
- They're logged automatically - no setup needed

## Need to Change the Password?

Edit these files:
1. `/app/31060/page.tsx` - Line 34: `const ADMIN_PASSWORD = '31060'`
2. `/app/api/admin/blocked-ips/route.ts` - Line 7: `const ADMIN_PASSWORD = '31060'`
3. `/app/api/admin/submissions/route.ts` - Line 7: `const ADMIN_PASSWORD = '31060'`

(In production, use environment variables for better security)
