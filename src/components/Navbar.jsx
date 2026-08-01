import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { whatsappLink } from "../lib/whatsapp";

const LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#psicologa", label: "Psicóloga" },
  { href: "#servicios", label: "Servicios" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-medium text-brand-900">
          <DragonflyMark />
          PsicoLibélula
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-brand-800 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-brand-600">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full bg-whatsapp px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-105 hover:bg-whatsapp-dark md:inline-flex"
        >
          WhatsApp
        </a>

        <button
          aria-label="Abrir menú"
          className="text-brand-900 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-white/95 backdrop-blur-md shadow-sm md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-4 text-brand-800">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-2 py-3 font-medium hover:bg-brand-50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-full bg-whatsapp px-5 py-3 text-center font-semibold text-white"
                >
                  Escríbeme por WhatsApp
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function DragonflyMark() {
  return (
    <svg width="26" height="26" viewBox="0 0 48 48" aria-hidden="true">
      <ellipse cx="14" cy="16" rx="13" ry="7" fill="#d8c9ed" transform="rotate(-18 14 16)" />
      <ellipse cx="16" cy="26" rx="15" ry="8" fill="#bda2df" transform="rotate(-6 16 26)" />
      <ellipse cx="34" cy="16" rx="13" ry="7" fill="#d8c9ed" transform="rotate(18 34 16)" />
      <ellipse cx="32" cy="26" rx="15" ry="8" fill="#bda2df" transform="rotate(6 32 26)" />
      <circle cx="24" cy="8" r="4" fill="#6a3da3" />
      <rect x="20.5" y="10" width="7" height="26" rx="3.5" fill="#6a3da3" />
    </svg>
  );
}
