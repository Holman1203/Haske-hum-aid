'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import Logo from '@/components/ui/Logo';
import { useQuickExit } from '@/components/layout/QuickExit';

interface NavChild {
  href: string;
  label: string;
}
interface NavItem {
  label: string;
  href?: string;
  children?: NavChild[];
}

const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About Us',
    children: [
      { href: '/about#who-we-are', label: 'Who We Are' },
      { href: '/about#team', label: 'Our Team' },
      { href: '/about#values', label: 'Our Core Values' },
    ],
  },
  {
    label: 'What We Do',
    children: [
      { href: '/what-we-do#protection', label: 'Protection' },
      { href: '/what-we-do#wash', label: 'WASH' },
      { href: '/what-we-do#education', label: 'Education' },
      { href: '/what-we-do#health', label: 'Health' },
      { href: '/what-we-do#livelihoods', label: 'Livelihoods & Resilience' },
      { href: '/what-we-do#advocacy', label: 'Advocacy & Gender Equality' },
    ],
  },
  {
    label: 'Get Involved',
    children: [
      { href: '/get-involved#careers', label: 'Career' },
      { href: '/get-involved#partnership', label: 'Partnership' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
];

/** Hash hrefs render as plain <a> — the client router swallows same-page hash navigation. */
function NavAnchor({
  href,
  children,
  onClick,
  style,
  className,
}: {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
  className?: string;
}) {
  return href.includes('#') ? (
    <a href={href} onClick={onClick} style={style} className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} onClick={onClick} style={style} className={className}>
      {children}
    </Link>
  );
}

export default function Header() {
  const [mobileNav, setMobileNav] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState<string | null>(null);
  const pathname = usePathname();
  const { activate } = useQuickExit();

  const close = () => {
    setMobileNav(false);
    setMobileOpen(null);
  };

  const isActive = (item: NavItem) => {
    if (item.href) return item.href === '/' ? pathname === '/' : pathname === item.href;
    return (item.children ?? []).some((c) => pathname === c.href.replace(/#.*$/, ''));
  };

  return (
    <>
      {/* Safety utility bar — scrolls away with the page; only the nav below stays sticky. */}
      <div style={{ background: 'var(--primary-darkest)', color: 'rgba(255,255,255,.82)' }}>
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 clamp(18px,4vw,48px)',
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
                background: 'var(--orange)',
                boxShadow: '0 0 0 4px rgba(247,148,29,.2)',
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
          background: 'rgba(75,46,131,.92)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: '1px solid rgba(255,255,255,.1)',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 clamp(18px,4vw,48px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 20,
            height: 72,
          }}
        >
          <Link href="/" onClick={close} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }} aria-label="Haske Humanitarian Aid Initiative — Home">
            <Logo size={50} />
          </Link>

          <nav className="nav-desktop" style={{ display: 'flex', gap: 26, alignItems: 'center' }}>
            {NAV.map((item) => {
              const active = isActive(item);
              const labelStyle = {
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
                fontSize: 14,
                fontWeight: 500,
                color: active ? '#fff' : 'rgba(255,255,255,.78)',
                paddingBottom: 3,
                borderBottom: active ? '2px solid var(--orange)' : '2px solid transparent',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
              } as const;

              if (!item.children) {
                return (
                  <Link key={item.label} href={item.href!} style={labelStyle}>
                    {item.label}
                  </Link>
                );
              }

              const open = openDropdown === item.label;
              return (
                <div
                  key={item.label}
                  style={{ position: 'relative', paddingBottom: 24, marginBottom: -24 }}
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown((cur) => (cur === item.label ? null : cur))}
                >
                  <span style={labelStyle} aria-haspopup="true" aria-expanded={open}>
                    {item.label}
                    <ChevronDown size={14} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s ease' }} />
                  </span>
                  {open && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 'calc(100% - 2px)',
                        left: -14,
                        minWidth: 240,
                        background: '#fff',
                        borderRadius: 14,
                        boxShadow: '0 24px 55px -18px rgba(46,27,71,.45)',
                        border: '1px solid var(--line)',
                        padding: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        animation: 'heroFadeUp .22s ease both',
                      }}
                    >
                      {item.children.map((c) => (
                        <NavAnchor
                          key={c.label}
                          href={c.href}
                          onClick={() => setOpenDropdown(null)}
                          style={{
                            padding: '11px 14px',
                            borderRadius: 9,
                            fontSize: 13.5,
                            fontWeight: 600,
                            color: 'var(--primary-deep)',
                          }}
                          className="drop-item"
                        >
                          {c.label}
                        </NavAnchor>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center' }}>
            <Link
              href="/get-involved"
              className="lift"
              style={{
                padding: '11px 22px',
                borderRadius: 10,
                fontSize: 13.5,
                fontWeight: 700,
                background: 'var(--orange)',
                color: '#fff',
                whiteSpace: 'nowrap',
                boxShadow: '0 8px 22px -8px rgba(247,148,29,.7)',
              }}
            >
              Donate Now
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
              background: 'var(--orange)',
              color: '#fff',
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
            background: 'rgba(46,27,71,.6)',
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
              background: 'var(--primary-deep)',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              boxShadow: '-20px 0 60px rgba(46,27,71,.4)',
              overflowY: 'auto',
            }}
          >
            {NAV.map((item) => {
              if (!item.children) {
                return (
                  <Link
                    key={item.label}
                    href={item.href!}
                    onClick={close}
                    style={{
                      fontFamily: "'Playfair Display',serif",
                      fontWeight: 700,
                      fontSize: 20,
                      color: '#fff',
                      padding: '14px 0',
                      borderBottom: '1px solid rgba(255,255,255,.12)',
                    }}
                  >
                    {item.label}
                  </Link>
                );
              }
              const open = mobileOpen === item.label;
              return (
                <div key={item.label} style={{ borderBottom: '1px solid rgba(255,255,255,.12)' }}>
                  <button
                    onClick={() => setMobileOpen(open ? null : item.label)}
                    aria-expanded={open}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontFamily: "'Playfair Display',serif",
                      fontWeight: 700,
                      fontSize: 20,
                      color: '#fff',
                      padding: '14px 0',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left',
                    }}
                  >
                    {item.label}
                    <ChevronDown size={18} style={{ transform: open ? 'rotate(180deg)' : 'none', transition: 'transform .2s ease' }} />
                  </button>
                  {open && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingBottom: 12 }}>
                      {item.children.map((c) => (
                        <NavAnchor
                          key={c.label}
                          href={c.href}
                          onClick={close}
                          style={{ padding: '9px 0 9px 14px', fontSize: 14.5, fontWeight: 500, color: 'rgba(255,255,255,.85)' }}
                        >
                          {c.label}
                        </NavAnchor>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <Link
              href="/get-involved"
              onClick={close}
              style={{
                marginTop: 20,
                background: 'var(--orange)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 16,
                padding: 15,
                borderRadius: 12,
                textAlign: 'center',
              }}
            >
              Donate Now
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
