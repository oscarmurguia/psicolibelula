import { Users, UserRound, Baby } from "lucide-react";
import Reveal from "./Reveal";

const AUDIENCES = [
  {
    icon: UserRound,
    title: "Adultos",
    desc: "Acompañamiento psicológico para comprender lo que sientes y construir claridad.",
    bg: "bg-sky",
  },
  {
    icon: Users,
    title: "Adolescentes",
    desc: "Espacio de intervención para fortalecer la comunicación, resolver conflictos y transformar la convivencia.",
    bg: "bg-mint",
  },
  {
    icon: Baby,
    title: "Niños",
    desc: "Apoyo emocional adaptado para su desarrollo y bienestar.",
    bg: "bg-blush",
  },
];

export default function AudienceCards() {
  return (
    <section className="mx-auto -mt-6 max-w-6xl px-6 md:mt-2">
      <div className="grid gap-5 sm:grid-cols-3">
        {AUDIENCES.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.1}>
            <div
              className={`h-full rounded-2xl ${item.bg} p-6 shadow-sm shadow-brand-900/5 transition-transform hover:-translate-y-1.5 hover:shadow-md`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/70 text-brand-700">
                <item.icon size={22} />
              </div>
              <h3 className="mt-4 font-display text-lg text-brand-950">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/70">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
