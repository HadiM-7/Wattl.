# Web3Forms Email Delivery - Complete Setup Guide

## Problem Overview
Forms are submitting but emails are not being delivered. This guide provides step-by-step debugging and setup instructions.

---

## Step 1: Verify Your Web3Forms Account Setup

### 1.1 Check Your Web3Forms Dashboard
1. Go to **https://web3forms.com/**
2. Log in to your account
3. Click **"Access Keys"** or **"My Account"**
4. You should see your **Access Key** (32-character string starting with `your_access_key_here` before setup)

### 1.2 Verify Your Email Address
1. In Web3Forms dashboard, find **"Email Settings"** or **"Receiving Email"**
2. Confirm the email address where you want to receive submissions
3. If you haven't verified this email yet, Web3Forms may send a verification link
4. **Check your spam/junk folder** for the verification email

### 1.3 Test Email Access
- Log into the email address you configured
- Create a forwarding rule (if using corporate email)
- Ensure the email account is actively monitored

---

## Step 2: Update Local Environment Variables

### 2.1 Update `.env.local` File
The current file still has the placeholder. Replace it with your actual key:

**Current (WRONG)**:
```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

**Correct (REPLACE WITH YOUR KEY)**:
```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=abc123def456ghi789jkl012mno345pq
```

### 2.2 How to Find Your Access Key
1. Log in to **https://web3forms.com/**
2. Navigate to **"Access Keys"**
3. Copy the full access key
4. Paste into `.env.local`

### 2.3 Restart Development Server
```bash
# Stop current dev server (Ctrl+C)
# Then restart:
npm run dev
```

---

## Step 3: Verify Vercel Environment Variables

### 3.1 Check Vercel Configuration
1. Go to **https://vercel.com/dashboard**
2. Select your **Wattl project**
3. Click **"Settings"** → **"Environment Variables"**
4. Look for `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`

### 3.2 Verify the Value
- The environment variable should be set to your actual access key
- **NOT** the placeholder value
- **Must start with `NEXT_PUBLIC_`** (this prefix makes it available in browser code)

### 3.3 If Missing or Wrong
1. Delete the existing variable (if incorrect)
2. Add new variable:
   - **Name**: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - **Value**: Your actual access key from Web3Forms
3. Click **"Save"**
4. Vercel will automatically redeploy with new variables

### 3.4 Trigger Redeployment
After updating Vercel environment variables:
1. Push a new commit to GitHub
2. OR manually trigger redeployment in Vercel:
   - Click **"Deployments"** tab
   - Find latest deployment
   - Click **"Redeploy"** or **"Promote to Production"**

---

## Step 4: Test the Form Submission

### 4.1 Test on Production (Vercel)
1. Go to **https://your-domain.com/contact-us**
2. Fill out the contact form:
   - **Name**: Test User
   - **Email**: your-email@example.com
   - **Message**: This is a test message
3. Click **"Send Message"**
4. You should see a **success message** (green banner)
5. Check your email inbox (and spam folder) for the submission

### 4.2 Test Locally (Development)
1. Ensure `.env.local` has your real access key
2. Run `npm run dev`
3. Go to **http://localhost:3000/contact-us**
4. Fill and submit the form
5. Check your email immediately

### 4.3 What Success Looks Like
- **On website**: Green success banner appears
- **In email**: You receive an email with:
  - **Subject**: "Contact Form Submission" (or relevant form name)
  - **Body**: Contains all form fields (Name, Email, Message)

---

## Step 5: Troubleshooting Email Delivery Issues

### Issue: Success message appears but no email received

**Check 1: Verify access key is correct**
```bash
# In your project, check .env.local:
grep NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY .env.local
```
- Should show your 32-character key
- NOT `your_access_key_here`

**Check 2: Verify email address is configured in Web3Forms**
1. Log in to https://web3forms.com/
2. Go to **"Email Settings"**
3. Confirm the receiving email address
4. Check if it says "Verified" ✓

**Check 3: Check spam/junk folder**
- Web3Forms emails may be filtered as spam
- Add `noreply@web3forms.com` to your contacts
- Mark emails as "Not Spam"

**Check 4: Verify form field names match Web3Forms expectations**
- Field names should be readable (not underscore-heavy)
- Current names are correct: "Full Name", "Email", "Message"
- Web3Forms will use these as email columns

**Check 5: Enable Web3Forms dashboard notifications**
1. Log into Web3Forms
2. Go to **"Notifications"** settings
3. Enable "Email notification for new submissions"
4. Save settings

### Issue: Error message appears on form submission

**Most Common Causes:**
1. **Access key is invalid or wrong format**
   - Solution: Copy-paste your key directly from Web3Forms dashboard

2. **Access key is not in Vercel environment variables**
   - Solution: Add to Vercel Settings → Environment Variables
   - Redeploy after adding

3. **Network error reaching Web3Forms API**
   - Solution: Check your internet connection, try again in 1 minute

4. **Bot check failed**
   - Solution: The form includes `botcheck: ""` field which is normal
   - Web3Forms uses this for spam detection
   - If consistently failing, contact Web3Forms support

### Issue: Form submits but "Something went wrong" message

This means the API request failed. Check:
1. Browser console (F12 → Console tab) for error messages
2. Vercel deployment logs:
   - https://vercel.com → Project → Deployments → Latest → Logs
3. Web3Forms dashboard for submission attempts

---

## Step 6: Email Content Verification

### What You Should Receive

**Example Email for Contact Form:**
```
From: noreply@web3forms.com
Subject: Contact Form Submission
Date: [current date/time]

