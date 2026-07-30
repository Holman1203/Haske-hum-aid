"use client";

import { useSite } from "@/context/site-context";
import { PageHero, PhotoPlaceholder, PrimaryButton, SecondaryButton, Stat, Wrap, type VarStyle } from "@/components/ui";

const HEADLINE_STATS = [
  { value: "12,000", suffix: "+", label: "People reached since 2022" },
  { value: "85", suffix: "+", label: "Communities served" },
  { value: "4", label: "States across NE & NW Nigeria" },
  { value: "100", suffix: "%", label: "Community-led delivery" },
];

const PROGRAM_STATS = [
  { value: "3,400", suffix: "+", label: "GBV survivors supported with case management & referral", color: "var(--amethyst-dd)" },
  { value: "40", suffix: "+", label: "Safe water points & WASH facilities built or repaired", color: "var(--amethyst-dd)" },
  { value: "6,200", suffix: "+", label: "Children in safe learning spaces", color: "var(--gold-d)" },
  { value: "1,800", suffix: "+", label: "People reached with health & psychosocial support", color: "var(--gold-d)" },
];

const STORIES = [
  {
    quote: "When I arrived at the camp I had nothing and no one. Haske gave me care, a referral, and the courage to rebuild. Today I run a small tailoring stall and support my children.",
    name: "Aisha, 29",
    role: "Survivor & livelihoods participant · Maiduguri",
  },
  {
    quote: "The safe learning space meant my daughter could go back to school for the first time since we fled our village. She wants to be a nurse now.",
    name: "Fatima, 34",
    role: "Parent, education programme · Konduga LGA",
  },
  {
    quote: "Our community used to walk two hours for water that wasn't even safe to drink. Now there's a borehole with lockable, lit latrines right in the camp.",
    name: "Musa, 41",
    role: "WASH committee chair · Yobe State",
  },
];

const REGIONS = [
  { label: "Borno", pct: 92, desc: "Maiduguri, Konduga, Jere, Mafa" },
  { label: "Adamawa", pct: 74, desc: "Yola, Girei, Mubi" },
  { label: "Yobe", pct: 61, desc: "Damaturu, Potiskum" },
  { label: "Northwest Nigeria", pct: 43, desc: "Emerging protection response" },
];

const REPORTS = [
  { title: "Annual Report 2025", meta: "Programme & financial overview · PDF" },
  { title: "GBV Situation Brief — Q1 2026", meta: "Northeast Nigeria protection update · PDF" },
  { title: "WASH Impact Snapshot", meta: "Facilities built & communities reached · PDF" },
  { title: "Financial Accountability Statement", meta: "Audited summary · PDF" },
];

function ReportIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}
function DownloadIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4" />
      <path d="M4 19h16" />
    </svg>
  );
}

