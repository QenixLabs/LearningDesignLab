import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';
import Button from '../../components/Button';
import { FileText } from 'lucide-react';
import { imgUrl } from '@/lib/sanity/image';
import type { SanityImageSource } from '@sanity/image-url';

export interface ProofPointItem {
  title: string;
  image?: SanityImageSource | string;
  fit?: 'cover' | 'contain';
}

const defaultProjects: ProofPointItem[] = [
  {
    title: 'A story-based course on data analytics for Swayam Platform, GIZ',
    image: '/images/verticals/A story-based.jpg',
  },
  {
    title: 'Behavioral design of trainings that enable teachers to practice desired behaviors for UNESCO Myanmar',
    image: '/images/projects/UNESCO_Myanmar_collage.png',
    fit: 'contain',
  },
  {
    title: 'A scenario based gamified course on gender for youth in colombia',
    image: '/images/verticals/A scenerio based .jpg',
  },
  {
    title: 'Targeted design and assessment of projects to build 12 competencies & digital badges for UNICEF India',
    image: '/images/verticals/Targeted design .jpg',
  },
];

function ProjectImage({ title, image, fit = 'cover' }: { title: string; image?: SanityImageSource | string; fit?: 'cover' | 'contain' }) {
  const resolvedUrl = imgUrl(image) || (typeof image === 'string' ? image : undefined);

  if (resolvedUrl) {
    return (
      <div className="w-32 h-32 sm:w-40 sm:h-40 bg-black/5 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={resolvedUrl}
          alt={title}
          className={`w-full h-full ${fit === 'contain' ? 'object-contain p-2' : 'object-cover'}`}
        />
      </div>
    );
  }

  return (
    <div className="w-32 h-32 sm:w-40 sm:h-40 bg-black/5 rounded-lg flex items-center justify-center flex-shrink-0">
      <FileText className="w-10 h-10 text-pink" strokeWidth={1.5} />
    </div>
  );
}

interface ProofPointsSectionProps {
  heading?: string;
  proofPoints?: ProofPointItem[];
}

export default function ProofPointsSection({
  heading = "We've Already Made This Happen … Several Times Over",
  proofPoints: proofPointsProp,
}: ProofPointsSectionProps) {
  const displayProjects = proofPointsProp && proofPointsProp.length > 0 ? proofPointsProp : defaultProjects;

  return (
    <section className="bg-white pt-10 pb-20 md:pt-14 md:pb-28 relative overflow-hidden">
      {/* Neuron motif */}
      <NeuronMotif opacity={0.025} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <h2 className="font-body text-[14px] leading-[23px] font-medium text-black mb-16">
            {heading}
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {displayProjects.map(({ title, image, fit }, i) => (
            <ScrollReveal key={title || i} delay={0.08 * i}>
              <div className="flex items-center gap-4">
                <ProjectImage title={title} image={image} fit={fit} />
                <h3 className="font-body text-xs md:text-sm lg:text-base font-medium text-black leading-snug">{title}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 flex justify-center">
            <Button
              text="See All Our Projects"
              href="/projects"
              variant="primary"
              className="px-10 py-4 text-base"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
