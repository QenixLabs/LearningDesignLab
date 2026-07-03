import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';

const partners = [
  { name: 'K.R. Mangalam University', logo: '/images/logos/kr-mangalam.webp' },
  { name: 'ITM Skills University', logo: '/images/logos/itm-skills.png' },
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
          <div className="border border-black/10 rounded-lg bg-white overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-black/10">
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center p-6 md:p-10"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 md:max-h-16 w-auto max-w-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
