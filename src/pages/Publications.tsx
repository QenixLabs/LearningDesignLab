import Layout from '../components/Layout';
import { ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Publication {
  citation: string;
  title: string;
  venue: string;
  type: string;
  href: string;
}

const publications: Publication[] = [
  {
    citation: 'Rawat, S., Raghavendra, D., & Desai, N. (2025).',
    title: 'Interdisciplinarity in practice: Navigating structural, epistemic and human dimensions in education.',
    venue: 'India Higher Education Research Conference 2025, IIT Delhi, India.',
    type: 'Conference Paper',
    href: 'https://drive.google.com/file/d/1qkQvHwxRVZc32Ux3thVESwzF1HcfXy5A/view?usp=drive_link',
  },
  {
    citation: 'Jain, P., Ramchandani, J., & Rawat, S. (2025).',
    title: 'Reimagining learning with AI: Towards a learning society.',
    venue: "Global South's Learning Voice.",
    type: 'Report',
    href: 'https://www.linkedin.com/pulse/reimagining-learning-ai-towards-society-learningdesigners-cbmvc/?trackingId=1k3VwR0NSzu7BBYVPk50zQ%3D%3D',
  },
  {
    citation: 'Ojo, T., S., Raghavendra, D., Desai, N., Monon, S., Chime, C., & Jain, P. (2025).',
    title: 'Can dialogue build peace through education? What cross-country dialogues taught us about learning, listening, and peace.',
    venue: 'UNESCO MGIEP, Peace Paragons.',
    type: 'Report',
    href: 'https://mgiep.unesco.org/article/can-dialogue-build-peace-through-education-what-cross-country-dialogues-taught-us-about-learning-listening-and-peace',
  },
  {
    citation: 'Rawat, S., Tiwari, S., Sharma, M., & Chatterjee Singh, N. (2024).',
    title: 'The digital pedagogy competence scale (DiPeCoS): Development and validation.',
    venue: 'Research and Practice in Technology Enhanced Learning, 19, Article 018.',
    type: 'Journal Article',
    href: 'https://doi.org/10.58459/rptel.2024.19018',
  },
  {
    citation: 'Rawat, S., Jain, P., & Saini, A. (2023).',
    title: 'Designing UDL-informed online learning with digital tools.',
    venue: 'International Conference of Technology for Education, India.',
    type: 'Conference Paper',
    href: 'https://www.researchgate.net/publication/385291539_Designing_UDL-Informed_Online_Learning_with_Digital_Tools',
  },
  {
    citation: 'Rawat, S., Tiwari, S., Sharma, M., & Chatterjee, N. (2022).',
    title: 'Development and validation of a brief Digital Pedagogy Competency Scale (DiPeCoS).',
    venue: 'International Conference on Computers in Education.',
    type: 'Conference Paper',
    href: 'https://library.apsce.net/index.php/ICCE/article/view/4558',
  },
  {
    citation: 'Rawat, S., Rautela, R., & Rawat, S. (2020).',
    title: 'Unleashing the potential of digital learning: Freemiumpace and libre pedagogy.',
    venue: 'The Blue Dot. (13). UNESCO MGIEP.',
    type: 'Magazine Article',
    href: 'https://montessori-ami.org/sites/default/files/downloads/news/Cuevas2020NewSchoolApproaches.pdf',
  },
  {
    citation: 'UNICEF, UNHCR, & UNFPA. (2025).',
    title: 'Technical guidelines for engaging the most marginalised: For practitioners working on intersectoral programming in adolescent and youth (including development of RAISE-IM Framework).',
    venue: 'UNICEF; UNHCR; UNFPA.',
    type: 'Report',
    href: 'https://apacnewsnetwork.com/2024/11/unicef-yuwaah-unfpa-and-unhcr-launch-guidelines-for-most-marginalized-youth/',
  },
  {
    citation: 'Rawat, S., Raghavendra, D., Desai, N., Ofotu, N., Onwiri, C., Omon, S., Chime, C., & Jain, P. (2025).',
    title: 'AI as catalytic companion: Towards truth-centric, evolutionary education.',
    venue: '',
    type: 'Preprint',
    href: 'https://drive.google.com/file/d/1xuxuzWBKB9h6ghfsd6BKIuRvM89imeOo/view?usp=drive_link',
  },
  {
    citation: "Global South's Learning Voices Blog Editor. (2025).",
    title: "Learning Designers Commuity: AI in education practitioner's experiments in Nigerian classrooms, detecting AI bias: A hands-on pedagogy for young learners and AI evaluation & feedback design: The feedback gap.",
    venue: "Global South's Learning Voices Blog.",
    type: 'Report',
    href: 'https://www.linkedin.com/newsletters/global-south-s-learning-voices-7289983829136588802/',
  },
  {
    citation: 'UNESCO MGIEP. (Ed.). (2020).',
    title: 'The Blue Dot: Reimagining learning spaces for uncertain times (Issue 12).',
    venue: 'UNESCO MGIEP.',
    type: 'Edited Periodical',
    href: 'https://unesdoc.unesco.org/ark:/48223/pf0000374294',
  },
  {
    citation: 'UNESCO MGIEP. (n.d.).',
    title: 'Landscape analysis of social and emotional skill training for policy makers to inform program design.',
    venue: '',
    type: 'Report',
    href: '#',
  },
  {
    citation: "Children's Investment Fund Foundation (CIFF). (n.d.).",
    title: 'Exploratory study to understand the perspectives of two target actors namely PASCO and PCFNDT on teen-age pregnancy.',
    venue: '',
    type: 'Report',
    href: '#',
  },
  {
    citation: '(2019).',
    title: 'Process and outcome evaluation of a project on building feminist leadership among adolescent girls in three districts of Bihar using mixed method approach.',
    venue: 'Center for Catalyzing Change (formerly CEDPA) for Comprehensive Sexuality Education (CSE).',
    type: 'Report',
    href: '#',
  },
];

function TypeTag({ type }: { type: string }) {
  return (
    <span className="inline-block px-3 py-1 bg-pink text-white text-[11px] font-display font-medium rounded-sm">
      {type}
    </span>
  );
}

export default function Publications() {
  return (
    <Layout>
      <section className="bg-white py-20 md:py-32 min-h-[80vh]">
        <div className="page-margin max-content">
          <div className="max-w-[75ch] mx-auto text-center mb-16 md:mb-24">
            <h1 className="font-display text-[36px] leading-[38px] font-medium text-black mb-6">Our Publications</h1>
            <p className="font-body text-[16px] leading-[23px] text-black/70">
              Our publications translate research into practice across digital
              pedagogy, AI in learning, instructional design, and education for
              social impact.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {publications.map((pub, index) => {
              const isLinked = index < 9;
              const CardWrapper = isLinked ? 'a' : 'div';

              return (
                <CardWrapper
                  key={index}
                  {...(isLinked && {
                    href: pub.href,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                  className={cn(
                    'group block bg-warm-grey border border-black/10 p-6 md:p-8 transition-colors hover:border-pink/30'
                  )}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <p className="font-body text-sm text-black/70 leading-relaxed mb-3">
                        {pub.citation}{' '}
                        <span className="text-black underline underline-offset-4 decoration-black/30">
                          {pub.title}
                        </span>{' '}
                        {pub.venue}
                      </p>
                      <TypeTag type={pub.type} />
                    </div>
                    {isLinked && (
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center w-10 h-10 bg-pink text-white transition-colors group-hover:bg-pink-dark">
                          <ExternalLink className="w-4 h-4" />
                        </span>
                      </div>
                    )}
                  </div>
                </CardWrapper>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
