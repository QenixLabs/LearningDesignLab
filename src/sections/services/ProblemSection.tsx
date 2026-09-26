import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

interface ProblemSectionProps {
  heading?: string;
  text?: string;
}

export default function ProblemSection({
  heading = "We're Reversing the Way Learning Programs Are Built",
  text = "We start with why learning fails before it begins. Content, platforms, and methods are often decided before determining what learners need to be able to do differently after learning. The result? Learning doesn't address the key issues; learning ends in information transfer, and budgets are spent without any real impact.",
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
