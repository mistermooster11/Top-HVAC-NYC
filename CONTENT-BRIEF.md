# Top HVAC NYC — Content Brief
**QuickFlip Sites | Build Log**
Date: May 2026
Prospect: https://hvacairconditionersnyc.com/
Template: PipeMonkey-Redesign
Reference site: https://ae-nyc-plumbing.vercel.app/contact-us (contact page layout only)

---

## Source Material Summary

- **Business Name:** Top HVAC NYC
- **Phone:** (646) 493-4904
- **Service Area:** All of Manhattan, NYC
- **Services:** Full HVAC suite — 18 services across Heating, Air Conditioning, Air Quality, Maintenance
- **Differentiators:** Licensed & insured, same-day service, upfront pricing, all major brands serviced, commercial & residential
- **Social Media:** Twitter @tophvac_nyc, Yelp listing
- **Review Rating:** 4.8★ (200+ Google reviews per public profile)
- **Testimonials:** No specific reviews were extracted from the source site — all 3 testimonials are generated placeholders (flagged for replacement)
- **Business Hours:** Not confirmed — placeholder used throughout (Mon–Fri 8am–6pm)

---

## Service Inventory

All 18 services extracted and mapped. No merges, no omissions.

1. Heating Repair
2. Heating Maintenance
3. Heating Installation
4. Heat Pumps
5. Furnace Service
6. Ductless Mini Split AC Systems
7. AC Repair
8. AC Installation
9. HVAC Maintenance
10. Indoor Air Quality
11. Duct Replacement
12. Duct Sealing
13. Duct Cleaning
14. Air Scrubber
15. Maintenance Program
16. UV Germicidal Lights
17. Thermostats
18. Zone Systems

---

## Services Consolidated

None. All 18 services kept as separate entries in `crafts.ts` and `service-pages.tsx`.

---

## Pages Built & Content Decisions

### Homepage (`app/page.tsx`)
Template default retained. All homepage content driven by hardcoded components (Hero, Announcements, Difference, Insights, Testimonial, HomeCTA) — all updated to Top HVAC NYC content.

### Hero Component
- H1: "Manhattan's HVAC Specialists — Repair, Install & Maintain"
- Subhead: Heating, cooling, air quality — licensed & insured, same-day, all major brands
- CTA: Call (646) 493-4904

### Announcements Component (How It Works)
- Title: "Honest Diagnosis. Upfront Price. Done Right."
- 3 steps: Diagnose → Approve & Repair → Test & Confirm
- Image placeholder retained (flagged for replacement)

### Difference Component (Trust Stats)
- "Same-Day" emergency service, "4.8★" / 200+ Google Reviews, "100%" Upfront Pricing
- Subheading: "Why Top HVAC NYC"

### Testimonial Component
- All 3 reviews are generated placeholders — must be replaced with real Google reviews before launch

### HomeCTA Component
- "HVAC Problem? Call Now." copy with Manhattan-specific framing

### AccordionItems
- 4 accordion entries: AC Repair, Heating Repair, Ductless Mini Split, HVAC Maintenance
- Each has 4 steps and links to the matching service slug

### Insights Component
- Sub-heading copy updated to reference HVAC services

---

### Services Catalog (`app/craft-catalog/page.tsx`)
Data file: `data/craft-catalog/crafts.ts`

All 18 HVAC services mapped with proper slugs, categories (Heating / Air Conditioning / Air Quality / Maintenance), and disciplines (Residential / Commercial). CATEGORIES and DISCIPLINES arrays exported for template compatibility.

---

### Service Detail Pages (`data/craft-catalog/service-pages.tsx`)
All 18 slugs have full `ServicePage` entries including:
- `overviewContent` — 1–2 paragraph service description
- `sections` — "When You Need It" + "Our Process"
- `relatedServices` — 2–3 related service slugs
- `bgImage` placeholder

Phone constants `PHONE_DISPLAY` and `PHONE_TEL` used throughout to ensure consistency.

---

### Programs/Services Overview (`data/programs.tsx`)
8 cards for key services (AC Repair, Heating Repair, AC Installation, Heating Installation, Ductless Mini Split, HVAC Maintenance, Indoor Air Quality, Maintenance Program). Exports both named `programsData` and `export default programsData` to handle either import style.

---

### Channel/About Data (`data/channel/top-hvac-nyc.tsx`)
Full `ChannelPageData` for Top HVAC NYC. 6 `craftLinks` pointing to key service slugs. Registered in `data/channel/index.ts` as `"top-hvac-nyc"`.

---

### FAQs Page (`app/general-faqs/page.tsx`)
8 HVAC-specific FAQs for Manhattan homeowners:
1. Same-day response time
2. Upfront pricing policy
3. System types serviced (all major brands)
4. Repair vs. replacement guidance
5. Apartment / co-op / commercial building service
6. Manhattan service area (all neighborhoods listed)
7. Recommended maintenance frequency
8. Ductless mini splits in older NYC buildings

---

