import { PluginsGrid } from "components/grid/plugins-grid";
import { ThreeItemGrid } from "components/grid/product-images";
import Footer from "components/layout/footer";

export const metadata = {
  description:
    "Web Marketing Shop - Educational project demo. Deployed on Vercel, Next.js Commerce, and Shopify Partners.",
  robots: "noindex, nofollow",
  openGraph: {
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <PluginsGrid />
      <Footer />
    </>
  );
}
