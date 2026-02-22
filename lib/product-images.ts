import type { Product } from "lib/shopify/types";

export const PRODUCT_IMAGE_PLACEHOLDER = "/placeholder.png";

// All plugin handles mapped to the same Unsplash image for now
const UNSPLASH_DEFAULT =
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export const PRODUCT_IMAGE_OVERRIDES: Record<string, string> = {
  marketplace: UNSPLASH_DEFAULT,
  catalog: UNSPLASH_DEFAULT,
  dataio: UNSPLASH_DEFAULT,
  integration: UNSPLASH_DEFAULT,
  marketing: UNSPLASH_DEFAULT,
  "ab-testing": UNSPLASH_DEFAULT,
  support: UNSPLASH_DEFAULT,
  access: UNSPLASH_DEFAULT,
  legal: UNSPLASH_DEFAULT,
  evsched: UNSPLASH_DEFAULT,
  chatbot: UNSPLASH_DEFAULT,
  reviews: UNSPLASH_DEFAULT,
  socmedia: UNSPLASH_DEFAULT,
  newsletter: UNSPLASH_DEFAULT,
  i18n: UNSPLASH_DEFAULT,
  courier: UNSPLASH_DEFAULT,
  payments: UNSPLASH_DEFAULT,
  images: UNSPLASH_DEFAULT,
  analytics: UNSPLASH_DEFAULT,
  seo: UNSPLASH_DEFAULT,
  blog: UNSPLASH_DEFAULT,
  content: UNSPLASH_DEFAULT,
  maintenance: UNSPLASH_DEFAULT,
};

export function resolveProductImage(
  product: Pick<Product, "handle" | "featuredImage">,
) {
  const overrideImage = PRODUCT_IMAGE_OVERRIDES[product.handle];

  return (
    product.featuredImage?.url || overrideImage || PRODUCT_IMAGE_PLACEHOLDER
  );
}
