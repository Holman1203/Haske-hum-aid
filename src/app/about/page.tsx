import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Download, Target, Eye, Heart, Shield, Users, Globe, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Haske Humanitarian Aid Initiative (HHAI) — our history, mission, vision, values, team, and programs focused on rural development and community health in Nigeria.',
};

const values = [
  { icon: Heart, title: 'Honesty', desc: 'We uphold truthfulness and sincerity in all our engagements with communities, partners, and stakeholders.' },
  { icon: Shield, title: 'Transparency & Accountability', desc: 'We are open and accountable to the communities we serve, our donors, and the general public.' },
  { icon: Users, title: 'Mutual Respect', desc: 'We treat every individual with dignity and respect, valuing the contributions of community members and partners alike.' },
  { icon: Globe, title: 'Gender Sensitivity', desc: 'We mainstream gender equity across all our programs, ensuring women and girls are at the forefront of community development.' },
  { icon: Target, title: 'Good Interpersonal Relationship', desc: 'We foster positive, collaborative relationships within our team and with the communities and partners we engage.' },
  { icon: Eye, title: 'Innovation', desc: 'We accept challenges and build new innovations from each experience, continually improving how we serve communities.' },
];

const guidingPrinciples = [
  'Engagement and involvement of key stakeholders',
  'Community participation and ownership',
  'Utilization of available structures in the community for effective implementation',
  'Accepting challenges and building new innovations out from each',
];

const team = [
  {
    name: 'Emelda Jummai Musa',
    role: 'Founder & Executive Director',
    bio: 'Founding leader of HHAI with a deep passion for community health and rural development. Drives the organization\'s vision of ensuring women and children\'s health needs are prioritised across underserved communities in Nigeria.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&auto=format&fit=crop',
    phone: '+234 809 225 5840',
  },
  {
    name: 'Jerry Mike',
    role: 'Program Manager',
    bio: 'Experienced program manager overseeing HHAI\'s health and nutrition interventions. Specializes in community engagement, stakeholder coordination, and program implementation at state, LGA, and community levels.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&auto=format&fit=crop',
    phone: '+234 703 723 4399',
  },
  {
    name: 'Mary Adikwu',
    role: 'Program Manager',
    bio: 'Dedicated program manager with expertise in maternal and child health, nutritional programming, and gender empowerment. Coordinates capacity-building initiatives across target communities.',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=300&h=300&auto=format&fit=crop',
    phone: '+234 813 383 1835',
  },
];

const timeline = [
  { year: '2022', event: 'Haske Humanitarian Aid Initiative (HHAI) established and registered with the Corporate Affairs Commission (CAC No. 182258). First community health awareness programs launched in Adamawa State.' },
  { year: '2022', event: 'Partnership established with state and LGA health stakeholders in Adamawa. Health (RMNCHN) programs initiated targeting women of child-bearing age and children under-5.' },
  { year: '2023', event: 'Nutrition program expanded — capacity building of community women on nutritional food concepts, combination and processing to prevent acute malnutrition among pregnant and lactating mothers.' },
  { year: '2023', event: 'Gender & Economic Empowerment component launched, supporting women to identify income-generating opportunities and build confidence in health-related decision-making.' },
  { year: '2024', event: 'Operations extended to Bauchi State (House No. 4, Justice Quarters, Old GRA). Strengthened community structures and deepened engagement with key stakeholders across all levels.' },
];

