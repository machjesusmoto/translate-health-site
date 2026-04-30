/* Hero — editorial display + live SMS conversation card */

const Hero = () => {
  const [step, setStep] = React.useState(0);
  const messages = [
    { from: "ai",      time: "8:14 am", text: "Morning check-in: how'd you sleep? Anything bothering you right now?" },
    { from: "patient", time: "8:16 am", text: "bad night maybe 5 hrs, knees hurt like a 6, really tired even tho i slept" },
    { from: "ai",      time: "8:16 am", text: "Got it.", parsed: true },
  ];

  React.useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % (messages.length + 1)), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ paddingTop: 64, paddingBottom: 96, position: "relative", overflow: "hidden" }}>
      {/* Soft sage wash anchor */}
      <div aria-hidden style={{
        position: "absolute", top: -160, right: -120, width: 520, height: 520,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(155,179,156,0.28), rgba(155,179,156,0) 70%)",
        pointerEvents: "none",
      }} />

      <div className="container" style={{ position: "relative" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "minmax(0, 1.05fr) minmax(0, 0.95fr)",
          gap: 64,
          alignItems: "center",
        }}>
          {/* Left — copy */}
          <div>
            <div className="pill" style={{ marginBottom: 28 }}>
              <span className="dot" />
              <span>Now in private beta · Founding 500</span>
            </div>

            <h1 className="display display-xxl" style={{ margin: 0 }}>
              You talk.<br />
              <span style={{ color: "var(--sage-700)", fontStyle: "italic", fontWeight: 360 }}>We translate.</span><br />
              Doctors listen.
            </h1>

            <p className="lead" style={{ marginTop: 28, fontSize: 21, color: "var(--ink-700)", fontWeight: 450, lineHeight: 1.45 }}>
              An AI health coordination platform for chronic illness.
            </p>
            <p style={{ marginTop: 14, fontSize: 17, color: "var(--ink-500)", lineHeight: 1.55, maxWidth: "58ch" }}>
              Text naturally throughout your day — a team of agents structures, correlates, and translates what you live into something your providers can act on.
            </p>

            <div style={{ display: "flex", gap: 12, marginTop: 36, alignItems: "center", flexWrap: "wrap" }}>
              <a href="#waitlist" className="btn btn-primary">Join the waitlist <Arrow /></a>
              <a href="#how" className="btn btn-ghost">See how it works</a>
            </div>

            <div style={{ display: "flex", gap: 28, marginTop: 44, color: "var(--ink-500)", fontSize: 13 }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Check /> HIPAA-aligned
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Check /> Your data, exportable
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Check /> No black boxes
              </span>
            </div>
          </div>

          {/* Right — phone-ish conversation card */}
          <ConversationDemo step={step} messages={messages} />
        </div>
      </div>
    </section>
  );
};

const Check = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
    <path d="M3 7.5 L6 10 L11 4" stroke="var(--sage-700)" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ConversationDemo = ({ step, messages }) => {
  return (
    <div style={{ position: "relative" }}>
      {/* Floating extraction card */}
      <div style={{
        position: "absolute", top: -28, right: -16, zIndex: 3,
        background: "var(--paper-card)",
        border: "1px solid rgba(45,45,45,0.08)",
        borderRadius: 12,
        padding: "12px 14px",
        boxShadow: "var(--shadow-pop)",
        width: 240,
        transform: step >= 2 ? "translateY(0) scale(1)" : "translateY(8px) scale(0.96)",
        opacity: step >= 2 ? 1 : 0,
        transition: "all .5s cubic-bezier(.2,.8,.2,1)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <span style={{
            fontSize: 10, fontFamily: "var(--font-mono)", textTransform: "uppercase",
            color: "var(--sage-700)", letterSpacing: "0.08em", fontWeight: 600,
          }}>Translator · extracted</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", rowGap: 6, columnGap: 12, fontSize: 12 }}>
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-400)" }}>sleep</span>
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-900)" }}>5.0 h</span>
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-400)" }}>knee_pain</span>
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-900)" }}>6 / 10</span>
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-400)" }}>fatigue</span>
          <span style={{ fontFamily: "var(--font-mono)", color: "var(--ink-900)" }}>high · despite_sleep</span>
        </div>
      </div>

      {/* Phone card */}
      <div style={{
        background: "var(--paper-card)",
        borderRadius: 28,
        border: "1px solid rgba(45,45,45,0.08)",
        boxShadow: "var(--shadow-pop)",
        padding: 20,
        maxWidth: 460,
        marginLeft: "auto",
      }}>
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "4px 8px 14px", borderBottom: "1px solid rgba(45,45,45,0.06)",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 32, height: 32, borderRadius: "50%",
              background: "var(--sage-50)",
              border: "1px solid var(--sage-100)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <circle cx="8" cy="8" r="3" stroke="var(--sage-700)" strokeWidth="1.4" />
                <circle cx="8" cy="8" r="6.5" stroke="var(--sage-700)" strokeWidth="1.4" opacity="0.45" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 500, color: "var(--ink-900)" }}>Translate Health</div>
              <div style={{ fontSize: 11, color: "var(--ink-400)" }}>via SMS · today</div>
            </div>
          </div>
          <span style={{ fontSize: 11, color: "var(--ink-400)", fontFamily: "var(--font-mono)" }}>•••</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: "16px 4px 4px" }}>
          {messages.map((m, i) => {
            const visible = step >= i;
            const isAi = m.from === "ai";
            return (
              <div key={i} style={{
                display: "flex",
                justifyContent: isAi ? "flex-start" : "flex-end",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(8px)",
                transition: `all .45s cubic-bezier(.2,.8,.2,1) ${i * 0.06}s`,
              }}>
                <div style={{
                  maxWidth: "78%",
                  padding: "10px 14px",
                  borderRadius: isAi ? "16px 16px 16px 4px" : "16px 16px 4px 16px",
                  background: isAi ? "var(--sage-50)" : "var(--paper-blue)",
                  color: "var(--ink-900)",
                  fontSize: 14,
                  lineHeight: 1.4,
                  border: isAi ? "1px solid var(--sage-100)" : "1px solid rgba(45,45,45,0.06)",
                }}>
                  {m.text}
                  {m.parsed && (
                    <span style={{
                      display: "inline-block", marginLeft: 6,
                      fontSize: 11, color: "var(--sage-700)",
                      fontFamily: "var(--font-mono)",
                    }}>· structuring…</span>
                  )}
                </div>
              </div>
            );
          })}

          {/* Typing dots */}
          {step >= messages.length && (
            <div style={{ display: "flex", gap: 4, padding: "6px 12px" }}>
              {[0,1,2].map(i => (
                <span key={i} style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "var(--ink-300)",
                  animation: `pulse 1.2s ease-in-out ${i * 0.15}s infinite`,
                }} />
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 60%, 100% { opacity: 0.3; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-2px); }
        }
      `}</style>
    </div>
  );
};

window.Hero = Hero;
