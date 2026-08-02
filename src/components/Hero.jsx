import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { whatsappLink } from "../lib/whatsapp";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 md:pt-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-100 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-40 h-64 w-64 rounded-full bg-blush blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
              <Sparkles size={16} /> Primer paso sin costo
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 text-4xl leading-tight text-brand-950 md:text-5xl">
              Tu bienestar mental merece{" "}
              <span className="text-brand-600">atención profesional.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg text-brand-800/80">
              Te acompaño con un enfoque cognitivo, conductual para ayudarte a superar dificultades y construir una vida
              más plena, equilibrada y significativa.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-4">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-brand-700 px-6 py-3.5 font-semibold text-white shadow-lg shadow-brand-700/20 transition-transform hover:scale-105 hover:bg-brand-800"
            >
              Agenda tu primera sesión gratuita
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 px-6 py-3.5 font-semibold text-brand-800 transition-colors hover:border-whatsapp hover:text-whatsapp-dark"
            >
              <MessageCircle size={20} /> Escríbeme por WhatsApp
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="flex justify-center md:justify-end">
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full"
            style={{ maxWidth: 420 }}
          >
            <img
              src="/hero.png"
              alt="MSc. Psi. Claudia Rodríguez, psicóloga clínica, en su consultorio"
              className="w-full rounded-[2.5rem] shadow-xl shadow-brand-900/15"
            />
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
