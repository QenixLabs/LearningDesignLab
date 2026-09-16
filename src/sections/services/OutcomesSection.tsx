import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

const EngagementIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
    <circle cx="32" cy="20" r="7" stroke="#E5009C" strokeWidth="2.5" />
    <path
      d="M20 48c0-8 5.5-13 12-13s12 5 12 13"
      stroke="#6B7280"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="48" cy="26" r="5" stroke="#E5009C" strokeWidth="2" />
    <path d="M54 46c0-6-4-10-9-10" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
    <circle cx="16" cy="26" r="5" stroke="#E5009C" strokeWidth="2" />
    <path d="M10 46c0-6 4-10 9-10" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const RetentionIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
    <path
      d="M32 10c-11 0-20 9-20 20s9 20 20 20 20-9 20-20S43 10 32 10z"
      stroke="#6B7280"
      strokeWidth="2.5"
    />
    <path
      d="M24 30c0-3 3.5-6 8-6s8 3 8 6-3.5 6-8 6-8-3-8-6z"
      stroke="#E5009C"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
    <circle cx="26" cy="22" r="2" fill="#E5009C" />
    <circle cx="38" cy="22" r="2" fill="#E5009C" />
    <path d="M28 42c1.5 1 4.5 1 8 0" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const BehaviorIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
    <path d="M14 48h36" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M20 48V36" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M32 48V28" stroke="#E5009C" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M44 48V32" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="22" r="5" stroke="#E5009C" strokeWidth="2.5" />
    <path d="M35 20l-3 4-2-2" stroke="#E5009C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ROIIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-24 h-24">
    <path d="M12 48h40" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M16 48V38" stroke="#6B7280" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M28 48V30" stroke="#E5009C" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M40 48V22" stroke="#E5009C" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M40 14l8 8m0 0l-8 8m8-8H42" stroke="#E5009C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const outcomeIcons: React.FC[] = [
  EngagementIcon,
  RetentionIcon,
  BehaviorIcon,
  ROIIcon,
];

const defaultOutcomes = [
  'Higher Learner Engagement',
  'Improved Retention',
  'Measurable Behavior Change',
  'Higher ROI on Training Budgets',
];

interface OutcomesSectionProps {
  heading?: string;
  outcomes?: string[];
}

export default function OutcomesSection({
  heading = 'The Result? Learning That Delivers What You Wanted',
  outcomes: outcomesProp,
}: OutcomesSectionProps) {
  const displayOutcomes = outcomesProp && outcomesProp.length > 0 ? outcomesProp : defaultOutcomes;

  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      <NeuronMotif opacity={0.03} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black text-center mb-16">
            {heading}
          </h2>
        </ScrollReveal>

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${Math.min(displayOutcomes.length, 4)} gap-6`}>
          {displayOutcomes.map((title, i) => {
            const Icon = outcomeIcons[i % outcomeIcons.length];

            return (
              <ScrollReveal key={title || i} delay={0.1 * i}>
                <div className="border border-pink/20 rounded-2xl overflow-hidden h-full transition-colors hover:bg-pink/[0.02]">
                  <div className="aspect-[4/3] bg-warm-grey flex items-center justify-center">
                    <Icon />
                  </div>
                  <div className="p-6 flex items-center justify-center min-h-[100px]">
                    <h3 className="heading-md text-black text-center">{title}</h3>
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
