import { CSSProperties, ReactNode } from "react";
import Link from "next/link";

/** Style object that also carries CSS custom properties (e.g. --cols for .rgrid1/.rgrid2). */
export type VarStyle = CSSProperties & Record<`--${string}`, string | number>;

export function Wrap({ children, style, className }: { children: ReactNode; style?: CSSProperties; className?: string }) {
  return (
    <div className={className ? `wrap ${className}` : "wrap"} style={style}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  color = "var(--amethyst-dd)",
  style,
}: {
  children: ReactNode;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      style={{
        font: "600 11.5px var(--font-body)",
        letterSpacing: ".16em",
        textTransform: "uppercase",
        color,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  eyebrowColor,
  title,
  dark,
  style,
}: {
  eyebrow: string;
  eyebrowColor?: string;
  title: ReactNode;
  dark?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div style={style}>
      <Eyebrow color={eyebrowColor}>{eyebrow}</Eyebrow>
      <h2
        style={{
          font: "700 clamp(28px,3vw,40px)/1.1 var(--font-display)",
          letterSpacing: "-.02em",
          color: dark ? "#fff" : "var(--ink)",
          margin: "13px 0 0",
          textWrap: "balance",
        }}
      >
        {title}
      </h2>
    </div>
  );
}

export function PrimaryButton({
  children,
  onClick,
  href,
  type = "button",
  style,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit";
  style?: CSSProperties;
}) {
  const baseStyle: CSSProperties = {
    height: 52,
    padding: "0 26px",
    border: "none",
    borderRadius: 13,
    background: "var(--gold)",
    color: "#3a2a06",
    font: "700 15.5px var(--font-body)",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    ...style,
  };
  if (href) {
    return (
      <Link href={href} style={baseStyle}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} style={baseStyle}>
      {children}
    </button>
  );
}

export function SecondaryButton({
  children,
  onClick,
  href,
  style,
  light = true,
}: {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
  style?: CSSProperties;
  light?: boolean;
}) {
  const baseStyle: CSSProperties = {
    height: 52,
    padding: "0 22px",
    border: `1px solid ${light ? "rgba(255,255,255,.32)" : "var(--line2)"}`,
    borderRadius: 13,
    background: "transparent",
    color: light ? "#fff" : "var(--ink)",
    font: "600 15px var(--font-body)",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    ...style,
  };
  if (href) {
    return (
      <Link href={href} style={baseStyle}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} style={baseStyle}>
      {children}
    </button>
  );
}

export function TextLink({ children, onClick, href, color = "var(--amethyst-dd)" }: { children: ReactNode; onClick?: () => void; href?: string; color?: string }) {
  const baseStyle: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    font: "700 14px var(--font-body)",
    color,
    cursor: "pointer",
  };
  if (href) {
    return (
      <Link href={href} style={baseStyle}>
        {children}
      </Link>
    );
  }
  return (
    <a onClick={onClick} style={baseStyle}>
      {children}
    </a>
  );
}

export function PhotoPlaceholder({
  label,
  caption,
  style,
}: {
  label: string;
  caption: string;
  style?: CSSProperties;
}) {
  return (
    <div className="ph" style={style}>
      <p className="ph-cap">
        <b>{label}</b>
        {caption}
      </p>
    </div>
  );
}

export function Stat({
  value,
  suffix,
  label,
  size = 36,
  dark = true,
}: {
  value: string;
  suffix?: string;
  label: string;
  size?: number;
  dark?: boolean;
}) {
  return (
    <div>
      <div
        style={{
          font: `800 ${size}px/1 var(--font-display)`,
          color: dark ? "#fff" : "var(--ink)",
          letterSpacing: "-.02em",
        }}
      >
        {value}
        {suffix && <span style={{ color: "var(--gold)" }}>{suffix}</span>}
      </div>
      <div
        style={{
          font: "500 12px var(--font-body)",
          color: dark ? "rgba(255,255,255,.6)" : "var(--muted)",
          marginTop: 6,
        }}
      >
        {label}
      </div>
    </div>
  );
}

export function Pill({ children, dot }: { children: ReactNode; dot: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 7,
        padding: "9px 14px",
        background: "#fff",
        border: "1px solid var(--line)",
        borderRadius: 10,
        font: "600 13px var(--font-body)",
        color: "var(--ink)",
      }}
    >
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: dot }} />
      {children}
    </span>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
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
      <Wrap style={{ position: "relative", zIndex: 1, padding: "64px 40px 70px" }}>
        <Eyebrow color="var(--gold)">{eyebrow}</Eyebrow>
        <h1
          style={{
            font: "800 clamp(38px,4.6vw,58px)/1.05 var(--font-display)",
            letterSpacing: "-.026em",
            color: "#fff",
            margin: "16px 0 0",
            maxWidth: "20ch",
            textWrap: "balance",
          }}
        >
          {title}
        </h1>
        {intro && (
          <p
            style={{
              margin: "20px 0 0",
              maxWidth: "58ch",
              font: "400 16.5px/1.62 var(--font-body)",
              color: "rgba(255,255,255,.8)",
            }}
          >
            {intro}
          </p>
        )}
        {children}
      </Wrap>
    </section>
  );
}
