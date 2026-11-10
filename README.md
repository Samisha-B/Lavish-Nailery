# Lavish Nailery

Next.js 14 (App Router) + Tailwind site with WhatsApp booking, academy enquiry form and photo carousel.

## Run

```bash
npm install
npm run dev
```

## Edit content

Everything (prices, branches, courses, time slots, gallery) is in `lib/config.ts`.

## Add photos

Put images in `public/gallery/` named `1.jpg`, `2.jpg`, ... and update `gallery` in `lib/config.ts`. Missing images show a "Photo coming soon" placeholder.

## Replace logo

Swap `public/logo.svg` (currently a text placeholder) with the real logo file and update the path in `app/page.tsx`.

## Deploy

Import the repo in Vercel. Framework preset: Next.js. No env vars needed.
