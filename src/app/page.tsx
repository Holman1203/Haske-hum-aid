'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Heart, Shield, Droplets, Leaf, BookOpen, Wheat,
  ArrowRight, Quote, Download, ChevronRight,
  AlertTriangle, Globe, Users, Building, TrendingUp, MapPin, CheckCircle
} from 'lucide-react';
import HeroSlider from '@/components/home/HeroSlider';

/* ─── Data ────────────────────────────────────────────────────── */

const stats = [
  { value: '10,000+', label: 'Beneficiaries Reached',   sub: 'Across all programs',     icon: Users,       color: 'text-brand-blue'   },
  { value: '50+',     label: 'Communities Supported',   sub: 'In target states',         icon: Globe,       color: 'text-brand-green'  },
  { value: '6',       label: 'States of Operation',     sub: 'Across Nigeria',            icon: Building,    color: 'text-brand-orange' },
  { value: '7',       label: 'Core Program Areas',      sub: 'Integrated sectors',        icon: TrendingUp,  color: 'text-brand-blue'   },
  { value: '2022',    label: 'Year Established',        sub: 'CAC No. 182258',            icon: Heart,       color: 'text-brand-green'  },
];

const programs = [
  {
    title: 'Health',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=260&auto=format&fit=crop',
    stat: '5,000+', statLabel: 'Mothers & Children',
    color: 'bg-red-50 text-red-600 border-red-100', accent: 'bg-red-600',
    href: '/programs/health',
    description: 'Awareness creation on RMNCHN — health needs of women of child-bearing age and children under-5, through collaboration with state, LGA, and community stakeholders.',
    reach: 'Core program area',
  },
  {
    title: 'Nutrition',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?w=500&h=260&auto=format&fit=crop',
    stat: '3,200+', statLabel: 'Children Treated',
    color: 'bg-green-50 text-green-600 border-green-100', accent: 'bg-green-600',
    href: '/programs/nutrition',
    description: 'Enhancing nutritional status of pregnant/lactating mothers and children under-5 through capacity building on nutritional food concepts, combination, and processing.',
    reach: 'Core program area',
  },
  {
    title: 'Gender & Economic Empowerment',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&h=260&auto=format&fit=crop',
    stat: '1,800+', statLabel: 'Women Empowered',
    color: 'bg-purple-50 text-purple-600 border-purple-100', accent: 'bg-purple-600',
    href: '/programs/protection',
    description: 'Building the capacity and agency of women to adopt best health practices, identify income-generating opportunities, and contribute meaningfully to their communities.',
    reach: 'Core program area',
  },
  {
    title: 'Protection',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=260&auto=format&fit=crop',
    stat: '2,500+', statLabel: 'Cases Managed',
    color: 'bg-indigo-50 text-indigo-600 border-indigo-100', accent: 'bg-indigo-600',
    href: '/programs/protection',
    description: 'Ensuring safety and dignity of women and children — addressing gender-based risks, psychosocial needs, and creating protective community environments.',
    reach: 'Support program',
  },
  {
    title: 'WASH',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1534293230397-c067fc201ab8?w=500&h=260&auto=format&fit=crop',
    stat: '8,000+', statLabel: 'WASH Beneficiaries',
    color: 'bg-blue-50 text-blue-600 border-blue-100', accent: 'bg-blue-600',
    href: '/programs/wash',
    description: 'Promoting safe water, sanitation, and hygiene practices to improve health outcomes for mothers and children, reducing waterborne disease.',
    reach: 'Support program',
  },
  {
    title: 'Food Security & Livelihoods',
    icon: Wheat,
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=500&h=260&auto=format&fit=crop',
    stat: '2,000+', statLabel: 'Households Supported',
    color: 'bg-yellow-50 text-yellow-600 border-yellow-100', accent: 'bg-yellow-500',
    href: '/programs/food-security',
    description: 'Supporting household food security and agricultural livelihoods, particularly for women-led households, as a foundation for improved health and nutrition outcomes.',
    reach: 'Support program',
  },
  {
    title: 'Education',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=500&h=260&auto=format&fit=crop',
    stat: '1,500+', statLabel: 'Children Enrolled',
    color: 'bg-orange-50 text-orange-600 border-orange-100', accent: 'bg-orange-500',
    href: '/programs/education',
    description: 'Providing access to quality education for out-of-school children, with a focus on girls — through temporary learning spaces, teacher training, and school materials.',
    reach: 'Support program',
  },
];

