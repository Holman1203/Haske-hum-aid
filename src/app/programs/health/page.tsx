import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, ArrowRight, CheckCircle, Users, Activity, Stethoscope } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Health Program',
  description: 'HHAI delivers emergency healthcare, mobile clinics, maternal health, and disease prevention to conflict-affected communities in Northeast Nigeria.',
};

const stats = [
  { value: '120,000+', label: 'Patients Treated' },
  { value: '48', label: 'Mobile Clinics' },
  { value: '14', label: 'Health Projects' },
  { value: '98%', label: 'Under-5 Vaccination Rate' },
];

const interventions = [
  { title: 'Mobile Health Clinics', desc: 'Deploying mobile teams to hard-to-reach IDP camps and host communities offering primary healthcare, outpatient consultations, and medication.' },
  { title: 'Maternal & Child Health', desc: 'Antenatal and postnatal care, skilled birth attendance, family planning, and child growth monitoring to reduce maternal and neonatal mortality.' },
  { title: 'Disease Surveillance', desc: 'Real-time outbreak monitoring and rapid response for cholera, measles, meningitis, and other epidemic-prone diseases in camp and community settings.' },
  { title: 'Community Health Workers', desc: 'Training and deploying over 300 community health workers and volunteers to provide preventive care and health education at household level.' },
  { title: 'Emergency Medical Response', desc: 'First-line emergency triage, wound management, trauma care, and referral systems for conflict-related injuries and medical emergencies.' },
  { title: 'Mental Health & MHPSS', desc: 'Psychosocial support, mental health first aid, and referral to specialized mental health services for trauma-affected individuals and families.' },
];

const projects = [
  {
    title: 'Emergency Primary Healthcare in Borno IDP Camps',
    donor: 'ECHO / EU',
    period: 'Jan 2024 – Dec 2024',
    beneficiaries: '45,000',
    status: 'Ongoing',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    title: 'Integrated Maternal Health & MHPSS Program',
    donor: 'USAID/BHA',
    period: 'Jul 2023 – Jun 2024',
    beneficiaries: '28,000',
    status: 'Ongoing',
    statusColor: 'bg-green-100 text-green-700',
  },
  {
    title: 'Cholera Outbreak Response — Borno State',
    donor: 'WHO / OCHA',
    period: 'Mar 2023 – Aug 2023',
    beneficiaries: '12,500',
    status: 'Completed',
    statusColor: 'bg-blue-100 text-blue-700',
  },
];

export default function HealthPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&h=700&auto=format&fit=crop"
            alt="HHAI Health Program"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-700/70" />
        </div>
        <div className="relative z-10 container-site">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Heart size={22} />
              </div>
              <span className="text-red-200 font-semibold text-sm uppercase tracking-wider">Health Program</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-5">
              Delivering Healthcare Where It&apos;s Needed Most
            </h1>
            <p className="text-red-100 text-lg leading-relaxed mb-6">
              HHAI&apos;s Health program brings life-saving medical services to conflict-affected, displaced, and hard-to-reach communities across Northeast Nigeria through mobile clinics, community health workers, and emergency medical response.
            </p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/get-involved#donate" className="btn-primary">Support Health Programs</Link>
              <Link href="/projects?sector=health" className="btn-secondary">View Health Projects</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-red-600 text-white">
        <div className="container-site">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-black font-serif">{s.value}</div>
                <div className="text-red-200 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context */}
      <section className="py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="section-subheading">The Challenge</p>
              <h2 className="section-heading mb-4">Healthcare Crisis in Northeast Nigeria</h2>
              <div className="divider-orange mb-5" />
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>Northeast Nigeria&apos;s protracted conflict has devastated health infrastructure. Over 70% of health facilities in Borno State were destroyed or severely damaged. Millions of internally displaced persons live in overcrowded camps with minimal access to quality medical care.</p>
                <p>Communicable disease outbreaks — including cholera, measles, and cerebrospinal meningitis — regularly affect IDP camps. Maternal mortality rates remain alarmingly high, with most births occurring outside health facilities.</p>
                <p>Health worker shortages, security constraints, and supply chain disruptions further limit access to essential medicines and medical care for the most vulnerable people.</p>
              </div>
            </div>
            <div className="bg-red-50 rounded-2xl p-6 border border-red-100">
              <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2">
                <Activity size={18} className="text-red-600" />
                Key Health Challenges in Northeast Nigeria
              </h3>
              <ul className="space-y-3">
                {[
                  '8.4 million people needing health assistance in 2024',
                  'Over 70% of health facilities damaged by conflict',
                  'Maternal mortality rate 6× the national average',
                  'Regular cholera, measles & meningitis outbreaks',
                  'Critical shortage of trained health workers',
                  'Low under-5 vaccination coverage in conflict zones',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-red-500 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interventions */}
      <section className="py-16 bg-gray-50">
        <div className="container-site">
          <div className="text-center mb-10">
            <p className="section-subheading">Our Interventions</p>
            <h2 className="section-heading">How We Respond</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {interventions.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-red-200 hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-red-100 transition-colors">
                  <Stethoscope size={18} className="text-red-600" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-white">
        <div className="container-site">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <p className="section-subheading">Our Work</p>
              <h2 className="section-heading">Health Projects</h2>
            </div>
            <Link href="/projects?sector=health" className="text-brand-blue hover:text-brand-orange text-sm font-semibold flex items-center gap-1">
              All Health Projects <ArrowRight size={14} />
            </Link>
          </div>
          <div className="space-y-4">
            {projects.map((p) => (
              <div key={p.title} className="bg-gray-50 border border-gray-100 rounded-xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`tag-pill ${p.statusColor} text-xs font-semibold`}>{p.status}</span>
                  </div>
                  <h3 className="font-semibold text-brand-dark">{p.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">Donor: {p.donor} · {p.period}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Users size={14} className="text-gray-400" />
                  <span className="text-sm font-semibold text-brand-blue">{p.beneficiaries} beneficiaries</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold font-serif mb-3">Support Life-Saving Healthcare</h2>
          <p className="text-red-100 mb-6 max-w-lg mx-auto">
            Your donation helps HHAI deliver essential medical services to families in crisis across Northeast Nigeria.
          </p>
          <Link href="/get-involved#donate" className="inline-flex items-center gap-2 bg-white text-red-600 font-bold px-8 py-3 rounded-lg hover:bg-red-50 transition-colors shadow-md">
            Donate to Health Programs <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
