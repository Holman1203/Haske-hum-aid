import { CSSProperties } from "react";

export function segStyle(active: boolean): CSSProperties {
  const base: CSSProperties = {
    flex: 1,
    padding: "10px 0",
    borderRadius: 9,
    border: "none",
    font: "600 13.5px var(--font-body)",
    cursor: "pointer",
  };
  return active
    ? { ...base, background: "#fff", color: "var(--ink)", boxShadow: "0 2px 8px rgba(41,22,65,.14)" }
    : { ...base, background: "transparent", color: "var(--muted)" };
}

export function chipStyle(active: boolean): CSSProperties {
  const base: CSSProperties = {
    padding: "15px 0",
    borderRadius: 12,
    font: "700 17px var(--font-display)",
    cursor: "pointer",
    textAlign: "center",
  };
  return active
    ? { ...base, border: "1.5px solid var(--amethyst)", background: "var(--amethyst)", color: "#fff", boxShadow: "0 6px 16px -6px rgba(153,102,204,.6)" }
    : { ...base, border: "1.5px solid var(--line2)", background: "#fff", color: "var(--ink)" };
}

export function desigStyle(active: boolean): CSSProperties {
  const base: CSSProperties = {
    padding: "9px 13px",
    borderRadius: 9,
    font: "600 12.5px var(--font-body)",
    cursor: "pointer",
    whiteSpace: "nowrap",
  };
  return active
    ? { ...base, border: "1.5px solid var(--amethyst)", background: "var(--lilac)", color: "var(--amethyst-dd)" }
    : { ...base, border: "1.5px solid var(--line)", background: "#fff", color: "var(--muted)" };
}
