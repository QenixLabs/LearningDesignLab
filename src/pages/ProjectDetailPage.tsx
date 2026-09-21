import { useParams, Link, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import ContactSection from '../sections/home/ContactSection';
import { getCaseStudy, getAdjacentCaseStudies, type CaseStudy } from '../data/caseStudies';
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { CASE_STUDY_BY_SLUG_QUERY, type SanityCaseStudy } from '@/lib/sanity/queries';
import { imgUrl } from '@/lib/sanity/image';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

interface ProjectDetailPageProps {
  slug?: string;
}

export default function ProjectDetailPage({ slug: propSlug }: ProjectDetailPageProps) {
  const params = useParams<{ slug: string }>();
  const activeSlug = propSlug || params.slug;

  if (!activeSlug) {
    return <Navigate to="/projects" replace />;
  }

  const fallbackStudy = getCaseStudy(activeSlug);
  const { data: sanityStudy } = useSanityQuery<SanityCaseStudy | null>(
    CASE_STUDY_BY_SLUG_QUERY,
    { slug: activeSlug },
    null
  );

  const study: CaseStudy | undefined = sanityStudy
    ? {
        slug: sanityStudy.slug.current,
        client: sanityStudy.client,
        title: sanityStudy.title,
        subtitle: sanityStudy.subtitle || fallbackStudy?.subtitle || '',
        category: sanityStudy.category || fallbackStudy?.category || 'Courses & Curricula',
        heroImage: sanityStudy.heroImage ? imgUrl(sanityStudy.heroImage, 1200) : (fallbackStudy?.heroImage || ''),
        heroImageAlt: sanityStudy.heroImageAlt || fallbackStudy?.heroImageAlt || sanityStudy.title,
        nutshell: sanityStudy.nutshell || fallbackStudy?.nutshell || [],
        intro: sanityStudy.intro || fallbackStudy?.intro,
        challengeCallout: sanityStudy.challengeCallout || fallbackStudy?.challengeCallout,
        sections: (sanityStudy.sections as any) || fallbackStudy?.sections || [],
        curriculumStructure: (sanityStudy.curriculumStructure as any) || fallbackStudy?.curriculumStructure,
        quote: sanityStudy.quote || fallbackStudy?.quote,
        impactStats: sanityStudy.impactStats || fallbackStudy?.impactStats,
        lessonsLearned: sanityStudy.lessonsLearned || fallbackStudy?.lessonsLearned,
        actions: (sanityStudy.actions as any) || fallbackStudy?.actions,
      }
    : fallbackStudy;

  if (!study) {
    return (
      <Layout>
        <div className="py-32 max-content page-margin text-center min-h-[60vh] flex flex-col items-center justify-center">
          <h1 className="font-display text-3xl md:text-5xl font-semibold mb-4 text-black">
            Case Study Not Found
          </h1>
          <p className="font-body text-black/70 mb-8 max-w-md">
            The project write-up you are looking for does not exist or has moved.
          </p>
          <Button text="Back to All Projects" href="/projects" variant="primary" dark={false} className="rounded-full" />
        </div>
      </Layout>
    );
  }

  const { prev, next } = getAdjacentCaseStudies(study.slug);

  return (
    <Layout>
      <article className="bg-white">
        {/* Top Breadcrumb & Hero */}
        <header className="pt-28 md:pt-36 pb-12 md:pb-20 border-b border-black/10 bg-gradient-to-b from-black/[0.015] to-transparent">
          <div className="page-margin max-content">
            {/* Breadcrumbs */}
            <ScrollReveal>
              <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-body text-xs text-black/60 uppercase tracking-wider mb-8">
                <Link to="/projects" className="hover:text-pink transition-colors flex items-center gap-1">
                  <ArrowLeft className="w-3.5 h-3.5" />
                  Projects
                </Link>
                <ChevronRight className="w-3.5 h-3.5 text-black/30" />
                <span className="text-pink font-semibold">{study.client}</span>
              </nav>
            </ScrollReveal>

            {/* Badges & Client */}
            <ScrollReveal>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-block px-3.5 py-1 text-xs font-body font-semibold uppercase tracking-wider bg-pink/10 text-pink rounded-full border border-pink/20">
                  {study.category}
                </span>
                <span className="text-xs font-body text-black/50 uppercase tracking-wider">
                  Case Study
                </span>
              </div>
            </ScrollReveal>

            {/* Title & Subtitle */}
            <ScrollReveal>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-semibold text-black leading-[1.12] tracking-tight max-w-[26ch] mb-6">
                {study.title}
              </h1>
              {study.subtitle && (
                <p className="font-body text-base sm:text-lg md:text-xl text-black/75 leading-relaxed max-w-[70ch] mb-8">
                  {study.subtitle}
                </p>
              )}
            </ScrollReveal>

            {/* Quick Actions if present */}
            {study.actions && study.actions.length > 0 && (
              <ScrollReveal>
                <div className="flex flex-wrap gap-4 pt-2">
                  {study.actions.map((act) => (
                    <Button
                      key={act.label}
                      text={act.label}
                      href={act.href}
                      variant={act.variant || 'primary'}
                      dark={false}
                      className="rounded-full text-xs md:text-sm"
                    />
                  ))}
                  <Button
                    text="Back to Projects"
                    href="/projects"
                    variant="outline"
                    dark={false}
                    className="rounded-full text-xs md:text-sm"
                  />
                </div>
              </ScrollReveal>
            )}
          </div>
        </header>

        {/* Nutshell & Main Hero Visual */}
        <section className="py-12 md:py-16 bg-[#FAFAFA] border-b border-black/10">
          <div className="page-margin max-content">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Nutshell Card */}
              <ScrollReveal className="lg:col-span-6 order-2 lg:order-1">
                <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl border border-black/10 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-pink" />
                  <div className="flex items-center gap-2 mb-6">
                    <Sparkles className="w-4 h-4 text-pink" />
                    <span className="font-body text-xs font-semibold tracking-widest uppercase text-pink">
                      In a Nutshell
                    </span>
                  </div>

                  <dl className="space-y-6">
                    {study.nutshell.map((item) => (
                      <div key={item.label} className="border-b border-black/[0.06] pb-5 last:border-b-0 last:pb-0">
                        <dt className="font-display text-xs font-semibold uppercase tracking-wider text-black/50 mb-1.5">
                          {item.label}
                        </dt>
                        <dd className="font-body text-[14px] sm:text-[15px] leading-relaxed text-black/85">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </ScrollReveal>

              {/* Hero Image */}
              <ScrollReveal className="lg:col-span-6 order-1 lg:order-2">
                <div className="rounded-xl overflow-hidden border border-black/10 shadow-sm bg-white p-2">
                  <img
                    src={study.heroImage}
                    alt={study.heroImageAlt}
                    className="w-full h-auto max-h-[480px] object-contain rounded-lg bg-black/[0.02]"
                  />
                  <p className="font-body text-[12px] text-black/50 text-center py-2">
                    {study.heroImageAlt}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Narrative Body Section */}
        <section className="py-16 md:py-24">
          <div className="page-margin max-content max-w-[850px] mx-auto">
            {/* Optional Introductory Context */}
            {study.intro && (
              <ScrollReveal>
                <p className="font-body text-lg md:text-xl leading-relaxed text-black/85 mb-10 font-normal">
                  {study.intro}
                </p>
              </ScrollReveal>
            )}

            {/* Design Challenge Callout */}
            {study.challengeCallout && (
              <ScrollReveal>
                <div className="p-6 md:p-8 rounded-xl bg-pink/[0.05] border-l-4 border-pink mb-14">
                  <span className="font-display text-xs font-semibold text-pink uppercase tracking-wider block mb-2">
                    The Core Design Challenge
                  </span>
                  <p className="font-display text-base md:text-xl font-medium text-black leading-snug">
                    "{study.challengeCallout}"
                  </p>
                </div>
              </ScrollReveal>
            )}

            {/* Sections Flow */}
            <div className="space-y-12 md:space-y-16">
              {study.sections.map((section, secIdx) => (
                <ScrollReveal key={secIdx}>
                  <section className="pt-4">
                    {section.heading && (
                      section.level === 3 ? (
                        <h3 className="font-display text-xl md:text-2xl font-semibold text-black mt-8 mb-4 tracking-tight">
                          {section.heading}
                        </h3>
                      ) : (
                        <h2 className="font-display text-2xl md:text-3xl lg:text-[34px] font-semibold text-black leading-tight mb-6 tracking-tight">
                          {section.heading}
                        </h2>
                      )
                    )}

                    {/* Paragraphs */}
                    {section.paragraphs && section.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className="font-body text-[15px] md:text-[16px] leading-[26px] md:leading-[28px] text-black/80 mb-5 last:mb-0"
                      >
                        {p}
                      </p>
                    ))}

                    {/* Grid items (e.g. 4 pillars or dimensions) */}
                    {section.gridItems && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 my-8">
                        {section.gridItems.map((item) => (
                          <div
                            key={item.title}
                            className="p-5 md:p-6 rounded-lg bg-black/[0.02] border border-black/10 hover:border-pink/40 transition-colors"
                          >
                            <h4 className="font-display text-base md:text-lg font-semibold text-black mb-2 flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-pink" />
                              {item.title}
                            </h4>
                            <p className="font-body text-[14px] leading-relaxed text-black/70">
                              {item.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Bullet list with custom styling */}
                    {section.list && (
                      <ul className="space-y-3.5 my-6 pl-1">
                        {section.list.map((li, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-pink shrink-0 mt-0.5" />
                            <span className="font-body text-[15px] leading-relaxed text-black/80">
                              {li}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Numbered list */}
                    {section.numberedList && (
                      <ol className="space-y-3 my-6 pl-2">
                        {section.numberedList.map((li, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-3">
                            <span className="font-display font-semibold text-pink text-sm w-5 shrink-0">
                              {lIdx + 1}.
                            </span>
                            <span className="font-body text-[15px] leading-relaxed text-black/80">
                              {li}
                            </span>
                          </li>
                        ))}
                      </ol>
                    )}
                  </section>
                </ScrollReveal>
              ))}
            </div>

            {/* Curriculum Structure: Stages or Thematic Tracks */}
            {study.curriculumStructure && (
              <ScrollReveal className="mt-16 md:mt-20">
                <div className="bg-[#FAF9F7] p-6 sm:p-8 md:p-10 rounded-xl border border-black/10">
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-black mb-3">
                    {study.curriculumStructure.title}
                  </h2>
                  {study.curriculumStructure.description && (
                    <p className="font-body text-[15px] text-black/70 mb-8 leading-relaxed">
                      {study.curriculumStructure.description}
                    </p>
                  )}

                  {/* Themes (e.g. UNESCO Myanmar) */}
                  {study.curriculumStructure.themes && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {study.curriculumStructure.themes.map((themeGroup) => (
                        <div
                          key={themeGroup.theme}
                          className="bg-white p-5 rounded-lg border border-black/10 shadow-xs"
                        >
                          <h4 className="font-display text-base font-semibold text-pink mb-3 pb-2 border-b border-black/[0.06]">
                            {themeGroup.theme}
                          </h4>
                          <ul className="space-y-2.5">
                            {themeGroup.courses.map((cName) => (
                              <li
                                key={cName}
                                className="font-body text-[13.5px] leading-snug text-black/80 flex items-start gap-2"
                              >
                                <span className="text-pink text-xs mt-0.5">•</span>
                                {cName}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stages (e.g. Patang India) */}
                  {study.curriculumStructure.stages && (
                    <div className="space-y-4">
                      {study.curriculumStructure.stages.map((stg) => (
                        <div
                          key={stg.stage}
                          className="bg-white p-4 sm:p-5 rounded-lg border border-black/10 flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6"
                        >
                          <span className="font-display text-xs font-semibold uppercase tracking-wider text-pink shrink-0 w-24">
                            {stg.stage}
                          </span>
                          <div>
                            <h4 className="font-display text-sm sm:text-base font-semibold text-black mb-1">
                              {stg.title}
                            </h4>
                            <p className="font-body text-[13.5px] text-black/70 leading-relaxed">
                              {stg.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            )}

            {/* Impact Statistics Highlight */}
            {study.impactStats && study.impactStats.length > 0 && (
              <ScrollReveal className="mt-16 md:mt-20">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {study.impactStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="p-6 rounded-xl bg-black/[0.02] border border-black/10 text-center"
                    >
                      <div className="font-display text-3xl md:text-4xl font-bold text-pink mb-2">
                        {stat.value}
                      </div>
                      <div className="font-display text-sm font-semibold text-black mb-1">
                        {stat.label}
                      </div>
                      {stat.subtext && (
                        <div className="font-body text-[12px] text-black/60 leading-snug">
                          {stat.subtext}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            )}

            {/* Testimonial Quote */}
            {study.quote && (
              <ScrollReveal className="mt-16 md:mt-20">
                <blockquote className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-near-black to-[#1a1a1a] text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-pink/20 blur-3xl pointer-events-none" />
                  <div className="font-display text-pink text-5xl leading-none select-none mb-4">“</div>
                  <p className="font-display text-lg md:text-2xl font-normal leading-relaxed text-white/95 mb-8 relative z-10">
                    {study.quote.text}
                  </p>
                  <footer className="flex items-center gap-3 relative z-10 pt-4 border-t border-white/15">
                    <div>
                      <cite className="font-display text-sm md:text-base font-semibold text-white not-italic block">
                        — {study.quote.attribution}
                      </cite>
                      <span className="font-body text-xs text-white/60 block">
                        {study.quote.role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </ScrollReveal>
            )}

            {/* Lessons Learned (e.g. GIZ) */}
            {study.lessonsLearned && (
              <ScrollReveal className="mt-16 md:mt-20">
                <div>
                  <h2 className="font-display text-2xl md:text-3xl font-semibold text-black mb-6">
                    Key Lessons Learned
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {study.lessonsLearned.map((les) => (
                      <div
                        key={les.number}
                        className="p-6 rounded-lg bg-[#FAF9F7] border border-black/10 flex gap-4 items-start"
                      >
                        <span className="font-display text-2xl font-bold text-pink leading-none shrink-0">
                          0{les.number}
                        </span>
                        <p className="font-body text-[14px] leading-relaxed text-black/80">
                          {les.text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Prev / Next Case Study Navigation */}
            <footer className="mt-24 pt-12 border-t border-black/15">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
                {prev ? (
                  <Link
                    to={`/projects/${prev.slug}`}
                    className="group flex-1 p-5 rounded-lg border border-black/10 hover:border-pink hover:bg-pink/[0.02] transition-all"
                  >
                    <span className="font-body text-xs text-black/50 uppercase tracking-wider flex items-center gap-1 mb-1">
                      <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
                      Previous Project
                    </span>
                    <span className="font-display text-sm sm:text-base font-semibold text-black group-hover:text-pink transition-colors line-clamp-1">
                      {prev.client}: {prev.title}
                    </span>
                  </Link>
                ) : <div className="flex-1" />}

                {next ? (
                  <Link
                    to={`/projects/${next.slug}`}
                    className="group flex-1 p-5 rounded-lg border border-black/10 hover:border-pink hover:bg-pink/[0.02] transition-all text-right sm:text-right"
                  >
                    <span className="font-body text-xs text-black/50 uppercase tracking-wider flex items-center justify-end gap-1 mb-1">
                      Next Project
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="font-display text-sm sm:text-base font-semibold text-black group-hover:text-pink transition-colors line-clamp-1">
                      {next.client}: {next.title}
                    </span>
                  </Link>
                ) : <div className="flex-1" />}
              </div>

              <div className="text-center mt-10">
                <Button
                  text="Explore All Projects"
                  href="/projects"
                  variant="outline"
                  dark={false}
                  className="rounded-full text-xs md:text-sm"
                />
              </div>
            </footer>
          </div>
        </section>

        {/* Global Contact Section */}
        <ContactSection title="Have a learning challenge? Let's build together" />
      </article>
    </Layout>
  );
}
