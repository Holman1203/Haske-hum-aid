"use client";

import { useSite } from "@/context/site-context";
import { BookIcon, CheckIcon, DropIcon, FlagIcon, PulseIcon, ShieldIcon, SproutIcon } from "@/components/icons";
import { PageHero, PhotoPlaceholder, PrimaryButton, SecondaryButton, Wrap, type VarStyle } from "@/components/ui";

const PROGRAMS = [
  {
    Icon: ShieldIcon,
    tag: "01 · Protection",
    title: "GBV Prevention & Response",
    desc: "Our founding program. We run community sensitization on gender-based violence, staff confidential referral pathways, and provide medical care and case management for survivors — always consent-based and survivor-led.",
    points: ["Confidential case management & referral", "Community sensitization circles", "Medical & clinical care partnerships", "Safe spaces for women and girls"],
    caption: "Community sensitization circle · Borno State",
  },
  {
    Icon: DropIcon,
    tag: "02 · WASH",
    title: "Water, Sanitation & Hygiene",
    desc: "We install safe water points and GBV-safe, do-no-harm WASH facilities in displacement settings — designed from the ground up to protect dignity and reduce protection risks for women and girls.",
    points: ["Lit, lockable, gender-segregated latrines", "Safe water point construction & repair", "Hygiene kit distribution", "WASH committee training"],
    caption: "Safe water point · Konduga LGA",
  },
  {
    Icon: BookIcon,
    tag: "03 · Education",
    title: "Education in Emergencies",
    desc: "Safe, protective learning spaces for out-of-school, Almajiri and displaced children — keeping a generation learning through crisis, with teacher training and psychosocial support built in.",
    points: ["Temporary learning spaces", "Teacher training & incentives", "Learning materials distribution", "Child protection referral in schools"],
    caption: "Temporary learning space · Yobe State",
  },
  {
    Icon: PulseIcon,
    tag: "04 · Health",
    title: "Health & Psychosocial Support",
    desc: "Medical services and mental-health / psychosocial care for people affected by crisis and violence, plus protection referral pathways into specialist services.",
    points: ["Mobile & static health outreach", "Individual & group psychosocial support", "Referral to specialist clinical care", "Community health worker training"],
    caption: "Mobile health outreach · Maiduguri",
  },
  {
    Icon: FlagIcon,
    tag: "05 · Advocacy",
    title: "Advocacy & Gender Equality",
    desc: "We campaign with stakeholders — government, traditional and religious leaders, CSO networks — against systemic inequality and the barriers that put women, girls and displaced people at risk.",
    points: ["Policy engagement with state actors", "Traditional & religious leader dialogues", "CSO network coordination", "Gender-equality campaigns"],
    caption: "Community dialogue session · Adamawa State",
  },
  {
    Icon: SproutIcon,
    tag: "06 · Livelihoods",
    title: "Livelihoods & Resilience",
    desc: "Capacity-building and self-reliance support for IDPs, returnees and host communities — vocational training, small grants and cooperatives that build strength that outlasts the emergency.",
    points: ["Vocational & skills training", "Small business start-up grants", "Savings & loan cooperatives", "Market-linkage support"],
    caption: "Tailoring cooperative · Maiduguri",
  },
];

export default function WhatWeDoPage() {
  const { openDonate } = useSite();

  return (
    <div>
      <PageHero
        eyebrow="What we do"
        title="Six integrated programs. One mission: bring light."
        intro="From emergency GBV response to long-term livelihoods, every program is designed to work together — protecting people in crisis today while building the resilience they need for tomorrow."
      />

      {PROGRAMS.map((p, i) => {
        const reverse = i % 2 === 1;
        return (
          <section key={p.title} style={{ background: i % 2 === 0 ? "#fff" : "var(--paper)", borderBottom: "1px solid var(--line)" }}>
            <Wrap
              className="rgrid1"
              style={{ alignItems: "stretch", "--cols": reverse ? "1.08fr .92fr" : ".92fr 1.08fr" } as VarStyle}
            >
              {!reverse && <PhotoPlaceholder label="Photo placeholder" caption={p.caption} style={{ minHeight: 420, margin: "0 -1px" }} />}
              <div
                className="split-copy"
                style={(reverse ? { "--pb": "56px", "--pis": "0px", "--pie": "56px" } : { "--pb": "56px", "--pis": "56px" }) as VarStyle}
              >
                <span style={{ display: "inline-flex", width: 46, height: 46, borderRadius: 12, background: "var(--lilac)", alignItems: "center", justifyContent: "center", color: "var(--amethyst-dd)" }}>
                  <p.Icon />
                </span>
                <span style={{ display: "block", font: "600 11.5px var(--font-body)", letterSpacing: ".16em", textTransform: "uppercase", color: "var(--amethyst-dd)", marginTop: 16 }}>
                  {p.tag}
                </span>
                <h2 style={{ font: "700 clamp(24px,2.6vw,32px)/1.2 var(--font-display)", letterSpacing: "-.02em", color: "var(--ink)", margin: "10px 0 0" }}>{p.title}</h2>
                <p style={{ font: "400 15px/1.7 var(--font-body)", color: "var(--ink2)", marginTop: 16, maxWidth: "52ch" }}>{p.desc}</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 18px", marginTop: 22 }}>
                  {p.points.map((pt) => (
                    <div key={pt} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                      <span style={{ color: "var(--amethyst-dd)", flex: "none", marginTop: 2 }}>
                        <CheckIcon />
                      </span>
                      <span style={{ font: "500 13px/1.5 var(--font-body)", color: "var(--ink2)" }}>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
              {reverse && <PhotoPlaceholder label="Photo placeholder" caption={p.caption} style={{ minHeight: 420, margin: "0 -1px" }} />}
            </Wrap>
          </section>
        );
      })}

      <section style={{ background: "var(--paper)", paddingBlock: 72 }}>
        <Wrap>
          <div className="cta-card" style={{ position: "relative", borderRadius: 24, overflow: "hidden", background: "linear-gradient(120deg,#3d2459,#291641)" }}>
            <div style={{ position: "absolute", top: -160, right: -80, width: 460, height: 460, background: "radial-gradient(circle,rgba(232,169,59,.22),rgba(232,169,59,0) 70%)" }} />
            <div className="rgrid1" style={{ position: "relative", gap: 40, alignItems: "center", "--cols": "1.3fr .7fr" } as VarStyle}>
              <div>
                <h2 style={{ font: "800 clamp(28px,3.2vw,42px)/1.1 var(--font-display)", letterSpacing: "-.025em", color: "#fff", textWrap: "balance" }}>
                  Every program runs on the generosity of people like you.
                </h2>
                <p style={{ font: "400 16px/1.6 var(--font-body)", color: "rgba(255,255,255,.78)", margin: "16px 0 0", maxWidth: "50ch" }}>
                  Choose where your gift goes, or let us direct it to where it&apos;s needed most.
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
