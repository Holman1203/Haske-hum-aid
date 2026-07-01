'use client';

import { useState } from 'react';
import Link from 'next/link';
import RevealObserver from '@/components/ui/RevealObserver';

const GRAIN = 'var(--grain)';

type Freq = 'once' | 'monthly';
type Cur = 'NGN' | 'USD';

const DESIGNATIONS = [
  { id: 'where-needed', label: 'Where most needed' },
  { id: 'gbv', label: 'GBV survivor support' },
  { id: 'wash', label: 'Clean water (WASH)' },
  { id: 'relief', label: 'Emergency relief' },
];

const PRESETS: Record<Cur, number[]> = {
  NGN: [5000, 15000, 50000, 100000],
  USD: [25, 50, 100, 250],
};

const fmt = (n: number) => (n || 0).toLocaleString('en-US');

export default function GetInvolvedPage() {
  const [step, setStep] = useState(1);
  const [freq, setFreq] = useState<Freq>('monthly');
  const [cur, setCur] = useState<Cur>('NGN');
  const [amount, setAmount] = useState<number | null>(null);
  const [custom, setCustom] = useState('');
  const [des, setDes] = useState('where-needed');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [err, setErr] = useState('');
  const [done, setDone] = useState(false);

  const sym = cur === 'NGN' ? '₦' : '$';
  const defaultAmt = cur === 'NGN' ? 15000 : 50;
  const effAmount = amount != null ? amount : defaultAmt;
  const customDigits = custom.replace(/\D/g, '');
  const customActive = !!customDigits;
  const eff = customActive ? parseInt(customDigits, 10) : effAmount;
  const money = (n: number) => sym + fmt(n);

  const impact = () => {
    const v = cur === 'NGN' ? eff : eff * 1500;
    if (v <= 7000) return 'Provides hygiene supplies for a displaced family.';
    if (v <= 22000) return 'Funds a survivor’s first counseling & medical visit.';
    if (v <= 75000) return 'Brings clean water to a household for months.';
    return 'Delivers emergency relief for several families in crisis.';
  };

  const freqWord = freq === 'monthly' ? '/month' : '';
  const totalDisplay = money(eff) + (freq === 'monthly' ? '/mo' : '');
  const desLabel = DESIGNATIONS.find((d) => d.id === des)?.label ?? '';
  const thankName = name.trim().split(' ')[0] || 'friend';

  const next = () => {
    if (step === 1) {
      if (eff <= 0) return;
      setStep(2);
      setErr('');
      window.scrollTo(0, 0);
      return;
    }
    if (step === 2) {
      if (!name.trim()) {
        setErr('Please enter your name.');
        return;
      }
      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        setErr('Please enter a valid email.');
        return;
      }
      setStep(3);
      setErr('');
      window.scrollTo(0, 0);
    }
  };
  const back = () => {
    setStep((s) => Math.max(1, s - 1));
    setErr('');
  };
  const submit = () => {
    setDone(true);
    window.scrollTo(0, 0);
  };
  const reset = () => {
    setStep(1);
    setDone(false);
    setCustom('');
    setAmount(null);
    setName('');
    setEmail('');
    setErr('');
  };

  const selPreset = (v: number) => {
    setAmount(v);
    setCustom('');
  };

  const giftFacts = [
    { icon: '💧', amt: cur === 'NGN' ? '₦5,000' : '$10', txt: 'Clean water for a family for weeks' },
    { icon: '🛡️', amt: cur === 'NGN' ? '₦15,000' : '$25', txt: 'A survivor’s first counseling session' },
    { icon: '🏕️', amt: cur === 'NGN' ? '₦50,000' : '$100', txt: 'Emergency relief kit for a household' },
  ];

  const otherWays = [
    { icon: '🙋', title: 'Volunteer', desc: 'Lend your time and skills to programs in the field or remotely.', cta: 'Join the team' },
    { icon: '🤝', title: 'Partner with us', desc: 'Foundations, agencies and businesses — let’s scale impact together.', cta: 'Start a conversation' },
  ];

  const segBtn = (active: boolean): React.CSSProperties => ({
    padding: '9px 20px',
    borderRadius: 9,
    fontWeight: 700,
    fontSize: 14,
    background: active ? '#9966CC' : 'transparent',
    color: active ? '#fff' : '#6b6478',
  });
  const curBtn = (active: boolean): React.CSSProperties => ({
    padding: '6px 14px',
    borderRadius: 8,
    fontWeight: 700,
    fontSize: 13,
    background: active ? '#9966CC' : 'transparent',
    color: active ? '#fff' : '#6b6478',
  });

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 13,
    fontWeight: 700,
    color: '#4a4258',
    marginBottom: 7,
  };
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: 12,
    border: '1.5px solid rgba(28,22,38,.14)',
    outline: 'none',
    fontSize: 16,
  };

  const reviewRows = [
    { k: 'Frequency', v: freq === 'monthly' ? 'Monthly gift' : 'One-time gift' },
    { k: 'Designation', v: desLabel },
    { k: 'Donor', v: name || '—' },
    { k: 'Email', v: email || '—' },
  ];

  return (
    <main id="main-content">
      <RevealObserver />

      <section style={{ padding: 'clamp(48px,6vw,64px) clamp(18px,5vw,64px) clamp(32px,4vw,56px)', textAlign: 'center' }}>
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            color: '#9966CC',
            marginBottom: 16,
          }}
        >
          Get involved
        </div>
        <h1 style={{ fontSize: 'clamp(36px,5.5vw,68px)', fontWeight: 800, letterSpacing: '-.035em', maxWidth: '16ch', margin: '0 auto' }}>
          Be the reason a family finds light.
        </h1>
      </section>

      <section style={{ padding: '0 clamp(18px,5vw,64px) clamp(60px,7vw,110px)' }}>
        <div
          style={{
            maxWidth: 980,
            margin: '0 auto',
            borderRadius: 26,
            background: '#fff',
            border: '1px solid rgba(28,22,38,.09)',
            overflow: 'hidden',
            boxShadow: '0 40px 90px -50px rgba(75,46,131,.4)',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {/* LEFT rail */}
            <div
              style={{
                flex: '1 1 280px',
                minWidth: 240,
                background: 'linear-gradient(165deg,#4B2E83,#9966CC)',
                color: '#fff',
                padding: 'clamp(28px,3.5vw,44px)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', inset: 0, backgroundImage: GRAIN, mixBlendMode: 'overlay', opacity: 0.35 }} />
              <div style={{ position: 'relative' }}>
                <h3 style={{ fontSize: 26, fontWeight: 800, color: '#fff', marginBottom: 14 }}>Your gift at work</h3>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,.82)', lineHeight: 1.6, marginBottom: 28 }}>
                  100% of your donation is directed toward programs that protect and restore lives.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  {giftFacts.map((g) => (
                    <div key={g.txt} style={{ display: 'flex', gap: 13, alignItems: 'flex-start' }}>
                      <div style={{ flex: '0 0 auto', fontSize: 22 }}>{g.icon}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15 }}>{g.amt}</div>
                        <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,.78)' }}>{g.txt}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    marginTop: 34,
                    paddingTop: 22,
                    borderTop: '1px solid rgba(255,255,255,.18)',
                    fontSize: 13,
                    color: 'rgba(255,255,255,.7)',
                  }}
                >
                  Haske Humanitarian Aid Initiative · Registered NNGO · Founded 2022
                </div>
              </div>
            </div>

            {/* RIGHT donate form */}
            <div style={{ flex: '2 1 420px', minWidth: 300, padding: 'clamp(28px,3.5vw,44px)' }}>
              {!done && (
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 30 }}>
                  {[1, 2, 3].map((i) => (
                    <div key={i} style={{ flex: 1, height: 5, borderRadius: 999, background: i <= step ? '#9966CC' : '#EBDDF7' }} />
                  ))}
                </div>
              )}

              {/* STEP 1 */}
              {!done && step === 1 && (
                <>
                  <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 20 }}>Choose your gift</h3>
                  <div style={{ display: 'inline-flex', background: '#F4EEFB', borderRadius: 12, padding: 4, marginBottom: 14 }}>
                    <button onClick={() => setFreq('once')} style={segBtn(freq === 'once')}>One-time</button>
                    <button onClick={() => setFreq('monthly')} style={segBtn(freq === 'monthly')}>Monthly</button>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 14 }}>
                    <div style={{ display: 'inline-flex', background: '#F4EEFB', borderRadius: 10, padding: 3 }}>
                      <button onClick={() => { setCur('NGN'); setAmount(null); setCustom(''); }} style={curBtn(cur === 'NGN')}>₦ NGN</button>
                      <button onClick={() => { setCur('USD'); setAmount(null); setCustom(''); }} style={curBtn(cur === 'USD')}>$ USD</button>
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 12, marginBottom: 16 }}>
                    {PRESETS[cur].map((v) => {
                      const sel = !customActive && effAmount === v;
                      return (
                        <button
                          key={v}
                          onClick={() => selPreset(v)}
                          style={{
                            padding: '15px 10px',
                            borderRadius: 12,
                            fontWeight: 700,
                            fontSize: 17,
                            transition: 'all .15s ease',
                            ...(sel
                              ? { background: '#9966CC', color: '#fff', border: '1.5px solid #9966CC', boxShadow: '0 8px 18px -8px rgba(153,102,204,.7)' }
                              : { background: '#fff', color: '#1C1626', border: '1.5px solid rgba(28,22,38,.14)' }),
                          }}
                        >
                          {sym + fmt(v)}
                        </button>
                      );
                    })}
                  </div>
                  <div style={{ position: 'relative', marginBottom: 8 }}>
                    <span style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', fontWeight: 700, color: '#9966CC', fontSize: 17 }}>
                      {sym}
                    </span>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="Other amount"
                      value={custom}
                      onChange={(e) => setCustom(e.target.value.replace(/\D/g, ''))}
                      style={{
                        width: '100%',
                        padding: '15px 16px 15px 34px',
                        borderRadius: 12,
                        border: `1.5px solid ${customActive ? '#9966CC' : 'rgba(28,22,38,.14)'}`,
                        outline: 'none',
                        fontWeight: 700,
                        fontSize: 16,
                        background: '#fff',
                      }}
                    />
                  </div>
                  <div
                    style={{
                      background: '#FFF6E6',
                      border: '1px solid rgba(245,166,35,.3)',
                      borderRadius: 12,
                      padding: '13px 16px',
                      display: 'flex',
                      gap: 10,
                      alignItems: 'center',
                      margin: '14px 0 22px',
                    }}
                  >
                    <span style={{ fontSize: 20 }}>✨</span>
                    <span style={{ fontSize: 14, color: '#7a5a10', fontWeight: 600 }}>{impact()}</span>
                  </div>
                  <button
                    onClick={next}
                    className="lift"
                    style={{
                      width: '100%',
                      background: '#9966CC',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: 17,
                      padding: 16,
                      borderRadius: 13,
                      boxShadow: '0 14px 30px -12px rgba(153,102,204,.7)',
                    }}
                  >
                    Continue → — give {money(eff)}{freq === 'monthly' ? '/mo' : ''}
                  </button>
                </>
              )}

              {/* STEP 2 */}
              {!done && step === 2 && (
                <>
                  <button onClick={back} style={{ fontSize: 14, fontWeight: 600, color: '#6b6478', marginBottom: 14 }}>← Back</button>
                  <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 6 }}>Your details</h3>
                  <p style={{ fontSize: 14, color: '#6b6478', marginBottom: 22 }}>So we can send your receipt and impact updates.</p>
                  <label style={labelStyle}>Full name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    style={{ ...inputStyle, marginBottom: 18 }}
                  />
                  <label style={labelStyle}>Email address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    style={{ ...inputStyle, marginBottom: 8 }}
                  />
                  <label style={{ ...labelStyle, margin: '14px 0 9px' }}>Direct my gift to</label>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 18 }}>
                    {DESIGNATIONS.map((d) => {
                      const sel = des === d.id;
                      return (
                        <button
                          key={d.id}
                          onClick={() => setDes(d.id)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '13px 16px',
                            borderRadius: 12,
                            fontWeight: 600,
                            fontSize: 14.5,
                            textAlign: 'left',
                            transition: 'all .15s ease',
                            ...(sel
                              ? { background: '#F4EEFB', border: '1.5px solid #9966CC', color: '#4B2E83' }
                              : { background: '#fff', border: '1.5px solid rgba(28,22,38,.12)', color: '#1C1626' }),
                          }}
                        >
                          <span>{d.label}</span>
                          <span style={{ fontSize: 15 }}>{sel ? '✓' : ''}</span>
                        </button>
                      );
                    })}
                  </div>
                  {err && (
                    <div
                      style={{
                        background: '#FDECEC',
                        color: '#C0392B',
                        fontSize: 13.5,
                        fontWeight: 600,
                        padding: '11px 14px',
                        borderRadius: 10,
                        marginBottom: 14,
                      }}
                    >
                      {err}
                    </div>
                  )}
                  <button
                    onClick={next}
                    className="lift"
                    style={{ width: '100%', background: '#9966CC', color: '#fff', fontWeight: 700, fontSize: 17, padding: 16, borderRadius: 13 }}
                  >
                    Review gift →
                  </button>
                </>
              )}

              {/* STEP 3 review */}
              {!done && step === 3 && (
                <>
                  <button onClick={back} style={{ fontSize: 14, fontWeight: 600, color: '#6b6478', marginBottom: 14 }}>← Back</button>
                  <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 22 }}>Confirm your gift</h3>
                  <div style={{ border: '1px solid rgba(28,22,38,.1)', borderRadius: 16, overflow: 'hidden', marginBottom: 22 }}>
                    {reviewRows.map((r) => (
                      <div
                        key={r.k}
                        style={{ display: 'flex', justifyContent: 'space-between', padding: '14px 18px', borderBottom: '1px solid rgba(28,22,38,.06)' }}
                      >
                        <span style={{ fontSize: 14, color: '#6b6478' }}>{r.k}</span>
                        <span style={{ fontSize: 14.5, fontWeight: 700, textAlign: 'right' }}>{r.v}</span>
                      </div>
                    ))}
                    <div style={{ display: 'flex', justifyContent: 'space-between', padding: 18, background: '#F4EEFB' }}>
                      <span style={{ fontWeight: 700, fontSize: 16 }}>Total {freqWord}</span>
                      <span style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 800, fontSize: 22, color: '#9966CC' }}>{totalDisplay}</span>
                    </div>
                  </div>
                  <button
                    onClick={submit}
                    className="lift"
                    style={{
                      width: '100%',
                      background: '#9966CC',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: 17,
                      padding: 16,
                      borderRadius: 13,
                      boxShadow: '0 14px 30px -12px rgba(153,102,204,.7)',
                    }}
                  >
                    Give {totalDisplay} ♥
                  </button>
                  <p style={{ textAlign: 'center', fontSize: 12.5, color: '#9b94a8', marginTop: 14 }}>
                    🔒 Demo prototype — no real payment is processed.
                  </p>
                </>
              )}

              {/* THANK YOU */}
              {done && (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div
                    style={{
                      width: 84,
                      height: 84,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg,#9966CC,#F5A623)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 40,
                      margin: '0 auto 24px',
                      animation: 'popin .5s cubic-bezier(.2,1.4,.5,1)',
                    }}
                  >
                    💜
                  </div>
                  <h3 style={{ fontSize: 28, fontWeight: 800, marginBottom: 12 }}>Thank you, {thankName}!</h3>
                  <p style={{ fontSize: 16, color: '#6b6478', maxWidth: 360, margin: '0 auto 8px' }}>
                    Your {totalDisplay} {freqWord} gift is already becoming light for a family in need.
                  </p>
                  <p style={{ fontSize: 14, color: '#9b94a8', marginBottom: 28 }}>A receipt is on its way to {email}.</p>
                  <button
                    onClick={reset}
                    style={{ background: '#F4EEFB', color: '#4B2E83', fontWeight: 700, fontSize: 15, padding: '13px 26px', borderRadius: 12 }}
                  >
                    Make another gift
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* other ways */}
        <div
          style={{
            maxWidth: 980,
            margin: '48px auto 0',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))',
            gap: 20,
          }}
        >
          {otherWays.map((o) => (
            <div
              key={o.title}
              data-reveal
              className="lift"
              style={{ border: '1px solid rgba(28,22,38,.09)', borderRadius: 20, padding: 28, background: '#fff' }}
            >
              <div style={{ fontSize: 30, marginBottom: 14 }}>{o.icon}</div>
              <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{o.title}</h4>
              <p style={{ fontSize: 14.5, color: '#6b6478', lineHeight: 1.55, marginBottom: 14 }}>{o.desc}</p>
              <Link href="/contact" className="ulink" style={{ fontWeight: 700, fontSize: 14.5, color: '#9966CC' }}>
                {o.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
