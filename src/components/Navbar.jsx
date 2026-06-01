import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { contact, navItems } from "../data/siteData";
import Icon from "./Icon";

const whatsappUrl = contact.whatsapp;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <motion.nav
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-5 ${
          scrolled ? "border-ink/10 bg-white/[0.88] shadow-premium backdrop-blur-2xl" : "border-ink/10 bg-white/70 backdrop-blur-xl"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <a href="#home" className="group flex items-center gap-3" aria-label="Mohit home">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-ink/10 bg-white font-display text-sm font-bold text-cyan shadow-glow">
            M
          </span>
          <span className="font-display text-sm font-bold tracking-[0.28em] text-ink group-hover:text-cyan">MOHIT</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={contact.instagram} target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram">
            <Icon name="instagram" />
          </a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
            <Icon name="linkedin" />
          </a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
            Chat on WhatsApp
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-ink/10 bg-white text-ink lg:hidden"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative h-4 w-5">
            <span className={`menu-line top-0 ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`menu-line top-2 ${open ? "opacity-0" : ""}`} />
            <span className={`menu-line top-4 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </span>
        </button>
      </motion.nav>

      {open && (
        <motion.div
          className="mx-auto mt-3 max-w-7xl rounded-2xl border border-ink/10 bg-white/95 p-3 shadow-premium backdrop-blur-2xl lg:hidden"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block rounded-xl px-4 py-3 text-sm font-medium text-ink/[0.72] hover:bg-ink/[0.06] hover:text-ink"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary mt-3 w-full justify-center">
            Chat on WhatsApp
          </a>
          <div className="mt-3 grid grid-cols-2 gap-3">
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="contact-link justify-center">
              <Icon name="instagram" /> Instagram
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="contact-link justify-center">
              <Icon name="linkedin" /> LinkedIn
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
