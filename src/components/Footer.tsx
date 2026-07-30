"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useSite } from "@/context/site-context";
import { Wrap, type VarStyle } from "./ui";

function SocialIcon({ path, viewBox = "0 0 24 24", stroke }: { path: ReactNode; viewBox?: string; stroke?: boolean }) {
  return (
    <a
      style={{
        width: 34,
        height: 34,
        borderRadius: 9,
        border: "1px solid rgba(255,255,255,.16)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <svg width="15" height="15" viewBox={viewBox} fill={stroke ? "none" : "currentColor"} stroke={stroke ? "currentColor" : undefined} strokeWidth={stroke ? 2 : undefined}>
        {path}
      </svg>
    </a>
  );
}

export function Footer() {
  const { subscribed, subscribe } = useSite();

  return (
    <footer style={{ background: "var(--ink-deep)", color: "rgba(255,255,255,.7)" }}>
      <Wrap
        className="rgrid2"
        style={
          {
            paddingBlock: "58px 30px",
            gap: 40,
            "--cols": "1.5fr 1fr 1fr 1.4fr",
          } as VarStyle
        }
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 16 }}>
            <svg width="30" height="30" viewBox="0 0 34 34" fill="none">
              <circle cx="17" cy="17" r="6.2" fill="var(--gold)" />
              <g stroke="var(--gold)" strokeWidth="2.3" strokeLinecap="round">
                <line x1="17" y1="3" x2="17" y2="7" />
                <line x1="17" y1="27" x2="17" y2="31" />
                <line x1="3" y1="17" x2="7" y2="17" />
                <line x1="27" y1="17" x2="31" y2="17" />
                <line x1="7.5" y1="7.5" x2="10.3" y2="10.3" />
                <line x1="23.7" y1="23.7" x2="26.5" y2="26.5" />
                <line x1="7.5" y1="26.5" x2="10.3" y2="23.7" />
                <line x1="23.7" y1="10.3" x2="26.5" y2="7.5" />
              </g>
            </svg>
            <span style={{ font: "800 19px/1 var(--font-display)", color: "#fff" }}>Haske</span>
          </div>
          <p style={{ font: "400 13.5px/1.65 var(--font-body)", color: "rgba(255,255,255,.62)", maxWidth: "32ch" }}>
            A woman-led, youth-driven humanitarian NGO bringing light, dignity and protection to crisis-affected communities across Northern Nigeria.
          </p>
          <div style={{ display: "flex", gap: 9, marginTop: 18 }}>
            <SocialIcon path={<path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.6l-5.17-6.76L4.8 22H1.54l8.02-9.17L1.5 2h6.77l4.67 6.17L18.244 2Zm-1.16 18h1.8L7.02 3.9H5.09L17.084 20Z" />} />
            <SocialIcon path={<path d="M13.5 9H16l.5-3h-3V4.2c0-.86.3-1.45 1.5-1.45H16.6V.1C16.27.06 15.2 0 13.96 0 11.36 0 9.6 1.57 9.6 4.45V6H7v3h2.6v9h3.9V9Z" />} />
            <SocialIcon
              stroke
              path={
                <>
                  <rect x="2" y="2" width="20" height="20" rx="5.5" />
                  <circle cx="12" cy="12" r="4.2" />
                  <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
                </>
              }
            />
            <SocialIcon path={<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21H9V9Z" />} />
          </div>
        </div>

        <div>
          <div style={{ font: "700 11px var(--font-body)", letterSpacing: ".14em", textTransform: "uppercase", color: "#fff", marginBottom: 15 }}>
            Explore
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, font: "400 13.5px var(--font-body)" }}>
            <Link href="/about" style={{ cursor: "pointer" }}>About us</Link>
            <Link href="/what-we-do" style={{ cursor: "pointer" }}>What we do</Link>
            <Link href="/impact" style={{ cursor: "pointer" }}>Our impact</Link>
            <Link href="/get-involved" style={{ cursor: "pointer" }}>Get involved</Link>
            <Link href="/contact" style={{ cursor: "pointer" }}>Contact</Link>
          </div>
        </div>

        <div>
          <div style={{ font: "700 11px var(--font-body)", letterSpacing: ".14em", textTransform: "uppercase", color: "#fff", marginBottom: 15 }}>
            Programs
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, font: "400 13.5px var(--font-body)" }}>
            <Link href="/what-we-do" style={{ cursor: "pointer" }}>GBV prevention & response</Link>
            <Link href="/what-we-do" style={{ cursor: "pointer" }}>Water, sanitation & hygiene</Link>
            <Link href="/what-we-do" style={{ cursor: "pointer" }}>Education in emergencies</Link>
            <Link href="/what-we-do" style={{ cursor: "pointer" }}>Health & psychosocial support</Link>
            <Link href="/what-we-do" style={{ cursor: "pointer" }}>Livelihoods & resilience</Link>
          </div>
        </div>

        <div>
          <div style={{ font: "700 11px var(--font-body)", letterSpacing: ".14em", textTransform: "uppercase", color: "#fff", marginBottom: 15 }}>
            Stay in the light
          </div>
          <p style={{ font: "400 13px/1.6 var(--font-body)", color: "rgba(255,255,255,.6)", marginBottom: 13 }}>
            Field stories and impact updates — never spam.
          </p>
          {subscribed ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                padding: "12px 14px",
                background: "rgba(232,169,59,.14)",
                border: "1px solid rgba(232,169,59,.34)",
                borderRadius: 11,
                font: "600 13px var(--font-body)",
                color: "var(--gold)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              You&apos;re subscribed — thank you!
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                subscribe();
              }}
              style={{ display: "flex", gap: 8 }}
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                style={{
                  flex: 1,
                  minWidth: 0,
                  height: 44,
                  padding: "0 13px",
                  borderRadius: 10,
                  border: "1px solid rgba(255,255,255,.18)",
                  background: "rgba(255,255,255,.07)",
                  color: "#fff",
                  font: "400 13px var(--font-body)",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "0 16px",
                  border: "none",
                  borderRadius: 10,
                  background: "var(--gold)",
                  color: "#3a2a06",
                  font: "700 13px var(--font-body)",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Join
              </button>
            </form>
          )}
          <div style={{ marginTop: 16, font: "400 12.5px/1.5 var(--font-body)", color: "rgba(255,255,255,.55)" }}>
            hr@haskeinitiative.org
            <br />
            Maiduguri, Borno State · Nigeria
          </div>
        </div>
      </Wrap>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.1)" }}>
        <Wrap
          style={{
            paddingBlock: 18,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            font: "400 12px var(--font-body)",
            color: "rgba(255,255,255,.5)",
          }}
        >
          <span>© 2026 Haske Humanitarian Aid Initiative · Registered NNGO, Nigeria</span>
          <span style={{ fontStyle: "italic", fontFamily: "var(--font-serif)", fontSize: 14, color: "rgba(255,255,255,.62)" }}>
            &ldquo;Haske&rdquo; means light in Hausa.
          </span>
          <span style={{ display: "flex", gap: 18 }}>
            <a style={{ cursor: "pointer" }}>Privacy</a>
            <a style={{ cursor: "pointer" }}>Terms</a>
            <a style={{ cursor: "pointer" }}>Safeguarding</a>
          </span>
        </Wrap>
      </div>
    </footer>
  );
}
