import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { PRODUCTS } from '@/data/products';
import { ZolarSun } from '@/components/ZolarLogo';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const BACKEND_URL = import.meta.env.VITE_ZOLAR_API_URL || '';
const API = BACKEND_URL ? `${BACKEND_URL}/api` : '/api';
const EASE = [0.22, 1, 0.36, 1];
const initial = { name: '', email: '', company: '', interest: PRODUCTS[0].slug, message: '' };

const Contact = () => {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      setErrorMsg('Name, email and a short message are required.');
      return;
    }
    setStatus('submitting');
    setErrorMsg('');
    try {
      await axios.post(`${API}/leads`, form);
      setStatus('success');
      setForm(initial);
    } catch (err) {
      console.error(err);
      setStatus('error');
      setErrorMsg(err?.response?.data?.detail || "We couldn't submit the form. Please try again.");
    }
  };

  return (
    <div data-testid="contact-page">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 dawn-glow pointer-events-none" />
        <div className="absolute -top-32 -right-40 opacity-[0.07] pointer-events-none"><ZolarSun size={520} /></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-20 relative grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <div className="font-mono text-[0.7rem] tracking-[0.4em] uppercase text-[#F4B528]">Start the conversation</div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE }} className="font-serif-display text-5xl sm:text-6xl mt-6 text-[#F8FAFC] leading-[1.05]">Tell Zolar where the friction lives.</motion.h1>
            <p className="text-[#94A3B8] mt-8 leading-relaxed">Documents, follow-up, hand-offs, visibility — describe the part of the operating system that costs you time, money or attention. We will get back to you within one business day.</p>
            <div className="mt-12 space-y-6 font-mono text-[0.78rem] text-[#94A3B8]">
              <div><div className="tracking-[0.3em] uppercase text-[#F4B528] mb-1">For</div>Operators, owners and ops leads of document-heavy, quote-driven, operations-intensive businesses.</div>
              <div><div className="tracking-[0.3em] uppercase text-[#F4B528] mb-1">Not for</div>Generic AI experimentation. We ship into real workflows.</div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} data-testid="contact-form" className="rounded-xl border p-8 lg:p-10" style={{ background: 'rgba(18,30,56,0.7)', borderColor: 'rgba(244,181,40,0.2)' }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="Your name" name="name" value={form.name} onChange={handleChange} testid="contact-name-input" required />
                <Field label="Email" type="email" name="email" value={form.email} onChange={handleChange} testid="contact-email-input" required />
              </div>
              <div className="mt-5"><Field label="Company" name="company" value={form.company} onChange={handleChange} testid="contact-company-input" /></div>
              <div className="mt-5">
                <label className="block font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#F4B528] mb-2">Area of interest</label>
                <select name="interest" value={form.interest} onChange={handleChange} data-testid="contact-interest-select" className="w-full bg-[#0B1426] border border-[#F4B528]/25 rounded-md px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#F4B528] transition-colors">
                  {PRODUCTS.map((p) => <option key={p.slug} value={p.slug}>{p.short}</option>)}
                  <option value="general">General enquiry</option>
                </select>
              </div>
              <div className="mt-5">
                <label className="block font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#F4B528] mb-2">What's slowing you down?</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={5} data-testid="contact-message-input" required className="w-full bg-[#0B1426] border border-[#F4B528]/25 rounded-md px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#F4B528] transition-colors resize-none" placeholder="Documents, follow-up, workflow handoffs, visibility — describe the friction." />
              </div>
              <button type="submit" disabled={status === 'submitting'} data-testid="contact-submit-button" className="mt-7 w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#F4B528] text-[#0B1426] font-mono text-[0.72rem] tracking-[0.3em] uppercase hover:bg-[#FAD36C] transition-colors disabled:opacity-60">
                {status === 'submitting' ? 'Sending…' : 'Contact Zolar Capital →'}
              </button>
              {status === 'success' && (
                <div className="mt-6 flex items-start gap-3 p-4 rounded-md border" style={{ background: 'rgba(244,181,40,0.07)', borderColor: 'rgba(244,181,40,0.3)' }} data-testid="contact-success">
                  <CheckCircle2 className="text-[#F4B528] mt-0.5" size={18} />
                  <div><div className="font-serif-display text-lg text-[#F8FAFC]">Message received.</div><div className="text-[#94A3B8] text-sm">A Zolar operator will get back to you within one business day.</div></div>
                </div>
              )}
              {status === 'error' && (
                <div className="mt-6 flex items-start gap-3 p-4 rounded-md border border-red-400/30 bg-red-500/5" data-testid="contact-error">
                  <AlertCircle className="text-red-400 mt-0.5" size={18} />
                  <div className="text-red-200/90 text-sm">{errorMsg}</div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

const Field = ({ label, name, value, onChange, type = 'text', testid, required }) => (
  <div>
    <label className="block font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#F4B528] mb-2">{label}{required && ' *'}</label>
    <input type={type} name={name} value={value} onChange={onChange} data-testid={testid} required={required} className="w-full bg-[#0B1426] border border-[#F4B528]/25 rounded-md px-4 py-3 text-[#F8FAFC] focus:outline-none focus:border-[#F4B528] transition-colors" />
  </div>
);

export default Contact;
