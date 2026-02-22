"use cache";

import { resolveProductImage } from "lib/product-images";
import { getCollectionProducts } from "lib/shopify";
import type { Product } from "lib/shopify/types";
import Link from "next/link";

export async function PluginsGrid() {
  try {
    const plugins = await getCollectionProducts({
      collection: "hidden-homepage-carousel",
    });

    if (!plugins || plugins.length === 0) {
      return (
        <section className="mx-auto max-w-7xl px-4 py-12 text-center">
          <p className="text-neutral-500">Plugin products coming soon...</p>
        </section>
      );
    }

    return (
      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="mb-8 text-3xl font-bold text-center">
          Available Plugin Modules
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {plugins.map((product: Product) => (
            <Link
              key={product.id}
              href={`/product/${product.handle}`}
              className="group relative aspect-square overflow-hidden rounded-lg border border-neutral-200 bg-white p-4 hover:shadow-lg transition dark:border-neutral-800 dark:bg-neutral-900"
            >
              <div className="relative h-full w-full">
                <img
                  src={resolveProductImage(product)}
                  alt={product.featuredImage?.altText || product.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition"
                />
                <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                  <div className="w-full rounded-lg bg-white/80 p-2 text-center shadow-md dark:bg-black/80">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="mt-2 text-xs text-neutral-600 dark:text-neutral-400">
                      {product.priceRange.maxVariantPrice.currencyCode}{" "}
                      {product.priceRange.maxVariantPrice.amount}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 rounded-lg bg-black/0 group-hover:bg-black/10 transition" />
            </Link>
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error loading plugins grid:", error);
    return (
      <section className="mx-auto max-w-7xl px-4 py-12 text-center">
        <p className="text-neutral-500">Unable to load plugin products.</p>
      </section>
    );
  }
}
