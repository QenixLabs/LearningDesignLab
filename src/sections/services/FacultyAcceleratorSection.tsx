import ScrollReveal from '../../components/ScrollReveal';

export default function FacultyAcceleratorSection() {
  return (
    <section className="bg-warm-grey pt-0 pb-20 md:pb-32 relative overflow-hidden">
      <div className="page-margin max-content relative z-10">
        <ScrollReveal delay={0.1}>
          <div className="group bg-gradient-to-br from-black to-magenta border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-pink/20">
            <h3 className="font-display text-lg font-semibold text-white leading-snug mb-2 group-hover:text-pink transition-colors">
              Institutional Integration & Behavior Change Accelerator
            </h3>
            <span className="font-display text-sm font-medium text-pink mb-4 block">4-6 Months</span>
            <p className="font-body text-sm leading-relaxed text-white/70 mb-4 last:mb-0">
              This program targets the integration of the new practices into the university and
              sustained behavioral shift amongst faculty. While good training builds skills and
              confidence, it doesn't guarantee a shift in practice. People default to old habits
              without new processes, nudges, peer learning, and structured opportunities to
              practice new behaviors at work. This post-workshop accelerator program is based on
              the COM-B model from behavioral science and research on training transfer.
            </p>
            <p className="font-body text-sm leading-relaxed text-white/70">
              After workshops, we offer a 6-month behavior change accelerator. This includes
              working with you to set up systems, internal champions, feedback loops,
              strengthening internal processes, refresher and peer-learning sessions, community
              moderation and weekly micro-content.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
