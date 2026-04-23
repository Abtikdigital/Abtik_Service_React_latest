# Abtik Services - Next.js Migration

This project has been migrated from Vite to Next.js (App Router) to provide better SEO, performance, and scalability.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev`: Starts the Next.js development server.
- `npm run build`: Creates an optimized production build of the application.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint for code quality checks.

## Key Changes in Migration

1.  **App Router**: Moved from `react-router-dom` to the Next.js App Router for file-based routing.
2.  **Metadata API**: Integrated `seoData.json` with Next.js's native Metadata API for improved SEO.
3.  **Redux Integration**: State management is handled through a `Providers` wrapper in `src/app/layout.tsx`.
4.  **Optimized Fonts**: Integrated Google Fonts (Inter & Bricolage Grotesque) using `next/font`.

## Environment Variables

The project uses `NEXT_PUBLIC_` prefixed environment variables for client-side access.
Example: `NEXT_PUBLIC_BACK_END_URL`
