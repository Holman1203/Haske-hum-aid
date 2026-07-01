import type { Metadata } from 'next';
import RevealObserver from '@/components/ui/RevealObserver';

const GRAIN = 'var(--grain)';

export const metadata: Metadata = {
  title: 'What We Do',
  description:
    'From prevention to recovery — our programs combine immediate humanitarian relief with long-term resilience: GBV prevention & response, WASH, humanitarian relief, and women & youth empowerment.',
};

const programs = [
  {
    icon: '🛡️',
    iconBg: '#F4EEFB',
    tag: 'Protection',
    title: 'GBV Prevention & Response',
    long: 'We work to eradicate gender-based violence through prevention — sensitization, awareness-raising and community engagement — and through response: survivor-centered medical services, referrals, and case management that restore safety and dignity.',
    chips: ['Sensitization', 'Medical care', 'Case management', 'Referrals'],
  },
  {
    icon: '💧',
    iconBg: '#E7F3FB',
    tag: 'WASH',
    title: 'Water, Sanitation & Hygiene',
    long: 'Clean water and dignified sanitation are lifelines. We deliver WASH services, hygiene promotion and infrastructure to internally displaced persons, returnees and the communities that host them.',
    chips: ['Clean water', 'Hygiene kits', 'Latrines', 'KAP surveys'],
  },
  {
    icon: '🏕️',
    iconBg: '#FFF1E0',
    tag: 'Emergency',
    title: 'Humanitarian Relief',
    long: 'When crisis strikes, we move fast — providing life-saving relief and protection to internally displaced persons, returnees and host communities, and strengthening preparedness for future shocks.',
    chips: ['IDPs', 'Returnees', 'Host communities'],
  },
  {
    icon: '🌱',
    iconBg: '#E9F6EE',
    tag: 'Empowerment',
    title: 'Women & Youth Empowerment',
    long: 'We advocate against deep-rooted gender inequalities and equip the most vulnerable with education, skills and livelihoods — building resilience and self-reliance for women, youth and people with disabilities.',
    chips: ['Advocacy', 'Skills & livelihoods', 'Education', 'Inclusion'],
  },
];

const approach = [
  { step: '1', title: 'Prevent', desc: 'Sensitization & awareness to stop violence before it starts.' },
  { step: '2', title: 'Protect', desc: 'Safe spaces, referrals and immediate response for those at risk.' },
  { step: '3', title: 'Restore', desc: 'Medical care, counseling and case management for survivors.' },
  { step: '4', title: 'Rebuild', desc: 'Livelihoods, education and advocacy for lasting resilience.' },
];

export default function WhatWeDoPage() {
  return (
    <main id="main-content">
      <RevealObserver />

      <section
        style={{
          padding: 'clamp(48px,6vw,70px) clamp(18px,5vw,64px) clamp(40px,5vw,70px)',
          background: 'linear-gradient(165deg,#2E1B47,#4B2E83)',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, backgroundImage: GRAIN, mixBlendMode: 'overlay', opacity: 0.35 }} />
        <div style={{ position: 'relative', maxWidth: 1000, margin: '0 auto' }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: '#FFCB6B',
              marginBottom: 18,
            }}
          >
            What we do
          </div>
          <h1 style={{ fontSize: 'clamp(38px,6vw,76px)', fontWeight: 800, letterSpacing: '-.035em', color: '#fff', maxWidth: '15ch' }}>
            From prevention to recovery — we walk the whole way.
          </h1>
          <p style={{ fontSize: 'clamp(17px,1.6vw,21px)', color: 'rgba(255,255,255,.8)', maxWidth: 660, marginTop: 24 }}>
            Our programs combine immediate humanitarian relief with long-term resilience — so communities don&apos;t just
            survive crisis, they recover with dignity.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section style={{ padding: 'clamp(40px,5vw,80px) clamp(18px,5vw,64px)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 22 }}>
          {programs.map((p) => (
            <div
              key={p.title}
              data-reveal
              className="stack-m"
              style={{
                display: 'flex',
                gap: 'clamp(20px,3vw,44px)',
                alignItems: 'flex-start',
                border: '1px solid rgba(28,22,38,.09)',
                borderRadius: 22,
                padding: 'clamp(24px,3vw,40px)',
                background: '#fff',
                flexWrap: 'wrap',
              }}
            >
              <div
                style={{
                  flex: '0 0 auto',
                  width: 72,
                  height: 72,
                  borderRadius: 18,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 34,
                  background: p.iconBg,
                }}
              >
                {p.icon}
              </div>
              <div style={{ flex: '1 1 320px', minWidth: 240 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: '.16em',
                    textTransform: 'uppercase',
                    color: '#9966CC',
                    marginBottom: 8,
                  }}
                >
                  {p.tag}
                </div>
                <h3 style={{ fontSize: 'clamp(24px,3vw,32px)', fontWeight: 800, marginBottom: 12 }}>{p.title}</h3>
                <p style={{ fontSize: 16, color: '#4a4258', lineHeight: 1.6, marginBottom: 16 }}>{p.long}</p>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {p.chips.map((c) => (
                    <span
                      key={c}
                      style={{
                        background: '#F4EEFB',
                        color: '#4B2E83',
                        fontSize: 13,
                        fontWeight: 600,
                        padding: '7px 14px',
                        borderRadius: 999,
                      }}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section style={{ padding: 'clamp(40px,5vw,80px) clamp(18px,5vw,64px)', background: '#fff' }}>
        <div data-reveal style={{ maxWidth: 1080, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px,3.8vw,44px)', fontWeight: 800, marginBottom: 14 }}>Our approach</h2>
          <p style={{ fontSize: 17, color: '#6b6478', maxWidth: 620, marginBottom: 40 }}>
            A continuum of care that meets people where they are.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 0 }}>
            {approach.map((a) => (
              <div key={a.step} style={{ padding: 24, borderLeft: '2px solid #EBDDF7', position: 'relative' }}>
                <div
                  style={{
                    fontFamily: "'Bricolage Grotesque'",
                    fontWeight: 800,
                    fontSize: 15,
                    color: '#fff',
                    width: 34,
                    height: 34,
                    borderRadius: '50%',
                    background: '#9966CC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 18,
                  }}
                >
                  {a.step}
                </div>
                <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{a.title}</h4>
                <p style={{ fontSize: 14, color: '#6b6478', lineHeight: 1.55 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
