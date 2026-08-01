export default function Portrait({ className = "", size = 320 }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-200 via-brand-100 to-blush shadow-xl shadow-brand-900/15 ${className}`}
      style={{ width: "100%", maxWidth: size, aspectRatio: "4 / 5" }}
    >
      <img
        src="/profile.png"
        alt="MSc. Psi. Claudia Rodríguez, psicóloga clínica"
        className="absolute inset-0 h-full w-full object-cover object-top"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-950/35 via-transparent to-transparent" />
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/20" />
    </div>
  );
}
