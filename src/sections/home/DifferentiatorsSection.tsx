import ScrollReveal from '../../components/ScrollReveal';
import SectionLabel from '../../components/SectionLabel';

const differentiators = [
  {
    num: '01',
    title: 'Evidence-Informed',
    description:
      'Rather than tradition or trends, our designs are rooted in the Science of Learning, translating research from cognitive science, behaviour science, and educational research into practice.',
  },
  {
    num: '02',
    title: 'Impact-First and Application-Focused',
    description:
      'We work for impact and prioritise transfer of learning to the real world rather than mere skilling. Our work drives sustained, measurable improvements in people\'s performance.',
  },
  {
    num: '03',
    title: 'Inclusive and Contextually Grounded',
    description:
      'We ground our work in a deep understanding of context, barriers, and needs. We operate with a systems view and create solutions that target specific gaps and goals. Equity and accessibility are embedded in our design process, not an afterthought.',
  },
  {
    num: '04',
    title: 'Cross-Sectoral and Multidisciplinary',
    description:
      'We combine good practices from diverse sectors like instructional design, cognitive & behavioral science, human-centered design, learning technologies, AI for learning, and data analytics to build the optimal learning strategies and solutions.',
  },
];

export default function DifferentiatorsSection() {
  return (
    <section id="about" className="bg-warm-grey py-32 relative overflow-hidden">
      {/* Pink accent neuron motif */}
      <div 
        className="absolute bottom-0 left-0 w-1/3 h-1/2 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FF1493' stroke-width='0.6'%3E%3Cpath d='M10 50 Q30 20 50 50 T90 50'/%3E%3Cpath d='M0 30 Q20 5 40 30 T80 30'/%3E%3Cpath d='M20 70 Q40 45 60 70 T100 70'/%3E%3Ccircle cx='10' cy='50' r='2' fill='%23FF1493'/%3E%3Ccircle cx='50' cy='50' r='2.5' fill='%23FF1493'/%3E%3Ccircle cx='90' cy='50' r='2' fill='%23FF1493'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />
      
      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <SectionLabel text="What Defines Our Solutions" light={false} />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black mb-16">Why Learning Design Labs</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {differentiators.map((d, i) => (
            <ScrollReveal key={d.num} delay={0.12 * i} className="relative">
              <span className="font-display text-[3.5vw] md:text-[2.5vw] text-pink/15 leading-none absolute -top-2 -left-2">
                {d.num}
              </span>
              <div className="pt-8">
                <h3 className="heading-md text-black mb-3">{d.title}</h3>
                <p className="font-body text-base leading-relaxed text-black/45 max-w-[45ch]">
                  {d.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* AI Native Differentiator - full width */}
        <ScrollReveal delay={0.2}>
          <div className="mt-16 pt-8 border-t border-pink/20">
            <h3 className="heading-md text-black mb-3">AI Native Thinking</h3>
            <p className="font-body text-base leading-relaxed text-black/45 max-w-[65ch]">
              Our work uses AI capabilities to deliver the best value even in non-AI projects. Along with
              workshops and learning products, we often offer AI-based tools, dashboards, and GPTs that make
              decision-making, learning and research deeper and more engaging.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
