import Footer from "components/layout/footer";
import { headers } from "next/headers";
import Link from "next/link";

export const metadata = {
  title: "About - Educational Project",
  robots: "noindex, nofollow",
};

export default function AboutPage() {
  headers(); // Opt out of static prerendering to allow dynamic date
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold">About This Project</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
          <section className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold mt-4 mb-4 text-blue-900 dark:text-blue-100">
              📚 Educational Demonstration
            </h2>
            <p className="text-blue-800 dark:text-blue-200">
              This is a{" "}
              <strong>non-commercial, portfolio/educational project</strong>{" "}
              demonstrating modern web development practices and e-commerce
              technologies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What We're Showcasing</h2>
            <p>This project demonstrates practical integration of:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Next.js 16.1.6</strong> - React Server Components & App
                Router
              </li>
              <li>
                <strong>TypeScript</strong> - Type-safe development
              </li>
              <li>
                <strong>Shopify Storefront API</strong> - Headless commerce
                integration
              </li>
              <li>
                <strong>Vercel</strong> - Modern deployment platform
              </li>
              <li>
                <strong>Turbopack</strong> - Next-generation bundler
              </li>
              <li>
                <strong>React Hooks & Context API</strong> - State management
              </li>
              <li>
                <strong>Tailwind CSS</strong> - Utility-first styling
              </li>
              <li>
                <strong>Server Actions</strong> - Backend-less operations
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Project Architecture</h2>
            <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
              <ul className="space-y-3">
                <li>
                  <strong>Frontend Layer:</strong> Next.js with RSC (React
                  Server Components)
                </li>
                <li>
                  <strong>Commerce Layer:</strong> Shopify Storefront API
                  (headless)
                </li>
                <li>
                  <strong>Hosting:</strong> Vercel with Edge Functions
                </li>
                <li>
                  <strong>Database:</strong> None - All data from Shopify API
                </li>
                <li>
                  <strong>Authentication:</strong> Shopify cart sessions only
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Key Features Implemented
            </h2>
            <div className="grid gap-4">
              <div className="border border-neutral-200 dark:border-neutral-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">✅ Product Catalog</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Dynamic product display with Shopify integration, filtering,
                  and search.
                </p>
              </div>
              <div className="border border-neutral-200 dark:border-neutral-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">✅ Shopping Cart</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Client-side cart management with React Context and Shopify
                  cart API.
                </p>
              </div>
              <div className="border border-neutral-200 dark:border-neutral-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">✅ Responsive Design</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Mobile-first approach with Tailwind CSS and responsive grid
                  layouts.
                </p>
              </div>
              <div className="border border-neutral-200 dark:border-neutral-700 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">✅ Server Components</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Next.js Server Components for optimal performance and
                  security.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Privacy & Security</h2>
            <p>
              This site is intentionally designed with privacy and security in
              mind:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                🚫 <strong>No tracking</strong> - No analytics, cookies, or
                profiling
              </li>
              <li>
                🚫 <strong>No indexing</strong> - robots.txt blocks all crawlers
              </li>
              <li>
                🚫 <strong>No AI training</strong> - Explicitly blocks AI bots
              </li>
              <li>
                🚫 <strong>No data collection</strong> - No user data stored
              </li>
              <li>
                ✅ <strong>HTTPS only</strong> - Secure connections
              </li>
              <li>
                ✅ <strong>Environment variables</strong> - Secrets never
                committed
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
            <p>This project demonstrates best practices from:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vercel's Next.js Commerce template</li>
              <li>Shopify's developer documentation</li>
              <li>Modern React patterns (Server Components, Hooks)</li>
              <li>Next.js 16 latest features</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Important Notes</h2>
            <div className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <p className="font-semibold mb-2">⚠️ This is NOT:</p>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                <li>A real, operational e-commerce store</li>
                <li>A production-ready application</li>
                <li>A commercial service</li>
                <li>A secure payment processor</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Legal & Compliance</h2>
            <p>Please review our legal pages for complete information:</p>
            <div className="flex flex-wrap gap-3 mt-4">
              <Link
                href="/privacy"
                className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
              >
                Terms of Service
              </Link>
              <Link
                href="/disclaimer"
                className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg hover:bg-neutral-200 dark:hover:bg-neutral-700 transition"
              >
                Disclaimer
              </Link>
            </div>
          </section>

          <section>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Last updated: February 22, 2026
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
