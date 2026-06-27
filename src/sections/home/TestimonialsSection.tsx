import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

const testimonials = [
  {
    quote:
      'The courses are highly comprehensive and well suited for e-learning, offering practical insights with a strong balance of personalisation and scaffolded key concepts.',
    highlight: 'highly comprehensive and well suited for e-learning',
    attribution: 'Myat Thiri, Programme Officer, UNESCO Myanmar',
  },
  {
    quote:
      'Your insightful session, generous sharing of expertise, and engaging interactions greatly enriched the programme and inspired our faculty to reflect on and strengthen their teaching practices.',
    highlight: 'greatly enriched the programme and inspired our faculty',
    attribution: 'Prof. (Dr.) Varuna Tyagi, Dean Academics, K.R. Mangalam University',
  },
  {
    quote:
      "This is one of the most inspiring and memorable collaborations for me and it's all because of everyone involved with so much commitment. Grateful for pushing the two microcredentials with full momentum and through many long weekends.",
    highlight: 'one of the most inspiring and memorable collaborations',
    attribution: 'Preyansi, GIZ',
  },
  {
    quote:
      'The modules are highly engaging and deeply reflective. The use of popular culture along with a diverse range of methodologies stands out. It is evident how much thought and passion have gone into this effort. Truly admirable work—this has the potential to be a game changer.',
    highlight: 'highly engaging and deeply reflective',
    attribution: 'Dr. Rita Mishra, Founder and CEO, Patang',
  },
];

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

export default function TestimonialsSection() {
  const slides = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      <NeuronMotif color="#000000" opacity={0.06} size={220} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <h2 className="heading-xl text-black mb-10 md:mb-16">Client Voices</h2>
        </ScrollReveal>
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
