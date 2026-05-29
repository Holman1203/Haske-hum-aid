'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Filter, Users, Calendar, MapPin, ArrowRight } from 'lucide-react';

const sectors = ['All', 'Health', 'Protection', 'WASH', 'Nutrition', 'Education', 'Food Security & Livelihoods'];
const states = ['All States', 'Borno', 'Adamawa', 'Yobe'];

const projects = [
  {
    id: 1, title: 'Emergency Nutrition Response — Borno IDP Camps',
    sector: 'Nutrition', state: 'Borno', status: 'Ongoing', statusColor: 'bg-green-100 text-green-700',
    donor: 'USAID/BHA', period: 'Jan 2024 – Dec 2024', beneficiaries: '35,000',
    image: 'https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?w=400&h=250&auto=format&fit=crop',
    description: 'Treatment of SAM and MAM in children under five and PLW across Maiduguri, Jere, and Konduga LGAs.',
    sectorColor: 'bg-green-100 text-green-700',
  },
  {
    id: 2, title: 'WASH for Conflict-Affected Communities in Adamawa',
    sector: 'WASH', state: 'Adamawa', status: 'Ongoing', statusColor: 'bg-green-100 text-green-700',
    donor: 'EU / ECHO', period: 'Jul 2023 – Jun 2024', beneficiaries: '50,000',
    image: 'https://images.unsplash.com/photo-1534294668821-28a3054f4256?w=400&h=250&auto=format&fit=crop',
    description: 'Rehabilitation of 30 boreholes, construction of 120 latrines, and hygiene promotion across Yola North and South.',
    sectorColor: 'bg-blue-100 text-blue-700',
  },
  {
    id: 3, title: "Girls' Education Back-to-School Initiative — Adamawa",
    sector: 'Education', state: 'Adamawa', status: 'Ongoing', statusColor: 'bg-green-100 text-green-700',
    donor: 'UK Aid / FCDO', period: 'Sep 2023 – Aug 2025', beneficiaries: '8,500',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&h=250&auto=format&fit=crop',
    description: 'Enrollment drives, conditional scholarships, and TLS construction to restore access to education for girls in Adamawa State.',
    sectorColor: 'bg-yellow-100 text-yellow-700',
  },
  {
    id: 4, title: 'Primary Healthcare in Borno State IDP Camps',
    sector: 'Health', state: 'Borno', status: 'Ongoing', statusColor: 'bg-green-100 text-green-700',
    donor: 'ECHO / EU', period: 'Jan 2024 – Dec 2024', beneficiaries: '45,000',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&auto=format&fit=crop',
    description: 'Mobile health teams providing PHC, maternal health, and vaccination services in Maiduguri metro and Jere LGA camps.',
    sectorColor: 'bg-red-100 text-red-700',
  },
  {
    id: 5, title: 'Multi-Purpose Cash Transfer — Borno & Yobe',
    sector: 'Food Security & Livelihoods', state: 'Borno', status: 'Ongoing', statusColor: 'bg-green-100 text-green-700',
    donor: 'WFP / CERF', period: 'Mar 2024 – Feb 2025', beneficiaries: '15,000',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&auto=format&fit=crop',
    description: 'Monthly cash transfers targeting the most food-insecure IDP and host community households in Borno and Yobe States.',
    sectorColor: 'bg-purple-100 text-purple-700',
  },
  {
    id: 6, title: 'GBV Prevention & Response — Maiduguri IDP Camps',
    sector: 'Protection', state: 'Borno', status: 'Ongoing', statusColor: 'bg-green-100 text-green-700',
    donor: 'UNHCR', period: 'Jan 2024 – Dec 2024', beneficiaries: '12,000',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=250&auto=format&fit=crop',
    description: 'Safe spaces for women and girls, GBV case management, psychosocial support, and community protection mobilization in Borno State camps.',
    sectorColor: 'bg-purple-100 text-purple-700',
  },
  {
    id: 7, title: 'Cholera Outbreak Response — Borno State',
    sector: 'Health', state: 'Borno', status: 'Completed', statusColor: 'bg-blue-100 text-blue-700',
    donor: 'WHO / OCHA CHF', period: 'Mar 2023 – Aug 2023', beneficiaries: '12,500',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=250&auto=format&fit=crop',
    description: 'Rapid oral cholera vaccination, case management, ORS distribution, and WASH emergency response during the 2023 outbreak in Borno State.',
    sectorColor: 'bg-red-100 text-red-700',
  },
  {
    id: 8, title: 'Livelihood Recovery for Returnee Households — Yobe',
    sector: 'Food Security & Livelihoods', state: 'Yobe', status: 'Completed', statusColor: 'bg-blue-100 text-blue-700',
    donor: 'FAO / BMZ', period: 'Jan 2023 – Dec 2023', beneficiaries: '8,000',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=250&auto=format&fit=crop',
    description: 'Agricultural input vouchers, farmer field schools, and market linkage support for returnee households in Damaturu and Potiskum LGAs.',
    sectorColor: 'bg-purple-100 text-purple-700',
  },
  {
    id: 9, title: 'Child Protection Case Management — Adamawa & Borno',
    sector: 'Protection', state: 'Adamawa', status: 'Completed', statusColor: 'bg-blue-100 text-blue-700',
    donor: 'UNICEF', period: 'Apr 2022 – Mar 2023', beneficiaries: '6,200',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=250&auto=format&fit=crop',
    description: 'Case management, family tracing and reunification, and alternative care arrangements for unaccompanied and separated children.',
    sectorColor: 'bg-purple-100 text-purple-700',
  },
];

