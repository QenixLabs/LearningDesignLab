import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import NeuronMotif from '../components/NeuronMotif';
import ScrollReveal from '../components/ScrollReveal';
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { PAGE_COPY_QUERY, type SanityPageCopy } from '@/lib/sanity/queries';

interface CaseStudyListItem {
  title: string;
  description: string;
  href: string;
}

const caseStudiesList: CaseStudyListItem[] = [
  {
    title: "Training Myanmar's Community Teachers for Education in Crisis",
    description:
      '12 courses, 4 themes, & learning designed for behavior change in emergency contexts',
    href: '/projects/courses-for-community-teachers-in-myanmar',
  },
  {
    title:
      "Redesigning an AI & Data Science Course for SWAYAM, India's Largest Digital Learning Platform",
    description:
      'We converted existing text-heavy material into engaging, application-based video courses for social science students with no formal background in AI and data science.',
    href: '/projects/ai-data-science-course',
  },
  {
    title: 'Creating A Gender Course That Turns Youth Into Activists',
    description:
      'Seven modules, real field stories, and a Bollywood love song — designed to turn awareness into action',
    href: '/projects/gender-awareness-activism-course',
  },
  {
    title: 'Upskilling Moderators of Online Communities',
    description:
      'Nine gamified, mobile-first courses developed using games, comics, and interactives',
    href: '/projects/multiformat-courses-for-moderators',
  },
];

export default function CaseStudies() {
  const { data: pageCopy } = useSanityQuery<SanityPageCopy | null>(
    PAGE_COPY_QUERY,
    { id: 'ourWork' },
    {
      pageKey: 'case-studies',
      heading: 'Case Studies',
      intro:
        'Deep dives into how we apply learning sciences, behavioural change design, and evidence-informed methodologies to solve complex learning challenges across the globe.',
      subtitle:
        'Deep dives into how we apply learning sciences, behavioural change design, and evidence-informed methodologies to solve complex learning challenges across the globe.',
    }
  );

  const subtitle = pageCopy?.subtitle || pageCopy?.intro;

  return (
    <Layout>
      <section className="bg-white py-20 md:py-32 min-h-[85vh] relative overflow-hidden">
        <NeuronMotif opacity={0.12} />

        <div className="page-margin max-content relative z-10">
          <ScrollReveal>
            <div className="max-w-[75ch] mx-auto text-center mb-16 md:mb-24">
              <h1 className="page-heading text-black mb-6">
                {pageCopy?.heading || 'Case Studies'}
              </h1>
              {subtitle && (
                <p className="font-body text-[16px] leading-[23px] text-black/70">
                  {subtitle}
                </p>
              )}
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-16 md:space-y-20">
            {caseStudiesList.map((item, index) => (
              <ScrollReveal key={item.title} delay={0.08 * index}>
                <article className="space-y-4">
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-black leading-snug">
                    {item.title}
                  </h2>
                  <p className="font-body text-sm sm:text-base text-black/75 leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                  <div className="pt-2">
                    <Link
                      to={item.href}
                      className="inline-block px-7 py-3 rounded-md bg-pink text-white font-body text-sm font-medium hover:bg-pink-dark transition-colors shadow-sm"
                    >
                      Read more
                    </Link>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
