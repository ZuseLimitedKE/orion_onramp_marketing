import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaitlistDialog } from "./waitlist-dialog";

export function CTASection() {
  return (
    <section
      className="py-32 mx-8 rounded-lg bg-primary text-white relative overflow-hidden"
      id="cta"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-white/10 blur-[150px] rounded-full pointer-events-none opacity-40" />

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-[1.1]">
          Unlocking Africa's Potential
        </h2>
        <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-light">
          We are launching in Kenya and Nigeria, two of Africa's most dynamic
          economies. Orion removes the "last-mile" barrier, enabling the next
          100 DApps on Hedera to access these critical markets.
        </p>

        <WaitlistDialog>
          <Button
            size="lg"
            className="bg-white hover:bg-white/95  text-primary h-14 px-8 text-lg rounded-md transition-all duration-300 cursor-pointer font-semibold  shadow-lg shadow-black/10"
          >
            Join Waitlist <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </WaitlistDialog>
      </div>
    </section>
  );
}
