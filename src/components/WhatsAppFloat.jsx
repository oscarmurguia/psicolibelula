import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <motion.span
        className="hidden whitespace-nowrap rounded-full bg-whatsapp px-4 py-2 text-sm font-medium text-white shadow-xl shadow-whatsapp/30 sm:block"
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.4 }}
      >
        Agenda tu primera sesión gratuita
      </motion.span>
      <motion.a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="Escríbeme por WhatsApp"
        className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-whatsapp/30"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-whatsapp/50" />
        <MessageCircle size={26} className="relative" />
      </motion.a>
    </div>
  );
}
