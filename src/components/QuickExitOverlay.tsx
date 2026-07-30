"use client";

import { useSite } from "@/context/site-context";

export function QuickExitOverlay() {
  const { exited, unExit } = useSite();
  if (!exited) return null;
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 120,
        background: "#fff",
        color: "#1f2937",
        fontFamily: "var(--font-body)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 18,
        textAlign: "center",
        padding: 40,
      }}
    >
      <div style={{ font: "600 13px var(--font-body)", letterSpacing: ".04em", color: "#2563eb" }}>Weather · Today</div>
      <div style={{ font: "700 64px/1 var(--font-body)", color: "#111" }}>27°C</div>
      <div style={{ color: "#6b7280" }}>Maiduguri — Partly cloudy. Wind 12 km/h. Humidity 38%.</div>
      <button
        onClick={unExit}
        style={{
          marginTop: 18,
          padding: "9px 16px",
          border: "1px solid #e5e7eb",
          borderRadius: 8,
          background: "#f9fafb",
          color: "#6b7280",
          font: "500 12px var(--font-body)",
          cursor: "pointer",
        }}
      >
        ‹ Return to Haske website (demo Quick Exit)
      </button>
    </div>
  );
}
