import Footer from "components/layout/footer";

export const metadata = {
  title: "Acceptable Use Policy",
  robots: "noindex, nofollow",
};

export default function AcceptableUsePolicy() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold">Acceptable Use Policy</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
          <section className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="text-yellow-800 dark:text-yellow-200">
              <strong>⚠️ Educational Project:</strong> This site is for learning
              purposes only. Misuse will result in access restrictions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. Permitted Uses</h2>
            <p>You may use this site to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>View the educational demonstration</li>
              <li>Learn about Next.js and e-commerce integration</li>
              <li>Test basic functionality</li>
              <li>Review the project code (if open source)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Prohibited Uses</h2>
            <p>You may NOT:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Engage in unauthorized access attempts</li>
              <li>Perform security testing without permission</li>
              <li>Attempt to reverse engineer the application</li>
              <li>Use automated tools to scrape the site</li>
              <li>Perform SQL injection or other attacks</li>
              <li>Use the site for commercial purposes</li>
              <li>Reproduce or copy the code for commercial use</li>
              <li>Claim this as your own work</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Limitations</h2>
            <p>
              We reserve the right to limit or block access to users who violate
              this policy. Examples include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Excessive requests or rate limiting violations</li>
              <li>Malicious or abusive behavior</li>
              <li>Automated scraping</li>
              <li>Harassment or spam</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Attribution</h2>
            <p>
              If you study or reference this project, please provide appropriate
              attribution to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vercel's Next.js Commerce template</li>
              <li>Shopify's developer platform</li>
              <li>The project creator</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              5. Intellectual Property
            </h2>
            <p>
              This project may be open source or proprietary. Respect the
              license under which it is released. Unauthorized use or
              reproduction is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Reporting Violations</h2>
            <p>
              If you encounter misuse or violations of this policy, please
              report them to the project maintainer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Modifications</h2>
            <p>
              We reserve the right to modify this policy at any time. Continued
              use constitutes acceptance of updated terms.
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
