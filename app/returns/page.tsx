import Footer from "components/layout/footer";

export const metadata = {
  title: "Returns & Refunds Policy",
  robots: "noindex, nofollow",
};

export default function ReturnsPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold">Returns & Refunds Policy</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
          <section className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="text-yellow-800 dark:text-yellow-200">
              <strong>⚠️ Educational Project:</strong> This is not a real
              e-commerce platform. No returns or refunds will be processed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. General Information</h2>
            <p>
              This is a demonstration project only. No real transactions occur,
              and therefore no returns or refunds are applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Return Policy</h2>
            <p>
              As this is an educational demonstration, no physical products are
              shipped or can be returned.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Refund Policy</h2>
            <p>
              No payments are processed on this site, so refunds are not
              applicable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Return Process</h2>
            <p>There is no return process for demonstration orders.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Return Period</h2>
            <p>Return periods do not apply to this demonstration project.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Refund Timeline</h2>
            <p>
              Refund timelines are not applicable as no real transactions occur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              7. Damaged or Defective Items
            </h2>
            <p>
              Since no physical items are shipped, damaged or defective item
              claims are not applicable.
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
