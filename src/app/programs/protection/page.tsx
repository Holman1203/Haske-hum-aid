import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Shield, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Protection Program',
  description: 'HHAI provides GBV response, child protection, psychosocial support, and legal aid to vulnerable populations in Northeast Nigeria.',
};

const stats = [
  { value: '45,000+', label: 'People Protected' },
  { value: '8,500', label: 'GBV Survivors Supported' },
  { value: '9', label: 'Protection Projects' },
  { value: '120', label: 'Case Managers Trained' },
];

const interventions = [
  { title: 'GBV Prevention & Response', desc: 'Safe spaces for women and girls, clinical management of rape survivors, psychosocial support, case management, and community-based GBV prevention.' },
  { title: 'Child Protection', desc: 'Identification and reintegration of unaccompanied and separated children, case management, family tracing, and best-interest determinations for vulnerable children.' },
  { title: 'Psychosocial Support (PSS)', desc: 'Structured psychosocial support activities in safe spaces, recreational programs, and individual MHPSS for conflict-traumatized individuals and families.' },
  { title: 'Legal Aid & Documentation', desc: 'Support for civil documentation, legal representation, and access to justice for IDPs and conflict-affected populations lacking official identification.' },
  { title: 'Community Protection', desc: 'Training community protection monitors, establishing protection networks, and supporting community-based mechanisms to prevent and respond to protection risks.' },
  { title: 'Mine Risk Education', desc: 'Life-saving explosive ordnance risk education (EORE) for communities affected by IED contamination and explosive remnants of war.' },
];

export default function ProtectionPage() {
  return (
    <>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=1920&h=700&auto=format&fit=crop" alt="HHAI Protection Program" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-700/70" />
        </div>
        <div className="relative z-10 container-site max-w-2xl text-white">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><Shield size={22} /></div>
            <span className="text-purple-200 font-semibold text-sm uppercase tracking-wider">Protection Program</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-5">Upholding Dignity in the Face of Crisis</h1>
          <p className="text-purple-100 text-lg leading-relaxed mb-6">
            Conflict exposes millions to violence, exploitation, and abuse. HHAI&apos;s Protection program safeguards the rights and dignity of the most vulnerable — women, children, and people with disabilities — across Northeast Nigeria.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/get-involved#donate" className="btn-primary">Support Protection Programs</Link>
            <Link href="/projects?sector=protection" className="btn-secondary">View Projects</Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-purple-700 text-white">
        <div className="container-site grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl lg:text-4xl font-black font-serif">{s.value}</div>
              <div className="text-purple-200 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="section-subheading">The Challenge</p>
              <h2 className="section-heading mb-4">A Protection Crisis Alongside the Conflict</h2>
              <div className="divider-orange mb-5" />
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>Northeast Nigeria&apos;s conflict has created one of Africa&apos;s most severe protection crises. Women and girls face heightened risks of sexual and gender-based violence, abduction, and forced marriage. Children are at risk of recruitment, separation from families, and psychological trauma.</p>
                <p>Displacement camps and host communities are often overcrowded, with inadequate lighting, shared facilities, and limited community protection structures — creating environments where protection violations thrive.</p>
                <p>Stigma, lack of legal recourse, and fear of reprisal further prevent survivors from seeking help. HHAI works to break these barriers through confidential, survivor-centred programming.</p>
              </div>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
              <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2"><Shield size={18} className="text-purple-600" /> Protection Concerns in Northeast Nigeria</h3>
              <ul className="space-y-3">
                {['Over 7 million people with protection needs in the region', 'Rampant GBV affecting women and girls in displacement', 'Tens of thousands of unaccompanied children', 'High levels of psychological trauma from conflict', 'Limited access to legal identity documents for IDPs', 'Explosive remnants of war pose daily risks to civilians'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-purple-500 flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-site">
          <div className="text-center mb-10">
            <p className="section-subheading">Our Interventions</p>
            <h2 className="section-heading">How We Protect Vulnerable People</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {interventions.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-purple-100 transition-colors">
                  <Shield size={18} className="text-purple-600" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-purple-700 text-white">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold font-serif mb-3">Protect the Most Vulnerable</h2>
          <p className="text-purple-100 mb-6 max-w-lg mx-auto">Support HHAI&apos;s protection programs to safeguard the rights and dignity of women, children, and displaced people in Northeast Nigeria.</p>
          <Link href="/get-involved#donate" className="inline-flex items-center gap-2 bg-white text-purple-700 font-bold px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors shadow-md">
            Donate to Protection Programs <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
