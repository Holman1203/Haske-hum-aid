"use client";

import Link from "next/link";
import { useSite } from "@/context/site-context";
import { DonateFields } from "@/components/DonateFields";
import { PhotoPlaceholder, Pill, PrimaryButton, SecondaryButton, Stat, TextLink, Wrap, type VarStyle } from "@/components/ui";
import { BookIcon, DropIcon, FlagIcon, PulseIcon, ShieldIcon, SproutIcon } from "@/components/icons";

const PROGRAMS = [
  { Icon: ShieldIcon, title: "GBV Prevention & Response", desc: "Sensitization and awareness to prevent gender-based violence; medical services, referral and case management for survivors." },
  { Icon: DropIcon, title: "Water, Sanitation & Hygiene", desc: "Safe water and GBV-safe, do-no-harm WASH facilities that protect dignity and health in displacement settings." },
  { Icon: BookIcon, title: "Education in Emergencies", desc: "Safe, protective learning spaces for out-of-school, Almajiri and displaced children — keeping a generation in school." },
  { Icon: PulseIcon, title: "Health & Psychosocial Support", desc: "Medical services, mental-health and psychosocial care, and protection referral pathways for those affected by crisis." },
  { Icon: FlagIcon, title: "Advocacy & Gender Equality", desc: "Stakeholder campaigns against systemic inequality and barriers — promoting the rights of the most vulnerable." },
  { Icon: SproutIcon, title: "Livelihoods & Resilience", desc: "Capacity-building and self-reliance for IDPs, returnees and host communities — building strength that lasts." },
];

const REGIONS = [
  { label: "Borno", pct: 92, color: "var(--gold)" },
  { label: "Adamawa", pct: 74, color: "var(--gold)" },
  { label: "Yobe", pct: 61, color: "var(--gold)" },
  { label: "Northwest Nigeria", pct: 43, color: "var(--amethyst)" },
];

const PARTNERS = ["UNICEF", "UNHCR", "Min. of Humanitarian Affairs", "Min. of Health", "Women's Affairs", "CSO Networks"];

