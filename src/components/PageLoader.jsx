import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({ loading }) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[80] grid place-items-center bg-[#f6f8fb]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.55, ease: "easeOut" } }}
        >
          <motion.div
            className="relative grid h-28 w-28 place-items-center rounded-full border border-ink/10 bg-white"
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <motion.span
              className="absolute inset-0 rounded-full border border-cyan/50"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
              style={{ borderTopColor: "transparent", borderLeftColor: "transparent" }}
            />
            <span className="font-display text-sm font-bold tracking-[0.32em] text-ink">MOHIT</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
