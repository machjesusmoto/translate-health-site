/* The Agent Team — 7 agents as a roster */

const AgentTeam = () => {
  const agents = [
    {
      name: "Coordinator", role: "Engagement & adherence",
      tag: "Keeps you on track",
      line: "Notices when you've gone quiet. Checks in with context, not guilt.",
      sample: "\"You mentioned knee pain was spiking last week — how is it now?\"",
    },
    {
      name: "Translator", role: "Words → structured data",
      tag: "Your words → structured data",
      line: "Turns natural language into typed, timestamped, severity-scored fields.",
      sample: "\"feels like 9/10\" → onset: just_now, severity: 9, location: heel",
    },
    {
      name: "Analyst", role: "Pattern detection",
      tag: "Finds patterns you'd miss",
      line: "Cross-correlates variables you'd never connect by hand.",
      sample: "\"Worst pain follows nights with 3+ interruptions. 2.3× multiplier.\"",
    },
    {
      name: "Storyteller", role: "Summaries & reports",
      tag: "Your week in review",
      line: "Weekly digests, monthly reports, dashboards — written for humans.",
      sample: "\"Sleep avg 5.8h (↓ from 6.4). Heel pain: 4 episodes, no activity link.\"",
    },
    {
      name: "Advocate", role: "Provider communication",
      tag: "Formats data for your doctor",
      line: "Specialty-tailored one-pagers your doctor will actually read.",
      sample: "Rheumatology brief · 12 episodes · 67% at 8/10+ · zero activity link",
    },
    {
      name: "Librarian", role: "Data integration & export",
      tag: "Unifies your health records",
      line: "Pulls Epic, Apple Health, wearables. Your data leaves with you.",
      sample: "Epic CCDA · Apple Health · Whoop · Manual entry · CSV export",
    },
    {
      name: "Scout", role: "Context-aware tracking",
      tag: "Context-aware tracking",
      line: "Adapts to travel, appointments, seasons. Knows context matters.",
      sample: "\"Trip to Lisbon Thu — packing meds, shifting check-ins to UTC+0.\"",
    },
  ];

  const [active, setActive] = React.useState(2); // Analyst featured by default

  return (
    <section id="agents" className="section">
      <div className="container">
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "flex-end",
          marginBottom: 56, gap: 48, flexWrap: "wrap",
        }}>
          <div style={{ maxWidth: 640 }}>
            <div className="eyebrow" style={{ marginBottom: 16 }}>The team</div>
            <h2 className="display display-l" style={{ margin: 0, marginBottom: 16 }}>
              Seven agents.<br />
              <em style={{ color: "var(--sage-700)", fontWeight: 360 }}>One health intelligence team.</em>
            </h2>
            <p className="lead">
              Translate Health isn't one app — it's a coordinated team. Each agent has a job. Together, they handle the invisible work of being chronically ill.
            </p>
          </div>
          <div style={{
            fontFamily: "var(--font-mono)", fontSize: 12,
            color: "var(--ink-400)", letterSpacing: "0.05em",
            display: "flex", flexDirection: "column", gap: 6, textAlign: "right",
          }}>
            <span>SELECTED · {String(active + 1).padStart(2, "0")} / 07</span>
            <span style={{ color: "var(--sage-700)" }}>{agents[active].name.toUpperCase()}</span>
          </div>
        </div>

        {/* Featured agent panel */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 0.95fr",
          gap: 0,
          marginBottom: 48,
          background: "var(--paper-card)",
          border: "1px solid rgba(45,45,45,0.08)",
          borderRadius: 20,
          overflow: "hidden",
          boxShadow: "var(--shadow-card)",
        }}>
          <div style={{ padding: "44px 48px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 280 }}>
            <div>
              <span style={{
                fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.08em",
                color: "var(--coral-500)", textTransform: "uppercase", fontWeight: 600,
              }}>The {agents[active].name}</span>
              <h3 className="display" style={{ fontSize: 36, margin: "8px 0 14px", fontWeight: 380, lineHeight: 1.05 }}>
                {agents[active].line}
              </h3>
              <p style={{
                fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--ink-500)",
                background: "var(--paper-deep)", padding: "12px 14px", borderRadius: 8,
                borderLeft: "2px solid var(--sage-500)", maxWidth: 480,
                margin: 0,
              }}>
                {agents[active].sample}
              </p>
            </div>
            <div style={{
              marginTop: 28, display: "flex", alignItems: "center", gap: 14,
              fontSize: 13, color: "var(--ink-400)",
            }}>
              <span style={{ fontFamily: "var(--font-mono)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {agents[active].role}
              </span>
            </div>
          </div>
          <div style={{
            background: "linear-gradient(135deg, var(--sage-50), var(--paper-deep))",
            borderLeft: "1px solid rgba(45,45,45,0.06)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "var(--sage-700)",
          }}>
            <AgentGlyph name={agents[active].name} size={140} />
          </div>
        </div>

        {/* Roster */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)",
          gap: 8,
        }}>
          {agents.map((a, i) => (
            <button key={a.name}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              style={{
                background: i === active ? "var(--sage-700)" : "var(--paper-card)",
                color: i === active ? "var(--paper)" : "var(--ink-700)",
                border: i === active ? "1px solid var(--sage-700)" : "1px solid rgba(45,45,45,0.08)",
                borderRadius: 14,
                padding: "20px 12px 16px",
                cursor: "pointer",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
                transition: "all .25s ease",
                fontFamily: "inherit",
              }}>
              <AgentGlyph name={a.name} size={40} />
              <div style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: 10, fontFamily: "var(--font-mono)", letterSpacing: "0.08em",
                  opacity: 0.6, marginBottom: 2,
                }}>0{i + 1}</div>
                <div style={{ fontSize: 13, fontWeight: 500, fontFamily: "var(--font-display)" }}>{a.name}</div>
                <div style={{
                  fontSize: 10.5,
                  marginTop: 4,
                  lineHeight: 1.3,
                  opacity: i === active ? 0.85 : 0.6,
                  color: i === active ? "var(--paper)" : "var(--ink-500)",
                  minHeight: 26,
                }}>{a.tag}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

window.AgentTeam = AgentTeam;
