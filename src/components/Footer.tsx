import { Link } from 'react-router-dom';

const serviceLinks = [
  { label: 'Course Development', href: '/services/course-development' },
  { label: 'Faculty Enrichment', href: '/services/faculty-enrichment' },
  { label: 'Research & Evaluation of Skilling', href: '/services/research-evaluation' },
  { label: 'Advisory for Large-Scale Skilling', href: '/services/advisory' },
];

const resourceLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Publications', href: '/publications' },
  { label: 'Conferences', href: '/conferences' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">

    <div className="page-margin max-content pt-24 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Logo & Tagline */}
          <div>
            <Link
              to="/"
              className="inline-block mb-4"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
                if (window.location.pathname !== '/') {
                  window.location.href = '/';
                }
              }}
            >
              <img
                src="/images/logos/Logo_-_dark_version-removebg-preview.png"
                alt="Learning Design Lab"
                className="h-20 w-auto"
              />
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Researcher's rigour and implementer's realism for organizations
              that want learning that actually works.
            </p>
          </div>

          {/* Services + Our Team */}
          <div className="flex flex-col gap-12 h-full justify-between">
            <div>
              <span className="font-display text-lg text-pink mb-4 block">
                Services
              </span>
              <nav className="flex flex-col gap-3">
                {serviceLinks.map((link) => (
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

            <Link
              to="/team"
              className="font-display text-lg text-pink block"
            >
              Our Team
            </Link>
          </div>

          {/* Resources + Community */}
          <div className="flex flex-col gap-12 h-full justify-between">
            <div>
              <span className="font-display text-lg text-pink mb-4 block">
                Resources
              </span>
              <nav className="flex flex-col gap-3">
                {resourceLinks.map((link) => (
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

            <span className="font-display text-lg text-pink block">
              Community
            </span>
          </div>

          {/* Contact */}
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

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-xs">
            &copy; {new Date().getFullYear()} Learning Design Lab. All rights reserved.
          </p>
          <p className="text-white/40 text-xs">
            Designed with evidence. Built for impact.
          </p>
        </div>
      </div>
    </footer>
  );
}
