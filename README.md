# Nauman Raees — Portfolio

A modern, responsive portfolio for **Nauman Raees, Full-Stack AI Engineer**, built with [Next.js](https://nextjs.org), TypeScript and [Tailwind CSS](https://tailwindcss.com).

It features a sticky glassmorphism navbar with scroll-spy, animated hero, and About, Skills, Experience, Projects and Contact sections.

## Requirements

> ⚠️ **Node.js `>=20.9.0` is required to run this app.**
>
> This project uses **Next.js 16**, which does not support Node.js 18 or lower. Running on an older version will fail with:
>
> ```
> You are using Node.js 18.x.x. For Next.js, Node.js version ">=20.9.0" is required.
> ```
>
> Check your version with `node -v`. If you use [nvm](https://github.com/nvm-sh/nvm), run:
>
> ```bash
> nvm install 20
> nvm use 20
> ```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Available Scripts

| Command         | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start the development server             |
| `npm run build` | Create an optimized production build     |
| `npm run start` | Run the production build locally         |
| `npm run lint`  | Lint the codebase with ESLint            |

## Project Structure

```
src/
├── app/            # App Router entry (layout, page, global styles, favicon)
├── assets/         # Images (logo, hero)
└── components/     # Section components (navbar, intro, about, skills, ...)
    └── common/     # Reusable UI (button, reveal, socials, section heading)
```

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI:** Headless UI, Heroicons
- **Runtime:** Node.js `>=20.9.0`

## Deploy on Vercel

The easiest way to deploy is with the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme). See the [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) for details.
