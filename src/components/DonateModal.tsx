"use client";

import { useState } from "react";
import { DESIGNATIONS, useSite } from "@/context/site-context";
import { DonateFields } from "./DonateFields";
import { desigStyle } from "@/lib/donate-styles";

const PROGRESS: Record<number, string> = { 1: "25%", 2: "55%", 3: "80%", 4: "100%" };

const STEP_TITLE: Record<number, string> = {
  1: "Make a donation",
  2: "Your details",
  3: "Review your gift",
  4: "Thank you",
};

function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Close"
      style={{
        width: 32,
        height: 32,
        borderRadius: 9,
        border: "1px solid var(--line)",
        background: "#fff",
        color: "var(--muted)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    </button>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label style={{ display: "block", font: "600 12.5px var(--font-body)", color: "var(--ink2)", marginBottom: 6 }}>{children}</label>;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  height: 46,
  padding: "0 14px",
  border: "1.5px solid var(--line)",
  borderRadius: 11,
  font: "500 14px var(--font-body)",
  color: "var(--ink)",
  outline: "none",
};

export function DonateModal() {
  const { donateOpen, dStep, closeDonate, dBack, dNext, dComplete, freq, amt, fee, coverFees, toggleFees, anon, toggleAnon, desig, setDesig, desigLabel, total } =
    useSite();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!donateOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(28,15,46,.6)",
        backdropFilter: "blur(3px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflowY: "auto",
        padding: "48px 16px",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) closeDonate();
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 460,
          background: "#fff",
          borderRadius: 20,
          padding: 24,
          boxShadow: "0 30px 70px -30px rgba(0,0,0,.6)",
          animation: "scaleIn .18s ease",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <span style={{ font: "700 19px var(--font-display)", color: "var(--ink)" }}>{STEP_TITLE[dStep]}</span>
          {dStep < 4 ? (
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                font: "600 10px var(--font-body)",
                letterSpacing: ".1em",
                textTransform: "uppercase",
                color: "var(--amethyst-dd)",
                background: "var(--lilac)",
                padding: "5px 9px",
                borderRadius: 7,
              }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <rect x="4" y="10" width="16" height="11" rx="2" />
                <path d="M8 10V7a4 4 0 0 1 8 0v3" />
              </svg>
              Secure
            </span>
          ) : (
            <CloseButton onClick={closeDonate} />
          )}
        </div>

        {dStep < 4 && (
          <div style={{ height: 5, borderRadius: 99, background: "var(--lilac)", overflow: "hidden", marginBottom: 20 }}>
            <div style={{ width: PROGRESS[dStep], height: "100%", background: "var(--amethyst)", transition: "width .2s ease" }} />
          </div>
        )}

        {dStep === 1 && (
          <>
            <DonateFields />
            <button
              onClick={dNext}
              style={{
                width: "100%",
                marginTop: 15,
                padding: 15,
                border: "none",
                borderRadius: 13,
                background: "var(--amethyst)",
                color: "#fff",
                font: "700 15.5px var(--font-body)",
                cursor: "pointer",
              }}
            >
              Continue →
            </button>
          </>
        )}

        {dStep === 2 && (
          <>
            <FieldLabel>Where should this gift go?</FieldLabel>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 18 }}>
              {DESIGNATIONS.map((d) => (
                <button key={d.key} style={desigStyle(desig === d.key)} onClick={() => setDesig(d.key)}>
                  {d.label}
                </button>
              ))}
            </div>
            <FieldLabel>Full name</FieldLabel>
            <input style={{ ...inputStyle, marginBottom: 14 }} value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" />
            <FieldLabel>Email</FieldLabel>
            <input style={{ ...inputStyle, marginBottom: 16 }} value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="you@email.com" />

            <label style={{ display: "flex", alignItems: "center", gap: 10, font: "500 13.5px var(--font-body)", color: "var(--ink2)", marginBottom: 10, cursor: "pointer" }}>
              <input type="checkbox" checked={coverFees} onChange={toggleFees} style={{ width: 17, height: 17, accentColor: "var(--amethyst)" }} />
              Add ${fee.toFixed(2)} to cover processing fees
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 10, font: "500 13.5px var(--font-body)", color: "var(--ink2)", marginBottom: 20, cursor: "pointer" }}>
              <input type="checkbox" checked={anon} onChange={toggleAnon} style={{ width: 17, height: 17, accentColor: "var(--amethyst)" }} />
              Give anonymously
            </label>

            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={dBack}
                style={{ flex: "0 0 100px", padding: 15, border: "1.5px solid var(--line)", borderRadius: 13, background: "#fff", color: "var(--ink)", font: "600 14px var(--font-body)", cursor: "pointer" }}
              >
                ← Back
              </button>
              <button
                onClick={dNext}
                disabled={!name || !email}
                style={{
                  flex: 1,
                  padding: 15,
                  border: "none",
                  borderRadius: 13,
                  background: !name || !email ? "var(--line2)" : "var(--amethyst)",
                  color: "#fff",
                  font: "700 15.5px var(--font-body)",
                  cursor: !name || !email ? "not-allowed" : "pointer",
                }}
              >
                Review gift →
              </button>
            </div>
          </>
        )}

        {dStep === 3 && (
          <>
            <div style={{ border: "1px solid var(--line)", borderRadius: 14, padding: 18, marginBottom: 16 }}>
              <SummaryRow label="Gift">
                ${amt} {freq === "monthly" ? "/ month" : "one-time"}
              </SummaryRow>
              <SummaryRow label="Designation">{desigLabel}</SummaryRow>
              <SummaryRow label="Donor">{anon ? "Anonymous" : name || "—"}</SummaryRow>
              {coverFees && <SummaryRow label="Processing fee">${fee.toFixed(2)}</SummaryRow>}
              <div style={{ borderTop: "1px solid var(--line)", margin: "10px 0", paddingTop: 12, display: "flex", justifyContent: "space-between" }}>
                <span style={{ font: "700 14px var(--font-body)", color: "var(--ink)" }}>Total today</span>
                <span style={{ font: "800 18px var(--font-display)", color: "var(--amethyst-dd)" }}>${total.toFixed(2)}</span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 13px",
                background: "var(--lilac)",
                borderRadius: 11,
                marginBottom: 20,
                font: "500 12.5px/1.4 var(--font-body)",
                color: "var(--ink2)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amethyst-dd)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none" }}>
                <rect x="2" y="5" width="20" height="14" rx="2.5" />
                <path d="M2 10h20" />
              </svg>
              Demo prototype — no real payment is processed.
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={dBack}
                style={{ flex: "0 0 100px", padding: 15, border: "1.5px solid var(--line)", borderRadius: 13, background: "#fff", color: "var(--ink)", font: "600 14px var(--font-body)", cursor: "pointer" }}
              >
                ← Back
              </button>
              <button
                onClick={dComplete}
                style={{ flex: 1, padding: 15, border: "none", borderRadius: 13, background: "var(--amethyst)", color: "#fff", font: "700 15.5px var(--font-body)", cursor: "pointer" }}
              >
                Confirm donation
              </button>
            </div>
          </>
        )}

        {dStep === 4 && (
          <div style={{ textAlign: "center", padding: "10px 4px 4px" }}>
            <div
              style={{
                width: 62,
                height: 62,
                borderRadius: "50%",
                background: "var(--lilac)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 18px",
                animation: "scaleIn .25s ease",
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--amethyst-dd)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <h3 style={{ font: "700 22px var(--font-display)", color: "var(--ink)", margin: "0 0 8px" }}>
              You just brought light to someone&apos;s darkest hour.
            </h3>
            <p style={{ font: "400 14px/1.6 var(--font-body)", color: "var(--muted)", margin: "0 0 20px" }}>
              A confirmation for your ${total.toFixed(2)} {freq === "monthly" ? "monthly" : "one-time"} gift toward{" "}
              <strong style={{ color: "var(--ink2)" }}>{desigLabel.toLowerCase()}</strong> has been sent to{" "}
              {email || "your email"}.
            </p>
            <button
              onClick={closeDonate}
              style={{ width: "100%", padding: 15, border: "none", borderRadius: 13, background: "var(--amethyst)", color: "#fff", font: "700 15.5px var(--font-body)", cursor: "pointer" }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function SummaryRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "6px 0", font: "500 13.5px var(--font-body)" }}>
      <span style={{ color: "var(--muted)" }}>{label}</span>
      <span style={{ color: "var(--ink)", fontWeight: 600 }}>{children}</span>
    </div>
  );
}
