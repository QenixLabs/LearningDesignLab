import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';
import Button from '../../components/Button';
import { imgUrl } from '@/lib/sanity/image';
import type { SanityServiceExampleProject } from '@/lib/sanity/queries';

const defaultProjects = [
  {
    title: "Distilling UNICEF YuWaah's 5.7-million-learner initiative into a replicable blueprint for large-scale digital skilling.",
    image: '/images/research-services-page/image-3.jpg',
  },
  {
    title: "Evaluating UNICEF YuWaah's pilot program to validate the impact of localized, women-led digital skilling infrastructure.",
    image: '/images/research-services-page/image-4.png',
  },
  {
    title: 'Developing actionable strategies and the RAISE-TM assessment tool to help UN agencies design inclusive programs for marginalized youth.',
    image: '/images/research-services-page/image-2.png',
  },
  {
    title: 'Conducting an expert review of a social-emotional learning course by UNICEF MGIEP for early childhood educators, with recommendations to strengthen its design and effectiveness.',
    image: '/images/research-services-page/image-5.png',
  },
];

interface ResearchExampleProjectsSectionProps {
  heading?: string;
  projects?: SanityServiceExampleProject[];
  ctaText?: string;
  ctaHref?: string;
}

export default function ResearchExampleProjectsSection({
  heading = "We've Already Done This … Several Times Over",
  projects,
  ctaText = 'See All Our Projects',
  ctaHref = '/projects',
}: ResearchExampleProjectsSectionProps) {
  const projectList =
    projects && projects.length > 0
      ? projects.map((p) => ({
          title: p.title,
          image: typeof p.image === 'string' ? p.image : imgUrl(p.image, 600) ?? '',
        }))
      : defaultProjects;

  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      <NeuronMotif opacity={0.025} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black text-center mb-16 max-w-4xl mx-auto">
            {heading}
          </h2>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {projectList.map(({ title, image }, i) => (
            <ScrollReveal key={i} delay={0.08 * i}>
              <div className={`flex items-center gap-6 py-8 ${i > 0 ? 'border-t border-pink/20' : ''}`}>
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-black/5 rounded-lg overflow-hidden flex-shrink-0">
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-black/5 text-black/20 text-xs">
                      No image
                    </div>
                  )}
                </div>
                <h3 className="font-body text-xs md:text-sm lg:text-base font-medium text-black leading-snug">{title}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {ctaText && (
          <ScrollReveal delay={0.4}>
            <div className="mt-16 flex justify-center">
              <Button
                text={ctaText}
                href={ctaHref}
                variant="primary"
                className="px-10 py-4 text-base"
              />
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
