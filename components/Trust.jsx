/* Trust & Privacy — with mini provider report fragment */

const Trust = () => {
  return (
    <section className="section" style={{ background: "var(--paper-deep)" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.05fr",
          gap: 80,
          alignItems: "center",
        }}>
          {/* Left: Provider report fragment */}
          <ProviderReportPreview />

          {/* Right: Trust copy */}
          <div>
            <div className="eyebrow" style={{ marginBottom: 16 }}>Trust & privacy</div>
            <h2 className="display display-l" style={{ margin: 0, marginBottom: 20 }}>
              Your health story,<br />
              <em style={{ color: "var(--sage-700)", fontWeight: 360 }}>told the way you want.</em>
            </h2>
            <p className="lead" style={{ marginBottom: 16 }}>
              Health data is the most personal data there is. We treat it that way — with explicit consent for every share, plain-language explanations, and an export button that actually works.
            </p>
            <p style={{
              margin: "0 0 36px", fontSize: 14, color: "var(--ink-500)", lineHeight: 1.55,
              padding: "12px 16px", background: "var(--paper-card)", borderRadius: 8,
              borderLeft: "2px solid var(--sage-500)",
            }}>
              <strong style={{ color: "var(--ink-700)" }}>Built by a patient, for patients.</strong> Translate Health started as a personal stack — daily check-ins, correlation analysis, and provider reports for one chronically ill person. Now we're opening it to the Founding 500.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <TrustRow
                title="HIPAA-aligned by design"
                body="Encryption at rest and in transit. BAAs with every subprocessor. SOC 2 Type II in progress."
              />
              <TrustRow
                title="You own your data"
                body="One-click export to standard formats — CSV, FHIR, PDF. Delete everything, anytime, no friction."
              />
              <TrustRow
                title="Transparent agents"
                body="Every insight cites its source data. No black boxes. You can correct any extracted field with one tap."
              />
              <TrustRow
                title="Sharing on your terms"
                body="Provider links expire. Reports require explicit consent. You see every access in an audit log."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustRow = ({ title, body }) => (
  <div style={{
    padding: "20px 0",
    borderBottom: "1px solid rgba(45,45,45,0.08)",
    display: "grid",
    gridTemplateColumns: "20px 1fr",
    gap: 16,
    alignItems: "flex-start",
  }}>
    <span style={{ marginTop: 4 }}>
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
        <circle cx="8" cy="8" r="7" stroke="var(--sage-700)" strokeWidth="1.4" fill="none" />
        <path d="M5 8 L7 10 L11 6" stroke="var(--sage-700)" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
    <div>
      <h4 style={{
        margin: 0, fontSize: 16, fontWeight: 500, color: "var(--ink-900)",
        fontFamily: "var(--font-display)", letterSpacing: "-0.005em",
      }}>{title}</h4>
      <p style={{ margin: "4px 0 0", fontSize: 14, color: "var(--ink-500)", lineHeight: 1.55 }}>
        {body}
      </p>
    </div>
  </div>
);

const ProviderReportPreview = () => {
  const sleep = [6.2, 5.8, 6.0, 5.2, 4.9, 5.5, 5.0, 6.4, 6.0, 5.7, 5.3, 4.8, 5.0, 5.8];
  const pain  = [4, 5, 4, 6, 7, 5, 6, 3, 4, 5, 6, 7, 8, 6];

  return (
    <div style={{ position: "relative" }}>
      {/* Stamp */}
      <div style={{
        position: "absolute", top: -18, left: -12, zIndex: 2,
        background: "var(--coral-500)", color: "var(--paper)",
        padding: "6px 12px", borderRadius: 4,
        fontFamily: "var(--font-mono)", fontSize: 11,
        letterSpacing: "0.08em", textTransform: "uppercase",
        boxShadow: "var(--shadow-card)",
        transform: "rotate(-2deg)",
      }}>
        Sample · Rheumatology
      </div>

      <article style={{
        background: "var(--paper-card)",
        border: "1px solid rgba(45,45,45,0.10)",
        borderRadius: 4,
        padding: "32px 32px 28px",
        boxShadow: "var(--shadow-pop)",
        fontFamily: "var(--font-sans)",
      }}>
        <header style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          paddingBottom: 14, borderBottom: "1px solid rgba(45,45,45,0.12)",
        }}>
          <div>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-400)", letterSpacing: "0.08em" }}>
              VISIT PREP · APR 12 – APR 26 · 14 DAYS
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 420, marginTop: 6, color: "var(--ink-900)" }}>
              Patient summary
            </div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-400)" }}>PROVIDER</div>
            <div style={{ fontSize: 13, color: "var(--ink-700)", marginTop: 2 }}>Dr. Hadley · Rheum.</div>
          </div>
        </header>

        <section style={{ padding: "16px 0 18px", borderBottom: "1px solid rgba(45,45,45,0.08)" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-400)", letterSpacing: "0.06em", marginBottom: 10 }}>
            KEY METRICS
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            <Metric label="Sleep avg" value="5.5h" delta="↓ 0.9" />
            <Metric label="Pain episodes" value="12" delta="↑ 4" warn />
            <Metric label="Severity 8+" value="67%" delta="↑ 18%" warn />
            <Metric label="Activity link" value="0.04" delta="r²" />
          </div>
        </section>

        <section style={{ padding: "16px 0 18px", borderBottom: "1px solid rgba(45,45,45,0.08)" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-400)", letterSpacing: "0.06em", marginBottom: 10 }}>
            CORRELATION FLAG
          </div>
          <p style={{
            margin: 0, fontFamily: "var(--font-display)", fontSize: 16, lineHeight: 1.4,
            color: "var(--ink-900)", fontWeight: 380,
          }}>
            Nights with 3+ interruptions → <span style={{ color: "var(--coral-500)", fontWeight: 500 }}>2.3× higher</span> next-day pain.
            Nine of twelve heel-pain episodes followed such nights.
          </p>
        </section>

        <section style={{ padding: "16px 0 4px" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-400)", letterSpacing: "0.06em", marginBottom: 12 }}>
            14-DAY TIMELINE
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 14, alignItems: "center", marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--ink-500)" }}>SLEEP</span>
            <Sparkline values={sleep} width={300} height={28} color="var(--sage-700)" />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 14, alignItems: "center" }}>
            <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--ink-500)" }}>PAIN</span>
            <Sparkline values={pain} width={300} height={28} color="var(--coral-500)" />
          </div>
        </section>
      </article>
    </div>
  );
};

const Metric = ({ label, value, delta, warn }) => (
  <div>
    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--ink-400)", letterSpacing: "0.04em", textTransform: "uppercase" }}>{label}</div>
    <div style={{
      fontFamily: "var(--font-display)", fontSize: 26, fontWeight: 380,
      color: "var(--ink-900)", marginTop: 2, lineHeight: 1,
    }}>{value}</div>
    <div style={{
      fontFamily: "var(--font-mono)", fontSize: 11, marginTop: 4,
      color: warn ? "var(--coral-700)" : "var(--ink-400)",
    }}>{delta}</div>
  </div>
);

window.Trust = Trust;
