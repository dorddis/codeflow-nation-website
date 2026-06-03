# CLAUDE.md - CodeFlow Nation Website

Marketing + blog site for CodeFlow (codeflownation.com), Siddharth Rodrigues's
AI-automation consultancy brand. Forked from the FasterQuotes website and
rebranded to CodeFlow.

## Stack

- Next.js 16 (App Router, React 19)
- Sanity CMS (project `l4vb62i0`, dataset `codeflow`) via `next-sanity`
- Tailwind CSS v4 (`@theme inline` tokens in `app/globals.css`)
- framer-motion for reveal animations
- Deployed on Vercel

## Brand

- Accent: emerald `#059669` (`--accent`, utility `accent`)
- Primary: charcoal `#111827` (`--primary`, utility `primary`)
- Wordmark: Code (charcoal) + Flow (emerald)
- Theme tokens live in `app/globals.css`; use the named utilities
  (`text-primary`, `bg-accent`, `text-steel`, `bg-card`, etc.) not raw hex.

## Routes (all that exist)

- `/` - home (`app/(main)/page.tsx`)
- `/work` - case studies (`app/(main)/work/page.tsx`)
- `/blog` - blog index (`app/(main)/blog/page.tsx`)
- `/blog/[slug]` - blog post, static-generated from Sanity at build time
- `/privacy-policy` - privacy policy (`app/(main)/privacy-policy/page.tsx`)
- `/studio` - embedded Sanity Studio (`app/studio/...`)

The `(main)` route group wraps pages in `Navigation` + `Footer`. `app/sitemap.ts`
and `app/robots.ts` generate SEO files; sitemap pulls blog slugs from Sanity.

## Blog content pipeline

Blog posts are auto-published into the `codeflow` Sanity dataset by the external
content engine at:
`C:\Users\sidro\all-code\fasterquotes\content-engine\CFNblog\`
(GitHub Actions, currently paused). This repo only reads from Sanity; it does not
generate content.

## Env

`.env.local` (gitignored) must contain:

- `NEXT_PUBLIC_SANITY_PROJECT_ID=l4vb62i0`
- `NEXT_PUBLIC_SANITY_DATASET=codeflow`
- `SANITY_API_TOKEN_PUBLISH=<token>` (checked first by `sanity/lib/sanity.client.ts`)
- `SANITY_API_TOKEN=<token>` (fallback)

The `codeflow` dataset is public, so build-time reads work without a token; the
token is for Studio writes/publishing.

## Commands

- `npm run dev` - local dev server
- `npm run build` - production build (queries Sanity at build time via
  `generateStaticParams`)
- `npm start` - serve the production build
- `npm run lint` - eslint
