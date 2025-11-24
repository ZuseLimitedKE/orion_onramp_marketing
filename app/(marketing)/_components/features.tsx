"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Code2, Coins } from "lucide-react";
const features = [
  {
    name: "Instant Settlement",
    description:
      "Move from Mobile Money to Crypto in under 2 minutes. We bridge the gap between local fiat rails and the Hedera network instantly.",
    icon: Zap,
  },
  {
    name: "Regulatory Compliance",
    description:
      "Fully licensed in Kenya and Nigeria. We handle the complex KYC/AML requirements so you can focus on building your DApp.",
    icon: ShieldCheck,
  },
  {
    name: "Developer API",
    description:
      "Integrate African payments with a single API. Give your users a seamless funding experience without leaving your app.",
    icon: Code2,
  },
  {
    name: "Liquidity Engine",
    description:
      "Smart treasury management ensures deep liquidity for high-volume transactions, powered by our automated market making systems.",
    icon: Coins,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Features() {
  return (
    <div className="bg-neutral-50 py-24 sm:py-32" id="features">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Infrastructure First
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to capture the African market
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Orion provides the essential rails connecting the next billion users
            to the Hedera ecosystem. Secure, compliant, and built for speed.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <motion.dl
            className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.name}
                className="relative pl-16"
                variants={item}
              >
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>
      </div>
    </div>
  );
}
