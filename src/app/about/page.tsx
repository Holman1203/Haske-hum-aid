"use client";

import { useSite } from "@/context/site-context";
import { PageHero, PhotoPlaceholder, Pill, PrimaryButton, SecondaryButton, Stat, Wrap, type VarStyle } from "@/components/ui";

const VALUES = [
  { title: "Prevention", dot: "var(--amethyst)", desc: "Sensitization and early action to stop gender-based violence and crisis-driven harm before it happens." },
  { title: "Protection", dot: "var(--gold)", desc: "Safe, do-no-harm services and referral pathways that put the safety and dignity of survivors first." },
  { title: "Rehabilitation", dot: "var(--amethyst-dd)", desc: "Medical, psychosocial and case-management support that helps people recover and rebuild." },
  { title: "Resilience", dot: "var(--ink)", desc: "Livelihoods and community capacity-building so recovery lasts long after the emergency response ends." },
];

const PRINCIPLES = [
  { title: "Community-led", desc: "Programs are designed with, not for, the communities we serve — local staff, local knowledge, local trust." },
  { title: "Survivor-centered", desc: "Every GBV response pathway is confidential, consent-based, and puts the survivor's safety and choices first." },
  { title: "Do no harm", desc: "WASH, shelter and education facilities are designed to reduce — never increase — protection risks." },
  { title: "Localization", desc: "As a Nigerian-led NNGO, we build local capacity rather than substitute for it." },
];

const LEADERSHIP = [
  { role: "Executive Director", focus: "Organizational strategy, governance & donor partnerships" },
  { role: "Director of Programmes", focus: "GBV, WASH, education & health programme delivery" },
  { role: "GBV Response Lead", focus: "Survivor case management & referral pathways" },
  { role: "Finance & Compliance Lead", focus: "Grants management, audit & regulatory compliance" },
];

const FACTS = [
  { value: "2022", label: "Year founded" },
  { value: "100", suffix: "%", label: "Woman-led & youth-driven" },
  { value: "4", label: "States of operation" },
  { value: "1", label: "Registered NNGO, Nigeria" },
];

