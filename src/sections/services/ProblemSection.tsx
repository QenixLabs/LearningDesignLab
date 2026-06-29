import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

export default function ProblemSection() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <NeuronMotif opacity={0.03} />

      <div className="page-margin max-content relative z-10 text-center">
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black mb-12 max-w-4xl mx-auto">
            We're Reversing the Way Learning Programs are Built
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-body text-lg md:text-xl leading-relaxed text-black/70 max-w-4xl mx-auto mb-8">
            Most learning fails before it begins, because solutions get built before anyone agrees on what learners need to be able to do differently. Topics get chosen. Modules get built. Only afterward does anyone ask whether any of it will produce the desired behaviour.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="font-body text-lg md:text-xl leading-relaxed text-black/70 max-w-4xl mx-auto">
            What's the result? Courses fail to bridge information and application, training budgets are spent without a way to measure impact, but most importantly, learners' performance suffers.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
