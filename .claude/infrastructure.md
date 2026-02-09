# Wattl Website Infrastructure

## Technical Architecture

### Frontend Framework
- **Framework:** Next.js 15 (App Router, SSR/SSG — no static export needed)
- **Router:** Next.js App Router (file-based routing under `src/app/`)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4 with custom theme mapping all brand tokens from `content/brand-guidelines.md`
- **Form Handling:** Web3Forms (free tier, no backend needed, emails submissions to owner)
- **Hosting:** Vercel — auto-deploys from GitHub repo, custom domain, HTTPS, edge CDN
- **Animations:** Framer Motion for scroll-triggered and page-load animations

### Key Design Decisions
- **No backend server** — all form submissions go through Web3Forms API
- **No database** — pure marketing site with static/SSG pages
- **No CMS** — content lives in code (sourced from `content/*.md` during development)
- **Vercel-native** — leverages Vercel's built-in SSR, image optimization, and edge CDN

---

## Dependencies

### Core
```json
{
  "next": "^15",
  "react": "^19",
  "react-dom": "^19",
  "typescript": "^5"
}
```

### Libraries
```json
{
  "tailwindcss": "^4",
  "framer-motion": "^11",
  "react-hook-form": "^7",
  "lucide-react": "^0.460",
  "clsx": "^2",
  "tailwind-merge": "^2"
}
```

### Dev Dependencies
```json
{
  "eslint": "^9",
  "prettier": "^3",
  "prettier-plugin-tailwindcss": "^0.6",
  "@playwright/test": "^1"
}
```

---

## Directory Structure

```
Wattl/
├── .claude/                    # AI documentation + skills
│   ├── infrastructure.md       # This file
│   ├── UI_UX.md               # Wireframes & design spec
│   ├── roadmap.md             # Implementation phases
│   └── skills/                # Claude skills
│       ├── frontend-design/
│       └── webapp-testing/
├── content/                    # Page content docs (existing, reference only)
│   ├── brand-guidelines.md
│   ├── home.md
│   ├── partner-with-us.md
│   ├── contact-us.md
│   ├── locations.md
│   ├── legal.md
│   └── delete-account.md
├── inputs/                     # Source brand assets (existing)
│   └── branding/
│       ├── Logo.svg
│       ├── Wattl (dark).png
│       ├── Wattl (light)(2).png
│       ├── Map Icon.svg
│       ├── Backlit Sticker.svg
│       ├── Power Bank Sticker (Updated).svg
│       └── draftpowerstationdesign.png
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── layout.tsx         # Root layout (fonts, metadata, nav, footer)
│   │   ├── page.tsx           # Home (/)
│   │   ├── locations/
│   │   │   └── page.tsx       # /locations
│   │   ├── partner-with-us/
│   │   │   └── page.tsx       # /partner-with-us
│   │   ├── contact-us/
│   │   │   └── page.tsx       # /contact-us
│   │   ├── legal/
│   │   │   └── page.tsx       # /legal
│   │   └── delete-account/
│   │       └── page.tsx       # /delete-account
│   ├── components/
│   │   ├── layout/            # Navbar, Footer, MobileMenu
│   │   ├── ui/                # Button, Card, Input, Textarea, Accordion, SectionWrapper
│   │   ├── sections/          # Hero, HowItWorks, Testimonials, AppDownloadCTA, BenefitsGrid, FAQSection
│   │   └── forms/             # ContactForm, StationRequestForm, SuggestLocationForm, DeleteAccountForm
│   ├── lib/
│   │   ├── web3forms.ts       # Web3Forms submission helper
│   │   └── utils.ts           # clsx + twMerge utility (cn function)
│   └── styles/
│       └── globals.css        # Tailwind directives + CSS variables
├── public/                    # Static assets (images, favicon, app store badges)
│   └── images/
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── .env.local                 # Web3Forms key (gitignored)
├── .gitignore
└── package.json
```

