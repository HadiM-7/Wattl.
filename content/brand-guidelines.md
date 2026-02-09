# Wattl Brand Guidelines — Website Reference

> These guidelines govern the visual identity, tone, and UI styling for the Wattl website. All decisions should reinforce Wattl's core personality: **energetic, approachable, eco-conscious, and trustworthy**.

---

## 1. Brand Overview

**Wattl** is Australia's first dedicated power bank rental network. Users scan a QR code at a bright yellow kiosk, grab a portable charger, and return it at any station when they're done.

### Brand Personality
| Trait | Expression |
|---|---|
| **Energetic** | Bold colours, punchy copy, dynamic illustrations |
| **Approachable** | Friendly language, playful mascot artwork, rounded UI elements |
| **Eco-conscious** | Nature-inspired supporting palette (greens, teals), sustainability messaging |
| **Trustworthy** | Clean layouts, payment-partner logos, clear calls-to-action |

### Tone of Voice
- **Casual but confident** — speak like a knowledgeable friend, not a corporation.
- **Action-oriented** — lead with verbs: "Grab a charger", "Find a station", "Stay connected".
- **Positive & reassuring** — frame problems as already solved: "Don't let a dead battery kill the vibe."
- Avoid jargon, overly technical language, or passive voice.

---

## 2. Color Palette

### 2.1 Primary Colors

| Swatch | Name | Hex | RGB | Usage |
|---|---|---|---|---|
| 🟡 | **Golden Yellow** | `#FFC600` | 255, 198, 0 | Primary brand colour. Machine colour. Hero backgrounds, CTAs, accent highlights, icon fills |
| 🔵 | **Deep Blue** | `#003CA7` | 0, 60, 167 | Primary text on light backgrounds, headings, logo, links, button text on yellow |

These two colours form the core of the Wattl identity. Every page should feature both.

### 2.2 Secondary Colors

| Swatch | Name | Hex | RGB | Usage |
|---|---|---|---|---|
| 🟡 | **Pale Yellow** | `#FCE79E` | 252, 231, 158 | Soft backgrounds, cards, section dividers. Logo background colour |
| ⬜ | **Off-White** | `#FFFFF3` | 255, 255, 243 | Page backgrounds, light-mode surfaces |
| ⚫ | **Rich Black** | `#000000` | 0, 0, 0 | Dark sections (How It Works, Footer), high-contrast text |

### 2.3 Supporting / Accent Colors

| Swatch | Name | Hex | RGB | Usage |
|---|---|---|---|---|
| 🟦 | **Teal** | `#38AAD4` | 56, 170, 212 | Secondary accents, info states, hover effects |
| 🟩 | **Forest Green** | `#208334` | 32, 131, 52 | Success states, eco/sustainability messaging |
| 🟫 | **Dark Teal** | `#002C34` | 0, 44, 52 | Map/location elements, dark accent backgrounds |

### 2.4 Color Usage Rules

