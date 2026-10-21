import ScrollReveal from '../../components/ScrollReveal';
import NeuronMotif from '../../components/NeuronMotif';
import Button from '../../components/Button';
import { cn } from '@/lib/utils';
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { PROJECTS_QUERY, PAGE_COPY_QUERY, type SanityProject, type SanityPageCopy } from '@/lib/sanity/queries';
import { imgUrl } from '@/lib/sanity/image';
import { cardSections as fallbackSections } from '../../data/projects';

function ProjectImage({
  src,
  alt,
  className,
  fit = 'cover',
}: {
  src?: string;
  alt: string;
  className?: string;
  fit?: 'cover' | 'contain';
}) {
  if (!src) {
    return (
      <div
        className={cn(
          'w-full bg-black/[0.04] border border-black/10 rounded-xl flex items-center justify-center p-8',
          className
        )}
      >
        <span className="text-black/20 text-[10px] font-body uppercase tracking-wider">
          Image
        </span>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden rounded-xl bg-white border border-black/10 flex items-center justify-center shadow-xs">
      <img
        src={src}
        alt={alt}
        className={cn(
          'w-full max-h-[420px]',
          fit === 'contain' ? 'object-contain' : 'object-cover',
          className
        )}
      />
    </div>
  );
}

export default function ProjectsList() {
  const { data: rawProjects } = useSanityQuery<SanityProject[]>(PROJECTS_QUERY, {}, []);

  const CASE_STUDY_SLUG_MAP: Record<string, string> = {
    'UNESCO Myanmar': '/projects/courses-for-community-teachers-in-myanmar',
    'Search for Common Ground': '/projects/multiformat-courses-for-moderators',
    'Patang India': '/projects/gender-awareness-activism-course',
    'GIZ & Swayam': '/projects/ai-data-science-course',
  };

  const SECTION_DISPLAY_TITLES: Record<string, string> = {
    Workshops: 'Our Work, Workshops and Beyond',
    'Our Work, Workshops and Beyond': 'Our Work, Workshops and Beyond',
  };

  // Section titles must match the schema's options.list in src/studio/schemaTypes/collections/project.ts
  const cardSections =
    rawProjects.length > 0
      ? ['Courses & Curricula', 'Workshops', 'Research, Evaluation, & Knowledge Products']
          .map((sectionTitle) => ({
            title: SECTION_DISPLAY_TITLES[sectionTitle] || sectionTitle,
            projects: rawProjects
              .filter((p) => p.section === sectionTitle || p.section === SECTION_DISPLAY_TITLES[sectionTitle])
              .map((p) => {
                const caseStudyHref =
                  p.caseStudy?.slug
                    ? `/projects/${p.caseStudy.slug}`
                    : p.caseStudySlug
                      ? (p.caseStudySlug.startsWith('/') ? p.caseStudySlug : `/projects/${p.caseStudySlug}`)
                      : CASE_STUDY_SLUG_MAP[p.client];

                let actions = p.actions ? [...p.actions] : [];
                if (caseStudyHref && !actions.some((a) => a.label.toLowerCase().includes('case study'))) {
                  actions = [{ label: 'Read Case Study', href: caseStudyHref }, ...actions];
                }

                return {
                  client: p.client,
                  title: p.title,
                  description: p.description,
                  image: imgUrl(p.image, 1200),
                  imageAlt: p.imageAlt,
                  actions,
                };
              }),
          }))
          .filter((s) => s.projects.length > 0)
      : fallbackSections.map((s) => ({
          ...s,
          title: SECTION_DISPLAY_TITLES[s.title] || s.title,
        }));

  const { data: copy } = useSanityQuery<SanityPageCopy>(
    PAGE_COPY_QUERY,
    { id: 'pageCopy-projects' },
    {
      pageKey: 'projects',
      heading: 'Our Projects',
      intro:
        'Different sectors, different audiences, different formats. But our focus remains the same: learning designed to produce real change, not just completion.',
    }
  );

  return (
    <section className="bg-white py-20 md:py-32 relative overflow-hidden min-h-screen">
      <NeuronMotif opacity={0.15} />
      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <div className="max-w-[75ch] mx-auto text-center mb-12 md:mb-16">
            <h1 className="page-heading text-black mb-6">{copy.heading}</h1>
            {copy.intro && (
              <p className="font-body text-[16px] leading-[23px] text-black/70">
                {copy.intro}
              </p>
            )}
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="flex flex-col gap-16 md:gap-24 mt-16 md:mt-24">
          {cardSections.map((section) => (
            <div key={section.title}>
              <ScrollReveal>
                <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-medium text-black mb-10 md:mb-16 text-center tracking-tight leading-tight">
                  {section.title}
                </h2>
              </ScrollReveal>

              <div className="flex flex-col gap-8 md:gap-12">
                {section.projects.map((project, index) => {
                  const isReversed = index % 2 === 1;
                  return (
                    <ScrollReveal key={project.title}>
                      <article
                        className={cn(
                          'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-6 sm:p-8 md:p-12',
                          'bg-warm-grey border border-black/10 rounded-2xl shadow-xs hover:border-pink/30 hover:shadow-md transition-all duration-300'
                        )}
                      >
                        <div
                          className={cn(
                            'flex flex-col justify-center order-2 text-center md:text-left',
                            isReversed ? 'md:order-2' : 'md:order-1'
                          )}
                        >
                          <h3 className="font-display text-xl md:text-2xl lg:text-[26px] font-semibold text-black leading-tight mb-2">
                            {project.client}
                          </h3>
                          <h4 className="font-display text-sm md:text-base text-pink mb-4 md:mb-6">
                            {project.title}
                          </h4>
                          <p className="font-body text-[14px] leading-[23px] text-black/70 mb-6 md:mb-8">
                            {project.description}
                          </p>
                          {project.actions && project.actions.length > 0 && (
                            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                              {project.actions.map((action) => (
                                <Button
                                  key={action.label}
                                  text={action.label}
                                  href={action.href}
                                  variant="primary"
                                  dark={false}
                                  className="rounded-full"
                                />
                              ))}
                            </div>
                          )}
                        </div>

                        <div
                          className={cn(
                            'flex items-center justify-center order-1',
                            isReversed ? 'md:order-1' : 'md:order-2'
                          )}
                        >
                          <ProjectImage
                            src={project.image}
                            alt={project.imageAlt}
                            className={
                              project.client === 'UNESCO Myanmar'
                                ? 'aspect-[16/9]'
                                : 'aspect-[4/3]'
                            }
                            fit="contain"
                          />
                        </div>
                      </article>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
