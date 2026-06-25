import ScrollReveal from '../../components/ScrollReveal';
import SectionLabel from '../../components/SectionLabel';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: 'Frameworks, Courses, & Curriculums',
    description:
      'We design in-person and online courses, learning journeys, microlearning modules, and assessment frameworks. We design goal-aligned and barrier-informed learning products and behavioral strategies based on the science of learning.',
    link: '/services',
  },
  {
    title: 'Faculty & Teacher Enrichment',
    description:
      'We facilitate hands-on workshops on the Science of Learning, Universal Design for Learning (UDL), Designing Assessments for the AI Era, and AI applications for teaching and research. We equip faculty in schools and universities with evidence-based strategies to enhance the effectiveness of their teaching practice and boost student outcomes.',
    link: '/services',
  },
  {
    title: 'Research & Evaluation of Skilling Programs',
    description:
      'We conduct rigorous process and impact evaluations of in-person and digital skilling programs. We help educational institutes, edtech companies, and nonprofits measure the results of their interventions and synthesize findings into actionable frameworks, toolkits and knowledge products.',
    link: '/services',
  },
  {
    title: 'Advisory for Large-Scale Skilling Programs',
    description:
      'We diagnose barriers, conceptualise systems and solutions that address them using behavioural science, and user-centered design approach. We define program structures, competency gaps & goals, and develop behavioral strategies. We advise policy makers, large-scale nonprofits, and government initiatives on designing systems that support sustained learning at scale.',
    link: '/services',
  },
];

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="bg-near-black py-20 md:py-32 relative overflow-hidden">
        <div className="page-margin max-content relative z-10">
          <ScrollReveal>
            <SectionLabel text="Our services" light />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="heading-xl text-white mb-10 md:mb-16">Our Practice Areas</h2>
          </ScrollReveal>

          {/* Desktop table layout */}
          <ScrollReveal delay={0.15}>
            <div className="hidden lg:block border-t border-b border-white/10">
              <div className="grid grid-cols-4">
                {services.map((s) => (
                  <div
                    key={s.title}
                    className="px-6 py-8 border-r border-white/10 last:border-r-0 text-center"
                  >
                    <h3 className="font-body text-lg font-medium text-white leading-snug">
                      {s.title}
                    </h3>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-4 border-t border-white/10">
                {services.map((s) => (
                  <div
                    key={`${s.title}-desc`}
                    className="relative px-6 py-8 border-r border-white/10 last:border-r-0"
                  >
                    <p className="font-body text-sm leading-relaxed text-white/60 mb-10">
                      {s.description}
                    </p>
                    <a
                      href={s.link}
                      className="absolute bottom-4 right-4 text-white/40 hover:text-white transition-colors"
                      aria-label={`Explore ${s.title}`}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Mobile stacked layout */}
          <div className="lg:hidden flex flex-col border-t border-white/10">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={0.1 * i}>
                <div className="border-b border-white/10 px-2 py-8 relative">
                  <h3 className="font-body text-lg font-medium text-white mb-3 pr-8">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-white/60 mb-6">
                    {s.description}
                  </p>
                  <a
                    href={s.link}
                    className="text-white/40 hover:text-white transition-colors"
                    aria-label={`Explore ${s.title}`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
