import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';
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
        <NeuronMotif color="#FF1493" opacity={0.12} size={250} />

        <div className="page-margin max-content relative z-10">
          <ScrollReveal>
            <h2 className="heading-xl text-white mb-10 md:mb-16">Our Practice Areas</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={0.1 * i}>
                <div className="group h-full flex flex-col bg-white/[0.03] border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-pink hover:shadow-xl hover:shadow-pink/10">
                  <h3 className="font-display text-lg font-semibold text-white leading-snug mb-4 group-hover:text-pink transition-colors">
                    {s.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-white/60 mb-8 flex-1">
                    {s.description}
                  </p>
                  <div className="flex justify-end">
                    <a
                      href={s.link}
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink text-white hover:bg-pink-light transition-colors"
                      aria-label={`Explore ${s.title}`}
                    >
                      <ArrowUpRight className="w-7 h-7" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
