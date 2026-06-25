import Layout from '../components/Layout';
import ServiceDetail from '../components/ServiceDetail';
import ContactForm from '../components/ContactForm';
import ScrollReveal from '../components/ScrollReveal';
import SectionLabel from '../components/SectionLabel';
import ServicesHeroSection from '../sections/services/ServicesHeroSection';
import ProblemSection from '../sections/services/ProblemSection';
import MethodologyDiagram from '../sections/services/MethodologyDiagram';
import ProcessSection from '../sections/services/ProcessSection';
import TargetSectorsSection from '../sections/services/TargetSectorsSection';
import OutcomesSection from '../sections/services/OutcomesSection';
import ProofPointsSection from '../sections/services/ProofPointsSection';

const service1Items = [
  { text: 'Online courses and learning sprints' },
  { text: 'Mobile-based microlearning' },
  { text: 'Educational games and gamified experiences' },
  { text: 'Instructional manuals and learner workbooks' },
  { text: 'Communities of practice' },
  { text: 'Assessment frameworks and tools' },
  { text: 'Behavioural nudges and recall strategies' },
  { text: 'AI tools for practice, feedback and performance support' },
];

const service2Items = [
  { title: 'Science of Learning (SoL)', description: 'Ground your teaching in science-backed strategies for maximising attention, retention, learning transfer and motivation.' },
  { title: 'AI for Teaching & Learning', description: 'Discover innovative ways to use AI for lesson planning, feedback, assignments, learner support, and content creation through hands-on activities.' },
  { title: 'Universal Design for Learning (UDL)', description: 'Design learning experiences that work for every learner. Learn how to apply UDL principles to create flexible, inclusive teaching.' },
  { title: 'AI for Research', description: 'Accelerate your research process with AI tools for literature review, citation, data analysis, and academic writing.' },
  { title: 'Game-Based Learning & Gamification', description: 'Apply principles from cognitive science and multimedia theory to design games and gamification that drive lasting learning gains.' },
  { title: 'Instructional Design for Course Creators', description: 'Training faculty and learning designers to develop good online courses through practical templates and workflows.' },
];

const service3Items = [
  { text: 'Process and outcome evaluation of skilling interventions' },
  { text: 'Capacity building programme assessment' },
  { text: 'Digital learning product effectiveness' },
  { text: 'Gamification and game-based learning impact' },
  { text: 'Competency development research' },
  { text: 'Learning experience design analysis' },
];

const service4Items = [
  { text: 'Programme conceptualisation and design' },
  { text: 'Competency gap analysis and goal-setting' },
  { text: 'Behavioural strategy development' },
  { text: 'Barrier diagnosis and systems mapping' },
  { text: 'Policy and implementation guidance' },
  { text: 'Platform selection and digital learning strategy' },
];

export default function Services() {
  return (
    <Layout>
      <ServicesHeroSection />
      <ProblemSection />

      <ServiceDetail
        number="01"
        title="Frameworks, Courses & Curriculums"
        description="We design in-person and online courses, learning journeys, microlearning modules, and assessment frameworks. We create goal-aligned and barrier-informed learning products and behavioural strategies based on the science of learning."
        items={service1Items}
        itemsHeading="What we create"
        approachNote="Approach: Evidence-based design using principles from the Science of Learning"
        outcomeNote="Outcomes: Higher engagement, better retention, measurable behaviour change"
        cta="Discuss your course needs"
        dark
      />

      <ServiceDetail
        number="02"
        title="Faculty & Teacher Enrichment"
        description="We facilitate hands-on workshops on the Science of Learning, Universal Design for Learning (UDL), Designing Assessments for the AI Era, and AI applications for teaching and research. We equip faculty in schools and universities with evidence-based strategies to enhance teaching effectiveness and boost student outcomes."
        items={service2Items}
        itemsHeading="Our workshops"
        differentiator="Most faculty development programmes are delivered by pure researchers with no practical teaching experience, or practitioners disconnected from the latest evidence. We bridge research and practice."
        cta="Enquire about faculty workshops"
        dark
      />

      <ServiceDetail
        number="03"
        title="Research & Evaluation of Skilling Programs"
        description="We conduct rigorous process and impact evaluations of in-person and digital skilling programs. We help educational institutes, edtech companies, and nonprofits measure the results of their interventions and synthesize findings into actionable frameworks, toolkits and knowledge products."
        items={service3Items}
        itemsHeading="What we evaluate"
        approachNote="We use validated frameworks including Kirkpatrick, LTEM, and custom rubrics tailored to your context."
        outcomeNote="We synthesise findings into actionable frameworks, toolkits, and knowledge products that advance the field."
        cta="Talk to us about evaluation"
        dark={false}
      />

      <ServiceDetail
        number="04"
        title="Advisory for Large-Scale Skilling Programs"
        description="We diagnose barriers, conceptualise systems and solutions using behavioural science and user-centered design. We define program structures, competency gaps and goals, and develop behavioural strategies. We advise policymakers, large-scale nonprofits, and government initiatives on designing systems that support sustained learning at scale."
        items={service4Items}
        itemsHeading="Where we advise"
        differentiator="We bring together insights from behavioural science, implementation science, and human-centered design to create strategies that work in complex, real-world contexts."
        cta="Discuss your programme"
        dark={false}
      />

      <MethodologyDiagram />
      <ProcessSection />
      <TargetSectorsSection />
      <OutcomesSection />
      <ProofPointsSection />

      {/* Contact Section */}
      <section id="contact" className="bg-black py-32 relative overflow-hidden">
        {/* Pink neuron motif */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23FF1493' stroke-width='0.6'%3E%3Cpath d='M10 50 Q30 20 50 50 T90 50'/%3E%3Cpath d='M0 30 Q20 5 40 30 T80 30'/%3E%3Cpath d='M20 70 Q40 45 60 70 T100 70'/%3E%3Cpath d='M5 80 Q25 60 45 80 T85 80'/%3E%3Ccircle cx='10' cy='50' r='2' fill='%23FF1493'/%3E%3Ccircle cx='50' cy='50' r='2.5' fill='%23FF1493'/%3E%3Ccircle cx='90' cy='50' r='2' fill='%23FF1493'/%3E%3Ccircle cx='40' cy='30' r='1.5' fill='%23C71585'/%3E%3Ccircle cx='60' cy='70' r='1.5' fill='%23C71585'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '200px 200px',
          }}
        />
        
        <div className="page-margin max-content relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <ScrollReveal>
                <SectionLabel text="Start a Project" light />
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="heading-xl text-white mb-6">Let's Build Better Learning Together</h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="font-body text-base leading-relaxed text-white/70 mb-6 max-w-[45ch]">
                  Tell us which service you're interested in and we'll get back to you within 48 hours.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <a href="mailto:hello@learningdesignlabs.com" className="font-body text-base text-pink hover:text-pink-light transition-colors">
                  hello@learningdesignlabs.com
                </a>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={0.2}>
              <ContactForm dark />
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
}