const whereWeWork = [
  {
    state: 'Adamawa State',
    role: 'Headquarters & Primary Operations',
    hq: 'Jimeta-Yola North',
    description: 'Our founding state and operational headquarters. Full-scale delivery of Health (RMNCHN), Nutrition, and Gender & Economic Empowerment programs across urban and rural LGAs.',
    tags: ['Health', 'Nutrition', 'Gender Empowerment', 'WASH', 'Education'],
    lgas: '12+ LGAs',
    beneficiaries: '6,000+',
    color: 'bg-brand-blue',
  },
  {
    state: 'Bauchi State',
    role: 'Field Operations',
    hq: 'Justice Quarters, Old GRA',
    description: 'Extended programming delivering community health, livelihood support, and protection services to vulnerable women and children in underserved communities.',
    tags: ['Health', 'Nutrition', 'Protection', 'Food Security'],
    lgas: '8+ LGAs',
    beneficiaries: '4,000+',
    color: 'bg-brand-green',
  },
];

const founderQuote = {
  quote: 'Since 2022, HHAI has been driven by one simple conviction: every woman and every child deserves dignity, health, and the opportunity to thrive — regardless of where they live or what crisis they face. We will not stop until that is a reality.',
  name: 'Emelda Jummai Musa',
  title: 'Founder & Executive Director, HHAI',
  image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&auto=format&fit=crop&q=80',
};

const testimonials = [
  {
    quote: 'Before HHAI came to our camp, my children walked five kilometres every morning to fetch water. Now we have a clean borehole right here. My daughter can focus on school instead of carrying jerrycans.',
    name: 'Fatima Musa',
    age: 34,
    role: 'IDP Beneficiary',
    location: 'Dalori Camp, Maiduguri — Borno State',
    program: 'WASH',
    programColor: 'bg-blue-100 text-blue-700',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=120&h=120&auto=format&fit=crop&q=80',
  },
  {
    quote: 'My children were out of school for three years because of the crisis. When HHAI rebuilt our school and provided learning materials, it was like watching life return to our community.',
    name: 'Ibrahim Kwaya',
    age: 42,
    role: 'Parent & Community Leader',
    location: 'Biu, Borno State',
    program: 'Education',
    programColor: 'bg-yellow-100 text-yellow-700',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&auto=format&fit=crop&q=80',
  },
  {
    quote: 'HHAI is among our most trusted implementing partners in Northeast Nigeria. Their commitment to quality programming, community accountability, and transparent reporting sets them apart.',
    name: 'Sarah Okonkwo',
    age: null,
    role: 'Program Officer',
    location: 'USAID / Bureau for Humanitarian Assistance',
    program: 'Partner',
    programColor: 'bg-green-100 text-green-700',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&auto=format&fit=crop&q=80',
  },
];

const partners = [
  'USAID', 'ECHO', 'UNHCR', 'UNICEF', 'WFP', 'OCHA',
  'WHO', 'EU Aid', 'UK Aid', 'BMZ', 'IOM', 'NRC',
];

