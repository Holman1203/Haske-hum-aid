import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Leaf, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nutrition Program',
  description: 'HHAI tackles acute malnutrition in Northeast Nigeria through CMAM, IYCF counseling, nutrition screening, and community mobilization.',
};

const stats = [
  { value: '85,000+', label: 'Beneficiaries' },
  { value: '96%', label: 'SAM Recovery Rate' },
  { value: '12', label: 'Nutrition Projects' },
  { value: '320', label: 'Nutrition Staff Trained' },
];

const interventions = [
  { title: 'SAM Treatment (CMAM)', desc: 'Community-based management of severe acute malnutrition using ready-to-use therapeutic food (RUTF) at outpatient therapeutic programme (OTP) sites.' },
  { title: 'MAM Management', desc: 'Targeted supplementary feeding programmes (TSFP) treating moderate acute malnutrition in children 6–59 months and pregnant and lactating women.' },
  { title: 'IYCF Counseling', desc: 'Infant and young child feeding counseling, exclusive breastfeeding promotion, and complementary feeding support for mothers and caregivers.' },
  { title: 'Nutrition Screening', desc: 'Community-based MUAC screening, nutrition surveillance, and SMART surveys to identify malnourished children and monitor nutrition trends.' },
  { title: 'Micronutrient Supplementation', desc: 'Vitamin A supplementation, iron and folic acid distribution, and multi-micronutrient powder provision to prevent micronutrient deficiencies.' },
  { title: 'Community Mobilization', desc: 'Training community nutrition volunteers and leaders to promote positive nutrition behaviors and support uptake of nutrition services at household level.' },
];

export default function NutritionPage() {
  return (
    <>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?w=1920&h=700&auto=format&fit=crop" alt="HHAI Nutrition Program" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 to-green-700/70" />
        </div>
        <div className="relative z-10 container-site max-w-2xl text-white">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><Leaf size={22} /></div>
            <span className="text-green-200 font-semibold text-sm uppercase tracking-wider">Nutrition Program</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-5">Ending Malnutrition, One Child at a Time</h1>
          <p className="text-green-100 text-lg leading-relaxed mb-6">
            Northeast Nigeria has one of the highest acute malnutrition rates in Africa. HHAI&apos;s integrated nutrition program provides life-saving treatment and prevention services to children and mothers across Borno, Adamawa, and Yobe States.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/get-involved#donate" className="btn-primary">Support Nutrition Programs</Link>
            <Link href="/projects?sector=nutrition" className="btn-secondary">View Projects</Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-green-600 text-white">
        <div className="container-site grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl lg:text-4xl font-black font-serif">{s.value}</div>
              <div className="text-green-200 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="section-subheading">The Challenge</p>
              <h2 className="section-heading mb-4">A Silent Emergency: Child Malnutrition</h2>
              <div className="divider-orange mb-5" />
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>Northeast Nigeria carries one of the world&apos;s heaviest nutrition burdens. In Borno State alone, an estimated 450,000 children under five suffer from acute malnutrition — and without treatment, severe acute malnutrition is fatal in up to 30% of cases.</p>
                <p>Conflict has disrupted food systems, markets, and livelihoods, creating a perfect storm of food insecurity and malnutrition. Prolonged displacement limits dietary diversity and access to nutritious foods, while poor feeding practices further compound the crisis.</p>
                <p>HHAI&apos;s nutrition response is fully integrated with food security, health, and WASH programs to address the multi-dimensional causes of malnutrition.</p>
              </div>
            </div>
            <div className="bg-green-50 rounded-2xl p-6 border border-green-100">
              <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2"><Leaf size={18} className="text-green-600" /> Malnutrition Facts — Northeast Nigeria</h3>
              <ul className="space-y-3">
                {[
                  'Over 450,000 children under 5 acutely malnourished in Borno State',
                  'GAM rate of 14.8% in worst-affected LGAs — above emergency threshold',
                  'SAM mortality rate up to 30% without treatment',
                  'Pregnant and lactating women face chronic nutrient deficiencies',
                  'Only 20% exclusive breastfeeding rate in conflict-affected areas',
                  'Micronutrient deficiencies (Vitamin A, Iron) are widespread',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
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
            <h2 className="section-heading">Integrated Nutrition Response</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {interventions.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-green-200 hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-green-100 transition-colors">
                  <Leaf size={18} className="text-green-600" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-green-600 text-white">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold font-serif mb-3">Help Us Fight Malnutrition</h2>
          <p className="text-green-100 mb-6 max-w-lg mx-auto">$50 can provide a child with a full course of RUTF treatment for severe acute malnutrition. Donate today.</p>
          <Link href="/get-involved#donate" className="inline-flex items-center gap-2 bg-white text-green-600 font-bold px-8 py-3 rounded-lg hover:bg-green-50 transition-colors shadow-md">
            Donate to Nutrition Programs <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
