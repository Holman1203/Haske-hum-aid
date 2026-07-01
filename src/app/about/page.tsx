import type { Metadata } from 'next';
import RevealObserver from '@/components/ui/RevealObserver';

const GRAIN = 'var(--grain)';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Haske Humanitarian Aid Initiative (HHAI) is a government-registered, woman-led and youth-driven national NGO founded in 2022 — born from a conviction that no one should face crisis without dignity.',
};

const values = [
  { icon: '🤝', title: 'Human Dignity', desc: 'Every person we serve is met with respect, care and confidentiality.' },
  { icon: '🏘️', title: 'Community-Led', desc: 'Solutions are built with communities, not imposed upon them.' },
  { icon: '⚖️', title: 'Equity & Inclusion', desc: 'We prioritize women, youth and people with disabilities.' },
  { icon: '🔍', title: 'Accountability', desc: 'Transparent, measurable impact for the people and donors we serve.' },
];

const team = [
  { initial: 'A', name: 'Executive Director', role: 'Founder · Woman-led' },
  { initial: 'P', name: 'Programs Director', role: 'Operations & Delivery' },
  { initial: 'M', name: 'MEAL Lead', role: 'Monitoring & Evaluation' },
  { initial: 'C', name: 'Community Lead', role: 'Engagement & Advocacy' },
];

export default function AboutPage() {
  return (
    <main id="main-content">
      <RevealObserver />

      <section style={{ padding: 'clamp(48px,6vw,70px) clamp(18px,5vw,64px) clamp(40px,5vw,70px)', background: '#fff' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: '#9966CC',
              marginBottom: 18,
            }}
          >
            About us
          </div>
          <h1 style={{ fontSize: 'clamp(38px,6vw,76px)', fontWeight: 800, letterSpacing: '-.035em', maxWidth: '16ch' }}>
            A woman-led movement for human dignity.
          </h1>
          <p style={{ fontSize: 'clamp(17px,1.6vw,21px)', color: '#4a4258', maxWidth: 680, marginTop: 24, lineHeight: 1.55 }}>
            Haske Humanitarian Aid Initiative (HHAI) is a government-registered, woman-led and youth-driven national NGO
            founded in 2022 — born from a conviction that no one should face crisis without dignity.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section style={{ padding: 'clamp(48px,6vw,90px) clamp(18px,5vw,64px)' }}>
        <div
          style={{
            maxWidth: 1080,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))',
            gap: 24,
          }}
        >
          <div data-reveal style={{ borderRadius: 20, padding: 34, background: '#fff', border: '1px solid rgba(28,22,38,.09)' }}>
            <div
              style={{
                width: 54,
                height: 54,
                borderRadius: 15,
                background: '#F4EEFB',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 26,
                marginBottom: 20,
              }}
            >
              🎯
            </div>
            <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>Our mission</h3>
            <p style={{ fontSize: 15.5, color: '#6b6478', lineHeight: 1.6 }}>
              To save lives and alleviate the suffering of the most vulnerable — children, young people, women and people
              with disabilities — and to uphold human dignity during and after man-made crises and natural disasters.
            </p>
          </div>
          <div
            data-reveal
            style={{
              borderRadius: 20,
              padding: 34,
              background: 'linear-gradient(160deg,#9966CC,#4B2E83)',
              color: '#fff',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', inset: 0, backgroundImage: GRAIN, mixBlendMode: 'overlay', opacity: 0.35 }} />
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: 15,
                  background: 'rgba(255,255,255,.16)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 26,
                  marginBottom: 20,
                }}
              >
                🌅
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12, color: '#fff' }}>Our vision</h3>
              <p style={{ fontSize: 15.5, color: 'rgba(255,255,255,.85)', lineHeight: 1.6 }}>
                Resilient, self-reliant communities where every person — regardless of gender, age or ability — lives
                free from violence and with equal opportunity to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: 'clamp(40px,5vw,80px) clamp(18px,5vw,64px)' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <h2 data-reveal style={{ fontSize: 'clamp(28px,3.8vw,44px)', fontWeight: 800, marginBottom: 36 }}>
            What we stand for
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 20 }}>
            {values.map((v) => (
              <div
                key={v.title}
                data-reveal
                style={{ borderRadius: 18, padding: 26, background: '#fff', border: '1px solid rgba(28,22,38,.09)' }}
              >
                <div style={{ fontSize: 30, marginBottom: 14 }}>{v.icon}</div>
                <h4 style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>{v.title}</h4>
                <p style={{ fontSize: 14, color: '#6b6478', lineHeight: 1.55 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: 'clamp(48px,6vw,90px) clamp(18px,5vw,64px)', background: '#fff' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div data-reveal style={{ marginBottom: 36 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: '#9966CC',
                marginBottom: 12,
              }}
            >
              Our people
            </div>
            <h2 style={{ fontSize: 'clamp(28px,3.8vw,44px)', fontWeight: 800 }}>Led by women. Powered by youth.</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 22 }}>
            {team.map((t) => (
              <div key={t.name} data-reveal>
                <div
                  style={{
                    borderRadius: 18,
                    aspectRatio: '1 / 1',
                    background: 'linear-gradient(150deg,#9966CC,#4B2E83)',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 14,
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, backgroundImage: GRAIN, mixBlendMode: 'overlay', opacity: 0.4 }} />
                  <span style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: 46, color: 'rgba(255,255,255,.85)' }}>
                    {t.initial}
                  </span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 17 }}>{t.name}</div>
                <div style={{ fontSize: 13.5, color: '#9966CC', fontWeight: 600 }}>{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
