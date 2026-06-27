import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

const solutions = [
  {
    title: 'Evidence-Informed',
    description:
      'Rather than tradition or trends, our designs are rooted in the Science of Learning, translating research from cognitive science, behaviour science, and educational research into practice.',
  },
  {
    title: 'Impact-First and Application-Focused',
    description:
      'We work for impact and prioritise transfer of learning to the real world rather than mere skilling. Our work drives sustained, measurable improvements in people\'s performance.',
  },
  {
    title: 'Inclusive and Contextually Grounded',
    description:
      'We ground our work in a deep understanding of context, barriers, and needs. We operate with a systems view and create solutions that target specific gaps and goals. Equity and accessibility are embedded in our design process, not an afterthought.',
  },
  {
    title: 'Cross-Sectoral and Multidisciplinary',
    description:
      'We combine good practices from diverse sectors like instructional design, cognitive & behavioral science, human-centered design, learning technologies, AI for learning, and data analytics to build the optimal learning strategies and solutions.',
  },
  {
    title: 'AI Native Thinking',
    description:
      'Our work uses AI capabilities to deliver the best value even in non-AI projects. Along with workshops and learning products, we often offer AI-based tools, dashboards, and GPTs that make decision-making, learning and research deeper and more engaging.',
  },
];

export default function DifferentiatorsSection() {
  return (
    <section id="about" className="bg-warm-grey py-20 md:py-32 relative overflow-hidden">
      <NeuronMotif color="#000000" opacity={0.06} size={220} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <h2 className="heading-xl text-black mb-10 md:mb-16">What Defines Our Solutions</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {solutions.map((s, i) => (
            <ScrollReveal key={s.title} delay={0.1 * i}>
              <div className="group h-full bg-gradient-to-br from-white to-pink/10 border border-black/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-pink hover:shadow-pink/10">
                <h3 className="font-display text-lg font-semibold text-black leading-snug mb-4 group-hover:text-pink transition-colors">
                  {s.title}
                </h3>
                <p className="font-body text-sm leading-relaxed text-black/60">
                  {s.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
