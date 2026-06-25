import ScrollReveal from '../../components/ScrollReveal';
import SectionLabel from '../../components/SectionLabel';

const services = [
  {
    title: 'Frameworks, Courses & Curriculums',
    description:
      'We design in-person and online courses, learning journeys, microlearning modules, and assessment frameworks. We create goal-aligned and barrier-informed learning products and behavioural strategies based on the science of learning.',
    link: '/services',
  },
  {
    title: 'Faculty & Teacher Enrichment',
    description:
      'We facilitate hands-on workshops on the Science of Learning, Universal Design for Learning (UDL), Designing Assessments for the AI Era, and AI applications for teaching and research. We equip faculty with evidence-based strategies to enhance teaching effectiveness and boost student outcomes.',
    link: '/services',
  },
  {
    title: 'Research & Evaluation of Skilling Programs',
    description:
      'We conduct rigorous process and impact evaluations of in-person and digital skilling programs. We help educational institutes, edtech companies, and nonprofits measure the results of their interventions and synthesize findings into actionable frameworks, toolkits and knowledge products.',
    link: '/services',
  },
  {
    title: 'Advisory for Large-Scale Skilling Programs',
    description:
      'We diagnose barriers, conceptualise systems and solutions using behavioural science and user-centered design. We define program structures, competency gaps and goals, and develop behavioural strategies. We advise policymakers, large-scale nonprofits, and government initiatives on designing systems that support sustained learning at scale.',
    link: '/services',
  },
];

export default function ServicesSection() {
  return (
    <section id="services">
      {/* Dark portion */}
      <div className="bg-black py-32 relative overflow-hidden">
        {/* Pink neuron motif overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FF1493' stroke-width='0.6'%3E%3Cpath d='M10 50 Q30 20 50 50 T90 50'/%3E%3Cpath d='M0 30 Q20 5 40 30 T80 30'/%3E%3Cpath d='M20 70 Q40 45 60 70 T100 70'/%3E%3Ccircle cx='10' cy='50' r='2' fill='%23FF1493'/%3E%3Ccircle cx='50' cy='50' r='2.5' fill='%23FF1493'/%3E%3Ccircle cx='90' cy='50' r='2' fill='%23FF1493'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '250px 250px',
          }}
        />
        
        <div className="page-margin max-content relative z-10">
          <ScrollReveal>
            <SectionLabel text="Our Practice Areas" light />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="heading-xl text-white mb-16">What We Do</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={0.15 * i}>
                <div className="border-t border-pink/25 pt-6 group">
                  <h3 className="heading-lg text-white mb-4">{service.title}</h3>
                  <p className="font-body text-base leading-relaxed text-white/60 max-w-[65ch] mb-6">
                    {service.description}
                  </p>
                  <a
                    href={service.link}
                    className="font-body text-sm font-medium uppercase text-pink inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                  >
                    Explore <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
