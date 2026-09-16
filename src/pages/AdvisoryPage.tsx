import Layout from '../components/Layout';
import AdvisoryHeroSection from '../sections/services/AdvisoryHeroSection';
import AdvisoryProblemSection from '../sections/services/AdvisoryProblemSection';
import AdvisoryServicesSection from '../sections/services/AdvisoryServicesSection';
import MethodologyDiagram from '../sections/services/MethodologyDiagram';
import AdvisoryExampleProjectsSection from '../sections/services/AdvisoryExampleProjectsSection';
import TestimonialsSection from '../sections/home/TestimonialsSection';
import ContactSection from '../sections/home/ContactSection';
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { SERVICE_PAGES_QUERY, type SanityServicePage } from '@/lib/sanity/queries';

export default function AdvisoryPage() {
  const { data: sanityServices } = useSanityQuery<SanityServicePage[]>(SERVICE_PAGES_QUERY, {}, []);
  const doc = sanityServices.find((s) => s.serviceId === 'advisory');

  return (
    <Layout>
      <AdvisoryHeroSection
        heading={doc?.heroHeading ?? undefined}
        subtext={doc?.heroSubtext ?? undefined}
        ctaLabel={doc?.heroCtaLabel ?? undefined}
        stats={doc?.heroStats ?? undefined}
      />
      <AdvisoryProblemSection
        heading={doc?.problemHeading ?? undefined}
        paragraphs={doc?.problemParagraphs ?? undefined}
      />
      <AdvisoryServicesSection
        heading={doc?.serviceCardsHeading ?? undefined}
        services={doc?.serviceCards ?? undefined}
      />
      <MethodologyDiagram
        heading={doc?.methodologyHeading ?? undefined}
        fields={doc?.methodologyFields ?? undefined}
      />
      <AdvisoryExampleProjectsSection
        heading={doc?.exampleProjectsHeading ?? undefined}
        projects={doc?.exampleProjects ?? undefined}
        ctaText={doc?.exampleProjectsCtaText ?? undefined}
        ctaHref={doc?.exampleProjectsCtaHref ?? undefined}
      />
      <TestimonialsSection />
      <ContactSection title={doc?.contactHeading ?? undefined} />
    </Layout>
  );
}
