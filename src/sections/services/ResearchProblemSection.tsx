import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

export default function ResearchProblemSection() {
  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      <NeuronMotif opacity={0.03} />

      <div className="page-margin max-content relative z-10 text-center">
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black mb-12 max-w-4xl mx-auto">
            Most Evaluations Measure Satisfaction. We Measure Whether Learning Worked.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-body text-sm leading-relaxed text-black/70 max-w-4xl mx-auto mb-6">
            Most program evaluations are limited to whether participants liked the training. The following recommendations are generic and rarely change what any specific programme does next.
          </p>
          <p className="font-body text-sm leading-relaxed text-black/70 max-w-4xl mx-auto">
            We ask the most consequential question: did this intervention produce the change it was designed to produce, and why or why not? We use established frameworks — Kirkpatrick, LTEM — combined with rigorous mixed-methods research, to conduct evaluations that examine both process and impact. And because our team designs and implements learning programs as much as we evaluate them, our findings are synthesised into tools, frameworks, and guides built for immediate use.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
