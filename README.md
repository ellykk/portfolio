# Kyle Panganiban – Portfolio

A single-page, card-based personal portfolio built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4. Deployed on Vercel.

## Stack

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS v4 (design tokens in `src/app/globals.css`)
- `lucide-react` for icons
- Bun as the package manager

## Run locally

```bash
bun install
bun dev
```

Open http://localhost:3000. Other scripts:

```bash
bun run lint    # ESLint
bun run build   # production build (run before pushing)
bun run start   # serve the production build
```

## Editing content

Everything you see on the page comes from one file: **`src/data/portfolio.ts`**. You never need to touch a component to change text.

| Export         | What it controls                                                                 |
| -------------- | -------------------------------------------------------------------------------- |
| `siteMeta`     | Browser tab title, meta description, keywords, and the fallback site URL         |
| `profile`      | Name, location, title line, email, LinkedIn and GitHub URLs, profile photo path  |
| `about`        | The paragraphs in the About card (one string per paragraph)                      |
| `techStack`    | Grouped chips in the Tech Stack card                                             |
| `currentFocus` | Short text plus tag chips in the Current Focus card                              |
| `experience`   | Timeline entries: role, organization, period                                     |
| `highlights`   | Cards in the auto-rotating Highlights carousel (`kind` is `leadership` or `certificate`) |
| `projects`     | Project cards and the details shown in the modal (`details` is a list of bullets, optional `link`) |
| `gallery`      | Images in the horizontal Gallery carousel, with alt text                         |

Each export is typed, so your editor will flag a typo or a missing field.

### Update your links

In `profile`, replace the placeholder `linkedin` and `github` URLs with your real ones. The header buttons and the footer icons both read from there.

## Adding photos

All images live in `public/` and are served by `next/image`.

**Profile photo**

1. Save a square image (at least 512 × 512 px, JPG or PNG) as `public/profile.jpg`.
2. If you use a different filename or extension, update `profile.photo` in `src/data/portfolio.ts`.

**Gallery**

1. Drop images into `public/gallery/`. Landscape images around 1200 × 900 px work best; the carousel crops to a 4:3 box.
2. Add or edit entries in the `gallery` array. Each needs a `src` (path under `public/`) and a short, descriptive `alt`.
3. To remove a photo, delete its entry from the array and delete the file.

The current `profile.jpg` and `gallery/1.jpg` … `5.jpg` are generated placeholders. Replace them freely.

## Branding and dark mode

Colors, fonts, and radii are CSS variables at the top of `src/app/globals.css`.

- Light palette lives under `:root`; the dark palette under `.dark`.
- Primary green `#2d6a4f`, warm gold accent `#d4a373`, off-white background `#faf9f7`.
- Headings use Fraunces, body text uses Inter, both loaded through `next/font/google` in `src/app/layout.tsx`.

Dark mode follows the visitor's system preference by default. The toggle in the header saves the choice to `localStorage`, and a small inline script in the layout applies it before the first paint so there is no flash.

## SEO

- Metadata and Open Graph tags: `src/app/layout.tsx`
- Open Graph image (generated at build time): `src/app/opengraph-image.tsx`
- Favicon (generated): `src/app/icon.tsx`
- `sitemap.xml` and `robots.txt`: `src/app/sitemap.ts` and `src/app/robots.ts`

Set `NEXT_PUBLIC_SITE_URL` to your final domain so canonical links and the sitemap point at the right place. See `.env.example`.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, click **Add New → Project** and import the repo. The Next.js preset works as is.
3. Optionally add the `NEXT_PUBLIC_SITE_URL` environment variable.
4. Deploy. Every push to `main` redeploys automatically.

## Project structure

```
src/
  app/            layout, page, global styles, OG image, favicon, sitemap, robots
  components/     one file per section (Header, About, Projects, Gallery, ...)
  components/ui/  small shared pieces (Card, Chip, LinkButton, SectionTitle)
  data/           portfolio.ts – all editable content
  lib/            site.ts – resolves the public site URL
public/
  profile.jpg     your photo
  gallery/        gallery images
```
