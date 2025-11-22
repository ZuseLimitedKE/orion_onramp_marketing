"use client";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-20 bg-neutral-50" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Friction is Real
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Today, a user in Nairobi or Lagos faces a complex, expensive maze
              to access Web3.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✕
                </div>
                <span>Multiple transfers between mobile money and banks</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✕
                </div>
                <span>High fees eating into capital</span>
              </li>
              <li className="flex items-start gap-3 text-slate-600">
                <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  ✕
                </div>
                <span>Slow processing times killing adoption</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute -top-4 -right-4 bg-primary text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
              The Orion Way
            </div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Zap className="text-primary w-6 h-6" />
              Instant Settlement
            </h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xs">
                    KES
                  </div>
                  <div>
                    <p className="font-semibold">M-Pesa</p>
                    <p className="text-xs text-slate-500">Kenyan Shilling</p>
                  </div>
                </div>
                <ArrowRight className="text-slate-300" />
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-xs">
                    HBAR
                  </div>
                  <div>
                    <p className="font-semibold">Hedera</p>
                    <p className="text-xs text-slate-500">Wallet</p>
                  </div>
                </div>
              </div>
              <p className="text-center text-sm font-medium text-primary">
                Completed in under 2 minutes
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
