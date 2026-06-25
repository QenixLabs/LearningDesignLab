import ScrollReveal from '../../components/ScrollReveal';
import SectionLabel from '../../components/SectionLabel';

const verticals = [
  { label: 'Schools & Universities', image: '/images/verticals/schools.jpg' },
  { label: 'Social Impact Organisations', image: '/images/verticals/social-impact.jpg' },
  { label: 'Governments', image: '/images/verticals/government.jpg' },
  { label: 'Corporates', image: '/images/verticals/corporates.jpg' },
  { label: 'EdTech Companies', image: '/images/verticals/edtech.jpg' },
];

export default function TargetVerticalsSection() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <SectionLabel text="Targeted verticals" light={false} />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black text-center mb-16">Who We Work With</h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
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
