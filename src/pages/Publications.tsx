import Layout from '../components/Layout';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { PUBLICATIONS_QUERY, type SanityPublication } from '@/lib/sanity/queries';
import { publications as fallbackPublications } from '../data/publications';

function TypeTag({ type }: { type: string }) {
  return (
    <span className="inline-block px-3 py-1 bg-pink text-white text-[11px] font-display font-medium rounded-sm">
      {type}
    </span>
  );
}

export default function Publications() {
  const { data: publications } = useSanityQuery<SanityPublication[]>(
    PUBLICATIONS_QUERY,
    {},
    fallbackPublications
  );

  return (
    <Layout>
      <section className="bg-white py-20 md:py-32 min-h-[80vh]">
        <div className="page-margin max-content">
          <div className="max-w-[75ch] mx-auto text-center mb-16 md:mb-24">
            <h1 className="font-display text-[36px] leading-[38px] font-medium text-black mb-6">Our Publications</h1>
            <p className="font-body text-[16px] leading-[23px] text-black/70">
              Our publications translate research into practice across digital
              pedagogy, AI in learning, instructional design, and education for
              social impact.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {publications.map((pub, index) => {
              const isLinked = pub.href !== '#';
              const CardWrapper = isLinked ? 'a' : 'div';

              return (
                <CardWrapper
                  key={index}
                  {...(isLinked && {
                    href: pub.href,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                  className={cn(
                    'group block bg-warm-grey border border-black/10 p-6 md:p-8 transition-colors hover:border-pink/30'
                  )}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <p className="font-body text-sm text-black/70 leading-relaxed mb-3">
                        {pub.citation}{' '}
                        <span className="text-black underline underline-offset-4 decoration-black/30">
                          {pub.title}
                        </span>{' '}
                        {pub.venue}
                      </p>
                      <TypeTag type={pub.type} />
                    </div>
                    {isLinked && (
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center w-10 h-10 bg-pink text-white transition-colors group-hover:bg-pink-dark">
                          <ExternalLink className="w-4 h-4" />
                        </span>
                      </div>
                    )}
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
