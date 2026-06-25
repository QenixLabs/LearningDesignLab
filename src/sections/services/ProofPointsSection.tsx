import ScrollReveal from '../../components/ScrollReveal';
import SectionLabel from '../../components/SectionLabel';

const projects = [
  { client: 'GIZ & SWAYAM', name: 'Applied Online Courses on AI and Data Science' },
  { client: 'UNICEF India', name: 'Digital Girl Hub Impact Research' },
  { client: 'University of Stirling', name: 'AI for Teaching, Learning & Research' },
  { client: 'Search for Common Ground', name: 'Digital Stewardship Microlearning' },
];

export default function ProofPointsSection() {
  return (
    <section className="bg-warm-grey py-32 relative overflow-hidden">
      {/* Pink neuron motif */}
      <div 
        className="absolute top-0 right-0 w-1/3 h-full opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C71585' stroke-width='0.7'%3E%3Cpath d='M10 40 Q25 15 40 40 T70 40'/%3E%3Cpath d='M0 20 Q15 0 30 20 T60 20'/%3E%3Cpath d='M20 60 Q35 40 50 60 T80 60'/%3E%3Ccircle cx='10' cy='40' r='2' fill='%23C71585'/%3E%3Ccircle cx='40' cy='40' r='2.5' fill='%23C71585'/%3E%3Ccircle cx='70' cy='40' r='2' fill='%23C71585'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px',
        }}
      />
      
      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <SectionLabel text="We've Already Made This Happen" light={false} />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black mb-16">Selected Client Work</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((p, i) => (
            <ScrollReveal key={p.name} delay={0.08 * i}>
              <div className="border-t border-pink/15 pt-6">
                <span className="section-label text-pink block mb-2">{p.client}</span>
                <h3 className="heading-md text-black">{p.name}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-12">
          <span className="font-body text-sm font-medium uppercase text-pink inline-flex items-center gap-2 cursor-pointer hover:gap-3 transition-all">
            See all projects on our Projects page <span>&rarr;</span>
          </span>
        </ScrollReveal>
      </div>
    </section>
  );
}
