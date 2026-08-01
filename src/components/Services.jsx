import { User, Users2, ClipboardList, Video } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: User,
    title: "Psicoterapia Individual",
    desc: "Acompañamiento psicológico para comprender lo que sientes y construir claridad.",
    tags: ["Adultos", "Duelo"],
    bg: "bg-sky",
  },
  {
    icon: Users2,
    title: "Terapia Familiar",
    desc: "Espacio de intervención para fortalecer la comunicación, resolver conflictos y transformar la convivencia.",
    tags: ["Familias"],
    bg: "bg-mint",
  },
  {
    icon: ClipboardList,
    title: "Evaluaciones e informes",
    desc: "Elaboración de informes y evaluaciones psicológicas con respaldo profesional.",
    tags: ["Colegios"],
    bg: "bg-blush",
  },
  {
    icon: Video,
    title: "Atención Virtual",
    desc: "Consultas por videollamada, útil para todo el país o para quienes prefieren atención remota.",
    tags: ["Bolivia"],
    bg: "bg-brand-50",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
          Servicios
        </span>
        <h2 className="mt-3 text-3xl text-brand-950 md:text-4xl">
          Acompañamiento para cada etapa
        </h2>
        <p className="mt-4 text-brand-900/70">
          Atención presencial en Sucre y virtual para todo el país.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.1}>
            <div className={`h-full rounded-2xl ${s.bg} p-7 transition-transform hover:-translate-y-1.5 hover:shadow-md`}>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/70 text-brand-700">
                <s.icon size={24} />
              </div>
              <h3 className="mt-5 font-display text-xl text-brand-950">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/70">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white/70 px-3 py-1 text-xs font-medium text-brand-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
