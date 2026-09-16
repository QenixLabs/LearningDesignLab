import Layout from '../components/Layout';
import ResearchHeroSection from '../sections/services/ResearchHeroSection';
import ResearchProblemSection from '../sections/services/ResearchProblemSection';
import ResearchServicesSection from '../sections/services/ResearchServicesSection';
import MethodologyDiagram from '../sections/services/MethodologyDiagram';
import ResearchExampleProjectsSection from '../sections/services/ResearchExampleProjectsSection';
import TestimonialsSection from '../sections/home/TestimonialsSection';
import ContactSection from '../sections/home/ContactSection';
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { SERVICE_PAGES_QUERY, type SanityServicePage } from '@/lib/sanity/queries';

export default function ResearchEvaluationPage() {
  const { data: sanityServices } = useSanityQuery<SanityServicePage[]>(SERVICE_PAGES_QUERY, {}, []);
  const doc = sanityServices.find((s) => s.serviceId === 'research-evaluation');

  return (
    <Layout>
      <ResearchHeroSection
        heading={doc?.heroHeading ?? undefined}
        subtext={doc?.heroSubtext ?? undefined}
        ctaLabel={doc?.heroCtaLabel ?? undefined}
        stats={doc?.heroStats ?? undefined}
      />
      <ResearchProblemSection
        heading={doc?.problemHeading ?? undefined}
        paragraphs={doc?.problemParagraphs ?? undefined}
      />
      <ResearchServicesSection
        heading={doc?.serviceCardsHeading ?? undefined}
        services={doc?.serviceCards ?? undefined}
      />
      <MethodologyDiagram
        heading={doc?.methodologyHeading ?? undefined}
        fields={doc?.methodologyFields ?? undefined}
      />
      <ResearchExampleProjectsSection
        heading={doc?.exampleProjectsHeading ?? undefined}
        projects={doc?.exampleProjects ?? undefined}
        ctaText={doc?.exampleProjectsCtaText ?? undefined}
        ctaHref={doc?.exampleProjectsCtaHref ?? undefined}
      />
      <TestimonialsSection />
      <ContactSection title={doc?.contactHeading ?? "Let's Move From Assumptions to Evidence"} />
    </Layout>
  );
}
