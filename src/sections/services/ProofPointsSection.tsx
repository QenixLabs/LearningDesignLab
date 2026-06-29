import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';
import { GraduationCap, Smartphone, FileText, Briefcase } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const projects: { title: string; Icon: LucideIcon }[] = [
  {
    title: 'Online Courses for Myanmar Community Teachers for UNESCO Myanmar',
    Icon: GraduationCap,
  },
  {
    title: 'Digital Stewardship Courses using mobile-based micro-learning for Search for Common Ground',
    Icon: Smartphone,
  },
  {
    title: 'Technical Guidelines on Engaging the Most Marginalised Youth for UNICEF India',
    Icon: FileText,
  },
  {
    title: 'Employability curriculum including trainer manual and learner workbook for ITIs in India with Quest Alliance',
    Icon: Briefcase,
  },
];

export default function ProofPointsSection() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      {/* Neuron motif */}
      <NeuronMotif opacity={0.025} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <h2 className="heading-xl text-black mb-16">
            We've Already Made This Happen … Several Times Over
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map(({ title, Icon }, i) => (
            <ScrollReveal key={i} delay={0.08 * i}>
              <div className="border-t border-pink/15 pt-8">
                <Icon className="w-10 h-10 text-pink mb-4" strokeWidth={1.5} />
                <h3 className="heading-lg text-black">{title}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
