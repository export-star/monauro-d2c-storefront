# MONAURO Technical Manual

## Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Shopify-ready commerce boundary

Shopify is responsible for products, cart, checkout, payment, orders, and operational backend. This frontend is responsible for brand storytelling, SEO pages, recovery-solution education, and conversion paths.

## Run Locally

```bash
npm install
npm run dev
```

PowerShell may block `npm.ps1`. On this Windows machine, use:

```bash
npm.cmd install
npm.cmd run dev
```

## Project Structure

```text
src/app/                  Next.js routes
src/components/layout/    Header and footer
src/components/sections/  Page sections for marketing and education
src/components/commerce/  Product and Shopify-adjacent UI
src/components/ui/        Small reusable primitives
src/data/                 Demo data and future API-shaped content
src/lib/                  Shopify and SEO helpers
src/types/                Shared TypeScript types
docs/                     Maintenance and launch documentation
```

## Data Boundary

Demo data lives in `src/data`. Items that need proof use `status: "to_confirm"` or `sourceRequired: true`.

Do not move unconfirmed product claims directly into page copy. Confirm the source first, update the data, then update the UI only if needed.

## Shopify Integration Plan

Current state:

- Product pages use local demo data.
- Buy buttons point to placeholders.
- `src/lib/shopify.ts` contains a small boundary for future Shopify URLs.

Future production path:

1. Add Shopify Storefront API credentials as environment variables.
2. Replace local product data with Shopify product queries.
3. Keep editorial content in local data, MDX, or a CMS.
4. Never commit tokens, passwords, private app keys, or admin credentials.

Suggested environment variables:

```text
SHOPIFY_STORE_DOMAIN=
SHOPIFY_STOREFRONT_ACCESS_TOKEN=
```

## Adding A Product

1. Add the product in `src/data/products.ts`.
2. Include a unique `slug`.
3. Keep unverified values as `To be confirmed`.
4. Add real images under `public/images/products/`.
5. Connect `shopifyHandle` only after the Shopify product exists.

## Adding A Recovery Solution

1. Add the solution in `src/data/recovery-solutions.ts`.
2. Link it to a `recommendedProductSlug`.
3. Create a dedicated route later if the solution needs a full SEO page.

## Verification

Run:

```bash
npm.cmd run lint
npm.cmd run build
```

Before launch, also check mobile layouts at 375px, 768px, and 1440px.
