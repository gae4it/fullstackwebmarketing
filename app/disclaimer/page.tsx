import Footer from "components/layout/footer";

export const metadata = {
  title: "Disclaimer",
  robots: "noindex, nofollow",
};

export default function DisclaimerPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold">Disclaimer</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
          <section className="bg-red-50 dark:bg-red-950 p-6 rounded-lg border border-red-200 dark:border-red-800">
            <h2 className="text-2xl font-bold mb-4 text-red-900 dark:text-red-100">
              Important Notice
            </h2>
            <p className="text-red-800 dark:text-red-200">
              <strong>
                This is a non-commercial, educational demonstration project.
              </strong>{" "}
              It is not a real e-commerce platform and should not be used for
              any commercial purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">What This Project Is</h2>
            <p>
              This website is a demonstration project created to showcase web
              development skills and the integration of modern technologies
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Next.js 16.1.6 with React Server Components</li>
              <li>Shopify Storefront API integration</li>
              <li>Vercel hosting platform</li>
              <li>TypeScript and Turbopack build system</li>
              <li>Headless commerce architecture</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              What This Project Is NOT
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>A real, operational e-commerce store</li>
              <li>A commercial product or service</li>
              <li>A secure payment processor</li>
              <li>
                A production-grade application for processing real transactions
              </li>
              <li>An investment or business opportunity</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">No Real Transactions</h2>
            <p>
              <strong>
                Any purchase attempts or transactions made on this site are
                demonstrations only.
              </strong>{" "}
              No real money will be charged, and no real orders will be
              fulfilled. The entire system is for educational purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Search Engine & AI Restrictions
            </h2>
            <p>
              This site is explicitly configured to prevent indexing by search
              engines and AI systems:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>robots.txt disallows all crawlers</li>
              <li>Meta tags set to "noindex, nofollow"</li>
              <li>Intentionally not discoverable via search</li>
              <li>AI training restricted</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">No Data Collection</h2>
            <p>
              This site intentionally does NOT collect, store, or process any
              personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>No analytics or tracking</li>
              <li>No cookies set</li>
              <li>No user profiling</li>
              <li>No data sales or sharing</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p>
              We provide this site "AS IS" without any guarantees. We are not
              responsible for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Uptime, availability, or performance</li>
              <li>Data loss or data breach</li>
              <li>Any damages from using this site</li>
              <li>Incorrect or incomplete information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Attribution</h2>
            <p>
              This project is built on open-source technologies and Vercel's
              Next.js Commerce template. All attributions and licenses are
              respected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Questions?</h2>
            <p>
              Questions about this educational project should be directed to the
              project creator or the GitHub repository where the code is hosted.
            </p>
          </section>

          <section>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}
