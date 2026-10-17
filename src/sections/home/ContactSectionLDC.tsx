import ScrollReveal from '../../components/ScrollReveal';
import ContactForm from '../../components/ContactForm';
import NeuronMotif from '../../components/NeuronMotif';
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { SITE_SETTINGS_QUERY, type SanitySiteSettings } from '@/lib/sanity/queries';

interface ContactSectionLDCProps {
  title?: string;
  heading?: string;
  subtext?: string;
  email?: string;
}

export default function ContactSectionLDC({ title, heading, subtext, email }: ContactSectionLDCProps) {
  const { data: settings } = useSanityQuery<SanitySiteSettings>(SITE_SETTINGS_QUERY, {}, {
    contactEmail: 'shraddha@learningdesignlab.co',
  });

  const contactEmail = email || settings.contactEmail || 'shraddha@learningdesignlab.co';
  const displayHeading = heading || title || "Contribute to LDC";
  const displaySubtext = subtext || "Submit your contact details. We'll get back to you within 7 working days.";

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
                {displayHeading}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-body text-[14px] leading-[23px] text-white/70 mb-6 max-w-[45ch]">
                {displaySubtext}
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

