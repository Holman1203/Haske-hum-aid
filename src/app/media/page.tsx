import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, Video, FileText, ArrowRight, Calendar, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Media Center',
  description: 'News, photo galleries, videos, and press releases from HHAI\'s humanitarian operations across Northeast Nigeria.',
};

const news = [
  {
    title: 'HHAI Receives $2.5M USAID Grant for Emergency Nutrition Response in Borno State',
    date: 'May 15, 2024', category: 'Funding', categoryColor: 'bg-green-100 text-green-700',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=375&auto=format&fit=crop',
    excerpt: 'The 12-month USAID/BHA-funded grant will enable HHAI to treat 15,000 children with SAM and MAM across 8 LGAs in Borno State.',
  },
  {
    title: 'WASH Project Delivers Clean Water to 50,000 People in Maiduguri IDP Camps',
    date: 'April 28, 2024', category: 'WASH', categoryColor: 'bg-blue-100 text-blue-700',
    image: 'https://images.unsplash.com/photo-1534294668821-28a3054f4256?w=600&h=375&auto=format&fit=crop',
    excerpt: 'After 18 months of intensive WASH programming, HHAI has rehabilitated 28 boreholes serving over 50,000 IDP and host community residents.',
  },
  {
    title: "8,500 Girls Back in School Through HHAI's Girls Education Initiative in Adamawa",
    date: 'March 10, 2024', category: 'Education', categoryColor: 'bg-yellow-100 text-yellow-700',
    image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=600&h=375&auto=format&fit=crop',
    excerpt: 'Conditional scholarships, community mobilization, and TLS construction have reversed years of girls\' dropout rates in Adamawa State.',
  },
  {
    title: 'HHAI Launches Emergency Cash Transfer Program for 5,000 Displaced Families',
    date: 'February 22, 2024', category: 'Food Security', categoryColor: 'bg-purple-100 text-purple-700',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=375&auto=format&fit=crop',
    excerpt: 'WFP-funded multi-purpose cash assistance provides immediate relief to the most food-insecure households across Borno and Yobe States.',
  },
  {
    title: 'HHAI Wins National NGO Excellence Award for Humanitarian Innovation',
    date: 'January 15, 2024', category: 'Recognition', categoryColor: 'bg-purple-100 text-purple-700',
    image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=600&h=375&auto=format&fit=crop',
    excerpt: 'The award recognizes HHAI\'s innovative community-based nutrition program achieving a 96% SAM recovery rate — among the highest in Nigeria.',
  },
  {
    title: 'HHAI Joins UN Humanitarian Country Team Nigeria as Cluster Member',
    date: 'December 5, 2023', category: 'Partnership', categoryColor: 'bg-blue-100 text-blue-700',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=375&auto=format&fit=crop',
    excerpt: 'HHAI has been accepted as a full member of the WASH, Nutrition, and Protection Clusters in Northeast Nigeria, deepening its coordination role.',
  },
];

