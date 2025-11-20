import Link from "next/link";
import { WaitlistDialog } from "./wailtist-dialog";
export function HeroSection() {
  return (
    <div className="relative isolate px-6  lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-72"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1fbf75] to-[#73e69f] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl py-28 sm:py-44 lg:py-48 ">
        {" "}
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full px-3 py-1 text-sm text-gray-600 ring-1 ring-gray-900/10 hover:ring-[#1fbf75]/40">
            Orion is currently still in delovepment.{" "}
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
            Move from M-Pesa to HBAR in under two minutes.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-12">
            <WaitlistDialog>
              <button className="rounded-md bg-[#1fbf75] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#18a763] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1fbf75]">
                Join the waitlist
              </button>
            </WaitlistDialog>
            <Link
              href="#"
              className="text-sm font-semibold text-gray-900 hover:text-[#1fbf75] transition-colors flex items-center gap-1"
            >
              Learn more{" "}
              <span className="mb-1" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/* Bottom Gradient */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-14rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-32rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36rem] -translate-x-1/2 bg-gradient-to-tr from-[#1fbf75] to-[#73e69f] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72rem]"
        />
      </div>
    </div>
  );
}
