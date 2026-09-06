import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { TESTIMONIALS_QUERY, type SanityTestimonial } from '@/lib/sanity/queries';
import { defaultTestimonials } from '../../data/testimonials';
import type { Testimonial } from '../../data/testimonials';

function QuoteWithHighlight({ quote, highlight }: { quote: string; highlight?: string }) {
  if (!highlight) return <>{quote}</>;
  const parts = quote.split(highlight);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <span className="bg-primary text-white px-1">{highlight}</span>
          )}
        </span>
      ))}
    </>
  );
}

interface TestimonialsSectionProps {
  title?: string;
  items?: Testimonial[];
  compact?: boolean;
}

export default function TestimonialsSection({ title, items, compact }: TestimonialsSectionProps) {
  const { data: fetched } = useSanityQuery<SanityTestimonial[]>(TESTIMONIALS_QUERY, {}, []);
  const testimonials = items ?? (fetched.length > 0 ? fetched : defaultTestimonials);
  const slides = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section
      className={`bg-white relative overflow-hidden ${
        compact ? 'pt-6 md:pt-8 pb-20 md:pb-32' : 'py-20 md:py-32'
      }`}
    >
      <NeuronMotif color="#000000" opacity={0.06} size={220} />

      <div className="page-margin max-content relative z-10">
        {title && (
          <ScrollReveal>
            <h2 className="heading-xl text-black mb-10 md:mb-16">{title}</h2>
          </ScrollReveal>
        )}
      </div>

      <div className="overflow-hidden">
        <div className="animate-marquee flex gap-6 pl-[3vw] w-max">
          {slides.map((t, i) => (
            <div
              key={`${i}-${t.attribution}`}
              className="flex-[0_0_320px] md:flex-[0_0_400px] border border-black/10 rounded-lg p-6 md:p-8 bg-white shadow-sm"
            >
              <span className="font-display text-5xl text-black/10 leading-none block mb-4">
                &ldquo;
              </span>
              <p className="font-display text-lg md:text-xl leading-relaxed text-black mb-6">
                <QuoteWithHighlight quote={t.quote} highlight={t.highlight} />
              </p>
              <div className="pt-4 border-t border-black/10">
                <p className="font-body text-sm text-black/45">{t.attribution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
