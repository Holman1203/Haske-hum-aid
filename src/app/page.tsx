import Link from 'next/link';
import RevealObserver from '@/components/ui/RevealObserver';
import HomeStats from '@/components/home/HomeStats';
import DonateWidget from '@/components/home/DonateWidget';

const GRAIN = 'var(--grain)';

const programs = [
  {
    title: 'GBV Prevention & Response',
    desc: 'Sensitization and awareness to prevent gender-based violence; medical services, referral and case management for survivors.',
    path: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="M9.5 12.5c.8 1 1.7 1.5 2.5 1.5s1.7-.5 2.5-1.5" />
      </>
    ),
  },
  {
    title: 'Water, Sanitation & Hygiene',
    desc: 'Safe water and GBV-safe, do-no-harm WASH facilities that protect dignity and health in displacement settings.',
    path: <path d="M12 2.5S5.5 9.5 5.5 14a6.5 6.5 0 0 0 13 0c0-4.5-6.5-11.5-6.5-11.5Z" />,
  },
  {
    title: 'Education in Emergencies',
    desc: 'Safe, protective learning spaces for out-of-school, Almajiri and displaced children — keeping a generation in school.',
    path: (
      <>
        <path d="m3 8 9-4 9 4-9 4-9-4Z" />
        <path d="M7 10.5V15c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-4.5" />
        <path d="M21 8v5" />
      </>
    ),
  },
  {
    title: 'Health & Psychosocial Support',
    desc: 'Medical services, mental-health and psychosocial care, and protection referral pathways for those affected by crisis.',
    path: <path d="M3 12h4l2 5 4-10 2 5h6" />,
  },
  {
    title: 'Advocacy & Gender Equality',
    desc: 'Stakeholder campaigns against systemic inequality and barriers — promoting the rights of the most vulnerable.',
    path: <path d="M3 11l16-7-4 16-4-6-8-3Z" />,
  },
  {
    title: 'Livelihoods & Resilience',
    desc: 'Capacity-building and self-reliance for IDPs, returnees and host communities — building strength that lasts.',
    path: <path d="M12 22V12M12 12c0-3 1.5-5 4.5-5M12 12c0-3-1.5-5-4.5-5M12 8c0-2.5 2-4.5 4.5-4.5M12 8C12 5.5 10 3.5 7.5 3.5" />,
  },
];

const regions = [
  { name: 'Borno', pct: 92, color: 'var(--gold)' },
  { name: 'Adamawa', pct: 74, color: 'var(--gold)' },
  { name: 'Yobe', pct: 61, color: 'var(--gold)' },
  { name: 'Northwest Nigeria', pct: 43, color: '#9966CC' },
];

const partners = ['UNICEF', 'UNHCR', 'Min. of Humanitarian Affairs', 'Min. of Health', "Women's Affairs", 'CSO Networks'];

