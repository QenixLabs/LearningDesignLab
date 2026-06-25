import ScrollReveal from '../../components/ScrollReveal';
import SectionLabel from '../../components/SectionLabel';
import ContactForm from '../../components/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-near-black py-20 md:py-32 relative overflow-hidden">
      {/* Subtle grid motif overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FFFFFF' stroke-width='0.5'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3Cpath d='M0 30h60M30 0v60'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px',
        }}
      />
      
      <div className="page-margin max-content relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left column */}
          <div>
            <ScrollReveal>
              <SectionLabel text="Get in Touch" light />
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="heading-xl text-white mb-6">
                Let's Build Learning That Drives Impact
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="font-body text-base leading-relaxed text-white/70 mb-6 max-w-[45ch]">
                Better Learning Together. Tell us about your learning challenges and we'll design
                solutions that work.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <a
                href="mailto:hello@learningdesignlabs.com"
                className="font-body text-base text-white/50 hover:text-white transition-colors"
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
