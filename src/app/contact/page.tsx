'use client';

import { useState } from 'react';

const CONTACT_INFO = [
  { icon: '✉️', label: 'Email', value: 'hr@haskeinitiative.org' },
  { icon: '📍', label: 'Where we work', value: 'North-East & North-West Nigeria' },
  { icon: '🗓️', label: 'Established', value: 'Registered NNGO · 2022' },
];

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [errs, setErrs] = useState<{ name?: boolean; email?: boolean; msg?: boolean }>({});
  const [sent, setSent] = useState(false);

  const submit = () => {
    const e: typeof errs = {};
    if (!name.trim()) e.name = true;
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) e.email = true;
    if (!msg.trim()) e.msg = true;
    if (Object.keys(e).length) {
      setErrs(e);
      return;
    }
    setErrs({});
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    setName('');
    setEmail('');
    setMsg('');
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: 13,
    fontWeight: 700,
    color: '#4a4258',
    marginBottom: 7,
  };
  const field = (bad?: boolean): React.CSSProperties => ({
    width: '100%',
    padding: '14px 16px',
    borderRadius: 12,
    border: `1.5px solid ${bad ? '#C0392B' : 'rgba(28,22,38,.14)'}`,
    outline: 'none',
    fontSize: 16,
    marginBottom: 16,
  });

  return (
    <main id="main-content">
      <section style={{ padding: 'clamp(48px,6vw,64px) clamp(18px,5vw,64px) clamp(60px,7vw,100px)' }}>
        <div
          className="stack-m"
          style={{ maxWidth: 1080, margin: '0 auto', display: 'flex', gap: 'clamp(32px,5vw,72px)', flexWrap: 'wrap' }}
        >
          <div style={{ flex: '1 1 320px', minWidth: 280 }}>
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
              Contact
            </div>
            <h1 style={{ fontSize: 'clamp(36px,5vw,60px)', fontWeight: 800, letterSpacing: '-.035em', maxWidth: '13ch' }}>
              Let&apos;s bring light together.
            </h1>
            <p style={{ fontSize: 17, color: '#4a4258', marginTop: 20, maxWidth: 420 }}>
              Whether you want to partner, volunteer, or learn more about our work — we&apos;d love to hear from you.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 34 }}>
              {CONTACT_INFO.map((c) => (
                <div key={c.label} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div
                    style={{
                      width: 46,
                      height: 46,
                      borderRadius: 13,
                      background: '#F4EEFB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 21,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 12.5,
                        fontWeight: 700,
                        letterSpacing: '.08em',
                        textTransform: 'uppercase',
                        color: '#9b94a8',
                      }}
                    >
                      {c.label}
                    </div>
                    <div style={{ fontWeight: 600, fontSize: 15.5 }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ flex: '1 1 380px', minWidth: 300 }}>
            <div
              style={{
                background: '#fff',
                border: '1px solid rgba(28,22,38,.09)',
                borderRadius: 22,
                padding: 'clamp(26px,3vw,40px)',
                boxShadow: '0 30px 70px -45px rgba(75,46,131,.4)',
              }}
            >
              {!sent ? (
                <>
                  <h3 style={{ fontSize: 22, fontWeight: 800, marginBottom: 22 }}>Send us a message</h3>
                  <label style={labelStyle}>Name</label>
                  <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" style={field(errs.name)} />
                  <label style={labelStyle}>Email</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" style={field(errs.email)} />
                  <label style={labelStyle}>Message</label>
                  <textarea
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder="How can we help?"
                    rows={4}
                    style={{ ...field(errs.msg), resize: 'vertical', marginBottom: 18 }}
                  />
                  <button
                    onClick={submit}
                    className="lift"
                    style={{ width: '100%', background: '#9966CC', color: '#fff', fontWeight: 700, fontSize: 16, padding: 15, borderRadius: 13 }}
                  >
                    Send message →
                  </button>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '30px 0' }}>
                  <div
                    style={{
                      width: 74,
                      height: 74,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg,#9966CC,#F5A623)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 34,
                      margin: '0 auto 20px',
                      animation: 'popin .5s cubic-bezier(.2,1.4,.5,1)',
                    }}
                  >
                    ✓
                  </div>
                  <h3 style={{ fontSize: 24, fontWeight: 800, marginBottom: 10 }}>Message sent!</h3>
                  <p style={{ fontSize: 15, color: '#6b6478', maxWidth: 300, margin: '0 auto 24px' }}>
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button
                    onClick={reset}
                    style={{ background: '#F4EEFB', color: '#4B2E83', fontWeight: 700, fontSize: 14.5, padding: '12px 24px', borderRadius: 11 }}
                  >
                    Send another
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
