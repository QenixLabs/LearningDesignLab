import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';
import Button from '../../components/Button';
import { FileText } from 'lucide-react';

const projects: { title: string; image?: string }[] = [
  {
    title: 'A story-based course on data analytics for Swayam Platform, GIZ',
    image: '/images/verticals/A story-based.jpg',
  },
  {
    title: 'Behavioral design of trainings that enable teachers to practice desired behaviors for UNESCO Myanmar',
  },
  {
    title: 'A scenario based gamified course on gender for youth in colombia',
    image: '/images/verticals/A scenerio based .jpg',
  },
  {
    title: 'Targeted design and assessment of projects to build 12 competencies & digital badges for UNICEF India',
    image: '/images/verticals/Targeted design .jpg',
  },
];

function ProjectImage({ title, image }: { title: string; image?: string }) {
  if (image) {
    return (
      <div className="w-32 h-32 sm:w-40 sm:h-40 bg-black/5 rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div className="w-32 h-32 sm:w-40 sm:h-40 bg-black/5 rounded-lg flex items-center justify-center flex-shrink-0">
      <FileText className="w-10 h-10 text-pink" strokeWidth={1.5} />
    </div>
  );
}

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {projects.map(({ title, image }, i) => (
            <ScrollReveal key={i} delay={0.08 * i}>
              <div className="flex items-start gap-4">
                <ProjectImage title={title} image={image} />
                <h3 className="heading-lg text-black leading-snug">{title}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <div className="mt-16 flex justify-center">
            <Button text="See All Our Projects" href="/projects" variant="primary" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
