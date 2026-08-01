export const WHATSAPP_NUMBER = "59165265241";
export const WHATSAPP_DISPLAY = "652 65241";

export function whatsappLink(message = "Hola Claudia, me gustaría agendar mi primera sesión informativa gratuita.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
