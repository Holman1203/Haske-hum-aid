import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Droplets, ArrowRight, CheckCircle, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'WASH Program',
  description: 'HHAI provides safe water, sanitation, and hygiene services to displaced and vulnerable communities in Northeast Nigeria.',
};

const stats = [
  { value: '200,000+', label: 'People with Water Access' },
  { value: '340', label: 'Latrines Constructed' },
  { value: '28', label: 'Boreholes Rehabilitated' },
  { value: '95%', label: 'Cholera Reduction in Served Communities' },
];

const interventions = [
  { title: 'Borehole Rehabilitation', desc: 'Repairing and upgrading non-functional boreholes with solar pumping systems to ensure year-round safe water supply to IDP camps and host communities.' },
  { title: 'Latrine & Sanitation', desc: 'Constructing gender-segregated and disability-inclusive latrines in camps, schools, and healthcare facilities to end open defecation and prevent disease.' },
  { title: 'Hygiene Promotion', desc: 'Systematic hygiene education campaigns using Community-Led Total Sanitation (CLTS) and interpersonal communication to improve hygiene practices.' },
  { title: 'Menstrual Health (MHM)', desc: 'Distributing menstrual hygiene kits, constructing private bathing facilities, and providing MHM education to girls and women in displacement settings.' },
  { title: 'Water Quality Testing', desc: 'Regular water quality monitoring and water treatment distribution to prevent waterborne disease outbreaks in targeted communities.' },
  { title: 'Community WASH Committees', desc: 'Establishing and training community water management committees to sustain water infrastructure and hygiene promotion beyond the project period.' },
];

export default function WashPage() {
  return (
    <>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1534294668821-28a3054f4256?w=1920&h=700&auto=format&fit=crop"
            alt="HHAI WASH Program"
            fill className="object-cover" priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/70" />
        </div>
        <div className="relative z-10 container-site max-w-2xl text-white">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              <Droplets size={22} />
            </div>
            <span className="text-blue-200 font-semibold text-sm uppercase tracking-wider">WASH Program</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-5">
            Safe Water, Dignity & Health for All
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed mb-6">
            HHAI&apos;s WASH program ensures displaced and conflict-affected communities have sustainable access to safe water, appropriate sanitation facilities, and the knowledge to maintain good hygiene practices.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/get-involved#donate" className="btn-primary">Support WASH Programs</Link>
            <Link href="/projects?sector=wash" className="btn-secondary">View WASH Projects</Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-blue-600 text-white">
        <div className="container-site grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl lg:text-4xl font-black font-serif">{s.value}</div>
              <div className="text-blue-200 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="section-subheading">The Challenge</p>
              <h2 className="section-heading mb-4">A Water & Sanitation Crisis</h2>
              <div className="divider-orange mb-5" />
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>Access to safe water remains one of the most critical challenges in Northeast Nigeria. Conflict has destroyed water infrastructure, contaminated water sources, and forced millions into overcrowded camps where waterborne diseases spread rapidly.</p>
                <p>Open defecation remains prevalent in many IDP settings, and women and girls face severe safety risks accessing distant water points and open latrines — especially at night.</p>
                <p>Cholera outbreaks are a regular occurrence during rainy seasons, disproportionately affecting children under five. HHAI&apos;s WASH interventions directly reduce these risks.</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2">
                <Droplets size={18} className="text-blue-600" /> Key WASH Challenges
              </h3>
              <ul className="space-y-3">
                {[
                  '3.7 million people lack access to safe water in Northeast Nigeria',
                  'Only 1 in 5 IDPs have access to improved sanitation',
                  'Cholera kills hundreds annually in affected LGAs',
                  'Girls miss school due to lack of private sanitation',
                  'Water sources contaminated by conflict and flooding',
                  'Community WASH management capacity severely weakened',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    {item}
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
            <h2 className="section-heading">WASH Solutions We Deliver</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {interventions.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-100 transition-colors">
                  <Droplets size={18} className="text-blue-600" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-blue-600 text-white">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold font-serif mb-3">Give the Gift of Clean Water</h2>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">Every donation helps HHAI reach more families with safe water and dignified sanitation across Northeast Nigeria.</p>
          <Link href="/get-involved#donate" className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors shadow-md">
            Donate to WASH Programs <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
