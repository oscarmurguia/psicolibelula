import { ShieldCheck, Brain, HeartHandshake, Video } from "lucide-react";
import Reveal from "./Reveal";

const REASONS = [
  { icon: ShieldCheck, title: "Confidencialidad", desc: "Un espacio de confianza para compartir lo que estás viviendo." },
  { icon: HeartHandshake, title: "Empatía y cercanía", desc: "Escucha respetuosa, sin juicios y a tu propio ritmo." },
  { icon: Brain, title: "Enfoque basado en evidencia", desc: "Acompañamiento cognitivo-conductual con herramientas profesionales." },
  { icon: Video, title: "Presencial y en línea", desc: "Atención en Sucre y modalidad remota para todo el país." },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-700">
          Por qué elegir PsicoLibélula
        </span>
        <h2 className="mt-3 text-3xl text-brand-950 md:text-4xl">
          Un espacio seguro, de principio a fin
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {REASONS.map((r, i) => (
          <Reveal key={r.title} delay={(i % 3) * 0.1}>
            <div className="h-full rounded-3xl border border-brand-100 bg-white/80 p-6 shadow-sm shadow-brand-900/5 transition-colors hover:border-brand-300 hover:bg-white">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-soft-blue text-brand-900">
              <r.icon size={20} aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg text-brand-950">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-950/80">{r.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
