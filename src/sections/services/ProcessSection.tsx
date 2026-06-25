import ScrollReveal from '../../components/ScrollReveal';
import SectionLabel from '../../components/SectionLabel';

const steps = [
  {
    num: '01',
    title: 'Discover',
    description:
      'We study your context, enablers and barriers. We define what people need to do differently and consult with stakeholders to understand the landscape.',
  },
  {
    num: '02',
    title: 'Design',
    description:
      'We conduct rigorous research to understand what has worked. We identify evidence-based strategies and pedagogy, then design learning activities backwards from the goal in collaboration with domain experts.',
  },
  {
    num: '03',
    title: 'Develop',
    description:
      'We apply instructional design and user-centered design to create engaging, effective learning experiences. We prototype solutions, test with real learners, then refine before scaling.',
  },
  {
    num: '04',
    title: 'Deliver',
    description:
      'We create tools and conduct trainings to enable facilitators for quality implementation. We ensure your team can sustain and scale the learning independently.',
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-warm-grey py-32 relative overflow-hidden">
      {/* Pink neuron motif */}
      <div 
        className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FF1493' stroke-width='0.6'%3E%3Cpath d='M10 50 Q30 20 50 50 T90 50'/%3E%3Cpath d='M0 30 Q20 5 40 30 T80 30'/%3E%3Cpath d='M20 70 Q40 45 60 70 T100 70'/%3E%3Ccircle cx='10' cy='50' r='2' fill='%23FF1493'/%3E%3Ccircle cx='50' cy='50' r='2.5' fill='%23FF1493'/%3E%3Ccircle cx='90' cy='50' r='2' fill='%23FF1493'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
      
      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <SectionLabel text="Our Process" light={false} />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black mb-16">How We Partner With You</h2>
        </ScrollReveal>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={0.15 * i}>
              <div className="flex flex-col md:flex-row gap-6 md:gap-0">
                <div className="md:w-[15%] shrink-0">
                  <span className="font-display text-[6vw] md:text-[3.5vw] text-pink/15 leading-none tracking-[-0.01em]">
                    {step.num}
                  </span>
                </div>
                <div className="hidden md:block w-px bg-pink/15 self-stretch mx-6" />
                <div className="flex-1">
                  <h3 className="heading-lg text-black mb-3">{step.title}</h3>
                  <p className="font-body text-base leading-relaxed text-black/45 max-w-[55ch]">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
