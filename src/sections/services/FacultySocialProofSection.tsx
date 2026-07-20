import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

const partners = [
  { name: 'K.R. Mangalam University', logo: '/images/logos/kr-mangalam.webp' },
  { name: 'ITM Skills University', logo: '/images/logos/itm-skills-removebg-preview.png' },
  { name: 'University of Stirling', logo: '/images/logos/stirling.svg' },
  { name: 'Ashoka University', logo: '/images/logos/ashoka.png' },
];

export default function FacultySocialProofSection() {
  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden">
      <NeuronMotif color="#000000" opacity={0.04} size={220} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black mb-12 md:mb-16 text-center">
            We've Already Made This Happen At ...
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {partners.map((partner) => (
              <img
                key={partner.name}
                src={partner.logo}
                alt={partner.name}
                className="max-h-14 md:max-h-20 w-auto max-w-[180px] object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
