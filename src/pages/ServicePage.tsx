import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ServiceDetail from '../components/ServiceDetail';
import ServicesHeroSection from '../sections/services/ServicesHeroSection';
import FacultyHeroSection from '../sections/services/FacultyHeroSection';
import FacultyProblemSection from '../sections/services/FacultyProblemSection';
import FacultyWorkshopsSection from '../sections/services/FacultyWorkshopsSection';
import FacultyStrategySection from '../sections/services/FacultyStrategySection';
import FacultySocialProofSection from '../sections/services/FacultySocialProofSection';
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

const facultyTestimonials = [
  {
    quote:
      'The sessions provided deep insights into moving beyond traditional methods – aligning our teaching design with how the human brain processes, retains, and recalls information.',
    attribution: 'Prof.(Dr.) Kaveri Sharma, Dean, K R Mangalam',
  },
  {
    quote:
      "The workshop on AI-enabled teaching, learning, and research was insightful and inspiring, demonstrating practical applications that will not only foster personal and professional growth but also enhance colleagues' ability to design more effective lesson plans, create meaningful teaching and learning contents and assessments, grading rubrics and feedback to name a few. This now will lead to a more structured, efficient, and impactful learning experience for both educators and students; we are thankful for this!",
    attribution: 'Shanthi Menon, Director, IQAD (University of Stirling & SQA), RAK Campus, UAE',
  },
  {
    quote:
      'What made the UDL session particularly valuable was its hands-on nature, where participants actively explored the use of digital tools to make learning materials, activities, and assessments more accessible. Faculty found it both insightful and practical in helping them explore teaching approaches using digital and AI tools.',
    attribution: 'Dr. Deepthy Raghavendra, L&D Head and Professor, ITM Skills University',
  },
  {
    quote:
      'The way of delivery itself became a great learning experience. Six hours of learning and zero tiredness at the end of the day.',
    attribution: 'Dr. Rabiya Basri, Assistant Professor, K R Mangalam',
  },
  {
    quote:
      'I liked the practical approach, energy of the facilitators, and the wide range of tools explained. Their subject knowledge and their realistic assessment of AI tools was excellent.',
    attribution: 'William McQueer, Assistant Professor, University of Stirling',
  },
];

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
      {serviceId === 'faculty-enrichment' ? <FacultyHeroSection /> : <ServicesHeroSection />}
      {serviceId === 'faculty-enrichment' ? <FacultyProblemSection /> : <ProblemSection />}
      {serviceId === 'faculty-enrichment' && <FacultyWorkshopsSection />}
      {serviceId === 'faculty-enrichment' ? <FacultyStrategySection /> : <ProcessSection />}
      {serviceId === 'course-development' ? <WhatWeOfferSection /> : serviceId !== 'faculty-enrichment' ? <ServiceDetail {...service} /> : null}
      <MethodologyDiagram />
      {serviceId !== 'faculty-enrichment' && (
        <>
          <TargetSectorsSection />
          <OutcomesSection />
          <ProofPointsSection />
        </>
      )}
      {serviceId === 'faculty-enrichment' && <FacultySocialProofSection />}
      {serviceId === 'faculty-enrichment' ? (
        <TestimonialsSection title="What Faculty Say" items={facultyTestimonials} />
      ) : (
        <TestimonialsSection title="Client Voices" />
      )}
      <ContactSection />
    </Layout>
  );
}
