import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

export default function FacultyProblemSection() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <NeuronMotif opacity={0.03} />

      <div className="page-margin max-content relative z-10 text-center">
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black mb-12 max-w-4xl mx-auto">
            Most Faculty Development Doesn't Change How Faculty Teach
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="font-body text-lg md:text-xl leading-relaxed text-black/70 max-w-4xl mx-auto mb-8">
            The standard faculty development programme runs like this: a trainer
            presents slides, faculty take notes, everyone leaves with good
            intentions and a PDF. Six weeks later, nothing in the classroom has
            changed.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="font-body text-lg md:text-xl leading-relaxed text-black/70 max-w-4xl mx-auto">
            That's a design problem. When workshops are 90% information and 10%
            practice – delivered without clear behavioural goals,
            context-mapping, without application tasks, and follow-through – they
            produce awareness, not behaviour change.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
