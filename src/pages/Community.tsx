import { useState } from 'react';
import Layout from '../components/Layout';
import ScrollReveal from '../components/ScrollReveal';
import NeuronMotif from '../components/NeuronMotif';
import LdcContactForm from '../components/LdcContactForm';
import {
  Globe,
  Linkedin,
  Youtube,
  Instagram,
  MessageCircle,
  Play,
  Calendar,
  BookOpen,
  Briefcase,
  FileText,
  Sparkles,
  ExternalLink,
  ChevronRight,
  X,
  GraduationCap,
  Award,
} from 'lucide-react';

export default function Community() {
  const [activeVideoModal, setActiveVideoModal] = useState<{
    title: string;
    speaker: string;
    description: string;
  } | null>(null);

  // Social Links for LDC
  const ldcSocials = {
    website: 'https://learningdesignlab.co/community',
    linkedin: 'https://www.linkedin.com/company/learning-designers-community/',
    whatsapp: 'https://chat.whatsapp.com/invite/ldc-global',
    youtube: 'https://www.youtube.com',
    instagram: 'https://www.instagram.com',
  };

  // Webinars & Expert Talks
  const webinars = [
    {
      title: 'Design Learning for Behavior Change',
      speaker: 'with Julie Dirksen',
      role: 'Author of "Design For How People Learn"',
      description:
        'Practical approaches for moving beyond knowledge retention to meaningful, lasting behavior transformation in professional and adult education.',
      tag: 'Behavior Change',
      gradient: 'from-pink/20 to-purple-900/30',
    },
    {
      title: "Science of Learning isn't always intuitive",
      speaker: 'with Carl Hendrick',
      role: 'Co-Author of "How Learning Happens"',
      description:
        'Debunking pervasive educational myths with empirical cognitive science, retrieval practice, and evidence-informed pedagogical strategies.',
      tag: 'Cognitive Science',
      gradient: 'from-purple-900/30 to-blue-900/30',
    },
    {
      title: 'Reimagining Learning Design with AI',
      speaker: 'with Dr Philippa Hardman',
      role: 'Affiliate Scholar, University of Cambridge',
      description:
        'How AI tools are changing curriculum scoping, instructional prototyping, and personalized adaptive learning journeys at scale.',
      tag: 'AI in Learning',
      gradient: 'from-fuchsia-900/30 to-pink/20',
    },
  ];

  // Cross-Country Education Dialogues
  const dialogues = [
    {
      countries: ['Nigeria', 'India', 'Canada'],
      title: 'Cross-Context Pedagogies & Future-Ready Skilling',
      excerpt:
        'Senior educators from Nigeria and India examine how localized learning ecosystems address equity, infrastructure variations, and technological readiness.',
      highlight: 'Bridging informal learning networks with formal credentials.',
    },
    {
      countries: ['Japan', 'UAE', 'Pakistan'],
      title: 'Transforming Teacher Capacity in Transitioning Economies',
      excerpt:
        'Insights on educator resilience, culturally responsive instructional methods, and systemic policy transitions across diverse national frameworks.',
      highlight: 'Creating human-centered teacher communities.',
    },
    {
      countries: ['Egypt', 'India', 'Global South'],
      title: 'Equitable Learning Design: Voices from the Global South',
      excerpt:
        'A critical look at why universal design frameworks must be adapted to multilingual, multi-device, and high-context learning communities.',
      highlight: 'Co-designing with learners at the margins.',
    },
  ];

  // Global South's Learning Blog & Newsletter Articles
  const blogPosts = [
    {
      title: "Why Facts Don't Change Minds",
      subtitle: 'Designing Learning That Transforms Behaviour',
      category: 'Behavioral Science',
      summary:
        'Why cognitive resistance arises in professional training and how scenario-based storytelling drives actual behavioral adaptation.',
      date: 'Monthly Feature',
    },
    {
      title: 'Press PLAY to Learn',
      subtitle: 'What research says about learning through games',
      category: 'Game-Based Learning',
      summary:
        'Synthesizing empirical research on intrinsic motivation, playful friction, and high-stakes simulations in corporate and youth skilling.',
      date: 'Research Digest',
    },
    {
      title: 'SoL101: Introducing Science of Learning',
      subtitle: 'To Undergraduate Students & Early Educators',
      category: 'Curriculum Design',
      summary:
        'A foundational course framework tested across universities in Asia to instill cognitive science fundamentals in early-career teachers.',
      date: 'Case Study',
    },
  ];

  // Events, Resources & Expert Insights Posters
  const expertPosters = [
    {
      title: 'The Science of Becoming an Expert Teacher',
      speakers: 'Dr. Nidhi Sachdeva & Dr. Paul A. Kirschner',
      subtitle: 'Why experience isn’t enough and what expert teachers do differently.',
      accent: 'border-amber-400/40 bg-amber-500/5',
      badge: 'Teacher Expertise',
    },
    {
      title: "The Science of Learning Isn't Always Intuitive",
      speakers: 'Dr. Carl Hendrick',
      subtitle: 'Unpacking research-informed classrooms and cognitive load management.',
      accent: 'border-emerald-500/40 bg-emerald-500/5',
      badge: 'Cognitive Science',
    },
    {
      title: 'Designing Learning for Behaviour Change',
      speakers: 'Julie Dirksen',
      subtitle: 'Translating behavioural principles into sticky learning interventions.',
      accent: 'border-pink/40 bg-pink/5',
      badge: 'Behavioral Design',
    },
  ];

  // Advisors
  const advisors = [
    {
      name: 'Dr. Nidhi Sachdeva',
      role: 'Educational Scientist & Cognitive Researcher',
      affiliation: 'University of Toronto',
      bio: 'Author and leading researcher specializing in the Science of Learning, microlearning design, and evidence-informed instructional strategies.',
      initials: 'NS',
    },
    {
      name: 'Dr. Will Thalheimer',
      role: 'Learning Researcher & Evaluation Pioneer',
      affiliation: 'Creator of LTEM (Learning-Transfer Evaluation Model)',
      bio: 'Internationally recognized learning expert focused on research-backed learning methodologies and the science of performance evaluation.',
      initials: 'WT',
    },
  ];

  // Volunteers
  const volunteers = [
    {
      name: 'Shraddha',
      role: 'Founder',
      image: '/images/team/Shraddha_Rawat-removebg-preview.png',
      badge: 'Founder',
    },
    {
      name: 'Parisha',
      role: 'Co-founder',
      image: '/images/team/Parisha_Jain-removebg-preview.png',
      badge: 'Co-founder',
    },
    {
      name: 'Miriam',
      role: 'Meet-up Facilitator',
      image: '/images/team/Miriam_Elnaggar-removebg-preview.png',
      badge: 'Meetups',
    },
    {
      name: 'Ragini',
      role: 'Blog Editor',
      initials: 'RG',
      badge: 'Blog & Editorial',
    },
    {
      name: 'Jaya',
      role: 'Blog Editor',
      initials: 'JY',
      badge: 'Blog & Editorial',
    },
  ];

  const scrollToContact = () => {
    const el = document.getElementById('stay-connected');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative bg-[#0d0d11] text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Subtle Neuron Pattern Background */}
        <NeuronMotif color="#E5009C" opacity={0.15} size={280} />

        {/* Ambient Glows */}
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-pink/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-purple-900/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="page-margin max-content relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tagline Badge */}
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink/10 border border-pink/30 text-pink text-xs uppercase font-body tracking-[0.1em] mb-8">
                <Globe className="w-3.5 h-3.5" />
                <span>Learning Designers Community (LDC)</span>
              </div>
            </ScrollReveal>

            {/* H1 Heading */}
            <ScrollReveal delay={0.1}>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.08] font-bold text-white tracking-tight mb-8">
                Join a Global Community of Learning Professionals & Educators
              </h1>
            </ScrollReveal>

            {/* Core Narrative */}
            <ScrollReveal delay={0.2}>
              <p className="font-body text-base md:text-lg text-white/80 leading-relaxed max-w-3xl mx-auto mb-6">
                Learning Designers Community (LDC) is a network of{' '}
                <span className="text-pink font-semibold">7,500+ educators, practitioners, and researchers</span>{' '}
                across <span className="text-white font-semibold">50+ countries</span>, hosted by professionals
                from the Global South. Our members span education, ed-tech, enterprise L&D, and skilling, making
                LDC one of the few cross-sectoral networks dedicated to bridging research and practice and advancing
                innovative and impactful learning experiences worldwide.
              </p>
              <p className="font-body text-sm md:text-base text-white/60 leading-relaxed max-w-2xl mx-auto mb-10">
                Join LDC’s peer-learning sessions, monthly expert talks, member meetups, async conversations,
                learning design job postings, and the Global South Learning Voices blog.
              </p>
            </ScrollReveal>

            {/* CTAs & Social Channels */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="px-8 py-3.5 rounded-full font-body text-sm font-semibold tracking-wide bg-pink text-white hover:bg-pink-dark shadow-lg shadow-pink/25 hover:shadow-pink/40 transition-all duration-300 cursor-pointer"
                >
                  Join us
                </button>

                {/* Social Icon Pills */}
                <div className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                  <a
                    href={ldcSocials.website}
                    title="LDC Community Portal"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-pink hover:bg-white/10 transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                  <a
                    href={ldcSocials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Follow LDC on LinkedIn"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-pink hover:bg-white/10 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={ldcSocials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Join LDC WhatsApp Community"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-pink hover:bg-white/10 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                  <a
                    href={ldcSocials.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LDC on YouTube"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-pink hover:bg-white/10 transition-colors"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href={ldcSocials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="LDC on Instagram"
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white/70 hover:text-pink hover:bg-white/10 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Impact Metric Bar */}
            <ScrollReveal delay={0.4}>
              <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="font-display text-3xl md:text-4xl font-bold text-pink mb-1">
                    7,500+
                  </div>
                  <div className="font-body text-xs text-white/60 uppercase tracking-wider">
                    Educators & Researchers
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="font-display text-3xl md:text-4xl font-bold text-white mb-1">
                    50+
                  </div>
                  <div className="font-body text-xs text-white/60 uppercase tracking-wider">
                    Countries Worldwide
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="font-display text-2xl md:text-3xl font-bold text-pink mb-1">
                    Global South
                  </div>
                  <div className="font-body text-xs text-white/60 uppercase tracking-wider">
                    Hosted & Driven
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                  <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1">
                    Cross-Sector
                  </div>
                  <div className="font-body text-xs text-white/60 uppercase tracking-wider">
                    K12, Higher Ed & L&D
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===================== SECTION: COMMUNITY ACTIVITIES ===================== */}
      <section className="bg-[#f8f9fa] py-20 md:py-32 relative">
        <div className="page-margin max-content">
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="section-label-pink mb-3 block">
              What We Do Together
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight mb-4">
              Community activities
            </h2>
            <p className="font-body text-sm md:text-base text-black/60 max-w-2xl mx-auto">
              Regular gatherings, global dialogues, evidence-backed publications, and collaborative learning formats designed to connect research with real-world practice.
            </p>
          </div>

          {/* ACTIVITY 1: Webinars & Expert Talks */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-black/10">
              <div className="max-w-2xl">
                <span className="font-body text-xs uppercase tracking-wider text-pink font-semibold block mb-2">
                  Live Masterclasses
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-black tracking-tight mb-3">
                  Webinars & Expert Talks
                </h3>
                <p className="font-body text-sm md:text-base text-black/70 leading-relaxed">
                  Live sessions with the world’s leading experts and organizations unpacking diverse learning
                  themes: game-based learning, Science of Learning, universal design for learning, Behavior Change,
                  AI-in-learning use cases, and research and technologies shaping the field.
                </p>
              </div>

              <a
                href={ldcSocials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-body text-xs uppercase tracking-wider font-medium bg-pink text-white hover:bg-pink-dark transition-colors self-start md:self-auto shrink-0 cursor-pointer shadow-md shadow-pink/20"
              >
                <Youtube className="w-4 h-4" />
                Follow us on YouTube
              </a>
            </div>

            {/* 3 Webinar Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {webinars.map((webinar) => (
                <div
                  key={webinar.title}
                  className="group flex flex-col bg-white border border-black/10 rounded-xl overflow-hidden hover:shadow-xl hover:border-pink/40 transition-all duration-300"
                >
                  {/* Video Thumbnail Embed Slot */}
                  <div
                    className={`relative aspect-video bg-gradient-to-br ${webinar.gradient} flex items-center justify-center p-6 text-center overflow-hidden cursor-pointer`}
                    onClick={() => setActiveVideoModal(webinar)}
                  >
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-14 h-14 rounded-full bg-pink text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                      <span className="mt-3 text-[11px] font-body uppercase tracking-wider text-white/90 bg-black/60 px-3 py-1 rounded-full backdrop-blur-sm">
                        Watch Webinar
                      </span>
                    </div>
                    <span className="absolute top-3 left-3 text-[10px] font-body tracking-wider uppercase px-2.5 py-1 rounded bg-black/60 text-white backdrop-blur-sm">
                      {webinar.tag}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-lg font-bold text-black mb-1 group-hover:text-pink transition-colors">
                        {webinar.title}
                      </h4>
                      <p className="font-body text-xs font-semibold text-pink mb-3">
                        {webinar.speaker}
                      </p>
                      <p className="font-body text-xs text-black/60 leading-relaxed mb-4">
                        {webinar.description}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveVideoModal(webinar)}
                      className="inline-flex items-center gap-1.5 text-xs font-body font-medium text-black/80 hover:text-pink transition-colors pt-3 border-t border-black/5 cursor-pointer"
                    >
                      <span>Session overview</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ACTIVITY 2: Cross-Country Education Dialogues */}
          <div className="mb-24 pt-8">
            <div className="max-w-3xl mb-10">
              <span className="font-body text-xs uppercase tracking-wider text-pink font-semibold block mb-2">
                International Exchanges
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-black tracking-tight mb-3">
                Cross-Country Education Dialogues
              </h3>
              <p className="font-body text-sm md:text-base text-black/70 leading-relaxed">
                A series of dialogues with senior educators from 10 countries, including Nigeria, Pakistan,
                Japan, UAE, Egypt, Canada, and India. They explore how education systems are evolving across
                contexts and what we can learn from each other to design learning that is more relevant, equitable,
                human-centered, and future-ready.
              </p>
            </div>

            {/* 3 Dialogues Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {dialogues.map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-black/10 rounded-xl p-6 flex flex-col justify-between hover:border-black/30 hover:shadow-md transition-all"
                >
                  <div>
                    {/* Country tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.countries.map((c) => (
                        <span
                          key={c}
                          className="px-2.5 py-0.5 rounded text-[11px] font-body font-medium bg-[#f0f0f3] text-black/70 border border-black/5"
                        >
                          {c}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <Linkedin className="w-4 h-4 text-[#0077B5]" />
                      <span className="text-[11px] font-body text-black/50 uppercase tracking-wider">
                        LinkedIn Dialogue Post
                      </span>
                    </div>

                    <h4 className="font-display text-base md:text-lg font-bold text-black mb-3">
                      {item.title}
                    </h4>

                    <p className="font-body text-xs md:text-sm text-black/70 leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                  </div>

                  <div className="p-3 rounded-lg bg-pink/5 border border-pink/15">
                    <span className="font-body text-[10px] uppercase tracking-wider text-pink block mb-1 font-semibold">
                      Key Takeaway
                    </span>
                    <p className="font-body text-xs text-black/80 italic">
                      "{item.highlight}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ACTIVITY 3: Learning Professionals Meetups */}
          <div className="pt-8">
            <div className="bg-white border border-black/10 rounded-2xl p-8 md:p-12 overflow-hidden relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <span className="font-body text-xs uppercase tracking-wider text-pink font-semibold block mb-2">
                    Monthly Peer Learning
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-black tracking-tight mb-4">
                    Learning Professionals Meetups
                  </h3>
                  <p className="font-body text-sm md:text-base text-black/70 leading-relaxed mb-6">
                    LDC Meetups are informal, discussion-led gatherings for learning designers, educators, and
                    practitioners to explore how learning is changing in the real world and discuss shared challenges.
                    Each meetup focuses on a timely theme - bridging research, practice, and lived experience across contexts.
                  </p>
                  <p className="font-body text-sm text-black/70 leading-relaxed mb-8">
                    Participants also create a collaborative document that consolidates insights from their practice and
                    curate a list of recommended resources every month.
                  </p>

                  <a
                    href="#stay-connected"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToContact();
                    }}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body text-xs uppercase tracking-wider font-medium bg-pink text-white hover:bg-pink-dark transition-colors cursor-pointer shadow-md shadow-pink/20"
                  >
                    <Calendar className="w-4 h-4" />
                    See upcoming events
                  </a>
                </div>

                {/* Video / Showcase slot from PDF page 2 */}
                <div className="lg:col-span-5">
                  <div
                    onClick={() =>
                      setActiveVideoModal({
                        title: 'Learning Professionals Meetups Overview',
                        speaker: 'Hosted by Miriam & LDC Facilitators',
                        description:
                          'A showcase of monthly informal, peer-led problem solving and resource co-creation with educators across 50+ countries.',
                      })
                    }
                    className="relative aspect-video rounded-xl bg-gradient-to-tr from-black via-zinc-900 to-zinc-800 border border-black/10 overflow-hidden flex items-center justify-center p-6 text-center cursor-pointer group shadow-lg"
                  >
                    <div className="w-16 h-16 rounded-full bg-pink/90 group-hover:bg-pink text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-white ml-0.5" />
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 text-center">
                      <span className="inline-block px-3 py-1 rounded-md text-[11px] font-body text-white bg-black/70 backdrop-blur-sm">
                        Watch Meetup Insights Video
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION: PUBLICATIONS & INSIGHTS ===================== */}
      <section className="bg-white py-20 md:py-32 border-y border-black/10">
        <div className="page-margin max-content">
          {/* ACTIVITY 4: Global South’s Learning Blog & Newsletter */}
          <div className="mb-24">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <span className="section-label-pink mb-2 block">
                  Publications & Research
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-black tracking-tight mb-4">
                  Global South’s Learning Blog & Newsletter
                </h3>
                <p className="font-body text-sm md:text-base text-black/70 leading-relaxed">
                  Learning design case studies, research, and insights from Asia and Africa that rarely make it
                  into mainstream educational conversations. LDC spotlights bold experiments, on-the-ground innovation,
                  and fresh perspectives shaping the future of learning. Published monthly via LinkedIn and amplified
                  through LDC’s newsletter, it reaches thousands of professionals globally.
                </p>
              </div>

              <a
                href={ldcSocials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-body text-xs uppercase tracking-wider font-medium bg-pink text-white hover:bg-pink-dark transition-colors self-start md:self-auto shrink-0 shadow-md shadow-pink/20"
              >
                <FileText className="w-4 h-4" />
                Follow the newsletter
              </a>
            </div>

            {/* 3 Publication Cards from PDF Page 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.title}
                  className="group flex flex-col bg-[#fafafa] border border-black/10 rounded-xl overflow-hidden hover:border-pink/50 hover:shadow-lg transition-all"
                >
                  <div className="p-8 border-b border-black/5 bg-gradient-to-br from-zinc-900 to-black text-white relative overflow-hidden min-h-[160px] flex flex-col justify-end">
                    <div className="absolute top-4 right-4">
                      <span className="text-[10px] font-body tracking-wider uppercase px-2.5 py-1 rounded bg-pink/20 text-pink-light border border-pink/30">
                        {post.category}
                      </span>
                    </div>
                    <span className="font-body text-xs text-white/50 block mb-1">
                      {post.date}
                    </span>
                    <h4 className="font-display text-xl font-bold text-white group-hover:text-pink transition-colors">
                      {post.title}
                    </h4>
                    <p className="font-body text-xs text-white/70 italic mt-1">
                      {post.subtitle}
                    </p>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <p className="font-body text-xs md:text-sm text-black/70 leading-relaxed mb-6">
                      {post.summary}
                    </p>

                    <a
                      href={ldcSocials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-body font-semibold text-pink hover:text-pink-dark transition-colors"
                    >
                      <span>Read on LinkedIn</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ACTIVITY 5 & 6: Reading Club & Expert Posters (PDF Page 3 & 4) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8 border-t border-black/10">
            {/* Reading Club Details */}
            <div className="lg:col-span-5 bg-[#f5f5f7] rounded-2xl p-8 md:p-10 border border-black/10">
              <div className="w-12 h-12 rounded-xl bg-pink/10 border border-pink/20 text-pink flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <span className="font-body text-xs uppercase tracking-wider text-pink font-semibold block mb-2">
                Evidence-Informed Practice
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-black mb-4">
                Reading Club
              </h3>
              <p className="font-body text-sm md:text-base text-black/70 leading-relaxed mb-6">
                LDC’s peer-learning initiative fostering evidence-informed practice by connecting research with
                practical learning design. Through curated academic readings aligned with our monthly themes and
                expert webinars, diverse educators, researchers, and learning designers gather to reflect and discuss
                how the research findings apply to their practice and share nuances and insights based on their experience.
              </p>
              <div className="p-4 rounded-xl bg-white border border-black/10">
                <span className="font-body text-xs font-semibold text-black block mb-1">
                  How it works:
                </span>
                <p className="font-body text-xs text-black/60 leading-relaxed">
                  Monthly research paper → Self-guided annotation → Facilitated group reflection → Practical implementation toolkit.
                </p>
              </div>
            </div>

            {/* Events, Resources & Expert Insights */}
            <div className="lg:col-span-7">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <span className="font-body text-xs uppercase tracking-wider text-pink font-semibold block mb-1">
                    Knowledge Hub
                  </span>
                  <h3 className="font-display text-2xl font-bold text-black">
                    Events, Resources, & Expert Insights
                  </h3>
                </div>
                <a
                  href={ldcSocials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-body text-xs uppercase tracking-wider font-medium bg-pink text-white hover:bg-pink-dark transition-colors self-start sm:self-auto shrink-0 shadow-sm"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  Follow us on LinkedIn
                </a>
              </div>
              <p className="font-body text-sm text-black/70 leading-relaxed mb-8">
                LDC shares insights from our events, resources, and expertise through their LinkedIn page and
                newsletters to help professionals improve their learning design practice.
              </p>

              {/* 3 Visual Poster Cards from PDF Page 4 */}
              <div className="space-y-4">
                {expertPosters.map((poster) => (
                  <div
                    key={poster.title}
                    className={`p-5 rounded-xl border ${poster.accent} flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all hover:shadow-md`}
                  >
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-body uppercase tracking-wider bg-black/5 text-black/70 mb-2 font-medium">
                        {poster.badge}
                      </span>
                      <h4 className="font-display text-base font-bold text-black mb-1">
                        {poster.title}
                      </h4>
                      <p className="font-body text-xs text-pink font-semibold mb-1">
                        {poster.speakers}
                      </p>
                      <p className="font-body text-xs text-black/60">
                        {poster.subtitle}
                      </p>
                    </div>

                    <a
                      href={ldcSocials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-body font-medium text-black/70 hover:text-pink self-end sm:self-center shrink-0"
                    >
                      <span>View post</span>
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ACTIVITY 7: WhatsApp Community & Job Postings (PDF Page 4) */}
          <div className="mt-20 p-8 md:p-12 rounded-2xl bg-gradient-to-r from-[#128C7E]/10 via-[#25D366]/5 to-transparent border border-[#25D366]/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/20 text-[#128C7E] font-body text-xs font-semibold uppercase tracking-wider mb-3">
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp Community Hub
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-black mb-3">
                Group Discussions, Resources and Global Job Postings
              </h3>
              <p className="font-body text-sm md:text-base text-black/70 leading-relaxed">
                LDC hosts a WhatsApp community where professionals worldwide share resources, ask questions,
                and share career opportunities related to learning design, education, training, instructional design,
                learning evaluation, etc.
              </p>
            </div>

            <a
              href={ldcSocials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-body text-sm font-semibold tracking-wide bg-pink text-white hover:bg-pink-dark transition-all duration-200 shrink-0 shadow-lg shadow-pink/25"
            >
              <MessageCircle className="w-4 h-4" />
              Join the community
            </a>
          </div>
        </div>
      </section>

      {/* ===================== SECTION: OUR ADVISORS (PDF Page 4) ===================== */}
      <section className="bg-[#f8f9fa] py-20 md:py-28 border-b border-black/10">
        <div className="page-margin max-content">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label-pink mb-2 block">
              Guidance & Scientific Rigor
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black tracking-tight mb-3">
              Our Advisors
            </h2>
            <p className="font-body text-sm text-black/60">
              Distinguished global scholars guiding LDC’s mission in evidence-based learning design and rigorous impact measurement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="bg-white rounded-2xl border border-black/10 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg transition-all"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink/20 via-purple-100 to-pink/10 border-2 border-pink/30 flex items-center justify-center shrink-0 text-pink font-display text-2xl font-bold shadow-inner">
                  {advisor.initials}
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="font-display text-xl font-bold text-black mb-1">
                    {advisor.name}
                  </h3>
                  <p className="font-body text-xs font-semibold text-pink mb-1">
                    {advisor.role}
                  </p>
                  <p className="font-body text-xs text-black/50 mb-3">
                    {advisor.affiliation}
                  </p>
                  <p className="font-body text-xs text-black/70 leading-relaxed">
                    {advisor.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION: OUR VOLUNTEERS (PDF Page 5) ===================== */}
      <section className="bg-white py-20 md:py-28">
        <div className="page-margin max-content">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-label-pink mb-2 block">
              The Driving Force
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black tracking-tight mb-3">
              Our Volunteers
            </h2>
            <p className="font-body text-sm text-black/60">
              The passionate practitioners and educators behind LDC’s meetups, editorial publications, and community facilitation.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {volunteers.map((vol) => (
              <div
                key={vol.name}
                className="bg-[#fafafa] border border-black/10 rounded-xl p-5 flex flex-col items-center text-center hover:border-pink/40 hover:shadow-md transition-all group"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden bg-black/5 border border-black/10 mb-4 flex items-center justify-center relative">
                  {vol.image ? (
                    <img
                      src={vol.image}
                      alt={vol.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-tr from-pink/15 to-purple-100 flex items-center justify-center text-pink font-display text-xl font-bold">
                      {vol.initials || vol.name.slice(0, 2)}
                    </div>
                  )}
                </div>
                <h3 className="font-display text-base font-bold text-black mb-1 group-hover:text-pink transition-colors">
                  {vol.name}
                </h3>
                <p className="font-body text-xs font-medium text-black/60">
                  {vol.role}
                </p>
                <span className="mt-3 px-2 py-0.5 rounded text-[10px] font-body uppercase tracking-wider bg-black/5 text-black/50">
                  {vol.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SECTION: STAY CONNECTED (LDC CONTACT FORM) ===================== */}
      {/* Specifically distinguished in color and dedicated to LDC, as requested */}
      <section
        id="stay-connected"
        className="relative py-24 md:py-36 bg-[#16031d] text-white overflow-hidden"
      >
        {/* LDC Accent Lighting */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-pink/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[#7A0456]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="page-margin max-content relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column Information */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink/20 text-pink-light font-body text-xs uppercase tracking-wider mb-6 border border-pink/30">
                  <Sparkles className="w-3.5 h-3.5 text-pink" />
                  Connect with LDC
                </div>

                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                  Stay Connected
                </h2>

                <p className="font-body text-sm md:text-base text-white/70 leading-relaxed mb-8 max-w-lg">
                  Whether you want to join our peer-learning sessions, volunteer as a speaker, share an innovation
                  from your classroom or organization, or join our global WhatsApp community — we would love to hear from you.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-pink/20 border border-pink/30 text-pink flex items-center justify-center shrink-0 mt-0.5">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-semibold text-white">
                        Global Peer Learning
                      </h4>
                      <p className="font-body text-xs text-white/60">
                        Monthly talks, case study teardowns, and masterclasses across 50+ countries.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-pink/20 border border-pink/30 text-pink flex items-center justify-center shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-semibold text-white">
                        Global South Leadership
                      </h4>
                      <p className="font-body text-xs text-white/60">
                        Hosted and driven by practitioners elevating non-Western educational contexts.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-pink/20 border border-pink/30 text-pink flex items-center justify-center shrink-0 mt-0.5">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-semibold text-white">
                        Career & Job Postings
                      </h4>
                      <p className="font-body text-xs text-white/60">
                        Curated learning experience design and educational research opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
                  <a
                    href={ldcSocials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-body text-white/70 hover:text-pink transition-colors"
                  >
                    <Linkedin className="w-4 h-4 text-pink" />
                    <span>LDC on LinkedIn</span>
                  </a>
                  <span className="text-white/20">•</span>
                  <a
                    href={ldcSocials.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-body text-white/70 hover:text-pink transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-pink" />
                    <span>WhatsApp Community</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: LDC Contact Form (Distinguished Styling) */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.2}>
                <LdcContactForm />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Video / Webinar Modal */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="relative bg-[#18181b] border border-white/10 text-white rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveVideoModal(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-body text-xs uppercase tracking-wider text-pink block mb-2">
              LDC Webinar Recording & Overview
            </span>
            <h3 className="font-display text-2xl font-bold text-white mb-1">
              {activeVideoModal.title}
            </h3>
            <p className="font-body text-sm font-semibold text-pink mb-4">
              {activeVideoModal.speaker}
            </p>

            <div className="aspect-video bg-black rounded-lg overflow-hidden flex items-center justify-center mb-6 border border-white/10 relative">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-pink/20 border border-pink/40 text-pink flex items-center justify-center mx-auto mb-3">
                  <Play className="w-7 h-7 fill-pink ml-0.5" />
                </div>
                <p className="font-body text-xs text-white/70 mb-3">
                  Full recording is streamed on LDC’s YouTube Channel.
                </p>
                <a
                  href={ldcSocials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-body font-semibold bg-pink text-white hover:bg-pink-dark transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                  Watch on YouTube
                </a>
              </div>
            </div>

            <p className="font-body text-sm text-white/80 leading-relaxed mb-6">
              {activeVideoModal.description}
            </p>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveVideoModal(null)}
                className="px-5 py-2 rounded-full font-body text-xs bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
