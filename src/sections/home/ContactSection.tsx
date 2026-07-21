import ScrollReveal from '../../components/ScrollReveal';
import ContactForm from '../../components/ContactForm';
import NeuronMotif from '../../components/NeuronMotif';

interface ContactSectionProps {
  title?: string;
}

export default function ContactSection({ title }: ContactSectionProps) {
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
                {title ?? "Let's build learning that drives impact"}
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-body text-[14px] leading-[23px] text-white/70 mb-6 max-w-[45ch]">
                Submit your contact details. We'll get back to you within 7 working days.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <a
                href="mailto:hello@learningdesignlabs.com"
                className="font-body text-[14px] leading-[23px] text-white/50 hover:text-white transition-colors"
              >
                hello@learningdesignlabs.com
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
