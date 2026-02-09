# Wattl Website UI/UX Specification

## Design Philosophy — Warmer, More Alive

The current Framer site feels cold and corporate. The redesign should feel **warm, human, and energetic**:

- **Visual Warmth:** Golden Yellow is the dominant colour — not just backgrounds, but flowing shapes, wave dividers, and organic curves between sections instead of harsh straight edges
- **Playful Illustration:** Use the hand-drawn illustration style from `draftpowerstationdesign.png` — nature motifs (leaves, birds, plants) woven around section transitions and empty spaces
- **Human Touch:** Candid photography of real people at real venues using power banks. Warm colour grading. Avoid sterile stock imagery
- **Micro-interactions:** Buttons that glow on hover, icons that subtly animate, cards that lift with shadow on hover — small details that make the site feel alive
- **Organic Layout:** Rounded corners everywhere (12-16px), wave/curve section dividers instead of flat lines, overlapping elements that break the grid slightly
- **Conversational Tone:** Copy should feel like talking to a friend, not reading a brochure

---

## Navigation

### Desktop
- Sticky top bar
- Dark wordmark left-aligned, nav links + CTA button right-aligned
- Transparent over hero → white background + blur/shadow on scroll
- Nav links: 14px Semi-Bold uppercase, Deep Blue
- Active link: Golden Yellow 3px underline with subtle glow

### Mobile
- Hamburger icon → full-screen dark overlay
- Large white nav links with yellow CTA button
- Smooth slide-in animation

---

## Wireframes

The wireframes below emphasise warmth and personality over the current flat Framer design. Key design changes:
- **Wave/curve dividers** between sections instead of sharp edges
- **Overlapping elements** (station image breaks out of its container, testimonial cards overlap the section boundary)
- **Floating illustrations** (leaves, lightning bolts) as decorative accents
- **Warmer section transitions** using organic shapes

---

### 1. Home — Hero

```
+------------------------------------------------------------------+
| [Wattl. (dark)]  Home  How It Works  Locations  ...  [FIND A STN]|
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
| (Golden Yellow #FFC600 background with subtle radial gradient)    |
|                                                                    |
|  ~leaf illustration~                                               |
|                                                                    |
|  —— Portable Power Bank Rentals        |                          |
|                                         |    [Station Image]       |
|  Don't Let a Dead                      |    (Overflows below      |
|  Battery Kill                           |     the section by ~40px |
|  the *Vibe*                             |     creating depth)      |
|                                         |                          |
|  Australia's first dedicated power      |    ~plant illustration   |
|  bank rental network. Grab a charger,   |     wrapping around      |
|  stay connected, return it when done.   |     station base~        |
|                                         |                          |
|  [FIND A STATION] (Black btn, rounded)  |                          |
|  [SEE HOW IT WORKS] (Ghost link, arrow) |                          |
|                                                                    |
+~~~~~ (organic wave divider, yellow → black transition) ~~~~~~~~~~~+
```

---

### 2. Home — How It Works

```
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
| (Rich Black #000 background)                                      |
|                                                                    |
|               Fast Charging,                                       |
|               *Zero Hassle.* (yellow italic, larger)               |
|                                                                    |
|  Portable banks that fit in your pocket. Compatible with           |
|  Lightning, USB-C, and Micro-USB.                                  |
|                                                                    |
|  +------------------+ +------------------+ +------------------+   |
|  | [Large QR Icon]  | | [Lightning bolt] | | [MapPin Icon]    |  |
|  |  ~animated~      | |  ~yellow glow~   | |  ~yellow pulse~  |  |
|  |                  | |                  | |                  |  |
|  | **01**           | | **02**           | | **03**           |  |
|  | Scan the         | | Charge on        | | Return           |  |
|  | QR Code          | | the Go           | | Anywhere         |  |
|  |                  | |                  | |                  |  |
|  | Instantly unlock | | High-speed       | | Done? Drop it at |  |
|  | a power bank at  | | charging for all | | any station in   |  |
|  | any station. No  | | major devices.   | | the network.     |  |
|  | app needed.      | | Stay moving.     | | Easy.            |  |
|  +------------------+ +------------------+ +------------------+   |
|  (Cards: dark bg, subtle yellow border, lift on hover)            |
|  (Cards stagger-animate in from below on scroll)                  |
|                                                                    |
+~~~~~ (wave divider, black → white transition) ~~~~~~~~~~~~~~~~~~~+
```