export default function HomePage() {
  return (
    <main id="main-content">
      <RevealObserver />

      {/* HERO */}
      <section style={{ position: 'relative', background: 'var(--ink)', overflow: 'hidden' }}>
        <div
          style={{
            position: 'absolute',
            top: -380,
            left: -120,
            width: 820,
            height: 820,
            background:
              'conic-gradient(from 0deg,rgba(232,169,59,.18),rgba(153,102,204,.02) 22%,rgba(153,102,204,0) 42%,rgba(232,169,59,.16) 76%,rgba(153,102,204,0))',
            borderRadius: '50%',
            animation: 'ray 90s linear infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -160,
            left: -30,
            width: 480,
            height: 480,
            background: 'radial-gradient(circle,rgba(232,169,59,.2),rgba(232,169,59,0) 70%)',
          }}
        />
        <div
          className="stack-m"
          style={{
            position: 'relative',
            zIndex: 1,
            maxWidth: 1240,
            margin: '0 auto',
            display: 'flex',
            gap: 48,
            alignItems: 'center',
            padding: 'clamp(48px,7vw,70px) clamp(18px,5vw,64px) clamp(56px,7vw,78px)',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ flex: '1 1 480px', minWidth: 280 }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                fontSize: 11.5,
                fontWeight: 600,
                letterSpacing: '.16em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--gold)' }} />
              Woman-led · Youth-driven · Est. 2022
            </span>
            <h1
              style={{
                fontSize: 'clamp(38px,5vw,64px)',
                lineHeight: 1,
                letterSpacing: '-.028em',
                color: '#fff',
                margin: '18px 0 0',
              }}
            >
              Bringing <span style={{ color: 'var(--gold)' }}>light</span> to communities in crisis.
            </h1>
            <p style={{ margin: '22px 0 0', maxWidth: 500, fontSize: 17, lineHeight: 1.62, color: 'rgba(255,255,255,.82)' }}>
              Haske Humanitarian Aid Initiative saves lives, restores dignity, and works to end gender-based violence
              alongside displaced and vulnerable communities across Northern Nigeria.
            </p>
            <div style={{ display: 'flex', gap: 13, marginTop: 30, flexWrap: 'wrap', alignItems: 'center' }}>
              <Link
                href="/get-involved"
                className="lift"
                style={{
                  height: 52,
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 26px',
                  borderRadius: 13,
                  background: 'var(--gold)',
                  color: '#3a2a06',
                  fontWeight: 700,
                  fontSize: 15.5,
                }}
              >
                Donate now
              </Link>
              <Link
                href="/what-we-do"
                style={{
                  height: 52,
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 22px',
                  borderRadius: 13,
                  border: '1px solid rgba(255,255,255,.32)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 15,
                }}
              >
                Explore our work
              </Link>
            </div>
            <div style={{ display: 'flex', gap: 30, marginTop: 42, flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: 36, color: '#fff', letterSpacing: '-.02em' }}>
                  12,000<span style={{ color: 'var(--gold)' }}>+</span>
                </div>
                <div style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,.6)', marginTop: 6 }}>people reached</div>
              </div>
              <div style={{ width: 1, background: 'rgba(255,255,255,.16)' }} />
              <div>
                <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: 36, color: '#fff', letterSpacing: '-.02em' }}>
                  4
                </div>
                <div style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,.6)', marginTop: 6 }}>states active</div>
              </div>
              <div style={{ width: 1, background: 'rgba(255,255,255,.16)' }} />
              <div>
                <div style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: 36, color: '#fff', letterSpacing: '-.02em' }}>
                  6
                </div>
                <div style={{ fontSize: 12, fontWeight: 500, color: 'rgba(255,255,255,.6)', marginTop: 6 }}>programs</div>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 360px', minWidth: 280, maxWidth: 420 }}>
            <DonateWidget />
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section style={{ background: 'var(--paper)' }}>
        <div
          className="stack-m"
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            padding: 'clamp(48px,6vw,64px) clamp(18px,5vw,64px)',
            display: 'flex',
            gap: 54,
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <div data-reveal style={{ flex: '1 1 340px', minWidth: 260 }}>
            <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#5d3a92' }}>
              Who we are
            </span>
            <h2 style={{ fontSize: 'clamp(28px,3vw,40px)', lineHeight: 1.1, letterSpacing: '-.02em', color: 'var(--ink)', margin: '14px 0 0' }}>
              A community-led response — from emergency relief to lasting resilience.
            </h2>
          </div>
          <div data-reveal style={{ flex: '1 1 420px', minWidth: 260 }}>
            <p style={{ fontSize: 16.5, lineHeight: 1.7, color: '#3d2459' }}>
              We are a government-registered, woman-led and youth-driven National NGO founded in 2022. Our mission is
              to save lives, alleviate suffering, and maintain human dignity for the most vulnerable — children,
              women, young people and persons with disabilities — during and after crises.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 22, flexWrap: 'wrap' }}>
              {[
                ['Prevention', '#9966CC'],
                ['Protection', 'var(--gold)'],
                ['Rehabilitation', '#5d3a92'],
                ['Resilience', 'var(--ink)'],
              ].map(([label, dot]) => (
                <span
                  key={label}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 7,
                    padding: '9px 14px',
                    background: '#fff',
                    border: '1px solid rgba(41,22,65,.12)',
                    borderRadius: 10,
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--ink)',
                  }}
                >
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: dot }} />
                  {label}
                </span>
              ))}
            </div>
            <Link
              href="/about"
              className="ulink"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 24, fontWeight: 700, fontSize: 14, color: '#5d3a92' }}
            >
              Read our story <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <HomeStats />

      {/* WHAT WE DO */}
      <section style={{ background: 'var(--paper)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(56px,6vw,70px) clamp(18px,5vw,64px)' }}>
          <div
            data-reveal
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 34 }}
          >
            <div>
              <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#5d3a92' }}>
                What we do
              </span>
              <h2 style={{ fontSize: 'clamp(28px,3vw,40px)', lineHeight: 1.1, letterSpacing: '-.02em', color: 'var(--ink)', margin: '13px 0 0' }}>
                Six ways we bring light
              </h2>
            </div>
            <Link href="/what-we-do" className="ulink" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 14, color: '#5d3a92' }}>
              All programs <span>→</span>
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 18 }}>
            {programs.map((p) => (
              <Link
                key={p.title}
                href="/what-we-do"
                data-reveal
                className="lift"
                style={{ display: 'block', background: '#fff', border: '1px solid rgba(41,22,65,.12)', borderRadius: 16, padding: 26 }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: '#f4eefb',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#5d3a92',
                  }}
                >
                  <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                    {p.path}
                  </svg>
                </span>
                <h3 style={{ fontSize: 18.5, color: 'var(--ink)', margin: '18px 0 0' }}>{p.title}</h3>
                <p style={{ fontSize: 13.5, lineHeight: 1.6, color: '#6c6480', margin: '9px 0 0', fontWeight: 400 }}>{p.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STORIES OF LIGHT */}
      <section style={{ background: '#fff', borderTop: '1px solid rgba(41,22,65,.12)' }}>
        <div
          className="stack-m"
          style={{ maxWidth: 1240, margin: '0 auto', padding: '0 clamp(18px,5vw,64px)', display: 'flex', gap: 0, alignItems: 'stretch', flexWrap: 'wrap' }}
        >
          <div
            data-reveal
            style={{
              flex: '1 1 380px',
              minWidth: 280,
              minHeight: 380,
              position: 'relative',
              background: 'linear-gradient(140deg,#2c1750,#7c4fb6 62%,#b98fdd)',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'flex-end',
            }}
          >
            <div style={{ position: 'absolute', inset: 0, backgroundImage: GRAIN, mixBlendMode: 'overlay', opacity: 0.4 }} />
            <p style={{ position: 'relative', margin: 0, padding: '13px 14px', fontSize: 11, lineHeight: 1.35, color: 'rgba(255,255,255,.94)' }}>
              <b style={{ display: 'block', fontSize: 8.5, letterSpacing: '.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,.62)', marginBottom: 4, fontWeight: 600 }}>
                Photo placeholder
              </b>
              Survivor support session · Yobe State
            </p>
          </div>
          <div data-reveal style={{ flex: '1 1 420px', minWidth: 280, padding: 'clamp(40px,5vw,64px) 0 clamp(40px,5vw,64px) clamp(0px,4vw,56px)' }}>
            <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: '#5d3a92' }}>
              Stories of light
            </span>
            <p
              style={{
                fontFamily: "'Newsreader',serif",
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(22px,2.6vw,33px)',
                lineHeight: 1.32,
                color: 'var(--ink)',
                margin: '20px 0 0',
              }}
            >
              &ldquo;When I arrived at the camp I had nothing and no one. Haske gave me care, a referral, and the
              courage to rebuild. Today I run a small tailoring stall and support my children.&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginTop: 24 }}>
              <span style={{ width: 46, height: 46, borderRadius: '50%', background: 'linear-gradient(140deg,#7c4fb6,#b98fdd)' }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--ink)' }}>Aisha, 29</div>
                <div style={{ fontSize: 12.5, color: '#6c6480' }}>
                  Survivor & livelihoods participant · Maiduguri <span style={{ opacity: 0.7 }}>(name changed)</span>
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className="ulink"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 28, fontWeight: 700, fontSize: 14, color: '#5d3a92' }}
            >
              More stories & impact <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* WHERE WE WORK */}
      <section style={{ background: 'var(--ink-deep)', color: '#fff' }}>
        <div
          className="stack-m"
          style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(56px,6vw,66px) clamp(18px,5vw,64px)', display: 'flex', gap: 50, alignItems: 'center', flexWrap: 'wrap' }}
        >
          <div data-reveal style={{ flex: '1 1 420px', minWidth: 280 }}>
            <span style={{ fontSize: 11.5, fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Where we work
            </span>
            <h2 style={{ fontSize: 'clamp(28px,3vw,40px)', lineHeight: 1.1, letterSpacing: '-.02em', color: '#fff', margin: '13px 0 0' }}>
              Rooted in Nigeria&apos;s hardest-hit regions
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.66, color: 'rgba(255,255,255,.72)', margin: '16px 0 0', maxWidth: 460 }}>
              We are actively present across Northeast and Northwest Nigeria, working among internally displaced
              persons, returnees and host communities.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 26 }}>
              {regions.map((r) => (
                <div key={r.name} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ width: 130, fontSize: 14, fontWeight: 600, color: '#fff' }}>{r.name}</span>
                  <div style={{ flex: 1, height: 8, borderRadius: 999, background: 'rgba(255,255,255,.12)', overflow: 'hidden' }}>
                    <div style={{ width: `${r.pct}%`, height: '100%', background: r.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal style={{ flex: '1 1 360px', minWidth: 260, position: 'relative', height: 360, borderRadius: 18, background: 'radial-gradient(120% 120% at 30% 20%,#3d2459,#1c0f2e)', border: '1px solid rgba(255,255,255,.12)', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,.08) 1px,transparent 1.5px)', backgroundSize: '22px 22px' }} />
            <span style={{ position: 'absolute', top: '34%', left: '62%', width: 16, height: 16, borderRadius: '50%', background: 'var(--gold)', boxShadow: '0 0 0 8px rgba(232,169,59,.18),0 0 0 16px rgba(232,169,59,.08)' }} />
            <span style={{ position: 'absolute', top: '52%', left: '54%', width: 13, height: 13, borderRadius: '50%', background: 'var(--gold)', boxShadow: '0 0 0 7px rgba(232,169,59,.15)' }} />
            <span style={{ position: 'absolute', top: '46%', left: '70%', width: 11, height: 11, borderRadius: '50%', background: 'var(--gold)', boxShadow: '0 0 0 6px rgba(232,169,59,.14)' }} />
            <span style={{ position: 'absolute', top: '40%', left: '30%', width: 11, height: 11, borderRadius: '50%', background: '#9966CC', boxShadow: '0 0 0 6px rgba(153,102,204,.18)' }} />
            <span style={{ position: 'absolute', left: 18, bottom: 16, fontSize: 10.5, fontWeight: 500, letterSpacing: '.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,.5)' }}>
              Operational map placeholder
            </span>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section style={{ background: 'var(--paper)' }}>
        <div data-reveal style={{ maxWidth: 1240, margin: '0 auto', padding: 'clamp(40px,5vw,54px) clamp(18px,5vw,64px)' }}>
          <div style={{ textAlign: 'center', fontSize: 11, fontWeight: 600, letterSpacing: '.18em', textTransform: 'uppercase', color: '#6c6480', marginBottom: 26 }}>
            Trusted by partners & donors
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {partners.map((name) => (
              <span
                key={name}
                style={{ padding: '13px 22px', border: '1px solid rgba(41,22,65,.12)', borderRadius: 12, background: '#fff', fontWeight: 700, fontSize: 15, color: '#3d2459', opacity: 0.78 }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* DONATE CTA */}
      <section style={{ background: 'var(--paper)', padding: '0 clamp(18px,5vw,64px) clamp(56px,7vw,72px)' }}>
        <div
          data-reveal
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            position: 'relative',
            borderRadius: 24,
            overflow: 'hidden',
            background: 'linear-gradient(120deg,#3d2459,#291641)',
            padding: 'clamp(40px,6vw,60px) clamp(24px,5vw,56px)',
          }}
        >
          <div style={{ position: 'absolute', top: -160, right: -80, width: 460, height: 460, background: 'radial-gradient(circle,rgba(232,169,59,.22),rgba(232,169,59,0) 70%)' }} />
          <div className="stack-m" style={{ position: 'relative', display: 'flex', gap: 40, alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 420px', minWidth: 260 }}>
              <h2 style={{ fontSize: 'clamp(28px,3.4vw,46px)', lineHeight: 1.05, letterSpacing: '-.025em', color: '#fff' }}>
                Be the light in someone&apos;s darkest hour.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,.78)', margin: '16px 0 0', maxWidth: 520 }}>
                Your support funds protection, dignity and care for survivors of gender-based violence and
                displacement. Give once, or stand with us every month.
              </p>
            </div>
            <div style={{ flex: '1 1 220px', minWidth: 220, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Link
                href="/get-involved"
                className="lift"
                style={{ height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 13, background: 'var(--gold)', color: '#3a2a06', fontWeight: 700, fontSize: 16 }}
              >
                Donate now
              </Link>
              <Link
                href="/get-involved"
                style={{ height: 54, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 13, border: '1px solid rgba(255,255,255,.34)', color: '#fff', fontWeight: 600, fontSize: 15 }}
              >
                Volunteer or partner
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
