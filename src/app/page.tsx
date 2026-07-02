import Link from 'next/link';
import Image from 'next/image';
import {
  HeartPulse,
  Utensils,
  Droplets,
  GraduationCap,
  ShieldCheck,
  Sprout,
  Siren,
  ArrowRight,
  ChevronDown,
} from 'lucide-react';
import HomeStats from '@/components/home/HomeStats';
import HeroCarousel from '@/components/home/HeroCarousel';
import MotionReveal from '@/components/ui/MotionReveal';

const FOCUS_AREAS = [
  {
    icon: HeartPulse,
    title: 'Health',
    desc: 'Primary healthcare, medical outreach and psychosocial support for crisis-affected communities.',
  },
  {
    icon: Utensils,
    title: 'Nutrition',
    desc: 'Emergency nutrition response and community-based management of acute malnutrition.',
  },
  {
    icon: Droplets,
    title: 'WASH',
    desc: 'Safe water, sanitation and hygiene facilities that protect dignity and health.',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    desc: 'Safe, protective learning spaces for out-of-school, Almajiri and displaced children.',
  },
  {
    icon: ShieldCheck,
    title: 'Protection',
    desc: 'GBV prevention and response, child protection, case management and referral pathways.',
  },
  {
    icon: Sprout,
    title: 'Livelihoods',
    desc: 'Skills, cash transfers and self-reliance for IDPs, returnees and host communities.',
  },
  {
    icon: Siren,
    title: 'Emergency Response',
    desc: 'Rapid life-saving assistance when disasters and displacement strike.',
  },
];

const FEATURED_PROJECTS = [
  {
    title: 'Emergency Nutrition Response — Borno IDP Camps',
    sector: 'Nutrition',
    beneficiaries: '35,000 beneficiaries',
    image: '/images/1.jpeg',
    alt: 'HHAI staff distributing food supplies to women in an IDP community, Borno State',
  },
  {
    title: 'Primary Healthcare in Borno State IDP Camps',
    sector: 'Health',
    beneficiaries: '45,000 beneficiaries',
    image: '/images/5.jpeg',
    alt: 'HHAI health worker speaking with a mother and her baby during community outreach',
  },
  {
    title: 'GBV Prevention & Response — Maiduguri IDP Camps',
    sector: 'Protection',
    beneficiaries: '12,000 beneficiaries',
    image: '/images/3.jpeg',
    alt: 'HHAI protection team engaging with community members in Maiduguri',
  },
];

const NEWS = [
  {
    title: 'HHAI Receives $2.5M USAID Grant for Emergency Nutrition Response in Borno State',
    date: 'May 15, 2024',
    category: 'Funding',
    image: '/images/1.jpeg',
    alt: 'HHAI team distributing aid packages at a community session',
  },
  {
    title: 'WASH Project Delivers Clean Water to 50,000 People in Maiduguri IDP Camps',
    date: 'April 28, 2024',
    category: 'WASH',
    image: '/images/hero-field-3.jpeg',
    alt: 'Community awareness and sensitisation session in Borno State',
  },
  {
    title: "8,500 Girls Back in School Through HHAI's Girls Education Initiative in Adamawa",
    date: 'March 10, 2024',
    category: 'Education',
    image: '/images/7.jpeg',
    alt: 'HHAI field staff consulting with community members',
  },
];

const PARTNERS = [
  'USAID / BHA',
  'EU / ECHO',
  'UK Aid / FCDO',
  'UNICEF',
  'UNHCR',
  'WFP',
  'WHO',
  'FAO',
  'Min. of Humanitarian Affairs',
  'CSO Networks',
];

const REGIONS = [
  { name: 'Borno', pct: 92 },
  { name: 'Adamawa', pct: 74 },
  { name: 'Yobe', pct: 61 },
  { name: 'Northwest Nigeria', pct: 43 },
];

const eyebrow = (color: string) =>
  ({
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: '.2em',
    textTransform: 'uppercase',
    color,
  }) as const;