1. **Yellow (#FFC600) is the hero colour.** Use it for primary CTAs, hero section backgrounds, highlighted text, and any visual representing the physical machines.
2. **Deep Blue (#003CA7) on yellow** is the primary text-on-colour combination.
3. **Black sections** use white text with yellow accents (headings, icons, underlines).
4. **White/Off-white sections** use Deep Blue for headings and Rich Black for body text.
5. **Never place yellow text on white** — insufficient contrast.
6. **Never place blue text on black** — insufficient contrast.
7. Maintain a minimum contrast ratio of **4.5:1** for body text and **3:1** for large text (WCAG AA).

---

## 3. Typography

### 3.1 Recommended Font Stack

| Role | Font | Weight | Fallback |
|---|---|---|---|
| **Headings** | **Poppins** | 700 (Bold), 600 (Semi-Bold) | `'Segoe UI', Arial, sans-serif` |
| **Body** | **Inter** | 400 (Regular), 500 (Medium) | `'Segoe UI', Arial, sans-serif` |
| **UI / Buttons** | **Inter** | 600 (Semi-Bold) | `'Segoe UI', Arial, sans-serif` |
| **Monospace (code/stats)** | **JetBrains Mono** | 400 | `'Courier New', monospace` |

> Both Poppins and Inter are freely available via Google Fonts. They pair well: Poppins provides a rounded, friendly display style while Inter is highly legible at small sizes.

### 3.2 Type Scale

| Element | Size (desktop) | Size (mobile) | Line Height | Letter Spacing |
|---|---|---|---|---|
| H1 (Hero) | 56px | 36px | 1.1 | -0.02em |
| H2 (Section) | 40px | 28px | 1.2 | -0.01em |
| H3 (Card title) | 24px | 20px | 1.3 | 0 |
| Body | 16px | 16px | 1.6 | 0 |
| Small / Caption | 14px | 13px | 1.4 | 0.01em |
| Button | 14px | 14px | 1.0 | 0.05em (uppercase) |

### 3.3 Typography Rules

- Headings are **sentence case** unless used as a tagline or CTA (then UPPERCASE is acceptable).
- The brand name is always written as **Wattl.** (with a period). The period uses Golden Yellow (`#FFC600`) when on dark backgrounds.
- Emphasised words within headings can be set in *italic* and/or a contrasting colour (yellow on dark, blue on light).
- Maximum line length for body text: **75 characters** for readability.

---

## 4. Logo Usage

### 4.1 Primary Logo
- **File:** `inputs/branding/Logo.svg`
- **Format:** 800×800px square, pale yellow (#FCE79E) background with Deep Blue (#003CA7) letterforms and Golden Yellow (#FFC600) accents.
- **Use case:** Favicon source, app icons, social media profile images, and anywhere a contained square mark is needed.

### 4.2 Wordmark — Dark Variant (for light backgrounds)
- **File:** `inputs/branding/Wattl (dark).png`
- **Description:** Solid Deep Blue (#003CA7) filled letterforms with a Golden Yellow (#FFC600) period. Transparent background.
- **Use case:** Navigation bars, headers, footers, and any placement on **white, off-white, or pale yellow backgrounds**.
- This is the **default wordmark** for the website.

### 4.3 Wordmark — Light Variant (for dark backgrounds)
- **File:** `inputs/branding/Wattl (light)(2).png`
- **Description:** Deep Blue (#003CA7) outlined/stroked letterforms (hollow) with a Golden Yellow (#FFC600) period. Transparent background.
- **Use case:** Dark sections (Hero overlays, footer, "How It Works" black backgrounds), dark photography overlays, and any placement on **black, dark blue, or dark teal backgrounds**.

### 4.4 Wordmark Selection Guide

| Background | Wordmark Variant | File |
|---|---|---|
| White / Off-White / Pale Yellow | **Dark** (solid fill) | `Wattl (dark).png` |
| Black / Dark sections | **Light** (outlined) | `Wattl (light)(2).png` |
| Golden Yellow (#FFC600) | **Dark** (solid fill) | `Wattl (dark).png` |
| Photography / Busy imagery | **Light** (outlined) + dark overlay | `Wattl (light)(2).png` |

### 4.5 Placement Rules

| Rule | Specification |
|---|---|
| **Minimum size** | 40px height (digital) |
| **Clear space** | Minimum padding equal to the height of the "W" on all sides |
| **On light backgrounds** | Use the Dark wordmark (`Wattl (dark).png`) — solid filled letters |
| **On dark backgrounds** | Use the Light wordmark (`Wattl (light)(2).png`) — outlined letters |
| **Square/icon contexts** | Use the Primary Logo (`Logo.svg`) |
| **Never** | Stretch, rotate, recolour arbitrarily, add drop shadows, or place on busy imagery without a container or overlay |

### 4.6 Wordmark Notes
- Always include the period — it is part of the brand name.
- The period is always Golden Yellow (#FFC600) in both variants.
- Do not recreate the wordmark in a regular font — always use the provided assets.
- When the wordmark appears in navigation, use the Dark variant at a maximum height of 40px.

---

## 5. Imagery & Illustration Style

### 5.1 Photography Direction
- **Bright, natural lighting** — avoid heavy filters or dark, moody shots.
- **Context:** Show the machines in real-world settings — festivals, restaurants, venues, public spaces.
- **People:** Diverse, candid, mid-action (using phones, socialising). Avoid posed stock photography.
- **Colour grading:** Warm tones that complement the yellow/blue palette.

### 5.2 Illustration Style
- Inspired by the **draftpowerstationdesign.png** and **Power Bank Sticker** assets.
- **Playful, hand-drawn feel** with bold outlines and saturated fills.
- Nature motifs: plants, leaves, birds — reinforcing the eco-conscious identity.
- Colour palette should draw from the brand colours (yellow, blue, green, teal).
- Use illustrations for: empty states, onboarding, feature explanations, 404 pages.

### 5.3 Iconography
- **Style:** Rounded line icons, 2px stroke, consistent 24×24px grid.
- **Colour:** Deep Blue or white (on dark backgrounds). Yellow for active/highlighted states.
- Use icons from a consistent set (e.g., Lucide, Phosphor) — do not mix icon libraries.

---

## 6. UI Component Guidelines

### 6.1 Buttons

| Type | Background | Text | Border | Usage |
|---|---|---|---|---|
| **Primary** | `#FFC600` (Yellow) | `#003CA7` (Blue) | none | Main CTAs: "Find a Station", "Get the App" |
| **Secondary** | `transparent` | `#003CA7` (Blue) | 2px `#003CA7` | Secondary actions: "Learn More", "Contact Us" |
| **Dark** | `#000000` (Black) | `#FFFFFF` (White) | none | CTAs on yellow/light backgrounds |
| **Ghost** | `transparent` | `#FFFFFF` (White) | 2px `#FFFFFF` | CTAs on dark backgrounds |

- **Border radius:** 8px (all buttons)
- **Padding:** 12px 24px (desktop), 10px 20px (mobile)
- **Text:** Uppercase, Semi-Bold (600), 14px, letter-spacing 0.05em
- **Hover:** Slight brightness shift (±10%) and subtle scale transform (1.02)
- **Focus:** 3px outline offset using Teal (#38AAD4)

### 6.2 Cards

- **Background:** White (`#FFFFFF`) or Pale Yellow (`#FCE79E`)
- **Border:** 1px solid `#E0E0E0` (light) or none on coloured backgrounds
- **Border radius:** 12px
- **Shadow:** `0 2px 8px rgba(0, 0, 0, 0.08)` — subtle, not heavy
- **Padding:** 24px (desktop), 16px (mobile)
- **Testimonial cards** use Golden Yellow (`#FFC600`) background with Rich Black text

### 6.3 Navigation

- **Desktop:** Horizontal top bar, sticky on scroll
- **Background:** White with subtle bottom border, or transparent over hero sections
- **Logo:** Left-aligned, links to home
- **Nav links:** Deep Blue, 14px Semi-Bold, uppercase
- **Active link:** Underline using Golden Yellow (3px)
- **Mobile:** Hamburger menu, full-screen overlay with dark background and white links
- **CTA in nav:** Primary button style ("Get the App" or "Find a Station")

### 6.4 Form Elements

- **Input fields:** 48px height, 12px border-radius, 1px `#CCCCCC` border
- **Focus state:** Border changes to Deep Blue (`#003CA7`), subtle blue glow
- **Labels:** 14px Medium (500), Deep Blue
- **Error state:** Red (`#D32F2F`) border + inline error text
- **Success state:** Forest Green (`#208334`) border + checkmark icon

### 6.5 Section Layout Patterns

| Section Type | Background | Text Color | Accent |
|---|---|---|---|
| **Hero** | Golden Yellow `#FFC600` | Deep Blue `#003CA7` | Black button |
| **Feature / How It Works** | Rich Black `#000000` | White `#FFFFFF` | Yellow icons & highlights |
| **Social Proof** | White `#FFFFFF` | Black / Deep Blue | Yellow testimonial cards |
| **CTA Banner** | Rich Black `#000000` | White `#FFFFFF` | Yellow accent text |
| **Partner / Info** | Off-White `#FFFFF3` | Deep Blue / Black | Blue links, yellow accents |

---

## 7. Machine Representation

The physical Wattl kiosks are the most tangible expression of the brand. When depicting them on the website:

- **Colour accuracy:** The machines are **Golden Yellow (#FFC600)**. Always represent them in this colour — never desaturate or recolour.
- **Label:** Machines display "Borrow a power bank" and the Wattl logo.
- **Context:** Show machines in situ — at venues, festivals, restaurants — to communicate accessibility.
- **Hero image:** The machine should feature prominently in the hero section.
- **Illustrations:** When illustrated (not photographed), follow the playful style from `draftpowerstationdesign.png` — bold outlines, nature motifs, warm palette.
- **Map markers:** Use the Map Icon style (`inputs/branding/Map Icon.svg`) — dark circular background with golden stroke — for the locations page.

---

## 8. Spacing & Layout

### 8.1 Spacing Scale (8px base)

| Token | Value | Usage |
|---|---|---|
| `xs` | 4px | Inline icon gaps |
| `sm` | 8px | Tight spacing, input padding |
| `md` | 16px | Card padding (mobile), element gaps |
| `lg` | 24px | Card padding (desktop), section inner gaps |
| `xl` | 48px | Section padding (mobile) |
| `2xl` | 80px | Section padding (desktop) |
| `3xl` | 120px | Hero section padding |

### 8.2 Grid

- **Max content width:** 1200px, centered
- **Columns:** 12-column grid (desktop), 4-column (mobile)
- **Gutter:** 24px (desktop), 16px (mobile)
- **Breakpoints:**
  - Mobile: < 768px
  - Tablet: 768px–1024px
  - Desktop: > 1024px

---

## 9. Accessibility

### 9.1 Color Contrast Reference

| Combination | Contrast Ratio | WCAG Level |
|---|---|---|
| Deep Blue on White | **8.9:1** | AAA |
| Deep Blue on Pale Yellow | **7.2:1** | AAA |
| Deep Blue on Golden Yellow | **5.1:1** | AA |
| Black on Golden Yellow | **12.6:1** | AAA |
| White on Black | **21:1** | AAA |
| White on Deep Blue | **8.9:1** | AAA |
| Yellow on Black | **12.6:1** | AAA |

### 9.2 Accessibility Rules

1. All interactive elements must have visible **focus indicators** (3px Teal outline).
2. Images of machines and products must have descriptive **alt text**.
3. Do not rely on colour alone to convey meaning — pair with icons or text labels.
4. Minimum touch target size: **44×44px** (mobile).
5. Ensure all animations respect `prefers-reduced-motion`.
6. Form errors must be announced to screen readers with `aria-live` regions.

---

## 10. Payment Partner Display

- Based on `inputs/branding/Backlit Sticker.svg`, the site may display accepted payment methods.
- **Supported:** Visa, Mastercard, Amex, Google Pay, Apple Pay, PayPal.
- Display payment icons in a horizontal row, greyscale by default, full colour on hover.
- Place in the footer or checkout/pricing section.

---

## 11. Asset Reference

| Asset | File | Purpose |
|---|---|---|
| Primary Logo | `inputs/branding/Logo.svg` | Favicon source, app icons, square contexts |
| Wordmark (Dark) | `inputs/branding/Wattl (dark).png` | Navigation, headers, footers on light backgrounds |
| Wordmark (Light) | `inputs/branding/Wattl (light)(2).png` | Navigation, headers, footers on dark backgrounds |
| Map Icon | `inputs/branding/Map Icon.svg` | Location markers on map |
| Payment Partners | `inputs/branding/Backlit Sticker.svg` | Payment method display |
| Product Sticker | `inputs/branding/Power Bank Sticker (Updated).svg` | Marketing/promotional use |
| Station Design | `inputs/branding/draftpowerstationdesign.png` | Illustration style reference |

---

## Quick Reference — Do's and Don'ts

### Do
- Use **Golden Yellow + Deep Blue** as the primary pairing
- Write the brand name as **Wattl.** (with a yellow period on dark backgrounds)
- Keep copy short, active, and friendly
- Show machines in real-world contexts
- Maintain generous white space between sections

### Don't
- Place yellow text on white backgrounds
- Use more than 3 colours in a single section
- Stretch or modify the logo
- Use cold, corporate, or overly formal language
- Add heavy drop shadows or gradients to UI elements
