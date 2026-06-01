import React from "react";
import { motion } from "framer-motion";

const reveal = {
  hidden: { opacity: 0, y: 34 },
  visible: { opacity: 1, y: 0 }
};

export function Section({ id, eyebrow, title, description, children, className = "" }) {
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || description) && (
          <motion.div
            className="mx-auto mb-12 max-w-3xl text-center"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan">{eyebrow}</p>}
            {title && <h2 className="text-balance font-display text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl">{title}</h2>}
            {description && <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink/70 sm:text-lg">{description}</p>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.72, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