### Contact Page (`app/contact-us/page.tsx`)
- A&E NYC Plumbing-inspired 2-column layout: contact form (left) + Google Map (right)
- `align-items: stretch` on the grid so both columns are the same height
- Form uses `display: flex; flex-direction: column` with `flex: 1` on the textarea container and `flex: 1; min-height: 0` on textarea to fill available height
- HVAC service dropdown (10 options)
- Manhattan-centered map embed (TODO: replace with actual address)
- Contact info strip (phone, service area, hours)

---

### Gallery Page (`app/gallery/page.tsx`)
4 before/after placeholder cards: AC Repair, Mini Split Install, Heating Repair, HVAC Maintenance. All image slots flagged for replacement with real job photos.

---

### Service Areas Page (`app/service-areas/page.tsx`)
4 Manhattan zones with localized HVAC context:
1. Upper Manhattan (Harlem–Inwood) — pre-war building specialists
2. Upper East Side & Upper West Side — co-op/condo service
3. Midtown Manhattan — commercial HVAC focus
4. Downtown Manhattan — loft and high-rise specialists

Each zone: description, 3 callouts, full neighborhood list.

---

### Blog Page (`app/blog/page.tsx`)
6 HVAC-relevant placeholder article titles and excerpts. Categories: AC Tips, Homeowner Guide, How It Works, Maintenance, Air Quality. All flagged as TODO for real content.

---

### Privacy Policy (`app/privacy-policy/page.tsx`)
Updated: company name → Top HVAC NYC, phone → (646) 493-4904, service area → Manhattan NY.

---

### Layout (`app/layout.tsx`)
- Root metadata: title, description, canonical, openGraph, twitter tags — all populated
- LocalBusiness JSON-LD (`HVACBusiness` schema type) with real business data
- Default "Create Next App" title replaced

---

### SEO Files
- `app/robots.ts` — blocks all crawlers (staging mode); update `disallow` to `allow` for production
- `app/sitemap.ts` — covers all standard routes + all 18 service slugs via `crafts` import

---

## Navigation Changes

Template mega-dropdown simplified to 4 flat items in `lib/constants/mainNavItems.ts` (typed as `MainNavItem[]`).
Topnav: phone bar updated to "(646) 493-4904 — Same-Day Service Available".

---

## Copy Generation Log

**Generated (must replace with real content before launch):**
- All 3 testimonials in `Testimonial.tsx`
- All 6 blog post titles/excerpts in `app/blog/page.tsx`

**Generated (fills content gap — structurally accurate):**
- "How It Works" 3-step process in `Announcements.tsx`
- Service area zone descriptions in `app/service-areas/page.tsx`
- All FAQ answers in `app/general-faqs/page.tsx`
- `data/channel/top-hvac-nyc.tsx` intro/about copy
- Gallery card labels

**Extracted from source site:**
- Business name, phone, service area
- All 18 service names and descriptions
- Key differentiators (same-day, upfront pricing, licensed & insured, all brands)

---

## SEO Scaffolding

| Item | Status | Notes |
|------|--------|-------|
| robots.ts | ✅ Created | Disallows all crawlers — change to `allow: '/'` for production |
| sitemap.ts | ✅ Created | Covers standard routes + all 18 service slugs |
| LocalBusiness JSON-LD | ✅ Added to layout.tsx | Schema type: `HVACBusiness` |
| Root metadata (title, description, OG, Twitter) | ✅ Done | Real data populated |
| Production domain | ⚠️ TODO | Replace `[TODO: production-domain]` in robots.ts, sitemap.ts, layout.tsx |
| Business hours | ⚠️ TODO | Confirm with client — placeholder: Mon-Fri 8am-6pm |
| OG image (1200×630) | ⚠️ TODO | `/og-image.jpg` not yet provided |

---

## TODOs for Client Before Launch

| Item | File | Notes |
|------|------|-------|
| Replace logo | `Topnav.tsx`, `Footer.tsx` | Replace `/logos/logo-94.svg` and `/logos/logo-long.svg` |
| Hero video / image | `Hero.tsx` | Current src is NCCER stock video — replace with Top HVAC NYC content |
| Job site / technician photos | `Difference.tsx`, `Announcements.tsx` | Replace `/images/IMG_9750-*.jpg` placeholders |
| Real testimonials (3) | `Testimonial.tsx` | All 3 are AI-generated placeholders |
| Before/after gallery photos (4+) | `app/gallery/page.tsx` | All image slots are placeholders |
| Contact form embed | `app/contact-us/page.tsx` | Replace `<form>` with HubSpot, JotForm, Gravity Forms, etc. |
| Google Maps embed | `app/contact-us/page.tsx` | Replace generic Manhattan embed with actual address |
| Blog posts | `app/blog/page.tsx` | All 6 are placeholders — replace or remove page |
| Production domain | `robots.ts`, `sitemap.ts`, `layout.tsx` | Replace all 3 `[TODO: production-domain]` instances |
| Business hours | `layout.tsx`, `Footer.tsx` | Confirm actual hours |
| OG image | `public/og-image.jpg` | 1200×630 branded image for social sharing |
| Twitter URL | `Footer.tsx` | Verify `https://twitter.com/tophvac_nyc` is correct handle |
| Yelp URL | `Footer.tsx` | Verify Yelp listing URL is the correct business page |
| Service page hero images | `data/craft-catalog/service-pages.tsx` | All 18 `bgImage` slots point to placeholders |