export default function HomePage() {
  const { openDonate, continueToDetails, donateLabel } = useSite();

  return (
    <div>
      <section style={{ position: "relative", background: "#291641", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: -380,
            left: -120,
            width: 820,
            height: 820,
            background:
              "conic-gradient(from 0deg,rgba(232,169,59,.18),rgba(153,102,204,.02) 22%,rgba(153,102,204,0) 42%,rgba(232,169,59,.16) 76%,rgba(153,102,204,0))",
            borderRadius: "50%",
            animation: "rays 90s linear infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -160,
            left: -30,
            width: 480,
            height: 480,
            background: "radial-gradient(circle,rgba(232,169,59,.2),rgba(232,169,59,0) 70%)",
          }}
        />
        <Wrap
          className="rgrid1"
          style={{ position: "relative", zIndex: 1, gap: 48, alignItems: "center", paddingBlock: "70px 78px", "--cols": "1.06fr .94fr" } as VarStyle}
        >
          <div>
            <span style={{ display: "inline-flex", alignItems: "center", gap: 9, font: "600 11.5px var(--font-body)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--gold)" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--gold)" }} />
              Woman-led · Youth-driven · Est. 2022
            </span>
            <h1 style={{ font: "800 clamp(42px,5vw,68px)/1.0 var(--font-display)", letterSpacing: "-.028em", color: "#fff", margin: "18px 0 0", textWrap: "balance" }}>
              Bringing <span style={{ color: "var(--gold)" }}>light</span> to communities in crisis.
            </h1>
            <p style={{ margin: "22px 0 0", maxWidth: "38ch", font: "400 17px/1.62 var(--font-body)", color: "rgba(255,255,255,.82)" }}>
              Haske Humanitarian Aid Initiative saves lives, restores dignity, and works to end gender-based violence alongside displaced and vulnerable communities across Northern Nigeria.
            </p>
            <div style={{ display: "flex", gap: 13, marginTop: 30, flexWrap: "wrap", alignItems: "center" }}>
              <PrimaryButton onClick={openDonate}>Donate now</PrimaryButton>
              <SecondaryButton href="/what-we-do">Explore our work</SecondaryButton>
            </div>
            <div style={{ display: "flex", gap: 30, marginTop: 42, flexWrap: "wrap" }}>
              <Stat value="12,000" suffix="+" label="people reached" />
              <div style={{ width: 1, background: "rgba(255,255,255,.16)" }} />
              <Stat value="4" label="states active" />
              <div style={{ width: 1, background: "rgba(255,255,255,.16)" }} />
              <Stat value="6" label="programs" />
            </div>
          </div>

          <div style={{ background: "#fff", borderRadius: 20, padding: 24, boxShadow: "0 30px 70px -30px rgba(0,0,0,.6)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
              <span style={{ font: "700 19px var(--font-display)", color: "var(--ink)" }}>Make a donation</span>
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
            </div>
            <DonateFields />
            <button
              onClick={continueToDetails}
              style={{ width: "100%", marginTop: 15, padding: 15, border: "none", borderRadius: 13, background: "var(--amethyst)", color: "#fff", font: "700 15.5px var(--font-body)", cursor: "pointer" }}
            >
              {donateLabel} →
            </button>
            <p style={{ margin: "11px 0 0", textAlign: "center", font: "400 11px var(--font-body)", color: "var(--muted)" }}>100% goes to programs · tax-deductible</p>
          </div>
        </Wrap>
      </section>

      <section style={{ background: "var(--paper)" }}>
        <Wrap className="rgrid1" style={{ paddingBlock: 64, gap: 54, alignItems: "center", "--cols": ".9fr 1.1fr" } as VarStyle}>
          <div>
            <span style={{ font: "600 11.5px var(--font-body)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--amethyst-dd)" }}>Who we are</span>
            <h2 style={{ font: "700 clamp(28px,3vw,40px)/1.1 var(--font-display)", letterSpacing: "-.02em", color: "var(--ink)", margin: "14px 0 0", textWrap: "balance" }}>
              A community-led response — from emergency relief to lasting resilience.
            </h2>
          </div>
          <div>
            <p style={{ font: "400 16.5px/1.7 var(--font-body)", color: "var(--ink2)" }}>
              We are a government-registered, woman-led and youth-driven National NGO founded in 2022. Our mission is to save lives, alleviate suffering, and maintain human dignity for the most vulnerable — children, women, young people and persons with disabilities — during and after crises.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 22, flexWrap: "wrap" }}>
              <Pill dot="var(--amethyst)">Prevention</Pill>
              <Pill dot="var(--gold)">Protection</Pill>
              <Pill dot="var(--amethyst-dd)">Rehabilitation</Pill>
              <Pill dot="var(--ink)">Resilience</Pill>
            </div>
            <TextLink href="/about">
              Read our story <span>→</span>
            </TextLink>
          </div>
        </Wrap>
      </section>

      <section style={{ background: "var(--ink)", color: "#fff" }}>
        <Wrap className="rgrid2" style={{ paddingBlock: 50, gap: 30, "--cols": "repeat(4,1fr)" } as VarStyle}>
          <Stat value="12,000" suffix="+" label="People reached since 2022" size={44} />
          <Stat value="85" suffix="+" label="Communities served" size={44} />
          <Stat value="4" label="States across NE & NW Nigeria" size={44} />
          <Stat value="100" suffix="%" label="Community-led delivery" size={44} />
        </Wrap>
      </section>

      <section style={{ background: "var(--paper)" }}>
        <Wrap style={{ paddingBlock: "66px 70px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 24, flexWrap: "wrap", marginBottom: 34 }}>
            <div>
              <span style={{ font: "600 11.5px var(--font-body)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--amethyst-dd)" }}>What we do</span>
              <h2 style={{ font: "700 clamp(28px,3vw,40px)/1.1 var(--font-display)", letterSpacing: "-.02em", color: "var(--ink)", margin: "13px 0 0" }}>Six ways we bring light</h2>
            </div>
            <TextLink href="/what-we-do">
              All programs <span>→</span>
            </TextLink>
          </div>
          <div className="rgrid2" style={{ gap: 18, "--cols": "repeat(3,1fr)" } as VarStyle}>
            {PROGRAMS.map(({ Icon, title, desc }) => (
              <Link
                key={title}
                href="/what-we-do"
                style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 16, padding: 26, cursor: "pointer", display: "block" }}
              >
                <span style={{ display: "inline-flex", width: 46, height: 46, borderRadius: 12, background: "var(--lilac)", alignItems: "center", justifyContent: "center", color: "var(--amethyst-dd)" }}>
                  <Icon />
                </span>
                <h3 style={{ font: "700 18.5px var(--font-display)", color: "var(--ink)", margin: "18px 0 0" }}>{title}</h3>
                <p style={{ font: "400 13.5px/1.6 var(--font-body)", color: "var(--muted)", margin: "9px 0 0" }}>{desc}</p>
              </Link>
            ))}
          </div>
        </Wrap>
      </section>

      <section style={{ background: "#fff", borderTop: "1px solid var(--line)" }}>
        <Wrap className="rgrid1" style={{ alignItems: "stretch", "--cols": ".92fr 1.08fr" } as VarStyle}>
          <PhotoPlaceholder label="Photo placeholder" caption="Survivor support session · Yobe State" style={{ minHeight: 440, margin: "0 -1px" }} />
          <div className="split-copy" style={{ "--pb": "64px", "--pis": "56px" } as VarStyle}>
            <span style={{ font: "600 11.5px var(--font-body)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--amethyst-dd)" }}>Stories of light</span>
            <p style={{ font: "400 italic clamp(24px,2.6vw,33px)/1.32 var(--font-serif)", color: "var(--ink)", margin: "20px 0 0", textWrap: "balance" }}>
              &ldquo;When I arrived at the camp I had nothing and no one. Haske gave me care, a referral, and the courage to rebuild. Today I run a small tailoring stall and support my children.&rdquo;
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 13, marginTop: 24 }}>
              <span style={{ width: 46, height: 46, borderRadius: "50%", background: "linear-gradient(140deg,#7c4fb6,#b98fdd)" }} />
              <div>
                <div style={{ font: "700 14.5px var(--font-body)", color: "var(--ink)" }}>Aisha, 29</div>
                <div style={{ font: "400 12.5px var(--font-body)", color: "var(--muted)" }}>
                  Survivor & livelihoods participant · Maiduguri <span style={{ opacity: 0.7 }}>(name changed)</span>
                </div>
              </div>
            </div>
            <TextLink href="/impact">
              More stories & impact <span>→</span>
            </TextLink>
          </div>
        </Wrap>
      </section>

      <section style={{ background: "var(--ink-deep)", color: "#fff" }}>
        <Wrap className="rgrid1" style={{ paddingBlock: 66, gap: 50, alignItems: "center", "--cols": "1fr 1fr" } as VarStyle}>
          <div>
            <span style={{ font: "600 11.5px var(--font-body)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--gold)" }}>Where we work</span>
            <h2 style={{ font: "700 clamp(28px,3vw,40px)/1.1 var(--font-display)", letterSpacing: "-.02em", color: "#fff", margin: "13px 0 0" }}>Rooted in Nigeria&apos;s hardest-hit regions</h2>
            <p style={{ font: "400 15.5px/1.66 var(--font-body)", color: "rgba(255,255,255,.72)", margin: "16px 0 0", maxWidth: "46ch" }}>
              We are actively present across Northeast and Northwest Nigeria, working among internally displaced persons, returnees and host communities.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 13, marginTop: 26 }}>
              {REGIONS.map((r) => (
                <div key={r.label} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <span style={{ width: 130, font: "600 14px var(--font-body)", color: r.label === "Northwest Nigeria" ? "rgba(255,255,255,.8)" : "#fff" }}>{r.label}</span>
                  <div style={{ flex: 1, height: 8, borderRadius: 99, background: "rgba(255,255,255,.12)", overflow: "hidden" }}>
                    <div style={{ width: `${r.pct}%`, height: "100%", background: r.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative", height: 360, borderRadius: 18, background: "radial-gradient(120% 120% at 30% 20%,#3d2459,#1c0f2e)", border: "1px solid rgba(255,255,255,.12)", overflow: "hidden" }}>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,.08) 1px,transparent 1.5px)", backgroundSize: "22px 22px" }} />
            <span style={{ position: "absolute", top: "34%", left: "62%", width: 16, height: 16, borderRadius: "50%", background: "var(--gold)", boxShadow: "0 0 0 8px rgba(232,169,59,.18),0 0 0 16px rgba(232,169,59,.08)" }} />
            <span style={{ position: "absolute", top: "52%", left: "54%", width: 13, height: 13, borderRadius: "50%", background: "var(--gold)", boxShadow: "0 0 0 7px rgba(232,169,59,.15)" }} />
            <span style={{ position: "absolute", top: "46%", left: "70%", width: 11, height: 11, borderRadius: "50%", background: "var(--gold)", boxShadow: "0 0 0 6px rgba(232,169,59,.14)" }} />
            <span style={{ position: "absolute", top: "40%", left: "30%", width: 11, height: 11, borderRadius: "50%", background: "var(--amethyst)", boxShadow: "0 0 0 6px rgba(153,102,204,.18)" }} />
            <span style={{ position: "absolute", left: 18, bottom: 16, font: "500 10.5px var(--font-body)", letterSpacing: ".12em", textTransform: "uppercase", color: "rgba(255,255,255,.5)" }}>
              Operational map placeholder
            </span>
          </div>
        </Wrap>
      </section>

      <section style={{ background: "var(--paper)" }}>
        <Wrap style={{ paddingBlock: 54 }}>
          <div style={{ textAlign: "center", font: "600 11px var(--font-body)", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 26 }}>
            Trusted by partners & donors
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
            {PARTNERS.map((p) => (
              <span key={p} style={{ padding: "13px 22px", border: "1px solid var(--line)", borderRadius: 12, background: "#fff", font: "700 15px var(--font-body)", color: "var(--ink2)", opacity: 0.78 }}>
                {p}
              </span>
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
                <h2 style={{ font: "800 clamp(30px,3.4vw,46px)/1.05 var(--font-display)", letterSpacing: "-.025em", color: "#fff", textWrap: "balance" }}>
                  Be the light in someone&apos;s darkest hour.
                </h2>
                <p style={{ font: "400 16px/1.6 var(--font-body)", color: "rgba(255,255,255,.78)", margin: "16px 0 0", maxWidth: "50ch" }}>
                  Your support funds protection, dignity and care for survivors of gender-based violence and displacement. Give once, or stand with us every month.
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
