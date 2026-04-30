/* How It Works — Talk → Translate → Analyze → Share */

const HowItWorks = () => {
  const steps = [
    {
      n: "01", title: "Talk",
      sub: "However you naturally would.",
      body: "SMS, WhatsApp, web chat. Two words or two paragraphs. The Coordinator adapts cadence to your life — no streaks to break, no guilt when chronic illness wins the day.",
      icon: <IconTalk />,
      meta: "Coordinator · Translator",
    },
    {
      n: "02", title: "Translate",
      sub: "Words become structured data.",
      body: "\"Knees hurt like a 6, fatigue despite sleep\" becomes typed fields with timestamps, severity, location, quality. Confidence-scored. You can correct anything in one tap.",
      icon: <IconTranslate />,
      meta: "Translator",
    },
    {
      n: "03", title: "Analyze",
      sub: "Patterns you'd never spot alone.",
      body: "Sleep → next-day pain. Stimulant timing → BP. Same-day clusters. Anomalies flagged in plain language: \"This fatigue pattern is new — no clear trigger.\"",
      icon: <IconAnalyze />,
      meta: "Analyst · Storyteller",
    },
    {
      n: "04", title: "Share",
      sub: "Reports your provider can actually use.",
      body: "Walk into a 15-minute appointment with a one-page summary tailored to specialty. Shareable links with expiration. Your data stays yours — exportable, anywhere.",
      icon: <IconShare />,
      meta: "Advocate · Librarian",
    },
  ];

  return (
    <section id="how" className="section" style={{ background: "var(--paper-deep)" }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 72 }}>
          <div className="eyebrow" style={{ marginBottom: 16 }}>How it works</div>
          <h2 className="display display-l" style={{ margin: 0, marginBottom: 20 }}>
            From the chaos of a chronic day<br />
            to <em style={{ color: "var(--sage-700)", fontWeight: 360 }}>one page</em> your doctor reads.
          </h2>
          <p className="lead">
            Four steps. Behind each step, a team of agents handles the work invisibly, so all you do is live your life and occasionally answer a text.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
        }}>
          {steps.map((s, i) => (
            <article key={s.n} className="card" style={{
              padding: 28,
              display: "flex", flexDirection: "column", gap: 16,
              position: "relative",
              minHeight: 360,
            }}>
              {/* Step counter + arrow */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: 11,
                  color: "var(--ink-400)", letterSpacing: "0.08em",
                }}>STEP / {s.n}</span>
                <div style={{
                  width: 36, height: 36,
                  borderRadius: 10,
                  background: "var(--sage-50)",
                  border: "1px solid var(--sage-100)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--sage-700)",
                }}>
                  {s.icon}
                </div>
              </div>

              {/* Title block */}
              <div>
                <h3 className="display" style={{ fontSize: 30, margin: 0, marginBottom: 6, fontWeight: 380 }}>
                  {s.title}
                </h3>
                <p style={{ margin: 0, color: "var(--ink-700)", fontSize: 15, fontWeight: 500 }}>
                  {s.sub}
                </p>
              </div>

              {/* Powered by — badge above body */}
              <div>
                <span style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "4px 9px 4px 8px",
                  background: "var(--sage-50)",
                  border: "1px solid var(--sage-100)",
                  borderRadius: 999,
                  fontFamily: "var(--font-mono)", fontSize: 10,
                  color: "var(--sage-900)", letterSpacing: "0.04em",
                  fontWeight: 500,
                }}>
                  <span style={{
                    width: 5, height: 5, borderRadius: "50%",
                    background: "var(--sage-700)",
                  }} />
                  POWERED BY · <span style={{ color: "var(--sage-700)" }}>{s.meta.toUpperCase()}</span>
                </span>
              </div>

              <p style={{ margin: 0, color: "var(--ink-500)", fontSize: 14, lineHeight: 1.55, flex: 1 }}>
                {s.body}
              </p>

              {i < steps.length - 1 && (
                <span aria-hidden style={{
                  position: "absolute", top: 28, right: -16, zIndex: 1,
                  color: "var(--sage-300)", fontSize: 18, fontFamily: "var(--font-mono)",
                  display: "none",
                }}>→</span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Small step icons — distinct silhouettes, 20px */
const IconTalk = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path d="M3 7 Q3 4 6 4 H14 Q17 4 17 7 V11 Q17 14 14 14 H10 L6 17 V14 Q3 14 3 11 Z"
          stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <circle cx="7.5" cy="9" r="0.9" fill="currentColor" />
    <circle cx="10" cy="9" r="0.9" fill="currentColor" />
    <circle cx="12.5" cy="9" r="0.9" fill="currentColor" />
  </svg>
);
const IconTranslate = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path d="M3 6 H8 M5.5 4 V13" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M3 13 Q5.5 9.5 8 13" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" />
    <path d="M11 16 L14 9 L17 16 M12 14 H16" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconAnalyze = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <path d="M3 17 V3 M3 17 H17" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M5.5 14 L8 11 L10 12.5 L13 8 L16 5.5" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="5.5" r="1.6" fill="currentColor" />
  </svg>
);
const IconShare = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <circle cx="5" cy="10" r="2" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="15" cy="5" r="2" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="15" cy="15" r="2" stroke="currentColor" strokeWidth="1.3" />
    <path d="M6.7 9 L13.3 5.8 M6.7 11 L13.3 14.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

window.HowItWorks = HowItWorks;
