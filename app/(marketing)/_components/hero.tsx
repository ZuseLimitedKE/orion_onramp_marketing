import Link from "next/link";
import { WaitlistDialog } from "./waitlist-dialog";
import { ArrowDown } from "./arrow-down";

export function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden px-6 lg:px-8 py-40 bg-white">
      <div className="mx-auto max-w-2xl">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-[#1fbf75]/40">
            Orion is currently still in development.{" "}
            <a
              href="#"
              className="font-semibold text-[#1fbf75] hover:text-[#18a763]"
            >
              <span
                aria-hidden="true"
                className="absolute flex items-center inset-0"
              />
              Read more <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
            Bridge Africa to Web3
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
            Orion connects African fiat currencies directly to digital assets.
            Move from mobile money to crypto in under two minutes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-12">
            <WaitlistDialog>
              <button className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#18a763] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                Join the waitlist
              </button>
            </WaitlistDialog>
            <Link
              href="#features"
              className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors flex items-center gap-1"
            >
              Learn more{" "}
              <span className="mb-1" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
      <ArrowDown />
    </div>
  );
}
