import { Footer } from "./_components/footer";
import { HeroSection } from "./_components/hero";
import { CTASection } from "./_components/cta";
import { Navbar } from "./_components/navbar";
import { ProblemSolution } from "./_components/problem-solution";

export default function MarketingPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <CTASection />
      <Footer />
    </main>
  );
}
