import { UserRound, UsersRound, Baby, HeartHandshake } from "lucide-react";
import Reveal from "./Reveal";

const SERVICES = [
  {
    icon: UserRound,
    title: "Adultos",
    desc: "Un espacio para comprender tus emociones, afrontar cambios y fortalecer tu bienestar.",
    tags: ["Atención individual"],
    bg: "bg-sky",
  },
  {
    icon: UsersRound,
    title: "Adolescentes",
    desc: "Acompañamiento respetuoso para explorar emociones, autoestima y relaciones.",
    tags: ["Desarrollo emocional"],
    bg: "bg-mint",
  },
  {
    icon: Baby,
    title: "Niños",
    desc: "Apoyo emocional adaptado a su etapa de desarrollo, con participación familiar cuando corresponde.",
    tags: ["Acompañamiento infantil"],
    bg: "bg-blush",
  },
  {
    icon: HeartHandshake,
    title: "Parejas y familias",
    desc: "Un espacio para fortalecer la comunicación y trabajar dificultades en los vínculos.",
    tags: ["Vínculos y convivencia"],
    bg: "bg-brand-50",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 bg-gradient-to-b from-white/70 to-soft-blue/35 py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-700">
            Servicios
          </span>
          <h2 className="mt-3 text-3xl text-brand-950 md:text-4xl">
            Atención para cada etapa de la vida
          </h2>
          <p className="mt-4 text-brand-950/80">
            Atención presencial en Sucre y virtual para todo el país.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className={`h-full rounded-3xl ${s.bg} p-6 shadow-sm shadow-brand-900/5 transition-transform hover:-translate-y-1 hover:shadow-md`}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-brand-800">
                  <s.icon size={23} aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-display text-xl text-brand-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-950/80">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-brand-900"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
