import { Link } from 'react-router-dom';
import ScrollReveal from '../../components/ScrollReveal';
import Button from '../../components/Button';
import NeuronMotif from '../../components/NeuronMotif';
import { cn } from '@/lib/utils';
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { HOME_PAGE_QUERY, type SanityHomePage, type ShowcasedWorkItem } from '@/lib/sanity/queries';
import { imgUrl } from '@/lib/sanity/image';
import { ArrowUpRight } from 'lucide-react';

const fallbackProjects: ShowcasedWorkItem[] = [
  {
    text: 'Development of a story-based course on Data Analysis and Visualization for GIZ & Ministry of Education, India, SWAYAM Platform',
    href: '/projects/ai-data-science-course',
  },
  {
    text: "A study on the impact of UNICEF's skilling and employment program for girls",
    href: '/projects',
  },
  {
    text: 'Workshops on Science of Learning for faculty from 20+ disciplines including Law, Engineering, Management, Medicine, Design, Language, Agriculture etc.',
    href: '/services/faculty-enrichment',
  },
  {
    text: "Development of an assessment system to track shifts in social and emotional skills of students through UNICEF's service based learning program",
    href: '/projects',
  },
];

const fallbackScholarships: ShowcasedWorkItem[] = [
  {
    text: 'Navigating Structural, Epistemic, and Human Dimensions in Education',
    href: '/publications',
  },
  {
    text: 'Reimagining Learning with AI: Towards a Learning Society',
    href: '/publications',
  },
  {
    text: 'Development and Validation of a Brief Digital Pedagogy Competency Scale (SPENCER)',
    href: '/publications',
  },
];

const fallbackBlogs: ShowcasedWorkItem[] = [
  {
    text: "Why Facts Don't Change Minds: Designing Learning That Transcends Behavior",
    href: '/community#blog-newsletter',
  },
  {
    text: 'Learning How to Learn: Introducing the Science of Learning to Undergraduate Students',
    href: '/community#blog-newsletter',
  },
  {
    text: 'Beyond the Hype: What AI Actually Means for the Next Billion Learners',
    href: '/community#blog-newsletter',
  },
];

const fallbackPresentations: { name: string; image: string }[] = [
  { name: 'Indian Institute of Technology, Delhi', image: '/images/logos/iit delhi.jpg' },
  { name: 'University of Northern Colorado', image: '/images/logos/northern colorado.jpg' },
  { name: 'Masinde Muliro University of Science & Technology, Kenya', image: '/images/logos/masinde muliro.png' },
];

function WorkRow({ item }: { item: string | ShowcasedWorkItem }) {
  const text = typeof item === 'string' ? item : item.text;
  const href = typeof item === 'string' ? undefined : item.href;
  const isExternal = href?.startsWith('http://') || href?.startsWith('https://');

  const rowContent = (
    <div className="border-b border-white/10 pb-4 last:border-0 last:pb-0 flex items-center justify-between gap-4 group transition-colors">
      <p className="font-body text-[14px] leading-[23px] text-white/80 group-hover:text-white transition-colors flex-1">
        {text}
      </p>
      <div
        className={cn(
          'inline-flex items-center justify-center w-8 h-8 rounded-full border shrink-0 transition-all duration-200',
          href
            ? 'border-white/20 text-white/70 group-hover:border-pink group-hover:bg-pink group-hover:text-white shadow-sm'
            : 'border-white/15 text-white/40 group-hover:border-white/30 group-hover:text-white/60'
        )}
        title={href ? `Open: ${href}` : 'Add link in CMS'}
      >
        <ArrowUpRight
          className={cn(
            'w-4 h-4 transition-transform duration-200',
            href && 'group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
          )}
        />
      </div>
    </div>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {rowContent}
        </a>
      );
    }
    return (
      <Link to={href} className="block">
        {rowContent}
      </Link>
    );
  }

  return <div>{rowContent}</div>;
}

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
  const { data: home } = useSanityQuery<SanityHomePage>(HOME_PAGE_QUERY, {}, {} as SanityHomePage);

  const projects = home.selectedWorkProjects?.length ? home.selectedWorkProjects : fallbackProjects;
  const scholarships = home.selectedWorkScholarships?.length ? home.selectedWorkScholarships : fallbackScholarships;
  const blogs = home.selectedWorkBlogs?.length ? home.selectedWorkBlogs : fallbackBlogs;
  const presentations = home.presentations?.length
    ? home.presentations.map((p) => ({ name: p.name, image: imgUrl(p.image, 400) ?? '' }))
    : fallbackPresentations;

  const selectedWorkHeading = home.selectedWorkHeading || 'A glimpse of our projects';

  return (
    <section id="projects" className="bg-near-black py-20 md:py-32 relative overflow-hidden">
      {/* Neuron motif overlay */}
      <NeuronMotif color="#FF1493" opacity={0.12} size={250} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <h2 className="heading-xl text-white mb-10 md:mb-16">{selectedWorkHeading}</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-stretch">
          {/* Projects */}
          <ScrollReveal className="md:col-span-3 h-full">
            <BentoPanel title="Projects" className="h-full">
              <div className="flex flex-col gap-4 flex-1">
                {projects.map((project, idx) => (
                  <WorkRow key={(typeof project === 'string' ? project : project.text) + idx} item={project} />
                ))}
              </div>
              <Button
                text="See More"
                href="/projects"
                variant="primary"
                className="mt-6 w-fit min-w-[120px] mx-auto text-center px-6 py-2.5 text-xs whitespace-nowrap"
              />
            </BentoPanel>
          </ScrollReveal>

          {/* Presentations At */}
          <ScrollReveal className="md:col-span-1 h-full">
            <BentoPanel title="Presentations At" className="h-full">
              <div className="flex flex-col gap-3 flex-1 justify-center">
                {presentations.map((item) => (
                  <div
                    key={item.name}
                    className="bg-white rounded-md px-3.5 py-2.5 flex items-center justify-center h-16 w-full shadow-sm"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                ))}
              </div>
              <Button
                text="See More"
                href="/conferences"
                variant="primary"
                className="mt-6 w-fit min-w-[120px] mx-auto text-center px-6 py-2.5 text-xs whitespace-nowrap"
              />
            </BentoPanel>
          </ScrollReveal>

          {/* Blogs */}
          <ScrollReveal delay={0.1} className="md:col-span-2 h-full">
            <BentoPanel title="Blogs" className="h-full">
              <div className="flex flex-col gap-3 flex-1">
                {blogs.map((blog, idx) => (
                  <WorkRow key={(typeof blog === 'string' ? blog : blog.text) + idx} item={blog} />
                ))}
              </div>
              <Button
                text="See More"
                href="/community#blog-newsletter"
                variant="primary"
                className="mt-6 w-fit min-w-[120px] mx-auto text-center px-6 py-2.5 text-xs whitespace-nowrap"
              />
            </BentoPanel>
          </ScrollReveal>

          {/* Scholarship & Publications */}
          <ScrollReveal delay={0.15} className="md:col-span-2 h-full">
            <BentoPanel title="Scholarship & Publications" className="h-full">
              <div className="flex flex-col gap-3 flex-1">
                {scholarships.map((item, idx) => (
                  <WorkRow key={(typeof item === 'string' ? item : item.text) + idx} item={item} />
                ))}
              </div>
              <Button
                text="See More"
                href="/publications"
                variant="primary"
                className="mt-6 w-fit min-w-[120px] mx-auto text-center px-6 py-2.5 text-xs whitespace-nowrap"
              />
            </BentoPanel>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
