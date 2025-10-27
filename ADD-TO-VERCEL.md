# Quick Setup - Add Your Upstash Credentials to Vercel

## Your Upstash Redis Credentials

You already have Upstash Redis set up! Here are your credentials:

```
UPSTASH_REDIS_REST_URL=https://picked-catfish-23838.upstash.io
UPSTASH_REDIS_REST_TOKEN=AV0eAAIncDJkZTM2ODBiMWZkYzE0NDQ1OTE4ZWYyMTRiY2VjZWZhMHAyMjM4Mzg
```

## Step 1: Add Environment Variables to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Click on your **jaatransport** project
3. Click **Settings** (top menu)
4. Click **Environment Variables** (left sidebar)
5. Add the first variable:
   - **Key:** `UPSTASH_REDIS_REST_URL`
   - **Value:** `https://picked-catfish-23838.upstash.io`
   - **Environments:** Check all (Production, Preview, Development)
   - Click **Save**

6. Add the second variable:
   - **Key:** `UPSTASH_REDIS_REST_TOKEN`
   - **Value:** `AV0eAAIncDJkZTM2ODBiMWZkYzE0NDQ1OTE4ZWYyMTRiY2VjZWZhMHAyMjM4Mzg`
   - **Environments:** Check all (Production, Preview, Development)
   - Click **Save**

### Option B: Via Vercel CLI

```bash
vercel env add UPSTASH_REDIS_REST_URL production
# When prompted, paste: https://picked-catfish-23838.upstash.io

vercel env add UPSTASH_REDIS_REST_TOKEN production
# When prompted, paste: AV0eAAIncDJkZTM2ODBiMWZkYzE0NDQ1OTE4ZWYyMTRiY2VjZWZhMHAyMjM4Mzg
```

## Step 2: Deploy to Vercel

```bash
git add .
git commit -m "Fix admin panel with Upstash Redis storage"
git push
```

Vercel will automatically deploy.

**IMPORTANT:** If you already deployed the code, you MUST redeploy after adding environment variables:
- Go to Vercel Dashboard → Deployments
- Click the "..." menu on the latest deployment
- Click **"Redeploy"**

## Step 3: Test Your Admin Panel

1. Visit: `https://your-vercel-domain.com/31060`
2. Login with password: `31060`
3. Try adding a test IP: `1.2.3.4`
4. **Refresh the page**
5. If the IP is still there → **SUCCESS!** ✅

## Step 4: Add Your Blocked IPs

Now add your real blocked IPs:

1. `38.50.216.127` - Spam submission
2. `208.129.31.5` - Spam submission
3. `206.199.216.108` - Spam submission
4. `166.178.46.5` - Spam

Also add the range:
- `166.178.46.` (blocks all IPs starting with 166.178.46.x)

## Verify Environment Variables Are Set

After adding the variables, verify they're there:

1. Go to Vercel Dashboard → Your Project → Settings → Environment Variables
2. You should see both variables listed:
   - ✅ `UPSTASH_REDIS_REST_URL`
   - ✅ `UPSTASH_REDIS_REST_TOKEN`

## Troubleshooting

### Admin panel still can't add IPs?

1. **Check environment variables are set** (see above)
2. **Redeploy** - Environment variables only work after redeployment
3. **Check Vercel logs:**
   - Dashboard → Your Project → Logs
   - Look for "Redis" errors

### Getting "Unauthorized" or connection errors?

- Double-check you copied the credentials exactly (no extra spaces)
- Make sure you added both variables

### Still having issues?

Check the Vercel function logs:
1. Go to Vercel Dashboard → Your Project
2. Click **Logs**
3. Try adding an IP in the admin panel
4. Check for error messages in the logs

## Summary

✅ Your Upstash Redis is ready
✅ Code is already configured
✅ Just need to add 2 environment variables to Vercel
✅ Deploy and test

**Next:** Add the environment variables above to Vercel and redeploy!