- Section anchor: `id="how-it-works"`

---

### 3. Home — Testimonials / Social Proof

```
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
| (Off-White #FFFFF3 background)                                    |
|                                                                    |
|  ~small leaf accent, top-left~                                    |
|                                                                    |
|  Saved by *Wattl.*                 | +-------------------------+ |
|  (yellow period, blue text)        | | (Yellow #FFC600 card)   | |
|                                     | | ★★★★★                  | |
|  Real stories from those who        | | "My phone died right   | |
|  stayed connected thanks to our     | |  before the headliner  | |
|  stations. When the battery drops,  | |  at Glastonbury..."    | |
|  we bring the energy.               | | — Sarah Chen           | |
|                                     | |   Knockout 2025        | |
|  ┌─────────────────┐               | +-------------------------+ |
|  │  5+              │               |   +-------------------------+|
|  │  LOCATIONS       │ (JetBrains   |   | (Yellow card, slightly  ||
|  │  ~counter anim~  │  Mono, large)|   |  overlapping card above)||
|  ├─────────────────┤               |   | "The fast charging..." ||
|  │  200+            │               |   | — Ash Berry            ||
|  │  PHONES SAVED    │               |   |   Burwood RSL          ||
|  │  ~counter anim~  │               |   +-------------------------+
|  └─────────────────┘               |     +------------------------+
|                                     |     | "Lost my group..."   |
|  ~bird illustration~               |     | — Phillip Keynes     |
|                                     |     |   GYG Restaurant     |
|                                     |     +------------------------+
|  (Cards slightly rotated 1-2deg for organic feel)                 |
+~~~~~ (wave divider, white → black) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
```

---

### 4. Home — App Download CTA

```
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
| (Rich Black #000 background, centred layout)                      |
|                                                                    |
|  ~lightning bolt illustrations floating in corners~                |
|                                                                    |
|               INSTANT ENERGY (small yellow tag)                    |
|                                                                    |
|          GET THE APP,                                              |
|          GET THE *POWER.* (yellow)                                 |
|                                                                    |
|  Download Wattl. now to locate stations and rent                   |
|  powerbanks instantly. Join the network that keeps                 |
|  you connected anywhere, anytime.                                  |
|                                                                    |
|  [App Store Badge]   [Google Play Badge]                           |
|  (Badges slightly tilted ~2deg for playfulness)                   |
|                                                                    |
|  ~small leaf accent~                                               |
|                                                                    |
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
```

---

### 5. Footer (Global)

```
+------------------------------------------------------------------+
| (Rich Black #000 background)                                      |
|                                                                    |
|  Product              Partners              Wattl                  |
|  ──────               ────────              ─────                  |
|  Home                 Partner with us       About                  |
|  How it works         Contact support       Legal                  |
|  Locations            App download          Delete Account         |
|                                                                    |
|  ─────────────────────────────────────────────────────             |
|                                                                    |
|  [Wattl. (light wordmark)]                                        |
|                                                                    |
|  [Visa] [MC] [Amex] [GPay] [APay] [PayPal]                       |
|  (greyscale icons, colour on hover)                                |
|                                                                    |
|  © 2026 Wattl Charging PTY LTD. All rights reserved.              |
|                                                                    |
+------------------------------------------------------------------+
```

---

### 6. Locations Page

