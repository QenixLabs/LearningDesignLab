import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';
import type { SanityServiceCard } from '@/lib/sanity/queries';

const defaultServices: SanityServiceCard[] = [
  {
    title: 'Learning Program Evaluation',
    paragraphs: [
      "We evaluate the process and impact of skilling and capacity-building programmes using the Kirkpatrick and LTEM frameworks — covering both formative evaluation (to improve a program while it's running) and summative evaluation (to assess what it achieved). Our findings are synthesised into easily applicable frameworks and tools. As designers and implementers of learning programs, we understand the nuances that shape outcomes — which means our reports read less like academic documents and more like tools that can be picked up and used.",
    ],
  },
  {
    title: 'Knowledge Products & Publications',
    paragraphs: [
      "Beyond specific programmes, we translate broader research and consultations on learning and capacity-building into custom toolkits, frameworks, and guidelines that practitioners can use. We also contribute to the field with thought leadership publications. Our knowledge products are simple to understand and built for application, regardless of the target audience's technical background. Where a knowledge product is relevant to our network, we also support dissemination through our newsletter and community forum.",
    ],
  },
  {
    title: 'AI-Powered Learning Enablement',
    paragraphs: [
      'We train learning designers to enhance their design process with AI tools, improving output quality while reducing production time. We also build AI-powered chatbots for employee performance support, evaluate and select AI-enabled platforms for organisational learning, and help institutions enable students to use AI tools more effectively as part of their learning process.',
    ],
  },
  {
    title: 'UX Research on Digital Learning Products',
    paragraphs: [
      'We conduct user experience research and provide structured feedback on digital learning products — assessing usability, accessibility, and learner experience. We also organize small-group conversations with learning professionals and educators to gather qualified feedback on products in development or already in use.',
    ],
  },
  {
    title: 'Digital Learning Platform Selection',
    paragraphs: [
      'We evaluate Learning Management Systems (LMS), authoring tools, and AI-based learning platforms across defined indicators — accessibility, UX, feature comparison, mobile interface, development capability, learner data handling, and offline access for low-bandwidth contexts. The result is a platform recommendation matched to your operational context.',
    ],
  },
];

interface ResearchServicesSectionProps {
  heading?: string;
  services?: SanityServiceCard[];
}

export default function ResearchServicesSection({
  heading = 'Research, Evaluation, & Knowledge Products Built for Application',
  services,
}: ResearchServicesSectionProps) {
  const serviceItems = services && services.length > 0 ? services : defaultServices;

  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      <NeuronMotif opacity={0.03} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal delay={0.15}>
          <h2 className="heading-xl text-black text-center mb-16 max-w-4xl mx-auto">
            {heading}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {serviceItems.map((service, i) => (
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