export default function ImpactPage() {
  const { openDonate } = useSite();

  return (
    <div>
      <PageHero
        eyebrow="Our impact"
        title="Light, measured."
        intro="Numbers tell part of the story — real people and communities tell the rest. Here's how your support has translated into protection, dignity and care since 2022."
      />

      <section style={{ background: "var(--ink)", color: "#fff" }}>
        <Wrap className="rgrid2" style={{ paddingBlock: 50, gap: 30, "--cols": "repeat(4,1fr)" } as VarStyle}>
          {HEADLINE_STATS.map((s) => (
            <Stat key={s.label} value={s.value} suffix={s.suffix} label={s.label} size={44} />
          ))}
        </Wrap>
      </section>

      <section style={{ background: "var(--paper)" }}>
        <Wrap style={{ paddingBlock: 64 }}>
          <span style={{ font: "600 11.5px var(--font-body)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--amethyst-dd)" }}>By program</span>
          <h2 style={{ font: "700 clamp(26px,2.8vw,36px)/1.2 var(--font-display)", letterSpacing: "-.02em", color: "var(--ink)", margin: "14px 0 34px" }}>Where the light has reached</h2>
          <div className="rgrid2" style={{ gap: 18, "--cols": "repeat(4,1fr)" } as VarStyle}>
            {PROGRAM_STATS.map((s) => (
              <div key={s.label} style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 16, padding: 24 }}>
                <div style={{ font: "800 32px/1 var(--font-display)", color: "var(--ink)", letterSpacing: "-.02em" }}>
                  {s.value}
                  <span style={{ color: s.color }}>{s.suffix}</span>
                </div>
                <p style={{ font: "500 12.5px/1.5 var(--font-body)", color: "var(--muted)", marginTop: 10 }}>{s.label}</p>
              </div>
            ))}
          </div>
          <p style={{ font: "400 12px var(--font-body)", color: "var(--muted)", marginTop: 18 }}>
            Figures are illustrative placeholders pending confirmed programme data.
          </p>
        </Wrap>
      </section>

      <section style={{ background: "#fff" }}>
        <Wrap style={{ paddingBlock: 64 }}>
          <span style={{ font: "600 11.5px var(--font-body)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--amethyst-dd)" }}>Stories of light</span>
          <h2 style={{ font: "700 clamp(26px,2.8vw,36px)/1.2 var(--font-display)", letterSpacing: "-.02em", color: "var(--ink)", margin: "14px 0 34px" }}>Real people, real recovery</h2>
          <div className="rgrid2" style={{ gap: 20, "--cols": "repeat(3,1fr)" } as VarStyle}>
            {STORIES.map((s) => (
              <div key={s.name} style={{ border: "1px solid var(--line)", borderRadius: 16, overflow: "hidden" }}>
                <PhotoPlaceholder label="Photo placeholder" caption={s.role} style={{ height: 200 }} />
                <div style={{ padding: 22 }}>
                  <p style={{ font: "400 italic 16px/1.55 var(--font-serif)", color: "var(--ink)" }}>&ldquo;{s.quote}&rdquo;</p>
                  <div style={{ display: "flex", alignItems: "center", gap: 11, marginTop: 18 }}>
                    <span style={{ width: 38, height: 38, borderRadius: "50%", background: "linear-gradient(140deg,#7c4fb6,#b98fdd)" }} />
                    <div>
                      <div style={{ font: "700 13.5px var(--font-body)", color: "var(--ink)" }}>{s.name}</div>
                      <div style={{ font: "400 11.5px var(--font-body)", color: "var(--muted)" }}>{s.role} <span style={{ opacity: 0.7 }}>(name changed)</span></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      <section style={{ background: "var(--ink-deep)", color: "#fff" }}>
        <Wrap className="rgrid1" style={{ paddingBlock: 66, gap: 50, alignItems: "center", "--cols": "1fr 1fr" } as VarStyle}>
          <div>
            <span style={{ font: "600 11.5px var(--font-body)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--gold)" }}>Where we work</span>
            <h2 style={{ font: "700 clamp(26px,2.8vw,36px)/1.2 var(--font-display)", letterSpacing: "-.02em", color: "#fff", margin: "14px 0 16px" }}>
              Rooted in Nigeria&apos;s hardest-hit regions
            </h2>
            <p style={{ font: "400 15px/1.66 var(--font-body)", color: "rgba(255,255,255,.72)", maxWidth: "46ch", marginBottom: 24 }}>
              We are actively present across Northeast and Northwest Nigeria, working among internally displaced persons, returnees and host communities.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {REGIONS.map((r) => (
                <div key={r.label}>
                  <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 6 }}>
                    <span style={{ width: 130, font: "600 14px var(--font-body)", color: "#fff" }}>{r.label}</span>
                    <div style={{ flex: 1, height: 8, borderRadius: 99, background: "rgba(255,255,255,.12)", overflow: "hidden" }}>
                      <div style={{ width: `${r.pct}%`, height: "100%", background: r.label === "Northwest Nigeria" ? "var(--amethyst)" : "var(--gold)" }} />
                    </div>
                  </div>
                  <div className="region-desc" style={{ font: "400 12px var(--font-body)", color: "rgba(255,255,255,.5)" }}>{r.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", height: 420, borderRadius: 18, background: "radial-gradient(120% 120% at 30% 20%,#3d2459,#1c0f2e)", border: "1px solid rgba(255,255,255,.12)", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.08) 1px,transparent 1.5px)", backgroundSize: "22px 22px" }} />
            <span style={{ position: "absolute", top: "34%", left: "62%", width: 16, height: 16, borderRadius: "50%", background: "var(--gold)", boxShadow: "0 0 0 8px rgba(232,169,59,.18),0 0 0 16px rgba(232,169,59,.08)" }} />
            <span style={{ position: "absolute", top: "52%", left: "54%", width: 13, height: 13, borderRadius: "50%", background: "var(--gold)", boxShadow: "0 0 0 7px rgba(232,169,59,.15)" }} />
            <span style={{ position: "absolute", top: "46%", left: "70%", width: 11, height: 11, borderRadius: "50%", background: "var(--gold)", boxShadow: "0 0 0 6px rgba(232,169,59,.14)" }} />
            <span style={{ position: "absolute", top: "40%", left: "30%", width: 11, height: 11, borderRadius: "50%", background: "var(--amethyst)", boxShadow: "0 0 0 6px rgba(153,102,204,.18)" }} />
            <span style={{ position: "absolute", top: "60%", left: "26%", width: 9, height: 9, borderRadius: "50%", background: "var(--amethyst)", boxShadow: "0 0 0 5px rgba(153,102,204,.16)" }} />
            <span style={{ position: "absolute", left: 18, bottom: 16, font: "500 10.5px var(--font-body)", letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.5)" }}>
              Operational map placeholder
            </span>
          </div>
        </Wrap>
      </section>

      <section style={{ background: "var(--paper)" }}>
        <Wrap style={{ paddingBlock: 64 }}>
          <span style={{ font: "600 11.5px var(--font-body)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--amethyst-dd)" }}>Accountability</span>
          <h2 style={{ font: "700 clamp(26px,2.8vw,36px)/1.2 var(--font-display)", letterSpacing: "-.02em", color: "var(--ink)", margin: "14px 0 34px" }}>Reports & publications</h2>
          <div className="rgrid1" style={{ gap: 16, "--cols": "repeat(2,1fr)" } as VarStyle}>
            {REPORTS.map((r) => (
              <a key={r.title} style={{ display: "flex", alignItems: "center", gap: 16, background: "#fff", border: "1px solid var(--line)", borderRadius: 14, padding: "18px 20px", cursor: "pointer" }}>
                <span style={{ display: "inline-flex", width: 44, height: 44, borderRadius: 11, background: "var(--lilac)", alignItems: "center", justifyContent: "center", color: "var(--amethyst-dd)", flex: "none" }}>
                  <ReportIcon />
                </span>
                <div style={{ flex: 1 }}>
                  <div style={{ font: "700 14.5px var(--font-body)", color: "var(--ink)" }}>{r.title}</div>
                  <div style={{ font: "400 12px var(--font-body)", color: "var(--muted)", marginTop: 3 }}>{r.meta}</div>
                </div>
                <span style={{ color: "var(--amethyst-dd)", flex: "none" }}>
                  <DownloadIcon />
                </span>
              </a>
            ))}
          </div>
        </Wrap>
      </section>

      <section style={{ background: "var(--paper)", paddingBottom: 72 }}>
        <Wrap>
          <div className="cta-card" style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: "linear-gradient(120deg,#3d2459,#291641)" }}>
            <div style={{ position: "absolute", top: -160, right: -80, width: 460, height: 460, background: "radial-gradient(circle,rgba(232,169,59,.22),rgba(232,169,59,0) 70%)" }} />
            <div className="rgrid1" style={{ position: "relative", gap: 40, alignItems: "center", "--cols": "1.3fr .7fr" } as VarStyle}>
              <div>
                <h2 style={{ font: "800 clamp(28px,3.2vw,42px)/1.1 var(--font-display)", letterSpacing: "-.025em", color: "#fff", textWrap: "balance" }}>
                  Help us reach the next 12,000.
                </h2>
                <p style={{ font: "400 16px/1.6 var(--font-body)", color: "rgba(255,255,255,.78)", margin: "16px 0 0", maxWidth: "50ch" }}>
                  Every gift, every month, extends the reach of our programs into more communities.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <PrimaryButton onClick={openDonate} style={{ height: 54 }}>
                  Donate now
                </PrimaryButton>
                <SecondaryButton href="/get-involved" style={{ height: 54, width: "100%" }}>
                  Volunteer or partner
                </SecondaryButton>
              </div>
            </div>
          </div>
        </Wrap>
      </section>
    </div>
  );
}
