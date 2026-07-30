"use client";

import { useState } from "react";
import { CheckIcon } from "@/components/icons";
import { PageHero, Wrap, type VarStyle } from "@/components/ui";

const TOPICS = ["General inquiry", "Media & press", "Careers", "Partnerships & funding", "Report a concern / safeguarding"];

const CHANNELS = [
  { label: "24/7 GBV Helpline", value: "0800-000-1212", note: "Confidential support for survivors" },
  { label: "General inquiries", value: "hr@haskeinitiative.org", note: "Response within 2 business days" },
  { label: "Partnerships", value: "partnerships@haskeinitiative.org", note: "Institutional donors & CSOs" },
  { label: "Office", value: "Maiduguri, Borno State · Nigeria", note: "By appointment only" },
];

const inputStyle = {
  width: "100%",
  height: 48,
  padding: "0 14px",
  border: "1.5px solid var(--line)",
  borderRadius: 11,
  font: "500 14px var(--font-body)",
  color: "var(--ink)",
  outline: "none",
  background: "#fff",
} as const;

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div>
      <PageHero eyebrow="Contact" title="We're here — reach out." intro="For urgent support, the GBV helpline below is confidential and available 24/7. For everything else, send us a message and our team will get back to you." />

      <section style={{ background: "var(--ink-deep)" }}>
        <Wrap>
          <div
            style={{
              transform: "translateY(-30px)",
              background: "#fff",
              borderRadius: 18,
              padding: "26px 30px",
              boxShadow: "0 24px 50px -22px rgba(0,0,0,.35)",
              display: "flex",
              alignItems: "center",
              gap: 18,
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <span
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: "50%",
                  background: "var(--lilac)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--amethyst-dd)",
                  flex: "none",
                }}
              >
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <div>
                <div style={{ font: "600 12px var(--font-body)", letterSpacing: ".08em", textTransform: "uppercase", color: "var(--muted)" }}>24/7 Confidential GBV Helpline</div>
                <div style={{ font: "800 24px var(--font-display)", color: "var(--ink)" }}>0800-000-1212</div>
              </div>
            </div>
            <p style={{ font: "400 13px/1.5 var(--font-body)", color: "var(--muted)", maxWidth: "34ch", margin: 0 }}>
              Free, confidential and available around the clock. If you&apos;re in immediate danger, use the Quick Exit button at the top of any page.
            </p>
          </div>
        </Wrap>
      </section>

      <section style={{ background: "var(--paper)" }}>
        <Wrap className="rgrid1" style={{ paddingBlock: "20px 70px", gap: 40, "--cols": "1.05fr .95fr" } as VarStyle}>
          <div style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 20, padding: 32 }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "40px 10px" }}>
                <div style={{ width: 58, height: 58, borderRadius: "50%", background: "var(--lilac)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 18px", color: "var(--amethyst-dd)" }}>
                  <CheckIcon />
                </div>
                <h3 style={{ font: "700 20px var(--font-display)", color: "var(--ink)" }}>Message sent.</h3>
                <p style={{ font: "400 14px/1.6 var(--font-body)", color: "var(--muted)", marginTop: 8 }}>Thank you for reaching out — our team will respond within 2 business days.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <h2 style={{ font: "700 20px var(--font-display)", color: "var(--ink)", marginBottom: 20 }}>Send us a message</h2>
                <div className="rgrid1" style={{ gap: 14, marginBottom: 14, "--cols": "1fr 1fr" } as VarStyle}>
                  <div>
                    <label style={{ display: "block", font: "600 12.5px var(--font-body)", color: "var(--ink2)", marginBottom: 6 }}>Full name</label>
                    <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" style={inputStyle} />
                  </div>
                  <div>
                    <label style={{ display: "block", font: "600 12.5px var(--font-body)", color: "var(--ink2)", marginBottom: 6 }}>Email</label>
                    <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@email.com" style={inputStyle} />
                  </div>
                </div>
                <label style={{ display: "block", font: "600 12.5px var(--font-body)", color: "var(--ink2)", marginBottom: 6 }}>Topic</label>
                <select value={topic} onChange={(e) => setTopic(e.target.value)} style={{ ...inputStyle, marginBottom: 14 }}>
                  {TOPICS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <label style={{ display: "block", font: "600 12.5px var(--font-body)", color: "var(--ink2)", marginBottom: 6 }}>Message</label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can we help?"
                  rows={5}
                  style={{ ...inputStyle, height: "auto", padding: "12px 14px", resize: "vertical", marginBottom: 20 }}
                />
                <button
                  type="submit"
                  style={{ width: "100%", padding: 15, border: "none", borderRadius: 13, background: "var(--amethyst)", color: "#fff", font: "700 15px var(--font-body)", cursor: "pointer" }}
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {CHANNELS.map((c) => (
              <div key={c.label} style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 16, padding: "20px 22px" }}>
                <div style={{ font: "600 11px var(--font-body)", letterSpacing: ".1em", textTransform: "uppercase", color: "var(--amethyst-dd)" }}>{c.label}</div>
                <div style={{ font: "700 16px var(--font-display)", color: "var(--ink)", marginTop: 6 }}>{c.value}</div>
                <div style={{ font: "400 12.5px var(--font-body)", color: "var(--muted)", marginTop: 4 }}>{c.note}</div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>
    </div>
  );
}
