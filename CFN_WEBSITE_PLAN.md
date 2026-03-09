# CodeFlow Nation Website — Build Plan

**Goal:** Get codeflownation.com live with blog rendering from Sanity `codeflow` dataset.
**Approach:** Fork FasterQuotes website, strip to essentials, rebrand.
**Stack:** Next.js 16 + Sanity.io + Tailwind CSS v4 + Vercel

---

## Phase 1: Blog Live (MVP)

### Step 1: Scaffold from FasterQuotes (30 min)

Copy these directories/files from `fasterquotes/website/` into `codeflow-nation-website/`:

```
# Core framework
package.json              → update name, description
next.config.ts            → keep as-is (Sanity transpile config)
tsconfig.json             → keep as-is
tailwind.config.ts        → if exists, update brand colors
postcss.config.mjs        → keep as-is

# App structure
app/layout.tsx            → rebrand (fonts, metadata, analytics)
app/globals.css           → update CSS vars (colors)
app/page.tsx              → strip to simple hero + latest posts
app/(main)/blog/          → copy entire blog directory as-is
app/(main)/layout.tsx     → copy (wraps nav/footer around pages)

# Components
components/Navigation.tsx → rebrand (logo, links, colors)
components/Footer.tsx     → rebrand (logo, links, socials)
components/blog/          → copy entire directory (TOC, PortableText, etc.)

# Sanity integration
sanity/                   → copy entire directory
  schemas/blogPost.ts     → keep as-is (pipeline publishes this shape)
  schemas/author.ts       → keep as-is
  schemas/category.ts     → keep as-is
  lib/sanity.client.ts    → keep (reads from env vars)
  lib/sanity.image.ts     → keep as-is
  lib/sanity.queries.ts   → keep as-is
  sanity.config.ts        → update project name display

# Public assets
public/                   → replace logo, favicon, OG image
```

**DO NOT copy:**
- `app/(main)/case-studies/` — not needed yet
- `app/extract/` — FQ-specific demo
- `components/Hero.tsx`, `Services.tsx`, `Portfolio.tsx`, `Team.tsx` — FQ-specific
- `scripts/` — FQ-specific
- `lib/demo/` — FQ-specific

### Step 2: Rebrand CSS & Colors (15 min)

In `app/globals.css`, update CSS variables:

```css
:root {
  /* CodeFlow Nation Brand Colors */
  --primary: #0f172a;       /* Deep navy/slate (tech, trust) */
  --primary-hover: #1e293b;
  --primary-light: #334155;
  --accent: #06b6d4;        /* Cyan (innovation, automation) */
  --accent-hover: #0891b2;
  --accent-light: #22d3ee;
  --steel: #64748b;         /* Slate gray */
  --steel-light: #94a3b8;
}
```

> NOTE: Colors are a suggestion. Sid may want to keep amber or pick something else.
> The key point: must be visually distinct from FasterQuotes (navy + amber).

### Step 3: Sanity Client Config (5 min)

Create `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=l4vb62i0
NEXT_PUBLIC_SANITY_DATASET=codeflow
SANITY_API_TOKEN=<same token as FQ>
```

No code changes needed — `sanity.client.ts` already reads from these env vars.

### Step 4: Simple Homepage (20 min)

Strip `app/page.tsx` to:
1. **Hero section** — "I build the automation your off-the-shelf tools can't handle"
   - Subtitle: "Custom AI pipelines for enterprise workflows. Human-in-the-loop. Production-grade."
   - CTA: "Read the Blog" → /blog
   - Secondary CTA: "Book a Call" → calendar link (or LinkedIn)
2. **Latest Posts** — Fetch 3 most recent blog posts from Sanity, show as cards
3. **Brief credibility strip** — "Projects delivered: 12 | Avg efficiency gain: 87% | Industries: 5+"

That's it. No services grid, no case studies, no team section. Just hero + blogs.

### Step 5: Navigation & Footer (15 min)

