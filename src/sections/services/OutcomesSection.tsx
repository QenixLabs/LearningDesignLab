import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

const EngagementIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[68px] h-[68px]">
    {/* Center Leader / Learner */}
    <circle cx="28" cy="18" r="5.5" stroke="#E5009C" strokeWidth="2.25" />
    <path
      d="M18 39c0-5.5 4.5-9 10-9s10 3.5 10 9"
      stroke="#6B7280"
      strokeWidth="2.25"
      strokeLinecap="round"
    />
    {/* Left Peer */}
    <circle cx="15" cy="22" r="4" stroke="#6B7280" strokeWidth="2" />
    <path
      d="M8 39c0-4 3-7 7-7 2 0 3.7.8 4.8 2.2"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Right Peer */}
    <circle cx="41" cy="22" r="4" stroke="#6B7280" strokeWidth="2" />
    <path
      d="M48 39c0-4-3-7-7-7-2 0-3.7.8-4.8 2.2"
      stroke="#6B7280"
      strokeWidth="2"
      strokeLinecap="round"
    />
    {/* Completion spark at top */}
    <path
      d="M28 5v5m-2.5-2.5h5"
      stroke="#E5009C"
      strokeWidth="2.25"
      strokeLinecap="round"
    />
    <circle cx="28" cy="7.5" r="1.25" fill="#E5009C" />
  </svg>
);

const CompetencyIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[68px] h-[68px]">
    {/* Target concentric rings */}
    <circle cx="28" cy="28" r="19" stroke="#6B7280" strokeWidth="1.75" strokeDasharray="3 3" opacity="0.6" />
    <circle cx="28" cy="28" r="13" stroke="#6B7280" strokeWidth="2.25" />
    <circle cx="28" cy="28" r="5.5" stroke="#E5009C" strokeWidth="2.25" fill="#E5009C" fillOpacity="0.15" />
    {/* Crosshairs */}
    <path d="M28 6v5M28 45v5M6 28h5M45 28h5" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
    {/* Upward measurement gain arrow */}
    <path
      d="M17 37l9-9 6 4 11-11"
      stroke="#E5009C"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 12h7v7"
      stroke="#E5009C"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RetentionTransferIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[68px] h-[68px]">
    {/* Knowledge / Memory base */}
    <path
      d="M19 16a6 6 0 0 0-6 6c0 1.2.4 2.3 1 3.2A6 6 0 0 0 13 32a6 6 0 0 0 6 6h1a4.5 4.5 0 0 0 4.5-4.5v-13A4.5 4.5 0 0 0 19 16z"
      stroke="#6B7280"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 23a2.5 2.5 0 1 0 0-5M19 33a2.5 2.5 0 1 0 0-5"
      stroke="#6B7280"
      strokeWidth="1.75"
      strokeLinecap="round"
    />
    {/* Transfer Bridge */}
    <path
      d="M26 28h9"
      stroke="#E5009C"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeDasharray="2.5 3.5"
    />
    <path
      d="M32 24.5l3.5 3.5-3.5 3.5"
      stroke="#E5009C"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Practical Application checkmark node */}
    <circle cx="42" cy="28" r="6.5" stroke="#E5009C" strokeWidth="2.25" fill="#E5009C" fillOpacity="0.15" />
    <path
      d="M39.5 28l2 2 3.5-3.5"
      stroke="#E5009C"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const FrameworksIcon = () => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[68px] h-[68px]">
    {/* Modular building blocks */}
    <rect x="9" y="34" width="17" height="11" rx="2" stroke="#6B7280" strokeWidth="2.25" />
    <rect x="30" y="34" width="17" height="11" rx="2" stroke="#6B7280" strokeWidth="2.25" />
    <rect x="19.5" y="21" width="17" height="11" rx="2" stroke="#6B7280" strokeWidth="2.25" />
    {/* Top scalable framework module */}
    <rect x="19.5" y="8" width="17" height="11" rx="2" stroke="#E5009C" strokeWidth="2.25" fill="#E5009C" fillOpacity="0.15" />
    {/* System nodes */}
    <circle cx="28" cy="13.5" r="1.75" fill="#E5009C" />
    <circle cx="28" cy="26.5" r="1.75" fill="#6B7280" />
    <circle cx="17.5" cy="39.5" r="1.75" fill="#6B7280" />
    <circle cx="38.5" cy="39.5" r="1.75" fill="#6B7280" />
    {/* Scaling arrow */}
    <path d="M40 16l6-6m0 0v5m0-5h-5" stroke="#E5009C" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const outcomeIcons: React.FC[] = [
  EngagementIcon,
  CompetencyIcon,
  RetentionTransferIcon,
  FrameworksIcon,
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
    <section className="bg-white pt-10 pb-10 md:pt-14 md:pb-14 relative overflow-hidden">
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
                  <div className="p-5 flex items-center justify-center min-h-[88px]">
                    <h3 className="font-body text-[15px] font-medium text-black text-center leading-snug">{title}</h3>
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