--

Full Name: John Doe
Email: john@example.com
Message: This is my message content

--
Submitted from: https://wattl.io/contact-us
IP Address: 203.0.113.42
Time: 2025-02-10 14:30:00 UTC
```

### If Email Has Different Format
- This is still normal - Web3Forms may format differently
- The important thing is that you receive it with all field data

---

## Step 7: Configure All Four Forms

The Wattl site has **4 forms that need email delivery**:

### 1. Contact Form (`/contact-us`)
- **Current**: Configured ✓
- **Fields**: Full Name, Email, Message
- **Subject**: "Contact Form Submission"

### 2. Partner Request Form (`/partner-with-us`)
- **File**: `src/components/forms/StationRequestForm.tsx`
- **Fields**: Company Name, Email, etc.
- **Subject**: "Partner Request Form Submission"
- **Status**: Should be configured, verify it's using same `submitForm()` function

### 3. Location Suggestion Form (`/locations`)
- **File**: `src/components/forms/SuggestLocationForm.tsx`
- **Fields**: Location Name, Email, etc.
- **Subject**: "Location Suggestion Form Submission"
- **Status**: Should be configured, verify it's using same `submitForm()` function

### 4. Delete Account Form (`/delete-account`)
- **File**: `src/components/forms/DeleteAccountForm.tsx`
- **Fields**: Email, etc.
- **Subject**: "Delete Account Request"
- **Status**: Should be configured, verify it's using same `submitForm()` function

**All 4 forms use the same `submitForm()` function**, so if one works, all should work with the correct access key.

---

## Step 8: Verify Form Configuration Code

### Check that all forms use correct submitForm import

Each form file should have:
```tsx
import { submitForm } from "@/lib/web3forms";

// In onSubmit handler:
const result = await submitForm(
  {
    "Field Name 1": data.field1,
    "Field Name 2": data.field2,
  },
  "Descriptive Subject Line"
);
```

### Field Name Tips
- Use **descriptive, readable names** (with spaces and capitals)
- **Good**: "Full Name", "Email Address", "Message"
- **Bad**: "fname", "em", "msg"
- Web3Forms will format these as email column headers

---

## Quick Verification Checklist

Before testing, verify these items:

- [ ] Web3Forms account created at https://web3forms.com/
- [ ] Access key generated and copied
- [ ] `.env.local` updated with your access key (not placeholder)
- [ ] Vercel environment variable added: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
- [ ] Email address configured in Web3Forms dashboard
- [ ] Email address verified in Web3Forms (check spam folder)
- [ ] Dev server restarted after updating `.env.local`
- [ ] Vercel redeployed after updating environment variables
- [ ] Test form submitted locally (should see success message)
- [ ] Test email received in inbox (check spam folder too)
- [ ] Test form submitted on production (vercel deployment)
- [ ] Production email received

---

## Additional Resources

### Web3Forms Documentation
- **Main**: https://web3forms.com/docs
- **API Reference**: https://web3forms.com/docs/api
- **FAQ**: https://web3forms.com/faq

### Common Issues & Solutions
- **Problem**: "Access Key not found"
  - **Solution**: Verify `NEXT_PUBLIC_` prefix in env variable name

- **Problem**: Emails go to spam
  - **Solution**: Add `noreply@web3forms.com` to contacts, mark "Not Spam"

- **Problem**: No emails after 24 hours
  - **Solution**: Contact Web3Forms support with your access key and test submission details

### Support Contact
If issues persist after following all steps:
1. Visit **https://web3forms.com/contact**
2. Provide:
   - Your access key (first 8 chars only for privacy)
   - The domain you're testing from (wattl.io)
   - Date/time of test submission
   - Screenshot of success message on website

---

## Summary: What to Do Right Now

1. **Find your Web3Forms access key** from https://web3forms.com/
2. **Update `.env.local`** with the correct key
3. **Update Vercel** with the environment variable
4. **Restart dev server** (`npm run dev`)
5. **Trigger Vercel redeployment** (push new commit or manually redeploy)
6. **Test locally** first (http://localhost:3000/contact-us)
7. **Test on production** (https://wattl.io/contact-us or your domain)
8. **Check inbox and spam folder** for submission emails

If you still don't receive emails after these steps, **most likely issue is**: The Vercel environment variable hasn't been properly saved or the domain name isn't matching Web3Forms settings.

---

**Last Updated**: February 10, 2025
**Version**: 1.0
