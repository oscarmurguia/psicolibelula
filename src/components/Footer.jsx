import { WHATSAPP_DISPLAY } from "../lib/whatsapp";

export default function Footer() {
  return (
    <footer className="border-t border-brand-100 bg-brand-50/40">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="" className="h-8 w-8 object-contain" />
              <p className="font-display text-lg text-brand-950">PsicoLibélula</p>
            </div>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
              Psicología clínica
            </p>
            <p className="mt-3 max-w-xs text-sm text-brand-900/70">
              MSc. Psi. Claudia Rodríguez · Psicóloga Clínica. Un espacio
              seguro para hablar, comprender tus emociones y comenzar un
              proceso de cambio.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
              Consultorio
            </p>
            <p className="mt-2 text-sm text-brand-900/70">
              Calle La Paz #401, casi Avaroa
              <br />
              Sucre, Bolivia
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
              Contacto
            </p>
            <p className="mt-2 text-sm text-brand-900/70">WhatsApp · {WHATSAPP_DISPLAY}</p>
          </div>
        </div>

        <p className="mt-10 border-t border-brand-100 pt-6 text-center text-xs text-brand-950/80">
          © {new Date().getFullYear()} PsicoLibélula. Todos los derechos reservados. Sucre, Bolivia
        </p>
      </div>
    </footer>
  );
}
