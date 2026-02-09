# Wattl Website Implementation Roadmap

## Phase 1: Project Setup & Infrastructure

- [x] Initialize Next.js 15 project with TypeScript, Tailwind CSS v4, App Router, `src/` directory
- [x] Configure `next.config.ts` (image optimization, metadata defaults)
- [x] Set up Tailwind theme with full brand token mapping from `content/brand-guidelines.md`
  - [x] Colors: `brand-yellow`, `brand-blue`, `brand-pale-yellow`, `brand-off-white`, `brand-black`, `brand-teal`, `brand-green`, `brand-dark-teal`
  - [x] Font families: `heading` (Poppins), `body` (Inter), `mono` (JetBrains Mono)
  - [x] Spacing scale (8px base), border radius tokens, breakpoints
- [x] Import Google Fonts in root layout via `next/font/google` (Poppins 600/700, Inter 400/500/600, JetBrains Mono 400)
- [x] Copy and optimize brand assets from `inputs/branding/` to `public/images/`
- [x] Install dependencies: `framer-motion`, `react-hook-form`, `lucide-react`, `clsx`, `tailwind-merge`
- [ ] Configure ESLint + Prettier with `prettier-plugin-tailwindcss`
- [x] Set up Web3Forms account + add access key to `.env.local`
- [x] Create `src/lib/utils.ts` with `cn()` helper (clsx + twMerge)
- [x] Create `src/lib/web3forms.ts` submission helper

## Phase 2: Layout Components

- [x] Root layout (`src/app/layout.tsx`) — HTML metadata, Open Graph defaults, font classes, Navbar + Footer wrapper
- [x] Navbar component (desktop: sticky with scroll-aware transparent → white+blur bg; mobile: hamburger → full-screen dark overlay)
- [x] Footer component (3-column dark layout with payment partner logos, light wordmark)
- [x] Wave/curve section divider SVG components (reusable, configurable top/bottom colors)
- [x] UI atoms:
  - [x] Button (4 variants: Primary/Yellow, Secondary/Outline, Dark, Ghost)
  - [x] Card (white + yellow variants, rounded corners, hover lift)
  - [x] Input + Textarea (48px height, focus states, error states)
  - [x] Accordion (smooth height animation, dark bg + yellow text)
  - [x] SectionWrapper (max-width container, responsive padding)

## Phase 3: Home Page

- [x] Hero section — two-column layout, Golden Yellow bg with radial gradient, station image overflowing section by ~40px, leaf illustrations, stagger fade-in animation
- [x] How It Works section — 3 numbered cards on Rich Black bg, icon animations (pulse/glow), scroll-triggered stagger entrance, `id="how-it-works"` anchor
- [x] Testimonials / Social Proof section — Off-White bg, stats with animated counter (JetBrains Mono), 3 Golden Yellow testimonial cards (slightly rotated 1-2deg), bird illustration accent
- [x] App Download CTA section — Rich Black bg, centred layout, floating lightning bolt illustrations, app store badges (tilted ~2deg)

## Phase 4: Secondary Pages

- [x] **Locations** (`/locations`) — Golden Yellow coming soon hero with map pin illustrations + Pale Yellow section with suggest-a-location form (Web3Forms)
- [x] **Partner With Us** (`/partner-with-us`) — Golden Yellow hero with 3x2 white benefits cards (icons animated on scroll) + Pale Yellow station request form (Web3Forms)
- [x] **Contact Us** (`/contact-us`) — Golden Yellow FAQ accordion section (6 questions with corrected Q4-6 answers) + Rich Black contact form section with phone number (Web3Forms)
- [x] **Legal** (`/legal`) — Off-White tabbed layout (Terms of Service + Refund Policy), clean reading typography (max 75ch), sidebar table of contents on desktop
- [x] **Delete Account** (`/delete-account`) — Rich Black two-column layout + account deletion form (Web3Forms)

## Phase 5: Polish & Optimization

- [~] Responsive testing at 375px (mobile), 768px (tablet), 1200px+ (desktop) — Ready for cross-device testing
- [~] Accessibility audit:
  - [ ] Contrast ratios (WCAG AA minimum)
  - [ ] `aria-live` regions for form submissions
  - [x] Keyboard navigation and visible focus indicators (3px Teal outline)
  - [ ] Screen reader testing
  - [x] `prefers-reduced-motion: reduce` support for all animations
- [~] SEO:
  - [x] Open Graph tags per page
  - [x] `robots.txt` and `sitemap.xml`
  - [x] Organization structured data (JSON-LD)
- [ ] Performance:
  - [ ] `next/image` optimization for all images
  - [x] `font-display: swap` for web fonts
  - [ ] Bundle analysis and optimization
- [x] Playwright tests:
  - [x] Navigation between all pages (e2e/navigation.spec.ts)
  - [x] Form validation (required fields, email format) (e2e/forms.spec.ts)
  - [x] Accessibility compliance (e2e/accessibility.spec.ts)
  - [ ] Visual regression screenshots (ready to capture)

## Phase 6: Deployment

- [x] Push to GitHub repository
- [x] Connect repo to Vercel, configure build settings
- [x] Configure custom domain on Vercel
- [x] Enable HTTPS (automatic on Vercel)
- [~] Production verification:
  - [x] All pages render correctly
  - [ ] Form email delivery (all 4 forms)
  - [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
  - [ ] Mobile device testing
  - [ ] Lighthouse audit: target 90+ in all categories (Performance, Accessibility, Best Practices, SEO)
- [ ] Update legal page to remove any "hosted on Framer" references


## Phase 7: Audit & Design Enhancements

### 7.1: UX/Design Audit
- [x] Run UX audit (comprehensive UI/UX review) — See `.claude/DESIGN_AUDIT.md`
- [x] Audit front-end design consistency across pages
- [ ] Verify app store badge compliance:
  - [ ] Replace placeholder badges with official Apple App Store assets
  - [ ] Replace placeholder badges with official Google Play assets
  - [ ] Test badge rendering and compliance

### 7.2: Design Refinements & Brand Playfulness
- [x] Fix navbar "How It Works" underline behavior — now only shows on hover (not persistent)
- [x] Enhance visual playfulness with strategic emoji usage:
  - [x] Add 🔋 battery emoji to hero section with float animation
  - [x] Add 💚 heart emoji to testimonials section with fade-in animation
  - [x] Enhanced ⚡ lightning bolts in app download CTA section
  - [x] All emoji accents use accessibility `aria-hidden="true"`
- [x] Add branded "Wattl." watermark at footer bottom
  - [x] Subtle gradient text treatment (opacity: 5%, rotated -15deg)
  - [x] Responsive positioning (bottom-right corner)

### 7.3: Final Polish & QA
- [ ] Run Lighthouse audit: target 90+ in all categories (Performance, Accessibility, Best Practices, SEO)
- [ ] Test across browsers: Chrome, Firefox, Safari, Edge (Playwright configured)
- [ ] Mobile device testing: iOS and Android (Playwright mobile emulation configured)
- [ ] Verify all form submissions work end-to-end (Web3Forms email delivery)
- [ ] Final visual regression comparison against design specs (ready after Playwright setup)


---

## Notes

- "How It Works" nav link should smooth-scroll to `#how-it-works` on home page, navigate to `/#how-it-works` from other pages
- FAQ answers Q4-Q6 use the corrected content from `UI_UX.md` (not the original Framer site content)
- Brand guidelines in `content/brand-guidelines.md` are the source of truth for all design tokens
- The `frontend-design` skill's font advice (avoid Inter) is overridden by brand guidelines — Inter is correct for Wattl body text
