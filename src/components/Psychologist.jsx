import { GraduationCap, Compass, HandHeart } from "lucide-react";
import Reveal from "./Reveal";
import Portrait from "./Portrait";

const TRAITS = [
  { icon: GraduationCap, title: "Formación", desc: "Maestría en Psicología Clínica." },
  { icon: Compass, title: "Enfoque", desc: "Cognitivo, conductual" },
  { icon: HandHeart, title: "Trato", desc: "Cercano, humano y sin juicios." },
];

export default function Psychologist() {
  return (
    <section id="psicologa" className="scroll-mt-20 bg-gradient-to-br from-lavender/30 via-brand-50 to-soft-pink/40 py-20 md:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
        <Reveal className="order-2 md:order-1">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-700">
            Sobre Claudia
          </span>
          <h2 className="mt-3 text-3xl text-brand-950 md:text-4xl">
            MSc. Psi. Claudia Rodríguez
          </h2>
          <p className="mt-1 text-sm font-medium uppercase tracking-wide text-brand-700">
            Psicóloga clínica
          </p>

          <p className="mt-6 leading-relaxed text-brand-950/80">
            Mi trabajo combina el rigor de la evidencia científica con un trato
            profundamente humano. Cada persona llega con una historia
            distinta, y mi labor es crear el espacio donde esa historia pueda
            contarse sin juicios, con calma y con dirección.
          </p>
          <p className="mt-4 font-medium leading-relaxed text-brand-900">
            Dar el primer paso es lo más importante. Estoy aquí para
            acompañarte.
          </p>

          <div className="mt-6 flex items-center gap-4 rounded-2xl border border-brand-100 bg-white/80 p-4">
            <img src="/logo.png" alt="" className="h-12 w-12 shrink-0 object-contain" />
            <p className="text-sm leading-relaxed text-brand-950/80">
              Como la libélula, creemos en la posibilidad de transformarse,
              encontrar equilibrio y crecer.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            {TRAITS.map((t) => (
              <div key={t.title} className="rounded-2xl border border-brand-100 bg-white/90 p-4 text-center shadow-sm shadow-brand-900/5">
                <t.icon className="mx-auto text-brand-600" size={22} />
                <p className="mt-2 text-sm font-semibold text-brand-950">{t.title}</p>
                <p className="mt-1 text-xs text-brand-950/75">{t.desc}</p>
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
