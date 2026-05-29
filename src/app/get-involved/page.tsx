'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Briefcase, Handshake, GraduationCap, ArrowRight, CheckCircle, CreditCard, Phone, Mail } from 'lucide-react';

const impactAmounts = [
  { amount: 25, impact: 'Provides RUTF for one malnourished child for 2 weeks' },
  { amount: 50, impact: 'Covers a full SAM treatment course for one child' },
  { amount: 75, impact: 'Feeds a family of 5 for one full month' },
  { amount: 100, impact: 'School supplies & uniform for one girl for a year' },
  { amount: 250, impact: 'Installs one hygiene promotion kit for 50 families' },
  { amount: 500, impact: 'Funds a community health worker for 3 months' },
];

const volunteerRoles = [
  { title: 'Field Program Officer', sector: 'Various', location: 'Maiduguri / Yola', type: 'Full-time Volunteer' },
  { title: 'MEAL Volunteer', sector: 'M&E', location: 'Maiduguri, Borno', type: 'Part-time' },
  { title: 'Communications & Media', sector: 'Communications', location: 'Remote + Field', type: 'Part-time' },
  { title: 'Medical Volunteer (Doctor/Nurse)', sector: 'Health', location: 'Borno / Adamawa', type: 'Full-time' },
];

const careers = [
  { title: 'Nutrition Program Manager', location: 'Maiduguri, Borno', type: 'Full-time', deadline: 'June 30, 2024', sector: 'Nutrition' },
  { title: 'WASH Engineer', location: 'Yola, Adamawa', type: 'Full-time', deadline: 'June 20, 2024', sector: 'WASH' },
  { title: 'GBV Case Manager (Female)', location: 'Maiduguri, Borno', type: 'Full-time', deadline: 'June 25, 2024', sector: 'Protection' },
  { title: 'Finance & Grants Officer', location: 'Maiduguri, Borno', type: 'Full-time', deadline: 'July 5, 2024', sector: 'Finance' },
  { title: 'Community Education Facilitator', location: 'Damaturu, Yobe', type: 'Contract', deadline: 'June 28, 2024', sector: 'Education' },
];

