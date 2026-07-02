'use client';

import { useEffect, useRef, useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

interface Msg {
  from: 'bot' | 'user';
  text: string;
}

const PHONE_DISPLAY = '+234 809 225 5840';
const PHONE_TEL = 'tel:+2348092255840';
const WHATSAPP = 'https://wa.me/2348092255840';
const HELPLINE = '0800-000-1212';

const QUICK_REPLIES = [
  'How can I donate?',
  'Volunteer with us',
  'Partner with HHAI',
  'Our programs',
  'Contact info',
  'I need help',
];

const GREETING =
  'Hello! 👋 I\'m the Haske assistant. I can help with donations, volunteering, partnerships, our programs, or getting in touch. What would you like to know?';

/** Keyword-matched answers. First matching rule wins; order matters (safety first). */
const RULES: { keywords: string[]; reply: string }[] = [
  {
    keywords: ['help', 'abuse', 'violence', 'gbv', 'unsafe', 'survivor', 'emergency', 'danger'],
    reply: `If you or someone you know needs support, our confidential GBV helpline is available 24/7: ${HELPLINE}. You are not alone — trained staff will listen and connect you to care. If you're on a shared device, the "Quick exit" button at the very top of this page instantly hides this site.`,
  },
  {
    keywords: ['donate', 'donation', 'give', 'giving', 'support financially', 'money'],
    reply: 'Thank you for your generosity! 💜 You can give a one-time or monthly gift on our Get Involved page — every donation funds health, protection, education and dignity for families across Northern Nigeria. Tap "Donate Now" in the menu to get started.',
  },
  {
    keywords: ['volunteer', 'volunteering', 'career', 'job', 'work with', 'join'],
    reply: `We'd love to have you on the team! Visit Get Involved → Career to see how to volunteer or build a career with us, or email hr@haskeinitiative.org with your CV and interests.`,
  },
  {
    keywords: ['partner', 'partnership', 'collaborate', 'organization', 'ngo', 'donor', 'grant'],
    reply: `We partner with foundations, agencies and businesses to scale impact. Start a conversation via our Contact page, call ${PHONE_DISPLAY}, or email hr@haskeinitiative.org — we'll respond promptly.`,
  },
  {
    keywords: ['program', 'programs', 'what do you do', 'services', 'thematic', 'wash', 'education', 'health', 'protection', 'livelihood', 'advocacy'],
    reply: 'We work across six thematic areas: Protection (incl. GBV prevention & response), WASH, Education, Health & Psychosocial Support, Livelihoods & Resilience, and Advocacy & Gender Equality. See the What We Do menu for details on each.',
  },
  {
    keywords: ['contact', 'phone', 'call', 'email', 'reach', 'number', 'address', 'office', 'location', 'where'],
    reply: `You can reach us at:\n📞 ${PHONE_DISPLAY}\n✉️ hr@haskeinitiative.org\n📍 Maiduguri, Borno State, Nigeria\n\nFor confidential GBV support, call ${HELPLINE} (24/7).`,
  },
  {
    keywords: ['who are you', 'about', 'haske', 'mission', 'organisation'],
    reply: '"Haske" means light in Hausa. We are a woman-led, youth-driven Nigerian NGO (est. 2022) restoring hope and transforming communities across Northern Nigeria — reaching 12,000+ people in 85+ communities so far.',
  },
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
    reply: 'Hello! 😊 How can I help you today? You can ask about donating, volunteering, partnership, our programs, or how to contact us.',
  },
  {
    keywords: ['thank', 'thanks'],
    reply: "You're very welcome! Is there anything else I can help you with? 💜",
  },
];

const FALLBACK = `I'm not sure about that one — but a member of our team can help! Chat with us on WhatsApp, call ${PHONE_DISPLAY}, or send a message via the Contact page.`;

