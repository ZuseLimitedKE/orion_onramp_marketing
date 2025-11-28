"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/animated-list";

interface Item {
  name: string;
  description: string;
  icon: string;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "New User Onboarded",
    description: "KYC Verified (Kenya)",
    time: "15s ago",
    icon: "👤",
    color: "#00C9A7",
  },
  {
    name: "Payment Received",
    description: "5,000 KES via M-Pesa",
    time: "10s ago",
    icon: "💸",
    color: "#FFB800",
  },
  {
    name: "Smart Contract Triggered",
    description: "Swap execution started",
    time: "5s ago",
    icon: "⚡",
    color: "#FF3D71",
  },
  {
    name: "Settlement Complete",
    description: "350 HBAR sent to wallet",
    time: "Just now",
    icon: "✅",
    color: "#1E86FF",
  },
  {
    name: "Webhook Sent",
    description: "Callback to DApp backend",
    time: "Just now",
    icon: "🔗",
    color: "#9747FF",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[1.03]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-neutral-900 dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function ProductSection() {
  return (
    <section className="bg-neutral-50 py-24 sm:py-32" id="product">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-primary">
                Built for Developers
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                One API. Every African Payment Method.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Orion handles the complexity of local payment rails, compliance,
                and treasury management so you can focus on building your DApp.
              </p>
              <ul role="list" className="mt-10 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="mt-1 size-5 flex-none rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Simple REST API.
                    </strong>{" "}
                    Integrate in minutes with our developer-friendly endpoints
                    and webhooks.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1 size-5 flex-none rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Sub-2-minute settlements.
                    </strong>{" "}
                    Your users get instant access to their funds without
                    waiting.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1 size-5 flex-none rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                    ✓
                  </span>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Full compliance handled.
                    </strong>{" "}
                    KYC, AML, and money transmitter licenses across Kenya and
                    Nigeria.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="relative flex h-[500px] w-full flex-col overflow-hidden rounded-lg bg-background p-6 shadow-lg border border-neutral-100">
            <AnimatedList>
              {notifications.map((item, idx) => (
                <Notification key={idx} {...item} />
              ))}
            </AnimatedList>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
