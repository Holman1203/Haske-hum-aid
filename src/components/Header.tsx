"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSite } from "@/context/site-context";
import { Wrap } from "./ui";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 34 34" fill="none" aria-hidden="true">
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
  );
}

export function Header() {
  const pathname = usePathname();
  const { openDonate } = useSite();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(41,22,65,.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255,255,255,.09)",
      }}
    >
      <Wrap style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 20, height: 70 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 11, cursor: "pointer" }} onClick={() => setMenuOpen(false)}>
          <Logo />
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
            <span style={{ font: "800 21px/1 var(--font-display)", letterSpacing: "-.02em", color: "#fff" }}>Haske</span>
            <span
              style={{
                font: "600 8px/1 var(--font-body)",
                letterSpacing: ".2em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,.55)",
                marginTop: 3,
              }}
            >
              Humanitarian Aid Initiative
            </span>
          </span>
        </Link>

        <nav className="nav-desktop" style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {NAV_ITEMS.map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                style={{
                  font: "500 14px var(--font-body)",
                  color: active ? "#fff" : "rgba(255,255,255,.72)",
                  cursor: "pointer",
                  paddingBottom: 3,
                  borderBottom: active ? "2px solid var(--gold)" : "2px solid transparent",
                }}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <Link
            href="/contact"
            className="nav-desktop"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              border: "1px solid rgba(255,255,255,.28)",
              padding: "9px 14px",
              borderRadius: 10,
              font: "600 13px var(--font-body)",
              color: "#fff",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--gold)" }} />
            Get Help
          </Link>
          <button
            onClick={openDonate}
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: 10,
              font: "700 13.5px var(--font-body)",
              background: "var(--gold)",
              color: "#3a2a06",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Donate
          </button>
          <button
            className="nav-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              display: "none",
              width: 38,
              height: 38,
              borderRadius: 9,
              border: "1px solid rgba(255,255,255,.28)",
              background: "transparent",
              color: "#fff",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flex: "none",
            }}
          >
            {menuOpen ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </Wrap>

      {menuOpen && (
        <nav
          style={{
            borderTop: "1px solid rgba(255,255,255,.09)",
            background: "rgba(28,15,46,.98)",
            padding: "10px 20px 20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {NAV_ITEMS.map((n) => {
            const active = n.href === "/" ? pathname === "/" : pathname.startsWith(n.href);
            return (
              <Link
                key={n.href}
                href={n.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "13px 4px",
                  font: "600 15px var(--font-body)",
                  color: active ? "#fff" : "rgba(255,255,255,.72)",
                  borderBottom: "1px solid rgba(255,255,255,.08)",
                }}
              >
                {n.label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              padding: "13px 4px",
              font: "600 15px var(--font-body)",
              color: "#fff",
            }}
          >
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--gold)" }} />
            Get Help
          </Link>
        </nav>
      )}
    </header>
  );
}
