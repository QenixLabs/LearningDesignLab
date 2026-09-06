import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

const services = [
  {
    title: 'Evidence-Based Program Design',
    paragraphs: [
      'We start with diagnosing the barriers to learning, adoption, and performance in the current system, using behavioral science and user-centered research at cognitive, motivational, and structural levels.',
      'We also research effective strategies, models, and insights on learners, while consulting stakeholders to align on goals.',
      'From there, we design the system, process, team structure, roles, and learning journey, and train the teams who will implement it, so people actually adopt and sustain the change.',
      'When a program underperforms, we improve it by clarifying success metrics and aligning it with learning design, internal processes, team capabilities, and evaluation systems.',
    ],
  },
  {
    title: 'Ecosystem Design & Digital Learning Strategy',
    paragraphs: [
      'Most organizations just build a learning product – an online course or a platform; very few think about their digital learning strategy. Building competency requires more than access to content. We build learning communities, peer learning systems, mentoring processes, job aids, and AI-based performance support tools, micro-behavioral nudges, and learning refreshers to work on skills, motivation, and systems simultaneously.',
      'Where training currently happens in person, we also help organizations adapt it for digital delivery, converting existing programs into online courses, learning apps, and digital learning journeys.',
    ],
  },
  {
    title: 'Platform Evaluation & Evaluation',
    paragraphs: [
      'Platform choice is a vital lever in a systems-level engagement. We evaluate LMS, authoring tools, and AI-enabled platforms against your specific context – accessibility, UX, data, offline access – as part of the implementation plan. We then make evidence-backed recommendations.',
      'Over the years, we have created digital learning across 10+ platforms and enabled organizations to select the right platform for their audience. When possible, we also facilitate partnerships between organizations and platform companies.',
    ],
  },
  {
    title: 'Quality Assurance & Capacity Building for Learning Design',
    paragraphs: [
      'We create quality processes, frameworks, templates, and standards for learning design specific to your context, so the quality of your learning material is consistent.',
      'We train learning designers, educators, curriculum creators, and ed-tech developers directly – fostering internal capability rather than dependence on external support.',
      'This work matters to us beyond any single client relationship. We\'re invested in advancing the field of learning design itself, so that every learner – not just those in flagship programs – gets access to well-designed learning.',
    ],
  },
];

export default function AdvisoryServicesSection() {
  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      <NeuronMotif opacity={0.03} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal delay={0.1}>
          <p className="section-label-dark text-center mb-6">Services</p>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <h2 className="heading-xl text-black text-center mb-16 max-w-4xl mx-auto">
            We Provide Science-Backed, Diagnosis-First{' '}
            <span className="bg-primary text-white px-1">Advisory</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={0.1 * i}>
              <div className="border border-pink/20 rounded-2xl p-6 h-full transition-colors hover:bg-pink/[0.02]">
                <h3 className="font-display text-lg font-semibold text-black leading-snug mb-6">
                  {service.title}
                </h3>
                {service.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="font-body text-sm leading-relaxed text-black/70 mb-4 last:mb-0"
                  >
                    {p}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
