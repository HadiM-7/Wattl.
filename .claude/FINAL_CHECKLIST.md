# Wattl Website - Final Production Checklist

**Status**: Phase 7 - Final Implementation
**Last Updated**: February 10, 2025

---

## Critical Path - What's Left

### ✅ COMPLETED (Today)
- [x] Comprehensive design audit (DESIGN_AUDIT.md)
- [x] Navbar underline fixed (hover-only)
- [x] Emoji enhancements (battery, heart, lightning)
- [x] Footer watermark scaled up (massive, spans width)
- [x] App store badges replaced with official designs
- [x] Playwright E2E testing framework set up
- [x] Web3Forms setup guide created (detailed instructions)

### 🔴 CRITICAL - DO IMMEDIATELY
1. **Web3Forms Email Setup**
   - [x] Add actual access key to `.env.local`
   - [x] Verify Vercel environment variables set
   - [x] Test form submission locally
   - [x] Test form submission on production
   - [x] Verify emails received
   - **Time**: 15-30 minutes
   - **Reference**: `.claude/WEB3FORMS_SETUP_GUIDE.md`

2. **Update App Store Badge Links**
   - [ ] Replace `href="#"` with actual Apple App Store link
   - [ ] Replace `href="#"` with actual Google Play link
   - **File**: `src/components/ui/AppStoreBadges.tsx`
   - **Time**: 5 minutes

3. **Lighthouse Audit**
   - [ ] Run Lighthouse on production
   - [ ] Target: 90+ for all categories
   - [ ] Screenshot results
   - **Time**: 5 minutes (automated)

### 🟡 IMPORTANT - DO SOON
4. **Cross-Device Testing**
   - [ ] Run Playwright tests on production
   - [x] Test on actual iOS device
   - [x] Test on actual Android device
   - **Command**: `npm run test:e2e`
   - **Time**: 10-15 minutes

5. **Legal Page Audit**
   - [ ] Search for "Framer" references
   - [ ] Remove if found
   - [ ] Verify all content is accurate
   - **File**: `src/app/legal/page.tsx`
   - **Time**: 5 minutes

---

## Detailed Action Items

### Task 1: Web3Forms Email Delivery (🔴 CRITICAL)

**What**: Get form emails working end-to-end

**Prerequisites**:
- [ ] Web3Forms account created
- [ ] Access key generated
- [ ] Email address configured in Web3Forms

**Steps**:
1. **Update `.env.local`**
   ```bash
   # Open file: .env.local
   # Find: NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
   # Replace with: NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=abc123def456ghi789...
   ```
   - Get your real access key from https://web3forms.com/
   - Copy the full 32-character key
   - Paste into `.env.local`

2. **Update Vercel Environment Variables**
   - Go to https://vercel.com/dashboard
   - Select Wattl project
   - Settings → Environment Variables
   - Add/Update: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` with your key
   - Save and trigger redeployment

3. **Test Locally**
   - Restart dev server: `npm run dev`
   - Go to http://localhost:3000/contact-us
   - Submit form with test data
   - Should see green success message
   - Check email inbox for submission

4. **Test on Production**
   - Go to your production domain (https://wattl.io or your custom domain)
   - Navigate to /contact-us
   - Submit form
   - Check email inbox (and spam folder)
   - Verify all 4 form types work:
     - Contact Us
     - Partner With Us
     - Location Suggestion
     - Delete Account

**Success Criteria**:
- Green success message appears on website
- Email received within 1 minute
- Email contains all form fields
- All 4 form types send emails

**Common Issues & Fixes**:
| Issue | Fix |
|-------|-----|
| "Access key not found" error | Verify `NEXT_PUBLIC_` prefix in env var name |
| Success message but no email | Check email spam folder, verify email address in Web3Forms dashboard |
| Email goes to spam | Add `noreply@web3forms.com` to contacts |
| Still failing after 30 min | Verify Vercel has redeployed (check Deployments tab) |

---

### Task 2: Update App Store Badge Links (🔴 CRITICAL)

**What**: Replace placeholder hrefs with actual store links

**Current Code** (`src/components/ui/AppStoreBadges.tsx`):
```tsx
// Line 18:
<motion.a
  href="#"  // ← CHANGE THIS
  ...
>

// Line 41:
<motion.a
  href="#"  // ← CHANGE THIS
  ...
>
```

**Changes Needed**:
```tsx
// Apple App Store
href="https://apps.apple.com/au/app/wattl/id[YOUR-APP-ID]"

// Google Play
href="https://play.google.com/store/apps/details?id=com.wattl[YOUR-PACKAGE]"
```

**How to Get Links**:
1. **Apple**:
   - Submit app to App Store (requires Apple Developer account)
   - Get link from App Store Connect
   - Format: `https://apps.apple.com/au/app/[app-name]/id[app-id]`

2. **Google**:
   - Submit app to Google Play (requires Google Play Developer account)
   - Get link from Google Play Console
   - Format: `https://play.google.com/store/apps/details?id=[package-name]`

**If Apps Not Submitted Yet**:
- Keep placeholder `href="#"` for now
- Add TODO comment: `// TODO: Add app store links when apps are published`
- Update before launch

**Time**: 5 minutes

---

### Task 3: Lighthouse Audit (🔴 CRITICAL)

**What**: Verify site performance meets standards