export default function GetInvolvedPage() {
  const [selectedAmount, setSelectedAmount] = useState(75);
  const [customAmount, setCustomAmount] = useState('');
  const [volunteerForm, setVolunteerForm] = useState({ name: '', email: '', phone: '', expertise: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-brand-blue overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1920&h=600&auto=format&fit=crop" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 container-site text-center">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">Take Action</p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white font-serif mb-5">
            Make a Difference Today
          </h1>
          <p className="text-blue-200 max-w-2xl mx-auto text-lg">
            Whether you donate, volunteer, partner with us, or join our team — every action saves lives and transforms communities across Northeast Nigeria.
          </p>
          <div className="flex justify-center gap-3 mt-8 flex-wrap">
            {['Donate', 'Volunteer', 'Partner', 'Careers'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE */}
      <section id="donate" className="py-20 bg-white scroll-mt-24">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-subheading">Give Now</p>
              <h2 className="section-heading mb-4">Your Donation Saves Lives</h2>
              <div className="divider-orange mb-5" />
              <p className="text-gray-600 mb-6">Every dollar you donate goes directly to life-saving programs. Here&apos;s what your donation can achieve:</p>
              <ul className="space-y-3 mb-8">
                {impactAmounts.slice(0, 4).map((item) => (
                  <li key={item.amount} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-brand-green flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700"><strong className="text-brand-blue">${item.amount}</strong> — {item.impact}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                <p className="text-xs text-gray-500 flex items-center gap-2">
                  <CheckCircle size={14} className="text-brand-green" />
                  100% of your donation goes directly to programs. Administrative costs are covered by unrestricted grants.
                </p>
              </div>
            </div>

            {/* Donation form */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
              <h3 className="font-bold text-brand-dark text-xl mb-6 font-serif">Select Donation Amount</h3>
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[25, 50, 75, 100, 250, 500].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => { setSelectedAmount(amount); setCustomAmount(''); }}
                    className={`py-3 rounded-xl text-sm font-bold border-2 transition-all ${selectedAmount === amount && !customAmount ? 'bg-brand-blue border-brand-blue text-white' : 'border-gray-200 text-gray-700 hover:border-brand-blue hover:text-brand-blue'}`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="mb-5">
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold">$</span>
                  <input
                    type="number"
                    placeholder="Custom amount"
                    value={customAmount}
                    onChange={(e) => { setCustomAmount(e.target.value); setSelectedAmount(0); }}
                    className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-transparent"
                    min="5"
                  />
                </div>
              </div>
              {(selectedAmount > 0 || customAmount) && (
                <div className="bg-brand-blue-light rounded-xl p-3 mb-5">
                  <p className="text-brand-blue text-xs font-medium">
                    💙 ${customAmount || selectedAmount} will {impactAmounts.find(i => i.amount === (customAmount ? parseInt(customAmount) : selectedAmount))?.impact || 'fund life-saving humanitarian programs'}.
                  </p>
                </div>
              )}
              <div className="space-y-3 mb-5">
                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 border-2 border-brand-blue text-brand-blue text-sm font-semibold rounded-xl hover:bg-brand-blue hover:text-white transition-all">
                    One-Time Gift
                  </button>
                  <button className="flex-1 py-2.5 border-2 border-gray-200 text-gray-600 text-sm font-semibold rounded-xl hover:border-brand-green hover:text-brand-green transition-all">
                    Monthly Gift
                  </button>
                </div>
              </div>
              <button className="w-full btn-primary justify-center text-base py-4">
                <CreditCard size={18} /> Donate ${customAmount || selectedAmount || '...'} Securely
              </button>
              <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
                🔒 Secure payment · Receipts issued · Tax deductible
              </p>
              <div className="border-t border-gray-100 mt-4 pt-4">
                <p className="text-xs text-gray-500 mb-2 font-medium">Other ways to give:</p>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <a href="tel:+2348012345678" className="flex items-center gap-1 hover:text-brand-blue"><Phone size={11} /> Call Us</a>
                  <a href="mailto:donate@haskeinitiative.org" className="flex items-center gap-1 hover:text-brand-blue"><Mail size={11} /> Email Us</a>
                  <span className="flex items-center gap-1">Bank Transfer Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOLUNTEER */}
      <section id="volunteer" className="py-20 bg-gray-50 scroll-mt-24">
        <div className="container-site">
          <div className="text-center max-w-xl mx-auto mb-12">
            <p className="section-subheading">Give Your Time</p>
            <h2 className="section-heading mb-3">Volunteer With HHAI</h2>
            <p className="text-gray-600 text-sm">Share your skills, expertise, and passion with communities that need it most across Northeast Nigeria.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Open roles */}
            <div>
              <h3 className="font-bold text-brand-dark mb-4">Open Volunteer Positions</h3>
              <div className="space-y-3">
                {volunteerRoles.map((role) => (
                  <div key={role.title} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-between gap-3 shadow-sm hover:border-brand-green hover:shadow-md transition-all">
                    <div>
                      <h4 className="font-semibold text-brand-dark text-sm">{role.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{role.sector} · {role.location} · {role.type}</p>
                    </div>
                    <button className="flex-shrink-0 text-xs font-semibold text-brand-green border border-brand-green px-3 py-1.5 rounded-lg hover:bg-brand-green hover:text-white transition-colors">
                      Apply
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Volunteer form */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-brand-dark mb-5">Express Interest in Volunteering</h3>
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="text-brand-green mx-auto mb-3" />
                  <h4 className="font-bold text-brand-dark text-lg mb-2">Thank You!</h4>
                  <p className="text-gray-600 text-sm">We&apos;ve received your volunteer application and will be in touch within 5–7 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleVolunteerSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Full Name *</label>
                      <input type="text" required className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 mb-1">Email *</label>
                      <input type="email" required className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Professional Background *</label>
                    <select className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white">
                      <option value="">Select your field...</option>
                      <option>Healthcare (Doctor / Nurse / Public Health)</option>
                      <option>WASH Engineering</option>
                      <option>Nutrition / Dietetics</option>
                      <option>Education / Teaching</option>
                      <option>Monitoring & Evaluation</option>
                      <option>Finance & Administration</option>
                      <option>Communications & Media</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 mb-1">Why do you want to volunteer?</label>
                    <textarea rows={4} className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none" placeholder="Tell us about your motivation and relevant experience..." />
                  </div>
                  <button type="submit" className="w-full btn-primary justify-center">
                    <Users size={16} /> Submit Volunteer Application
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="py-20 bg-white scroll-mt-24">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="section-subheading">Partnerships</p>
              <h2 className="section-heading mb-4">Partner With HHAI</h2>
              <div className="divider-orange mb-5" />
              <p className="text-gray-600 mb-5">
                We actively seek partnerships with like-minded organizations, donors, UN agencies, and private sector actors committed to humanitarian action in Northeast Nigeria.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Handshake, title: 'Donor Partners', desc: 'Fund specific programs or provide unrestricted support to scale our reach.' },
                  { icon: Users, title: 'Implementation Partners', desc: 'Collaborate on joint programming, consortia projects, and complementary service delivery.' },
                  { icon: Briefcase, title: 'Private Sector', desc: 'CSR partnerships, in-kind donations, technical assistance, and co-investment in communities.' },
                  { icon: GraduationCap, title: 'Academic Partners', desc: 'Research collaboration, operational learning, and evidence-based program improvement.' },
                ].map((p) => (
                  <div key={p.title} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-brand-blue-light transition-colors group">
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue transition-colors">
                      <p.icon size={18} className="text-brand-blue group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-dark text-sm mb-0.5">{p.title}</h3>
                      <p className="text-gray-600 text-xs">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <a href="mailto:partnerships@haskeinitiative.org" className="btn-outline-blue">
                  Contact Our Partnerships Team <ArrowRight size={16} />
                </a>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
              <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&h=525&auto=format&fit=crop" alt="HHAI partnerships" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>

      {/* CAREERS */}
      <section id="careers" className="py-20 bg-gray-50 scroll-mt-24">
        <div className="container-site">
          <div className="text-center mb-12">
            <p className="section-subheading">Join Our Team</p>
            <h2 className="section-heading mb-3">Current Vacancies</h2>
            <p className="text-gray-600 text-sm max-w-lg mx-auto">
              HHAI offers meaningful career opportunities for humanitarian professionals committed to making a difference in Northeast Nigeria.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {careers.map((job) => (
              <div key={job.title} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:border-brand-blue hover:shadow-md transition-all group">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="tag-pill bg-brand-blue-light text-brand-blue font-semibold text-xs">{job.sector}</span>
                      <span className="tag-pill bg-gray-100 text-gray-600 font-medium text-xs">{job.type}</span>
                    </div>
                    <h3 className="font-bold text-brand-dark group-hover:text-brand-blue transition-colors">{job.title}</h3>
                    <p className="text-xs text-gray-500 mt-1">📍 {job.location} · Deadline: {job.deadline}</p>
                  </div>
                  <button className="flex-shrink-0 btn-primary text-sm py-2 px-4">Apply Now</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-sm text-gray-500">
              Don&apos;t see a fit? Send a speculative application to{' '}
              <a href="mailto:careers@haskeinitiative.org" className="text-brand-blue hover:underline font-medium">careers@haskeinitiative.org</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
