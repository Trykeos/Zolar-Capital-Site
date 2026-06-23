export const ZolarSun = ({ size = 120, color = '#F4B528', className = '' }) => {
  const cx = 100;
  const cy = 105;
  const rayCount = 13;
  const rays = Array.from({ length: rayCount }, (_, i) => {
    const angle = (Math.PI * i) / (rayCount - 1) + Math.PI;
    const inner = 38;
    const outer = i % 2 === 0 ? 84 : 70;
    return {
      x1: cx + Math.cos(angle) * inner,
      y1: cy + Math.sin(angle) * inner,
      x2: cx + Math.cos(angle) * outer,
      y2: cy + Math.sin(angle) * outer,
      key: i
    };
  });

  return (
    <svg viewBox="0 0 200 160" width={size} height={(size * 160) / 200} className={className} aria-hidden="true">
      <line x1="14" y1="105" x2="186" y2="105" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <path d={`M ${cx - 30} 105 A 30 30 0 0 1 ${cx + 30} 105`} fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <path d={`M ${cx - 14} 105 A 14 14 0 0 1 ${cx + 14} 105`} fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" opacity="0.85" />
      {rays.map((r) => (
        <line key={r.key} x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2} stroke={color} strokeWidth="3" strokeLinecap="round" />
      ))}
    </svg>
  );
};

export const ZolarWordmark = ({ className = '', size = 'text-5xl' }) => (
  <div className={`text-center ${className}`}>
    <div className={`font-serif-display ${size} tracking-[0.18em] text-[#F8FAFC]`}>ZOLAR</div>
    <div className="flex items-center gap-3 justify-center mt-1">
      <span className="h-px w-8 bg-[#F4B528]" />
      <span className="font-serif-display text-[0.7em] tracking-[0.35em] text-[#F4B528]">CAPITAL</span>
      <span className="h-px w-8 bg-[#F4B528]" />
    </div>
  </div>
);

export const ZolarFullLogo = ({ size = 120, className = '' }) => (
  <div className={`flex flex-col items-center gap-3 ${className}`}>
    <ZolarSun size={size} />
    <ZolarWordmark size={`text-${size > 100 ? '5xl' : '2xl'}`} />
  </div>
);
