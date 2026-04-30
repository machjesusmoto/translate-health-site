/* Traction strip — subtle social proof */

const Traction = () => {
  const stats = [
    { value: "200+", label: "Daily touchpoints", sub: "3× daily check-ins for 6 months" },
    { value: "15", label: "Provider reports", sub: "Used in real appointments" },
    { value: "9", label: "Correlations found", sub: "Including sleep → pain 2.3×" },
  ];

  return (
    <section style={{ borderTop: "1px solid rgba(45,45,45,0.06)", borderBottom: "1px solid rgba(45,45,45,0.06)" }}>
      <div className="container" style={{ padding: "40px 0", display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: 64, flexWrap: "wrap", justifyContent: "center" }}>
          {stats.map((s, i) => (
            <div key={i} style={{ textAlign: "center", minWidth: 160 }}>
              <div style={{
                fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 380,
                color: "var(--sage-700)", lineHeight: 1,
              }}>{s.value}</div>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                textTransform: "uppercase", letterSpacing: "0.08em",
                color: "var(--ink-700)", marginTop: 8,
              }}>{s.label}</div>
              <div style={{
                fontSize: 13, color: "var(--ink-400)", marginTop: 4,
              }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Traction = Traction;
