import { type ReactNode } from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import SectionLabel from '../../components/SectionLabel';
import Button from '../../components/Button';
import { cn } from '@/lib/utils';

const projects = [
  {
    client: 'GIZ & SWAYAM',
    title: 'Applied Online Courses on AI and Data Science',
  },
  {
    client: 'UNICEF INDIA',
    title: 'Digital Girl Hub Impact Research',
  },
  {
    client: 'UNIVERSITY OF STIRLING, UAE',
    title: 'AI for Teaching, Learning & Research',
  },
  {
    client: 'QUEST ALLIANCE',
    title: 'ITI Employability Curriculum',
  },
];

const scholarships = [
  'Navigating Structural, Epistemic, and Human Dimensions in Education',
  'Reimagining Learning with AI: Towards a Learning Society',
  'Development and Validation of a Brief Digital Pedagogy Competency Scale (DiPeCoS)',
];

const blogs = [
  'The Future of AI in Education',
  'Designing Inclusive Learning Experiences',
  'Storytelling for Effective Online Courses',
];

const presentations = [
  {
    title: '12th Annual Conference of Cognitive Science (ACCS-12), 2025',
    image: '/conferences/image11.jpg',
  },
  {
    title: 'Masinde Muliro University of Science and Technology (MMAST) - 18th International Multidisciplinary Conference, 2024, Kenya',
    image: '/conferences/Truth centric education.png',
  },
  {
    title: 'Let the Games Begin: The Future of Education at the Global Learning Planet Festival and Catalyst Now, 2025',
    image: '/conferences/image5.jpg',
  },
];

function PlaceholderImage({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'bg-white/5 border border-pink/10 rounded-md flex items-center justify-center',
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
        'border border-pink/15 bg-black/40 p-6 md:p-8 flex flex-col h-full',
        'hover:bg-pink/[0.03] transition-colors duration-300',
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
    <section id="projects" className="bg-black py-20 md:py-32 relative overflow-hidden">
      {/* Pink neuron motif overlay */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FF1493' stroke-width='0.6'%3E%3Cpath d='M10 50 Q30 20 50 50 T90 50'/%3E%3Cpath d='M0 30 Q20 5 40 30 T80 30'/%3E%3Cpath d='M20 70 Q40 45 60 70 T100 70'/%3E%3Cpath d='M5 80 Q25 60 45 80 T85 80'/%3E%3Ccircle cx='10' cy='50' r='2' fill='%23FF1493'/%3E%3Ccircle cx='50' cy='50' r='2.5' fill='%23FF1493'/%3E%3Ccircle cx='90' cy='50' r='2' fill='%23FF1493'/%3E%3Ccircle cx='40' cy='30' r='1.5' fill='%23C71585'/%3E%3Ccircle cx='60' cy='70' r='1.5' fill='%23C71585'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <SectionLabel text="Our Work (So Far)" light />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="heading-xl text-white mb-10 md:mb-16">Selected Projects</h2>
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
                      <span className="section-label text-pink block mb-1">
                        {project.client}
                      </span>
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
                      className="border-b border-pink/10 pb-4 last:border-0 last:pb-0 cursor-pointer hover:text-pink transition-colors"
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
                        className="border border-pink/10 p-3 text-center cursor-pointer hover:border-pink/30 hover:bg-pink/5 transition-colors"
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
                  <div className="flex flex-col gap-4 flex-1">
                    {presentations.map((item) => (
                      <div
                        key={item.title}
                        className="flex gap-3 items-start group/item cursor-pointer"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-12 h-12 flex-shrink-0 object-cover rounded-md border border-pink/10 bg-white"
                        />
                        <p className="font-body text-sm text-white/80 leading-snug">
                          {item.title}
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
