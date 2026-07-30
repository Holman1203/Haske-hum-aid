'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/Logo';

const QUICK_LINKS = [
  { href: '/about', label: 'About Us' },
  { href: '/what-we-do', label: 'What We Do' },
  { href: '/#impact', label: 'Our Impact' },
  { href: '/projects', label: 'Projects' },
  { href: '/media', label: 'Media' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/contact', label: 'Contact' },
];

const SOCIALS = [
  {
    label: 'X (Twitter)',
    path: 'M18.244 2H21.5l-7.5 8.57L22.5 22h-6.6l-5.17-6.76L4.8 22H1.54l8.02-9.17L1.5 2h6.77l4.67 6.17L18.244 2Zm-1.16 18h1.8L7.02 3.9H5.09L17.084 20Z',
  },
  {
    label: 'Facebook',
    path: 'M13.5 9H16l.5-3h-3V4.2c0-.86.3-1.45 1.5-1.45H16.6V.1C16.27.06 15.2 0 13.96 0 11.36 0 9.6 1.57 9.6 4.45V6H7v3h2.6v9h3.9V9Z',
  },
  { label: 'Instagram', path: '' },
  {
    label: 'LinkedIn',
    path: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z',
  },
];

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer style={{ background: 'var(--primary-darkest)', color: 'rgba(255,255,255,.72)' }}>
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '60px clamp(18px,4vw,48px) 30px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(230px,1fr))',
          gap: 40,
        }}
      >
        <div>
          <div style={{ marginBottom: 16 }}>
            <Logo size={54} />
          </div>
          <p style={{ fontSize: 13.5, lineHeight: 1.7, color: 'rgba(255,255,255,.62)', maxWidth: 300 }}>
            Haske Humanitarian Aid Initiative is a Nigerian NGO transforming lives through health, nutrition,
            education, protection, livelihoods, WASH, and emergency response — restoring hope across Northern
            Nigeria.
          </p>
          <div style={{ display: 'flex', gap: 9, marginTop: 18 }}>
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: 9,
                  border: '1px solid rgba(255,255,255,.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {s.label === 'Instagram' ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5.5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#fff', marginBottom: 15 }}>
            Quick Links
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5 }}>
            {QUICK_LINKS.map((l) =>
              l.href.includes('#') ? (
                <a key={l.label} href={l.href} className="ulink" style={{ color: 'rgba(255,255,255,.72)', width: 'fit-content' }}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} href={l.href} className="ulink" style={{ color: 'rgba(255,255,255,.72)', width: 'fit-content' }}>
                  {l.label}
                </Link>
              )
            )}
          </div>
        </div>

        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#fff', marginBottom: 15 }}>
            Contact
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 13.5, lineHeight: 1.6 }}>
            <span>Maiduguri, Borno State, Nigeria</span>
            <a href="tel:+2348092255840" className="ulink" style={{ color: 'rgba(255,255,255,.72)', width: 'fit-content' }}>
              +234 809 225 5840
            </a>
            <a href="mailto:hr@haskeinitiative.org" className="ulink" style={{ color: 'rgba(255,255,255,.72)', width: 'fit-content' }}>
              hr@haskeinitiative.org
            </a>
            <a href="tel:08000001212" className="ulink" style={{ color: 'rgba(255,255,255,.72)', width: 'fit-content' }}>
              0800-000-1212 (24/7 GBV Helpline)
            </a>
            <span style={{ color: 'rgba(255,255,255,.5)', fontSize: 12.5 }}>Registered National NGO · Est. 2022</span>
          </div>
        </div>

        <div>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#fff', marginBottom: 15 }}>
            Newsletter
          </div>
          <p style={{ fontSize: 13, lineHeight: 1.6, color: 'rgba(255,255,255,.6)', marginBottom: 13 }}>
            Field stories and impact updates — never spam.
          </p>
          {subscribed ? (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 9,
                padding: '12px 14px',
                background: 'rgba(58,170,53,.14)',
                border: '1px solid rgba(58,170,53,.4)',
                borderRadius: 11,
                fontSize: 13,
                fontWeight: 600,
                color: 'var(--secondary)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--secondary)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              You&apos;re subscribed — thank you!
            </div>
          ) : (
            <form onSubmit={subscribe} style={{ display: 'flex', gap: 8 }}>
              <input
                type="email"
                required
                placeholder="you@email.com"
                style={{
                  flex: 1,
                  minWidth: 0,
                  height: 44,
                  padding: '0 13px',
                  borderRadius: 10,
                  border: '1px solid rgba(255,255,255,.2)',
                  background: 'rgba(255,255,255,.08)',
                  color: '#fff',
                  fontSize: 13,
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '0 16px',
                  borderRadius: 10,
                  background: 'var(--secondary)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 13,
                  whiteSpace: 'nowrap',
                }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,.1)' }}>
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '18px clamp(18px,4vw,48px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
            fontSize: 12,
            color: 'rgba(255,255,255,.5)',
          }}
        >
          <span>© 2026 Haske Humanitarian Aid Initiative · Registered NNGO, Nigeria</span>
          <span style={{ fontStyle: 'italic', fontFamily: "'Playfair Display',serif", fontSize: 13.5, color: 'rgba(255,255,255,.62)' }}>
            &ldquo;Haske&rdquo; means light in Hausa.
          </span>
          <span style={{ display: 'flex', gap: 18 }}>
            <a href="#" className="ulink">Privacy</a>
            <a href="#" className="ulink">Terms</a>
            <a href="#" className="ulink">Safeguarding</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
