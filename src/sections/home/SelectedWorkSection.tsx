import { type ReactNode } from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import Button from '../../components/Button';
import NeuronMotif from '../../components/NeuronMotif';
import { cn } from '@/lib/utils';

const projects = [
  {
    client: '',
    title: 'Applied online courses on AI and a story-based course on Data Science for GIZ & SWAYAM',
  },
  {
    client: '',
    title: 'Research to study the impact of Digital Girl Hub Program (a large-scale skilling and employment program for girls): UNICEF India',
  },
  {
    client: '',
    title: 'Workshops on AI for Teaching, Learning and Research for University of Stirling, UAE',
  },
  {
    client: '',
    title: 'Employability curriculum (student trainer manual and trainer workbook) for ITIs in India with Quest Alliance',
  },
];

const scholarships = [
  'Navigating Structural, Epistemic, and Human Dimensions in Education',
  'Reimagining Learning with AI: Towards a Learning Society',
  'Development and Validation of a Brief Digital Pedagogy Competency Scale (SPANCER)',
];

const blogs = [
  "Why Facts Don't Change Minds: Designing Learning That Transcends Behavior",
  'Learning How to Learn: Introducing the Science of Learning to Undergraduate Students',
  'Beyond the Hype: What AI Actually Means for the Next Billion Learners',
];

const presentations = [
  {
    name: 'Indian Institute of Technology, Delhi',
    image: '/images/logos/iit delhi.png',
  },
  {
    name: 'Tata Institute of Social Sciences, Mumbai',
    image: '/images/logos/tata insitute.png',
  },
  {
    name: 'Masinde Muliro University of Science & Technology, Kenya',
    image: '/images/logos/masinde muliro.png',
  },
];

function PlaceholderImage({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'bg-white/5 border border-white/10 rounded-md flex items-center justify-center',
        className
      )}
    >
      <span className="text-white/20 text-[10px] font-body uppercase tracking-wider">
        Image
      </span>
    </div>
  );
}

function BentoPanel({
  title,
  children,
  className,
}: {
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'border border-white/15 bg-white/[0.03] p-6 md:p-8 flex flex-col h-full',
        'hover:bg-white/[0.05] transition-colors duration-300',
        className
      )}
    >
      <h3 className="heading-md text-white mb-6 text-center">{title}</h3>
      {children}
    </div>
  );
}

function SeeMoreButton({ className }: { className?: string }) {
  return <Button text="See More" variant="secondary" className={className} />;
}

export default function SelectedWorkSection() {
  return (
    <section id="projects" className="bg-near-black py-20 md:py-32 relative overflow-hidden">
      {/* Neuron motif overlay */}
      <NeuronMotif color="#FF1493" opacity={0.12} size={250} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <h2 className="heading-xl text-white mb-10 md:mb-16">Our Work (So Far)</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Projects */}
          <ScrollReveal className="h-full">
            <BentoPanel title="Projects" className="h-full">
              <div className="flex flex-col gap-6 flex-1">
                {projects.map((project) => (
                  <div
                    key={project.title}
                    className="flex gap-4 items-start group/item cursor-pointer"
                  >
                    <PlaceholderImage className="w-20 h-16 md:w-24 md:h-20 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      {project.client && (
                        <span className="section-label text-white/50 block mb-1">
                          {project.client}
                        </span>
                      )}
                      <h4 className="font-body text-base font-medium text-white leading-snug">
                        {project.title}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
              <SeeMoreButton className="mt-8" />
            </BentoPanel>
          </ScrollReveal>

          {/* Right column */}
          <div className="flex flex-col gap-6">
            <ScrollReveal>
              <BentoPanel title="Scholarship & Publications">
                <div className="flex flex-col gap-4 flex-1">
                  {scholarships.map((item) => (
                    <div
                      key={item}
                      className="border-b border-white/10 pb-4 last:border-0 last:pb-0 cursor-pointer hover:text-white transition-colors"
                    >
                      <p className="font-body text-sm md:text-base text-white/80 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <SeeMoreButton className="mt-6" />
              </BentoPanel>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ScrollReveal delay={0.1}>
                <BentoPanel title="Blogs">
                  <div className="flex flex-col gap-4 flex-1">
                    {blogs.map((blog) => (
                      <div
                        key={blog}
                        className="border border-white/10 p-3 text-center cursor-pointer hover:border-white/25 hover:bg-white/5 transition-colors"
                      >
                        <span className="font-body text-sm text-white/80">
                          {blog}
                        </span>
                      </div>
                    ))}
                  </div>
                  <SeeMoreButton className="mt-6" />
                </BentoPanel>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <BentoPanel title="Presentations At">
                  <div className="flex flex-col gap-5 flex-1">
                    {presentations.map((item) => (
                      <div
                        key={item.name}
                        className="flex flex-col items-start gap-2 group/item cursor-pointer"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-20 w-auto max-w-full flex-shrink-0 object-contain bg-transparent"
                        />
                        <p className="font-body text-sm text-white/80 leading-snug">
                          {item.name}
                        </p>
                      </div>
                    ))}
                  </div>
                  <SeeMoreButton className="mt-6" />
                </BentoPanel>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
