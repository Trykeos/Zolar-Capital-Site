import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ZolarSun } from '@/components/ZolarLogo';
import { PRODUCTS } from '@/data/products';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/solutions', label: 'Solutions' },
  { to: '/consulting', label: 'Consulting' },
  { to: '/contact', label: 'Contact' }
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const navigate = useNavigate();
  const navClass = ({ isActive }) =>
    `font-mono text-[0.7rem] tracking-[0.3em] uppercase transition-colors ${isActive ? 'text-[#F4B528]' : 'text-[#94A3B8] hover:text-[#F8FAFC]'}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-40" style={{ background: 'rgba(11, 20, 38, 0.78)', backdropFilter: 'blur(18px)', borderBottom: '1px solid rgba(244,181,40,0.10)' }} data-testid="navbar">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3" data-testid="nav-logo">
          <ZolarSun size={42} />
          <div className="leading-none">
            <div className="font-serif-display text-xl tracking-[0.18em] text-[#F8FAFC]">ZOLAR</div>
            <div className="font-serif-display text-[0.6rem] tracking-[0.35em] text-[#F4B528]">— CAPITAL —</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
            <button className="font-mono text-[0.7rem] tracking-[0.3em] uppercase text-[#94A3B8] hover:text-[#F8FAFC] transition-colors" data-testid="nav-products-trigger">Platform</button>
            {productsOpen && (
              <div className="absolute top-full -left-6 mt-3 w-[320px] rounded-md border p-2" style={{ background: 'rgba(18, 30, 56, 0.96)', borderColor: 'rgba(244,181,40,0.18)', boxShadow: '0 24px 60px rgba(0,0,0,0.5)' }}>
                {PRODUCTS.map((p) => (
                  <Link key={p.slug} to={`/products/${p.slug}`} data-testid={`nav-product-${p.slug}`} className="block px-4 py-3 rounded hover:bg-[#F4B528]/10 transition-colors">
                    <div className="font-serif-display text-lg text-[#F8FAFC]">{p.short}</div>
                    <div className="text-[0.75rem] text-[#94A3B8] mt-0.5 line-clamp-1">{p.tagline}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {NAV_LINKS.slice(2).map((l) => <NavLink key={l.to} to={l.to} className={navClass} data-testid={`nav-link-${l.label.toLowerCase()}`}>{l.label}</NavLink>)}
        </nav>

        <div className="hidden lg:block">
          <button type="button" onClick={() => navigate('/contact')} data-testid="nav-cta-button" className="font-mono text-[0.7rem] tracking-[0.3em] uppercase px-5 py-2.5 rounded-full bg-[#F4B528] text-[#0B1426] hover:bg-[#FAD36C] transition-colors">Request Access</button>
        </div>

        <button type="button" aria-label="Toggle menu" className="lg:hidden text-[#F8FAFC]" onClick={() => setOpen((s) => !s)} data-testid="nav-mobile-toggle">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#F4B528]/10" style={{ background: 'rgba(11,20,38,0.97)' }}>
          <div className="px-6 py-6 space-y-4">
            {NAV_LINKS.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)} className="block font-mono text-[0.75rem] tracking-[0.3em] uppercase text-[#94A3B8] hover:text-[#F4B528]">{l.label}</Link>
            ))}
            <div className="pt-3 border-t border-[#F4B528]/10">
              <div className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#F4B528] mb-3">Platform</div>
              {PRODUCTS.map((p) => (
                <Link key={p.slug} to={`/products/${p.slug}`} onClick={() => setOpen(false)} className="block py-2 font-serif-display text-lg text-[#F8FAFC]">{p.short}</Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export const Footer = () => (
  <footer className="mt-32 border-t border-[#F4B528]/10" style={{ background: '#0B1426' }} data-testid="footer">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 grid grid-cols-1 md:grid-cols-12 gap-10">
      <div className="md:col-span-5">
        <div className="flex items-center gap-3">
          <ZolarSun size={42} />
          <div className="leading-none">
            <div className="font-serif-display text-xl tracking-[0.18em] text-[#F8FAFC]">ZOLAR</div>
            <div className="font-serif-display text-[0.6rem] tracking-[0.35em] text-[#F4B528]">— CAPITAL —</div>
          </div>
        </div>
        <p className="mt-6 max-w-sm text-[#94A3B8] leading-relaxed">Practical AI software and workflow systems for document-heavy, quote-driven and operations-intensive businesses.</p>
        <div className="mt-6 font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#94A3B8]">Built for operators · Not AI theater</div>
      </div>
      <div className="md:col-span-4">
        <div className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#F4B528] mb-5">Platform</div>
        <ul className="space-y-3">
          {PRODUCTS.map((p) => <li key={p.slug}><Link to={`/products/${p.slug}`} className="text-[#94A3B8] hover:text-[#F4B528] transition-colors">{p.short}</Link></li>)}
        </ul>
      </div>
      <div className="md:col-span-3">
        <div className="font-mono text-[0.65rem] tracking-[0.3em] uppercase text-[#F4B528] mb-5">Company</div>
        <ul className="space-y-3">
          <li><Link to="/consulting" className="text-[#94A3B8] hover:text-[#F4B528]">Consulting</Link></li>
          <li><Link to="/contact" className="text-[#94A3B8] hover:text-[#F4B528]">Contact</Link></li>
          <li><Link to="/solutions" className="text-[#94A3B8] hover:text-[#F4B528]">Solutions</Link></li>
        </ul>
      </div>
    </div>
    <div className="border-t border-[#F4B528]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between text-[#94A3B8] text-xs">
        <span>© {new Date().getFullYear()} Zolar Capital. All rights reserved.</span>
        <span className="font-mono tracking-[0.3em] uppercase mt-2 md:mt-0">Capture · Classify · Campaign · Route · Report</span>
      </div>
    </div>
  </footer>
);

const Layout = ({ children }) => (
  <div className="min-h-screen grain-overlay" style={{ background: '#0B1426' }}>
    <Navbar />
    <main className="pt-20">{children}</main>
    <Footer />
  </div>
);

export default Layout;
