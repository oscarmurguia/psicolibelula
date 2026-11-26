import { MessageCircle } from "lucide-react";
import Reveal from "./Reveal";
import { whatsappLink } from "../lib/whatsapp";

const TOPICS = [
  "Dificultades de comunicación y discusiones repetitivas",
  "Pérdida de confianza o crisis de pareja",
  "Decisiones importantes: convivencia, hijos, separación",
  "Conflictos con la familia o con los roles dentro del hogar",
];

export default function CouplesTherapy() {
  return (
    <section id="terapia-de-pareja" className="scroll-mt-20 mx-auto max-w-6xl px-6 py-16 md:py-20">
      <Reveal>
        <div className="rounded-[2rem] border border-brand-100 bg-white/80 px-7 py-10 shadow-sm shadow-brand-900/5 md:px-12 md:py-12">
          <div className="grid gap-10 md:grid-cols-2 md:gap-16">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-brand-700">
                Terapia de pareja en Sucre
              </span>
              <h2 className="mt-3 text-3xl text-brand-950 md:text-4xl">
                Terapia de pareja con una psicóloga clínica
              </h2>
              <p className="mt-4 leading-relaxed text-brand-950/80">
                En la terapia de pareja en Sucre trabajamos para que ambos
                puedan expresarse con respeto, entender lo que ocurre entre
                ustedes y encontrar formas más sanas de relacionarse. Desde el
                enfoque cognitivo-conductual, el trabajo se centra en la
                comunicación, los patrones que se repiten y los acuerdos
                concretos.
              </p>
              <p className="mt-4 leading-relaxed text-brand-950/80">
                La atención es presencial en Sucre o virtual para parejas que
                viven en otras ciudades de Bolivia o fuera del país.
              </p>
              <a
                href={whatsappLink("Hola Claudia, me gustaría consultar sobre terapia de pareja.")}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-white shadow-lg shadow-accent/20 transition-colors hover:bg-accent-dark"
              >
                <MessageCircle size={20} /> Consultar por terapia de pareja
              </a>
            </div>

            <div>
              <h3 className="font-display text-xl text-brand-900">
                Algunos motivos de consulta
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {TOPICS.map((topic) => (
                  <li key={topic} className="flex items-start gap-3 text-brand-950/85">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-600" aria-hidden="true" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
