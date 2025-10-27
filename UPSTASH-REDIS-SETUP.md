# Upstash Redis Setup Guide - REQUIRED FOR ADMIN PANEL

## Problem: Why Your Admin Panel Wasn't Working

Your admin panel was using JSON files for storage, which **doesn't work on Vercel** (or any serverless hosting). Serverless platforms have read-only filesystems, so writes to JSON files fail.

The code has now been updated to use **Upstash Redis** which persists data properly on Vercel and is the recommended solution.

## Quick Setup (5 minutes)

### Step 1: Create an Upstash Redis Database

1. Go to https://upstash.com (it's FREE)
2. Click **"Sign Up"** or **"Sign In"** (you can use GitHub)
3. Click **"Create Database"**
4. Configure:
   - **Name**: `jaatransport-db` (or any name)
   - **Type**: Select **"Regional"** (free tier)
   - **Region**: Choose closest to your Vercel region (e.g., `us-east-1`)
5. Click **"Create"**

### Step 2: Get Your Connection Details

After creating the database, you'll see the dashboard. Scroll down to **"REST API"** section:

1. Copy the **REST URL** (starts with `https://`)
2. Copy the **REST Token** (long string)

You should see something like:
```
UPSTASH_REDIS_REST_URL=https://us1-xxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=AbCdEf1234567890...
```

### Step 3: Add Environment Variables to Vercel

#### Option A: Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add these two variables:

   **Variable 1:**
   - Key: `UPSTASH_REDIS_REST_URL`
   - Value: (paste your REST URL from Upstash)
   - Apply to: All environments (Production, Preview, Development)

   **Variable 2:**
   - Key: `UPSTASH_REDIS_REST_TOKEN`
   - Value: (paste your REST Token from Upstash)
   - Apply to: All environments

5. Click **"Save"**

#### Option B: Via Vercel CLI

```bash
vercel env add UPSTASH_REDIS_REST_URL
# Paste your URL when prompted

vercel env add UPSTASH_REDIS_REST_TOKEN
# Paste your token when prompted
```

### Step 4: Deploy Your Changes

```bash
git add .
git commit -m "Fix admin panel with Upstash Redis storage"
git push
```

Vercel will automatically redeploy. **Important:** You must redeploy after adding environment variables!

If already deployed, trigger a new deployment:
- Go to Vercel Dashboard → Deployments → Click "..." → Redeploy

### Step 5: Migrate Your Existing Blocked IPs

After deployment, visit your admin panel and manually add these IPs back (they'll now be stored in Redis):

**From your JSON file:**
- `38.50.216.127` - Spam submission
- `208.129.31.5` - Spam submission
- `206.199.216.108` - Spam submission
- `166.178.46.5` - Spam
- `166.178.46.` (as range) - Spam range

### Step 6: Test Your Admin Panel

1. Visit `https://your-site.com/31060`
2. Log in with password: `31060`
3. Add a test IP address (e.g., `1.2.3.4`)
4. **Refresh the page** - the IP should still be there!
5. If it persists, Upstash Redis is working! ✅

## How It Works Now

### Production (Vercel)
- ✅ Uses **Upstash Redis** database
- ✅ Data persists between deployments
- ✅ Works perfectly with serverless
- ✅ Fast reads/writes

### Local Development
- ✅ Falls back to JSON files in `/data` folder
- ✅ No setup needed for local dev
- ✅ Automatically switches to Redis when deployed

## Upstash Redis Pricing

**FREE TIER includes:**
- 10,000 commands per day (more than enough)
- 256 MB storage
- All Redis commands
- No credit card required

**Your usage:** Admin panel will use ~5-20 commands per action, so 10,000/day is plenty for your needs!

## Verification Checklist

- ✅ Upstash Redis database created
- ✅ REST URL and Token copied
- ✅ Environment variables added to Vercel
- ✅ Code committed and pushed
- ✅ Vercel redeployed (with new env vars)
- ✅ Admin panel accessible at `/31060`
- ✅ Can add new IPs successfully
- ✅ IPs persist after page refresh
- ✅ Blocked IPs prevent form submissions

## Troubleshooting

### "Still can't add IPs"

**Check 1: Environment Variables Set?**
- Go to Vercel Dashboard → Settings → Environment Variables
- Verify both `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` exist

**Check 2: Redeployed After Adding Env Vars?**
- Environment variables only take effect after redeployment
- Trigger a new deployment from Vercel dashboard

**Check 3: Check Vercel Logs**
- Go to Vercel Dashboard → Your Project → Logs
- Look for Redis connection errors

### "Getting connection errors"

**Check 1: Correct Region?**
- Make sure your Upstash database region is accessible
- Use "Global" database if having issues (available on paid plans)

**Check 2: Correct Credentials?**
- Double-check you copied the **REST** credentials, not the regular Redis credentials
- Upstash shows different connection strings - make sure you're using the REST API ones

### "Local development not working"

**Check 1: Data Folder Exists?**
```bash
# Create if missing
mkdir data
```

**Check 2: JSON Files Exist?**
```bash
# Create if missing
echo '{"blockedIps":[],"blockedRanges":[]}' > data/blocked-ips.json
echo '{"submissions":[]}' > data/recent-submissions.json
```

### "Check Database Connection"

You can test your Upstash connection in the Upstash dashboard:
1. Go to your database in Upstash
2. Click the **"Data Browser"** tab
3. After adding an IP, you should see a key called `blocked-ips`

## Environment Variables Reference

Add these to Vercel (Settings → Environment Variables):

```bash
# From Upstash Dashboard → Your Database → REST API section
UPSTASH_REDIS_REST_URL=https://us1-xxxxx.upstash.io
UPSTASH_REDIS_REST_TOKEN=AxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxQ
```

## Why Upstash Redis?

1. **Serverless-native** - Built specifically for serverless platforms like Vercel
2. **Free tier** - Generous free tier, no credit card needed
3. **Fast** - Low latency REST API
4. **Recommended** - Official integration with Vercel
5. **Reliable** - Auto-scaling, high availability

## Summary

Your admin panel now:
- ✅ Works on Vercel (serverless platforms)
- ✅ Persists data properly in Upstash Redis
- ✅ Handles concurrent requests correctly
- ✅ Falls back to files for local development
- ✅ Is production-ready and reliable

**Next step:** Complete Steps 1-6 above to get your admin panel working!

## Need Help?

- Upstash Docs: https://docs.upstash.com/redis
- Vercel + Upstash Guide: https://vercel.com/integrations/upstash
