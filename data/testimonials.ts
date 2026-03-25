export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  region: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Solid Code asked better questions in the first workshop than our previous vendor did in three months. Delivery was predictable, and the documentation actually matched production.",
    name: "Elena Vasquez",
    role: "Chief Operating Officer",
    company: "Vertex Facilities Group",
    region: "United Kingdom",
  },
  {
    id: "2",
    quote:
      "We needed a partner who could work with our SAP landscape without drama. Integrations were staged sensibly, and their engineers communicated clearly with our internal IT team.",
    name: "Jonas Lindström",
    role: "Head of Digital",
    company: "Northline Trade AB",
    region: "Sweden",
  },
  {
    id: "3",
    quote:
      "The dashboard project had executive attention from week one. They kept scope disciplined, which is rare when stakeholders keep adding ‘small’ requests.",
    name: "Amira Okonkwo",
    role: "Director of Retail Operations",
    company: "Pulse Retail Holdings",
    region: "Nigeria / UAE",
  },
  {
    id: "4",
    quote:
      "Our mobile rollout touched fifteen hundred technicians. Training materials and error messages were written for people who are experts in the field—not in software.",
    name: "Marcus Chen",
    role: "VP Service Delivery",
    company: "Fieldlink National Services",
    region: "United States",
  },
  {
    id: "5",
    quote:
      "They treated our compliance requirements as constraints to design around, not excuses to slow down. That mindset made the difference for our legal and risk committees.",
    name: "Sophie Bennett",
    role: "General Counsel",
    company: "Harbor Capital Partners",
    region: "Singapore",
  },
  {
    id: "6",
    quote:
      "Post-launch support has been unusually transparent: tickets are triaged with business impact in mind, and we get plain-language release notes.",
    name: "David O’Reilly",
    role: "IT Director",
    company: "Ledgerflow Practice Network",
    region: "Ireland",
  },
];
