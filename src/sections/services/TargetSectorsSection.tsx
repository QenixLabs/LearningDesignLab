import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';
import { GraduationCap, HeartHandshake, Building2, Landmark } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const sectors: { title: string; description: string; Icon: LucideIcon }[] = [
  {
    title: 'Educational Institutes',
    description: 'Schools, universities and online learning departments of universities',
    Icon: GraduationCap,
  },
  {
    title: 'Social Impact Organisations',
    description: 'United Nations, large non-profits, donor agencies and foundations',
    Icon: HeartHandshake,
  },
  {
    title: 'Corporates & Enterprises',
    description: 'That need to upskill their employees and training of L&D divisions',
    Icon: Building2,
  },
  {
    title: 'Governments',
    description: 'To be added',
    Icon: Landmark,
  },
];

export default function TargetSectorsSection() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <NeuronMotif opacity={0.03} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-black text-center mb-16">We Work Across Sectors</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((sector, i) => (
            <ScrollReveal key={sector.title} delay={0.1 * i}>
              <div className="border border-pink/20 rounded-2xl overflow-hidden h-full transition-colors hover:bg-pink/[0.02]">
                <div className="aspect-[4/3] bg-black/5 flex items-center justify-center">
                  <sector.Icon className="w-12 h-12 text-pink" strokeWidth={1.5} />
                </div>
                <div className="p-6">
                  <h3 className="heading-md text-black mb-3">{sector.title}</h3>
                  <p className="font-body text-base text-black/70 leading-relaxed">
                    {sector.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