export default function ProjectsPage() {
  const [search, setSearch] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedState, setSelectedState] = useState('All States');

  const filtered = projects.filter((p) => {
    const matchSector = selectedSector === 'All' || p.sector === selectedSector;
    const matchState = selectedState === 'All States' || p.state === selectedState;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase());
    return matchSector && matchState && matchSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue to-[#1A7A3A] py-20 lg:py-24 text-white">
        <div className="container-site text-center">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
          <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-5">Project Portfolio</h1>
          <p className="text-green-200 max-w-2xl mx-auto text-lg mb-8">
            Browse HHAI&apos;s ongoing and completed projects across Northeast Nigeria. Filter by sector, state, or search for specific interventions.
          </p>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            {[{ v: '58+', l: 'Projects' }, { v: '3', l: 'States' }, { v: '450K+', l: 'Beneficiaries' }].map((s) => (
              <div key={s.l} className="bg-white/10 rounded-xl p-4">
                <div className="text-2xl font-black font-serif">{s.v}</div>
                <div className="text-blue-300 text-xs">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-[80px] z-30 bg-white border-b border-gray-100 shadow-sm py-4">
        <div className="container-site flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter size={14} className="text-gray-400" />
            <select
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white"
            >
              {sectors.map((s) => <option key={s}>{s}</option>)}
            </select>
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white"
            >
              {states.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-12 bg-gray-50 min-h-[400px]">
        <div className="container-site">
          <p className="text-gray-500 text-sm mb-6">
            Showing <span className="font-semibold text-brand-blue">{filtered.length}</span> of {projects.length} projects
          </p>
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Search size={40} className="mx-auto mb-3 opacity-30" />
              <p className="font-medium">No projects match your search.</p>
              <p className="text-sm mt-1">Try different keywords or clear your filters.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project) => (
                <article key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 card-hover group">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={project.image} alt={project.title} fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 flex gap-1.5">
                      <span className={`tag-pill ${project.sectorColor} text-xs font-semibold`}>{project.sector}</span>
                      <span className={`tag-pill ${project.statusColor} text-xs font-semibold`}>{project.status}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-brand-dark text-sm leading-snug mb-3 group-hover:text-brand-blue transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4 line-clamp-2">{project.description}</p>
                    <div className="space-y-1.5 text-xs text-gray-500">
                      <div className="flex items-center gap-1.5"><MapPin size={11} /> {project.state} State</div>
                      <div className="flex items-center gap-1.5"><Calendar size={11} /> {project.period}</div>
                      <div className="flex items-center gap-1.5"><Users size={11} /> {project.beneficiaries} beneficiaries</div>
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs text-gray-400 font-medium">Donor: {project.donor}</span>
                      <span className="text-brand-blue text-xs font-semibold flex items-center gap-1 group-hover:text-brand-orange transition-colors">
                        Details <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