```
+------------------------------------------------------------------+
| [Navbar]                                                          |
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
| (Golden Yellow background with floating map pin illustrations)    |
|                                                                    |
|          [Map Pin illustration, large, playful]                   |
|                                                                    |
|          Locations coming soon :)                                  |
|          We're rolling out across Australia.                       |
|          Stay tuned!                                               |
|                                                                    |
+~~~~~ (wave divider) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
| (Pale Yellow #FCE79E background)                                  |
|                                                                    |
|  Want Wattl. at your local?         | ESTABLISHMENT / OCCASION    |
|                                      | [________________________]  |
|  Tell us where we should launch      |                             |
|  next. We go where the crowd goes.   | ADDRESS                     |
|  From cafes to festivals, suggest    | [________________________]  |
|  a hotspot and we'll power up.       |                             |
|                                      | EMAIL                       |
|  ~Station illustration~             | [________________________]  |
|                                      |                             |
|                                      | [SUBMIT] (Dark btn)         |
+------------------------------------------------------------------+
| [Footer]                                                          |
+------------------------------------------------------------------+
```

---

### 7. Partner With Us Page

```
+------------------------------------------------------------------+
| [Navbar]                                                          |
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
| (Golden Yellow #FFC600 background)                                |
|                                                                    |
|          Free Stations,                                            |
|          *Passive Income.* (Deep Blue, italic)                     |
|                                                                    |
|  +----------------+ +----------------+ +----------------+         |
|  | [$] (yellow    | | [Clock]        | | [Check]        |         |
|  |  icon, large)  | |                | |                |         |
|  |                | |                | |                |         |
|  | Revenue Share  | | Boost Dwell    | | Reduce Staff   |         |
|  |                | | Time           | | Disruptions    |         |
|  | Every rental   | | Patrons stay   | | Let staff      |         |
|  | nets you       | | longer, less   | | focus on       |         |
|  | passive revenue| | anxiety        | | service        |         |
|  +----------------+ +----------------+ +----------------+         |
|  +----------------+ +----------------+ +----------------+         |
|  | [Smiley]       | | [QR]           | | [Infinity]     |         |
|  | Drive New      | | Enhance        | | 0 Cost,        |         |
|  | Traffic        | | Customer Exp.  | | Ever           |         |
|  | Attract nearby | | Modern amenity,| | No surprise    |         |
|  | app users      | | build loyalty  | | fees. We       |         |
|  |                | |                | | handle it all  |         |
|  +----------------+ +----------------+ +----------------+         |
|  (White cards with subtle shadow, icons animated on scroll)       |
|                                                                    |
+~~~~~ (wave divider, yellow → pale yellow) ~~~~~~~~~~~~~~~~~~~~~~~+
| (Pale Yellow background, centred form)                            |
|                                                                    |
|          Request a station                                         |
|          Fill out the form and our team will                       |
|          get back to you within 24 hours                           |
|                                                                    |
|          VENUE NAME        [________________________]              |
|          CONTACT PERSON    [________________________]              |
|          EMAIL ADDRESS     [________________________]              |
|          PHONE NUMBER      [________________________]              |
|                            [REQUEST STATION] (Dark btn)            |
|                                                                    |
+------------------------------------------------------------------+
| [Footer]                                                          |
+------------------------------------------------------------------+
```

---

### 8. Contact Us — FAQ Section

```
+------------------------------------------------------------------+
| [Navbar]                                                          |
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
| (Golden Yellow #FFC600 background)                                |
|                                                                    |
|  Frequently Asked               | +----------------------------+ |
|  Questions                       | | How is the rental pricing  | |
|                                  | | calculated?            [v] | |
|  Answers about pricing,         | |                            | |
|  lost power banks, and          | | $2 per half hour, $20 max  | |
|  charging speeds. We're here    | | per 24hrs.                 | |
|  to keep you powered up.        | +----------------------------+ |
|                                  | | What happens if I lose     | |
|  ~lightning bolt illustration~  | | the power bank?        [+] | |
|                                  | +----------------------------+ |
|                                  | | Return to different        | |
|                                  | | station?               [+] | |
|                                  | +----------------------------+ |
|                                  | | What cables are            | |
|                                  | | attached?              [+] | |
|                                  | +----------------------------+ |
|                                  | | How fast do power banks    | |
|                                  | | charge?                [+] | |
|                                  | +----------------------------+ |
|                                  | | Station full when I try    | |
|                                  | | to return?             [+] | |
|                                  | +----------------------------+ |
|  (Accordion items: dark bg, yellow text, smooth expand)           |
+~~~~~ (wave divider, yellow → black) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
```

