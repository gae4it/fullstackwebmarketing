import Footer from "components/layout/footer";

export const metadata = {
  title: "Contact Us",
  robots: "noindex, nofollow",
};

export default function ContactPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold">Contact Us</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
          <section className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-200">
              <strong>ℹ️ Note:</strong> This is an educational demonstration
              project. For inquiries, please contact through the project
              repository or creator.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">About This Project</h2>
            <p>
              This is a non-commercial demonstration built with Next.js, React
              Server Components, and Shopify's Storefront API. It showcases
              modern web development practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Questions About the Code?
            </h2>
            <p>
              If you have questions about the technical implementation,
              technologies used, or want to learn more:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Check the project documentation</li>
              <li>Review the GitHub repository (if available)</li>
              <li>Visit the Vercel Next.js Commerce repository</li>
              <li>Check Shopify's developer documentation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <div className="grid gap-4">
              <div>
                <h3 className="font-semibold">Frontend</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Next.js 16.1.6, React Server Components, TypeScript, Tailwind
                  CSS
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Commerce</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Shopify Storefront API, Headless Commerce
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Hosting</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Vercel, Edge Functions, CDN
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Build</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Turbopack, TypeScript, ESLint
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Learning Resources</h2>
            <p>To learn more about the technologies used:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Vercel:</strong>{" "}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  vercel.com
                </a>
              </li>
              <li>
                <strong>Next.js:</strong>{" "}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  nextjs.org
                </a>
              </li>
              <li>
                <strong>React:</strong>{" "}
                <a
                  href="https://react.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  react.dev
                </a>
              </li>
              <li>
                <strong>Shopify Developers:</strong>{" "}
                <a
                  href="https://shopify.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  shopify.dev
                </a>
              </li>
              <li>
                <strong>Shopify Partners:</strong>{" "}
                <a
                  href="https://partners.shopify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  partners.shopify.com
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Project Repository</h2>
            <p>
              The source code for this project may be available on GitHub. Check
              there for documentation, issues, and discussions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Support & Feedback</h2>
            <p>
              This is an educational project. Support inquiries should be
              directed to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The project creator or maintainer</li>
              <li>The GitHub repository (if available)</li>
              <li>Educational communities and forums</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Report an Issue</h2>
            <p>
              If you find a bug or security vulnerability, please report it
              responsibly through:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>GitHub Issues (if the project is open source)</li>
              <li>Direct contact with the project maintainer</li>
              <li>Responsible disclosure guidelines</li>
            </ul>
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
