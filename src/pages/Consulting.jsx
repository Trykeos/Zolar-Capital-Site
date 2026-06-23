import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ZolarSun } from '@/components/ZolarLogo';

const EASE = [0.22, 1, 0.36, 1];
const SERVICES = [
  { label: 'Strategy', body: 'Diagnose where documents, follow-up or workflow friction is creating drag. Map the operating system you actually need.' },
  { label: 'Implementation', body: 'Stand up the Zolar tools alongside your CRM, ERP and document stack. Migrate data, define tags, configure routing.' },
  { label: 'Operator advisory', body: 'Coach owners and operations leads on what to measure, what to enforce and what to leave alone. Quarterly reviews.' }
];

const Consulting = () => (
  <div data-testid="consulting-page">
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 dawn-glow pointer-events-none" />
      <div className="absolute -top-32 -right-40 opacity-[0.07] pointer-events-none"><ZolarSun size={520} /></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-20 relative">
        <div className="font-mono text-[0.7rem] tracking-[0.4em] uppercase text-[#F4B528]">Consulting & implementation</div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE }} className="font-serif-display text-5xl sm:text-6xl mt-6 text-[#F8FAFC] max-w-4xl leading-[1.05]">Software alone rarely fixes operational drag.</motion.h1>
        <p className="text-[#94A3B8] mt-8 max-w-2xl leading-relaxed text-lg">Zolar Capital also runs implementation planning, data structure design, process mapping and operator-level advisory — so the platform is the outcome of a workflow, not a substitute for one.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }} className="lift-card rounded-lg p-8 border" style={{ background: 'rgba(18,30,56,0.7)', borderColor: 'rgba(244,181,40,0.18)' }}>
              <div className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#F4B528]">{String(i + 1).padStart(2, '0')}</div>
              <div className="font-serif-display text-2xl mt-3 text-[#F8FAFC]">{s.label}</div>
              <div className="text-[#94A3B8] mt-3 leading-relaxed">{s.body}</div>
            </motion.div>
          ))}
        </div>
        <div className="mt-20 rounded-xl p-12 border relative overflow-hidden" style={{ background: 'linear-gradient(135deg, rgba(26,43,76,0.95), rgba(11,20,38,0.95))', borderColor: 'rgba(244,181,40,0.25)' }}>
          <div className="absolute -bottom-32 -right-20 opacity-[0.07]"><ZolarSun size={420} /></div>
          <div className="relative max-w-2xl">
            <h2 className="font-serif-display text-4xl text-[#F8FAFC]">Practical systems are the goal. Better operating behavior is the outcome.</h2>
            <p className="text-[#94A3B8] mt-6 leading-relaxed">Tell us where the friction lives — quotes that go cold, documents nobody reads, hand-offs that get lost between teams. We will design a path through it.</p>
            <Link to="/contact" data-testid="consulting-cta-contact" className="inline-flex items-center gap-2 mt-10 px-7 py-3.5 rounded-full bg-[#F4B528] text-[#0B1426] font-mono text-[0.72rem] tracking-[0.3em] uppercase hover:bg-[#FAD36C] transition-colors">Start the conversation →</Link>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Consulting;
