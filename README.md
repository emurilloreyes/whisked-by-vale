# Whisked By Vale

Landing page for **Whisked By Vale**. Showcases the cookie menu, pricing, and Instagram ordering.


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

