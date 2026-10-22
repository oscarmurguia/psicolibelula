import { MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { whatsappLink } from "../lib/whatsapp";

const STEPS = [
  "Conocer a la psicóloga",
  "Conversar sobre tu situación",
  "Resolver tus dudas",
  "Entender cómo funciona el proceso",
  "Definir el plan de acompañamiento",
];

export default function FreeSession() {
  return (
    <section id="primera-orientacion" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-4">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] border border-brand-100 bg-gradient-to-br from-soft-pink via-white to-lavender/50 px-7 py-10 shadow-sm shadow-brand-900/5 md:px-12 md:py-12">
          <div className="pointer-events-none absolute -right-12 -top-16 h-52 w-52 rounded-full bg-lavender/50 blur-2xl" />
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div className="relative">
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                Sin costo, sin compromiso
              </span>
              <h2 className="mt-3 text-3xl text-brand-900 md:text-4xl">
                Tu primera sesión informativa es gratuita
              </h2>
              <p className="mt-4 leading-relaxed text-brand-950/80">
                Una conversación tranquila para conocernos, resolver tus dudas
                y definir juntos el acompañamiento que mejor se adapta a ti.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
              >
                <MessageCircle size={20} /> Reservar por WhatsApp
              </a>
            </div>

            <ol className="relative flex flex-col justify-center gap-4">
              {STEPS.map((step, i) => (
                <li key={step} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-900 text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="text-brand-950">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
