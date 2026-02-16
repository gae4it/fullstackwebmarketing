import { PluginsGrid } from "components/grid/plugins-grid";
import { ThreeItemGrid } from "components/grid/three-items";
import Footer from "components/layout/footer";

export const metadata = {
  description:
    "Full Stack Web Marketing - Educational project demo. Deployed on Vercel, Next.js Commerce, and Shopify Partners.",
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
