import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import ScrollReveal from '../../components/ScrollReveal';
import SectionLabel from '../../components/SectionLabel';

const testimonials = [
  {
    quote:
      'The courses are highly comprehensive and well suited for e-learning, offering practical insights with a strong balance of personalisation and scaffolded key concepts.',
    attribution: 'Myat Thiri, Programme Officer, UNESCO Myanmar',
  },
  {
    quote:
      'Your insightful session, generous sharing of expertise, and engaging interactions greatly enriched the programme and inspired our faculty to reflect on and strengthen their teaching practices.',
    attribution: 'Prof. (Dr.) Varuna Tyagi, Dean Academics, K.R. Mangalam University',
  },
  {
    quote:
      "This is one of the most inspiring and memorable collaborations for me and it's all because of everyone involved with so much commitment. Grateful for pushing the two microcredentials with full momentum and through many long weekends.",
    attribution: 'Preyansi, GIZ',
  },
  {
    quote:
      'The modules are highly engaging and deeply relevant. The use of popular culture along with a diversity of methodologies stands out. It is evident how much thought and passion have gone into this effort. Truly admirable work—this has the potential to be a game changer.',
    attribution: 'Dr. Rita Mishra, Founder and CEO, Patang',
  },
];

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: true,
  });
  const [isHovered, setIsHovered] = useState(false);

  const scrollNext = useCallback(() => {
    if (emblaApi && !isHovered) {
      emblaApi.scrollNext();
    }
  }, [emblaApi, isHovered]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(scrollNext, 4000);
    return () => clearInterval(interval);
  }, [emblaApi, scrollNext]);

  return (
    <section className="bg-white py-32 relative overflow-hidden">
      {/* Subtle magenta neuron motif on right */}
      <div
        className="absolute top-0 right-0 w-1/3 h-full opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23C71585' stroke-width='0.7'%3E%3Cpath d='M10 40 Q25 15 40 40 T70 40'/%3E%3Cpath d='M0 20 Q15 0 30 20 T60 20'/%3E%3Cpath d='M20 60 Q35 40 50 60 T80 60'/%3E%3Ccircle cx='10' cy='40' r='2' fill='%23C71585'/%3E%3Ccircle cx='40' cy='40' r='2.5' fill='%23C71585'/%3E%3Ccircle cx='70' cy='40' r='2' fill='%23C71585'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '160px 160px',
        }}
      />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <SectionLabel text="What Clients Say" light={false} />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black mb-16">Client Voices</h2>
        </ScrollReveal>
      </div>

      <div
        ref={emblaRef}
        className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-6 pl-[3vw]">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex-[0_0_320px] md:flex-[0_0_400px] border border-pink/15 p-6 md:p-8 bg-white"
            >
              <span className="font-display text-5xl text-pink/20 leading-none block mb-4">
                &ldquo;
              </span>
              <p className="font-display text-lg md:text-xl leading-relaxed text-black mb-6">
                {t.quote}
              </p>
              <div className="pt-4 border-t border-pink/15">
                <p className="font-body text-sm text-black/45">{t.attribution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
