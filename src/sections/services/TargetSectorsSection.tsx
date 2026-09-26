import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';
import { imgUrl } from '@/lib/sanity/image';
import type { SanityImageSource } from '@sanity/image-url';

export interface SectorItem {
  title: string;
  description?: string;
  image?: SanityImageSource | string;
}

const defaultSectors: SectorItem[] = [
  {
    title: 'Educational Institutes',
    description: 'Schools, universities and online learning departments of universities',
    image: '/images/verticals/education.jpg',
  },
  {
    title: 'Social Impact Organizations',
    description: 'United Nations, large non-profits, donor agencies and foundations',
    image: '/images/verticals/non-profit.png',
  },
  {
    title: 'Corporates & Enterprises',
    description: 'That need to upskill their employees and training of L&D divisions',
    image: '/images/verticals/corporatjob.jpeg',
  },
];

interface TargetSectorsSectionProps {
  heading?: string;
  sectors?: SectorItem[];
}

export default function TargetSectorsSection({
  heading = 'We Work Across Sectors',
  sectors: sectorsProp,
}: TargetSectorsSectionProps) {
  const displaySectors = sectorsProp && sectorsProp.length > 0 ? sectorsProp : defaultSectors;

  return (
    <section className="bg-white pt-16 pb-10 md:pt-24 md:pb-14 relative overflow-hidden">
      <NeuronMotif opacity={0.03} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black text-center mb-16">{heading}</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displaySectors.map((sector, i) => {
            const imageSrc = imgUrl(sector.image) || (typeof sector.image === 'string' ? sector.image : undefined);

            return (
              <ScrollReveal key={sector.title || i} delay={0.1 * i}>
                <div className="border border-pink/20 rounded-2xl overflow-hidden h-full transition-colors hover:bg-pink/[0.02]">
                  <div className="aspect-[4/3] bg-black/5 overflow-hidden">
                    {imageSrc ? (
                      <img
                        src={imageSrc}
                        alt={sector.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-black/5 text-black/40">
                        {sector.title}
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="heading-md text-black mb-3">{sector.title}</h3>
                    {sector.description && (
                      <p className="font-body text-sm text-black/70 leading-relaxed">
                        {sector.description}
                      </p>
                    )}
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