const photos = [
  { src: 'https://images.unsplash.com/photo-1547489432-cf93fa6c71ee?w=400&h=300&auto=format&fit=crop', caption: 'Nutrition screening, Dikwa IDP Camp' },
  { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=300&auto=format&fit=crop', caption: 'Mobile clinic, Jere LGA, Borno' },
  { src: 'https://images.unsplash.com/photo-1534294668821-28a3054f4256?w=400&h=300&auto=format&fit=crop', caption: 'Borehole rehabilitation, Adamawa' },
  { src: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&h=300&auto=format&fit=crop', caption: 'Girls education, Yola, Adamawa State' },
  { src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&auto=format&fit=crop', caption: 'Food distribution, Maiduguri' },
  { src: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=300&auto=format&fit=crop', caption: 'Protection safe space, Borno State' },
  { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&auto=format&fit=crop', caption: 'Community health worker training' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&auto=format&fit=crop', caption: 'Partner coordination meeting, Maiduguri' },
];

const pressReleases = [
  { title: 'HHAI Secures $2.5M Nutrition Grant from USAID/BHA', date: 'May 2024', size: '180 KB' },
  { title: 'Annual Report 2023: A Year of Impact', date: 'March 2024', size: '4.2 MB' },
  { title: 'HHAI Response Plan: Northeast Nigeria 2024–2025', date: 'January 2024', size: '2.8 MB' },
  { title: 'Emergency Fact Sheet: Borno State Humanitarian Crisis', date: 'December 2023', size: '340 KB' },
];

export default function MediaPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-dark to-[#2d3748] py-20 text-white">
        <div className="container-site text-center">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">Media Center</p>
          <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-5">News, Media & Resources</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Stay informed about HHAI&apos;s humanitarian response across Northeast Nigeria. Access our latest news, field photography, videos, and official documents.
          </p>
        </div>
      </section>

      {/* Tab navigation */}
      <div className="sticky top-[80px] z-20 bg-white border-b border-gray-100 shadow-sm">
        <div className="container-site flex gap-0 overflow-x-auto no-scrollbar">
          {[
            { label: 'News & Updates', icon: FileText, id: 'news' },
            { label: 'Photo Gallery', icon: Camera, id: 'gallery' },
            { label: 'Press Releases', icon: Download, id: 'press' },
          ].map((tab) => (
            <a key={tab.id} href={`#${tab.id}`} className="flex items-center gap-2 px-5 py-4 text-sm font-medium text-gray-600 hover:text-brand-blue border-b-2 border-transparent hover:border-brand-blue transition-all whitespace-nowrap">
              <tab.icon size={15} />
              {tab.label}
            </a>
          ))}
        </div>
      </div>

      {/* News */}
      <section id="news" className="py-16 bg-white scroll-mt-32">
        <div className="container-site">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="section-subheading">Latest Updates</p>
              <h2 className="section-heading">News & Field Stories</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article) => (
              <article key={article.title} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm card-hover">
                <div className="relative aspect-video overflow-hidden">
                  <Image src={article.image} alt={article.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  <div className="absolute top-3 left-3">
                    <span className={`tag-pill ${article.categoryColor} font-semibold text-xs`}>{article.category}</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
                    <Calendar size={11} /> {article.date}
                  </div>
                  <h3 className="font-bold text-brand-dark text-sm leading-snug mb-2 group-hover:text-brand-blue transition-colors">{article.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-3">{article.excerpt}</p>
                  <span className="text-brand-blue text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all group-hover:text-brand-orange">
                    Read Full Story <ArrowRight size={12} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="py-16 bg-gray-50 scroll-mt-32">
        <div className="container-site">
          <div className="mb-10">
            <p className="section-subheading">Photo Gallery</p>
            <h2 className="section-heading">From the Field</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {photos.map((photo, i) => (
              <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer shadow-sm hover:shadow-md">
                <Image src={photo.src} alt={photo.caption} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 50vw, 25vw" />
                <div className="absolute inset-0 bg-brand-blue/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <p className="text-white text-xs font-medium">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="btn-outline-blue">Load More Photos</button>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section id="press" className="py-16 bg-white scroll-mt-32">
        <div className="container-site">
          <div className="mb-10">
            <p className="section-subheading">Official Documents</p>
            <h2 className="section-heading">Press Releases & Publications</h2>
          </div>
          <div className="space-y-3 max-w-2xl">
            {pressReleases.map((pr) => (
              <a key={pr.title} href="#" className="flex items-center justify-between p-4 bg-gray-50 border border-gray-100 rounded-xl hover:border-brand-blue hover:bg-brand-blue-light transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-12 bg-red-50 border border-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 text-[10px] font-black">PDF</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-dark text-sm group-hover:text-brand-blue transition-colors">{pr.title}</h3>
                    <p className="text-gray-400 text-xs mt-0.5">{pr.date} · {pr.size}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-brand-blue text-xs font-semibold group-hover:text-brand-orange transition-colors flex-shrink-0 ml-4">
                  <Download size={14} /> Download
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Social media CTA */}
      <section className="py-12 bg-brand-blue text-white">
        <div className="container-site text-center">
          <h2 className="text-2xl font-bold font-serif mb-3">Follow Our Work</h2>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            Get real-time updates from our field teams across Northeast Nigeria on social media.
          </p>
          <div className="flex justify-center gap-3 flex-wrap">
            {['Facebook', 'Twitter/X', 'Instagram', 'LinkedIn', 'YouTube'].map((platform) => (
              <a key={platform} href="#" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors">
                {platform}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
