'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

interface QuickExitContextValue {
  activate: () => void;
}

const QuickExitContext = createContext<QuickExitContextValue | null>(null);

/** GBV-safety pattern: lets any component (e.g. the header button) trigger the decoy screen. */
export function useQuickExit() {
  const ctx = useContext(QuickExitContext);
  if (!ctx) throw new Error('useQuickExit must be used within QuickExitProvider');
  return ctx;
}

/**
 * Wraps the whole app. When activated, the real site is unmounted (not just
 * covered) and replaced with an unrelated weather screen, so a survivor
 * browsing on a monitored device can hide what they were looking at instantly.
 */
export default function QuickExitProvider({ children }: { children: ReactNode }) {
  const [exited, setExited] = useState(false);

  const activate = () => {
    setExited(true);
    try {
      window.scrollTo(0, 0);
    } catch {
      /* noop */
    }
  };

  if (exited) {
    return <WeatherDecoy onReturn={() => setExited(false)} />;
  }

  return <QuickExitContext.Provider value={{ activate }}>{children}</QuickExitContext.Provider>;
}

function WeatherDecoy({ onReturn }: { onReturn: () => void }) {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 999,
        background: '#fff',
        color: '#1f2937',
        fontFamily: "'Poppins',sans-serif",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 18,
        textAlign: 'center',
        padding: 40,
      }}
    >
      <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '.04em', color: '#2563eb' }}>Weather · Today</div>
      <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1, color: '#111' }}>27°C</div>
      <div style={{ color: '#6b7280' }}>Maiduguri — Partly cloudy. Wind 12 km/h. Humidity 38%.</div>
      <button
        onClick={onReturn}
        style={{
          marginTop: 18,
          padding: '9px 16px',
          border: '1px solid #e5e7eb',
          borderRadius: 8,
          background: '#f9fafb',
          color: '#6b7280',
          fontSize: 12,
          fontWeight: 500,
          cursor: 'pointer',
        }}
      >
        ‹ Return to site
      </button>
    </div>
  );
}
