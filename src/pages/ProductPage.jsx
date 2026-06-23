import { Link, Navigate, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Check } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { ZolarSun } from '@/components/ZolarLogo';

const EASE = [0.22, 1, 0.36, 1];

const ProductPage = () => {
  const { slug } = useParams();
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return <Navigate to="/" replace />;
  const index = PRODUCTS.findIndex((p) => p.slug === slug);
  const next = PRODUCTS[(index + 1) % PRODUCTS.length];

  return (
    <div data-testid={`product-page-${slug}`}>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 dawn-glow pointer-events-none" />
        <div className="absolute -top-32 -right-32 opacity-[0.06] pointer-events-none"><ZolarSun size={520} /></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-24 relative">
          <Link to="/" className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-[#94A3B8] hover:text-[#F4B528]" data-testid="back-home">← Back to platform</Link>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE }} className="font-mono text-[0.7rem] tracking-[0.4em] uppercase text-[#F4B528] mt-12">{String(index + 1).padStart(2, '0')} · {product.accent}</motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.1, ease: EASE }} className="font-serif-display text-5xl sm:text-6xl lg:text-7xl mt-6 leading-[1.05] text-[#F8FAFC] max-w-5xl">{product.title}</motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.25, ease: EASE }} className="mt-8 text-lg text-[#F4B528]/90 font-serif-display italic max-w-3xl">{product.tagline}</motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className="mt-10 text-[#94A3B8] max-w-3xl leading-relaxed text-lg">{product.description}</motion.p>
          <div className="mt-12 flex flex-wrap gap-4">
            <Link to="/contact" data-testid={`product-${slug}-cta-request`} className="px-7 py-3.5 rounded-full bg-[#F4B528] text-[#0B1426] font-mono text-[0.72rem] tracking-[0.3em] uppercase hover:bg-[#FAD36C] transition-colors inline-flex items-center gap-2">Request a demo <ArrowUpRight size={14} /></Link>
            <Link to="/consulting" className="px-7 py-3.5 rounded-full border border-[#F4B528]/40 text-[#F8FAFC] font-mono text-[0.72rem] tracking-[0.3em] uppercase hover:bg-[#F4B528]/10 transition-colors">Talk to an operator</Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="font-mono text-[0.7rem] tracking-[0.4em] uppercase text-[#F4B528]">What it does</div>
          <h2 className="font-serif-display text-3xl sm:text-4xl mt-4 text-[#F8FAFC] max-w-3xl">Three pillars, designed around how operators actually work.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {product.pillars.map((pillar, i) => (
              <motion.div key={pillar.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }} className="lift-card rounded-lg p-8 border" style={{ background: 'rgba(18,30,56,0.7)', borderColor: 'rgba(244,181,40,0.18)' }}>
                <div className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#F4B528]">{String(i + 1).padStart(2, '0')}</div>
                <div className="font-serif-display text-2xl mt-3 text-[#F8FAFC]">{pillar.label}</div>
                <div className="text-[#94A3B8] mt-3 leading-relaxed">{pillar.body}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="font-mono text-[0.7rem] tracking-[0.4em] uppercase text-[#F4B528]">Capabilities</div>
            <h2 className="font-serif-display text-3xl sm:text-4xl mt-4 text-[#F8FAFC]">Built around the work, not the buzzwords.</h2>
            <p className="text-[#94A3B8] mt-5 leading-relaxed">Every capability ships in the operator's vocabulary — review, route, follow up, report. No generic AI features without a workflow attached.</p>
          </div>
          <ul className="space-y-3">
            {product.capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-4 p-4 rounded-md border" style={{ background: 'rgba(18,30,56,0.5)', borderColor: 'rgba(244,181,40,0.1)' }}>
                <span className="mt-1 text-[#F4B528]"><Check size={16} /></span>
                <span className="text-[#F8FAFC]">{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Link to={`/products/${next.slug}`} data-testid="next-product-link" className="lift-card block rounded-xl p-10 border relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(26,43,76,0.95), rgba(11,20,38,0.95))', borderColor: 'rgba(244,181,40,0.2)' }}>
            <div className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-[#F4B528]">Next segment</div>
            <div className="flex items-end justify-between mt-3 flex-wrap gap-4">
              <div className="font-serif-display text-4xl text-[#F8FAFC]">{next.title}</div>
              <div className="text-[#F4B528] flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.3em] uppercase">Continue <ArrowUpRight size={16} /></div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
