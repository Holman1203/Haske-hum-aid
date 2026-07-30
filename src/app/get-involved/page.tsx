"use client";

import { useState, type CSSProperties } from "react";
import Link from "next/link";
import { useSite } from "@/context/site-context";
import { CheckIcon } from "@/components/icons";
import { PageHero, PrimaryButton, Wrap, type VarStyle } from "@/components/ui";

function HandIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 12V5a1.5 1.5 0 0 1 3 0v6M14 11.5V4a1.5 1.5 0 0 1 3 0v8M17 12V6.5a1.5 1.5 0 0 1 3 0V14a7 7 0 0 1-7 7h-1a7 7 0 0 1-6-3.5l-2.5-4a1.4 1.4 0 0 1 2.3-1.6L8 15V5a1.5 1.5 0 0 1 3 0v7" />
    </svg>
  );
}
function BriefcaseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2.5" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M2 13h20" />
    </svg>
  );
}
function HandshakeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1.4 1.4 0 0 0 2-2l-3-3" />
      <path d="m14 14 3 3a1.4 1.4 0 0 0 2-2l-4.5-4.5" />
      <path d="m21 11-3.5-3.5a2 2 0 0 0-1.4-.6H13l-2.2-2.2a2 2 0 0 0-2.7-.1L4 8" />
      <path d="M3 8v6h2M9 18l-2-2" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
    </svg>
  );
}

const WAYS = [
  { Icon: HeartIcon, title: "Donate", desc: "One-time or monthly — 100% goes directly to programs.", cta: "Donate now", anchor: null },
  { Icon: HandIcon, title: "Volunteer", desc: "Field, remote and skills-based roles for individuals and groups.", cta: "Apply to volunteer", anchor: "#volunteer" },
  { Icon: BriefcaseIcon, title: "Careers", desc: "Join our full-time team across Northeast & Northwest Nigeria.", cta: "View openings", anchor: "#careers" },
  { Icon: HandshakeIcon, title: "Partner with us", desc: "Institutional donors, corporates and CSO networks.", cta: "Start a partnership", anchor: "#partner" },
];

const INTERESTS = ["GBV prevention & response", "WASH", "Education in emergencies", "Health & psychosocial support", "Livelihoods & resilience", "General / where needed"];

const OPENINGS = [
  { title: "GBV Case Worker", location: "Maiduguri, Borno", type: "Full-time" },
  { title: "WASH Field Officer", location: "Damaturu, Yobe", type: "Full-time" },
  { title: "M&E Officer", location: "Maiduguri, Borno", type: "Full-time" },
  { title: "Community Mobilizer (Volunteer)", location: "Multiple LGAs", type: "Volunteer" },
];

