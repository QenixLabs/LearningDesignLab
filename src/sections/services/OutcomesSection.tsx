import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

const outcomes: { title: string; image: string }[] = [
  { title: 'Higher Learner Engagement', image: '/images/verticals/Engagement.jpeg' },
  { title: 'Improved Retention', image: '/images/verticals/Retention.jpeg' },
  { title: 'Measurable Behavior Change', image: '/images/verticals/measurable.jpeg' },
  { title: 'Higher ROI on Training Budgets', image: '/images/verticals/RTO.jpeg' },
];

export default function OutcomesSection() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <NeuronMotif opacity={0.03} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black text-center mb-16">
            The Result? Learning That Delivered What You Wanted
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {outcomes.map((outcome, i) => (
            <ScrollReveal key={outcome.title} delay={0.1 * i}>
              <div className="border border-pink/20 rounded-2xl overflow-hidden h-full transition-colors hover:bg-pink/[0.02]">
                <div className="aspect-[4/3] bg-black/5">
                  <img
                    src={outcome.image}
                    alt={outcome.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex items-center justify-center min-h-[100px]">
                  <h3 className="heading-md text-black text-center">{outcome.title}</h3>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