const news = [
  {
    title: 'HHAI Receives $2.5M USAID Grant for Emergency Nutrition Response',
    date: 'May 15, 2024',
    category: 'Field Report',
    categoryColor: 'bg-green-100 text-green-700',
    borderColor: 'border-t-green-500',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=280&auto=format&fit=crop',
    excerpt: 'The grant will enable HHAI to treat 15,000 children suffering from severe acute malnutrition across Borno and Yobe states.',
    href: '/media/news/usaid-nutrition-grant',
    readTime: '3 min read',
  },
  {
    title: 'New WASH Project Brings Safe Water to 30 Villages in Adamawa',
    date: 'April 28, 2024',
    category: 'WASH',
    categoryColor: 'bg-blue-100 text-blue-700',
    borderColor: 'border-t-blue-500',
    image: 'https://images.unsplash.com/photo-1534293230397-c067fc201ab8?w=500&h=280&auto=format&fit=crop',
    excerpt: 'The 18-month EU-funded project will construct 30 new boreholes and train 150 community water management committees.',
    href: '/media/news/adamawa-wash-project',
    readTime: '4 min read',
  },
  {
    title: 'HHAI Launches Cash Transfer Program for 5,000 IDP Households',
    date: 'March 10, 2024',
    category: 'Food Security',
    categoryColor: 'bg-purple-100 text-purple-700',
    borderColor: 'border-t-purple-500',
    image: 'https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?w=500&h=280&auto=format&fit=crop',
    excerpt: 'Multi-purpose cash assistance will provide immediate relief and restore purchasing power for displacement-affected families in Borno State.',
    href: '/media/news/cash-transfer-launch',
    readTime: '3 min read',
  },
];

/* ─── Page ────────────────────────────────────────────────────── */

