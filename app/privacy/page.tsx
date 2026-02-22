import Footer from "components/layout/footer";

export const metadata = {
  title: "Privacy Policy",
  robots: "noindex, nofollow",
};

export default function PrivacyPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">
              Educational Project Notice
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
              <strong>⚠️ DISCLAIMER:</strong> This is a non-commercial,
              educational project deployed on Vercel using Next.js Commerce and
              Shopify Partners. This is a demonstration/portfolio project, not a
              real e-commerce store.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              This website is a demonstration project created for educational
              purposes only. It showcases the integration of Next.js Commerce,
              Shopify, and Vercel technologies. No real transactions occur on
              this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Data Collection</h2>
            <p>
              This site does not collect, process, or store personal user data.
              There is no analytics tracking, cookie tracking, or user
              profiling. The site is intentionally configured to reject indexing
              by search engines and AI systems.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>No cookies are set</li>
              <li>No analytics tools are active</li>
              <li>No personal data is collected</li>
              <li>No tracking pixels are used</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              3. Search Engine & AI Restrictions
            </h2>
            <p>
              This site explicitly blocks indexing by search engines and AI
              systems via robots.txt and meta directives. The site is marked as
              "noindex, nofollow" to prevent discovery and indexing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Technology Stack</h2>
            <p>This project demonstrates:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Frontend:</strong> Next.js 16.1.6 with React Server
                Components
              </li>
              <li>
                <strong>E-Commerce:</strong> Shopify Storefront API
              </li>
              <li>
                <strong>Hosting:</strong> Vercel
              </li>
              <li>
                <strong>Development:</strong> TypeScript, Turbopack
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Limitations</h2>
            <p>
              As this is a demonstration project, certain features may be
              limited or non-functional:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Payment processing is for demonstration only</li>
              <li>Product data is sample data</li>
              <li>No real checkout functionality</li>
              <li>No customer accounts or order tracking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Contact</h2>
            <p>
              This is an educational project. For inquiries about the code or
              technology used, please visit the source repository.
            </p>
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
