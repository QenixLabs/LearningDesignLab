import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

const defaultHeading = 'Most Skilling Programs Are Not Designed Around the People They Serve';
const defaultParagraphs = [
  "Many skilling programs across sectors either struggle to motivate people to learn or fail to build the competencies that drive change. This happens because programs are often not designed with learner personas in mind; there is a lack of specificity regarding performance goals and misalignment among the program modality, learner needs, technology, and the people who enable the program. We conduct systems analysis for existing programs and conceptualize new programs that align systems, processes, teams, and learning experience with learners' realities, organizational needs, and expected results. We use approaches like Human-Centred Design (HCD), Theory of Change (ToC), behavior design, and instructional systems design for program and system design and improvement.",
];

interface AdvisoryProblemSectionProps {
  heading?: string;
  paragraphs?: string[];
  text?: string;
}

export default function AdvisoryProblemSection({
  heading = defaultHeading,
  paragraphs,
  text,
}: AdvisoryProblemSectionProps) {
  const contentParagraphs =
    paragraphs && paragraphs.length > 0
      ? paragraphs
      : text
      ? [text]
      : defaultParagraphs;

  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      <NeuronMotif opacity={0.03} />

      <div className="page-margin max-content relative z-10 text-center">
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black mb-12 max-w-4xl mx-auto">
            {heading}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          {contentParagraphs.map((p, i) => (
            <p
              key={i}
              className={`font-body text-sm leading-relaxed text-black/70 max-w-4xl mx-auto ${
                i < contentParagraphs.length - 1 ? 'mb-6' : ''
              }`}
            >
              {p}
            </p>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
