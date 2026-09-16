import ScrollReveal from '../../components/ScrollReveal';
import ContactForm from '../../components/ContactForm';
import NeuronMotif from '../../components/NeuronMotif';
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { SITE_SETTINGS_QUERY, type SanitySiteSettings } from '@/lib/sanity/queries';
import { HOME_PAGE_QUERY, type SanityHomePage } from '@/lib/sanity/queries';

interface ContactSectionProps {
  title?: string;
}

export default function ContactSection({ title }: ContactSectionProps) {
  const { data: settings } = useSanityQuery<SanitySiteSettings>(SITE_SETTINGS_QUERY, {}, {
    contactEmail: 'shraddha@learningdesignlab.co',
  });
  const { data: home } = useSanityQuery<SanityHomePage>(HOME_PAGE_QUERY, {}, {} as SanityHomePage);

  const contactEmail = settings.contactEmail ?? 'shraddha@learningdesignlab.co';
  const heading = title ?? home.contactHeading ?? "Let's build learning that drives impact";
  const subtext = home.contactSubtext ?? "Submit your contact details. We'll get back to you within 7 working days.";

  return (
    <section id="contact" className="bg-near-black py-20 md:py-32 relative overflow-hidden">
      {/* Neuron motif overlay */}
      <NeuronMotif color="#FF1493" opacity={0.12} size={250} />

      <div className="page-margin max-content relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column */}
          <div>
            <ScrollReveal>
              <h2 className="heading-xl text-white mb-6">
                {heading}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-body text-[14px] leading-[23px] text-white/70 mb-6 max-w-[45ch]">
                {subtext}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <a
                href={`mailto:${contactEmail}`}
                className="font-body text-[14px] leading-[23px] text-white/50 hover:text-white transition-colors"
              >
                {contactEmail}
              </a>
            </ScrollReveal>
          </div>

          {/* Right column - Form */}
          <ScrollReveal delay={0.2}>
            <ContactForm dark />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

