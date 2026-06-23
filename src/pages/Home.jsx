import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';
import { PRODUCTS, PROCESS_STEPS, USE_CASES } from '@/data/products';
import { ZolarSun } from '@/components/ZolarLogo';
import CinematicIntro from '@/components/CinematicIntro';

const EASE = [0.22, 1, 0.36, 1];

const Home = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('zc_intro_seen');
    if (!seen) setShowIntro(true);
    else setReady(true);
  }, []);

  const handleIntroDone = () => {
    setShowIntro(false);
    setReady(true);
  };

  const replayIntro = () => {
    sessionStorage.removeItem('zc_intro_seen');
    setReady(false);
    setShowIntro(true);
  };

  return (
    <>
      {showIntro && <CinematicIntro onDone={handleIntroDone} />}
      {ready && (
        <div data-testid="home-page">
          <section className="relative overflow-hidden">
            <div className="absolute inset-0 dawn-glow pointer-events-none" />
            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-32 relative">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE }} className="font-mono text-[0.7rem] tracking-[0.4em] uppercase text-[#F4B528]">
                AI software · Workflow automation · Operator discipline
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.15, ease: EASE }} className="font-serif-display text-5xl sm:text-6xl lg:text-7xl mt-8 leading-[1.05] text-[#F8FAFC] max-w-5xl">
                AI workflow systems for <span className="gold-shimmer">documents, campaigns</span> and execution.
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.35, ease: EASE }} className="mt-10 max-w-2xl text-lg text-[#94A3B8] leading-relaxed">
                Zolar Capital builds operator-minded AI tools that turn files, contacts, orders and workflow events into structured action — not dashboards no one reads.
              </motion.p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.55, ease: EASE }} className="mt-12 flex flex-wrap items-center gap-4">
                <Link to="/contact" data-testid="hero-cta-request" className="px-7 py-3.5 rounded-full bg-[#F4B528] text-[#0B1426] font-mono text-[0.72rem] tracking-[0.3em] uppercase hover:bg-[#FAD36C] transition-colors inline-flex items-center gap-2">
                  Request Early Access <ArrowUpRight size={14} />
                </Link>
                <Link to="/solutions" data-testid="hero-cta-explore" className="px-7 py-3.5 rounded-full border border-[#F4B528]/40 text-[#F8FAFC] font-mono text-[0.72rem] tracking-[0.3em] uppercase hover:bg-[#F4B528]/10 transition-colors">
                  Explore Platform
                </Link>
                <button type="button" onClick={replayIntro} data-testid="replay-intro-button" className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-[#94A3B8] hover:text-[#F4B528] transition-colors inline-flex items-center gap-2">
                  <Sparkles size={13} /> Replay intro
                </button>
              </motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="mt-20 flex flex-wrap items-center gap-3">
                {['Operator-built', 'Document intelligence', 'Campaign automation', 'Workflow visibility'].map((c) => (
                  <span key={c} className="px-4 py-1.5 rounded-full border border-[#F4B528]/20 text-[0.72rem] text-[#94A3B8] font-mono tracking-widest uppercase">{c}</span>
                ))}
              </motion.div>
            </div>
          </section>

          <section className="relative" data-testid="home-segments">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
              <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
                <div>
                  <div className="font-mono text-[0.7rem] tracking-[0.4em] uppercase text-[#F4B528]">The Platform</div>
                  <h2 className="font-serif-display text-4xl sm:text-5xl mt-4 text-[#F8FAFC] max-w-2xl">Five segments. One operating layer.</h2>
                </div>
                <Link to="/solutions" className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-[#F4B528] hover:underline">All solutions →</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-5">
                {PRODUCTS.map((p, i) => {
                  const span = i === 0 ? 'md:col-span-3' : i === 1 ? 'md:col-span-3' : 'md:col-span-2';
                  return (
                    <Link key={p.slug} to={`/products/${p.slug}`} data-testid={`segment-card-${p.slug}`} className={`lift-card ${span} relative rounded-lg p-8 border overflow-hidden group`} style={{ background: 'linear-gradient(140deg, rgba(26,43,76,0.7) 0%, rgba(18,30,56,0.7) 100%)', borderColor: 'rgba(244,181,40,0.18)', minHeight: '260px' }}>
                      <div className="absolute -top-12 -right-12 opacity-[0.07] group-hover:opacity-[0.12] transition-opacity"><ZolarSun size={220} /></div>
                      <div className="font-mono text-[0.65rem] tracking-[0.35em] uppercase text-[#F4B528]">{String(i + 1).padStart(2, '0')} · {p.accent}</div>
                      <div className="font-serif-display text-3xl mt-4 text-[#F8FAFC] group-hover:text-[#F4B528] transition-colors">{p.short}</div>
                      <div className="text-[#94A3B8] mt-4 leading-relaxed max-w-md">{p.tagline}</div>
                      <div className="absolute bottom-6 right-6 text-[#F4B528] opacity-60 group-hover:opacity-100 transition-opacity"><ArrowUpRight size={20} /></div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="relative py-32" data-testid="home-process">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="font-mono text-[0.7rem] tracking-[0.4em] uppercase text-[#F4B528]">How Zolar Works</div>
              <h2 className="font-serif-display text-4xl sm:text-5xl mt-4 text-[#F8FAFC] max-w-3xl">One operating logic across every use case.</h2>
              <p className="text-[#94A3B8] mt-6 max-w-2xl">Whether the input is a blueprint, a lead, a quote or an order — the pattern is the same.</p>
              <div className="mt-16 relative">
                <div className="absolute top-9 left-0 right-0 h-px hidden md:block" style={{ background: 'linear-gradient(90deg, transparent, rgba(244,181,40,0.4), transparent)' }} />
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                  {PROCESS_STEPS.map((s, i) => (
                    <motion.div key={s.code} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, delay: i * 0.1, ease: EASE }} className="relative">
                      <div className="w-[18px] h-[18px] rounded-full bg-[#F4B528] mb-6 relative z-10 ring-8 ring-[#0B1426]" />
                      <div className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#F4B528]">{s.code}</div>
                      <div className="font-serif-display text-2xl mt-2 text-[#F8FAFC]">{s.label}</div>
                      <div className="text-[#94A3B8] text-sm mt-3 leading-relaxed">{s.body}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="py-32 relative" data-testid="home-usecases">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="font-mono text-[0.7rem] tracking-[0.4em] uppercase text-[#F4B528]">Use cases</div>
              <h2 className="font-serif-display text-4xl sm:text-5xl mt-4 text-[#F8FAFC] max-w-3xl">Broad enough for many industries. Specific enough to solve real bottlenecks.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
                {USE_CASES.map((u) => (
                  <div key={u.title} className="lift-card rounded-lg p-8 border" style={{ background: 'rgba(18,30,56,0.6)', borderColor: 'rgba(244,181,40,0.15)' }}>
                    <div className="font-serif-display text-2xl text-[#F8FAFC]">{u.title}</div>
                    <div className="text-[#94A3B8] mt-3 leading-relaxed">{u.body}</div>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {u.tags.map((t) => <span key={t} className="px-3 py-1 rounded-full border border-[#F4B528]/20 text-[0.7rem] text-[#F4B528] font-mono tracking-widest uppercase">{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-32" data-testid="home-consulting-cta">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
              <div className="relative rounded-xl overflow-hidden p-12 lg:p-16 border" style={{ background: 'linear-gradient(135deg, rgba(26,43,76,0.95) 0%, rgba(11,20,38,0.95) 100%)', borderColor: 'rgba(244,181,40,0.25)' }}>
                <div className="absolute -bottom-32 -right-20 opacity-[0.08]"><ZolarSun size={420} /></div>
                <div className="relative max-w-2xl">
                  <div className="font-mono text-[0.7rem] tracking-[0.4em] uppercase text-[#F4B528]">Consulting & implementation</div>
                  <h2 className="font-serif-display text-4xl sm:text-5xl mt-6 text-[#F8FAFC]">Need help designing the workflow, not just the software?</h2>
                  <p className="text-[#94A3B8] mt-6 leading-relaxed">Practical systems are the goal. Better operating behavior is the outcome. Zolar Capital supports implementation planning, data structure design and operator-level advisory work.</p>
                  <Link to="/consulting" className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-full bg-[#F4B528] text-[#0B1426] font-mono text-[0.72rem] tracking-[0.3em] uppercase hover:bg-[#FAD36C] transition-colors">Explore consulting <ArrowUpRight size={14} /></Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Home;
