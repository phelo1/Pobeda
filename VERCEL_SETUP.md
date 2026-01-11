# Vercel Email Setup Guide

## Overview
This project uses Vercel serverless functions to handle form submissions. The email functionality is configured in `api/mail.ts`.

## Current Status
The API route is set up but currently **logs emails to the console** instead of actually sending them. You need to configure an email service to send real emails.

## How to Check Current Email Configuration

### Option 1: Check Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) and log in
2. Select your project (Pobeda)
3. Go to **Settings** → **Environment Variables**
4. Look for:
   - `RECIPIENT_EMAIL` - Who receives the emails (default: `info@pobedallc.com`)
   - `SENDER_EMAIL` - Email address that sends (default: `noreply@pobedallc.com`)
   - Email service API keys (see options below)

### Option 2: Check Vercel Logs
1. In Vercel Dashboard, go to your project
2. Click on **Deployments**
3. Click on the latest deployment
4. Go to **Functions** tab
5. Click on `api/mail` function
6. View **Logs** to see what's happening when forms are submitted

### Option 3: Check Function Logs via CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# View logs
vercel logs --follow
```

## Setting Up Email Service

You need to choose and configure one of these email services:

### Option 1: Resend (Recommended for Vercel)
1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. In Vercel Dashboard → Settings → Environment Variables, add:
   - `RESEND_API_KEY` = your Resend API key
4. In `api/mail.ts`, uncomment the Resend code block (lines 20-35)
5. Install Resend package:
   ```bash
   npm install resend
   ```

### Option 2: SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create an API key
3. In Vercel Dashboard → Settings → Environment Variables, add:
   - `SENDGRID_API_KEY` = your SendGrid API key
4. In `api/mail.ts`, uncomment the SendGrid code block (lines 37-52)
5. Install SendGrid package:
   ```bash
   npm install @sendgrid/mail
   ```

### Option 3: Custom SMTP (Nodemailer)
1. Get SMTP credentials from your email provider
2. In Vercel Dashboard → Settings → Environment Variables, add:
   - `SMTP_HOST` = your SMTP host (e.g., smtp.gmail.com)
   - `SMTP_PORT` = SMTP port (usually 587)
   - `SMTP_USER` = your SMTP username
   - `SMTP_PASSWORD` = your SMTP password
3. In `api/mail.ts`, uncomment the Nodemailer code block (lines 54-75)
4. Install Nodemailer package:
   ```bash
   npm install nodemailer
   ```

## Environment Variables to Set

In Vercel Dashboard → Settings → Environment Variables, add:

| Variable | Description | Example |
|----------|-------------|---------|
| `RECIPIENT_EMAIL` | Email that receives form submissions | `info@pobedallc.com` |
| `SENDER_EMAIL` | Email that sends (must be verified) | `noreply@pobedallc.com` |
| `RESEND_API_KEY` | (If using Resend) Your Resend API key | `re_xxxxx` |
| `SENDGRID_API_KEY` | (If using SendGrid) Your SendGrid API key | `SG.xxxxx` |
| `SMTP_HOST` | (If using SMTP) SMTP server host | `smtp.gmail.com` |
| `SMTP_PORT` | (If using SMTP) SMTP port | `587` |
| `SMTP_USER` | (If using SMTP) SMTP username | `your-email@gmail.com` |
| `SMTP_PASSWORD` | (If using SMTP) SMTP password | `your-app-password` |

## Testing

1. After setting up your email service, redeploy your Vercel project
2. Submit a test form on your website
3. Check:
   - Vercel function logs (should show success)
   - Your email inbox (should receive the email)

## Current Email Recipient

Based on your website's contact info, emails are sent to:
**`info@pobedallc.com`**

You can change this by setting the `RECIPIENT_EMAIL` environment variable in Vercel.

## Troubleshooting

### Emails not sending?
1. Check Vercel function logs for errors
2. Verify environment variables are set correctly
3. Make sure you've uncommented the correct email service code in `api/mail.ts`
4. Ensure the email service package is installed (`npm install`)

### Function errors?
- Check that `@vercel/node` is installed (already done)
- Verify the API route is at `api/mail.ts` (correct location for Vercel)

### Need to change recipient email?
- Update `RECIPIENT_EMAIL` environment variable in Vercel Dashboard
- Redeploy the project