const reports = [
  { title: 'Organizational Profile 2022', size: '2.1 MB', type: 'PDF', year: '2022' },
  { title: 'Health Program Report', size: '1.8 MB', type: 'PDF', year: '2023' },
  { title: 'Nutrition Program Update', size: '1.4 MB', type: 'PDF', year: '2023' },
  { title: 'Gender Empowerment Overview', size: '1.2 MB', type: 'PDF', year: '2024' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1509099382481-f5a8e80bed7d?w=1920&h=600&auto=format&fit=crop&q=85"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 container-site text-center">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">About HHAI</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-serif mb-5">
            Building Healthier Communities Across Nigeria
          </h1>
          <p className="text-green-200 max-w-2xl mx-auto text-lg leading-relaxed">
            Since 2022, Haske Humanitarian Aid Initiative has been building an enabling environment where women and children&apos;s health needs are prioritised through community engagement and sustainable rural development.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link href="/get-involved#donate" className="btn-primary">Donate Now</Link>
            <Link href="/contact" className="btn-secondary">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Quick Facts */}
      <section className="py-8 bg-brand-orange">
        <div className="container-site">
          <div className="grid grid-cols-3 gap-6 text-center text-white">
            <div>
              <div className="text-3xl font-black">2022</div>
              <div className="text-white/80 text-sm mt-1">Year Established</div>
            </div>
            <div>
              <div className="text-3xl font-black">6</div>
              <div className="text-white/80 text-sm mt-1">States of Operation</div>
            </div>
            <div>
              <div className="text-3xl font-black">7</div>
              <div className="text-white/80 text-sm mt-1">Core Program Areas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Approach */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-brand-blue rounded-2xl p-8 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Target size={22} />
              </div>
              <h2 className="font-bold text-xl font-serif mb-3">Our Mission</h2>
              <div className="w-12 h-0.5 bg-brand-orange mb-4" />
              <p className="text-green-100 leading-relaxed text-sm">
                To build an enabling environment where women and children under-5&apos;s health are being taken into cognizance — through community awareness, capacity building, and sustained stakeholder engagement.
              </p>
            </div>
            <div className="bg-brand-green rounded-2xl p-8 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Eye size={22} />
              </div>
              <h2 className="font-bold text-xl font-serif mb-3">Our Vision</h2>
              <div className="w-12 h-0.5 bg-brand-orange mb-4" />
              <p className="text-green-100 leading-relaxed text-sm">
                A Nigeria where every woman and child — regardless of location, economic status, or background — has access to quality healthcare, adequate nutrition, and economic opportunities to live a life of dignity.
              </p>
            </div>
            <div className="bg-brand-orange rounded-2xl p-8 text-white">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <Heart size={22} />
              </div>
              <h2 className="font-bold text-xl font-serif mb-3">Our Focus</h2>
              <div className="w-12 h-0.5 bg-white mb-4" />
              <p className="text-white/80 leading-relaxed text-sm">
                Rural development through community-led, gender-sensitive programming — integrating Health (RMNCHN), Nutrition, and Gender &amp; Economic Empowerment to create lasting, community-owned change.
              </p>
            </div>
          </div>

          {/* Aims & Objectives */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="section-subheading">Aims & Objectives</p>
              <h2 className="section-heading mb-6">What We Set Out to Achieve</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-brand-green mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    To create awareness among community members about <strong>positive health-seeking behaviour</strong> and the importance of maternal and child health services.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-brand-green mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    To promote <strong>capacity building</strong> among members of community towards solving their identified health needs through knowledge, skills, and local resources.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-brand-green mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    To engage and interface with <strong>key stakeholders</strong> at state, LGA, and community levels to leverage existing structures for sustained health and development outcomes.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-brand-green mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 leading-relaxed">
                    To <strong>empower women economically</strong> — providing skills, knowledge, and confidence to support their families and contribute meaningfully to their communities.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden h-80">
              <Image
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&auto=format&fit=crop&q=85"
                alt="HHAI community health program in rural Nigeria"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/40 to-transparent" />
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-10">
            <p className="section-subheading">Core Values</p>
            <h2 className="section-heading">The Principles That Guide Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl hover:bg-brand-blue-light transition-colors group">
                <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors">
                  <v.icon size={20} className="text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark mb-1">{v.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-16 bg-brand-blue">
        <div className="container-site">
          <div className="text-center mb-10">
            <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">How We Work</p>
            <h2 className="text-3xl font-bold text-white font-serif">Our Guiding Principles</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {guidingPrinciples.map((principle, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-5">
                <div className="w-7 h-7 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">{i + 1}</div>
                <p className="text-green-100 text-sm leading-relaxed">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization History / Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-subheading">Our Journey</p>
            <h2 className="section-heading">Growing Since 2022</h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-brand-blue/20" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="relative flex gap-6 pl-16">
                  <div className="absolute left-5 w-6 h-6 bg-brand-blue rounded-full border-4 border-white shadow-md flex items-center justify-center -translate-x-1/2 mt-1">
                    <div className="w-2 h-2 bg-white rounded-full" />
                  </div>
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex-1">
                    <span className="inline-block bg-brand-blue text-white text-xs font-bold px-3 py-0.5 rounded-full mb-2">{item.year}</span>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-subheading">Our Team</p>
            <h2 className="section-heading">Meet the Leadership</h2>
            <p className="text-gray-600 mt-3 max-w-xl mx-auto text-sm">
              Passionate individuals committed to improving health outcomes and building resilient communities across Nigeria.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm card-hover text-center">
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-brand-dark text-base">{member.name}</h3>
                  <p className="text-brand-orange text-xs font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-3">{member.bio}</p>
                  <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="text-brand-blue text-xs hover:text-brand-orange transition-colors">
                    {member.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports & Downloads */}
      <section className="py-16 bg-brand-blue-light">
        <div className="container-site">
          <div className="text-center mb-10">
            <p className="section-subheading">Transparency & Accountability</p>
            <h2 className="section-heading">Reports & Publications</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reports.map((report) => (
              <a
                key={report.title}
                href="#"
                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-brand-blue transition-all duration-300 group"
              >
                <div className="w-10 h-12 bg-red-50 border border-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-100 transition-colors">
                  <span className="text-red-600 text-xs font-black">PDF</span>
                </div>
                <h3 className="font-semibold text-brand-dark text-sm mb-1">{report.title}</h3>
                <p className="text-gray-400 text-xs">{report.year} · {report.size}</p>
                <div className="flex items-center gap-1.5 text-brand-blue text-xs font-semibold mt-3 group-hover:text-brand-orange transition-colors">
                  <Download size={12} />
                  Download
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-green">
        <div className="container-site text-center">
          <h2 className="text-3xl font-bold text-white font-serif mb-4">Join Us in Building Healthier Communities</h2>
          <p className="text-green-100 max-w-xl mx-auto mb-8 text-sm leading-relaxed">
            HHAI is always looking for passionate individuals, organizations, and donors who share our vision for sustainable community health and development in Nigeria.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            <Link href="/get-involved" className="bg-white text-brand-green font-bold px-6 py-3 rounded-lg hover:bg-green-50 transition-colors inline-flex items-center gap-2">
              Get Involved <ArrowRight size={16} />
            </Link>
            <Link href="/contact" className="border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-brand-green transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
