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
| `profile`      | Name, location, title line, email, LinkedIn and GitHub URLs, profile photo paths (light + optional dark), resume PDF path |
| `about`        | The paragraphs in the About card (one string per paragraph)                      |
| `techStack`    | Grouped chips in the Tech Stack card                                             |
| `currentFocus` | Short text plus tag chips in the Current Focus card                              |
| `experience`   | Timeline entries: role, organization, period                                     |
| `highlights`   | Cards in the auto-rotating Highlights carousel (`kind` is `leadership` or `certificate`; optional `image`, `pdf`, `description` make the card open a modal) |
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

**Dark-mode profile photo**

The header shows a second photo when dark mode is on.

1. Save the dark-mode version as `public/profile-dark.jpg`, same square dimensions as the light one.
2. It is wired up through `profile.photoDark` in `src/data/portfolio.ts`. Rename the file freely as long as you update that line.
3. To use the same photo in both themes, delete the `photoDark` line — the field is optional and the header falls back to `photo`.

Both images are rendered and swapped with CSS (`dark:hidden` / `hidden dark:block`), so the correct one is on screen at first paint with no flash. The hidden one is `display: none`, which keeps it out of the accessibility tree.

The placeholder currently at `public/profile-dark.jpg` is a copy of a gallery image, deliberately different from `profile.jpg` so you can see the swap working. Replace it.

**Gallery**

1. Drop images into `public/gallery/`. Landscape images around 1200 × 900 px work best; the carousel crops to a 4:3 box.
2. Add or edit entries in the `gallery` array. Each needs a `src` (path under `public/`) and a short, descriptive `alt`.
3. To remove a photo, delete its entry from the array and delete the file.

**Highlight certificates**

Each entry in `highlights` can carry up to three optional fields:

| Field         | What it does                                                                          |
| ------------- | ------------------------------------------------------------------------------------- |
| `image`       | Path to a JPG/PNG under `public/certificates/`. Shown in the modal via `next/image`.   |
| `pdf`         | Path to a PDF under `public/certificates/`. Adds a **View original** button to the modal. |
| `description` | One or two lines of context shown under the image.                                     |

A highlight with **neither** `image` nor `pdf` is not clickable and gets no hover effect — it just sits in the carousel as plain text. Cards that do open a modal show a small "Click to view" hint.

Landscape scans around 1600 × 1200 px look best; the modal caps the image at 55% of the viewport height and never scrolls sideways.

**Files to drop into `public/certificates/`**

Everything currently in that folder is a placeholder. Replace these exact filenames (or change the paths in `highlights`):

| Filename                              | Highlight                                                             |
| ------------------------------------- | --------------------------------------------------------------------- |
| `eskwelabs-webinar.jpg`               | Co-presenter, "AI Can Write the Code. Can It Design It?" webinar       |
| `back-to-basics-2026.jpg`             | Tech Team Lead, Back to BasiCS & AI Conference 2026                    |
| `dost-git-github.jpg`                 | Fundamentals of Git & GitHub — DOST                                    |
| `dost-git-github.pdf`                 | Fundamentals of Git & GitHub — DOST (original)                         |
| `cisco-javascript-essentials-1.jpg`   | JavaScript Essentials 1 — Cisco                                        |
| `cisco-javascript-essentials-1.pdf`   | JavaScript Essentials 1 — Cisco (original)                             |
| `toeic.jpg`                           | TOEIC English Proficiency — DLSUD                                      |
| `toeic.pdf`                           | TOEIC English Proficiency — DLSUD (original)                           |

**Resume**

Save your resume as `public/resume.pdf`. The **Resume** button in the header reads its path from `profile.resume` in `src/data/portfolio.ts`, so you can rename the file as long as you update that one line. The file currently in place is a placeholder.

The current `profile.jpg`, `profile-dark.jpg`, `gallery/1.jpg` … `5.jpg`, `resume.pdf`, and everything in `certificates/` are placeholders. Replace them freely.

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
  profile-dark.jpg  the dark-mode version of your photo (optional)
  resume.pdf      your resume, linked from the header Resume button
  gallery/        gallery images
  certificates/   certificate and event images/PDFs shown in the Highlights modal
```
