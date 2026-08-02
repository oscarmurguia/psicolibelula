import { motion } from "framer-motion";
import { HeartHandshake, Ear, Heart, Lock, Award, Video } from "lucide-react";
import Reveal from "./Reveal";

const VALUES = [
  { icon: Heart, label: "Atención personalizada" },
  { icon: Ear, label: "Escucha activa" },
  { icon: HeartHandshake, label: "Empatía" },
  { icon: Lock, label: "Confidencialidad" },
  { icon: Award, label: "Profesionalismo" },
  { icon: Video, label: "Presencial y virtual" },
];

export default function BrandStory() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <Reveal>
          <DragonflyArt />
          <h2 className="mt-8 text-3xl text-brand-950 md:text-4xl">
            La libélula: transformación, equilibrio y crecimiento.
          </h2>
          <p className="mt-5 text-brand-900/75">
            La libélula representa transformación, equilibrio, resiliencia y
            crecimiento personal. Son los mismos valores que sostienen el
            proceso terapéutico: comprender tus emociones, afrontar los
            desafíos de la vida y desarrollar nuevas herramientas para
            alcanzar un mayor bienestar.
          </p>
          <p className="mt-4 text-brand-900/75">
            En PsicoLibélula creemos que pedir ayuda no es un signo de
            debilidad, sino el inicio de un cambio positivo. Aquí encontrarás
            un espacio seguro, profesional y confidencial donde sentirte
            escuchado y acompañado.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {VALUES.map((v, i) => (
            <Reveal key={v.label} delay={i * 0.08}>
              <div className="flex items-center gap-3 rounded-2xl border border-brand-100 bg-white p-4 shadow-sm shadow-brand-900/5 transition-colors hover:border-brand-300">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700">
                  <v.icon size={18} />
                </span>
                <span className="text-sm font-medium text-brand-900">{v.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function DragonflyArt() {
  return (
    <motion.img
      src="/logo.png"
      alt="PsicoLibélula"
      width="72"
      height="72"
      className="object-contain"
      animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
