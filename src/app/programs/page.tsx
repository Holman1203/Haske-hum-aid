import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Shield, Droplets, Leaf, BookOpen, Wheat, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Programs',
  description: 'Explore HHAI\'s six integrated thematic areas: Health, Protection, WASH, Nutrition, Education, and Food Security & Livelihoods in Northeast Nigeria.',
};

const programs = [
  {
    title: 'Health',
    icon: Heart,
    href: '/programs/health',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&auto=format&fit=crop',
    color: 'from-red-600 to-red-700',
    light: 'bg-red-50 text-red-600',
    reach: '120,000+',
    projects: 14,
    description: 'Emergency healthcare delivery, mobile health clinics, maternal and child health, disease surveillance and outbreak response, and health system strengthening for conflict-affected populations.',
    keyActivities: ['Mobile Health Clinics', 'Emergency Medical Services', 'Maternal & Child Health', 'Disease Outbreak Response', 'Community Health Workers'],
  },
  {
    title: 'Protection',
    icon: Shield,
    href: '/programs/protection',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=400&auto=format&fit=crop',
    color: 'from-purple-600 to-purple-700',
    light: 'bg-purple-50 text-purple-600',
    reach: '45,000+',
    projects: 9,
    description: 'Gender-based violence prevention and response, child protection, psychosocial support, legal aid, documentation assistance, and community-based protection mechanisms.',
    keyActivities: ['GBV Response', 'Child Protection', 'Psychosocial Support', 'Legal Aid & Documentation', 'Case Management'],
  },
  {
    title: 'WASH',
    icon: Droplets,
    href: '/programs/wash',
    image: 'https://images.unsplash.com/photo-1534294668821-28a3054f4256?w=600&h=400&auto=format&fit=crop',
    color: 'from-blue-600 to-blue-700',
    light: 'bg-blue-50 text-blue-600',
    reach: '200,000+',
    projects: 18,
    description: 'Safe water access, borehole rehabilitation, latrine construction, hygiene promotion, menstrual health management, and community water management capacity building.',
    keyActivities: ['Borehole Rehabilitation', 'Latrine Construction', 'Hygiene Promotion', 'Water Quality Testing', 'MHM Support'],
  },
  {
    title: 'Nutrition',
    icon: Leaf,
    href: '/programs/nutrition',
    image: 'https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?w=600&h=400&auto=format&fit=crop',
    color: 'from-green-600 to-green-700',
    light: 'bg-green-50 text-green-600',
    reach: '85,000+',
    projects: 12,
    description: 'CMAM treatment for SAM and MAM children, nutrition screening and surveillance, IYCF promotion, micronutrient supplementation, and community nutrition mobilization.',
    keyActivities: ['SAM Treatment (CMAM)', 'MAM Management', 'IYCF Counseling', 'Nutrition Screening', 'Micronutrient Supplementation'],
  },
  {
    title: 'Education',
    icon: BookOpen,
    href: '/programs/education',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&h=400&auto=format&fit=crop',
    color: 'from-yellow-600 to-yellow-700',
    light: 'bg-yellow-50 text-yellow-600',
    reach: '60,000+',
    projects: 10,
    description: 'Temporary learning spaces, school rehabilitation, teacher recruitment and training, catch-up programs, girls education initiatives, and school-based psychosocial support.',
    keyActivities: ['TLS Construction', 'Teacher Training', 'Girls Education', 'Catch-Up Programs', 'School Supplies'],
  },
  {
    title: 'Food Security & Livelihoods',
    icon: Wheat,
    href: '/programs/food-security',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&auto=format&fit=crop',
    color: 'from-purple-600 to-purple-700',
    light: 'bg-purple-50 text-purple-600',
    reach: '180,000+',
    projects: 15,
    description: 'Emergency food assistance, multi-purpose cash transfers, agricultural input support, livelihood skills training, market systems development, and resilience building.',
    keyActivities: ['Food Assistance', 'Cash Transfers', 'Agricultural Inputs', 'Livelihood Training', 'Market Support'],
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-24 bg-gradient-to-br from-brand-blue to-[#1A7A3A] overflow-hidden">
        <div className="relative z-10 container-site text-center">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-serif mb-5">
            Our Thematic Programs
          </h1>
          <p className="text-green-200 max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Six integrated sectors delivering comprehensive humanitarian response and sustainable development across Northeast Nigeria&apos;s most complex crisis contexts.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {[
              { label: '450,000+', sub: 'Total Beneficiaries' },
              { label: '58+', sub: 'Projects' },
              { label: '6', sub: 'Thematic Sectors' },
              { label: '3', sub: 'States' },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-black text-white font-serif">{s.label}</div>
                <div className="text-green-300 text-xs mt-1">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs grid */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="space-y-12">
            {programs.map((program, i) => (
              <div
                key={program.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] group">
                    <Image
                      src={program.image}
                      alt={`HHAI ${program.title} Program`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-30 group-hover:opacity-20 transition-opacity`} />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${program.light}`}>
                        <program.icon size={22} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`tag-pill ${program.light} font-semibold`}>{program.title}</div>
                    <span className="text-xs text-gray-400">{program.projects} projects · {program.reach} beneficiaries</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-brand-dark font-serif mb-4">
                    {program.title} Program
                  </h2>
                  <div className="w-12 h-1 bg-brand-orange rounded-full mb-4" />
                  <p className="text-gray-600 leading-relaxed mb-5">{program.description}</p>
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Key Activities</p>
                    <div className="flex flex-wrap gap-2">
                      {program.keyActivities.map((activity) => (
                        <span key={activity} className="text-xs bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full font-medium">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href={program.href} className="btn-outline-blue">
                    Learn More <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-50 border-t border-gray-100">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold text-brand-dark font-serif mb-3">Support Our Programs</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Your support enables HHAI to reach more vulnerable people with life-saving assistance across Northeast Nigeria.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="/get-involved#donate" className="btn-primary">Donate Now</Link>
            <Link href="/get-involved#partners" className="btn-outline-blue">Partner With Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}
