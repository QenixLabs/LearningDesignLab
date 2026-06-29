import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

const steps = [
  'We study the context, enablers and barriers for reaching the desired state.',
  'We define what people need to do differently and consult with them to design solutions.',
  'We conduct rigorous research to understand what has worked and identify evidence-based strategies and pedagogy to drive impact.',
  'We design learning activities and strategies backwards from the goal in collaboration with in context and domain experts.',
  'We apply instructional design and user-centered design to create engaging and effective courses and curriculums.',
  'We prototype our solutions, test with real learners, then refine before scaling.',
  'We create tools and conduct trainings to enable facilitators for quality implementation.',
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <NeuronMotif opacity={0.03} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black text-center mb-20 max-w-4xl mx-auto">
            We Start with the Change You Need to See, Then Work Backwards
          </h2>
        </ScrollReveal>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-pink/30 -translate-x-1/2" />

          {steps.map((step, i) => {
            const isLeft = i % 2 === 0;
            const number = String(i + 1).padStart(2, '0');

            return (
              <ScrollReveal key={i} delay={0.15 + i * 0.08}>
                <div className="relative flex items-start mb-12 md:mb-16 last:mb-0">
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-pink mt-2" />

                  {/* Content */}
                  <div
                    className={`pl-12 md:pl-0 md:w-1/2 ${
                      isLeft
                        ? 'md:pr-16 md:text-right md:ml-0'
                        : 'md:pl-16 md:text-left md:ml-auto'
                    }`}
                  >
                    <span className="font-display text-2xl text-pink/30 block mb-2">
                      {number}
                    </span>
                    <p className="font-body text-base md:text-lg text-black/80 leading-relaxed">
                      {step}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
