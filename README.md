# Whisked By Vale

Landing page for **Whisked By Vale**. Showcases the cookie menu, pricing, and Instagram ordering.

## Features

- Full-bleed hero with brand-forward typography
- Cookie menu grid (11 flavors with product photos)
- Pricing tiers: 3 / 6 / 12 cookies
- Order CTA linking to [Instagram](https://www.instagram.com/whiskedbyvale/)
- Scroll-reveal animations and desktop parallax
- Responsive layout tuned for mobile

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
app/
  layout.tsx          # Root layout, fonts, metadata
  page.tsx            # Home route
  globals.css         # Global styles
components/
  whisked-by-vale-site.tsx   # Main page UI (hero, menu, pricing, order)
public/
  images/             # Cookie product photos
```

Most of the site lives in `components/whisked-by-vale-site.tsx`. Cookie data and pricing are defined at the top of that file; product images go in `public/images/`.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Google Fonts: Playfair Display, DM Sans, Dancing Script, Pacifico

