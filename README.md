# Hope Presbyterian Church — Website

The official website for Hope Presbyterian Church in Columbus, OH. Built with Next.js, designed for clarity, accessibility, and ease of maintenance.

---

## Table of Contents

- [Quick Start](#quick-start)
- [What You Need](#what-you-need)
- [Project Overview](#project-overview)
- [Common Tasks](#common-tasks)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [For Developers](#for-developers)
- [Deployment](#deployment)
- [Future: Content Management](#future-content-management)

---

## Quick Start

**To run the site locally:**

1. Open Terminal (Mac) or Command Prompt (Windows).
2. Navigate to the project folder: `cd hope` (or wherever the project lives).
3. Install dependencies (first time only): `npm install`
4. Start the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

The site will auto-refresh when you save changes to files.

---

## What You Need

- **Node.js** (version 18 or newer) — [Download](https://nodejs.org/)
- **npm** — Comes with Node.js
- A code editor (e.g. [VS Code](https://code.visualstudio.com/)) — optional but helpful

---

## Project Overview

| Item | Details |
|------|---------|
| **Framework** | Next.js 14 (React) |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Language** | TypeScript |
| **Live URL** | [hopechurchcolumbus.org](https://www.hopechurchcolumbus.org) |

The site is a static, pre-rendered site. Pages are built ahead of time for fast loading and good SEO.

---

## Common Tasks

### Viewing the site locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Building for production

```bash
npm run build
```

Creates an optimized version of the site in the `.next` folder.

### Running the production build locally

```bash
npm run build
npm run start
```

### Checking code quality

```bash
npm run lint
```

---

## Editing Content

### Home page sections

The home page is built from components in `src/components/home/`:

| Section | File | What to edit |
|---------|------|--------------|
| Hero (top banner) | `Hero.tsx` | Headline, tagline, CTAs |
| Audience cards | `AudienceCards.tsx` | First Timer, Families, OSU cards |
| Latest sermon | `LatestSermon.tsx` | Sermon title, date, description |
| Mission banner | `MissionBanner.tsx` | Mission statement |
| Upcoming events | `UpcomingEvents.tsx` | Event list |
| Home groups | `HomeGroups.tsx` | Group names and links |
| Testimonials | `Testimonials.tsx` | Quotes and attributions |
| By the numbers | `ByTheNumbers.tsx` | Stats (year founded, etc.) |
| Connect CTA | `ConnectCTA.tsx` | Plan a Visit, Give, Contact cards |

### Navigation and footer

- **Navigation:** `src/components/Navbar.tsx` — Edit the `nav` array to add, remove, or reorder menu items.
- **Footer:** `src/components/Footer.tsx` — Edit `footerLinks` and contact info.

### Adding or editing a page

Pages live in `src/app/`. Each page is a folder with a `page.tsx` file.

**Example: editing the About page**

1. Open `src/app/about/page.tsx`.
2. Change the `ComingSoon` title or replace it with full page content.
3. Save the file.

**Example: adding a new page**

1. Create a folder: `src/app/my-new-page/`
2. Add `page.tsx` with at least:

   ```tsx
   export default function Page() {
     return <div>My new page content</div>;
   }
   ```

3. Add the route to the Navbar if it should appear in the menu.

### Site-wide metadata (SEO)

- **Root metadata:** `src/app/layout.tsx` — Title, description, Open Graph, etc.
- **Per-page metadata:** Each page can export `metadata` (see existing pages for examples).
- **Helper:** `src/lib/metadata.ts` — Use `pageMetadata()` for consistent SEO across pages.

---

## Project Structure

```
hope/
├── public/                 # Static assets (images, favicon)
│   ├── logo-reversed.png
│   └── hope-kids-slide-graphic-2019.png
├── src/
│   ├── app/                # Pages and app-wide setup
│   │   ├── layout.tsx      # Root layout (navbar, footer, fonts)
│   │   ├── page.tsx        # Home page
│   │   ├── globals.css     # Global styles
│   │   ├── not-found.tsx   # 404 page
│   │   ├── sitemap.ts      # SEO sitemap
│   │   ├── robots.ts       # SEO robots.txt
│   │   └── [page]/         # One folder per route
│   │       └── page.tsx
│   ├── components/         # Reusable UI components
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ComingSoon.tsx  # Placeholder for in-progress pages
│   │   └── home/           # Home page sections
│   ├── design-tokens.ts    # Brand colors (single source of truth)
│   └── lib/
│       └── metadata.ts     # SEO metadata helper
├── tailwind.config.ts     # Tailwind + design tokens
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

---

## Design System

### Brand colors

Colors are defined in `src/design-tokens.ts` and used across the site.

| Name | Hex | Use |
|------|-----|-----|
| Hope Blue | `#356F8E` | Primary brand, header, hero |
| Harbor White | `#F2F5F6` | Light backgrounds |
| Deep Harbor | `#173A4A` | Footer, dark sections |
| Skywash | `#6FA3BD` | Hover states, secondary UI |
| Sandstone | `#CBB89D` | Neutral backgrounds |
| Lantern Gold | `#C9A24D` | CTAs, accents |
| Sprout Green | `#6E8F7A` | Limited use (growth, Easter) |

**To change a color:** Edit `src/design-tokens.ts`. The Tailwind config imports these values, so updates apply site-wide.

### Typography

- **Headings:** DM Serif Text (serif)
- **Body:** DM Sans (sans-serif)

Fonts are loaded in `src/app/layout.tsx`.

### Reusable styles

Defined in `src/app/globals.css`:

- `.btn-primary` — Gold CTA button
- `.btn-outline` — White outline (for dark backgrounds)
- `.btn-outline-dark` — Dark outline (for light backgrounds)
- `.section-label` — Small uppercase label above headings
- `.container-hope` — Max-width content container
- `.divider-gold` — Gold horizontal line
- `.grain-overlay` — Subtle texture overlay

---

## For Developers

### Tech stack

- **Next.js 14** — App Router, React Server Components
- **TypeScript** — Type safety
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations (with `reducedMotion="user"` support)
- **PostCSS** — CSS processing

### Key files

| File | Purpose |
|------|---------|
| `tailwind.config.ts` | Theme, colors, fonts, spacing |
| `src/design-tokens.ts` | Brand colors and semantic tokens |
| `src/app/layout.tsx` | Root layout, metadata, structured data |
| `src/lib/metadata.ts` | Per-page SEO metadata helper |

### Environment

No environment variables are required for basic development. For production, ensure the correct `baseUrl` is used in:

- `src/app/layout.tsx` (structured data)
- `src/app/sitemap.ts`
- `src/app/robots.ts`
- `src/lib/metadata.ts`

### Accessibility

- Skip link for keyboard users
- Focus-visible styles on interactive elements
- ARIA labels and roles on nav, modals, and carousels
- Reduced motion support
- Semantic HTML and heading hierarchy

### SEO

- Per-page metadata (title, description)
- Open Graph and Twitter Card tags
- Sitemap at `/sitemap.xml`
- `robots.txt` at `/robots.txt`
- Church schema (JSON-LD) in the layout

---

## Deployment

The site is a static Next.js app. It can be deployed to:

- **Vercel** (recommended) — Connect the repo and deploy automatically
- **Netlify** — Similar setup
- **Any static host** — Run `npm run build` and serve the `.next` output (or use `next export` if configured)

**Build command:** `npm run build`  
**Output directory:** `.next` (or as configured)

---

## Future: Content Management

The codebase is prepared for **Sanity CMS** integration. Comments in `LatestSermon.tsx` and `Testimonials.tsx` indicate where content would be fetched from Sanity instead of hardcoded data.

Planned content types:

- Sermons (title, date, video URL, series, speaker)
- Testimonials (quote, name, context)
- Events
- Home groups

---

## Getting Help

- **Next.js docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Project questions:** Contact the development team or church operations.
