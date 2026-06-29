import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import useScrollPosition from '../hooks/useScrollPosition';

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface NavigationProps {
  isHome?: boolean;
}

export default function Navigation({ isHome = false }: NavigationProps) {
  const scrollY = useScrollPosition();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const isScrolled = scrollY > 100;
  const isDark = isHome && !isScrolled && location.pathname === '/';

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);

    const hashIndex = href.indexOf('#');
    if (hashIndex !== -1) {
      const targetPath = href.slice(0, hashIndex) || location.pathname;
      const targetId = href.slice(hashIndex + 1);
      if (location.pathname === targetPath) {
        const el = document.getElementById(targetId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(targetPath);
        setTimeout(() => {
          const el = document.getElementById(targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false);
    }
    if (menuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks: NavLink[] = [
    {
      label: 'Services',
      href: '/services',
      children: [
        { label: 'Course Development', href: '/services/course-development' },
        { label: 'Faculty Enrichment', href: '/services/faculty-enrichment' },
        { label: 'Research & Evaluation of Skilling', href: '/services/research-evaluation' },
        { label: 'Advisory for Large-Scale Skilling', href: '/services/advisory' },
      ],
    },
    { label: 'About', href: '/#about' },
    { label: 'Projects', href: '/#projects' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 h-20 flex items-center transition-all duration-300 ${
        isDark
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-sm border-b border-black/8'
      }`}
    >
      <div className="w-full page-margin max-content flex items-center justify-between">
        <Link
          to="/"
          className={`font-body text-sm md:text-base font-medium uppercase tracking-[0.08em] transition-colors duration-300 ${
            isDark ? 'text-white' : 'text-black'
          }`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Learning Design Lab
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} ref={servicesRef} className="relative">
                <button
                  onClick={() => setServicesOpen((open) => !open)}
                  className={`font-body text-sm font-medium transition-colors duration-300 cursor-pointer inline-flex items-center gap-1 ${
                    isDark
                      ? 'text-white/70 hover:text-white'
                      : 'text-black/70 hover:text-near-black'
                  }`}
                  aria-expanded={servicesOpen}
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-black/10 rounded shadow-lg py-2 z-50">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={(e) => handleNavClick(e, child.href)}
                        className="block px-4 py-2 font-body text-sm text-black/80 hover:text-near-black hover:bg-black/5 transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-body text-sm font-medium transition-colors duration-300 cursor-pointer ${
                  isDark
                    ? 'text-white/70 hover:text-white'
                    : 'text-black/70 hover:text-near-black'
                }`}
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative flex flex-col justify-center items-center w-11 h-11 -mr-2 rounded"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-black'}`} />
          <span className={`block w-6 h-0.5 my-1.5 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-black'}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isDark ? 'bg-white' : 'bg-black'}`} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-50 md:hidden animate-in fade-in duration-300"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            className="fixed top-0 right-0 bottom-0 w-[min(280px,80vw)] bg-white shadow-2xl z-50 md:hidden flex flex-col animate-in slide-in-from-right duration-300"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="h-20 flex items-center justify-end px-6">
              <button
                className="flex items-center justify-center w-11 h-11 -mr-2 rounded"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-black" />
              </button>
            </div>
            <nav className="flex flex-col px-6 py-4 gap-1 overflow-y-auto">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className="flex flex-col">
                    <button
                      onClick={() => setMobileServicesOpen((open) => !open)}
                      className="flex items-center justify-between py-3 font-body text-base font-medium text-black/80 hover:text-near-black"
                      aria-expanded={mobileServicesOpen}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          mobileServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {mobileServicesOpen && (
                      <div className="flex flex-col pl-4 border-l border-black/10 mb-2">
                        {link.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={(e) => handleNavClick(e, child.href)}
                            className="py-2.5 font-body text-sm text-black/70 hover:text-near-black"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="py-3 font-body text-base font-medium text-black/80 hover:text-near-black"
                  >
                    {link.label}
                  </a>
                )
              )}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
