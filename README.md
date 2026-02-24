# Hope Presbyterian Church — Website

The official website for Hope Presbyterian Church in Columbus, OH (Evangelical Presbyterian Church). Built with Next.js and Sanity CMS, designed for clarity, accessibility, and ease of maintenance.

---

## Table of Contents

- [Quick Start](#quick-start)
- [What You Need](#what-you-need)
- [Project Overview](#project-overview)
- [Environment Setup](#environment-setup)
- [Common Tasks](#common-tasks)
- [Editing Content](#editing-content)
- [Content Management (Sanity)](#content-management-sanity)
- [Project Structure](#project-structure)
- [Design System](#design-system)
- [For Developers](#for-developers)
- [Deployment](#deployment)
- [Getting Help](#getting-help)

---

## Quick Start

**To run the site locally:**

1. Open Terminal (Mac) or Command Prompt (Windows).
2. Navigate to the project folder: `cd hope` (or wherever the project lives).
3. Install dependencies (first time only): `npm install`
4. Create `.env.local` with your Sanity credentials (see [Environment Setup](#environment-setup)).
5. Start the development server: `npm run dev`
6. Open [http://localhost:3000](http://localhost:3000) in your browser.

The site will auto-refresh when you save changes to files.

**To edit content:** Open [http://localhost:3000/studio](http://localhost:3000/studio) to access Sanity Studio.

---

## What You Need

- **Node.js** (version 18 or newer) — [Download](https://nodejs.org/)
- **npm** — Comes with Node.js
- **Sanity account** — For content management ([sanity.io](https://www.sanity.io/))
- A code editor (e.g. [VS Code](https://code.visualstudio.com/)) — optional but helpful

---

## Project Overview

| Item | Details |
|------|---------|
| **Framework** | Next.js 14 (React) |
| **CMS** | Sanity |
| **Styling** | Tailwind CSS |
| **Animations** | Framer Motion |
| **Language** | TypeScript |
| **Live URL** | [hopechurchcolumbus.org](https://www.hopechurchcolumbus.org) |

The site uses Sanity for sermons, events, testimonials, home groups, staff, and more. Pages are pre-rendered at build time for fast loading and good SEO.

---

## Environment Setup

Create a `.env.local` file in the project root with:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

**To get these values:**

1. Go to [sanity.io/manage](https://www.sanity.io/manage)
2. Create a project (or use an existing one)
3. Copy the Project ID from the project settings
4. The dataset is usually `production` (or `development` for testing)

Without these variables, the site will run but content from Sanity will not load. The home page will show empty sections for sermons, events, testimonials, and home groups.

---

## Common Tasks

### Viewing the site locally

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

### Editing content (no code required)

1. Run `npm run dev`
2. Open [http://localhost:3000/studio](http://localhost:3000/studio)
3. Log in with your Sanity account
4. Edit sermons, events, testimonials, home groups, staff, and the alert banner

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

### Via Sanity Studio (recommended)

Most content is managed in Sanity Studio at `/studio`:

| Content | Where in Studio |
|--------|-----------------|
| Sermons | Content → Sermons |
| Events | Content → Events |
| Testimonials | Content → Testimonials |
| Home Groups | Content → Home Groups |
| Staff & Leadership | Content → Staff & Leadership |
| Alert Banner | Content → ⚠️ Alert Banner |
| Page Hero Images | Content → Page Hero Images |

### Via code (hardcoded sections)

Some content lives directly in component files:

**Home page sections:**

| Section | File | What to edit |
|---------|------|--------------|
| Hero (headline, tagline) | `src/components/home/Hero.tsx` | Headline, tagline, CTAs |
| Audience cards | `src/components/home/AudienceCards.tsx` | First Timer, Families, OSU cards |
| Mission banner | `src/components/home/MissionBanner.tsx` | Mission statement |
| By the numbers | `src/components/home/ByTheNumbers.tsx` | Stats (year founded, etc.) |
| Connect CTA | `src/components/home/ConnectCTA.tsx` | Plan a Visit, Give, Contact cards |

**Inner pages (full content):**

| Page | Content file |
|------|-------------|
| Plan a Visit (`/visit`) | `src/app/visit/VisitContent.tsx` |
| What to Expect (`/what-to-expect`) | `src/app/what-to-expect/WhatToExpectContent.tsx` |
| Mission, Vision & Values (`/mission-vision-values`) | `src/app/mission-vision-values/MVVContent.tsx` |
| Our Story (`/our-story`) | `src/app/our-story/OurStoryContent.tsx` |
| What We Believe (`/what-we-believe`) | `src/app/what-we-believe/WhatWeBelieveContent.tsx` |
| Give (`/give`) | `src/app/give/GiveContent.tsx` |
| Hope Kids & Youth (`/kids`) | `src/app/kids/KidsContent.tsx` |

**Pages still using `ComingSoon` (not yet built):**
`/about`, `/contact`, `/directions`, `/events`, `/mercy`, `/news`

**Sanity-driven inner pages** (content comes from Studio, component is the display layer):

| Page | Content component | Sanity schema |
|------|-------------------|---------------|
| Leadership (`/leadership`) | `LeadershipContent.tsx` | `staffMember` |
| Sermons (`/sermons`) | `SermonsContent.tsx` | `sermon` |
| Home Groups (`/groups`) | `GroupsContent.tsx` | `homeGroup` |

### Navigation and footer

- **Navigation:** `src/components/Navbar.tsx` — Edit the `nav` array to add, remove, or reorder menu items.
- **Footer:** `src/components/Footer.tsx` — Edit `footerLinks` and contact info.

### Adding or editing a page

Pages live in `src/app/`. Each page is a folder with a `page.tsx` file.

**Example: editing an existing built page (e.g. Give)**

1. Open `src/app/give/GiveContent.tsx`.
2. Edit the hardcoded content, copy, or layout.
3. Save — the dev server will hot-reload.

**Example: building out a placeholder page (e.g. About)**

1. Create `src/app/about/AboutContent.tsx` as a `"use client"` component with your content.
2. Update `src/app/about/page.tsx` to import and render `AboutContent` instead of `ComingSoon`.
3. Add a `PageHero` at the top with a label, heading, and subheading.

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

## Content Management (Sanity)

Sanity Studio is embedded at `/studio`. Content editors can manage:

- **Sermons** — Title, date, series, speaker, scripture, description, video URL, thumbnail
- **Events** — Title, date, time, location, description, link
- **Testimonials** — Quote, name, context
- **Home Groups** — Name, schedule, type, link
- **Staff & Leadership** — Name, role, bio, image
- **Alert Banner** — Site-wide banner (enabled/disabled, message, optional link)
- **Page Hero Images** — Hero images per page (e.g. home)

### Sanity project structure

```
src/sanity/
├── config.ts       # Studio config, schema registration
├── client.ts       # Sanity client, sanityFetch helper
├── queries.ts      # GROQ queries for fetching content
├── types.ts        # TypeScript types for Sanity documents
└── schemas/        # Document schemas
    ├── sermon.ts
    ├── event.ts
    ├── testimonial.ts
    ├── homeGroup.ts
    ├── staffMember.ts
    ├── alertBanner.ts
    └── pageHero.ts
```

### Adding a new content type

1. Create a schema in `src/sanity/schemas/`
2. Register it in `src/sanity/schemas/index.ts`
3. Add it to the Studio structure in `src/sanity/config.ts`
4. Create a GROQ query in `src/sanity/queries.ts`
5. Add the TypeScript type in `src/sanity/types.ts`
6. Fetch and render in your page or component

---

## Project Structure

```
hope/
├── public/                 # Static assets (images, favicon)
│   ├── logo-reversed.png
│   └── hope-kids-slide-graphic-2019.png
├── src/
│   ├── app/                # Pages and app-wide setup
│   │   ├── layout.tsx      # Root layout (fonts, metadata, SiteShell)
│   │   ├── page.tsx        # Home page (fetches from Sanity)
│   │   ├── globals.css     # Global styles
│   │   ├── not-found.tsx   # 404 page
│   │   ├── sitemap.ts      # SEO sitemap
│   │   ├── robots.ts       # SEO robots.txt
│   │   ├── studio/         # Sanity Studio (embedded at /studio)
│   │   └── [page]/         # One folder per route
│   │       └── page.tsx
│   ├── components/         # Reusable UI components
│   │   ├── SiteShell.tsx   # Layout wrapper (Navbar, Footer, AlertBanner)
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── AlertBanner.tsx # Site-wide alert from Sanity
│   │   ├── PageHero.tsx    # Reusable hero for inner pages
│   │   ├── ComingSoon.tsx  # Placeholder for pages not yet built
│   │   └── home/           # Home page sections
│   ├── sanity/             # Sanity CMS config, schemas, queries
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
- **Sanity** — Headless CMS (sermons, events, testimonials, etc.)
- **next-sanity** — Sanity client for Next.js
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
| `src/sanity/config.ts` | Sanity Studio configuration |
| `src/sanity/client.ts` | Sanity client and `sanityFetch` helper |
| `src/sanity/queries.ts` | GROQ queries |

### Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | Yes | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | No (default: `production`) | Sanity dataset name |

For production, also ensure the correct `baseUrl` is used in:

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
- Sanity Studio excluded from search (`robots: { index: false }`)

---

## Deployment

The site can be deployed to:

- **Vercel** (recommended) — Connect the repo, add env vars, deploy automatically
- **Netlify** — Similar setup
- **Other hosts** — Run `npm run build` and serve with `npm run start`

**Build command:** `npm run build`  
**Start command:** `npm run start`

Set `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` in your deployment platform's environment variables.

---

## Getting Help

- **Next.js docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Sanity docs:** [sanity.io/docs](https://www.sanity.io/docs)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Project questions:** Contact the development team or church operations.
