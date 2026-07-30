'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';

type Freq = 'once' | 'monthly';

const AMOUNTS: Record<Freq, number[]> = {
  once: [50, 100, 250, 500],
  monthly: [25, 50, 100, 250],
};

function impactFor(amount: number) {
  if (amount >= 250) return 'Keeps a safe learning space open for displaced children for a month.';
  if (amount >= 100) return 'Powers a full community sensitization circle against gender-based violence.';
  if (amount >= 50) return 'Funds a survivor’s medical referral and case-management support.';
  if (amount >= 25) return 'Provides hygiene & dignity supplies for a displaced woman.';
  if (amount > 0) return 'Every gift helps restore safety, dignity and hope.';
  return 'Choose or enter an amount to see your impact.';
}

function segStyle(active: boolean): CSSProperties {
  return {
    flex: 1,
    padding: '10px 0',
    borderRadius: 9,
    fontWeight: 600,
    fontSize: 13.5,
    cursor: 'pointer',
    transition: 'all .15s ease',
    background: active ? '#fff' : 'transparent',
    color: active ? '#291641' : '#6c6480',
    boxShadow: active ? '0 2px 8px rgba(41,22,65,.14)' : 'none',
  };
}

function chipStyle(active: boolean): CSSProperties {
  return {
    padding: '15px 0',
    borderRadius: 12,
    fontFamily: "'Bricolage Grotesque'",
    fontWeight: 700,
    fontSize: 17,
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'all .15s ease',
    border: active ? '1.5px solid #9966CC' : '1.5px solid rgba(41,22,65,.22)',
    background: active ? '#9966CC' : '#fff',
    color: active ? '#fff' : '#291641',
    boxShadow: active ? '0 6px 16px -6px rgba(153,102,204,.6)' : 'none',
  };
}

export default function DonateWidget() {
  const [freq, setFreq] = useState<Freq>('monthly');
  const [amount, setAmount] = useState(50);
  const [custom, setCustom] = useState('');

  const amt = custom !== '' ? parseInt(custom, 10) || 0 : amount;

  const selectFreq = (f: Freq) => {
    setFreq(f);
    setAmount(50);
    setCustom('');
  };

  return (
    <div style={{ background: '#fff', borderRadius: 20, padding: 24, boxShadow: '0 30px 70px -30px rgba(0,0,0,.6)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <span style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 19, color: '#291641' }}>
          Make a donation
        </span>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 5,
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color: '#5d3a92',
            background: '#f4eefb',
            padding: '5px 9px',
            borderRadius: 7,
          }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <rect x="4" y="10" width="16" height="11" rx="2" />
            <path d="M8 10V7a4 4 0 0 1 8 0v3" />
          </svg>
          Secure
        </span>
      </div>

      <div style={{ display: 'flex', gap: 4, padding: 4, background: '#f4eefb', borderRadius: 11, marginBottom: 14 }}>
        <button onClick={() => selectFreq('once')} style={segStyle(freq === 'once')}>
          One-time
        </button>
        <button onClick={() => selectFreq('monthly')} style={segStyle(freq === 'monthly')}>
          Monthly
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
        {AMOUNTS[freq].map((v) => (
          <button
            key={v}
            onClick={() => {
              setAmount(v);
              setCustom('');
            }}
            style={chipStyle(amt === v && custom === '')}
          >
            ${v}
          </button>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          marginTop: 9,
          padding: '0 14px',
          height: 48,
          border: '1.5px solid rgba(41,22,65,.12)',
          borderRadius: 12,
        }}
      >
        <span style={{ fontFamily: "'Bricolage Grotesque'", fontWeight: 700, fontSize: 16, color: '#6c6480' }}>$</span>
        <input
          value={custom}
          onChange={(e) => setCustom(e.target.value.replace(/[^0-9]/g, '').slice(0, 6))}
          inputMode="numeric"
          placeholder="Other amount"
          style={{ flex: 1, minWidth: 0, border: 'none', outline: 'none', background: 'transparent', fontWeight: 600, fontSize: 15, color: '#291641' }}
        />
      </div>

      <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 14, padding: '12px 13px', background: '#f4eefb', borderRadius: 11 }}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#5d3a92"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ flexShrink: 0, marginTop: 1 }}
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
        <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.45, color: '#3d2459' }}>{impactFor(amt)}</p>
      </div>

      <Link
        href="/get-involved"
        style={{
          display: 'block',
          width: '100%',
          textAlign: 'center',
          marginTop: 15,
          padding: 15,
          borderRadius: 13,
          background: '#9966CC',
          color: '#fff',
          fontWeight: 700,
          fontSize: 15.5,
        }}
      >
        Donate ${amt}
        {freq === 'monthly' ? ' / month' : ''} →
      </Link>
      <p style={{ margin: '11px 0 0', textAlign: 'center', fontSize: 11, color: '#6c6480' }}>
        100% goes to programs · tax-deductible
      </p>
    </div>
  );
}
