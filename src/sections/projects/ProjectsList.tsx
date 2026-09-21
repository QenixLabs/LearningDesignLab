import ScrollReveal from '../../components/ScrollReveal';
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
          'bg-black/[0.04] border border-black/10 rounded-lg flex items-center justify-center',
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
    <img
      src={src}
      alt={alt}
      className={cn(
        'w-full bg-black/[0.04] rounded-lg border border-black/10',
        fit === 'contain' ? 'object-contain' : 'object-cover',
        className
      )}
    />
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

  // Section titles must match the schema's options.list in src/studio/schemaTypes/collections/project.ts
  const cardSections =
    rawProjects.length > 0
      ? ['Courses & Curricula', 'Workshops', 'Research, Evaluation, & Knowledge Products']
          .map((sectionTitle) => ({
            title: sectionTitle,
            projects: rawProjects
              .filter((p) => p.section === sectionTitle)
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
      : fallbackSections;

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
    <section className="bg-white py-20 md:py-32">
      <div className="page-margin max-content">
        <ScrollReveal>
          <div className="max-w-[75ch] mx-auto text-center mb-12 md:mb-16">
            <h1 className="font-display text-[36px] leading-[38px] font-medium text-black mb-6">{copy.heading}</h1>
            {copy.intro && (
              <p className="font-body text-[16px] leading-[23px] text-black/70">
                {copy.intro}
              </p>
            )}
          </div>
        </ScrollReveal>

        {/* Cards */}
        <div className="flex flex-col gap-16 md:gap-24 mt-24 md:mt-32">
          {cardSections.map((section) => (
            <div key={section.title}>
              <ScrollReveal>
                <h2 className="display-md text-black mb-10 md:mb-16">
                  {section.title}
                </h2>
              </ScrollReveal>

              <div className="flex flex-col">
                {section.projects.map((project, index) => {
                  const isReversed = index % 2 === 1;
                  return (
                    <ScrollReveal key={project.title}>
                      <article
                        className={cn(
                          'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12 md:py-20 border-t border-black/10',
                          index === section.projects.length - 1 &&
                            'border-b border-black/10'
                        )}
                      >
                        <div
                          className={cn(
                            'flex flex-col justify-center order-2 text-center md:text-left',
                            isReversed ? 'md:order-2' : 'md:order-1'
                          )}
                        >
                          <h3 className="font-display text-xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight mb-2">
                            {project.client}
                          </h3>
                          <h4 className="font-display text-sm md:text-base text-pink mb-6">
                            {project.title}
                          </h4>
                          <p className="font-body text-[14px] leading-[23px] text-black/70 mb-8">
                            {project.description}
                          </p>
                          {project.actions && project.actions.length > 0 && (
                            <div className="flex flex-wrap gap-4">
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
                            'flex items-center order-1',
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
