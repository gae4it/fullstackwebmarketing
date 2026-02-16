import Footer from "components/layout/footer";

export const metadata = {
  title: "Terms of Service",
  robots: "noindex, nofollow",
};

export default function TermsPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">
              Educational Project Notice
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg">
              <strong>⚠️ DISCLAIMER:</strong> This is a non-commercial,
              educational demonstration project. It is not a real e-commerce
              service. By accessing this site, you agree that you understand
              this is for educational purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing this website, you acknowledge that this is a
              demonstration/educational project created to showcase web
              development skills and technologies. You agree not to use this
              site for any commercial purpose.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
            <p>
              This site is provided "as-is" for educational and demonstration
              purposes. Permission is not granted for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Commercial use or sales</li>
              <li>Reproducing, duplicating, or copying materials</li>
              <li>Reverse engineering</li>
              <li>Attempting to gain unauthorized access</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. No Real Transactions</h2>
            <p>
              <strong>IMPORTANT:</strong> This is not a real e-commerce
              platform. Any attempt to make purchases or transactions on this
              site will result in demonstration/test behavior only. No real
              payments are processed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              4. Disclaimer of Warranties
            </h2>
            <p>
              This site is provided "AS IS" without any warranties, express or
              implied. We disclaim all responsibility for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Uptime or availability</li>
              <li>Data loss or corruption</li>
              <li>Security breaches</li>
              <li>Any damages resulting from use of this site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              5. Technology & Attribution
            </h2>
            <p>This project is built with:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Next.js Commerce (Vercel)</li>
              <li>Shopify Storefront API</li>
              <li>React Server Components</li>
              <li>Vercel Hosting</li>
            </ul>
            <p className="mt-4">
              All technologies are used in accordance with their respective
              licenses and terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              6. Limitation of Liability
            </h2>
            <p>
              In no event shall we be liable for any damages arising from your
              use or inability to use this site, including but not limited to
              direct, indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              7. Modification of Terms
            </h2>
            <p>
              These terms may be modified at any time without notice. Continued
              use of this site constitutes acceptance of modified terms.
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