export default function HomePage() {
  return (
    <main id="main-content">
      {/* ============ HERO — cinematic full screen ============ */}
      <section
        style={{
          position: 'relative',
          minHeight: 'calc(100svh - 110px)',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: 'var(--primary-darkest)',
        }}
      >
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <HeroCarousel />
          {/* Deep purple gradient overlay for readability */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(100deg, rgba(46,27,71,.93) 0%, rgba(75,46,131,.8) 42%, rgba(75,46,131,.34) 100%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: 1280,
            width: '100%',
            margin: '0 auto',
            padding: 'clamp(80px,12vh,140px) clamp(18px,4vw,48px) clamp(120px,16vh,160px)',
          }}
        >
          <div style={{ maxWidth: 760 }}>
            <span
              style={{
                ...eyebrow('#FFC97E'),
                display: 'inline-flex',
                alignItems: 'center',
                gap: 9,
                animation: 'heroFadeUp .9s .1s cubic-bezier(.16,.84,.34,1) both',
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--orange)' }} />
              Woman-led · Youth-driven · Est. 2022
            </span>
            <h1
              style={{
                fontSize: 'clamp(42px,6.2vw,76px)',
                color: '#fff',
                margin: '20px 0 0',
                textShadow: '0 2px 30px rgba(46,27,71,.4)',
                animation: 'heroFadeUp .9s .25s cubic-bezier(.16,.84,.34,1) both',
              }}
            >
              Restoring Hope.
              <br />
              Transforming <span style={{ color: 'var(--orange)', fontStyle: 'italic' }}>Communities.</span>
            </h1>
            <p
              style={{
                margin: '24px 0 0',
                maxWidth: 560,
                fontSize: 'clamp(16px,1.4vw,18.5px)',
                lineHeight: 1.65,
                color: 'rgba(255,255,255,.88)',
                animation: 'heroFadeUp .9s .4s cubic-bezier(.16,.84,.34,1) both',
              }}
            >
              Haske Humanitarian Aid Initiative improves lives through humanitarian assistance and sustainable
              development across Nigeria — delivering health, nutrition, education, protection and dignity to the
              communities that need it most.
            </p>
            <div
              style={{
                display: 'flex',
                gap: 14,
                marginTop: 34,
                flexWrap: 'wrap',
                animation: 'heroFadeUp .9s .55s cubic-bezier(.16,.84,.34,1) both',
              }}
            >
              <Link
                href="/what-we-do"
                className="lift"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 9,
                  height: 54,
                  padding: '0 28px',
                  borderRadius: 12,
                  background: 'var(--orange)',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 15.5,
                  boxShadow: '0 16px 36px -12px rgba(247,148,29,.65)',
                }}
              >
                Explore Our Programs <ArrowRight size={17} />
              </Link>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  height: 54,
                  padding: '0 26px',
                  borderRadius: 12,
                  border: '1.5px solid rgba(255,255,255,.45)',
                  background: 'rgba(255,255,255,.08)',
                  backdropFilter: 'blur(6px)',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: 15,
                }}
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 96,
            left: '50%',
            transform: 'translateX(-50%)',
            color: 'rgba(255,255,255,.65)',
            animation: 'bob 2.6s ease-in-out infinite',
            zIndex: 2,
          }}
          aria-hidden="true"
        >
          <ChevronDown size={26} />
        </div>
      </section>

      {/* ============ ANIMATED IMPACT STATS (glass, overlapping hero) ============ */}
      <HomeStats />

      {/* ============ ABOUT HASKE ============ */}
      <section style={{ background: '#fff', padding: 'clamp(70px,9vw,110px) clamp(18px,4vw,48px) clamp(56px,7vw,90px)' }}>
        <div
          className="stack-m"
          style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', gap: 'clamp(36px,5vw,70px)', alignItems: 'center', flexWrap: 'wrap' }}
        >
          <MotionReveal style={{ flex: '1 1 380px', minWidth: 280 }}>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  borderRadius: 22,
                  overflow: 'hidden',
                  aspectRatio: '4 / 5',
                  maxWidth: 460,
                  boxShadow: '0 36px 70px -30px rgba(75,46,131,.4)',
                }}
              >
                <Image
                  src="/images/hero-field-1.jpeg"
                  alt="HHAI field officer documenting a community outreach session"
                  fill
                  sizes="(max-width: 880px) 100vw, 460px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div
                className="glass"
                style={{
                  position: 'absolute',
                  right: -8,
                  bottom: 26,
                  borderRadius: 16,
                  padding: '16px 20px',
                  boxShadow: '0 18px 40px -18px rgba(46,27,71,.35)',
                }}
              >
                <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 800, fontSize: 26, color: 'var(--primary-deep)' }}>
                  Est. 2022
                </div>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--muted)' }}>Registered National NGO</div>
              </div>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.12} style={{ flex: '1 1 440px', minWidth: 280 }}>
            <span style={eyebrow('var(--orange)')}>About Haske</span>
            <h2 style={{ fontSize: 'clamp(30px,3.4vw,44px)', color: 'var(--primary-deep)', margin: '16px 0 0' }}>
              Pursuing holistic care for humanity.
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.75, color: '#3c465e', margin: '20px 0 0' }}>
              Haske Humanitarian Aid Initiative is a woman-led, youth-driven Nigerian NGO transforming lives through
              health, nutrition, education, protection, livelihoods, WASH, emergency response and community
              resilience. We work alongside displaced and vulnerable communities — children, women, young people and
              persons with disabilities — before, during and after crises.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 24, flexWrap: 'wrap' }}>
              {['Prevention', 'Protection', 'Rehabilitation', 'Resilience'].map((v) => (
                <span
                  key={v}
                  style={{
                    padding: '9px 16px',
                    background: 'var(--gray)',
                    border: '1px solid var(--line)',
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 600,
                    color: 'var(--primary-deep)',
                  }}
                >
                  {v}
                </span>
              ))}
            </div>
            <Link
              href="/about"
              className="ulink"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 26, fontWeight: 700, fontSize: 14.5, color: 'var(--primary-mid)' }}
            >
              Learn more about us <ArrowRight size={15} />
            </Link>
          </MotionReveal>
        </div>
      </section>

      {/* ============ FOCUS AREAS ============ */}
      <section style={{ background: 'var(--gray)', padding: 'clamp(64px,8vw,100px) clamp(18px,4vw,48px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <MotionReveal style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto 46px' }}>
            <span style={eyebrow('var(--orange)')}>Our Focus Areas</span>
            <h2 style={{ fontSize: 'clamp(30px,3.4vw,44px)', color: 'var(--primary-deep)', margin: '14px 0 0' }}>
              Seven pathways to lasting change
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: 'var(--muted)', margin: '16px 0 0' }}>
              From emergency relief to long-term resilience, our integrated programs meet communities where the need
              is greatest.
            </p>
          </MotionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(270px,1fr))', gap: 18 }}>
            {FOCUS_AREAS.map((f, i) => (
              <MotionReveal key={f.title} delay={Math.min(i * 0.06, 0.3)}>
                <Link
                  href="/what-we-do"
                  className="lift"
                  style={{
                    display: 'block',
                    height: '100%',
                    background: '#fff',
                    borderRadius: 18,
                    padding: 28,
                    border: '1px solid var(--line)',
                    boxShadow: '0 10px 30px -18px rgba(75,46,131,.18)',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-flex',
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: 'linear-gradient(135deg,var(--primary-deep),var(--primary-mid))',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                    }}
                  >
                    <f.icon size={24} strokeWidth={1.9} />
                  </span>
                  <h3 style={{ fontSize: 20, color: 'var(--primary-deep)', margin: '18px 0 0' }}>{f.title}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--muted)', margin: '9px 0 0' }}>{f.desc}</p>
                  <div style={{ marginTop: 16, fontSize: 13.5, fontWeight: 700, color: 'var(--orange)', display: 'flex', alignItems: 'center', gap: 6 }}>
                    Learn more <ArrowRight size={14} />
                  </div>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section style={{ background: '#fff', padding: 'clamp(64px,8vw,100px) clamp(18px,4vw,48px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <MotionReveal
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 40 }}
          >
            <div>
              <span style={eyebrow('var(--orange)')}>Featured Projects</span>
              <h2 style={{ fontSize: 'clamp(30px,3.4vw,44px)', color: 'var(--primary-deep)', margin: '14px 0 0' }}>
                Where your support goes to work
              </h2>
            </div>
            <Link
              href="/projects"
              className="ulink"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 14.5, color: 'var(--primary-mid)' }}
            >
              View all projects <ArrowRight size={15} />
            </Link>
          </MotionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 22 }}>
            {FEATURED_PROJECTS.map((p, i) => (
              <MotionReveal key={p.title} delay={Math.min(i * 0.08, 0.24)}>
                <Link
                  href="/projects"
                  className="lift"
                  style={{
                    display: 'block',
                    borderRadius: 20,
                    overflow: 'hidden',
                    background: '#fff',
                    border: '1px solid var(--line)',
                    boxShadow: '0 16px 40px -22px rgba(75,46,131,.3)',
                  }}
                >
                  <div style={{ position: 'relative', aspectRatio: '16 / 10' }}>
                    <Image src={p.image} alt={p.alt} fill sizes="(max-width: 880px) 100vw, 380px" style={{ objectFit: 'cover' }} />
                    <span
                      style={{
                        position: 'absolute',
                        top: 14,
                        left: 14,
                        padding: '6px 12px',
                        borderRadius: 8,
                        background: 'rgba(75,46,131,.88)',
                        backdropFilter: 'blur(6px)',
                        color: '#fff',
                        fontSize: 11.5,
                        fontWeight: 700,
                        letterSpacing: '.06em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {p.sector}
                    </span>
                  </div>
                  <div style={{ padding: '22px 24px 26px' }}>
                    <h3 style={{ fontSize: 19, lineHeight: 1.3, color: 'var(--primary-deep)' }}>{p.title}</h3>
                    <div style={{ marginTop: 12, fontSize: 13.5, fontWeight: 600, color: 'var(--orange)' }}>{p.beneficiaries}</div>
                  </div>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ IMPACT ============ */}
      <section
        id="impact"
        style={{
          background: 'linear-gradient(135deg,var(--primary-darkest),var(--primary-deep) 55%,var(--primary-mid))',
          color: '#fff',
          padding: 'clamp(64px,8vw,100px) clamp(18px,4vw,48px)',
          scrollMarginTop: 90,
        }}
      >
        <div
          className="stack-m"
          style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', gap: 'clamp(36px,5vw,70px)', alignItems: 'center', flexWrap: 'wrap' }}
        >
          <MotionReveal style={{ flex: '1 1 440px', minWidth: 280 }}>
            <span style={eyebrow('#FFC97E')}>Our Impact</span>
            <h2 style={{ fontSize: 'clamp(30px,3.4vw,44px)', color: '#fff', margin: '14px 0 0' }}>
              Rooted in Nigeria&apos;s hardest-hit regions
            </h2>
            <p style={{ fontSize: 15.5, lineHeight: 1.7, color: 'rgba(255,255,255,.78)', margin: '18px 0 0', maxWidth: 480 }}>
              We are actively present across Northeast and Northwest Nigeria, working among internally displaced
              persons, returnees and host communities — with 100% community-led delivery.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 28, maxWidth: 480 }}>
              {REGIONS.map((r) => (
                <div key={r.name} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                  <span style={{ width: 150, fontSize: 14, fontWeight: 600 }}>{r.name}</span>
                  <div style={{ flex: 1, height: 8, borderRadius: 999, background: 'rgba(255,255,255,.14)', overflow: 'hidden' }}>
                    <div style={{ width: `${r.pct}%`, height: '100%', background: 'var(--orange)', borderRadius: 999 }} />
                  </div>
                </div>
              ))}
            </div>
          </MotionReveal>
          <MotionReveal delay={0.12} style={{ flex: '1 1 380px', minWidth: 280 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {[
                { v: '12,000+', l: 'People impacted since 2022' },
                { v: '85+', l: 'Communities reached' },
                { v: '58+', l: 'Projects implemented' },
                { v: '100%', l: 'Community-led delivery' },
              ].map((s) => (
                <div
                  key={s.l}
                  style={{
                    background: 'rgba(255,255,255,.08)',
                    border: '1px solid rgba(255,255,255,.14)',
                    borderRadius: 18,
                    padding: '26px 22px',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 800, fontSize: 'clamp(28px,3vw,38px)', color: 'var(--orange)' }}>
                    {s.v}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,.75)', marginTop: 8 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* ============ SUCCESS STORIES ============ */}
      <section style={{ background: 'var(--gray)', padding: 'clamp(64px,8vw,100px) clamp(18px,4vw,48px)' }}>
        <div
          className="stack-m"
          style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', gap: 'clamp(36px,5vw,70px)', alignItems: 'center', flexWrap: 'wrap' }}
        >
          <MotionReveal style={{ flex: '1 1 380px', minWidth: 280 }}>
            <div style={{ position: 'relative', borderRadius: 22, overflow: 'hidden', aspectRatio: '4 / 3', boxShadow: '0 36px 70px -30px rgba(75,46,131,.35)' }}>
              <Image
                src="/images/hero-field-3.jpeg"
                alt="Community members at an HHAI awareness and sensitisation session in Borno State"
                fill
                sizes="(max-width: 880px) 100vw, 560px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </MotionReveal>
          <MotionReveal delay={0.12} style={{ flex: '1 1 440px', minWidth: 280 }}>
            <span style={eyebrow('var(--orange)')}>Success Stories</span>
            <p
              style={{
                fontFamily: "'Playfair Display',serif",
                fontStyle: 'italic',
                fontWeight: 500,
                fontSize: 'clamp(22px,2.5vw,31px)',
                lineHeight: 1.4,
                color: 'var(--primary-deep)',
                margin: '20px 0 0',
              }}
            >
              &ldquo;When I arrived at the camp I had nothing and no one. Haske gave me care, a referral, and the
              courage to rebuild. Today I run a small tailoring stall and support my children.&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 13, marginTop: 24 }}>
              <span
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: '50%',
                  background: 'linear-gradient(140deg,var(--primary-mid),var(--primary-deep))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 17,
                }}
              >
                A
              </span>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--primary-deep)' }}>Aisha, 29</div>
                <div style={{ fontSize: 12.5, color: 'var(--muted)' }}>
                  Survivor &amp; livelihoods participant · Maiduguri <span style={{ opacity: 0.7 }}>(name changed)</span>
                </div>
              </div>
            </div>
            <Link
              href="/media"
              className="ulink"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 26, fontWeight: 700, fontSize: 14.5, color: 'var(--primary-mid)' }}
            >
              More stories &amp; updates <ArrowRight size={15} />
            </Link>
          </MotionReveal>
        </div>
      </section>

      {/* ============ PARTNERS & DONORS ============ */}
      <section style={{ background: '#fff', padding: 'clamp(48px,6vw,72px) clamp(18px,4vw,48px)' }}>
        <MotionReveal style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', ...eyebrow('var(--muted)'), marginBottom: 28 }}>Partners &amp; Donors</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            {PARTNERS.map((name) => (
              <span
                key={name}
                style={{
                  padding: '13px 24px',
                  border: '1px solid var(--line)',
                  borderRadius: 12,
                  background: 'var(--gray)',
                  fontWeight: 700,
                  fontSize: 14.5,
                  color: 'var(--primary-deep)',
                  opacity: 0.85,
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </MotionReveal>
      </section>

      {/* ============ LATEST NEWS ============ */}
      <section style={{ background: 'var(--gray)', padding: 'clamp(64px,8vw,100px) clamp(18px,4vw,48px)' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <MotionReveal
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: 40 }}
          >
            <div>
              <span style={eyebrow('var(--orange)')}>Latest News &amp; Updates</span>
              <h2 style={{ fontSize: 'clamp(30px,3.4vw,44px)', color: 'var(--primary-deep)', margin: '14px 0 0' }}>
                From the field
              </h2>
            </div>
            <Link
              href="/media"
              className="ulink"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 700, fontSize: 14.5, color: 'var(--primary-mid)' }}
            >
              Visit media center <ArrowRight size={15} />
            </Link>
          </MotionReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 22 }}>
            {NEWS.map((n, i) => (
              <MotionReveal key={n.title} delay={Math.min(i * 0.08, 0.24)}>
                <Link
                  href="/media"
                  className="lift"
                  style={{
                    display: 'block',
                    borderRadius: 20,
                    overflow: 'hidden',
                    background: '#fff',
                    border: '1px solid var(--line)',
                    boxShadow: '0 16px 40px -22px rgba(75,46,131,.25)',
                  }}
                >
                  <div style={{ position: 'relative', aspectRatio: '16 / 10' }}>
                    <Image src={n.image} alt={n.alt} fill sizes="(max-width: 880px) 100vw, 380px" style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '20px 24px 26px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12.5, fontWeight: 600 }}>
                      <span style={{ color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '.08em' }}>{n.category}</span>
                      <span style={{ color: 'var(--muted)' }}>· {n.date}</span>
                    </div>
                    <h3 style={{ fontSize: 18, lineHeight: 1.35, color: 'var(--primary-deep)', marginTop: 10 }}>{n.title}</h3>
                  </div>
                </Link>
              </MotionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CALL TO ACTION ============ */}
      <section style={{ background: '#fff', padding: 'clamp(56px,8vw,100px) clamp(18px,4vw,48px)' }}>
        <MotionReveal>
          <div
            style={{
              maxWidth: 1180,
              margin: '0 auto',
              position: 'relative',
              borderRadius: 28,
              overflow: 'hidden',
              background: 'linear-gradient(120deg,var(--primary-darkest),var(--primary-deep) 55%,var(--primary-mid))',
              padding: 'clamp(44px,6vw,72px) clamp(26px,5vw,64px)',
              textAlign: 'center',
              color: '#fff',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: -140,
                right: -60,
                width: 420,
                height: 420,
                background: 'radial-gradient(circle,rgba(247,148,29,.28),rgba(247,148,29,0) 70%)',
              }}
            />
            <div style={{ position: 'relative' }}>
              <h2 style={{ fontSize: 'clamp(30px,4vw,50px)', color: '#fff', maxWidth: '20ch', margin: '0 auto' }}>
                Together, we can restore hope where it&apos;s needed most.
              </h2>
              <p style={{ fontSize: 16.5, lineHeight: 1.65, color: 'rgba(255,255,255,.82)', maxWidth: 560, margin: '18px auto 0' }}>
                Donate, volunteer, or partner with us — every act of support funds health, protection, education and
                dignity for families across Northern Nigeria.
              </p>
              <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginTop: 34 }}>
                <Link
                  href="/get-involved"
                  className="lift"
                  style={{
                    height: 54,
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0 30px',
                    borderRadius: 12,
                    background: 'var(--orange)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 16,
                    boxShadow: '0 16px 36px -12px rgba(247,148,29,.6)',
                  }}
                >
                  Donate Now
                </Link>
                <Link
                  href="/get-involved"
                  style={{
                    height: 54,
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0 26px',
                    borderRadius: 12,
                    border: '1.5px solid rgba(255,255,255,.4)',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  Volunteer
                </Link>
                <Link
                  href="/contact"
                  style={{
                    height: 54,
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0 26px',
                    borderRadius: 12,
                    border: '1.5px solid rgba(255,255,255,.4)',
                    color: '#fff',
                    fontWeight: 600,
                    fontSize: 15,
                  }}
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </MotionReveal>
      </section>
    </main>
  );
}
