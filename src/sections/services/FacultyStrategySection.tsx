import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

const steps = [
  'We conduct pre-workshop surveys, consult institutional leadership and stakeholders, and review existing courses.',
  "Through that, we map the institutional context, the faculty's current practice, the specific behaviors we want to alter, and the barriers and enablers to that change.",
  'We ground every workshop in current evidence from Science of Learning (SOL) and select only strategies with a real evidence base.',
  'We design every session as 70% practice and 30% information, so faculty apply, create, and redesign during the workshop itself and gain the skill and confidence to continue later.',
];

export default function FacultyStrategySection() {
  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      <NeuronMotif opacity={0.03} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal delay={0.2}>
          <h2 className="font-body text-[37px] leading-[40px] font-medium text-black text-center mb-20 max-w-4xl mx-auto">
            We Build Workshops Backwards from the Practice We Want to See
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
                <div className="relative flex items-start pt-14 pb-20 md:pt-20 md:pb-28 first:pt-0 last:pb-0">
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
                    <p className="font-body text-[14px] leading-[23px] text-black/80">
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
