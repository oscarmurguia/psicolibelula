import { HeartCrack, Brain, CloudSun, UsersRound } from "lucide-react";
import Reveal from "./Reveal";

const CONCERNS = [
  {
    icon: Brain,
    title: "Ansiedad",
    desc: "Comprende tus preocupaciones y encuentra recursos para recuperar la calma.",
    bg: "bg-soft-blue",
  },
  {
    icon: CloudSun,
    title: "Estrés",
    desc: "Reconoce lo que te sobrecarga y desarrolla herramientas para afrontar el día a día.",
    bg: "bg-lavender/60",
  },
  {
    icon: HeartCrack,
    title: "Tristeza",
    desc: "Un espacio de escucha para explorar tus emociones sin juicios y a tu propio ritmo.",
    bg: "bg-soft-pink",
  },
  {
    icon: UsersRound,
    title: "Relaciones",
    desc: "Aborda dificultades emocionales, familiares o de pareja con acompañamiento.",
    bg: "bg-brand-100",
  },
];

export default function AudienceCards() {
  return (
    <section id="ayuda" className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 md:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-700">
          Acompañamiento psicológico
        </span>
        <h2 className="mt-3 text-3xl text-brand-900 md:text-4xl">
          ¿Cómo puedo ayudarte?
        </h2>
        <p className="mt-4 leading-relaxed text-brand-950/75">
          Cada proceso es distinto. Podemos conversar sobre lo que estás viviendo y encontrar juntos un camino posible.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {CONCERNS.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <div
              className={`h-full rounded-3xl ${item.bg} p-6 shadow-sm shadow-brand-900/5 transition-transform hover:-translate-y-1 hover:shadow-md`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-brand-800">
                <item.icon size={23} aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-xl text-brand-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-950/80">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
