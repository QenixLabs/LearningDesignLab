import Layout from '../components/Layout';
import ResearchHeroSection from '../sections/services/ResearchHeroSection';
import ResearchProblemSection from '../sections/services/ResearchProblemSection';
import ResearchServicesSection from '../sections/services/ResearchServicesSection';
import MethodologyDiagram from '../sections/services/MethodologyDiagram';
import ResearchExampleProjectsSection from '../sections/services/ResearchExampleProjectsSection';
import TestimonialsSection from '../sections/home/TestimonialsSection';
import ContactSection from '../sections/home/ContactSection';

export default function ResearchEvaluationPage() {
  return (
    <Layout>
      <ResearchHeroSection />
      <ResearchProblemSection />
      <ResearchServicesSection />
      <MethodologyDiagram />
      <ResearchExampleProjectsSection />
      <TestimonialsSection />
      <ContactSection title="Let's Move From Assumptions to Evidence" />
    </Layout>
  );
}
