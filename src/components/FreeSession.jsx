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
    <section className="mx-auto max-w-6xl px-6">
      <Reveal>
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-800 to-brand-900 px-8 py-14 text-white md:px-14">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-200">
                Sin costo, sin compromiso
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl">
                Tu primera sesión informativa es gratuita
              </h2>
              <p className="mt-4 text-brand-100/85">
                Una conversación tranquila para conocernos, resolver tus dudas
                y definir juntos el acompañamiento que mejor se adapta a ti.
              </p>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-whatsapp-dark"
              >
                <MessageCircle size={20} /> Reservar por WhatsApp
              </a>
            </div>

            <ol className="space-y-4">
              {STEPS.map((step, i) => (
                <li key={step} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-semibold">
                    {i + 1}
                  </span>
                  <span className="text-brand-50">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