export default function GetInvolvedPage() {
  const { openDonate } = useSite();
  const [interest, setInterest] = useState(INTERESTS[0]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div>
      <PageHero
        eyebrow="Get involved"
        title="There are many ways to bring light."
        intro="Whether you have five minutes, five hours a week, or a professional skill to share — there's a place for you in this work."
      >
        <div style={{ marginTop: 30 }}>
          <PrimaryButton onClick={openDonate}>Donate now</PrimaryButton>
        </div>
      </PageHero>

      <section style={{ background: "var(--paper)" }}>
        <Wrap className="rgrid2" style={{ paddingBlock: 64, gap: 18, "--cols": "repeat(4,1fr)" } as VarStyle}>
          {WAYS.map((w) => {
            const card = (
              <>
                <span style={{ display: "inline-flex", width: 46, height: 46, borderRadius: 12, background: "var(--lilac)", alignItems: "center", justifyContent: "center", color: "var(--amethyst-dd)" }}>
                  <w.Icon />
                </span>
                <h3 style={{ font: "700 18px var(--font-display)", color: "var(--ink)", margin: "18px 0 0" }}>{w.title}</h3>
                <p style={{ font: "400 13.5px/1.6 var(--font-body)", color: "var(--muted)", margin: "9px 0 0", flex: 1 }}>{w.desc}</p>
                <span style={{ font: "700 13px var(--font-body)", color: "var(--amethyst-dd)", marginTop: 16 }}>{w.cta} →</span>
              </>
            );
            const style: CSSProperties = { background: "#fff", border: "1px solid var(--line)", borderRadius: 16, padding: 26, display: "flex", flexDirection: "column", cursor: "pointer" };
            return w.anchor ? (
              <a key={w.title} href={w.anchor} style={style}>
                {card}
              </a>
            ) : (
              <button key={w.title} onClick={openDonate} style={{ ...style, textAlign: "left" }}>
                {card}
              </button>
            );
          })}
        </Wrap>
      </section>

      <section id="volunteer" style={{ background: "#fff", borderTop: "1px solid var(--line)" }}>
        <Wrap className="rgrid1" style={{ paddingBlock: 70, gap: 54, "--cols": ".95fr 1.05fr" } as VarStyle}>
          <div>
            <span style={{ font: "600 11.5px var(--font-body)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--amethyst-dd)" }}>Volunteer</span>
            <h2 style={{ font: "700 clamp(26px,2.8vw,36px)/1.2 var(--font-display)", letterSpacing: "-.02em", color: "var(--ink)", margin: "14px 0 0" }}>
              Bring your time and skills to the field.
            </h2>
            <p style={{ font: "400 15.5px/1.72 var(--font-body)", color: "var(--ink2)", marginTop: 18, maxWidth: "48ch" }}>
              We work with individual volunteers, university groups and skills-based professionals — from community mobilization to WASH construction support to remote M&E and communications help.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 22 }}>
              {["Community mobilization & sensitization", "Field support (WASH, education, health outreach)", "Remote: M&E, comms, grant writing"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                  <span style={{ color: "var(--amethyst-dd)", flex: "none", marginTop: 2 }}>
                    <CheckIcon />
                  </span>
                  <span style={{ font: "500 13.5px/1.5 var(--font-body)", color: "var(--ink2)" }}>{t}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "var(--paper)", border: "1px solid var(--line)", borderRadius: 20, padding: 28 }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "30px 10px" }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--lilac)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", color: "var(--amethyst-dd)" }}>
                  <CheckIcon />
                </div>
                <h3 style={{ font: "700 19px var(--font-display)", color: "var(--ink)" }}>Thanks for stepping up.</h3>
                <p style={{ font: "400 13.5px/1.6 var(--font-body)", color: "var(--muted)", marginTop: 8 }}>Our volunteer coordinator will reach out within a few days.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <h3 style={{ font: "700 18px var(--font-display)", color: "var(--ink)", marginBottom: 18 }}>Volunteer sign-up</h3>
                <label style={{ display: "block", font: "600 12.5px var(--font-body)", color: "var(--ink2)", marginBottom: 6 }}>Full name</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  style={{ width: "100%", height: 46, padding: "0 14px", border: "1.5px solid var(--line)", borderRadius: 11, font: "500 14px var(--font-body)", color: "var(--ink)", outline: "none", marginBottom: 14, background: "#fff" }}
                />
                <label style={{ display: "block", font: "600 12.5px var(--font-body)", color: "var(--ink2)", marginBottom: 6 }}>Email</label>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  style={{ width: "100%", height: 46, padding: "0 14px", border: "1.5px solid var(--line)", borderRadius: 11, font: "500 14px var(--font-body)", color: "var(--ink)", outline: "none", marginBottom: 14, background: "#fff" }}
                />
                <label style={{ display: "block", font: "600 12.5px var(--font-body)", color: "var(--ink2)", marginBottom: 6 }}>Area of interest</label>
                <select
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  style={{ width: "100%", height: 46, padding: "0 14px", border: "1.5px solid var(--line)", borderRadius: 11, font: "500 14px var(--font-body)", color: "var(--ink)", outline: "none", marginBottom: 20, background: "#fff" }}
                >
                  {INTERESTS.map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
                <button
                  type="submit"
                  style={{ width: "100%", padding: 15, border: "none", borderRadius: 13, background: "var(--amethyst)", color: "#fff", font: "700 15px var(--font-body)", cursor: "pointer" }}
                >
                  Submit interest
                </button>
              </form>
            )}
          </div>
        </Wrap>
      </section>

      <section id="careers" style={{ background: "var(--paper)" }}>
        <Wrap style={{ paddingBlock: 70 }}>
          <span style={{ font: "600 11.5px var(--font-body)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--amethyst-dd)" }}>Careers</span>
          <h2 style={{ font: "700 clamp(26px,2.8vw,36px)/1.2 var(--font-display)", letterSpacing: "-.02em", color: "var(--ink)", margin: "14px 0 34px" }}>Current openings</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {OPENINGS.map((o) => (
              <div key={o.title} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, background: "#fff", border: "1px solid var(--line)", borderRadius: 14, padding: "18px 22px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ font: "700 15.5px var(--font-body)", color: "var(--ink)" }}>{o.title}</div>
                  <div style={{ font: "400 12.5px var(--font-body)", color: "var(--muted)", marginTop: 4 }}>{o.location}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span style={{ padding: "6px 12px", background: "var(--lilac)", color: "var(--amethyst-dd)", borderRadius: 8, font: "600 11.5px var(--font-body)" }}>{o.type}</span>
                  <Link href="/contact" style={{ font: "700 13px var(--font-body)", color: "var(--amethyst-dd)", cursor: "pointer" }}>
                    Apply →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <p style={{ font: "400 13px/1.6 var(--font-body)", color: "var(--muted)", marginTop: 20 }}>
            To apply, send your CV and a short cover note to{" "}
            <a style={{ color: "var(--amethyst-dd)", fontWeight: 600 }}>hr@haskeinitiative.org</a>, referencing the role title.
          </p>
        </Wrap>
      </section>

      <section id="partner" style={{ background: "var(--ink-deep)", color: "#fff" }}>
        <Wrap className="rgrid1" style={{ paddingBlock: 70, gap: 50, alignItems: "center", "--cols": "1.1fr .9fr" } as VarStyle}>
          <div>
            <span style={{ font: "600 11.5px var(--font-body)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--gold)" }}>Partner with us</span>
            <h2 style={{ font: "700 clamp(26px,2.8vw,36px)/1.2 var(--font-display)", letterSpacing: "-.02em", color: "#fff", margin: "14px 0 16px" }}>
              For institutional donors, corporates & CSO networks.
            </h2>
            <p style={{ font: "400 15px/1.7 var(--font-body)", color: "rgba(255,255,255,.72)", maxWidth: "48ch" }}>
              We partner with UN agencies, government ministries, foundations and corporate CSR programs on co-funded and jointly-implemented protection, WASH and education projects across Northern Nigeria.
            </p>
          </div>
          <div style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.14)", borderRadius: 18, padding: 28 }}>
            <div style={{ font: "700 16px var(--font-display)", color: "#fff", marginBottom: 14 }}>Get in touch about a partnership</div>
            <div style={{ font: "400 13.5px/1.6 var(--font-body)", color: "rgba(255,255,255,.72)" }}>
              partnerships@haskeinitiative.org
              <br />
              Maiduguri, Borno State · Nigeria
            </div>
            <Link
              href="/contact"
              style={{ display: "inline-flex", marginTop: 20, padding: "13px 20px", border: "none", borderRadius: 12, background: "var(--gold)", color: "#3a2a06", font: "700 14px var(--font-body)", cursor: "pointer" }}
            >
              Contact partnerships team
            </Link>
          </div>
        </Wrap>
      </section>
    </div>
  );
}
