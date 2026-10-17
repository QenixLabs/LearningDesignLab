import Layout from '../components/Layout';
import ScrollReveal from '../components/ScrollReveal';
import NeuronMotif from '../components/NeuronMotif';
import {
  Globe,
  Linkedin,
  Youtube,
  Instagram,
  MessageCircle,
  Play,
  Calendar,
  BookOpen,
  FileText,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';
import { useSanityQuery } from '@/lib/sanity/useSanityQuery';
import { COMMUNITY_PAGE_QUERY, type SanityCommunityPage } from '@/lib/sanity/queries';
import { imgUrl } from '@/lib/sanity/image';
import ContactSectionLDC from '@/sections/home/ContactSectionLDC';

function getYoutubeThumbnail(url?: string): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/|shorts\/))([a-zA-Z0-9_-]{11})/i
  );
  return match && match[1] ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
}

export default function Community() {
  const { data: sanityData } = useSanityQuery<SanityCommunityPage | null>(
    COMMUNITY_PAGE_QUERY,
    {},
    null
  );

  // Social Links for LDC
  const ldcSocials = {
    website: sanityData?.socialLinks?.website || 'https://www.learningdesignco.org/about-3',
    linkedin: sanityData?.socialLinks?.linkedin || 'https://www.linkedin.com/company/learningdesigners/',
    whatsapp: sanityData?.socialLinks?.whatsapp || 'https://chat.whatsapp.com/DNIBEVUeVMFEc5bChIbLES',
    youtube: sanityData?.socialLinks?.youtube || 'http://www.youtube.com/@learningdesigners',
    instagram: sanityData?.socialLinks?.instagram || 'https://www.instagram.com/learning.ldc',
  };

  // Webinars & Expert Talks
  const defaultWebinars = [
    {
      title: 'Design Learning for Behavior Change',
      speaker: 'with Julie Dirksen',
      role: 'Author of "Design For How People Learn"',
      description:
        'Practical approaches for moving beyond knowledge retention to meaningful, lasting behavior transformation in professional and adult education.',
      tag: 'Behavior Change',
      thumbnail: 'https://img.youtube.com/vi/R3amDG2L2tQ/hqdefault.jpg',
      url: 'https://youtu.be/R3amDG2L2tQ?si=OtsZT7aFxBVSBk0b&t=1452',
    },
    {
      title: "Science of Learning isn't always intuitive",
      speaker: 'with Carl Hendrick',
      role: 'Co-Author of "How Learning Happens"',
      description:
        'Debunking pervasive educational myths with empirical cognitive science, retrieval practice, and evidence-informed pedagogical strategies.',
      tag: 'Cognitive Science',
      thumbnail: 'https://img.youtube.com/vi/YnJ44brzuho/hqdefault.jpg',
      url: 'https://youtu.be/YnJ44brzuho?si=YXRjHjP3B2ylTO4A&t=807',
    },
    {
      title: 'Reimagining Learning Design with AI',
      speaker: 'with Dr Philippa Hardman',
      role: 'Affiliate Scholar, University of Cambridge',
      description:
        'How AI tools are changing curriculum scoping, instructional prototyping, and personalized adaptive learning journeys at scale.',
      tag: 'AI in Learning',
      thumbnail: 'https://img.youtube.com/vi/Zu8YAidGlWc/hqdefault.jpg',
      url: 'https://youtu.be/Zu8YAidGlWc?si=_ummdrYIglGBBbWF&t=811',
    },
  ];

  const webinars =
    sanityData?.webinars && sanityData.webinars.length > 0
      ? sanityData.webinars.map((w, idx) => ({
          title: w.title,
          speaker: w.speaker,
          role: w.role || '',
          description: w.description || '',
          tag: w.tag || 'Webinar',
          thumbnail:
            imgUrl(w.thumbnail) ||
            getYoutubeThumbnail(w.url) ||
            defaultWebinars[idx]?.thumbnail ||
            '',
          url: w.url,
        }))
      : defaultWebinars;

  // Cross-Country Education Dialogues
  const defaultDialogues = [
    {
      title: 'Dialogues on Education: Shaping the Future',
      excerpt:
        'What happens when education leaders pause to deeply reflect? In partnership with Bohmian Dialogue facilitator Hidde van der Pol, senior educators from 11 countries explore the evolving role of educators.',
      url: 'https://www.linkedin.com/posts/learningdesigners_dialogues-on-education-by-ldc-activity-7259137131485224960-5Jow?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAMHxpgBIvb5YqrwQlo35BLMcSl2b9WUssE',
    },
    {
      title: 'What Should Education Stand for in Today’s World?',
      excerpt:
        'Senior educators from 11 countries examine how education must evolve beyond rote knowledge to address widening socio-economic divides, technological growth, and sustainable thinking.',
      url: 'https://www.linkedin.com/posts/learningdesigners_ldccross-country-education-dialogues-activity-7285279596449513472-tn4y?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAMHxpgBIvb5YqrwQlo35BLMcSl2b9WUssE',
    },
    {
      title: 'AI & Education: Cultivating Depth in an Age of Convenience',
      excerpt:
        'What many consider "misuse of AI" reflects our human tendency to seek shortcuts. Fortnightly cross-country dialogues explore how education and learning designs can cultivate depth over convenience.',
      url: 'https://www.linkedin.com/posts/learningdesigners_ai-and-education-insights-activity-7318490918674657284-reis?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFeJLrcBYXYQxmZU_e-vujRlAbeYTbG9HCc',
    },
  ];

  const dialogues =
    sanityData?.dialogues && sanityData.dialogues.length > 0
      ? sanityData.dialogues.map((d) => ({
          title: d.title,
          excerpt: d.excerpt || '',
          url: d.url,
        }))
      : defaultDialogues;

  // Global South's Learning Blog & Newsletter Articles
  const defaultBlogPosts = [
    {
      title: "Why Facts Don't Change Minds",
      subtitle: 'Designing Learning That Transforms Behaviour',
      category: 'Behavioral Science',
      image: '/images/Community/why_facts_dont_change_minds_banner.jpg',
      url: 'https://www.linkedin.com/pulse/why-facts-dont-change-minds-designing-learning-transforms-frrec/',
    },
    {
      title: 'More Than a High Score',
      subtitle: 'What Research Says About Learning Through Games',
      category: 'Game-Based Learning',
      image: '/images/Community/more_than_high_score_banner.jpg',
      url: 'https://www.linkedin.com/pulse/more-than-high-score-what-research-says-learning-through-eairc/',
    },
    {
      title: 'Learning How to Learn',
      subtitle: 'Introducing the Science of Learning to Undergraduate Students',
      category: 'Science of Learning',
      image: '/images/Community/learning_how_to_learn_banner.jpg',
      url: 'https://www.linkedin.com/pulse/learning-how-learn-introducing-science-undergraduate-xytsc/',
    },
  ];

  const blogPosts =
    sanityData?.blogPosts && sanityData.blogPosts.length > 0
      ? sanityData.blogPosts.map((p, idx) => ({
          title: p.title,
          subtitle: p.subtitle || '',
          category: p.category || 'Article',
          image: imgUrl(p.image) || defaultBlogPosts[idx]?.image || '',
          url: p.url,
        }))
      : defaultBlogPosts;

  // Events, Resources & Expert Insights Posters
  const defaultExpertPosters = [
    {
      title: 'The Science of Becoming an Expert Teacher',
      speakers: 'Dr. Nidhi Sachdeva & Dr. Paul A. Kirschner',
      subtitle: 'Why experience isn’t enough and what expert teachers do differently.',
      image: '/images/Community/The_science_of_becoming_expert_teacher.jpg',
      url: 'https://www.linkedin.com/posts/learningdesigners_ldc-expert-sessionbecoming-an-expert-teacher-activity-7503068262260240385-_Cg8?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxGt2gBa3DpkwT67UaRXl2JI76APNhHFz8',
      accent: 'border-amber-400/40 bg-amber-500/5',
      badge: 'Teacher Expertise',
    },
    {
      title: "The Science of Learning Isn't Always Intuitive",
      speakers: 'Dr. Carl Hendrick',
      subtitle: 'Discover popular instructional illusions and research-informed pedagogical realities.',
      image: '/images/Community/1786326627736_page-0001.jpg',
      url: 'https://www.linkedin.com/posts/learningdesigners_instructional-illusions-activity-7492486899555545089-TBHO?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxGt2gBa3DpkwT67UaRXl2JI76APNhHFz8',
      accent: 'border-emerald-500/40 bg-emerald-500/5',
      badge: 'Cognitive Science',
    },
    {
      title: 'Designing Learning for Behaviour Change',
      speakers: 'Julie Dirksen',
      subtitle: 'Translating behavioural principles into sticky, impactful learning interventions.',
      image: '/images/Community/1775622556614_page-0001.jpg',
      url: 'https://www.linkedin.com/posts/learningdesigners_julie-dirksen-on-designing-for-behavior-change-activity-7447511672539287552-WzcP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADxGt2gBa3DpkwT67UaRXl2JI76APNhHFz8',
      accent: 'border-pink/40 bg-pink/5',
      badge: 'Behavioral Design',
    },
  ];

  const expertPosters =
    sanityData?.expertPosters && sanityData.expertPosters.length > 0
      ? sanityData.expertPosters.map((p, idx) => ({
          title: p.title,
          speakers: p.speakers,
          subtitle: p.subtitle || '',
          image: imgUrl(p.image) || defaultExpertPosters[idx]?.image || '',
          url: p.url,
          accent: defaultExpertPosters[idx]?.accent || 'border-pink/40 bg-pink/5',
          badge: p.badge || defaultExpertPosters[idx]?.badge || 'Insights',
        }))
      : defaultExpertPosters;

  // Advisors
  const defaultAdvisors = [
    {
      name: 'Dr. Nidhi Sachdeva',
      role: 'Educational Scientist & Cognitive Researcher',
      affiliation: 'University of Toronto',
      bio: 'Author and leading researcher specializing in the Science of Learning, microlearning design, and evidence-informed instructional strategies.',
      image: '/images/team/Nidhi.png',
      initials: 'NS',
    },
    {
      name: 'Dr. Will Thalheimer',
      role: 'Learning Researcher & Evaluation Pioneer',
      affiliation: 'Creator of LTEM (Learning-Transfer Evaluation Model)',
      bio: 'Internationally recognized learning expert focused on research-backed learning methodologies and the science of performance evaluation.',
      image: '/images/team/Will_Thalheimer.png',
      initials: 'WT',
    },
  ];

  const advisors =
    sanityData?.advisors && sanityData.advisors.length > 0
      ? sanityData.advisors.map((a, idx) => ({
          name: a.name,
          role: a.role || '',
          affiliation: a.affiliation || '',
          bio: a.bio || '',
          image: imgUrl(a.image) || defaultAdvisors[idx]?.image,
          initials: a.name.split(' ').map((n) => n[0]).join('').slice(0, 2),
        }))
      : defaultAdvisors;

  // Volunteers
  const defaultVolunteers = [
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
      image: '/images/team/Ragini_Lall.png',
      badge: 'Blog & Editorial',
    },
    {
      name: 'Jaya',
      role: 'Blog Editor',
      image: '/images/team/Jaya_Ramchandani.png',
      badge: 'Blog & Editorial',
    },
  ];

  const volunteers =
    sanityData?.volunteers && sanityData.volunteers.length > 0
      ? sanityData.volunteers.map((v, idx) => ({
          name: v.name,
          role: v.role || '',
          image: imgUrl(v.image) || defaultVolunteers[idx]?.image,
          badge: v.role,
        }))
      : defaultVolunteers;

  const meetupVideo = {
    tag: sanityData?.meetupVideo?.tag || 'Peer Learning',
    thumbnail:
      imgUrl(sanityData?.meetupVideo?.thumbnail) ||
      getYoutubeThumbnail(sanityData?.meetupVideo?.url) ||
      'https://img.youtube.com/vi/iEbls3Je7uA/hqdefault.jpg',
    url: sanityData?.meetupVideo?.url || 'https://youtu.be/iEbls3Je7uA?si=AaDorzaWcJNoZOo3',
  };

  const heroStats =
    sanityData?.heroStats && sanityData.heroStats.length > 0
      ? sanityData.heroStats
      : [
          { value: '7,500+', label: 'Educators & Researchers' },
          { value: '50+', label: 'Countries Worldwide' },
          { value: 'Global South', label: 'Hosted & Driven' },
          { value: 'Cross-Sector', label: 'Education, Ed-Tech & L&D' },
        ];

  const scrollToContact = () => {
    const el = document.getElementById('contact') || document.getElementById('stay-connected');
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
                <span>{sanityData?.heroBadge || 'Learning Designers Community (LDC)'}</span>
              </div>
            </ScrollReveal>

            {/* H1 Heading */}
            <ScrollReveal delay={0.1}>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[50px] leading-[1.12] font-bold text-white tracking-tight max-w-3xl mx-auto mb-6">
                {sanityData?.heroTitle || 'Join a Global Community of Learning Professionals & Educators'}
              </h1>
            </ScrollReveal>

            {/* Core Narrative */}
            <ScrollReveal delay={0.2}>
              {sanityData?.heroDescription ? (
                <div className="space-y-4 max-w-2xl mx-auto mb-8">
                  {sanityData.heroDescription.split('\n\n').map((para, idx) => (
                    <p key={idx} className="font-body text-sm sm:text-base text-white/80 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              ) : (
                <>
                  <p className="font-body text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto mb-4">
                    Learning Designers Community (LDC) is a network of{' '}
                    <span className="text-pink font-semibold">7,500+ educators, practitioners, and researchers</span>{' '}
                    across <span className="text-white font-semibold">50+ countries</span>, hosted by professionals
                    from the Global South. Our members span education, ed-tech, enterprise L&D, and skilling, making
                    LDC one of the few cross-sectoral networks dedicated to bridging research and practice and advancing
                    innovative and impactful learning experiences worldwide.
                  </p>
                  <p className="font-body text-xs sm:text-sm text-white/60 leading-relaxed max-w-xl mx-auto mb-8">
                    Join LDC’s peer-learning sessions, monthly expert talks, member meetups, async conversations,
                    learning design job postings, and the Global South Learning Voices blog.
                  </p>
                </>
              )}
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
                {heroStats.map((stat, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                    <div
                      className={`font-display ${
                        stat.value.length > 8 ? 'text-xl sm:text-2xl' : 'text-3xl md:text-4xl'
                      } font-bold ${idx % 2 === 0 ? 'text-pink' : 'text-white'} mb-1`}
                    >
                      {stat.value}
                    </div>
                    <div className="font-body text-xs text-white/60 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===================== SECTION: COMMUNITY ACTIVITIES ===================== */}
      <section className="bg-[#f8f9fa] py-12 md:py-16 relative">
        <div className="page-margin max-content">

          {/* ACTIVITY 1: Webinars & Expert Talks */}
          <div className="mb-14 md:mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-5 border-b border-black/10">
              <div className="max-w-2xl">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-black tracking-tight mb-3">
                  {sanityData?.webinarsHeading || 'Webinars & Expert Talks'}
                </h3>
                <p className="font-body text-sm md:text-base text-black/70 leading-relaxed">
                  {sanityData?.webinarsDescription ||
                    'Live sessions with the world’s leading experts and organizations unpacking diverse learning themes: game-based learning, Science of Learning, universal design for learning, Behavior Change, AI-in-learning use cases, and research and technologies shaping the field.'}
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
                <a
                  key={webinar.title}
                  href={webinar.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-white border border-black/10 rounded-xl overflow-hidden hover:shadow-xl hover:border-pink/40 transition-all duration-300 cursor-pointer"
                >
                  {/* YouTube Video Thumbnail */}
                  <div className="relative aspect-video bg-black overflow-hidden">
                    <img
                      src={webinar.thumbnail}
                      alt={webinar.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                    {/* Tag badge top-left */}
                    <span className="absolute top-3 left-3 z-10 text-[10px] font-body uppercase tracking-wider font-semibold text-white bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 shadow-sm">
                      {webinar.tag}
                    </span>

                    {/* YouTube icon top-right */}
                    <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Youtube className="w-4 h-4 fill-white" />
                    </div>

                    {/* Centered play icon button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-pink/95 text-white flex items-center justify-center shadow-xl group-hover:bg-pink group-hover:scale-110 transition-all duration-300">
                        <Play className="w-5 h-5 md:w-6 md:h-6 fill-white ml-0.5" />
                      </div>
                    </div>
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

                    <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs font-medium font-body text-pink group-hover:text-pink-dark">
                      <span className="inline-flex items-center gap-1.5 font-semibold">
                        <Youtube className="w-3.5 h-3.5 text-red-600 fill-red-600" />
                        Watch on YouTube
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ACTIVITY 2: Cross-Country Education Dialogues */}
          <div className="mb-14 md:mb-16 pt-2">
            <div className="max-w-3xl mb-8">
             
              <h3 className="font-display text-2xl md:text-3xl font-bold text-black tracking-tight mb-3">
                {sanityData?.dialoguesHeading || 'Cross-Country Education Dialogues'}
              </h3>
              <p className="font-body text-sm md:text-base text-black/70 leading-relaxed">
                {sanityData?.dialoguesDescription ||
                  'A series of dialogues with senior educators from 10 countries, including Nigeria, Pakistan, Japan, UAE, Egypt, Canada, and India. They explore how education systems are evolving across contexts and what we can learn from each other to design learning that is more relevant, equitable, human-centered, and future-ready.'}
              </p>
            </div>

            {/* 3 Dialogues Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {dialogues.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-black/10 rounded-xl p-6 flex flex-col justify-between hover:border-pink/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 block cursor-pointer"
                >
                  <div>
                    <h4 className="font-display text-base md:text-lg font-bold text-black mb-3 group-hover:text-pink transition-colors">
                      {item.title}
                    </h4>

                    <p className="font-body text-xs md:text-sm text-black/70 leading-relaxed mb-4">
                      {item.excerpt}
                    </p>
                  </div>

                    <div className="pt-2 border-t border-black/5 flex items-center justify-between text-xs font-body font-semibold text-[#0077B5] group-hover:text-pink transition-colors">
                      <span>View post on LinkedIn</span>
                      <ChevronRight className="w-4 h-4 text-black/40 group-hover:text-pink group-hover:translate-x-0.5 transition-transform" />
                    </div>
                </a>
              ))}
            </div>
          </div>

          {/* ACTIVITY 3: Learning Professionals Meetups */}
          <div className="pt-2">
            <div className="bg-white border border-black/10 rounded-2xl p-8 md:p-12 overflow-hidden relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
             
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-black tracking-tight mb-4">
                    {sanityData?.meetupsHeading || 'Learning Professionals Meetups'}
                  </h3>
                  <p className="font-body text-sm md:text-base text-black/70 leading-relaxed mb-6">
                    {sanityData?.meetupsParagraph1 ||
                      'LDC Meetups are informal, discussion-led gatherings for learning designers, educators, and practitioners to explore how learning is changing in the real world and discuss shared challenges. Each meetup focuses on a timely theme - bridging research, practice, and lived experience across contexts.'}
                  </p>
                  <p className="font-body text-sm text-black/70 leading-relaxed mb-8">
                    {sanityData?.meetupsParagraph2 ||
                      'Participants also create a collaborative document that consolidates insights from their practice and curate a list of recommended resources every month.'}
                  </p>

                  <a
                    href={sanityData?.meetupsEventsUrl || 'https://luma.com/learningdesigners?period=past'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-body text-xs uppercase tracking-wider font-medium bg-pink text-white hover:bg-pink-dark transition-colors cursor-pointer shadow-md shadow-pink/20"
                  >
                    <Calendar className="w-4 h-4" />
                    See upcoming events
                  </a>
                </div>

                {/* Video / Showcase slot */}
                <div className="lg:col-span-5">
                  <a
                    href={meetupVideo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative aspect-video rounded-xl border border-black/10 overflow-hidden block cursor-pointer group shadow-lg hover:shadow-2xl hover:border-pink/40 transition-all duration-300 bg-black"
                  >
                    {/* YouTube Video Thumbnail */}
                    <img
                      src={meetupVideo.thumbnail}
                      alt={sanityData?.meetupsHeading || 'Learning Professionals Meetups'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

                    {/* Tag badge top-left */}
                    <span className="absolute top-3 left-3 z-10 text-[10px] font-body uppercase tracking-wider font-semibold text-white bg-black/75 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10 shadow-sm">
                      {meetupVideo.tag}
                    </span>

                    {/* YouTube icon top-right */}
                    <div className="absolute top-3 right-3 z-10 w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Youtube className="w-4 h-4 fill-white" />
                    </div>

                    {/* Centered play icon button */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-14 h-14 rounded-full bg-pink/95 text-white flex items-center justify-center shadow-xl group-hover:bg-pink group-hover:scale-110 transition-all duration-300">
                        <Play className="w-6 h-6 fill-white ml-0.5" />
                      </div>
                    </div>

                    {/* Bottom bar */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between px-3.5 py-2 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-white text-[11px] font-body">
                      <span className="inline-flex items-center gap-1.5 font-medium">
                        <Youtube className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                        Watch Meetup Insights Video
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SECTION: PUBLICATIONS & INSIGHTS ===================== */}
      <section className="bg-white py-12 md:py-16 border-t border-black/10">
        <div className="page-margin max-content">
          {/* ACTIVITY 4: Global South’s Learning Blog & Newsletter */}
          <div className="mb-14 md:mb-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div className="max-w-2xl">
             
                <h3 className="font-display text-3xl md:text-4xl font-bold text-black tracking-tight mb-4">
                  {sanityData?.blogHeading || "Global South's Learning Blog & Newsletter"}
                </h3>
                <p className="font-body text-sm md:text-base text-black/70 leading-relaxed">
                  {sanityData?.blogDescription ||
                    'Learning design case studies, research, and insights from Asia and Africa that rarely make it into mainstream educational conversations. LDC spotlights bold experiments, on-the-ground innovation, and fresh perspectives shaping the future of learning. Published monthly via LinkedIn and amplified through LDC’s newsletter, it reaches thousands of professionals globally.'}
                </p>
              </div>

              <a
                href={
                  sanityData?.blogNewsletterUrl ||
                  'https://www.linkedin.com/newsletters/global-south-s-learning-voices-7289983829136588802/'
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-body text-xs uppercase tracking-wider font-medium bg-pink text-white hover:bg-pink-dark transition-colors self-start md:self-auto shrink-0 shadow-md shadow-pink/20"
              >
                <FileText className="w-4 h-4" />
                Follow the newsletter
              </a>
            </div>

            {/* 3 Publication Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {blogPosts.map((post) => (
                <a
                  key={post.title}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col bg-white border border-black/10 rounded-xl overflow-hidden hover:border-pink/40 hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  {/* Article Banner Header */}
                  <div className="relative aspect-[16/9] bg-zinc-950 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors" />

                    {/* Category badge top-left */}
                    <div className="absolute top-3 left-3 z-10">
                      <span className="text-[10px] font-body tracking-wider uppercase px-2.5 py-1 rounded bg-black/75 backdrop-blur-md text-white border border-white/10 font-semibold shadow-sm">
                        {post.category}
                      </span>
                    </div>

                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-lg font-bold text-black group-hover:text-pink transition-colors leading-snug mb-1">
                        {post.title}
                      </h4>
                      <p className="font-body text-xs font-semibold text-pink mb-3 line-clamp-1">
                        {post.subtitle}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-black/5 flex items-center justify-between text-xs font-body font-semibold text-pink group-hover:text-pink-dark transition-colors">
                      <span className="inline-flex items-center gap-1.5">
                        <Linkedin className="w-3.5 h-3.5 fill-[#0A66C2] text-[#0A66C2]" />
                        Read on LinkedIn
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* ACTIVITY 5 & 6: Reading Club & Expert Posters (PDF Page 3 & 4) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 items-start pt-8 border-t border-black/10">
            {/* Reading Club Details */}
            <div className="lg:col-span-5 bg-[#f5f5f7] rounded-2xl p-6 md:p-8 border border-black/10">
              <div className="w-12 h-12 rounded-xl bg-pink/10 border border-pink/20 text-pink flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-black mb-4">
                {sanityData?.readingClubHeading || 'Reading Club'}
              </h3>
              <p className="font-body text-sm md:text-base text-black/70 leading-relaxed mb-6">
                {sanityData?.readingClubDescription ||
                  'LDC’s peer-learning initiative fostering evidence-informed practice by connecting research with practical learning design. Through curated academic readings aligned with our monthly themes and expert webinars, diverse educators, researchers, and learning designers gather to reflect and discuss how the research findings apply to their practice and share nuances and insights based on their experience.'}
              </p>
              <div className="p-4 rounded-xl bg-white border border-black/10">
                <span className="font-body text-xs font-semibold text-black block mb-1">
                  How it works:
                </span>
                <p className="font-body text-xs text-black/60 leading-relaxed">
                  {sanityData?.readingClubHowItWorks ||
                    'Monthly research paper → Self-guided annotation → Facilitated group reflection → Practical implementation toolkit.'}
                </p>
              </div>
            </div>

            {/* Events, Resources & Expert Insights */}
            <div className="lg:col-span-7">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                <div>
                  <h3 className="font-display text-2xl font-bold text-black">
                    {sanityData?.expertPostersHeading || 'Events, Resources, & Expert Insights'}
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
              <p className="font-body text-sm text-black/70 leading-relaxed mb-6">
                {sanityData?.expertPostersDescription ||
                  'LDC shares insights from our events, resources, and expertise through their LinkedIn page and newsletters to help professionals improve their learning design practice.'}
              </p>

              {/* 3 Visual Poster Cards from PDF Page 4 */}
              <div className="space-y-4">
                {expertPosters.map((poster) => (
                  <a
                    key={poster.title}
                    href={poster.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group block p-4 sm:p-5 rounded-2xl border ${poster.accent} bg-white hover:border-pink/40 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300`}
                  >
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
                      {/* Screenshot Image Thumbnail */}
                      <div className="w-full sm:w-32 md:w-36 aspect-square rounded-xl overflow-hidden bg-black/5 border border-black/10 shrink-0 relative shadow-sm group-hover:shadow-md">
                        <img
                          src={poster.image}
                          alt={poster.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2 p-1.5 rounded-md bg-black/70 backdrop-blur-sm text-white group-hover:bg-[#0077B5] transition-colors shadow-sm">
                          <Linkedin className="w-3.5 h-3.5" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 flex flex-col justify-between min-w-0 w-full text-left">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-body uppercase tracking-wider bg-black/5 text-black/70 font-semibold">
                              {poster.badge}
                            </span>
                          </div>
                          <h4 className="font-display text-base sm:text-lg font-bold text-black mb-1 group-hover:text-pink transition-colors line-clamp-2">
                            {poster.title}
                          </h4>
                          <p className="font-body text-xs font-semibold text-pink mb-1.5">
                            {poster.speakers}
                          </p>
                          <p className="font-body text-xs text-black/60 leading-relaxed line-clamp-2">
                            {poster.subtitle}
                          </p>
                        </div>

                        <div className="pt-3 mt-3 border-t border-black/5 flex items-center justify-between">
                          <span className="text-xs font-body font-semibold text-[#0077B5] group-hover:text-pink flex items-center gap-1.5 transition-colors">
                            <Linkedin className="w-3.5 h-3.5" />
                            View post on LinkedIn
                          </span>
                          <ChevronRight className="w-4 h-4 text-black/40 group-hover:text-pink group-hover:translate-x-0.5 transition-all" />
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ACTIVITY 7: WhatsApp Community & Job Postings (PDF Page 4) */}
          <div className="mt-14 md:mt-16 p-6 md:p-10 rounded-2xl bg-gradient-to-r from-[#128C7E]/10 via-[#25D366]/5 to-transparent border border-[#25D366]/20 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
             
              <h3 className="font-display text-2xl md:text-3xl font-bold text-black mb-3">
                {sanityData?.whatsappHubHeading || 'Group Discussions, Resources and Global Job Postings'}
              </h3>
              <p className="font-body text-sm md:text-base text-black/70 leading-relaxed">
                {sanityData?.whatsappHubDescription ||
                  'LDC hosts a WhatsApp community where professionals worldwide share resources, ask questions, and share career opportunities related to learning design, education, training, instructional design, learning evaluation, etc.'}
              </p>
            </div>

            <a
              href={sanityData?.whatsappHubUrl || ldcSocials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-body text-sm font-semibold tracking-wide bg-pink text-white hover:bg-pink-dark transition-all duration-200 shrink-0 shadow-lg shadow-pink/25"
            >
              <MessageCircle className="w-4 h-4" />
              {sanityData?.whatsappHubButtonText || 'Join the community'}
            </a>
          </div>
        </div>
      </section>

      {/* ===================== SECTION: OUR ADVISORS (PDF Page 4) ===================== */}
      <section className="bg-[#f8f9fa] py-12 md:py-16 border-b border-black/10">
        <div className="page-margin max-content">
          <div className="text-center max-w-2xl mx-auto mb-10">
           
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black tracking-tight mb-3">
              {sanityData?.advisorsHeading || 'Our Advisors'}
            </h2>
            <p className="font-body text-sm text-black/60">
              {sanityData?.advisorsDescription ||
                'Distinguished global scholars guiding LDC’s mission in evidence-based learning design and rigorous impact measurement.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="bg-white rounded-2xl border border-black/10 p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:shadow-lg transition-all"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-pink/20 via-purple-100 to-pink/10 border-2 border-pink/30 flex items-center justify-center shrink-0 text-pink font-display text-2xl font-bold shadow-inner overflow-hidden">
                  {advisor.image ? (
                    <img src={advisor.image} alt={advisor.name} className="w-full h-full object-cover" />
                  ) : (
                    advisor.initials || advisor.name.slice(0, 2)
                  )}
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
      <section className="bg-white py-12 md:py-16">
        <div className="page-margin max-content">
          <div className="text-center max-w-2xl mx-auto mb-10">
           
            <h2 className="font-display text-3xl md:text-4xl font-bold text-black tracking-tight mb-3">
              {sanityData?.volunteersHeading || 'Our Volunteers'}
            </h2>
            <p className="font-body text-sm text-black/60">
              {sanityData?.volunteersDescription ||
                'The passionate practitioners and educators behind LDC’s meetups, editorial publications, and community facilitation.'}
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
                      <img src={vol.image} alt="" className="w-24 h-24 rounded-full" />
                    </div>
                  )}
                </div>
                <h3 className="font-display text-base font-bold text-black mb-1 group-hover:text-pink transition-colors">
                  {vol.name}
                </h3>
                <p className="font-body text-xs font-medium text-black/60">
                  {vol.role}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactSectionLDC
        heading={sanityData?.contactHeading}
        subtext={sanityData?.contactSubtext}
        email={sanityData?.contactEmail}
      />
    </Layout>
  );
}
