import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import NeuronMotif from '../components/NeuronMotif';
import ScrollReveal from '../components/ScrollReveal';
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { PAGE_COPY_QUERY, type SanityPageCopy } from '@/lib/sanity/queries';
import { caseStudies } from '../data/caseStudies';
import { ArrowRight, Sparkles } from 'lucide-react';

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

          <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
            {caseStudies.map((study, index) => (
              <ScrollReveal key={study.slug} delay={0.08 * index}>
                <article className="border border-black/10 rounded-2xl p-6 md:p-10 bg-gradient-to-br from-white to-black/[0.01] hover:border-pink/40 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start mb-6">
                    {study.heroImage && (
                      <div className="w-full md:w-56 h-40 rounded-xl overflow-hidden bg-black/5 shrink-0 border border-black/5">
                        <img
                          src={study.heroImage}
                          alt={study.heroImageAlt || study.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1">
                      {study.client && (
                        <span className="font-display text-xs font-semibold uppercase tracking-wider text-pink mb-2 block">
                          {study.client}
                        </span>
                      )}
                      {/* 2-line heading */}
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-black leading-snug mb-2">
                        {study.title}
                      </h2>
                      {study.subtitle && (
                        <p className="font-body text-sm sm:text-base text-black/60 italic leading-relaxed">
                          {study.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* In a nutshell */}
                  {study.nutshell && study.nutshell.length > 0 && (
                    <div className="my-6 bg-black/[0.02] border border-black/5 rounded-xl p-5 md:p-6">
                      <h3 className="font-display text-xs font-bold uppercase tracking-wider text-black/50 mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-pink" />
                        In a Nutshell
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {study.nutshell.map((item) => (
                          <div key={item.label} className="text-sm">
                            <span className="font-semibold text-black/85 mr-1.5">
                              {item.label}:
                            </span>
                            <span className="text-black/70 leading-relaxed">
                              {item.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* The Core Design Challenge */}
                  {study.challengeCallout && (
                    <div className="my-6 border-l-4 border-pink bg-pink/[0.04] p-4 md:p-5 rounded-r-xl">
                      <span className="font-display text-xs font-bold uppercase tracking-wider text-pink block mb-1">
                        The Core Design Challenge
                      </span>
                      <p className="font-body text-sm sm:text-base text-black/80 font-medium leading-relaxed italic">
                        &ldquo;{study.challengeCallout}&rdquo;
                      </p>
                    </div>
                  )}

                  {/* Full story button */}
                  <div className="pt-4 flex justify-end">
                    <Link
                      to={`/projects/${study.slug}`}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-pink text-white font-body text-sm font-semibold hover:bg-pink-dark transition-all duration-200 shadow-sm hover:shadow hover:gap-3"
                    >
                      <span>+ Full story</span>
                      <ArrowRight className="w-4 h-4" />
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
