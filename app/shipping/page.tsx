import Footer from "components/layout/footer";

export const metadata = {
  title: "Shipping Policy",
  robots: "noindex, nofollow",
};

export default function ShippingPolicyPage() {
  return (
    <>
      <div className="mx-auto max-w-2xl px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold">Shipping Policy</h1>

        <div className="prose prose-sm dark:prose-invert max-w-none space-y-6">
          <section className="bg-yellow-50 dark:bg-yellow-950 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="text-yellow-800 dark:text-yellow-200">
              <strong>⚠️ Educational Project:</strong> This is not a real
              e-commerce platform. No shipping will occur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">1. General Information</h2>
            <p>
              This is a demonstration project and is not an operational
              e-commerce store. No real products are shipped, and no actual
              shipping services are provided.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Order Processing</h2>
            <p>
              As this is an educational demonstration, order processing is
              simulated only. No real orders are created or processed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Shipping Methods</h2>
            <p>
              No actual shipping methods are available on this site. This is for
              demonstration purposes only.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Delivery Times</h2>
            <p>Since this is not a real store, delivery times do not apply.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Shipping Costs</h2>
            <p>
              No actual shipping charges are calculated or processed on this
              demonstration site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Tracking</h2>
            <p>
              Order tracking is not available as no real orders are processed.
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