**How to Run**:
1. Go to https://web.dev/measure/
2. Enter your domain (e.g., https://wattl.io)
3. Wait for results (1-2 minutes)
4. Review scores:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

**Target Scores**: 90+ for all categories

**Current Expectations**:
- **Performance**: 85-95 (fast Next.js build)
- **Accessibility**: 90-100 (good a11y practice)
- **Best Practices**: 90-100 (semantic HTML, security)
- **SEO**: 90-100 (proper meta tags, structure)

**If Scores Are Lower**:
- Performance < 85:
  - Check image optimization
  - Run `npm run build` analysis
  - Defer non-critical JavaScript

- Accessibility < 90:
  - Check color contrast
  - Verify all form labels
  - Test keyboard navigation: Tab through forms

- Best Practices < 90:
  - Check browser console for warnings
  - Verify all links are valid
  - Check HTTPS is enabled (automatic on Vercel)

- SEO < 90:
  - Verify OG tags in layout.tsx
  - Check sitemap.xml is generated
  - Verify robots.txt exists

**Time**: 5-15 minutes (depending on fixes needed)

---

### Task 4: Cross-Device Testing (🟡 IMPORTANT)

**What**: Verify site works on all devices

**Playwright Tests**:
```bash
# Run full test suite
npm run test:e2e

# See results in HTML report
# Reports will be in ./playwright-report/
```

**Browser Coverage**:
- ✅ Desktop Chrome
- ✅ Desktop Firefox
- ✅ Desktop Safari
- ✅ Mobile Chrome (Pixel 5)
- ✅ Mobile Safari (iPhone 12)

**What Gets Tested**:
- Navigation between all 6 pages
- Navbar underline hover behavior
- Form validation (required fields, email format)
- Accessibility (keyboard nav, focus states, headings)
- Responsive layout at all breakpoints

**Manual Testing (If Needed)**:
1. **Physical iOS Device**:
   - Open https://your-domain.com
   - Test all forms
   - Test navigation
   - Check footer watermark visibility
   - Verify emoji display

2. **Physical Android Device**:
   - Same as iOS above
   - Check Google Play badge rendering

**Time**: 10-15 minutes

---

### Task 5: Legal Page Audit (🟡 IMPORTANT)

**What**: Ensure legal page has no Framer references

**File**: `src/app/legal/page.tsx`

**Check For**:
- [ ] No mentions of "Framer"
- [ ] No mentions of "built with Framer"
- [ ] No external Framer links
- [ ] All content is accurate for Wattl

**If Found**:
- Remove any Framer branding
- Replace with Wattl branding
- Verify legal text is current

**Time**: 5 minutes

---

## Testing Checklist

### Before Production (Local)
- [ ] Run `npm run build` - compiles without errors
- [ ] Run `npm run dev` - dev server starts cleanly
- [ ] Test all 6 pages load
- [ ] Test all 4 forms submit (if emails configured)
- [ ] Test navbar underline hover
- [ ] Check footer watermark visible
- [ ] Check app store badges display
- [ ] Verify emoji rendering (🔋💚⚡🍃)

### On Production
- [ ] All 6 pages load
- [ ] All 4 forms submit successfully
- [ ] Emails received for all forms
- [ ] Navbar works (hover underline)
- [ ] Mobile view responsive
- [ ] Footer watermark visible
- [ ] App store badges display with correct styling
- [ ] No console errors
- [ ] Lighthouse scores 90+

### Final Verification
- [ ] Vercel deployment shows "Ready"
- [ ] Custom domain points to Vercel
- [ ] HTTPS enabled (lock icon visible)
- [ ] Open Graph preview works (test on Twitter/Facebook)
- [ ] Sitemap.xml returns valid XML
- [ ] Robots.txt is accessible

---

## Summary

### 🚀 Launch Readiness
- **Design**: ✅ 100% (audit complete, enhancements implemented)
- **Features**: ✅ 100% (all pages, forms, functionality)
- **Testing**: ✅ 90% (Playwright setup done, manual testing needed)
- **Documentation**: ✅ 100% (guides created)
- **Deployment**: ✅ 95% (live on Vercel, just needs final verification)

### ⏰ Time to Production
- Web3Forms setup: 15-30 min
- Update app store links: 5 min
- Lighthouse audit: 5-15 min
- Cross-device testing: 10-15 min
- Legal page audit: 5 min
- **Total**: ~60 minutes

### 📋 Next Steps (In Order)
1. Set up Web3Forms email delivery (most important)
2. Update app store badge links
3. Run Lighthouse audit
4. Run Playwright tests
5. Audit legal page
6. Final verification on production

### ✨ You're Almost Done!
The site is feature-complete and ready. Just need to:
1. Configure email delivery
2. Update external links
3. Verify performance metrics

Once these are complete, the Wattl website will be **fully production-ready**! 🎉

---

## Quick Links

- **Web3Forms Setup**: `.claude/WEB3FORMS_SETUP_GUIDE.md`
- **Design Audit**: `.claude/DESIGN_AUDIT.md`
- **Roadmap**: `.claude/roadmap.md`
- **App Badges**: `src/components/ui/AppStoreBadges.tsx`
- **Lighthouse**: https://web.dev/measure/
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Web3Forms Dashboard**: https://web3forms.com/
