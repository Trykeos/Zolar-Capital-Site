import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { PRODUCTS } from '@/data/products';
import { ZolarSun, ZolarWordmark } from '@/components/ZolarLogo';

const EASE = [0.22, 1, 0.36, 1];

const CinematicIntro = ({ onDone }) => {
  const [act, setAct] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timers = [
      setTimeout(() => setAct(1), 350),
      setTimeout(() => setAct(2), 1700),
      setTimeout(() => setAct(3), 2800),
      setTimeout(() => setAct(4), 5200),
      setTimeout(() => finish(), 9200)
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const finish = () => {
    sessionStorage.setItem('zc_intro_seen', '1');
    onDone?.();
  };

  const handleSegmentClick = (slug) => {
    finish();
    setTimeout(() => navigate(`/products/${slug}`), 40);
  };

  const radius = 32;

  return (
    <motion.div
      key="intro"
      className="fixed inset-0 z-[100] overflow-hidden"
      style={{ background: '#0B1426' }}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: EASE }}
      data-testid="cinematic-intro"
    >
      <motion.div className="absolute inset-0 dawn-glow pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: act >= 1 ? 1 : 0 }} transition={{ duration: 1.6, ease: EASE }} />
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{ width: '140vmin', height: '140vmin', background: 'radial-gradient(circle, rgba(244,181,40,0.55) 0%, rgba(244,181,40,0.18) 22%, rgba(244,181,40,0.04) 45%, transparent 65%)', filter: 'blur(18px)' }}
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: act >= 2 ? 1 : 0.2, opacity: act >= 2 ? (act >= 4 ? 0.35 : 0.85) : 0 }}
        transition={{ duration: 1.3, ease: EASE }}
      />
      {act >= 2 && Array.from({ length: 9 }).map((_, i) => {
        const angle = (i / 9) * 360;
        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 origin-left h-px pointer-events-none"
            style={{ width: '50vmin', background: 'linear-gradient(90deg, rgba(244,181,40,0.0) 0%, rgba(244,181,40,0.6) 35%, rgba(244,181,40,0.0) 100%)', transform: `rotate(${angle}deg)` }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: act >= 4 ? 0 : 0.9 }}
            transition={{ duration: 1.1, delay: 0.05 * i, ease: EASE }}
          />
        );
      })}
      <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none" initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: act >= 4 ? 0.7 : 1 }} transition={{ duration: 1.2, ease: EASE }}>
        <motion.div
          initial={{ filter: 'blur(20px)', opacity: 0 }}
          animate={{ filter: 'blur(0px)', opacity: 1 }}
          transition={{ duration: 1.2, ease: EASE }}
          style={{ filter: act >= 2 ? 'drop-shadow(0 0 28px rgba(244,181,40,0.7)) drop-shadow(0 0 60px rgba(244,181,40,0.4))' : 'drop-shadow(0 0 8px rgba(244,181,40,0.4))', transition: 'filter 1.4s cubic-bezier(0.22,1,0.36,1)' }}
        >
          <ZolarSun size={150} />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.6, ease: EASE }} className="mt-2">
          <ZolarWordmark size="text-6xl" />
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: act >= 4 ? 1 : 0 }} transition={{ duration: 0.7, ease: EASE }} className="mt-6 font-mono text-[0.7rem] tracking-[0.4em] uppercase text-[#94A3B8]">
          Choose a segment
        </motion.div>
      </motion.div>

      {PRODUCTS.map((p, i) => {
        const rad = (p.angle * Math.PI) / 180;
        const tx = Math.cos(rad) * radius;
        const ty = Math.sin(rad) * radius;
        return (
          <motion.button
            key={p.slug}
            type="button"
            onClick={() => handleSegmentClick(p.slug)}
            data-testid={`intro-segment-${p.slug}`}
            className="absolute left-1/2 top-1/2 group"
            style={{ transformOrigin: 'center' }}
            initial={{ x: '-50%', y: '-50%', opacity: 0, scale: 0.2 }}
            animate={{ x: act >= 3 ? `calc(-50% + ${tx}vmin)` : '-50%', y: act >= 3 ? `calc(-50% + ${ty}vmin)` : '-50%', opacity: act >= 3 ? 1 : 0, scale: act >= 3 ? 1 : 0.2 }}
            transition={{ duration: 1.4, delay: 0.08 * i, ease: EASE }}
          >
            <motion.span
              className="absolute right-full top-1/2 h-px origin-right pointer-events-none"
              style={{ width: `${radius}vmin`, background: 'linear-gradient(90deg, rgba(244,181,40,0.5) 0%, rgba(244,181,40,0.0) 100%)', transform: `rotate(${p.angle + 180}deg)` }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: act >= 3 ? 1 : 0, opacity: act >= 4 ? 0.4 : 0.8 }}
              transition={{ duration: 1.2, delay: 0.08 * i + 0.2, ease: EASE }}
            />
            <div className="px-5 py-4 rounded-lg border backdrop-blur-md text-left min-w-[230px] max-w-[260px] -translate-x-1/2 -translate-y-1/2" style={{ background: 'rgba(18, 30, 56, 0.78)', borderColor: 'rgba(244, 181, 40, 0.35)', boxShadow: '0 18px 60px -16px rgba(0,0,0,0.7), 0 0 0 1px rgba(244,181,40,0.05) inset' }}>
              <div className="font-mono text-[0.6rem] tracking-[0.35em] uppercase text-[#F4B528]">{String(i + 1).padStart(2, '0')} · {p.accent}</div>
              <div className="font-serif-display text-xl mt-1 text-[#F8FAFC] group-hover:text-[#F4B528] transition-colors">{p.short}</div>
              <div className="text-[0.78rem] text-[#94A3B8] mt-2 leading-snug line-clamp-2">{p.tagline}</div>
            </div>
          </motion.button>
        );
      })}

      <button type="button" onClick={finish} data-testid="skip-intro-button" className="absolute bottom-8 right-8 z-[110] font-mono text-[0.7rem] tracking-[0.3em] uppercase text-[#94A3B8] hover:text-[#F4B528] transition-colors">Skip intro →</button>
      <AnimatePresence>
        {act >= 4 && (
          <motion.button type="button" onClick={finish} data-testid="enter-site-button" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[110] px-7 py-3 rounded-full border border-[#F4B528]/40 text-[#F4B528] font-mono text-[0.7rem] tracking-[0.3em] uppercase hover:bg-[#F4B528] hover:text-[#0B1426] transition-colors" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: EASE }}>
            Enter Zolar
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CinematicIntro;
