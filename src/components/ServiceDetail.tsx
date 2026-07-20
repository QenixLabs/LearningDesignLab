import ScrollReveal from './ScrollReveal';
import NeuronMotif from './NeuronMotif';

interface ServiceItem {
  title?: string;
  description?: string;
  text?: string;
}

interface ServiceDetailProps {
  id?: string;
  number: string;
  title: string;
  description: string;
  items: ServiceItem[];
  itemsHeading: string;
  approachNote?: string;
  outcomeNote?: string;
  differentiator?: string;
  cta: string;
  dark?: boolean;
}

export default function ServiceDetail({
  id,
  number,
  title,
  description,
  items,
  itemsHeading,
  approachNote,
  outcomeNote,
  differentiator,
  cta,
  dark = true,
}: ServiceDetailProps) {
  const textColor = dark ? 'text-white' : 'text-black';
  const textMuted = dark ? 'text-white/70' : 'text-black/60';
  const textFaint = dark ? 'text-pink/60' : 'text-pink/70';
  const borderColor = dark ? 'border-pink/15' : 'border-pink/15';
  const borderLight = dark ? 'border-pink/20' : 'border-pink/25';
  const numberColor = dark ? 'text-pink/20' : 'text-pink/15';

  return (
    <div id={id} className={`${dark ? 'bg-black' : 'bg-warm-grey'} py-24 relative overflow-hidden`}>
      {/* Neuron motif */}
      <NeuronMotif opacity={0.03} />

      <div className="page-margin max-content relative z-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-6 md:gap-0">
            {/* Number */}
            <div className="md:w-[15%] shrink-0">
              <span className={`font-display text-[6vw] md:text-[3.5vw] leading-none tracking-[-0.01em] ${numberColor}`}>
                {number}
              </span>
            </div>

            {/* Separator */}
            <div className={`hidden md:block w-px ${borderColor} self-stretch mx-6`} />

            {/* Content */}
            <div className="flex-1">
              <h3 className={`heading-xl ${textColor} mb-6`}>{title}</h3>
              <p className={`font-body text-sm leading-relaxed ${textMuted} max-w-[60ch] mb-8`}>
                {description}
              </p>

              <h4 className={`heading-md ${textColor} mt-12 mb-6`}>{itemsHeading}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                {items.map((item, i) => (
                  <div key={i} className={`font-body text-sm ${textMuted}`}>
                    {item.title ? (
                      <div className="mb-1">
                        <span className={`heading-md text-base ${textColor} block mb-1`}>{item.title}</span>
                        <span className={`text-sm ${textFaint}`}>{item.description}</span>
                      </div>
                    ) : (
                      <span className="flex gap-2">
                        <span className="mt-2 block w-2 h-px bg-pink shrink-0" />
                        {item.text}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {approachNote && (
                <p className={`section-label ${textFaint} mt-8 block`}>{approachNote}</p>
              )}
              {outcomeNote && (
                <p className={`section-label ${textFaint} mt-2 block`}>{outcomeNote}</p>
              )}

              {differentiator && (
                <blockquote className={`mt-8 pl-6 border-l-2 ${borderLight}`}>
                  <p className={`font-body text-sm italic leading-relaxed ${textMuted}`}>
                    {differentiator}
                  </p>
                </blockquote>
              )}

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`font-body text-sm font-medium uppercase text-pink inline-flex items-center gap-2 mt-10 group`}
              >
                {cta} <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
