/* The Problem — three crises */

const Problem = () => {
  const crises = [
    {
      n: "I", label: "Memory",
      head: "\"How long has this been going on?\"",
      body: "And you can't remember. The honest answer is months, but the numbers, the patterns, the start date — gone.",
    },
    {
      n: "II", label: "Communication",
      head: "\"It hurts a lot.\"",
      body: "Doesn't convey severity, pattern, or impact. Fifteen-minute appointments rarely leave room to translate experience into clinical signal.",
    },
    {
      n: "III", label: "Coordination",
      head: "\"Did you tell rheumatology about that?\"",
      body: "Multiple providers, scattered records, no one sees the whole picture. You become the unpaid integration layer for your own body.",
    },
  ];
  return (
    <section className="section-tight" style={{ borderTop: "1px solid rgba(45,45,45,0.06)", borderBottom: "1px solid rgba(45,45,45,0.06)" }}>
      <div className="container">
        <div style={{ maxWidth: 720, marginBottom: 56 }}>
          <div className="eyebrow" style={{ marginBottom: 16, color: "var(--coral-500)" }}>The problem</div>
          <h2 className="display display-l" style={{ margin: 0 }}>
            Chronic illness has three<br />
            <em style={{ color: "var(--coral-500)", fontWeight: 360 }}>invisible crises.</em>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, borderTop: "1px solid rgba(45,45,45,0.10)" }}>
          {crises.map((c, i) => (
            <div key={c.n} style={{
              padding: "32px 28px 28px",
              borderRight: i < 2 ? "1px solid rgba(45,45,45,0.10)" : "none",
              display: "flex", flexDirection: "column", gap: 14,
            }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <span className="serif" style={{ fontSize: 22, color: "var(--coral-500)", fontStyle: "italic" }}>{c.n}.</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em", color: "var(--ink-400)", textTransform: "uppercase" }}>{c.label}</span>
              </div>
              <h3 className="display" style={{ fontSize: 22, margin: 0, fontWeight: 380, color: "var(--ink-900)", fontStyle: "italic" }}>
                {c.head}
              </h3>
              <p style={{ margin: 0, fontSize: 14, color: "var(--ink-500)", lineHeight: 1.55 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Problem = Problem;