---

### 9. Contact Us — Contact Form

```
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
| (Rich Black #000 background)                                      |
|                                                                    |
|  Send Us a                          | FULL NAME                   |
|  *Message* (yellow)                 | [e.g. John Doe__________]  |
|                                      |                             |
|  Having an issue with a station      | EMAIL ADDRESS               |
|  or payment? Let us know. Our        | [e.g. email@gmail.com__]   |
|  dedicated support team is ready     |                             |
|  to resolve your power needs.        | MESSAGE                     |
|                                      | [Describe your issue____]  |
|  Or call us on:                      | [________________________]  |
|  **0423 234 799** (yellow, large)    | [________________________]  |
|                                      |                             |
|  ~phone icon illustration~          | [SEND MESSAGE] (Ghost btn) |
+------------------------------------------------------------------+
| [Footer]                                                          |
+------------------------------------------------------------------+
```

---

### 10. Legal Page

```
+------------------------------------------------------------------+
| [Navbar]                                                          |
+------------------------------------------------------------------+
| (Off-White #FFFFF3 background)                                    |
|                                                                    |
|  Terms and Conditions                                              |
|  (Deep Blue H1, yellow underline accent)                          |
|                                                                    |
|  ┌─────────────────────────────────────────────┐                  |
|  │ [Terms of Service]  |  [Refund Policy]      │ (tab nav)       |
|  └─────────────────────────────────────────────┘                  |
|                                                                    |
|  OVERVIEW                                                          |
|  This website is operated by Wattl Charging PTY LTD...            |
|                                                                    |
|  SECTION 1 - ONLINE STORE TERMS                                   |
|  ...                                                               |
|                                                                    |
|  (Clean reading typography, max 75ch line length)                 |
|  (Sidebar table of contents on desktop for quick navigation)      |
|                                                                    |
+------------------------------------------------------------------+
| [Footer]                                                          |
+------------------------------------------------------------------+
```

---

### 11. Delete Account Page

```
+------------------------------------------------------------------+
| [Navbar]                                                          |
+------------------------------------------------------------------+
| (Rich Black #000 background)                                      |
|                                                                    |
|  Delete your account              | FULL NAME                     |
|                                    | [e.g. John Doe___________]   |
|  If you wish to permanently        |                               |
|  delete your Wattl account and     | EMAIL ADDRESS                 |
|  associated data, fill out the     | [e.g. email@gmail.com___]    |
|  form and we'll process your       |                               |
|  request.                          | REASON (optional)             |
|                                    | [Why do you want to delete]  |
|                                    | [your account?___________]   |
|                                    |                               |
|                                    | [SUBMIT REQUEST] (Ghost btn) |
+------------------------------------------------------------------+
| [Footer]                                                          |
+------------------------------------------------------------------+
```

---

### 12. Mobile Responsive — Home Page

