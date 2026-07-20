import ScrollReveal from '../../components/ScrollReveal';
import Button from '../../components/Button';
import NeuronMotif from '../../components/NeuronMotif';
import { cn } from '@/lib/utils';

const projects = [
  'Applied online courses on AI and a story-based course on Data Science for GIZ & SWAYAM',
  'Research to study the impact of Digital Girl Hub Program (a large-scale skilling and employment program for girls): UNICEF India',
  'Workshops on AI for Teaching, Learning and Research for faculty members of Stirling University, UAE',
  'Employability curriculum (student trainer manual and trainer workbook) for ITIs in India with Quest Alliance',
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
  { name: 'Indian Institute of Technology, Delhi', image: '/images/logos/iit delhi.jpg' },
  { name: 'University of Colorado', image: '/images/logos/university of colorado.jpg' },
  { name: 'Masinde Muliro University of Science & Technology, Kenya', image: '/images/logos/masinde muliro.png' },
];

function BentoPanel({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'border border-white/15 bg-white/[0.03] p-5 md:p-6 flex flex-col h-full',
        'hover:bg-white/[0.05] transition-colors duration-300',
        className
      )}
    >
      <h3 className="font-display text-lg md:text-xl font-semibold text-white mb-4 md:mb-5">
        {title}
      </h3>
      {children}
    </div>
  );
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
          {/* Projects */}
          <ScrollReveal className="md:col-span-3 h-full">
            <BentoPanel title="Projects" className="h-full">
              <div className="flex flex-col gap-4 flex-1">
                {projects.map((project) => (
                  <div
                    key={project}
                    className="border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <p className="font-body text-sm md:text-base text-white/80 leading-snug">
                      {project}
                    </p>
                  </div>
                ))}
              </div>
              <Button
                text="See More"
                href="/projects"
                variant="primary"
                className="mt-6 w-[35%] mx-auto text-center px-4 py-2 text-xs"
              />
            </BentoPanel>
          </ScrollReveal>

          {/* Presentations At */}
          <ScrollReveal className="md:col-span-1 h-full">
            <BentoPanel title="Presentations At" className="h-full">
              <div className="flex flex-col gap-3 flex-1">
                {presentations.map((item) => (
                  <div
                    key={item.name}
                    className="border-b border-white/10 pb-3 last:border-0 last:pb-0"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className={cn(
                        'w-auto max-w-full object-contain',
                        item.name === 'University of Colorado'
                          ? 'h-24 md:h-32'
                          : 'h-16 md:h-20'
                      )}
                    />
                  </div>
                ))}
              </div>
              <Button
                text="See More"
                href="/conferences"
                variant="primary"
                className="mt-6 w-[35%] mx-auto text-center px-4 py-2 text-xs"
              />
            </BentoPanel>
          </ScrollReveal>

          {/* Blogs */}
          <ScrollReveal delay={0.1} className="md:col-span-2 h-full">
            <BentoPanel title="Blogs" className="h-full">
              <div className="flex flex-col gap-3 flex-1">
                {blogs.map((blog) => (
                  <div
                    key={blog}
                    className="border-b border-white/10 pb-3 last:border-0 last:pb-0"
                  >
                    <p className="font-body text-sm text-white/80 leading-snug">
                      {blog}
                    </p>
                  </div>
                ))}
              </div>
              <Button
                text="See More"
                href="https://www.linkedin.com/newsletters/global-south-s-learning-voices-7289983829136588802/"
                variant="primary"
                className="mt-6 w-[35%] mx-auto text-center px-4 py-2 text-xs"
              />
            </BentoPanel>
          </ScrollReveal>

          {/* Scholarship & Publications */}
          <ScrollReveal delay={0.15} className="md:col-span-2 h-full">
            <BentoPanel title="Scholarship & Publications" className="h-full">
              <div className="flex flex-col gap-3 flex-1">
                {scholarships.map((item) => (
                  <div
                    key={item}
                    className="border-b border-white/10 pb-3 last:border-0 last:pb-0"
                  >
                    <p className="font-body text-sm text-white/80 leading-snug">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <Button
                text="See More"
                href="/publications"
                variant="primary"
                className="mt-6 w-[35%] mx-auto text-center px-4 py-2 text-xs"
              />
            </BentoPanel>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
