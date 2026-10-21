import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

interface ProblemSectionProps {
  heading?: string;
  text?: string;
}

export default function ProblemSection({
  heading = "Content Alone Doesn't Build Capability",
  text = "Organizations often invest heavily in courses and training that learners complete, but forget. Traditional curriculum design prioritises covering information rather than engineering the conditions for retention, application, and mastery. We design learning experiences that bridge the gap between knowing and doing — whether that's an asynchronous online course, a blended learning training journey, or learning processes.",
}: ProblemSectionProps) {
  return (
    <section className="bg-white pt-16 pb-8 md:pt-24 md:pb-12 relative overflow-hidden">
      <NeuronMotif opacity={0.03} />

      <div className="page-margin max-content relative z-10 text-center">
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black mb-12 max-w-4xl mx-auto">
            {heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="font-body text-sm leading-relaxed text-black/70 max-w-4xl mx-auto">
            {text}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
