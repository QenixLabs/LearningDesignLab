import ScrollReveal from '../../components/ScrollReveal';
import SectionLabel from '../../components/SectionLabel';
import ContactForm from '../../components/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-black py-32 relative overflow-hidden">
      {/* Pink neuron motif overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FF1493' stroke-width='0.6'%3E%3Cpath d='M10 50 Q30 20 50 50 T90 50'/%3E%3Cpath d='M0 30 Q20 5 40 30 T80 30'/%3E%3Cpath d='M20 70 Q40 45 60 70 T100 70'/%3E%3Cpath d='M5 80 Q25 60 45 80 T85 80'/%3E%3Ccircle cx='10' cy='50' r='2' fill='%23FF1493'/%3E%3Ccircle cx='50' cy='50' r='2.5' fill='%23FF1493'/%3E%3Ccircle cx='90' cy='50' r='2' fill='%23FF1493'/%3E%3Ccircle cx='40' cy='30' r='1.5' fill='%23C71585'/%3E%3Ccircle cx='60' cy='70' r='1.5' fill='%23C71585'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
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
                className="font-body text-base text-pink hover:text-pink-light transition-colors"
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
