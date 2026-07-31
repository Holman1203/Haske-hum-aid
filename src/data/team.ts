export interface TeamMember {
  slug: string;
  initial: string;
  name: string;
  role: string;
  bio: string;
  focus: string[];
}

// Placeholder roster — swap in real names, photos and bios once available.
export const team: TeamMember[] = [
  {
    slug: 'executive-director',
    initial: 'A',
    name: 'Executive Director',
    role: 'Founder · Woman-led',
    bio: 'Leads HHAI’s strategic direction and represents the organization before government, donors and partner agencies. Founded HHAI in 2022 out of a conviction that no one should face crisis without dignity, and has guided its growth into a government-registered, woman-led national NGO.',
    focus: ['Strategic leadership', 'Donor & government relations', 'Organizational governance'],
  },
  {
    slug: 'programs-director',
    initial: 'P',
    name: 'Programs Director',
    role: 'Operations & Delivery',
    bio: 'Oversees the design and delivery of HHAI’s field programs, ensuring interventions reach the communities that need them most, on time and to standard. Coordinates program teams across health, nutrition, WASH, education and protection.',
    focus: ['Program design & delivery', 'Field operations', 'Cross-sector coordination'],
  },
  {
    slug: 'meal-lead',
    initial: 'M',
    name: 'MEAL Lead',
    role: 'Monitoring & Evaluation',
    bio: 'Leads Monitoring, Evaluation, Accountability and Learning across all HHAI programs, ensuring impact is tracked, verified and used to continuously improve how the organization serves affected communities.',
    focus: ['Monitoring & evaluation', 'Accountability systems', 'Impact reporting'],
  },
  {
    slug: 'community-lead',
    initial: 'C',
    name: 'Community Lead',
    role: 'Engagement & Advocacy',
    bio: 'Builds and maintains relationships with the communities HHAI serves, ensuring programs are shaped by community voice and that beneficiaries have a channel for feedback, complaints and advocacy.',
    focus: ['Community engagement', 'Advocacy', 'Beneficiary feedback'],
  },
];

export function getTeamMember(slug: string): TeamMember | undefined {
  return team.find((member) => member.slug === slug);
}
