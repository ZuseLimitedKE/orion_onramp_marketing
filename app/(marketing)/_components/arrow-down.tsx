"use client";
import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export function ArrowDown() {
  return (
    <motion.div variants={itemVariants} className="pt-20 flex justify-center">
      <motion.a
        href="#problem-solution"
        aria-label="Scroll to About section"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.a>
    </motion.div>
  );
}
