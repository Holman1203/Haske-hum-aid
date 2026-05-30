'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone, Mail, Search, Heart } from 'lucide-react';

const programs = [
  { name: 'Health', href: '/programs/health', icon: '🏥' },
  { name: 'Protection', href: '/programs/protection', icon: '🛡️' },
  { name: 'WASH', href: '/programs/wash', icon: '💧' },
  { name: 'Nutrition', href: '/programs/nutrition', icon: '🌱' },
  { name: 'Education', href: '/programs/education', icon: '📚' },
  { name: 'Food Security & Livelihoods', href: '/programs/food-security', icon: '🌾' },
];

const getInvolved = [
  { name: 'Volunteer', href: '/get-involved#volunteer' },
  { name: 'Partner With Us', href: '/get-involved#partners' },
  { name: 'Careers', href: '/get-involved#careers' },
  { name: 'Internships', href: '/get-involved#internships' },
  { name: 'Donate', href: '/get-involved#donate' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isGetInvolvedOpen, setIsGetInvolvedOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === '/';
  const isTransparent = isHomePage && !isScrolled;

  /** Returns className string for a desktop nav link with active indicator */
  const navCls = (href: string, exact = false) => {
    const active = exact ? pathname === href : pathname.startsWith(href);
    const base = 'px-3 py-2 text-sm font-medium transition-colors rounded-md';
    if (isTransparent) {
      return `${base} ${active ? 'bg-white/25 text-white font-semibold' : 'text-white hover:bg-white/15'}`;
    }
    return `${base} ${
      active
        ? 'text-brand-blue bg-brand-blue-light font-bold'
        : 'text-brand-dark hover:text-brand-blue hover:bg-brand-blue-light'
    }`;
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    // check immediately on mount (handles back-nav with restored scroll)
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsProgramsOpen(false);
    setIsGetInvolvedOpen(false);
  };

  return (
    <>
      {/* Top bar — hidden in transparent (hero) mode */}
      <div
        className={`text-xs py-2 hidden md:block transition-all duration-300 ${
          isTransparent
            ? 'opacity-0 pointer-events-none h-0 py-0 overflow-hidden'
            : 'bg-brand-blue text-white opacity-100'
        }`}
      >
        <div className="container-site flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+2347067604582" className="flex items-center gap-1.5 hover:text-brand-orange transition-colors">
              <Phone size={12} />
              +234 706 760 4582
            </a>
            <a href="mailto:haskehumanitarianaidinitiative@gmail.com" className="flex items-center gap-1.5 hover:text-brand-orange transition-colors">
              <Mail size={12} />
              haskehumanitarianaidinitiative@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-blue-200">Community Health &amp; Rural Development · Nigeria</span>
            <Link
              href="/get-involved#donate"
              className="bg-brand-orange hover:bg-purple-700 text-white px-4 py-1 rounded font-semibold transition-colors inline-flex items-center gap-1.5"
            >
              <Heart size={11} /> Donate Now
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-transparent backdrop-blur-none shadow-none mt-0'
            : isScrolled
            ? 'bg-white shadow-lg backdrop-blur-sm mt-0'
            : 'bg-white shadow-sm'
        }`}
        style={isTransparent ? {} : {}}
      >
        <div className="container-site">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" onClick={closeAll} className="flex items-center group">
              <div className={`w-12 h-12 lg:w-16 lg:h-16 relative flex-shrink-0 transition-all duration-300 ${isTransparent ? 'drop-shadow-xl' : ''}`}>
                <Image
                  src="/images/hhai-logo.png"
                  alt="HHAI Logo"
                  fill
                  className="object-contain drop-shadow-sm"
                  sizes="64px"
                  priority
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              <Link href="/" className={navCls('/', true)}>Home</Link>
              <Link href="/about" className={navCls('/about')}>About Us</Link>

              {/* Programs dropdown */}
              <div className="relative" onMouseLeave={() => setIsProgramsOpen(false)}>
                <button
                  onMouseEnter={() => setIsProgramsOpen(true)}
                  onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                  className={`flex items-center gap-1 ${navCls('/programs')}`}
                  aria-expanded={isProgramsOpen}
                >
                  Programs <ChevronDown size={14} className={`transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProgramsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {programs.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={() => setIsProgramsOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
                      >
                        <span>{p.icon}</span>
                        {p.name}
                      </Link>
                    ))}
                    <div className="border-t border-gray-100 mt-1 pt-1">
                      <Link
                        href="/programs"
                        onClick={() => setIsProgramsOpen(false)}
                        className="flex items-center gap-3 px-4 py-2.5 text-sm font-semibold text-brand-blue hover:bg-brand-blue-light transition-colors"
                      >
                        View All Programs →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link href="/projects" className={navCls('/projects')}>Projects</Link>
              <Link href="/media" className={navCls('/media')}>Media</Link>

              {/* Get Involved dropdown */}
              <div className="relative" onMouseLeave={() => setIsGetInvolvedOpen(false)}>
                <button
                  onMouseEnter={() => setIsGetInvolvedOpen(true)}
                  onClick={() => setIsGetInvolvedOpen(!isGetInvolvedOpen)}
                  className={`flex items-center gap-1 ${navCls('/get-involved')}`}
                  aria-expanded={isGetInvolvedOpen}
                >
                  Get Involved <ChevronDown size={14} className={`transition-transform ${isGetInvolvedOpen ? 'rotate-180' : ''}`} />
                </button>
                {isGetInvolvedOpen && (
                  <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {getInvolved.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsGetInvolvedOpen(false)}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-blue-light hover:text-brand-blue transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/contact" className={navCls('/contact')}>Contact</Link>
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2 rounded-md transition-colors ${isTransparent ? 'text-white hover:bg-white/15' : 'text-gray-600 hover:text-brand-blue hover:bg-brand-blue-light'}`}
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <Link
                href="/get-involved#donate"
                className={`hidden lg:inline-flex items-center gap-1.5 text-sm py-2 font-semibold px-5 rounded-lg transition-all duration-300 ${
                  isTransparent
                    ? 'border-2 border-white/70 text-white hover:bg-white hover:text-brand-blue'
                    : 'btn-primary'
                }`}
              >
                <Heart size={15} /> Donate Now
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 rounded-md transition-colors ${isTransparent ? 'text-white hover:bg-white/15' : 'text-gray-600 hover:text-brand-blue hover:bg-brand-blue-light'}`}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Search bar */}
          {searchOpen && (
            <div className="pb-3 border-t border-gray-100 pt-3">
              <div className="relative">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search programs, projects, news..."
                  className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                  autoFocus
                />
              </div>
            </div>
          )}
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white shadow-lg">
            <nav className="container-site py-4 space-y-1" aria-label="Mobile navigation">
              <Link href="/" onClick={closeAll} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-brand-blue-light hover:text-brand-blue rounded-lg transition-colors">
                Home
              </Link>
              <Link href="/about" onClick={closeAll} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-brand-blue-light hover:text-brand-blue rounded-lg transition-colors">
                About Us
              </Link>

              <div>
                <button
                  onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-brand-blue-light hover:text-brand-blue rounded-lg transition-colors"
                >
                  Programs
                  <ChevronDown size={14} className={`transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isProgramsOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {programs.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        onClick={closeAll}
                        className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-brand-blue transition-colors rounded-lg"
                      >
                        <span>{p.icon}</span> {p.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/projects" onClick={closeAll} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-brand-blue-light hover:text-brand-blue rounded-lg transition-colors">
                Projects
              </Link>
              <Link href="/media" onClick={closeAll} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-brand-blue-light hover:text-brand-blue rounded-lg transition-colors">
                Media Center
              </Link>

              <div>
                <button
                  onClick={() => setIsGetInvolvedOpen(!isGetInvolvedOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-brand-blue-light hover:text-brand-blue rounded-lg transition-colors"
                >
                  Get Involved
                  <ChevronDown size={14} className={`transition-transform ${isGetInvolvedOpen ? 'rotate-180' : ''}`} />
                </button>
                {isGetInvolvedOpen && (
                  <div className="ml-4 mt-1 space-y-1">
                    {getInvolved.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeAll}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-brand-blue transition-colors rounded-lg"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/contact" onClick={closeAll} className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-brand-blue-light hover:text-brand-blue rounded-lg transition-colors">
                Contact
              </Link>

              <div className="pt-2 px-4">
                <Link href="/get-involved#donate" onClick={closeAll} className="btn-primary w-full justify-center inline-flex items-center gap-2">
                  <Heart size={16} /> Donate Now
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
