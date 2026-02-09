# Domain Redirect Guide: Framer → Vercel

**Goal**: Redirect your custom domain from Framer website to Vercel hosting

**Current Status**: Site is live on Vercel with temporary domain
**Target**: Your custom domain points to Vercel

---

## Step 1: Know Your Setup

You likely have one of these setups:

### Setup A: Domain registered + Framer hosting (currently)
- Domain: example.com
- Currently pointing to: Framer website
- Action needed: Point to Vercel

### Setup B: Domain with registrar, DNS elsewhere
- Registrar: GoDaddy, Namecheap, etc.
- DNS: Same registrar OR Cloudflare, Route53, etc.
- Action needed: Update DNS records

---

## Step 2: Add Domain to Vercel

### 2.1 In Vercel Dashboard
1. Go to https://vercel.com/dashboard
2. Select your **Wattl** project
3. Click **Settings** → **Domains**
4. Click **Add Domain**
5. Enter your domain: `example.com` (replace with yours)
6. Click **Add**

Vercel will show you 2 options:

**Option A: Use Vercel's Nameservers (Easiest)**
- Vercel manages DNS for you
- Shows 4 nameserver addresses to use
- **Time to propagate**: 24-48 hours

**Option B: Add DNS Records (If keeping current registrar)**
- You add records to your current DNS
- Shows the specific DNS records needed
- **Time to propagate**: Minutes to hours

---

## Step 3: Choose Your Method

### METHOD 1: Use Vercel Nameservers (Recommended - Easiest)

**Best for**: Complete control, simplest setup, no other DNS changes needed

**Steps**:

1. **Get Nameservers from Vercel**
   - In Vercel dashboard → Domains section
   - Vercel shows you 4 nameserver addresses
   - Copy all 4 nameservers

2. **Go to Domain Registrar**
   - Log into where you bought your domain
   - Common registrars: GoDaddy, Namecheap, Google Domains, etc.
   - Find "Nameservers" or "DNS Settings"

3. **Update Nameservers**
   - Replace current nameservers with Vercel's 4 nameservers
   - Remove any Framer nameservers
   - Save changes

4. **Wait for DNS Propagation**
   - Takes 24-48 hours to fully propagate
   - Can check progress at: https://www.whatsmydns.net/
   - Enter your domain, check that nameservers are updated

5. **Verify in Vercel**
   - After propagation, domain should show "Valid Configuration"
   - Vercel will automatically issue SSL certificate
   - Visit https://your-domain.com/ - should work!

---

### METHOD 2: Add DNS Records Manually

**Best for**: Keeping your current DNS provider, multiple domains

**Steps**:

1. **Get DNS Records from Vercel**
   - In Vercel dashboard → Domains
   - Click on your domain
   - Look for "Continue with DNS records" option
   - Vercel shows records needed:
     - A record (or CNAME for subdomains)
     - TXT record (for verification)

2. **Go to Your DNS Provider**
   - If registrar is GoDaddy, Namecheap, etc. → go there
   - If using Cloudflare, Route53, etc. → go to that service
   - Find "DNS Records" or "Domain Settings"

3. **Add A Record**
   - **Type**: A
   - **Name**: @ (or leave blank)
   - **Value**: Vercel's IP (given in dashboard)
   - **TTL**: 3600 or default
   - Save

4. **Add TXT Record (for verification)**
   - **Type**: TXT
   - **Name**: _vercel (or given in dashboard)
   - **Value**: Verification code (from Vercel)
   - Save