function answer(input: string): string {
  const q = input.toLowerCase();
  for (const rule of RULES) {
    if (rule.keywords.some((k) => q.includes(k))) return rule.reply;
  }
  return FALLBACK;
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ from: 'bot', text: GREETING }]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [msgs, typing, open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t || typing) return;
    setMsgs((m) => [...m, { from: 'user', text: t }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setMsgs((m) => [...m, { from: 'bot', text: answer(t) }]);
      setTyping(false);
    }, 700);
  };

  return (
    <>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        style={{
          position: 'fixed',
          bottom: 22,
          right: 22,
          zIndex: 300,
          width: 58,
          height: 58,
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          background: 'linear-gradient(135deg,var(--primary),var(--primary-deep))',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 14px 34px -10px rgba(75,46,131,.65)',
        }}
      >
        {open ? <X size={24} /> : <MessageCircle size={25} />}
        {!open && (
          <span
            style={{
              position: 'absolute',
              top: 3,
              right: 3,
              width: 13,
              height: 13,
              borderRadius: '50%',
              background: 'var(--secondary)',
              border: '2.5px solid #fff',
            }}
          />
        )}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          role="dialog"
          aria-label="Haske chat assistant"
          style={{
            position: 'fixed',
            bottom: 92,
            right: 22,
            zIndex: 300,
            width: 'min(92vw, 370px)',
            height: 'min(70vh, 520px)',
            background: '#fff',
            borderRadius: 20,
            boxShadow: '0 30px 70px -20px rgba(46,27,71,.45)',
            border: '1px solid var(--line)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            animation: 'heroFadeUp .3s ease both',
          }}
        >
          {/* Header */}
          <div
            style={{
              background: 'linear-gradient(120deg,var(--primary-deep),var(--primary))',
              color: '#fff',
              padding: '16px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: 11,
            }}
          >
            <span
              style={{
                width: 38,
                height: 38,
                borderRadius: '50%',
                background: 'rgba(255,255,255,.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MessageCircle size={19} />
            </span>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: 15 }}>Haske Assistant</div>
              <div style={{ fontSize: 11.5, opacity: 0.85, display: 'flex', alignItems: 'center', gap: 5 }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--secondary-lt)' }} />
                Online · fast assistance
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={listRef} style={{ flex: 1, overflowY: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 10, background: 'var(--gray)' }}>
            {msgs.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.from === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  padding: '10px 14px',
                  borderRadius: m.from === 'user' ? '15px 15px 4px 15px' : '15px 15px 15px 4px',
                  background: m.from === 'user' ? 'var(--primary)' : '#fff',
                  color: m.from === 'user' ? '#fff' : '#2b2438',
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  whiteSpace: 'pre-line',
                  boxShadow: '0 4px 14px -6px rgba(46,27,71,.18)',
                }}
              >
                {m.text}
              </div>
            ))}
            {typing && (
              <div
                style={{
                  alignSelf: 'flex-start',
                  padding: '11px 16px',
                  borderRadius: '15px 15px 15px 4px',
                  background: '#fff',
                  fontSize: 13.5,
                  color: 'var(--muted)',
                  boxShadow: '0 4px 14px -6px rgba(46,27,71,.18)',
                }}
              >
                Typing…
              </div>
            )}
          </div>

          {/* Quick replies */}
          <div style={{ display: 'flex', gap: 7, padding: '10px 14px 4px', flexWrap: 'wrap', background: '#fff', borderTop: '1px solid var(--line)' }}>
            {QUICK_REPLIES.map((q) => (
              <button
                key={q}
                onClick={() => send(q)}
                style={{
                  padding: '6px 12px',
                  borderRadius: 999,
                  border: '1px solid var(--line2)',
                  background: '#fff',
                  color: 'var(--primary-deep)',
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input row */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            style={{ display: 'flex', gap: 8, padding: '10px 14px 12px', background: '#fff' }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question…"
              aria-label="Type your question"
              style={{
                flex: 1,
                minWidth: 0,
                height: 42,
                padding: '0 14px',
                borderRadius: 12,
                border: '1.5px solid var(--line)',
                outline: 'none',
                fontSize: 13.5,
              }}
            />
            <button
              type="submit"
              aria-label="Send message"
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                border: 'none',
                cursor: 'pointer',
                background: 'var(--secondary)',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Send size={17} />
            </button>
          </form>

          {/* WhatsApp handoff */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 7,
              padding: '10px 0',
              background: 'var(--secondary)',
              color: '#fff',
              fontSize: 12.5,
              fontWeight: 700,
            }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.4 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.1-4.7-4-4.9-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5l-.3.5c-.2.2-.3.4-.1.7.1.3.7 1.2 1.6 1.9 1.1.9 2 1.2 2.3 1.3.3.1.5.1.6-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.7-.4 1.9Z" />
            </svg>
            Chat with a human on WhatsApp · {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </>
  );
}
