import Layout from '../components/Layout';
import AdvisoryHeroSection from '../sections/services/AdvisoryHeroSection';
import AdvisoryProblemSection from '../sections/services/AdvisoryProblemSection';
import AdvisoryServicesSection from '../sections/services/AdvisoryServicesSection';
import MethodologyDiagram from '../sections/services/MethodologyDiagram';
import AdvisoryExampleProjectsSection from '../sections/services/AdvisoryExampleProjectsSection';
import TestimonialsSection from '../sections/home/TestimonialsSection';
import ContactSection from '../sections/home/ContactSection';

export default function AdvisoryPage() {
  return (
    <Layout>
      <AdvisoryHeroSection />
      <AdvisoryProblemSection />
      <AdvisoryServicesSection />
      <MethodologyDiagram />
      <AdvisoryExampleProjectsSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
}
