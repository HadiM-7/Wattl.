# Wattl Website Implementation Roadmap

## Phase 1: Project Setup & Infrastructure

- [ ] Initialize Next.js 15 project with TypeScript, Tailwind CSS v4, App Router, `src/` directory
- [ ] Configure `next.config.ts` (image optimization, metadata defaults)
- [ ] Set up Tailwind theme with full brand token mapping from `content/brand-guidelines.md`
  - Colors: `brand-yellow`, `brand-blue`, `brand-pale-yellow`, `brand-off-white`, `brand-black`, `brand-teal`, `brand-green`, `brand-dark-teal`
  - Font families: `heading` (Poppins), `body` (Inter), `mono` (JetBrains Mono)
  - Spacing scale (8px base), border radius tokens, breakpoints
- [ ] Import Google Fonts in root layout via `next/font/google` (Poppins 600/700, Inter 400/500/600, JetBrains Mono 400)
- [ ] Copy and optimize brand assets from `inputs/branding/` to `public/images/`
- [ ] Install dependencies: `framer-motion`, `react-hook-form`, `lucide-react`, `clsx`, `tailwind-merge`
- [ ] Configure ESLint + Prettier with `prettier-plugin-tailwindcss`
- [ ] Set up Web3Forms account + add access key to `.env.local`
- [ ] Create `src/lib/utils.ts` with `cn()` helper (clsx + twMerge)
- [ ] Create `src/lib/web3forms.ts` submission helper

## Phase 2: Layout Components

- [ ] Root layout (`src/app/layout.tsx`) — HTML metadata, Open Graph defaults, font classes, Navbar + Footer wrapper
- [ ] Navbar component (desktop: sticky with scroll-aware transparent → white+blur bg; mobile: hamburger → full-screen dark overlay)
- [ ] Footer component (3-column dark layout with payment partner logos, light wordmark)
- [ ] Wave/curve section divider SVG components (reusable, configurable top/bottom colors)
- [ ] UI atoms:
  - [ ] Button (4 variants: Primary/Yellow, Secondary/Outline, Dark, Ghost)
  - [ ] Card (white + yellow variants, rounded corners, hover lift)
  - [ ] Input + Textarea (48px height, focus states, error states)
  - [ ] Accordion (smooth height animation, dark bg + yellow text)
  - [ ] SectionWrapper (max-width container, responsive padding)

## Phase 3: Home Page

- [ ] Hero section — two-column layout, Golden Yellow bg with radial gradient, station image overflowing section by ~40px, leaf illustrations, stagger fade-in animation
- [ ] How It Works section — 3 numbered cards on Rich Black bg, icon animations (pulse/glow), scroll-triggered stagger entrance, `id="how-it-works"` anchor
- [ ] Testimonials / Social Proof section — Off-White bg, stats with animated counter (JetBrains Mono), 3 Golden Yellow testimonial cards (slightly rotated 1-2deg), bird illustration accent
- [ ] App Download CTA section — Rich Black bg, centred layout, floating lightning bolt illustrations, app store badges (tilted ~2deg)

## Phase 4: Secondary Pages

- [ ] **Locations** (`/locations`) — Golden Yellow coming soon hero with map pin illustrations + Pale Yellow section with suggest-a-location form (Web3Forms)
- [ ] **Partner With Us** (`/partner-with-us`) — Golden Yellow hero with 3x2 white benefits cards (icons animated on scroll) + Pale Yellow station request form (Web3Forms)
- [ ] **Contact Us** (`/contact-us`) — Golden Yellow FAQ accordion section (6 questions with corrected Q4-6 answers) + Rich Black contact form section with phone number (Web3Forms)
- [ ] **Legal** (`/legal`) — Off-White tabbed layout (Terms of Service + Refund Policy), clean reading typography (max 75ch), sidebar table of contents on desktop
- [ ] **Delete Account** (`/delete-account`) — Rich Black two-column layout + account deletion form (Web3Forms)

## Phase 5: Polish & Optimization

- [ ] Responsive testing at 375px (mobile), 768px (tablet), 1200px+ (desktop)
- [ ] Accessibility audit:
  - [ ] Contrast ratios (WCAG AA minimum)
  - [ ] `aria-live` regions for form submissions
  - [ ] Keyboard navigation and visible focus indicators (3px Teal outline)
  - [ ] Screen reader testing
  - [ ] `prefers-reduced-motion: reduce` support for all animations
- [ ] SEO:
  - [ ] Open Graph tags per page
  - [ ] `robots.txt` and `sitemap.xml`
  - [ ] Organization structured data (JSON-LD)
- [ ] Performance:
  - [ ] `next/image` optimization for all images
  - [ ] `font-display: swap` for web fonts
  - [ ] Bundle analysis and optimization
- [ ] Playwright tests:
  - [ ] Navigation between all pages
  - [ ] Form validation (required fields, email format)
  - [ ] Form submission success/error states
  - [ ] Visual regression screenshots

## Phase 6: Deployment

- [ ] Push to GitHub repository
- [ ] Connect repo to Vercel, configure build settings
- [ ] Configure custom domain on Vercel
- [ ] Enable HTTPS (automatic on Vercel)
- [ ] Production verification:
  - [ ] All pages render correctly
  - [ ] Form email delivery (all 4 forms)
  - [ ] Cross-browser testing (Chrome, Firefox, Safari, Edge)
  - [ ] Mobile device testing
  - [ ] Lighthouse audit: target 90+ in all categories (Performance, Accessibility, Best Practices, SEO)
- [ ] Update legal page to remove any "hosted on Framer" references

---

## Notes

- "How It Works" nav link should smooth-scroll to `#how-it-works` on home page, navigate to `/#how-it-works` from other pages
- FAQ answers Q4-Q6 use the corrected content from `UI_UX.md` (not the original Framer site content)
- Brand guidelines in `content/brand-guidelines.md` are the source of truth for all design tokens
- The `frontend-design` skill's font advice (avoid Inter) is overridden by brand guidelines — Inter is correct for Wattl body text