---

## Tailwind Configuration

Maps brand tokens from `content/brand-guidelines.md`:

### Colors
| Token | Hex | Usage |
|---|---|---|
| `brand-yellow` | `#FFC600` | Primary brand colour, hero backgrounds, CTAs |
| `brand-blue` | `#003CA7` | Headings, links, text on light backgrounds |
| `brand-pale-yellow` | `#FCE79E` | Soft backgrounds, cards, section dividers |
| `brand-off-white` | `#FFFFF3` | Page backgrounds, light surfaces |
| `brand-black` | `#000000` | Dark sections, high-contrast text |
| `brand-teal` | `#38AAD4` | Secondary accents, focus indicators |
| `brand-green` | `#208334` | Success states, eco messaging |
| `brand-dark-teal` | `#002C34` | Map elements, dark accents |

### Font Family
| Token | Font | Weights |
|---|---|---|
| `heading` | Poppins | 600, 700 |
| `body` | Inter | 400, 500, 600 |
| `mono` | JetBrains Mono | 400 |

### Spacing
8px base grid: `xs` (4px), `sm` (8px), `md` (16px), `lg` (24px), `xl` (48px), `2xl` (80px), `3xl` (120px)

### Border Radius
| Token | Value |
|---|---|
| `button` | 8px |
| `card` | 12px |
| `input` | 12px |

### Breakpoints
| Name | Value |
|---|---|
| `sm` (mobile) | < 768px |
| `md` (tablet) | 768px–1024px |
| `lg` (desktop) | > 1024px |

### Max Content Width
`1200px`, centered

---

## Environment Variables

`.env.local` (gitignored):
```
NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_access_key_here
```

Single Web3Forms access key — use the `subject` field in each form submission to distinguish form sources (e.g., "Contact Form Submission", "Station Request", "Location Suggestion", "Account Deletion Request").

---

## Forms (4 total, all via Web3Forms)

All forms use `react-hook-form` for validation + Web3Forms API for submission.

| # | Form | Route | Fields |
|---|------|-------|--------|
| 1 | Contact Form | `/contact-us` | Name, Email, Message |
| 2 | Station Request Form | `/partner-with-us` | Venue Name, Contact Person, Email, Phone |
| 3 | Suggest Location Form | `/locations` | Establishment/Occasion, Address, Email |
| 4 | Delete Account Form | `/delete-account` | Name, Email, Reason (optional) |

### Form Submission Flow
1. Client-side validation (react-hook-form)
2. Loading spinner on submit button
3. POST to `https://api.web3forms.com/submit`
4. Success → green checkmark + thank you message (replaces form)
5. Error → red message with retry option
6. Honeypot field for spam protection (hidden input)

---

## Routing

| Path | Page | Notes |
|------|------|-------|
| `/` | Home | Hero, How It Works, Testimonials, App Download CTA |
| `/locations` | Locations | Coming soon hero + suggest-a-location form |
| `/partner-with-us` | Partner With Us | Benefits grid + station request form |
| `/contact-us` | Contact Us | FAQ accordion + contact form |
| `/legal` | Legal | Tabbed Terms of Service + Refund Policy |
| `/delete-account` | Delete Account | Account deletion request form |

### Special Navigation
- "How It Works" nav link → smooth-scroll to `#how-it-works` on home page
- From other pages → navigates to `/#how-it-works`

---

## Google Fonts

Loaded in root layout via `next/font/google`:
- **Poppins** — weights 600, 700
- **Inter** — weights 400, 500, 600
- **JetBrains Mono** — weight 400

---

## Brand Note for `frontend-design` Skill

The `frontend-design` skill advises against using Inter as a body font. However, **Wattl's brand guidelines explicitly specify Inter for body text**. The brand guidelines in `content/brand-guidelines.md` are the source of truth for this project — Inter is the correct body font for Wattl.
