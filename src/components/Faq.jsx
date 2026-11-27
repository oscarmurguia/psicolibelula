import Reveal from "./Reveal";
import { FAQS } from "../lib/faqs";

export default function Faq() {
  return (
    <section id="preguntas-frecuentes" className="scroll-mt-20 mx-auto max-w-3xl px-6 py-16 md:py-20">
      <Reveal className="text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-brand-700">
          Preguntas frecuentes
        </span>
        <h2 className="mt-3 text-3xl text-brand-950 md:text-4xl">
          Resolvemos tus dudas antes de empezar
        </h2>
      </Reveal>

      <div className="mt-10 flex flex-col gap-3">
        {FAQS.map((item, i) => (
          <Reveal key={item.q} delay={i * 0.05}>
            <details className="group rounded-2xl border border-brand-100 bg-white/90 p-5 shadow-sm shadow-brand-900/5">
              <summary className="cursor-pointer list-none font-display text-lg text-brand-900 marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.q}
                  <span className="shrink-0 text-brand-600 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </span>
              </summary>
              <div className="mt-3 flex flex-col gap-3 leading-relaxed text-brand-950/80">
                {item.a.split("\n\n").map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
