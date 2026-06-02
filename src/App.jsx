import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import PageLoader from "./components/PageLoader";
import AnimatedCounter from "./components/AnimatedCounter";
import Icon from "./components/Icon";
import { Reveal, Section } from "./components/Section";
import { contact, faqs, features, journey, portfolio, services, stats, testimonials } from "./data/siteData";
import mohitPhoto from "../image/Mohit.jpeg";

const whatsappUrl = contact.whatsapp;

function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-5 pb-20 pt-36 sm:px-6 lg:px-8">
      <div className="hero-aurora" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(23,32,43,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(23,32,43,0.045)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(circle_at_50%_28%,black,transparent_74%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: 38 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.82, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-sm text-ink/70 shadow-sm backdrop-blur-xl">
            <span className="h-2 w-2 rounded-full bg-cyan shadow-[0_0_18px_rgba(87,190,255,0.55)]" />
            Video Editor / Content Growth Specialist / Creative Consultant
          </div>
          <h1 className="max-w-5xl text-balance font-display text-5xl font-semibold leading-[0.98] text-ink sm:text-6xl lg:text-6xl xl:text-7xl">
            Professional Video Editing & Growth Systems For Creators
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-ink/70 sm:text-xl">
            Helping creators and brands grow through premium editing, thumbnails, SEO, and end-to-end content systems built for results.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              Chat on WhatsApp <Icon name="whatsapp" />
            </a>
            <a href="#portfolio" className="btn btn-secondary">
              View Portfolio <Icon name="arrow" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative z-10 min-h-[520px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="creator-stage">
            <div className="reel-frame">
              <div className="reel-topbar">
                <span />
                <span />
                <span />
              </div>
              <div className="timeline-lines">
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="play-disc">
                <Icon name="play" className="h-9 w-9 translate-x-0.5 text-ink" />
              </div>
            </div>
            <motion.div className="floating-card left-0 top-12" animate={{ y: [0, -14, 0] }} transition={{ duration: 5, repeat: Infinity }}>
              <span className="text-cyan">Retention</span>
              <strong>+42%</strong>
            </motion.div>
            <motion.div className="floating-card right-1 top-28" animate={{ y: [0, 16, 0] }} transition={{ duration: 5.5, repeat: Infinity }}>
              <span className="text-gold">Delivery</span>
              <strong>48h</strong>
            </motion.div>
            <motion.div className="floating-card bottom-12 left-8" animate={{ y: [0, 12, 0] }} transition={{ duration: 6, repeat: Infinity }}>
              <span className="text-coral">Systems</span>
              <strong>94</strong>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <Section className="pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <Reveal key={item.label} delay={index * 0.06}>
            <div className="premium-card h-full p-6">
              <AnimatedCounter value={item.value} suffix={item.suffix} />
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">{item.label}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/[0.65]">{item.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="A full-stack content growth engine"
      description="Editing is only one layer. Mohit builds the creative packaging, platform strategy, and publishing system around it."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.04}>
            <motion.article className="service-card group" whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}>
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl border border-ink/10 bg-[#f8fbfd] text-gold transition-colors group-hover:text-cyan">
                <Icon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink/[0.65]">{service.description}</p>
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function VideoCard({ item, tall = false }) {
  const [playing, setPlaying] = useState(false);
  const isShort = item.format === "short";

  return (
    <motion.article className={`video-card group ${isShort ? "video-card-short" : ""} ${tall ? "md:row-span-2" : ""}`} whileHover={{ y: -8 }}>
      <div className={`video-frame ${isShort ? "video-frame-short" : "aspect-video"}`}>
        {playing ? (
          <iframe
            title={item.title}
            src={`${item.embedUrl}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        ) : (
          <button type="button" className="video-thumb" onClick={() => setPlaying(true)} aria-label={`Play ${item.title}`}>
            <img
              src={item.thumbnailUrl}
              alt={`${item.title} thumbnail`}
              loading="lazy"
              className="h-full w-full object-cover opacity-[0.86] grayscale-[18%] transition duration-700 group-hover:scale-[1.06] group-hover:opacity-100 group-hover:grayscale-0"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/[0.82] via-ink/[0.10] to-transparent" />
            <div className="pointer-events-none absolute inset-0 grid place-items-center">
              <span className="play-overlay"><Icon name="play" className="h-6 w-6 translate-x-0.5" /></span>
            </div>
          </button>
        )}
        <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/20 bg-ink/[0.78] px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur-xl">
          {item.category}
        </div>
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan">{item.metric}</p>
        <h3 className="mt-3 font-display text-xl font-semibold text-ink">{item.title}</h3>
      </div>
    </motion.article>
  );
}

function Portfolio() {
  return (
    <Section
      id="portfolio"
      eyebrow="Portfolio"
      title="Premium work, packaged for performance"
      description="A focused showcase of short-form and long-form work built around retention, pacing, packaging, and creator growth."
    >
      <div className="space-y-14">
        <Reveal>
          <div className="flex items-end justify-between gap-5">
            <h3 className="font-display text-2xl font-semibold text-ink">Short Form Portfolio</h3>
            <span className="hidden rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm text-ink/60 sm:block">Reels, Shorts, clips</span>
          </div>
        </Reveal>
        <div className="shorts-grid">
          {portfolio.shortForm.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <VideoCard item={item} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex items-end justify-between gap-5 pt-4">
            <h3 className="font-display text-2xl font-semibold text-ink">Long Form Portfolio</h3>
            <span className="hidden rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-sm text-ink/60 sm:block">YouTube, podcasts, education</span>
          </div>
        </Reveal>
        <div className="grid gap-5 lg:grid-cols-2">
          {portfolio.longForm.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <VideoCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

function WhyMohit() {
  return (
    <Section
      eyebrow="Why Mohit"
      title="Creative execution with a growth operator's mindset"
      description="Every deliverable is built to make the next upload smarter, cleaner, and more likely to convert attention into opportunity."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {features.map((feature, index) => (
          <Reveal key={feature.title} delay={index * 0.06}>
            <div className="feature-card">
              <span className="font-display text-sm font-semibold text-gold">0{index + 1}</span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-ink">{feature.title}</h3>
              <p className="mt-4 leading-7 text-ink/[0.65]">{feature.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="A premium personal brand for a creator's most important growth moments">
      <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="photo-card">
            <div className="photo-placeholder">
              <img src={mohitPhoto} alt="Mohit" className="photo-placeholder-image" />
              <span>MOHIT</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="premium-card p-6 sm:p-8">
            <p className="text-lg leading-8 text-ink/75">
              Mohit works at the intersection of video editing, content growth, and creative consulting. The goal is simple: turn raw ideas into high-performing content assets that look premium, feel intentional, and support measurable business outcomes.
            </p>
            <p className="mt-5 leading-8 text-ink/[0.65]">
              From short-form clips to long-form YouTube systems, Mohit helps creators and brands build a stronger creative presence through sharper storytelling, better thumbnails, discoverable SEO, and repeatable growth workflows.
            </p>
            <div className="mt-8 space-y-4">
              {journey.map((step) => (
                <div key={step.title} className="timeline-item">
                  <span>{step.year}</span>
                  <div>
                    <h3 className="font-display font-semibold text-ink">{step.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-ink/[0.65]">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((value) => (value + 1) % testimonials.length), 4200);
    return () => clearInterval(timer);
  }, []);

  const item = testimonials[active];
  return (
    <Section eyebrow="Testimonials" title="Built for creators who care about the details">
      <Reveal>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-ink/10 bg-white p-6 shadow-premium backdrop-blur-2xl sm:p-10">
          <motion.blockquote
            key={item.quote}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="text-balance font-display text-2xl font-medium leading-snug text-ink sm:text-3xl"
          >
            "{item.quote}"
          </motion.blockquote>
          <div className="mt-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-semibold text-ink">{item.name}</p>
              <p className="mt-1 text-sm text-ink/[0.58]">{item.role}</p>
            </div>
            <div className="flex gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  aria-label={`Show testimonial ${index + 1}`}
                  onClick={() => setActive(index)}
                  className={`h-2.5 rounded-full transition-all ${active === index ? "w-9 bg-gold" : "w-2.5 bg-ink/[0.18] hover:bg-ink/[0.35]"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <Section eyebrow="FAQ" title="Clear answers before the first call">
      <div className="mx-auto max-w-4xl space-y-3">
        {faqs.map((faq, index) => (
          <Reveal key={faq.question} delay={index * 0.04}>
            <button className="faq-item" type="button" onClick={() => setOpen(open === index ? -1 : index)}>
              <span className="flex-1 text-left font-display text-lg font-semibold text-ink">{faq.question}</span>
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-ink/10 text-ink/70">
                {open === index ? "-" : "+"}
              </span>
            </button>
            {open === index && <motion.p className="faq-answer" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}>{faq.answer}</motion.p>}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" className="pb-24">
      <Reveal>
        <div className="contact-cta mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan">Contact</p>
          <h2 className="text-balance font-display text-4xl font-semibold text-ink sm:text-5xl lg:text-6xl">Ready To Grow Your Content?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/70">Let's discuss your project and build something impactful.</p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
              <Icon name="whatsapp" /> Chat on WhatsApp
            </a>
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <Icon name="instagram" /> Instagram DM
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <Icon name="linkedin" /> LinkedIn Connect
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ink/10 px-5 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-ink/[0.55] sm:flex-row sm:items-center">
        <p className="font-display font-semibold tracking-[0.25em] text-ink">MOHIT</p>
        <div className="flex items-center gap-3">
          <a href={contact.instagram} target="_blank" rel="noreferrer" className="social-link" aria-label="Instagram"><Icon name="instagram" /></a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn"><Icon name="linkedin" /></a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="social-link" aria-label="WhatsApp"><Icon name="whatsapp" /></a>
        </div>
        <p>Copyright {new Date().getFullYear()} Mohit. All rights reserved.</p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1, y: [0, -6, 0] }}
      transition={{ scale: { delay: 1.2 }, opacity: { delay: 1.2 }, y: { duration: 2.4, repeat: Infinity } }}
      whileHover={{ scale: 1.08 }}
    >
      <Icon name="whatsapp" className="h-7 w-7" />
    </motion.a>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PageLoader loading={loading} />
      <div className="min-h-screen overflow-x-hidden bg-[#f6f8fb] text-ink selection:bg-gold selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Stats />
          <Services />
          <Portfolio />
          <WhyMohit />
          <About />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </>
  );
}
