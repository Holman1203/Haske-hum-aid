import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube, ArrowRight } from 'lucide-react';

const programs = [
  { name: 'Health', href: '/programs/health' },
  { name: 'Protection', href: '/programs/protection' },
  { name: 'WASH', href: '/programs/wash' },
  { name: 'Nutrition', href: '/programs/nutrition' },
  { name: 'Education', href: '/programs/education' },
  { name: 'Food Security & Livelihoods', href: '/programs/food-security' },
];

const quickLinks = [
  { name: 'About HHAI', href: '/about' },
  { name: 'Our Projects', href: '/projects' },
  { name: 'Media Center', href: '/media' },
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Careers', href: '/get-involved#careers' },
  { name: 'Contact Us', href: '/contact' },
];

const social = [
  { name: 'Facebook', href: 'https://facebook.com/haskeinitiative', icon: Facebook },
  { name: 'Twitter/X', href: 'https://twitter.com/HaskeInitiative', icon: Twitter },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/haske-humanitarian-aid-initiative', icon: Linkedin },
  { name: 'Instagram', href: 'https://instagram.com/haskeinitiative', icon: Instagram },
  { name: 'YouTube', href: 'https://youtube.com/@haskeinitiative', icon: Youtube },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* CTA Band */}
      <div className="bg-brand-orange">
        <div className="container-site py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-white font-serif">Ready to Make a Difference?</h3>
              <p className="text-white/80 text-sm mt-1">
                Your support transforms lives across Northeast Nigeria.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="/get-involved#donate"
                className="inline-flex items-center gap-2 bg-white text-brand-orange font-bold px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors shadow-md"
              >
                Donate Now <ArrowRight size={16} />
              </Link>
              <Link
                href="/get-involved#partners"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-brand-orange transition-colors"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-site py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-5">
              <div className="w-24 h-24 relative flex-shrink-0">
                <Image
                  src="/images/hhai-logo.png"
                  alt="HHAI Logo"
                  fill
                  className="object-contain drop-shadow-md"
                  sizes="96px"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Building an enabling environment where women and children's health needs are prioritised, through community engagement and sustainable rural development across Nigeria since 2022.
            </p>
            <div className="space-y-2.5 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={14} className="text-brand-orange mt-0.5 flex-shrink-0" />
                <span>No. 23 Kofara Upper Agric Quarters,<br />Jimeta-Yola North, Adamawa State</span>
              </div>
              <a href="tel:+2347067604582" className="flex items-center gap-2.5 hover:text-brand-orange transition-colors">
                <Phone size={14} className="text-brand-orange flex-shrink-0" />
                +234 706 760 4582
              </a>
              <a href="mailto:haskehumanitarianaidinitiative@gmail.com" className="flex items-center gap-2.5 hover:text-brand-orange transition-colors">
                <Mail size={14} className="text-brand-orange flex-shrink-0" />
                haskehumanitarianaidinitiative@gmail.com
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5 border-l-2 border-brand-orange pl-3">
              Our Programs
            </h4>
            <ul className="space-y-2.5">
              {programs.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-gray-400 text-sm hover:text-brand-orange transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5 border-l-2 border-brand-orange pl-3">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 text-sm hover:text-brand-orange transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight size={12} className="text-brand-orange opacity-0 group-hover:opacity-100 transition-opacity -ml-4 group-hover:ml-0" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter + Social */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-5 border-l-2 border-brand-orange pl-3">
              Stay Connected
            </h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates from the field.
            </p>
            <form className="space-y-2" action="#">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
              />
              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-purple-700 text-white font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>

            <div className="mt-6">
              <p className="text-gray-500 text-xs uppercase tracking-wider mb-3">Follow Us</p>
              <div className="flex items-center gap-2">
                {social.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-8 h-8 bg-white/10 hover:bg-brand-orange rounded-lg flex items-center justify-center transition-colors group"
                  >
                    <s.icon size={15} className="text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Donor/partner bar */}
      <div className="border-t border-white/10">
        <div className="container-site py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">
            <p>
              Registered NGO in Nigeria | CAC No: 182258 | Adamawa &amp; Bauchi States | Est. 2022
            </p>
            <p className="text-center">
              Supported by:{' '}
              <span className="text-gray-400">USAID · ECHO · UNHCR · UNICEF · WFP · OCHA</span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black/30 border-t border-white/5">
        <div className="container-site py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative flex-shrink-0">
                <Image
                  src="/images/hhai-logo.png"
                  alt="HHAI"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <p>© {new Date().getFullYear()} Haske Humanitarian Aid Initiative (HHAI). All rights reserved.</p>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Use</Link>
              <Link href="/sitemap" className="hover:text-gray-400 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
