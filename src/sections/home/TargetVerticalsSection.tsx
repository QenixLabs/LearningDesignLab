import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { HOME_PAGE_QUERY, type SanityHomePage } from '@/lib/sanity/queries';
import { imgUrl } from '@/lib/sanity/image';

const fallbackVerticals = [
  { label: 'Schools & Universities', image: '/images/verticals/Schools & Universities.png' },
  { label: 'Social Impact Organizations', image: '/images/verticals/non-profit.png' },
  { label: 'Corporates', image: '/images/verticals/Corporatesnew.jpg' },
  { label: 'EdTech Companies', image: '/images/verticals/edtech.jpg' },
];

export default function TargetVerticalsSection() {
  const { data: home } = useSanityQuery<SanityHomePage>(HOME_PAGE_QUERY, {}, {} as SanityHomePage);

  const heading = home.verticalsHeading || 'Who We Work With';
  const verticals = home.verticals?.length
    ? home.verticals.map((v) => ({ label: v.label, image: imgUrl(v.image, 600) ?? '' }))
    : fallbackVerticals;

  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      <NeuronMotif color="#000000" opacity={0.06} size={220} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <h2 className="heading-xl text-black text-center mb-10 md:mb-16">{heading}</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {verticals.map((v, i) => (
            <ScrollReveal key={v.label} delay={0.08 * i} className="flex flex-col items-center text-center">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-warm-grey mb-4">
                <img
                  src={v.image}
                  alt={v.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-body text-sm md:text-base text-black font-medium">
                {v.label}
              </span>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

