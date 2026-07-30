import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Wheat, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Food Security & Livelihoods Program',
  description: 'HHAI delivers food assistance, cash transfers, agricultural support, and livelihood recovery to conflict-affected households in Northeast Nigeria.',
};

const stats = [
  { value: '180,000+', label: 'Beneficiaries' },
  { value: '5,000+', label: 'HHs Receiving Cash' },
  { value: '15', label: 'FSL Projects' },
  { value: '40,000', label: 'Farmers Supported' },
];

const interventions = [
  { title: 'Emergency Food Assistance', desc: 'In-kind food distribution providing essential food commodities to the most food-insecure households in IDP camps and host communities during acute crises.' },
  { title: 'Multi-Purpose Cash Transfers', desc: 'Regular cash assistance enabling displaced families to meet their basic needs, restore purchasing power, and stimulate local markets in crisis-affected areas.' },
  { title: 'Agricultural Input Support', desc: 'Seeds, tools, and fertilizer distribution combined with farmer field schools to help returnee farmers restore agricultural production and food self-sufficiency.' },
  { title: 'Livelihood Skills Training', desc: 'Vocational and business skills training for women, youth, and conflict-affected adults to diversify income sources and build economic resilience.' },
  { title: 'Market Systems Support', desc: 'Strengthening local markets, trader capacity building, and linking smallholder farmers to buyers to revitalize collapsed agricultural market systems.' },
  { title: 'Resilience & Recovery', desc: 'Longer-term resilience building through savings groups (VSLAs), asset transfers, disaster risk reduction, and community-based natural resource management.' },
];

export default function FoodSecurityPage() {
  return (
    <>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=700&auto=format&fit=crop" alt="HHAI Food Security Program" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-700/70" />
        </div>
        <div className="relative z-10 container-site max-w-2xl text-white">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><Wheat size={22} /></div>
            <span className="text-green-200 font-semibold text-sm uppercase tracking-wider">Food Security & Livelihoods</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-5">From Survival to Sustainable Livelihoods</h1>
          <p className="text-green-100 text-lg leading-relaxed mb-6">
            Conflict has devastated the food systems and livelihoods of millions in Northeast Nigeria. HHAI bridges the gap from emergency food assistance to long-term economic recovery and resilience.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/get-involved#donate" className="btn-primary">Support Food Security</Link>
            <Link href="/projects?sector=fsl" className="btn-secondary">View Projects</Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-brand-orange text-white">
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
              <h2 className="section-heading mb-4">Hunger, Displacement & Livelihood Collapse</h2>
              <div className="divider-orange mb-5" />
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>Northeast Nigeria is home to one of the world&apos;s most severe food security crises. Thirteen years of conflict has destroyed agricultural land, livestock herds, and market systems that millions depended on for their survival.</p>
                <p>Around 4.9 million people face crisis or emergency levels of food insecurity (IPC Phase 3+). IDPs have lost their land, tools, and savings — making them entirely dependent on humanitarian assistance without livelihood options to rebuild.</p>
                <p>HHAI bridges emergency food relief with livelihood recovery programming, ensuring that assistance doesn&apos;t create dependency but builds self-reliance and resilience over time.</p>
              </div>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-100">
              <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2"><Wheat size={18} className="text-brand-orange" /> Food Security Crisis</h3>
              <ul className="space-y-3">
                {['4.9M people in IPC Phase 3+ food insecurity in Northeast Nigeria', 'Over 2 million internally displaced, many with no land or assets', 'Agricultural production 40% below pre-conflict levels', 'Livestock herds decimated by raiding and displacement', 'Market systems severely disrupted by insecurity and displacement', '80% of IDPs have no income or livelihood source'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-brand-orange flex-shrink-0 mt-0.5" />{item}
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
            <h2 className="section-heading">Food Security & Livelihood Solutions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {interventions.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-purple-200 hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-purple-100 transition-colors">
                  <Wheat size={18} className="text-brand-orange" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-orange text-white">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold font-serif mb-3">Help Feed Families in Crisis</h2>
          <p className="text-purple-100 mb-6 max-w-lg mx-auto">$75 can provide a family of five with a full month of essential food supplies. Support food security in Northeast Nigeria today.</p>
          <Link href="/get-involved#donate" className="inline-flex items-center gap-2 bg-white text-brand-orange font-bold px-8 py-3 rounded-lg hover:bg-purple-50 transition-colors shadow-md">
            Donate to Food Security Programs <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
