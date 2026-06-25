import { Link } from 'react-router-dom';

export default function Footer() {
  const footerLinks = [
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Community', href: '/#community' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <footer className="bg-near-black text-white relative overflow-hidden">
      {/* Subtle grid motif overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3Cpath d='M0 30h60M30 0v60'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />
      
      <div className="page-margin max-content pt-24 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Logo & Tagline */}
          <div>
            <Link to="/" className="font-body text-sm font-medium uppercase tracking-[0.08em] text-white mb-4 block">
              Learning Design Labs
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Research rigour and implementer's realism for organisations that want learning that actually works.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <span className="section-label text-white/50 mb-4 block">Navigate</span>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <span className="section-label text-white/50 mb-4 block">Get in Touch</span>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@learningdesignlabs.com"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                hello@learningdesignlabs.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white text-sm transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Learning Design Labs. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Designed with evidence. Built for impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
