import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Education Program',
  description: 'HHAI restores education access for conflict-affected children across Northeast Nigeria through learning spaces, teacher training, and girls education initiatives.',
};

const stats = [
  { value: '60,000+', label: 'Children Enrolled' },
  { value: '8,500', label: 'Girls Back in School' },
  { value: '10', label: 'Education Projects' },
  { value: '450', label: 'Teachers Trained' },
];

const interventions = [
  { title: 'Temporary Learning Spaces (TLS)', desc: 'Construction and equipping of safe, gender-inclusive temporary learning spaces in IDP camps and conflict-affected communities, providing immediate access to education.' },
  { title: 'School Rehabilitation', desc: 'Rehabilitation of damaged and destroyed school buildings to restore permanent learning environments for children returning to their communities.' },
  { title: 'Teacher Recruitment & Training', desc: 'Recruitment of qualified teachers, psychosocial support training, and capacity building in learner-centered teaching methodologies for conflict contexts.' },
  { title: "Girls' Education Initiative", desc: 'Conditional scholarships, community mobilization against gender barriers, girl-friendly school environments, and women mentor programs to keep girls in school.' },
  { title: 'Catch-Up Programs', desc: 'Accelerated learning programs for children who missed years of schooling due to conflict, helping them integrate into formal education at the appropriate grade level.' },
  { title: 'Education in Emergencies (EiE)', desc: 'Structured learning, recreational activities, and psychosocial support in emergency phases to provide normalcy and protection through education.' },
];

export default function EducationPage() {
  return (
    <>
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&h=700&auto=format&fit=crop" alt="HHAI Education Program" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/90 to-yellow-700/70" />
        </div>
        <div className="relative z-10 container-site max-w-2xl text-white">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center"><BookOpen size={22} /></div>
            <span className="text-yellow-200 font-semibold text-sm uppercase tracking-wider">Education Program</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-5">Restoring Hope Through Education</h1>
          <p className="text-yellow-100 text-lg leading-relaxed mb-6">
            Over 1 million children in Northeast Nigeria are out of school due to conflict. HHAI creates safe learning environments, trains teachers, and breaks down barriers to keep children — especially girls — in school.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="/get-involved#donate" className="btn-primary">Support Education</Link>
            <Link href="/projects?sector=education" className="btn-secondary">View Projects</Link>
          </div>
        </div>
      </section>

      <section className="py-10 bg-yellow-600 text-white">
        <div className="container-site grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl lg:text-4xl font-black font-serif">{s.value}</div>
              <div className="text-yellow-100 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <p className="section-subheading">The Challenge</p>
              <h2 className="section-heading mb-4">A Lost Generation at Risk</h2>
              <div className="divider-orange mb-5" />
              <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                <p>The conflict in Northeast Nigeria has created an education emergency. Over 1,000 schools have been attacked, destroyed, or occupied by armed groups. More than 1 million children are out of school — a crisis that threatens to create a &quot;lost generation.&quot;</p>
                <p>Girls face compounded barriers: cultural norms, early marriage, GBV risks on school routes, and the perception that education is not for them. Without intervention, many girls who drop out never return.</p>
                <p>Teachers have fled conflict zones, leaving severe shortages of qualified educators. Children who do attend school often lack basic supplies and receive instruction in damaged, unsafe buildings.</p>
              </div>
            </div>
            <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-100">
              <h3 className="font-bold text-brand-dark mb-4 flex items-center gap-2"><BookOpen size={18} className="text-yellow-600" /> Education Crisis in Northeast Nigeria</h3>
              <ul className="space-y-3">
                {['Over 1 million children out of school in the region', '1,000+ schools damaged, destroyed, or unusable', 'Girls twice as likely to be out of school as boys', 'Acute teacher shortage in conflict-affected LGAs', 'Many children traumatized, unable to focus on learning', 'Early marriage pulls girls out of education permanently'].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-yellow-500 flex-shrink-0 mt-0.5" />{item}
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
            <h2 className="section-heading">Education Solutions We Deliver</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {interventions.map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:border-yellow-200 hover:shadow-md transition-all group">
                <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-yellow-100 transition-colors">
                  <BookOpen size={18} className="text-yellow-600" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-yellow-600 text-white">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold font-serif mb-3">Invest in a Child&apos;s Future</h2>
          <p className="text-yellow-100 mb-6 max-w-lg mx-auto">$100 can provide a child with school supplies, uniforms, and learning materials for a full school year. Donate today.</p>
          <Link href="/get-involved#donate" className="inline-flex items-center gap-2 bg-white text-yellow-700 font-bold px-8 py-3 rounded-lg hover:bg-yellow-50 transition-colors shadow-md">
            Donate to Education Programs <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
