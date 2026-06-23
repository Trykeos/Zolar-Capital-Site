import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { ZolarSun } from '@/components/ZolarLogo';

const EASE = [0.22, 1, 0.36, 1];

const Solutions = () => (
  <div data-testid="solutions-page">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 dawn-glow pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-16 relative">
        <div className="font-mono text-[0.7rem] tracking-[0.4em] uppercase text-[#F4B528]">Solutions</div>
        <h1 className="font-serif-display text-5xl sm:text-6xl mt-6 text-[#F8FAFC] max-w-4xl leading-[1.05]">A practical AI stack for the work that hides inside documents, contacts and handoffs.</h1>
        <p className="text-[#94A3B8] mt-8 max-w-2xl leading-relaxed text-lg">Built to connect document intelligence, campaign automation, workflow routing and management visibility — in one operating direction.</p>
      </div>
    </section>

    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
        {PRODUCTS.map((p, i) => (
          <motion.div key={p.slug} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.8, ease: EASE }}>
            <Link to={`/products/${p.slug}`} data-testid={`solutions-card-${p.slug}`} className="lift-card grid grid-cols-1 lg:grid-cols-12 gap-8 p-10 rounded-xl border relative overflow-hidden" style={{ background: 'rgba(18,30,56,0.6)', borderColor: 'rgba(244,181,40,0.18)' }}>
              <div className="absolute -bottom-20 -right-20 opacity-[0.05]"><ZolarSun size={320} /></div>
              <div className="lg:col-span-3 relative">
                <div className="font-mono text-[0.65rem] tracking-[0.35em] uppercase text-[#F4B528]">{String(i + 1).padStart(2, '0')} · {p.accent}</div>
                <div className="font-serif-display text-3xl mt-4 text-[#F8FAFC]">{p.short}</div>
              </div>
              <div className="lg:col-span-7 relative">
                <p className="text-[#F4B528]/90 italic font-serif-display text-xl mb-3">{p.tagline}</p>
                <p className="text-[#94A3B8] leading-relaxed">{p.description}</p>
              </div>
              <div className="lg:col-span-2 relative flex lg:justify-end items-start">
                <div className="text-[#F4B528] flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.3em] uppercase">View <ArrowUpRight size={14} /></div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Solutions;
