import ScrollReveal from '../../components/ScrollReveal';
import SectionLabel from '../../components/SectionLabel';

const outcomes = [
  {
    num: '01',
    title: 'Higher Learner Engagement',
    description: 'Evidence-informed design principles that capture attention, sustain motivation, and create meaningful learning experiences.',
  },
  {
    num: '02',
    title: 'Improved Retention',
    description: 'Strategies grounded in cognitive science that ensure knowledge sticks and transfers to real-world application.',
  },
  {
    num: '03',
    title: 'Measurable Behaviour Change',
    description: 'Solutions designed backwards from the behaviours you need to see, with built-in evaluation frameworks.',
  },
];

export default function OutcomesSection() {
  return (
    <section className="bg-black py-32 relative overflow-hidden">
      {/* Pink neuron motif */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FF1493' stroke-width='0.6'%3E%3Cpath d='M10 50 Q30 20 50 50 T90 50'/%3E%3Cpath d='M0 30 Q20 5 40 30 T80 30'/%3E%3Cpath d='M20 70 Q40 45 60 70 T100 70'/%3E%3Ccircle cx='10' cy='50' r='2' fill='%23FF1493'/%3E%3Ccircle cx='50' cy='50' r='2.5' fill='%23FF1493'/%3E%3Ccircle cx='90' cy='50' r='2' fill='%23FF1493'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
      
      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <SectionLabel text="The Result" light />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-white text-center mb-16">
            Learning That Delivers What You Wanted
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {outcomes.map((o, i) => (
            <ScrollReveal key={o.num} delay={0.12 * i} className="text-center relative">
              <span className="font-display text-[8vw] md:text-[5vw] text-pink/[0.08] leading-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">
                {o.num}
              </span>
              <div className="pt-8">
                <h3 className="heading-lg text-white mb-4">{o.title}</h3>
                <p className="font-body text-base leading-relaxed text-white/70 max-w-[35ch] mx-auto">
                  {o.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