**Navigation:**
- Logo: "CodeFlow Nation" (text or simple SVG)
- Links: Home | Blog | About (placeholder) | Book a Call (CTA button)
- Mobile menu: same links

**Footer:**
- CodeFlow Nation branding
- Links: Blog | LinkedIn | Email
- Copyright: "© 2026 CodeFlow Nation. Built by Siddharth Rodrigues."

### Step 6: Metadata & SEO (10 min)

In `app/layout.tsx`:
```typescript
metadata = {
  title: 'CodeFlow Nation | Enterprise Workflow Automation',
  description: 'Custom AI automation for enterprise workflows. I build the pipelines your off-the-shelf tools can\'t handle.',
  openGraph: { ... },
}
```

- Update all meta references from FasterQuotes → CodeFlow Nation
- Update OG image (simple text-based one initially)
- robots.txt, sitemap (Next.js generates automatically)

### Step 7: Local Test (10 min)

```bash
cd codeflow-nation-website
npm install
npm run dev
```

Verify:
- [ ] Homepage loads with hero + latest posts
- [ ] /blog shows blog listing
- [ ] /blog/[slug] renders a blog post from Sanity `codeflow` dataset
- [ ] TOC works on blog posts
- [ ] Links are styled correctly (not invisible)
- [ ] Mobile responsive
- [ ] /studio loads Sanity Studio

### Step 8: Deploy to Vercel (10 min)

1. Go to vercel.com → Import `dorddis/codeflow-nation-website`
2. Set environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` = `l4vb62i0`
   - `NEXT_PUBLIC_SANITY_DATASET` = `codeflow`
   - `SANITY_API_TOKEN` = same token
3. Deploy
4. Verify on Vercel preview URL

### Step 9: DNS (10 min)

**Option A (recommended):** Change nameservers to Vercel
- In Namecheap/Hostinger: point NS to Vercel's nameservers
- Add domain in Vercel dashboard

**Option B:** CNAME record
- Add CNAME: `codeflownation.com` → `cname.vercel-dns.com`
- Add in Vercel dashboard

### Step 10: Verify Live (5 min)

- [ ] codeflownation.com loads
- [ ] SSL certificate active
- [ ] Blog posts render
- [ ] Auto-deploy on push works

---

## Phase 2: Full Website (Next Session)

- [ ] About page (Sid's story, project portfolio, credibility)
- [ ] Services page (what CodeFlow builds, pricing ranges)
- [ ] Case studies (Best Roadways, NRS, video QC — reframed for CFN brand)
- [ ] Contact page with booking calendar
- [ ] Per-page OG images
- [ ] Google Analytics + Search Console
- [ ] Lead magnet (automation ROI calculator)

## Phase 3: Growth (Ongoing)

- [ ] Email capture / newsletter on blog posts
- [ ] FQ ↔ CFN cross-linking for SEO
- [ ] Blog post social sharing buttons
- [ ] Structured data (JSON-LD for articles)

---

## Key Decisions to Make

| Decision | Options | Default |
|----------|---------|---------|
| **Brand colors** | Cyan+slate (tech), Green+dark (growth), Keep amber (consistency) | Cyan+slate |
| **Logo** | Text wordmark vs designed logo | Text wordmark for now |
| **Domain hosting** | Vercel (free) vs Hostinger (paid, current) | Vercel |
| **Voice on website** | "I" (personal) vs "We" (company) | "I" (matches blog prompts) |
| **Booking tool** | GHL calendar (existing) vs Cal.com (free) | GHL (already have it) |

## Reference

- **FQ website source:** `C:\Users\sidro\all-code\fasterquotes\website\`
- **CFN blog pipeline:** `C:\Users\sidro\all-code\fasterquotes\content-engine\CFNblog\`
- **Sanity project:** `l4vb62i0`, dataset: `codeflow`
- **Current CFN website repo:** `dorddis/codeflow-nation-website`
- **Pipeline status:** Running on GitHub Actions (Mon/Wed/Fri)
