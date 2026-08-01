export default function Portrait({ className = "", size = 320 }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-200 via-brand-100 to-blush ${className}`}
      style={{ width: "100%", maxWidth: size, aspectRatio: "4 / 5" }}
    >
      <svg viewBox="0 0 200 250" className="absolute inset-0 h-full w-full">
        <rect width="200" height="250" fill="url(#portraitGradient)" />
        <defs>
          <linearGradient id="portraitGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ece4f6" />
            <stop offset="100%" stopColor="#d8c9ed" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="95" r="42" fill="#8154bc" opacity="0.35" />
        <path
          d="M40 250c0-45 27-78 60-78s60 33 60 78z"
          fill="#573286"
          opacity="0.35"
        />
      </svg>
      <span className="absolute bottom-3 right-3 rounded-full bg-white/80 px-3 py-1 text-[11px] font-medium text-brand-700 backdrop-blur-sm">
        Foto próximamente
      </span>
    </div>
  );
}
