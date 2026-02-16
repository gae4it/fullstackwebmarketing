import Footer from "components/layout/footer";

export const metadata = {
  title: "Cookie Policy",
  robots: "noindex, nofollow",
};

export default function CookiePolicyPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold">Cookie Policy</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
          <section className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <p className="text-green-800 dark:text-green-200">
              <strong>✅ No Cookies:</strong> This site does NOT use cookies,
              tracking, or data collection of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              1. What This Policy Covers
            </h2>
            <p>
              This Cookie Policy explains our cookie and data collection
              practices. Since this site intentionally does not use cookies,
              this is a straightforward policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              2. We Do NOT Use Cookies
            </h2>
            <p>
              This website does NOT set, store, or use cookies of any kind,
              including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Session cookies</li>
              <li>Persistent cookies</li>
              <li>Analytics cookies</li>
              <li>Marketing cookies</li>
              <li>Third-party cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Local Storage</h2>
            <p>
              This site may use browser localStorage for basic functionality
              only (such as cart state). No personal data is stored.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. No Tracking</h2>
            <p>We do not use any tracking technologies such as:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Google Analytics</li>
              <li>Advertising pixels</li>
              <li>Heat mapping tools</li>
              <li>User tracking pixels</li>
              <li>Conversion tracking</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
            <p>
              This site does not embed third-party tracking services or scripts
              that collect user data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Browser Storage</h2>
            <p>The only browser storage used is for functional purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Shopping cart state (localStorage)</li>
              <li>No personal identifying information is stored</li>
              <li>Data is cleared when you clear your browser cache</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Your Rights</h2>
            <p>
              Since we do not collect data, you don't need to manage cookies or
              consent settings. Your browser's default settings work perfectly
              with this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Cookie Policy. Any changes will be posted here
              with an updated "Last Updated" date.
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
