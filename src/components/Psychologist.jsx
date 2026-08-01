import { GraduationCap, Compass, HandHeart } from "lucide-react";
import Reveal from "./Reveal";
import Portrait from "./Portrait";

const TRAITS = [
  { icon: GraduationCap, title: "Formación", desc: "Maestría en Psicología Clínica." },
  { icon: Compass, title: "Enfoque", desc: "Basado en evidencia científica." },
  { icon: HandHeart, title: "Trato", desc: "Cercano, humano y sin juicios." },
];

export default function Psychologist() {
  return (
    <section id="psicologa" className="bg-brand-50/60 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
        <Reveal className="order-2 md:order-1">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Conoce a la psicóloga
          </span>
          <h2 className="mt-3 text-3xl text-brand-950 md:text-4xl">
            MSc. Psi. Claudia Rodríguez
          </h2>
          <p className="mt-1 text-sm font-medium uppercase tracking-wide text-brand-500">
            Psicóloga clínica
          </p>

          <p className="mt-6 text-brand-900/75">
            Mi trabajo combina el rigor de la evidencia científica con un trato
            profundamente humano. Cada persona llega con una historia
            distinta, y mi labor es crear el espacio donde esa historia pueda
            contarse sin juicios, con calma y con dirección.
          </p>
          <p className="mt-4 font-medium text-brand-800">
            Dar el primer paso es lo más importante. Estoy aquí para
            acompañarte.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {TRAITS.map((t) => (
              <div key={t.title} className="rounded-2xl bg-white p-4 text-center shadow-sm shadow-brand-900/5">
                <t.icon className="mx-auto text-brand-600" size={22} />
                <p className="mt-2 text-sm font-semibold text-brand-950">{t.title}</p>
                <p className="mt-1 text-xs text-brand-900/60">{t.desc}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="order-1 flex justify-center md:order-2 md:justify-end">
          <Portrait size={320} />
        </Reveal>
      </div>
    </section>
  );
}
