# Quote Form Setup Guide

Your contact form is ready! Just follow these steps to activate email notifications.

## Step 1: Get Free Web3Forms Access Key

1. Go to: **https://web3forms.com**
2. Click **"Get Started Free"**
3. Enter your email: **jaatransport01@gmail.com**
4. Check your email and copy the **Access Key**

## Step 2: Add Access Key Locally (For Testing)

1. Create a file named `.env.local` in your project root
2. Add this line (replace with your actual key):
   ```
   WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```
3. Restart your dev server: `npm run dev`

## Step 3: Add Access Key to Vercel (For Production)

1. Go to your Vercel project: https://vercel.com/dashboard
2. Select your **jaatransport** project
3. Go to **Settings** → **Environment Variables**
4. Add new variable:
   - **Name**: `WEB3FORMS_ACCESS_KEY`
   - **Value**: (paste your access key)
   - **Environment**: Production, Preview, Development (all selected)
5. Click **Save**
6. **Redeploy** your site (or push a new commit)

## How It Works

When someone fills out the quote form:
1. ✅ Form data is validated
2. ✅ Sent to your API endpoint (`/api/quote`)
3. ✅ Email sent to: **jaatransport01@gmail.com**
4. ✅ User sees success message
5. ✅ Form is cleared

## Email Format

You'll receive emails with:
- Customer name, phone, email
- Company name (if provided)
- Pickup and delivery cities
- Load type
- Additional details/message
- Timestamp

## Features

✅ **Loading state** - Button shows "SENDING..." while processing
✅ **Success message** - Green confirmation when email sent
✅ **Error handling** - Red error with phone number fallback
✅ **Form reset** - Clears after successful submission
✅ **Validation** - Required fields must be filled
✅ **Spam protection** - Built into Web3Forms

## Testing

1. Fill out the form on your site
2. Click "REQUEST QUOTE"
3. Check **jaatransport01@gmail.com** for the email
4. Should arrive within seconds!

## Troubleshooting

**Not receiving emails?**
- Check spam/junk folder
- Verify access key is correct
- Make sure .env.local file exists (locally)
- Verify environment variable is set in Vercel (production)

**Form not submitting?**
- Check browser console for errors (F12)
- Verify all required fields are filled
- Check network tab to see if API call succeeds

## Free Limits

Web3Forms free tier includes:
- ✅ 250 submissions per month
- ✅ Spam filtering
- ✅ No branding required
- ✅ File attachments (if you add them later)

Need more? Upgrade at https://web3forms.com/pricing

## Support

Web3Forms Documentation: https://docs.web3forms.com
Email: support@web3forms.com
