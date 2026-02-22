# CHANGES

## Date

2026-02-22

## Scope

Product image overrides in Next.js as fallback, without touching CSV/Shopify data.

## Why this change

The goal is to customize product images quickly from the frontend codebase while keeping Shopify as the primary source of truth.

## Architecture decision

Image resolution priority:

1. Shopify `featuredImage`
2. Local Next.js override (product handle -> custom URL)
3. Local placeholder: `/placeholder.png`

This keeps the default ecommerce flow intact and adds a safe fallback layer only.

## Affected areas

- Homepage featured grid component
- Product grid listing component
- Shared image resolution logic (centralized map/helper)
- Placeholder asset in `public/placeholder.png`

## What does NOT change

- No edits to Shopify catalog data
- No CSV import/export updates
- No API contract changes with Shopify

## Risks and notes

- If a custom URL is invalid, rendering falls back to placeholder.
- If a product handle changes and the local map is not updated, override is skipped.
- Shopify remains the first source; override is only a fallback.

## Rollback to default Shopify-only

If you want to return to the standard Next.js Commerce behavior (images from Shopify only):

1. Remove/disable local handle -> URL override map.
2. In UI components, resolve image source directly from Shopify `featuredImage`.
3. Keep or remove placeholder fallback depending on preference:
   - keep: safer UX for missing images
   - remove: strict Shopify-only behavior
4. Ensure no imports reference local override helpers.
5. Run a production build and verify image rendering.

## Verification checklist

- `pnpm run build` succeeds.
- Homepage products show expected images.
- Product grid shows expected images.
- No stale local override entries remain.

## Recommended long-term approach

For scalable operations, store canonical image associations in Shopify (media fields/metafields) and use local overrides only for temporary campaigns or emergency fallback behavior.

Default Image: https://unsplash.com/photos/macbook-pro-on-table-beside-white-imac-and-magic-mouse-hGV2TfOh0ns https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