export default function HomePage() {
  return (
    <>
      {/* ── HERO SLIDER ── */}
      <HeroSlider />

      {/* ── EMERGENCY ALERT ── */}
      <section className="bg-red-600 text-white py-3.5">
        <div className="container-site">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3">
              <AlertTriangle size={18} className="flex-shrink-0 animate-pulse" />
              <p className="text-sm font-medium">
                <span className="font-bold">Emergency Appeal:</span>{' '}
                8.4 million people in Northeast Nigeria need urgent humanitarian assistance in 2024. HHAI is responding now.
              </p>
            </div>
            <Link
              href="/get-involved#donate"
              className="flex-shrink-0 inline-flex items-center gap-1.5 bg-white text-red-600 font-bold text-sm px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
            >
              Respond Now <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── IMPACT STATS ── */}
      <section className="py-16 bg-gradient-to-br from-brand-blue to-[#1A7A3A]">
        <div className="container-site">
          <div className="text-center mb-10">
            <p className="text-green-300 text-xs uppercase tracking-widest font-semibold mb-2">Our Impact</p>
            <h2 className="text-3xl font-bold text-white font-serif">Numbers That Tell Our Story</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5 text-center hover:bg-white/20 transition-all duration-300 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-orange/60 transition-colors">
                  <stat.icon size={20} className="text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-black text-white font-serif mb-0.5">{stat.value}</div>
                <div className="text-white text-xs font-semibold leading-tight mb-1">{stat.label}</div>
                <div className="text-green-300 text-[10px] leading-tight">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="section-subheading">Who We Are</p>
              <h2 className="section-heading mb-5">
                A Trusted Humanitarian Partner in Nigeria&apos;s Most Complex Crisis
              </h2>
              <div className="divider-orange mb-6" />
              <p className="text-gray-600 leading-relaxed mb-4">
                Established in 2022,{' '}
                <strong className="text-brand-blue">Haske Humanitarian Aid Initiative (HHAI)</strong>{' '}
                — meaning &quot;Light&quot; in Hausa — is a registered Nigerian NGO (CAC No. 182258) committed to building an enabling environment where women and children&apos;s health needs are prioritised across underserved communities.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Operating in Adamawa and Bauchi States, we deliver community-led, gender-sensitive interventions in Health (RMNCHN), Nutrition, and Gender &amp; Economic Empowerment — continuously engaging stakeholders at all levels to create lasting, locally-owned change.
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  'Registered Nigerian NGO',
                  'OCHA Cluster Member',
                  'Community-Led Programs',
                  'Transparent Accountability',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                    <CheckCircle size={15} className="text-brand-green flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3">
                <Link href="/about" className="btn-outline-blue">
                  Learn About Us <ArrowRight size={16} />
                </Link>
                <a
                  href="/documents/HHAI-Annual-Report-2023.pdf"
                  className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-orange transition-colors text-sm font-semibold"
                >
                  <Download size={16} />
                  Annual Report 2023
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&h=525&auto=format&fit=crop"
                  alt="HHAI field workers in a community health clinic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 z-20 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="text-2xl font-black text-brand-blue font-serif">96%</div>
                <div className="text-xs text-gray-600 mt-0.5">SAM Recovery Rate<br />(2023 CMAM Program)</div>
              </div>
              <div className="absolute -top-5 -right-5 z-20 bg-brand-orange rounded-xl shadow-xl p-4 text-white">
                <div className="text-2xl font-black font-serif">Est.</div>
                <div className="text-xs mt-0.5 opacity-90">Since<br />2022</div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-brand-blue-light rounded-full -z-10" />
              <div className="absolute -top-8 -left-8 w-40 h-40 bg-brand-green-light rounded-full -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* ── WHERE WE WORK ── */}
      <section className="py-20 bg-brand-blue-light">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-subheading">Geographic Reach</p>
            <h2 className="section-heading mb-4">Where We Work</h2>
            <p className="text-gray-600">
              Operating across 6 states in Nigeria, with concentrated programming in Adamawa and Bauchi — reaching the most underserved women and children in each community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
            {whereWeWork.map((w) => (
              <div key={w.state} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group card-hover">
                <div className={`${w.color} px-6 py-4`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">{w.state}</h3>
                      <p className="text-white/80 text-xs font-medium">{w.role}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{w.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {w.tags.map((tag) => (
                      <span key={tag} className="bg-brand-blue-light text-brand-blue text-xs px-3 py-1 rounded-full font-medium border border-brand-blue/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3 border-t border-gray-100 pt-4">
                    <div className="text-center">
                      <div className="font-black text-brand-blue text-lg">{w.lgas}</div>
                      <div className="text-gray-500 text-[10px] uppercase tracking-wide">Coverage</div>
                    </div>
                    <div className="text-center border-x border-gray-100">
                      <div className="font-black text-brand-blue text-lg">{w.beneficiaries}</div>
                      <div className="text-gray-500 text-[10px] uppercase tracking-wide">Beneficiaries</div>
                    </div>
                    <div className="text-center">
                      <div className="font-black text-brand-blue text-lg">{w.tags.length}</div>
                      <div className="text-gray-500 text-[10px] uppercase tracking-wide">Programs</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/about" className="btn-outline-blue">
              View Full Operational Map <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS / THEMATIC SECTORS ── */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="section-subheading">What We Do</p>
            <h2 className="section-heading mb-4">Our Thematic Areas of Intervention</h2>
            <p className="text-gray-600">
              Seven integrated sectors working together to deliver comprehensive humanitarian response and build community resilience across Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {programs.map((program) => (
              <Link
                key={program.title}
                href={program.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Program image */}
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={`HHAI ${program.title} Program`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  {/* Key stat badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div className="bg-white/95 backdrop-blur-sm rounded-lg px-2.5 py-1.5 shadow-sm">
                      <span className="text-brand-blue font-black text-sm">{program.stat}</span>
                      <span className="text-gray-600 text-[10px] ml-1">{program.statLabel}</span>
                    </div>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${program.color} border`}>
                      <program.icon size={16} />
                    </div>
                  </div>
                </div>

                {/* Card content */}
                <div className="p-4">
                  <h3 className="font-bold text-brand-dark text-sm leading-snug mb-1.5 group-hover:text-brand-blue transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 mb-3">{program.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-brand-green bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                      {program.reach}
                    </span>
                    <span className="text-brand-blue group-hover:text-brand-orange transition-colors">
                      <ChevronRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/programs" className="btn-outline-blue">
              Explore All Programs <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOUNDER QUOTE ── */}
      <section className="py-16 bg-gray-50">
        <div className="container-site">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-brand-blue to-[#1A7A3A] rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl">
              {/* Decorative quote marks */}
              <Quote size={120} className="absolute top-4 right-6 text-white/8 pointer-events-none" />
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                {/* Photo */}
                <div className="flex-shrink-0 text-center">
                  <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden ring-4 ring-white/30 mx-auto shadow-xl">
                    <Image
                      src={founderQuote.image}
                      alt={founderQuote.name}
                      width={112}
                      height={112}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="mt-3">
                    <div className="w-8 h-0.5 bg-brand-orange mx-auto" />
                  </div>
                </div>
                {/* Quote */}
                <div>
                  <Quote size={28} className="text-brand-orange mb-3 opacity-90" />
                  <p className="text-white text-lg lg:text-xl font-serif italic leading-relaxed mb-6">
                    {founderQuote.quote}
                  </p>
                  <div>
                    <div className="text-white font-bold text-base">{founderQuote.name}</div>
                    <div className="text-green-300 text-sm mt-0.5">{founderQuote.title}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT STORIES ── */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="section-subheading">Impact Stories</p>
              <h2 className="section-heading">Voices from the Field</h2>
            </div>
            <Link href="/projects" className="text-brand-blue hover:text-brand-orange transition-colors font-semibold text-sm flex items-center gap-1">
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Clean Water Restored to 50,000 Families in Borno',
                sector: 'WASH', sectorColor: 'bg-blue-100 text-blue-700',
                location: 'Maiduguri, Borno State', date: 'March 2024',
                image: 'https://images.unsplash.com/photo-1534294668821-28a3054f4256?w=600&h=400&auto=format&fit=crop',
                excerpt: 'HHAI rehabilitated 28 boreholes and installed 12 solar-powered water systems across Maiduguri IDP camps, ending years of waterborne disease outbreaks.',
              },
              {
                title: '12,000 Children Recovered from Severe Malnutrition',
                sector: 'Nutrition', sectorColor: 'bg-green-100 text-green-700',
                location: 'Dikwa & Ngala, Borno State', date: 'January 2024',
                image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&auto=format&fit=crop',
                excerpt: 'Through integrated CMAM programming, HHAI treated 12,340 children under-5 for severe acute malnutrition with a recovery rate exceeding 96%.',
              },
              {
                title: "Girls' Education Initiative Enrolls 8,500 Girls",
                sector: 'Education', sectorColor: 'bg-yellow-100 text-yellow-700',
                location: 'Yola, Adamawa State', date: 'December 2023',
                image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&h=400&auto=format&fit=crop',
                excerpt: 'The Back-to-School campaign broke cultural barriers and re-enrolled over 8,500 out-of-school girls in Adamawa, providing scholarships and safe learning spaces.',
              },
            ].map((story) => (
              <article key={story.title} className="group bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`tag-pill ${story.sectorColor} font-semibold`}>{story.sector}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                    <MapPin size={11} />
                    <span>{story.location}</span>
                    <span>·</span>
                    <span>{story.date}</span>
                  </div>
                  <h3 className="font-bold text-brand-dark text-base leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                    {story.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">{story.excerpt}</p>
                  <span className="text-brand-blue text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HUMAN STORIES / TESTIMONIALS ── */}
      <section className="py-20 bg-brand-blue">
        <div className="container-site">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="text-brand-orange font-semibold text-xs uppercase tracking-widest mb-2">Human Stories</p>
            <h2 className="text-3xl font-bold text-white font-serif">Lives Transformed</h2>
            <p className="text-green-200 text-sm mt-3 max-w-md mx-auto">Real voices from the communities we serve — stories of resilience, recovery, and renewed hope.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 flex flex-col">
                {/* Program tag */}
                <span className={`self-start tag-pill ${t.programColor} font-semibold mb-4 text-[10px]`}>{t.program}</span>

                <Quote size={28} className="text-brand-orange mb-3 opacity-80" />
                <p className="text-white leading-relaxed mb-6 italic text-sm flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Person */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-brand-orange/50">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">
                      {t.name}{t.age ? `, ${t.age}` : ''}
                    </div>
                    <div className="text-green-300 text-xs">{t.role}</div>
                    <div className="text-white/60 text-[10px] mt-0.5 flex items-center gap-1">
                      <MapPin size={9} />
                      {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS & DONORS ── */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="container-site">
          <div className="text-center mb-8">
            <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] font-semibold mb-1">Trusted By</p>
            <h3 className="text-gray-700 font-bold text-sm">Our Partners, Donors & Cluster Members</h3>
          </div>
          <div className="overflow-hidden relative">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10" />
            <div className="flex gap-4 animate-marquee whitespace-nowrap">
              {[...partners, ...partners].map((partner, i) => (
                <div
                  key={i}
                  className="inline-flex items-center justify-center bg-gray-50 border border-gray-200 rounded-xl px-8 py-4 min-w-[150px] hover:border-brand-blue hover:bg-brand-blue-light transition-all duration-300 cursor-pointer group"
                >
                  <span className="text-gray-500 group-hover:text-brand-blue font-bold text-sm tracking-wide transition-colors">{partner}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── LATEST NEWS ── */}
      <section className="py-20 bg-gray-50">
        <div className="container-site">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="section-subheading">Latest Updates</p>
              <h2 className="section-heading">News from the Field</h2>
            </div>
            <Link href="/media" className="text-brand-blue hover:text-brand-orange transition-colors font-semibold text-sm flex items-center gap-1">
              All News & Reports <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((article) => (
              <article key={article.title} className={`group bg-white rounded-2xl overflow-hidden shadow-sm border-t-4 ${article.borderColor} border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`tag-pill ${article.categoryColor} font-semibold text-[10px]`}>{article.category}</span>
                    <span className="text-gray-400 text-[10px]">{article.readTime}</span>
                  </div>
                  <p className="text-gray-400 text-xs mb-2 flex items-center gap-1">
                    <span className="w-1 h-1 bg-brand-orange rounded-full" />
                    {article.date}
                  </p>
                  <h3 className="font-bold text-brand-dark text-sm leading-snug mb-2 group-hover:text-brand-blue transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-4">{article.excerpt}</p>
                  <Link
                    href={article.href}
                    className="text-brand-blue text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all hover:text-brand-orange"
                  >
                    Read Article <ArrowRight size={12} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-16 bg-gradient-to-br from-brand-green to-[#1e5c34]">
        <div className="container-site">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-green-200 text-xs uppercase tracking-widest font-semibold mb-3">Stay Informed</p>
            <h2 className="text-3xl font-bold text-white font-serif mb-4">
              Get the Latest from Northeast Nigeria
            </h2>
            <p className="text-green-100 mb-8">
              Subscribe to our newsletter for field updates, project reports, and humanitarian news delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" action="#">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-5 py-3.5 rounded-xl text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white shadow-sm"
                required
              />
              <button
                type="submit"
                className="bg-brand-orange hover:bg-purple-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors shadow-md whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
            <p className="text-green-300 text-xs mt-3">No spam. Unsubscribe any time. Your data is protected.</p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="bg-gradient-to-br from-brand-blue to-[#1A7A3A] rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-orange/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">Take Action</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white font-serif mb-4">
                Together, We Can Save More Lives
              </h2>
              <p className="text-green-200 max-w-xl mx-auto mb-8">
                Every contribution — whether time, skills, or resources — makes a meaningful difference in the lives of conflict-affected communities across Northeast Nigeria.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link href="/get-involved#donate" className="btn-primary text-base px-8 py-4">
                  <Heart size={18} /> Donate Now
                </Link>
                <Link href="/get-involved#volunteer" className="btn-secondary text-base px-8 py-4">
                  Volunteer With Us
                </Link>
                <Link href="/get-involved#partners" className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/20 transition-colors text-base">
                  Partner With HHAI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
