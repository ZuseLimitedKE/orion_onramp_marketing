import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "./waitlist-dialog";

export function CTASection() {
  return (
    <section className="py-32 bg-neutral-50 text-neutral-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-[0.95]">
                Unlocking Africa's <br />
                <span className="text-primary">Potential</span>
              </h2>
              <p className="text-neutral-500 text-lg leading-relaxed max-w-xl mb-6 font-light">
                We are launching in Kenya, South Africa and Nigeria, three of
                Africa's most dynamic economies. Orion removes the "last-mile"
                barrier, enabling the next 100 DApps on Hedera to access these
                critical markets.
              </p>
            </div>

            <div>
              <WaitlistDialog>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white h-14 px-8 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/20"
                >
                  Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </WaitlistDialog>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
            {/* Feature 1 */}
            <div className="group border-l border-neutral-200 pl-8 transition-colors duration-300 hover:border-primary">
              <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-2 tracking-tighter group-hover:text-primary transition-colors">
                2 min
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-1">
                Instant Settlement
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Average time to settle fiat to crypto.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group border-l border-neutral-200 pl-8 transition-colors duration-300 hover:border-primary">
              <div className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">
                Kenya & Nigeria
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-1">
                Market Access
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Live in two major African economies.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group border-l border-neutral-200 pl-8 transition-colors duration-300 hover:border-primary">
              <div className="text-xl md:text-2xl font-bold text-neutral-900 mb-2">
                Bank Grade
              </div>
              <h3 className="text-lg font-medium text-neutral-900 mb-1">
                Security Infrastructure
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Fully compliant with local regulations and treasury management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
