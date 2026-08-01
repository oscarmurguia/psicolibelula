import { ShieldCheck, FlaskConical, HeartHandshake, MapPinned, UserCheck2, Gift } from "lucide-react";
import Reveal from "./Reveal";

const REASONS = [
  { icon: ShieldCheck, title: "Confidencialidad total", desc: "Tu espacio seguro está garantizado en cada sesión." },
  { icon: FlaskConical, title: "Enfoque basado en evidencia", desc: "Técnicas efectivas y actualizadas, con respaldo clínico." },
  { icon: HeartHandshake, title: "Acompañamiento humano", desc: "Escucha, respeto y comprensión durante todo el proceso." },
  { icon: MapPinned, title: "Presencial y remoto", desc: "Disponible en Sucre y en todo el país por videollamada." },
  { icon: UserCheck2, title: "Atención personalizada", desc: "Un plan pensado para tu historia y tus necesidades." },
  { icon: Gift, title: "Primer paso sin costo", desc: "La sesión informativa inicial es gratuita y sin compromiso." },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
          Por qué elegir PsicoLibélula
        </span>
        <h2 className="mt-3 text-3xl text-brand-950 md:text-4xl">
          Un espacio seguro, de principio a fin
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REASONS.map((r, i) => (
          <Reveal key={r.title} delay={(i % 3) * 0.1}>
            <div className="h-full rounded-2xl border border-brand-100 p-6 transition-colors hover:border-brand-300 hover:bg-brand-50/40">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <r.icon size={20} />
              </span>
              <h3 className="mt-4 font-display text-lg text-brand-950">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-900/70">{r.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
