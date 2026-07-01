'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/ui/Logo';
import { useQuickExit } from '@/components/layout/QuickExit';

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/what-we-do', label: 'What We Do' },
  { href: '/get-involved', label: 'Get Involved' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileNav, setMobileNav] = useState(false);
  const pathname = usePathname();
  const { activate } = useQuickExit();

  const close = () => setMobileNav(false);

  return (
    <>
      {/* Safety utility bar — scrolls away with the page; only the nav below stays sticky. */}
      <div style={{ background: 'var(--ink-deep)', color: 'rgba(255,255,255,.82)' }}>
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            padding: '0 clamp(18px,5vw,64px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            height: 38,
            fontSize: 12,
            fontWeight: 500,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 9, minWidth: 0 }}>
            <span
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: 'var(--gold)',
                boxShadow: '0 0 0 4px rgba(232,169,59,.18)',
                flexShrink: 0,
              }}
            />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              24/7 Confidential GBV Helpline ·{' '}
              <a href="tel:08000001212" style={{ fontWeight: 600, color: '#fff' }}>
                0800-000-1212
              </a>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexShrink: 0 }}>
            <span style={{ opacity: 0.7 }}>EN · HA</span>
            <button
              onClick={activate}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(255,255,255,.1)',
                border: '1px solid rgba(255,255,255,.18)',
                color: '#fff',
                padding: '5px 11px',
                borderRadius: 7,
                fontSize: 11.5,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
              Quick exit
            </button>
          </div>
        </div>
      </div>

      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 200,
          background: 'rgba(41,22,65,.95)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255,255,255,.09)',
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            padding: '0 clamp(18px,5vw,64px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
            height: 70,
          }}
        >
          <Link href="/" onClick={close} style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
            <Logo size={40} />
            <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.05 }}>
              <span style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: 21, letterSpacing: '-.02em', color: '#fff' }}>
                Haske
              </span>
              <span
                style={{
                  fontSize: 8,
                  fontWeight: 600,
                  letterSpacing: '.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,.55)',
                  marginTop: 3,
                }}
              >
                Humanitarian Aid Initiative
              </span>
            </span>
          </Link>

          <nav className="nav-desktop" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {LINKS.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: active ? '#fff' : 'rgba(255,255,255,.72)',
                    paddingBottom: 3,
                    borderBottom: active ? '2px solid var(--gold)' : '2px solid transparent',
                  }}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 7,
                border: '1px solid rgba(255,255,255,.28)',
                padding: '9px 14px',
                borderRadius: 10,
                fontSize: 13,
                fontWeight: 600,
                color: '#fff',
                whiteSpace: 'nowrap',
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--gold)' }} />
              Get Help
            </Link>
            <Link
              href="/get-involved"
              style={{
                padding: '10px 18px',
                borderRadius: 10,
                fontSize: 13.5,
                fontWeight: 700,
                background: 'var(--gold)',
                color: '#3a2a06',
                whiteSpace: 'nowrap',
              }}
            >
              Donate
            </Link>
          </div>

          <button
            className="nav-burger"
            onClick={() => setMobileNav((v) => !v)}
            aria-label="Open menu"
            style={{
              display: 'none',
              width: 44,
              height: 44,
              borderRadius: 12,
              background: 'var(--gold)',
              color: '#3a2a06',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 20,
            }}
          >
            ☰
          </button>
        </div>
      </header>

      {mobileNav && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 199,
            background: 'rgba(28,22,38,.55)',
            backdropFilter: 'blur(4px)',
          }}
          onClick={close}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: 'min(82vw,340px)',
              background: 'var(--ink)',
              padding: '28px 28px 28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              boxShadow: '-20px 0 60px rgba(28,22,38,.25)',
            }}
          >
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={close}
                style={{
                  textAlign: 'left',
                  fontFamily: "'Bricolage Grotesque'",
                  fontWeight: 700,
                  fontSize: 24,
                  color: '#fff',
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(255,255,255,.1)',
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={close}
              style={{
                marginTop: 18,
                border: '1px solid rgba(255,255,255,.28)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 16,
                padding: 14,
                borderRadius: 14,
                textAlign: 'center',
              }}
            >
              Get Help
            </Link>
            <Link
              href="/get-involved"
              onClick={close}
              style={{
                marginTop: 10,
                background: 'var(--gold)',
                color: '#3a2a06',
                fontWeight: 700,
                fontSize: 17,
                padding: 15,
                borderRadius: 14,
                textAlign: 'center',
              }}
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
