import { MapPin, MessageCircle, Laptop2 } from "lucide-react";
import Reveal from "./Reveal";
import { whatsappLink, WHATSAPP_DISPLAY } from "../lib/whatsapp";

const DETAILS = [
  {
    icon: MapPin,
    label: "Consultorio",
    value: "Calle La Paz #401, casi Avaroa — Sucre, Bolivia",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: WHATSAPP_DISPLAY,
  },
  {
    icon: Laptop2,
    label: "Modalidad",
    value: "Presencial y virtual por videollamada",
  },
];

export default function Contact() {
  return (
    <section id="ubicacion" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-widest text-brand-600">
            Ubicación y contacto
          </span>
          <h2 className="mt-3 text-3xl text-brand-950 md:text-4xl">
            Atención en Sucre y en línea
          </h2>

          <dl className="mt-8 space-y-5">
            {DETAILS.map((d) => (
              <div key={d.label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <d.icon size={20} />
                </span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-brand-500">
                    {d.label}
                  </dt>
                  <dd className="mt-0.5 text-brand-900/80">{d.value}</dd>
                </div>
              </div>
            ))}
          </dl>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-whatsapp-dark"
          >
            <MessageCircle size={20} /> Escríbeme por WhatsApp
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="overflow-hidden rounded-3xl border border-brand-100 shadow-sm">
            <iframe
              title="Ubicación del consultorio PsicoLibélula en Sucre, Bolivia"
              src="https://www.google.com/maps?q=Calle+La+Paz,+Sucre,+Bolivia&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
