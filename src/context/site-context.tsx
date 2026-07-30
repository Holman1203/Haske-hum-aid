"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";

export type Frequency = "once" | "monthly";
export type Designation = "where" | "gbv" | "wash" | "edu" | "health";

const DESIGNATION_LABELS: Record<Designation, string> = {
  where: "Where it's needed most",
  gbv: "GBV prevention & response",
  wash: "Water, sanitation & hygiene",
  edu: "Education in emergencies",
  health: "Health & psychosocial support",
};

interface SiteState {
  exited: boolean;
  quickExit: () => void;
  unExit: () => void;

  donateOpen: boolean;
  dStep: number;
  openDonate: () => void;
  continueToDetails: () => void;
  closeDonate: () => void;
  dNext: () => void;
  dBack: () => void;
  dComplete: () => void;

  freq: Frequency;
  setFreq: (f: Frequency) => void;
  amount: number;
  setAmount: (n: number) => void;
  custom: string;
  setCustom: (v: string) => void;
  amt: number;
  fee: number;
  total: number;
  impactText: string;
  donateLabel: string;

  desig: Designation;
  setDesig: (d: Designation) => void;
  desigLabel: string;

  coverFees: boolean;
  toggleFees: () => void;
  anon: boolean;
  toggleAnon: () => void;

  subscribed: boolean;
  subscribe: () => void;
}

const SiteContext = createContext<SiteState | null>(null);

function computeImpact(amt: number): string {
  if (amt >= 250) return "Keeps a safe learning space open for displaced children for a month.";
  if (amt >= 100) return "Powers a full community sensitization circle against gender-based violence.";
  if (amt >= 50) return "Funds a survivor's medical referral and case-management support.";
  if (amt >= 25) return "Provides hygiene & dignity supplies for a displaced woman.";
  if (amt > 0) return "Every gift helps restore safety, dignity and hope.";
  return "Choose or enter an amount to see your impact.";
}

export function SiteProvider({ children }: { children: ReactNode }) {
  const [exited, setExited] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [dStep, setDStep] = useState(1);
  const [freq, setFreqState] = useState<Frequency>("monthly");
  const [amount, setAmount] = useState(50);
  const [custom, setCustom] = useState("");
  const [desig, setDesig] = useState<Designation>("where");
  const [coverFees, setCoverFees] = useState(true);
  const [anon, setAnon] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const amt = useMemo(() => {
    const c = parseInt(custom, 10);
    return custom !== "" && !isNaN(c) ? c : amount;
  }, [custom, amount]);

  const fee = useMemo(() => (coverFees ? Math.round((amt * 0.029 + 0.3) * 100) / 100 : 0), [coverFees, amt]);
  const total = useMemo(() => Math.round((amt + fee) * 100) / 100, [amt, fee]);

  const value: SiteState = {
    exited,
    quickExit: () => {
      setExited(true);
      setDonateOpen(false);
      try {
        window.scrollTo(0, 0);
      } catch {}
    },
    unExit: () => setExited(false),

    donateOpen,
    dStep,
    openDonate: () => {
      setDonateOpen(true);
      setDStep(1);
    },
    continueToDetails: () => {
      setDonateOpen(true);
      setDStep(2);
    },
    closeDonate: () => setDonateOpen(false),
    dNext: () => setDStep((s) => Math.min(4, s + 1)),
    dBack: () => setDStep((s) => Math.max(1, s - 1)),
    dComplete: () => setDStep(4),

    freq,
    setFreq: (f) => {
      setFreqState(f);
      setAmount(50);
      setCustom("");
    },
    amount,
    setAmount: (n) => {
      setAmount(n);
      setCustom("");
    },
    custom,
    setCustom: (v) => setCustom(v.replace(/[^0-9]/g, "").slice(0, 6)),
    amt,
    fee,
    total,
    impactText: computeImpact(amt),
    donateLabel: `Donate $${amt}${freq === "monthly" ? " / month" : ""}`,

    desig,
    setDesig,
    desigLabel: DESIGNATION_LABELS[desig],

    coverFees,
    toggleFees: () => setCoverFees((v) => !v),
    anon,
    toggleAnon: () => setAnon((v) => !v),

    subscribed,
    subscribe: () => setSubscribed(true),
  };

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}

export const DONATE_AMOUNTS: Record<Frequency, number[]> = {
  monthly: [25, 50, 100, 250],
  once: [50, 100, 250, 500],
};

export const DESIGNATIONS: { key: Designation; label: string }[] = [
  { key: "where", label: "Where needed most" },
  { key: "gbv", label: "GBV response" },
  { key: "wash", label: "WASH" },
  { key: "edu", label: "Education" },
  { key: "health", label: "Health" },
];
