import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ServiceDetail from '../components/ServiceDetail';
import ServicesHeroSection from '../sections/services/ServicesHeroSection';
import ProblemSection from '../sections/services/ProblemSection';
import MethodologyDiagram from '../sections/services/MethodologyDiagram';
import ProcessSection from '../sections/services/ProcessSection';
import WhatWeOfferSection from '../sections/services/WhatWeOfferSection';
import TargetSectorsSection from '../sections/services/TargetSectorsSection';
import OutcomesSection from '../sections/services/OutcomesSection';
import ProofPointsSection from '../sections/services/ProofPointsSection';
import TestimonialsSection from '../sections/home/TestimonialsSection';
import ContactSection from '../sections/home/ContactSection';
import { services } from '../data/services';

interface ServicePageProps {
  serviceId: string;
  blank?: boolean;
}

export default function ServicePage({ serviceId, blank = false }: ServicePageProps) {
  const navigate = useNavigate();
  const service = services[serviceId];

  useEffect(() => {
    if (!service && !blank) {
      navigate('/services', { replace: true });
    }
  }, [service, blank, navigate]);

  if (blank) {
    return (
      <Layout>
        <div className="min-h-[80vh]" />
      </Layout>
    );
  }

  if (!service) return null;

  return (
    <Layout>
      <ServicesHeroSection />
      <ProblemSection />
      <ProcessSection />
      {serviceId === 'course-development' ? <WhatWeOfferSection /> : <ServiceDetail {...service} />}
      <MethodologyDiagram />
      <TargetSectorsSection />
      <OutcomesSection />
      <ProofPointsSection />
      <TestimonialsSection title="Client Voices" />
      <ContactSection />
    </Layout>
  );
}
