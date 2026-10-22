import Layout from '../components/Layout';
import NeuronMotif from '../components/NeuronMotif';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import { cn } from '@/lib/utils';
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { CONFERENCES_QUERY, PAGE_COPY_QUERY, type SanityConference, type SanityPageCopy } from '@/lib/sanity/queries';
import { imgUrl } from '@/lib/sanity/image';
import { conferences as fallbackConferences } from '../data/conferences';

function PlaceholderImage({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'w-full bg-white border border-black/10 rounded-xl flex items-center justify-center shadow-xs',
        className
      )}
    >
      <span className="text-black/20 text-[10px] font-body uppercase tracking-wider">
        Image
      </span>
    </div>
  );
}

export default function Conferences() {
  const { data: rawConferences } = useSanityQuery<SanityConference[]>(
    CONFERENCES_QUERY,
    {},
    []
  );

  const conferences =
    rawConferences.length > 0
      ? rawConferences.map((c) => ({
          ...c,
          image: imgUrl(c.image, 1200),
          images: c.images?.length
            ? c.images.map((img) => imgUrl(img, 1200)).filter((u): u is string => Boolean(u))
            : undefined,
        }))
      : fallbackConferences;

  const { data: copy } = useSanityQuery<SanityPageCopy>(
    PAGE_COPY_QUERY,
    { id: 'pageCopy-conferences' },
    {
      pageKey: 'conferences',
      heading: 'Our Work at Conferences',
      intro:
        "We've delivered talks and presentations on a diverse range of topics, including AI in education, Universal Design for Learning (UDL), youth empowerment, and the intersection of cognitive science and learning design.",
    }
  );

  return (
    <Layout>
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

          <div className="flex flex-col gap-8 md:gap-12">
            {conferences.map((conf, index) => {
              const isReversed = index % 2 === 1;
              const showContent =
                conf.description ||
                (conf.actions && conf.actions.length > 0) ||
                (conf.tags && conf.tags.length > 0);
              return (
                <ScrollReveal key={`${conf.title}-${index}`}>
                  <article
                    className={cn(
                      'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-6 sm:p-8 md:p-12',
                      'bg-warm-grey border border-black/10 rounded-2xl shadow-xs hover:border-pink/30 hover:shadow-md transition-all duration-300'
                    )}
                  >
                    <div
                      className={cn(
                        'flex flex-col justify-center',
                        isReversed ? 'md:order-2' : 'md:order-1'
                      )}
                    >
                      <h2 className="font-display text-xl md:text-2xl lg:text-[26px] font-semibold text-black leading-tight mb-2">
                        {conf.title}
                      </h2>
                      <h3 className="font-body text-sm md:text-[15px] text-pink font-medium mb-1">
                        {conf.year && `${conf.year} · `}
                        {conf.location}
                      </h3>
                      {showContent && (
                        <>
                          {conf.description && (
                            <p className="font-body text-[14px] leading-[23px] text-black/70 mt-3 mb-6">
                              {conf.description}
                            </p>
                          )}
                          {conf.tags && conf.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                              {conf.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-xs font-body rounded-full"
                                >
                                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          {conf.actions && conf.actions.length > 0 && (
                            <div className="flex flex-wrap gap-4">
                              {conf.actions.map((action) => (
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
                        </>
                      )}
                    </div>

                    <div
                      className={cn(
                        'flex items-center justify-center',
                        isReversed ? 'md:order-1' : 'md:order-2'
                      )}
                    >
                      {conf.images ? (
                        <div className="flex flex-col gap-4 w-full">
                          {conf.images.map((img, i) => (
                            <div
                              key={i}
                              className="w-full overflow-hidden rounded-xl bg-white border border-black/10 flex items-center justify-center shadow-xs"
                            >
                              <img
                                src={img}
                                alt={`${conf.imageAlt || conf.title} ${i + 1}`}
                                className={cn(
                                  'w-full aspect-[4/3] object-cover',
                                  conf.imagePosition
                                )}
                              />
                            </div>
                          ))}
                        </div>
                      ) : conf.image ? (
                        <div className="w-full overflow-hidden rounded-xl bg-white border border-black/10 flex items-center justify-center shadow-xs">
                          <img
                            src={conf.image}
                            alt={conf.imageAlt || conf.title}
                            className={cn(
                              'w-full aspect-[4/3] object-cover',
                              conf.imagePosition
                            )}
                          />
                        </div>
                      ) : (
                        <PlaceholderImage className="w-full aspect-[4/3]" />
                      )}
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