```
+-----------------------------+
| [Wattl.]        [Hamburger] |
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
| (Yellow bg, gradient)       |
|                             |
| ~leaf~                      |
|                             |
| —— Portable Power Bank     |
|    Rentals                  |
|                             |
| Don't Let a Dead            |
| Battery Kill                |
| the *Vibe*                  |
|                             |
| Australia's first...        |
|                             |
| [FIND A STATION]            |
| [SEE HOW IT WORKS →]       |
|                             |
|    [Station Image]          |
|    (full width, with        |
|     plant illustrations     |
|     wrapping base)          |
|                             |
+~~ (wave divider) ~~~~~~~~~~+
| (Black bg)                  |
|                             |
| Fast Charging,              |
| *Zero Hassle.*              |
|                             |
| +-------------------------+ |
| | [QR Icon ~animated~]    | |
| | **01** Scan the QR Code | |
| | Instantly unlock...     | |
| +-------------------------+ |
| +-------------------------+ |
| | [Zap ~glow~]            | |
| | **02** Charge on the Go | |
| | High-speed charging...  | |
| +-------------------------+ |
| +-------------------------+ |
| | [Pin ~pulse~]           | |
| | **03** Return Anywhere  | |
| | Done? Drop it at any... | |
| +-------------------------+ |
+~~ (wave divider) ~~~~~~~~~~+
| (Off-White bg)              |
|                             |
| Saved by *Wattl.*          |
|                             |
| 5+ LOCATIONS                |
| 200+ PHONES SAVED           |
|                             |
| +-------------------------+ |
| | ★★★★★                  | |
| | "My phone died..."     | |
| | — Sarah, Knockout 2025 | |
| +-------------------------+ |
| (more cards stacked below)  |
+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~+
```

---

## FAQ Content (Corrected Answers)

**Q1: How is the rental pricing calculated?**
A: $2 per half hour, $20 max per 24hrs.

**Q2: What happens if I lose the power bank?**
A: A replacement fee will be charged to your account. Contact support if you have questions.

**Q3: Can I return to a different station?**
A: Yes! Return your power bank to any Wattl station in the network.

**Q4: What cables are attached?**
A: Each power bank comes with three built-in cables — Lightning (iPhone), USB-C, and Micro-USB — so you're covered no matter what device you carry. No need to bring your own cable.

**Q5: How fast do the power banks charge?**
A: Our power banks deliver fast charging at up to 10W output. Most phones get a meaningful boost in just 15-20 minutes — enough to get you through the rest of your night.

**Q6: What if the station is full when I try to return it?**
A: If a station has no empty slots, simply use the app to find the nearest station with availability. You won't be charged extra while you make your way to another return point.

---

## Animation Specifications

| Element | Animation | Details |
|---------|-----------|---------|
| Hero text | Staggered fade-in | Delay: 0, 0.1, 0.2, 0.3s on load |
| Sections | Fade up on scroll | Framer Motion `whileInView` |
| How It Works cards | Stagger slide-up | Triggered when section enters viewport |
| Testimonial cards | Hover lift | Shadow increase + subtle scale on hover |
| Stats counters | Number counter | Animated count-up when section enters view |
| Buttons | Hover feedback | `scale(1.02)` + brightness ±10% (CSS transitions) |
| Accordion | Expand/collapse | Smooth height transition with Framer Motion |
| Navbar | Scroll-aware bg | Transparent → white bg + backdrop-blur + shadow |
| Section dividers | Wave SVGs | Organic wave shapes for section transitions |
| How It Works icons | Pulse/glow | Subtle animation on the step icons |
| All animations | Accessibility | Respect `prefers-reduced-motion: reduce` |

---

## Form Behavior

### Validation
- Client-side validation via `react-hook-form`
- Required fields: inline error messages on blur/submit
- Email format validation
- Phone format validation (partner form)

### Submission Flow
1. User fills form → validation on submit
2. Submit button shows loading spinner
3. POST to Web3Forms API with `subject` field identifying form source
4. **Success:** Green checkmark icon + thank you message replaces the form
5. **Error:** Red error message with retry button
6. Honeypot spam protection (hidden `botcheck` field)

### Accessibility
- `aria-live="polite"` region for form status announcements
- Focus management: move focus to success/error message after submission
- All inputs have associated `<label>` elements
- Error messages linked to inputs via `aria-describedby`
