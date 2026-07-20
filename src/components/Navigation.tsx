import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, X } from 'lucide-react';
import useScrollPosition from '../hooks/useScrollPosition';
import { scrollToTop } from '../lib/utils';

interface NavLink {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
  button?: boolean;
}

export default function Navigation() {
  const scrollY = useScrollPosition();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(null);
  const dropdownsRef = useRef<HTMLDivElement>(null);

  const whiteHeroRoutes = ['/team', '/projects', '/publications', '/conferences'];
  const hasWhiteHero = whiteHeroRoutes.some((route) =>
    location.pathname.startsWith(route)
  );
  const isScrolled = scrollY > 100;
  const isDark = !isScrolled && !hasWhiteHero;

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileOpenDropdown(null);

    if (location.pathname === href) {
      scrollToTop();
    } else {
      navigate(href);
    }
  };

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownsRef.current && !dropdownsRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
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
    { label: 'About us', href: '/' },
    { label: 'Our team', href: '/team' },
    {
      label: 'Our work',
      href: '/projects',
      children: [
        { label: 'Projects', href: '/projects' },
        { label: 'Publications', href: '/publications' },
        { label: 'Conferences', href: '/conferences' },
      ],
    },
    { label: 'Contact us', href: '/', button: true },
  ];

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-40 h-20 flex items-center transition-all duration-300 ${
        isDark
          ? 'bg-black/80 backdrop-blur-sm md:bg-transparent'
          : 'bg-white/95 backdrop-blur-sm border-b border-black/8'
      }`}
    >
      <div className="w-full page-margin max-content flex items-center justify-between">
        <Link
          to="/"
          className="transition-colors duration-300"
          onClick={(e) => handleNavClick(e, '/')}
        >
          <img
            src={
              isDark
                ? '/images/logos/Logo_-_dark_version-removebg-preview.png'
                : '/images/logos/Logo_-_light_version-removebg-preview.png'
            }
            alt="Learning Design Lab"
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav ref={dropdownsRef} className="hidden md:flex items-center gap-12">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative">
                <button
                  onClick={() =>
                    setOpenDropdown((current) => (current === link.label ? null : link.label))
                  }
                  className={`font-body text-sm font-medium transition-colors duration-300 cursor-pointer inline-flex items-center gap-1 ${
                    isDark
                      ? 'text-white/70 hover:text-white'
                      : 'text-black/70 hover:text-near-black'
                  }`}
                  aria-expanded={openDropdown === link.label}
                >
                  {link.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      openDropdown === link.label ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openDropdown === link.label && (
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
            ) : link.button ? (
              <button
                key={link.label}
                type="button"
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2 rounded font-body text-sm font-medium bg-pink text-white hover:bg-pink-dark transition-colors cursor-pointer"
              >
                {link.label}
              </button>
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
          className={`md:hidden relative z-50 flex flex-col justify-center items-center w-11 h-11 -mr-2 rounded-full transition-all duration-300 ${
            isScrolled ? 'bg-black/80' : 'bg-transparent'
          }`}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isScrolled || isDark ? 'bg-white' : 'bg-black'}`} />
          <span className={`block w-6 h-0.5 my-1.5 transition-all duration-300 ${isScrolled || isDark ? 'bg-white' : 'bg-black'}`} />
          <span className={`block w-6 h-0.5 transition-all duration-300 ${isScrolled || isDark ? 'bg-white' : 'bg-black'}`} />
        </button>
      </div>
    </header>

    {/* Mobile Drawer */}
    {menuOpen && (
      <>
        <div
          className="fixed inset-0 bg-black/40 z-[60] md:hidden animate-in fade-in duration-300"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
        <div
          className="fixed top-0 right-0 bottom-0 w-[min(280px,80vw)] bg-white shadow-2xl z-[60] md:hidden flex flex-col animate-in slide-in-from-right duration-300"
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
          <nav className="flex flex-col px-6 py-4 gap-3 overflow-y-auto">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="flex flex-col">
                  <button
                    onClick={() =>
                      setMobileOpenDropdown((current) =>
                        current === link.label ? null : link.label
                      )
                    }
                    className="flex items-center justify-between py-3 font-body text-base font-medium text-black/80 hover:text-near-black"
                    aria-expanded={mobileOpenDropdown === link.label}
                  >
                    {link.label}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        mobileOpenDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {mobileOpenDropdown === link.label && (
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
              ) : link.button ? (
                <button
                  key={link.label}
                  type="button"
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="w-full text-left px-4 py-3 rounded font-body text-base font-medium bg-pink text-white hover:bg-pink-dark transition-colors"
                >
                  {link.label}
                </button>
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
    </>
  );
}
