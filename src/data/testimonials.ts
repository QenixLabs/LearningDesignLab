export interface Testimonial {
  quote: string;
  highlight?: string;
  attribution: string;
}

export const defaultTestimonials: Testimonial[] = [
  {
    quote:
      'The courses are highly comprehensive and well suited for e-learning, offering practical insights with a strong balance of personalisation and scaffolded key concepts.',
    highlight: 'highly comprehensive and well suited for e-learning',
    attribution: 'Myat Thiri, Programme Officer, UNESCO Myanmar',
  },
  {
    quote:
      'Your insightful session, generous sharing of expertise, and engaging interactions greatly enriched the programme and inspired our faculty to reflect on and strengthen their teaching practices.',
    highlight: 'greatly enriched the programme and inspired our faculty',
    attribution: 'Prof. (Dr.) Varuna Tyagi, Dean Academics, K.R. Mangalam University',
  },
  {
    quote:
      "This is one of the most inspiring and memorable collaborations for me and it's all because of everyone involved with so much commitment. Grateful for pushing the two microcredentials with full momentum and through many long weekends.",
    highlight: 'one of the most inspiring and memorable collaborations',
    attribution: 'Preyansi, Education & Digitalisation Advisor, Digital Skills To Succeed in Asia, GIZ',
  },
  {
    quote:
      'The modules are highly engaging and deeply reflective. The use of popular culture along with a diverse range of methodologies stands out. It is evident how much hard work, thought, and passion have gone into this effort. Truly admirable work—this has the potential to be a real game changer.',
    highlight: 'highly engaging and deeply reflective',
    attribution: 'Dr. Rita Mishra, Founder and CEO, Patang',
  },
];
