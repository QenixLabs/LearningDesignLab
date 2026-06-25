import ScrollReveal from '../../components/ScrollReveal';
import SectionLabel from '../../components/SectionLabel';

const sectors = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4L6 16V44H18V32H30V44H42V16L24 4Z" />
      </svg>
    ),
    title: 'Educational Institutes',
    description: 'Schools, universities, and online learning departments seeking evidence-based curriculum design and faculty development.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 42C24 42 8 32 8 20C8 14 11 10 16 10C19.5 10 22.5 12 24 15C25.5 12 28.5 10 32 10C37 10 40 14 40 20C40 32 24 42 24 42Z" />
      </svg>
    ),
    title: 'Social Impact Organisations',
    description: 'United Nations agencies, large non-profits, donor agencies and foundations running skilling and education programmes.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="8" y="8" width="32" height="36" />
        <path d="M16 8V4H20V8" />
        <path d="M28 8V4H32V8" />
        <path d="M8 16H40" />
        <path d="M8 26H40" />
      </svg>
    ),
    title: 'Corporates & Enterprises',
    description: 'Organisations that need to upskill employees and strengthen L&D divisions with research-backed learning strategies.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M24 4L4 16H44L24 4Z" />
        <path d="M8 16V40H16V16" />
        <path d="M20 16V40H28V16" />
        <path d="M32 16V40H40V16" />
        <path d="M4 40H44" />
      </svg>
    ),
    title: 'Governments',
    description: 'Policymakers and government initiatives designing large-scale education and skilling programmes.',
  },
];

export default function TargetSectorsSection() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      {/* Subtle magenta neuron motif */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C71585' stroke-width='0.7'%3E%3Cpath d='M10 40 Q25 15 40 40 T70 40'/%3E%3Cpath d='M0 20 Q15 0 30 20 T60 20'/%3E%3Cpath d='M20 60 Q35 40 50 60 T80 60'/%3E%3Ccircle cx='10' cy='40' r='2' fill='%23C71585'/%3E%3Ccircle cx='40' cy='40' r='2.5' fill='%23C71585'/%3E%3Ccircle cx='70' cy='40' r='2' fill='%23C71585'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px',
        }}
      />
      
      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <SectionLabel text="Who We Serve" light={false} />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black mb-16">We Work Across Sectors</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sectors.map((sector, i) => (
            <ScrollReveal key={sector.title} delay={0.1 * i}>
              <div className="border-t border-pink/15 pt-8">
                <div className="text-pink mb-4">{sector.icon}</div>
                <h3 className="heading-md text-black mb-3">{sector.title}</h3>
                <p className="font-body text-sm leading-relaxed text-black/45">
                  {sector.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
