import Layout from '../components/Layout';
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
      <section className="bg-white py-20 md:py-32">
        <div className="page-margin max-content">
          <div className="max-w-[75ch] mx-auto text-center mb-16 md:mb-24">
            <h1 className="font-display text-[36px] leading-[38px] font-medium text-black mb-6">{copy.heading}</h1>
            {copy.intro && (
              <p className="font-body text-[16px] leading-[23px] text-black/70">
                {copy.intro}
              </p>
            )}
          </div>

          <div className="flex flex-col">
            {conferences.map((conf, index) => {
              const isReversed = index % 2 === 1;
              const showContent = conf.description || (conf.actions && conf.actions.length > 0) || (conf.tags && conf.tags.length > 0);
              return (
                <article
                  key={`${conf.title}-${index}`}
                  className={cn(
                    'grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 py-12 md:py-20 border-t border-black/10',
                    index === conferences.length - 1 && 'border-b border-black/10'
                  )}
                >
                  <div
                    className={cn(
                      'flex flex-col justify-center',
                      isReversed && 'md:order-2'
                    )}
                  >
                    <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-black leading-tight mb-2">
                      {conf.title}
                    </h2>
                    <p className="font-body text-sm text-black/50 mb-1">
                      {conf.year && `${conf.year} · `}
                      {conf.location}
                    </p>
                    {showContent && (
                      <>
                        <p className="font-body text-[14px] leading-[23px] text-black/70 mt-4 mb-6">
                          {conf.description}
                        </p>
                        {conf.tags && conf.tags.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-6">
                            {conf.tags.map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1.5 px-3 py-1 bg-black text-white text-xs font-body rounded-sm"
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
                              />
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>

                  <div
                    className={cn(
                      'flex items-center',
                      isReversed && 'md:order-1'
                    )}
                  >
                    {conf.images ? (
                      <div className="flex flex-col gap-4">
                        {conf.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`${conf.imageAlt} ${i + 1}`}
                            className={cn(
                              'w-full aspect-[4/3] object-cover rounded-lg border border-black/10',
                              conf.imagePosition
                            )}
                          />
                        ))}
                      </div>
                    ) : conf.image ? (
                      <img
                        src={conf.image}
                        alt={conf.imageAlt}
                        className={cn(
                          'w-full aspect-[4/3] object-cover rounded-lg border border-black/10',
                          conf.imagePosition
                        )}
                      />
                    ) : (
                      <PlaceholderImage className="w-full aspect-[4/3]" />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