export default function AboutPage() {
  const { openDonate } = useSite();

  return (
    <div>
      <PageHero
        eyebrow="About us"
        title="Founded in crisis. Built for the long run."
        intro="Haske Humanitarian Aid Initiative (HHAI) is a government-registered, woman-led and youth-driven National NGO. Our name means light in Hausa — and it's the idea behind everything we do: bringing safety, dignity and hope back to communities living through crisis."
      >
        <div style={{ display: "flex", gap: 10, marginTop: 28, flexWrap: "wrap" }}>
          <Pill dot="var(--gold)">Est. 2022</Pill>
          <Pill dot="var(--amethyst)">Woman-led</Pill>
          <Pill dot="var(--gold)">Youth-driven</Pill>
          <Pill dot="var(--amethyst-dd)">Registered NNGO</Pill>
        </div>
      </PageHero>

      <section style={{ background: "#fff", borderBottom: "1px solid var(--line)" }}>
        <Wrap className="rgrid1" style={{ alignItems: "stretch", "--cols": ".92fr 1.08fr" } as VarStyle}>
          <PhotoPlaceholder label="Photo placeholder" caption="Founding team, Maiduguri · 2022" style={{ minHeight: 420, margin: "0 -1px" }} />
          <div className="split-copy" style={{ "--pb": "60px", "--pis": "56px" } as VarStyle}>
            <span style={{ font: "600 11.5px var(--font-body)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--amethyst-dd)" }}>Our story</span>
            <h2 style={{ font: "700 clamp(26px,2.8vw,36px)/1.2 var(--font-display)", letterSpacing: "-.02em", color: "var(--ink)", margin: "14px 0 0" }}>
              A response born from Northeast Nigeria&apos;s displacement crisis.
            </h2>
            <p style={{ font: "400 15.5px/1.72 var(--font-body)", color: "var(--ink2)", marginTop: 18 }}>
              HHAI was founded in 2022 by women and young people who had lived through — and worked inside — the humanitarian response across Borno, Adamawa and Yobe. They saw a gap: services that treated survivors of gender-based violence as case numbers, not people with dignity to protect.
            </p>
            <p style={{ font: "400 15.5px/1.72 var(--font-body)", color: "var(--ink2)", marginTop: 14 }}>
              We started with survivor referrals and sensitization circles in displacement camps. Today we run six integrated programs — from WASH to education in emergencies — but the founding idea hasn&apos;t changed: every person we serve deserves to be treated with dignity, not just processed.
            </p>
          </div>
        </Wrap>
      </section>

      <section style={{ background: "var(--paper)" }}>
        <Wrap style={{ paddingBlock: 64 }}>
          <div style={{ maxWidth: 640, marginBottom: 40 }}>
            <span style={{ font: "600 11.5px var(--font-body)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--amethyst-dd)" }}>Our mission</span>
            <h2 style={{ font: "700 clamp(26px,2.8vw,36px)/1.2 var(--font-display)", letterSpacing: "-.02em", color: "var(--ink)", margin: "14px 0 0" }}>
              To save lives, alleviate suffering, and maintain human dignity for the most vulnerable — during and after crisis.
            </h2>
          </div>
          <div className="rgrid2" style={{ gap: 18, "--cols": "repeat(4,1fr)" } as VarStyle}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 16, padding: 24 }}>
                <span style={{ width: 9, height: 9, borderRadius: "50%", background: v.dot, display: "inline-block", marginBottom: 14 }} />
                <h3 style={{ font: "700 17px var(--font-display)", color: "var(--ink)" }}>{v.title}</h3>
                <p style={{ font: "400 13px/1.6 var(--font-body)", color: "var(--muted)", marginTop: 8 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      <section style={{ background: "var(--ink-deep)", color: "#fff" }}>
        <Wrap style={{ paddingBlock: 64 }}>
          <span style={{ font: "600 11.5px var(--font-body)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--gold)" }}>How we work</span>
          <h2 style={{ font: "700 clamp(26px,2.8vw,36px)/1.2 var(--font-display)", letterSpacing: "-.02em", color: "#fff", margin: "14px 0 34px", maxWidth: "26ch" }}>
            Four principles behind every program.
          </h2>
          <div className="rgrid2" style={{ gap: 24, "--cols": "repeat(4,1fr)" } as VarStyle}>
            {PRINCIPLES.map((p, i) => (
              <div key={p.title}>
                <div style={{ font: "800 15px var(--font-display)", color: "var(--gold)", marginBottom: 10 }}>{String(i + 1).padStart(2, "0")}</div>
                <h3 style={{ font: "700 17px var(--font-display)", color: "#fff" }}>{p.title}</h3>
                <p style={{ font: "400 13.5px/1.6 var(--font-body)", color: "rgba(255,255,255,.68)", marginTop: 8 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      <section style={{ background: "var(--paper)" }}>
        <Wrap style={{ paddingBlock: 64 }}>
          <span style={{ font: "600 11.5px var(--font-body)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--amethyst-dd)" }}>Leadership</span>
          <h2 style={{ font: "700 clamp(26px,2.8vw,36px)/1.2 var(--font-display)", letterSpacing: "-.02em", color: "var(--ink)", margin: "14px 0 34px" }}>
            A woman-led, youth-driven team.
          </h2>
          <div className="rgrid2" style={{ gap: 20, "--cols": "repeat(4,1fr)" } as VarStyle}>
            {LEADERSHIP.map((l) => (
              <div key={l.role} style={{ background: "#fff", border: "1px solid var(--line)", borderRadius: 16, padding: 22 }}>
                <span style={{ width: 52, height: 52, borderRadius: "50%", background: "linear-gradient(140deg,#7c4fb6,#b98fdd)", display: "block", marginBottom: 16 }} />
                <h3 style={{ font: "700 15.5px var(--font-display)", color: "var(--ink)" }}>{l.role}</h3>
                <p style={{ font: "400 12.5px/1.55 var(--font-body)", color: "var(--muted)", marginTop: 6 }}>{l.focus}</p>
              </div>
            ))}
          </div>
        </Wrap>
      </section>

      <section style={{ background: "var(--ink)", color: "#fff" }}>
        <Wrap className="rgrid2" style={{ paddingBlock: 50, gap: 30, "--cols": "repeat(4,1fr)" } as VarStyle}>
          {FACTS.map((f) => (
            <Stat key={f.label} value={f.value} suffix={f.suffix} label={f.label} size={38} />
          ))}
        </Wrap>
      </section>

      <section style={{ background: "var(--paper)", paddingBottom: 72 }}>
        <Wrap>
          <div className="cta-card" style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: "linear-gradient(120deg,#3d2459,#291641)" }}>
            <div style={{ position: "absolute", top: -160, right: -80, width: 460, height: 460, background: "radial-gradient(circle,rgba(232,169,59,.22),rgba(232,169,59,0) 70%)" }} />
            <div className="rgrid1" style={{ position: "relative", gap: 40, alignItems: "center", "--cols": "1.3fr .7fr" } as VarStyle}>
              <div>
                <h2 style={{ font: "800 clamp(28px,3.2vw,42px)/1.1 var(--font-display)", letterSpacing: "-.025em", color: "#fff", textWrap: "balance" }}>
                  Want to know more about our work?
                </h2>
                <p style={{ font: "400 16px/1.6 var(--font-body)", color: "rgba(255,255,255,.78)", margin: "16px 0 0", maxWidth: "50ch" }}>
                  See exactly how your support turns into protection, dignity and care on the ground.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <PrimaryButton onClick={openDonate} style={{ height: 54 }}>
                  Donate now
                </PrimaryButton>
                <SecondaryButton href="/what-we-do" style={{ height: 54, width: "100%" }}>
                  See our programs
                </SecondaryButton>
              </div>
            </div>
          </div>
        </Wrap>
      </section>
    </div>
  );
}
