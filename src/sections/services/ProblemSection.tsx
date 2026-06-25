import ScrollReveal from '../../components/ScrollReveal';

const problems = [
  'Solutions get built before anyone defines what learners need to do differently.',
  'Training budgets are spent without a way to measure whether behaviour actually changes.',
  'Courses bridge information, not application — so learning never transfers to the real world.',
];

export default function ProblemSection() {
  return (
    <section className="bg-black py-32 relative overflow-hidden">
      {/* Pink neuron motif */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FF1493' stroke-width='0.7'%3E%3Cpath d='M10 40 Q25 15 40 40 T70 40'/%3E%3Cpath d='M0 20 Q15 0 30 20 T60 20'/%3E%3Cpath d='M20 60 Q35 40 50 60 T80 60'/%3E%3Ccircle cx='10' cy='40' r='2' fill='%23FF1493'/%3E%3Ccircle cx='40' cy='40' r='2.5' fill='%23FF1493'/%3E%3Ccircle cx='70' cy='40' r='2' fill='%23FF1493'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px',
        }}
      />
      
      <div className="page-margin max-content relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <ScrollReveal>
            <h2 className="font-display text-[3.5vw] md:text-[2.5vw] leading-[1.0] tracking-[-0.01em] text-white max-w-[90%]">
              Most organizational learning fails before it begins.
            </h2>
          </ScrollReveal>

          <div className="space-y-8">
            {problems.map((p, i) => (
              <ScrollReveal key={i} delay={0.2 + i * 0.1} className="flex gap-4">
                <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-pink shrink-0" />
                <p className="font-body text-base leading-[1.7] text-white/75">{p}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
