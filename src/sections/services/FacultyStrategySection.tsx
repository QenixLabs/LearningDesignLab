import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

const steps = [
  'Through pre-workshop surveys and stakeholder consultation, we map the institutional context, the faculty\'s current practice, and the specific gaps we\'re designing to close.',
  'We specify the teaching behaviours we want to alter, consult with institutional leadership, and review existing course packages to understand current practices, barriers and enablers.',
  'We ground every workshop in current evidence from Science of Learning (SOL) and select only strategies with a real evidence base.',
  'We design every session as 70% practice and 30% information, so faculty apply, create, and redesign during the workshop itself and gain the skill and confidence to continue later.',
  'We follow every workshop with resources for continued application including AI tools, templates, handouts, curated reading and invitation to join a community for learning designers.',
  'Where deeper change is needed, we offer optional structured transfer support: review and refresher sessions, expert feedback, and community learning.',
];

export default function FacultyStrategySection() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <NeuronMotif opacity={0.03} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal delay={0.2}>
          <h2 className="heading-xl text-black text-center mb-20 max-w-4xl mx-auto">
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
