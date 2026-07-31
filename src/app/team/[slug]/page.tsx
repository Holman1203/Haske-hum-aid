import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import RevealObserver from '@/components/ui/RevealObserver';
import { team, getTeamMember } from '@/data/team';

const GRAIN = 'var(--grain)';

export function generateStaticParams() {
  return team.map((member) => ({ slug: member.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const member = getTeamMember(params.slug);
  if (!member) return {};
  return {
    title: `${member.name} — Our People`,
    description: member.bio,
  };
}

export default function TeamMemberPage({ params }: { params: { slug: string } }) {
  const member = getTeamMember(params.slug);
  if (!member) notFound();

  const others = team.filter((m) => m.slug !== member.slug);

  return (
    <main id="main-content">
      <RevealObserver />

      <section style={{ padding: 'clamp(48px,6vw,70px) clamp(18px,5vw,64px) clamp(40px,5vw,70px)', background: '#fff', scrollMarginTop: 90 }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <Link
            href="/about#team"
            className="ulink"
            style={{ fontSize: 13.5, fontWeight: 700, color: '#9966CC', textDecoration: 'none', display: 'inline-block', marginBottom: 28 }}
          >
            ← Back to our people
          </Link>

          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(180px,260px) 1fr', gap: 40, alignItems: 'start' }}>
            <div
              data-reveal
              style={{
                borderRadius: 22,
                aspectRatio: '1 / 1',
                background: 'linear-gradient(150deg,#9966CC,#4B2E83)',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, backgroundImage: GRAIN, mixBlendMode: 'overlay', opacity: 0.4 }} />
              <span style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: 84, color: 'rgba(255,255,255,.85)' }}>
                {member.initial}
              </span>
            </div>

            <div data-reveal>
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
                {member.role}
              </div>
              <h1 style={{ fontSize: 'clamp(30px,4vw,48px)', fontWeight: 800, letterSpacing: '-.03em', marginBottom: 20 }}>
                {member.name}
              </h1>
              <p style={{ fontSize: 16, color: '#4a4258', lineHeight: 1.65, maxWidth: 620, marginBottom: 28 }}>{member.bio}</p>

              <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#1c1626', marginBottom: 12 }}>
                Areas of focus
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {member.focus.map((f) => (
                  <span
                    key={f}
                    style={{
                      fontSize: 13.5,
                      fontWeight: 600,
                      color: '#4B2E83',
                      background: '#F4EEFB',
                      borderRadius: 999,
                      padding: '8px 16px',
                    }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the team */}
      <section style={{ padding: 'clamp(40px,5vw,70px) clamp(18px,5vw,64px)', background: '#f9f7fb' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,3vw,30px)', fontWeight: 800, marginBottom: 26 }}>Meet the rest of the team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 22 }}>
            {others.map((m) => (
              <Link key={m.slug} href={`/team/${m.slug}`} className="lift" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>
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
                    {m.initial}
                  </span>
                </div>
                <div style={{ fontWeight: 700, fontSize: 17 }}>{m.name}</div>
                <div style={{ fontSize: 13.5, color: '#9966CC', fontWeight: 600 }}>{m.role}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
