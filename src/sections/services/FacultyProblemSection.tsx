import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

interface FacultyProblemSectionProps {
  heading?: string;
  paragraphs?: string[];
  text?: string;
}

const defaultHeading = "Most Faculty Development Doesn't Change How Faculty Teach";
const defaultParagraphs = [
  'The standard faculty development program runs like this: a trainer presents slides, faculty take notes, everyone leaves with good intentions and a PDF. Six weeks later, nothing in the classroom has changed.',
  "That's a design problem. When workshops are 90% information and 10% practice – delivered without clear behavioral goals, content-mapping, application, or follow-through – they only produce awareness, not behavior change.",
];

export default function FacultyProblemSection({
  heading = defaultHeading,
  paragraphs,
  text,
}: FacultyProblemSectionProps) {
  const contentParagraphs =
    paragraphs && paragraphs.length > 0
      ? paragraphs
      : text
      ? [text]
      : defaultParagraphs;

  return (
    <section className="bg-white pt-16 pb-10 md:pt-24 md:pb-14 relative overflow-hidden">
      <NeuronMotif opacity={0.03} />

      <div className="page-margin max-content relative z-10 text-center">
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black mb-12 max-w-4xl mx-auto">
            {heading}
          </h2>
        </ScrollReveal>

        {contentParagraphs.map((p, i) => (
          <ScrollReveal key={i} delay={0.2 + i * 0.1}>
            <p className={`font-body text-[14px] leading-[23px] text-black/70 max-w-4xl mx-auto ${i < contentParagraphs.length - 1 ? 'mb-8' : ''}`}>
              {p}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
