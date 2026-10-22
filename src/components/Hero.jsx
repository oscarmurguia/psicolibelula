import { motion, useReducedMotion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { whatsappLink } from "../lib/whatsapp";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-soft-pink/60 pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="pointer-events-none absolute -left-24 top-8 h-72 w-72 rounded-full bg-lavender/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-40 h-64 w-64 rounded-full bg-soft-blue/60 blur-3xl" />
      <svg
        aria-hidden="true"
        viewBox="0 0 120 150"
        className="pointer-events-none absolute right-5 top-4 hidden h-36 w-28 text-brand-700/25 md:block"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M18 139C46 111 65 75 95 15M39 108c-21 3-29-7-29-21 17 0 27 6 29 21Zm18-30C36 76 32 65 37 52c16 7 23 16 20 26Zm17-30C55 44 54 32 62 20c13 10 18 20 12 28Zm-43 77c-3-18 3-28 18-32 4 15-1 26-18 32Z" />
      </svg>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1.05fr_0.95fr] md:gap-14">
        <div className="md:order-1">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-4 py-1.5 text-sm font-semibold text-brand-800">
              <Sparkles size={16} aria-hidden="true" /> Un espacio seguro para ti
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-xl text-4xl leading-tight text-brand-950 md:text-5xl lg:text-6xl">
              Tu bienestar emocional{" "}
              <span className="text-brand-700">importa.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-950/80 md:text-lg">
              Mereces atención profesional. Te acompaño con calidez y herramientas basadas en evidencia para comprender lo que sientes y avanzar a tu ritmo.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-6 py-3.5 text-center font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark focus-visible:outline-offset-4"
            >
              Agenda una orientación gratuita
            </a>
            <a
              href="#ayuda"
              className="inline-flex items-center gap-2 rounded-full border border-brand-300 bg-white/70 px-6 py-3.5 font-semibold text-brand-900 transition-colors hover:bg-white"
            >
              Conoce cómo puedo ayudarte
            </a>
          </Reveal>
          <Reveal delay={0.4} className="mt-7 flex items-center gap-2 text-sm font-medium text-brand-900/75">
            <MessageCircle size={17} className="text-teal" aria-hidden="true" />
            Atención presencial en Sucre y virtual
          </Reveal>
        </div>

        <Reveal delay={0.15} className="flex justify-center md:order-2 md:justify-end">
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -14, 0] }}
            transition={shouldReduceMotion ? { duration: 0 } : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-sm md:max-w-md"
          >
            <div className="absolute -inset-3 -rotate-3 rounded-[2.5rem] bg-gradient-to-br from-lavender via-soft-pink to-soft-blue" />
            <img
              src="/hero.png"
              alt="MSc. Psi. Claudia Rodríguez, psicóloga clínica, en su consultorio"
              fetchPriority="high"
              className="relative aspect-[4/5] w-full rounded-[2.25rem] object-cover object-center shadow-xl shadow-brand-900/15"
            />
            <img
              src="/logo.png"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-7 -top-7 z-10 h-16 w-16 object-contain drop-shadow-sm"
            />
            <div className="absolute -bottom-4 -left-4 rounded-2xl border border-brand-100 bg-white/95 px-4 py-3 shadow-lg sm:left-4">
              <p className="font-display text-base font-semibold text-brand-900">MSc. Psi. Claudia Rodríguez</p>
              <p className="mt-0.5 text-xs font-medium text-brand-800">Psicóloga clínica</p>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
