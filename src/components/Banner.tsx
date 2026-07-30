"use client";

import { useSite } from "@/context/site-context";
import { Wrap } from "./ui";

export function Banner() {
  const { quickExit } = useSite();
  return (
    <div style={{ background: "var(--ink-deep)", color: "rgba(255,255,255,.82)" }}>
      <Wrap
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          height: 38,
          font: "500 12px var(--font-body)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 9, minWidth: 0, flex: 1 }}>
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "var(--gold)",
              boxShadow: "0 0 0 4px rgba(232,169,59,.18)",
              flex: "none",
            }}
          />
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            24/7 Confidential GBV Helpline · <b style={{ fontWeight: 600, color: "#fff" }}>0800-000-1212</b>
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 20, flex: "none" }}>
          <span className="topbar-locale" style={{ opacity: 0.7 }}>
            EN · HA
          </span>
          <button
            onClick={quickExit}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(255,255,255,.1)",
              border: "1px solid rgba(255,255,255,.18)",
              color: "#fff",
              padding: "5px 11px",
              borderRadius: 7,
              font: "600 11.5px var(--font-body)",
              cursor: "pointer",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
            Quick exit
          </button>
        </div>
      </Wrap>
    </div>
  );
}
