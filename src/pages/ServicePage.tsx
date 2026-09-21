import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import ServiceDetail from '../components/ServiceDetail';
import ServicesHeroSection from '../sections/services/ServicesHeroSection';
import FacultyHeroSection from '../sections/services/FacultyHeroSection';
import FacultyProblemSection from '../sections/services/FacultyProblemSection';
import FacultyWorkshopsSection from '../sections/services/FacultyWorkshopsSection';
import FacultyAcceleratorSection from '../sections/services/FacultyAcceleratorSection';
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
import { services as fallbackServices, type ServiceData } from '../data/services';
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { SERVICE_PAGES_QUERY, type SanityServicePage } from '@/lib/sanity/queries';

const facultyTestimonials = [
  {
    quote:
      'The sessions provided deep insights into moving beyond traditional methods – aligning our teaching design with how the human brain processes, retains, and recalls information.',
    highlight: 'deep insights into moving beyond traditional methods',
    attribution: 'Prof.(Dr.) Kaveri Sharma, Dean, K R Mangalam',
  },
  {
    quote:
      "The workshop on AI-enabled teaching, learning, and research was insightful and inspiring, demonstrating practical applications that will not only foster personal and professional growth but also enhance colleagues' ability to design more effective lesson plans, create efficient and impactful learning experiences for both educators and students, and we were thankful for this!",
    highlight: 'practical applications',
    attribution: 'Shanthi Menon, Director, IQAD (University of Stirling & SQA), RAK Campus, UAE',
  },
  {
    quote:
      'What made the UDL session particularly valuable was its hands-on nature, where participants actively explored the use of digital tools to make learning materials, activities, and assessments more accessible. Faculty found it both insightful and practical in helping them explore teaching approaches using digital and AI tools.',
    highlight: 'hands-on nature',
    attribution: 'Dr. Deepthy Raghavendra, L&D Head and Professor, ITM Skills University',
  },
  {
    quote:
      'The way of delivery itself became a great learning experience. Six hours of learning and zero tiredness at the end of the day.',
    highlight: 'great learning experience',
    attribution: 'Dr. Rabiya Basri, Assistant Professor, K R Mangalam',
  },
  {
    quote:
      'I liked the practical approach, energy of the facilitators, and the wide range of tools explained. Their subject knowledge and their realistic assessment of AI tools was excellent.',
    highlight: 'wide range of tools explained',
    attribution: 'William McQueer, Assistant Professor, University of Stirling',
  },
];

interface ServicePageProps {
  serviceId: string;
  blank?: boolean;
}

export default function ServicePage({ serviceId, blank = false }: ServicePageProps) {
  const navigate = useNavigate();
  const { data: sanityServices } = useSanityQuery<SanityServicePage[]>(SERVICE_PAGES_QUERY, {}, []);

  const doc = sanityServices.find((s) => s.serviceId === serviceId);

  const service: ServiceData | undefined = (() => {
    if (doc) {
      return {
        id: doc.serviceId,
        number: doc.number ?? '',
        title: doc.title,
        description: doc.description,
        items: doc.items ?? [],
        itemsHeading: doc.itemsHeading ?? '',
        approachNote: doc.approachNote,
        outcomeNote: doc.outcomeNote,
        differentiator: doc.differentiator,
        cta: doc.cta ?? '',
        dark: doc.dark,
      };
    }
    return fallbackServices[serviceId];
  })();

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
      {serviceId === 'faculty-enrichment' ? (
        <FacultyHeroSection
          heading={doc?.heroHeading ?? undefined}
          subtext={doc?.heroSubtext ?? undefined}
          ctaLabel={doc?.heroCtaLabel ?? undefined}
          stats={doc?.heroStats ?? undefined}
          footnote={doc?.heroFootnote ?? undefined}
        />
      ) : (
        <ServicesHeroSection
          heading={doc?.heroHeading ?? undefined}
          subtext={doc?.heroSubtext ?? undefined}
          ctaLabel={doc?.heroCtaLabel ?? undefined}
          stats={doc?.heroStats ?? undefined}
        />
      )}
      {serviceId === 'faculty-enrichment' ? (
        <FacultyProblemSection
          heading={doc?.problemHeading ?? undefined}
          paragraphs={doc?.problemParagraphs ?? undefined}
          text={doc?.problemText ?? undefined}
        />
      ) : (
        <ProblemSection
          heading={doc?.problemHeading ?? undefined}
          text={doc?.problemText ?? undefined}
        />
      )}
      {serviceId === 'faculty-enrichment' && (
        <FacultyWorkshopsSection
          heading={doc?.workshopsHeading ?? undefined}
          workshops={doc?.workshops ?? undefined}
        />
      )}
      {serviceId === 'faculty-enrichment' && (
        <FacultyAcceleratorSection
          heading={doc?.acceleratorHeading ?? undefined}
          meta={doc?.acceleratorMeta ?? undefined}
          paragraphs={doc?.acceleratorParagraphs ?? undefined}
        />
      )}
      {serviceId === 'faculty-enrichment' ? (
        <FacultyStrategySection
          heading={doc?.processHeading ?? undefined}
          steps={doc?.processSteps ?? undefined}
        />
      ) : (
        <ProcessSection
          heading={doc?.processHeading ?? undefined}
          steps={doc?.processSteps ?? undefined}
        />
      )}
      {serviceId === 'course-development' ? (
        <WhatWeOfferSection
          heading={doc?.offeringsHeading ?? undefined}
          offerings={doc?.offerings ?? undefined}
        />
      ) : serviceId !== 'faculty-enrichment' ? (
        <ServiceDetail {...service} />
      ) : null}
      <MethodologyDiagram
        heading={doc?.methodologyHeading ?? undefined}
        fields={doc?.methodologyFields ?? undefined}
      />
      {serviceId !== 'faculty-enrichment' && (
        <>
          <TargetSectorsSection
            heading={doc?.sectorsHeading ?? undefined}
            sectors={doc?.sectors ?? undefined}
          />
          <OutcomesSection
            heading={doc?.outcomesHeading ?? undefined}
            outcomes={doc?.outcomes ?? undefined}
          />
          <ProofPointsSection
            heading={doc?.proofPointsHeading ?? undefined}
            proofPoints={doc?.proofPoints ?? undefined}
          />
        </>
      )}
      {serviceId === 'faculty-enrichment' && (
        <FacultySocialProofSection
          heading={doc?.socialProofHeading ?? undefined}
          partners={doc?.socialProofPartners ?? undefined}
        />
      )}
      {serviceId === 'faculty-enrichment' ? (
        <TestimonialsSection items={facultyTestimonials} compact />
      ) : (
        <TestimonialsSection />
      )}
      {serviceId === 'faculty-enrichment' ? (
        <ContactSection title={doc?.contactHeading ?? "Your Educators Are Working Hard. Let's Ensure Their Efforts Pay Off."} />
      ) : (
        <ContactSection title={doc?.contactHeading ?? undefined} />
      )}
    </Layout>
  );
}
