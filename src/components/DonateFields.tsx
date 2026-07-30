"use client";

import { DONATE_AMOUNTS, useSite } from "@/context/site-context";
import { chipStyle, segStyle } from "@/lib/donate-styles";

export function DonateFields() {
  const { freq, setFreq, amt, custom, setCustom, setAmount, impactText } = useSite();
  const amounts = DONATE_AMOUNTS[freq];

  return (
    <>
      <div style={{ display: "flex", gap: 4, padding: 4, background: "var(--lilac)", borderRadius: 11, marginBottom: 14 }}>
        <button style={segStyle(freq === "once")} onClick={() => setFreq("once")}>
          One-time
        </button>
        <button style={segStyle(freq === "monthly")} onClick={() => setFreq("monthly")}>
          Monthly
        </button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8 }}>
        {amounts.map((v) => (
          <button key={v} style={chipStyle(amt === v && custom === "")} onClick={() => setAmount(v)}>
            ${v}
          </button>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 9,
          marginTop: 9,
          padding: "0 14px",
          height: 48,
          border: "1.5px solid var(--line)",
          borderRadius: 12,
        }}
      >
        <span style={{ font: "700 16px var(--font-display)", color: "var(--muted)" }}>$</span>
        <input
          value={custom}
          onChange={(e) => setCustom(e.target.value)}
          inputMode="numeric"
          placeholder="Other amount"
          style={{
            flex: 1,
            minWidth: 0,
            border: "none",
            outline: "none",
            background: "transparent",
            font: "600 15px var(--font-body)",
            color: "var(--ink)",
          }}
        />
      </div>
      <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginTop: 14, padding: "12px 13px", background: "var(--lilac)", borderRadius: 11 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--amethyst-dd)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flex: "none", marginTop: 1 }}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
        <p style={{ margin: 0, font: "500 12.5px/1.45 var(--font-body)", color: "var(--ink2)" }}>{impactText}</p>
      </div>
    </>
  );
}
