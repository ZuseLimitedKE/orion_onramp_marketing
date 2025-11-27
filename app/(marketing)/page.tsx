import { Footer } from "./_components/footer";
import { HeroSection } from "./_components/hero";
import { CTASection } from "./_components/cta";
import { Navbar } from "./_components/navbar";
import { ProductSection } from "./_components/product-section";
import { FeaturesSection } from "./_components/features";

export default function MarketingPage() {
  return (
    <main className="bg-neutral-50 min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <FeaturesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