5. **Add www Subdomain (Optional but Recommended)**
   - **Type**: CNAME
   - **Name**: www
   - **Value**: cname.vercel-dns.com. (or Vercel's given value)
   - Save

6. **Wait for Propagation**
   - Usually 5 minutes to 2 hours
   - Check at: https://www.whatsmydns.net/

7. **Verify in Vercel**
   - Once propagated, domain shows "Valid Configuration"
   - Visit https://your-domain.com/ - should work!

---

## Step 4: Remove Framer Redirect (if needed)

If you currently have a redirect set up in Framer:

### If Framer is Still Active
1. Log into Framer account
2. Find domain settings
3. Remove the domain or redirect
4. This prevents conflicts

### If Framer is Deactivated
- No action needed
- The domain will now point to Vercel instead

---

## Step 5: Verify Everything Works

### Test Locally (Before Propagation)
You can test before DNS propagates:

```bash
# Option 1: Edit hosts file (Windows)
# File: C:\Windows\System32\drivers\etc\hosts
# Add this line:
# 76.76.19.89 your-domain.com

# Option 2: Use Vercel's temporary domain
# Check your Vercel deployment for temporary URL
# Like: wattl-xyz.vercel.app
```

### Test After Propagation
1. Open https://your-domain.com/
2. Should show Wattl website
3. Check all pages work:
   - Homepage
   - /locations
   - /partner-with-us
   - /contact-us
   - /legal
   - /delete-account
4. Check forms work (if Web3Forms configured)
5. Run Lighthouse for performance check

---

## Common Issues & Solutions

### Issue: Domain shows "Invalid Configuration"

**Check**:
1. Nameservers correctly updated? (wait 24-48h)
2. DNS records correct?
3. Typos in nameserver/record values?

**Solution**:
1. Wait full 48 hours
2. Clear browser cache (Ctrl+Shift+Delete)
3. Try different browser
4. Use incognito/private mode

### Issue: Site shows Framer website instead of Vercel

**Cause**: DNS still pointing to old host

**Solution**:
1. Verify nameservers updated (https://www.whatsmydns.net/)
2. Clear browser cache
3. Try different network (phone hotspot)
4. Wait 24 hours for full propagation
5. Check Vercel shows "Valid Configuration"

### Issue: www.domain.com doesn't work

**Solution**:
1. Add CNAME record for `www`:
   - Name: `www`
   - Value: `cname.vercel-dns.com` (or Vercel's given value)
2. Or in Vercel settings, create alias for www subdomain
3. Wait for DNS propagation

### Issue: HTTPS not working

**Solution**:
1. Vercel generates certificate automatically
2. Wait 5-10 minutes after domain validates
3. Force refresh (Ctrl+Shift+R or Cmd+Shift+R)
4. Clear browser cache
5. Try in incognito mode

---

## Quick Reference

### Vercel Nameserver Method
1. Copy 4 nameservers from Vercel dashboard
2. Update at your domain registrar
3. Wait 24-48 hours
4. Verify domain resolves

### DNS Record Method
1. Add A record (pointing to Vercel IP)
2. Add TXT record (verification)
3. Add CNAME for www (optional)
4. Wait 5min-2 hours
5. Verify domain resolves

---

## Support Resources

### Check DNS Status
- https://www.whatsmydns.net/ - Global DNS checker
- https://dns.google/ - Google DNS tool
- https://www.nslookup.io/ - Lookup tool

### Vercel Docs
- https://vercel.com/docs/concepts/projects/domains

### Common Registrar Docs
- **GoDaddy**: GoDaddy → Manage DNS
- **Namecheap**: Dashboard → Domain List → Manage
- **Google Domains**: DNS → Custom Records
- **Cloudflare**: DNS → Add Record

---

## Timeline Expectations

| Action | Time |
|--------|------|
| Add domain to Vercel | Immediate |
| Update nameservers | Immediate (at registrar) |
| DNS propagates (50%) | 5-15 minutes |
| DNS propagates (95%) | 2-24 hours |
| Full propagation (100%) | 24-48 hours |
| SSL cert issued | 5-10 minutes after validation |

---

## Final Verification Checklist

- [ ] Domain added to Vercel dashboard
- [ ] Nameservers updated at registrar (or DNS records added)
- [ ] Domain resolves to Vercel (https://www.whatsmydns.net/)
- [ ] Vercel shows "Valid Configuration" for domain
- [ ] https://your-domain.com/ loads Wattl site
- [ ] All pages accessible (test /locations, /contact-us, etc.)
- [ ] Forms work (test on /contact-us)
- [ ] No "Not Secure" warning
- [ ] Framer site no longer appears

**When all checked**: ✅ Domain redirect complete!

---

## Need Help?

If stuck:
1. Check Vercel docs: https://vercel.com/docs/concepts/projects/domains
2. Check your registrar's documentation
3. Wait full 48 hours before concluding there's an issue
4. Try accessing from different device/network
5. Check Vercel status: https://www.vercel-status.com/

---

**Last Updated**: February 10, 2025
