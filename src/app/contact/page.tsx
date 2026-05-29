'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';


const offices = [
  {
    name: 'Head Office — Adamawa',
    address: 'No. 23 Kofara Upper Agric Quarters, Jimeta-Yola North, Adamawa State, Nigeria',
    phone: '+234 706 760 4582',
    email: 'haskehumanitarianaidinitiative@gmail.com',
    hours: 'Mon–Fri: 8:00 AM – 5:00 PM',
    primary: true,
  },
  {
    name: 'Bauchi State Office',
    address: 'House No. 4, Justice Quarters, Old GRA, Bauchi, Bauchi State, Nigeria',
    phone: '+234 703 723 4399',
    email: 'haskehumanitarianaidinitiative@gmail.com',
    hours: 'Mon–Fri: 8:00 AM – 5:00 PM',
    primary: false,
  },
];

const departments = [
  { label: 'General Inquiries', value: 'general' },
  { label: 'Donor / Funding Inquiries', value: 'funding' },
  { label: 'Partnership Opportunities', value: 'partnership' },
  { label: 'Media & Press', value: 'media' },
  { label: 'Volunteer & Careers', value: 'careers' },
  { label: 'Beneficiary Feedback / Complaint', value: 'feedback' },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', org: '', email: '', phone: '', department: 'general', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-blue to-[#1A7A3A] py-20 text-white">
        <div className="container-site text-center">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-3">Reach Us</p>
          <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-5">Contact HHAI</h1>
          <p className="text-green-200 max-w-xl mx-auto text-lg">
            Whether you&apos;re a donor, partner, journalist, or community member — we&apos;re here to help. Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Quick contact cards */}
      <section className="py-10 bg-white border-b border-gray-100">
        <div className="container-site">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { icon: Phone, title: 'Call Us', value: '+234 706 760 4582', sub: 'Mon–Fri, 8AM–5PM WAT', href: 'tel:+2347067604582' },
              { icon: Mail, title: 'Email Us', value: 'haskehumanitarianaidinitiative@gmail.com', sub: 'We reply within 24 hours', href: 'mailto:haskehumanitarianaidinitiative@gmail.com' },
              { icon: MapPin, title: 'Visit Us', value: 'Jimeta-Yola, Adamawa State', sub: 'No. 23 Kofara Upper Agric Quarters', href: '#offices' },
            ].map((item) => (
              <a key={item.title} href={item.href} className="flex items-center gap-4 p-5 bg-brand-blue-light rounded-2xl hover:bg-blue-100 transition-colors group">
                <div className="w-12 h-12 bg-brand-blue rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue-mid transition-colors shadow-sm">
                  <item.icon size={22} className="text-white" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-medium">{item.title}</div>
                  <div className="font-bold text-brand-blue text-sm">{item.value}</div>
                  <div className="text-xs text-gray-400">{item.sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 bg-gray-50">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <h2 className="text-2xl font-bold text-brand-dark font-serif mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-white border border-green-100 rounded-2xl p-10 text-center shadow-sm">
                  <CheckCircle size={56} className="text-brand-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-brand-dark font-serif mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. Our team will respond to you within <strong>1–2 business days</strong>.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="mt-5 text-brand-blue text-sm font-semibold hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name *</label>
                      <input type="text" required placeholder="Your full name" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Organization</label>
                      <input type="text" placeholder="Your organization (optional)" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email Address *</label>
                      <input type="email" required placeholder="your@email.com" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1.5">Phone Number</label>
                      <input type="tel" placeholder="+234 XXX XXX XXXX" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Inquiry Type *</label>
                    <select required className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue bg-white">
                      <option value="">Select inquiry type...</option>
                      {departments.map((d) => <option key={d.value} value={d.value}>{d.label}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Subject *</label>
                    <input type="text" required placeholder="Brief subject of your message" className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1.5">Message *</label>
                    <textarea required rows={5} placeholder="Write your message here..." className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue resize-none" />
                  </div>
                  <div className="flex items-start gap-2">
                    <input type="checkbox" id="consent" required className="mt-0.5 accent-brand-blue" />
                    <label htmlFor="consent" className="text-xs text-gray-600">
                      I consent to HHAI processing my personal data in accordance with the{' '}
                      <a href="/privacy-policy" className="text-brand-blue hover:underline">Privacy Policy</a>.
                    </label>
                  </div>
                  <button type="submit" className="w-full btn-primary justify-center text-base py-4">
                    <Send size={18} /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map + Offices */}
            <div className="lg:col-span-2 space-y-5">
              {/* Map embed */}
              <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-gray-200 aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62977.17!2d12.4603!3d9.2035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10ebbe5cc7e67b35%3A0x8f43e8c3a5a32c1b!2sJimeta%2C%20Yola%2C%20Adamawa%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HHAI Adamawa Office Location — Jimeta-Yola"
                />
              </div>

              {/* Offices */}
              <div id="offices" className="space-y-4 scroll-mt-24">
                {offices.map((office) => (
                  <div key={office.name} className={`bg-white rounded-xl p-5 border shadow-sm ${office.primary ? 'border-brand-blue' : 'border-gray-100'}`}>
                    {office.primary && (
                      <span className="tag-pill bg-brand-blue text-white text-[10px] font-bold mb-2">Headquarters</span>
                    )}
                    <h3 className="font-bold text-brand-dark text-sm mt-1">{office.name}</h3>
                    <div className="space-y-1.5 mt-3 text-xs text-gray-600">
                      <div className="flex items-start gap-2"><MapPin size={12} className="text-brand-orange mt-0.5 flex-shrink-0" />{office.address}</div>
                      <div className="flex items-center gap-2"><Phone size={12} className="text-brand-orange flex-shrink-0" /><a href={`tel:${office.phone}`} className="hover:text-brand-blue">{office.phone}</a></div>
                      <div className="flex items-center gap-2"><Mail size={12} className="text-brand-orange flex-shrink-0" /><a href={`mailto:${office.email}`} className="hover:text-brand-blue">{office.email}</a></div>
                      <div className="flex items-center gap-2"><Clock size={12} className="text-brand-orange flex-shrink-0" />{office.hours}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
                <h3 className="font-bold text-brand-dark text-sm mb-4">Follow HHAI on Social Media</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { icon: Facebook, name: 'Facebook', handle: '@HaskeInitiative', href: '#', color: 'bg-blue-600' },
                    { icon: Twitter, name: 'Twitter/X', handle: '@HaskeInit', href: '#', color: 'bg-black' },
                    { icon: Linkedin, name: 'LinkedIn', handle: 'HHAI', href: '#', color: 'bg-blue-700' },
                    { icon: Instagram, name: 'Instagram', handle: '@haskeinitiative', href: '#', color: 'bg-gradient-to-br from-purple-600 to-pink-500' },
                  ].map((s) => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2.5 p-2.5 rounded-lg border border-gray-100 hover:border-gray-200 hover:bg-gray-50 transition-all group"
                    >
                      <div className={`w-8 h-8 ${s.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <s.icon size={15} className="text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-brand-dark">{s.name}</div>
                        <div className="text-[10px] text-gray-400">{s.handle}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accountability notice */}
      <section className="py-10 bg-brand-green-light border-t border-green-100">
        <div className="container-site">
          <div className="flex items-start gap-4 max-w-2xl">
            <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center flex-shrink-0">
              <CheckCircle size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-bold text-brand-dark mb-1">Beneficiary Feedback & Complaints</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                HHAI is committed to accountability to affected people. If you are a beneficiary with feedback or a complaint about our programs or staff, please contact us at{' '}
                <a href="mailto:haskehumanitarianaidinitiative@gmail.com" className="text-brand-blue font-semibold hover:underline">haskehumanitarianaidinitiative@gmail.com</a>{' '}
                or call us on: <a href="tel:+2347067604582" className="text-brand-blue font-semibold hover:underline">+234 706 760 4582</a>. All feedback is handled with confidentiality and respect.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
