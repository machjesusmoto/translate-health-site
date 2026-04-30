/* Waitlist + Footer */

const Waitlist = () => {
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <section id="waitlist" className="section" style={{ position: "relative", overflow: "hidden" }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse at 50% 100%, rgba(44,95,45,0.08), transparent 60%)",
        pointerEvents: "none",
      }} />
      <div className="container-narrow" style={{ position: "relative", textAlign: "center" }}>
        <div className="eyebrow" style={{ marginBottom: 18 }}>The waitlist</div>
        <h2 className="display display-xl" style={{ margin: 0, marginBottom: 22 }}>
          Be among the<br />
          <em style={{ color: "var(--sage-700)", fontWeight: 360 }}>Founding 500.</em>
        </h2>
        <p className="lead" style={{ margin: "0 auto 40px", textAlign: "center" }}>
          We're onboarding small cohorts of chronic illness patients through 2026. Founding members get lifetime access at the Patient tier and a hand in shaping what gets built next.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          style={{
            display: "flex", gap: 8, maxWidth: 480, margin: "0 auto",
            background: "var(--paper-card)",
            border: "1px solid rgba(45,45,45,0.10)",
            borderRadius: 999,
            padding: 6,
            boxShadow: "var(--shadow-card)",
          }}>
          <input
            type="email"
            placeholder="you@somewhere.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              flex: 1, border: 0, outline: "none", background: "transparent",
              padding: "12px 18px", fontSize: 15, fontFamily: "inherit",
              color: "var(--ink-900)",
            }}
          />
          <button type="submit" className="btn btn-primary" style={{ padding: "12px 22px", fontSize: 14 }}>
            {submitted ? "Welcome ✓" : <>Request access <Arrow /></>}
          </button>
        </form>

        <div style={{
          marginTop: 24, fontSize: 13, color: "var(--ink-400)",
          display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap",
        }}>
          <span>· No marketing email, ever</span>
          <span>· You can leave at any time</span>
          <span>· We answer every reply personally</span>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const cols = [
    { title: "Product", links: ["How it works", "Agents", "Features", "For providers", "Pricing"] },
    { title: "Company", links: ["About", "Blog", "Founding 500", "Careers", "Press"] },
    { title: "Resources", links: ["Patient guide", "Provider one-pager", "Security", "Status"] },
    { title: "Legal", links: ["Privacy", "Terms", "HIPAA notice", "Subprocessors"] },
  ];
  return (
    <footer style={{ background: "var(--ink-900)", color: "var(--paper)", padding: "72px 0 40px" }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.4fr repeat(4, 1fr)",
          gap: 48,
          marginBottom: 56,
        }}>
          <div>
            <TH_Logo color="var(--paper)" />
            <p style={{
              marginTop: 18, fontSize: 14, color: "rgba(250,248,245,0.55)",
              maxWidth: 280, lineHeight: 1.55,
            }}>
              An AI health coordination platform for chronic illness. You talk. We translate. Doctors listen.
            </p>
          </div>
          {cols.map(c => (
            <div key={c.title}>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: 11,
                color: "rgba(250,248,245,0.45)",
                textTransform: "uppercase", letterSpacing: "0.08em",
                marginBottom: 14,
              }}>{c.title}</div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {c.links.map(l => (
                  <li key={l}>
                    <a href="#" style={{
                      color: "rgba(250,248,245,0.85)", textDecoration: "none", fontSize: 14,
                    }}>{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{
          paddingTop: 24, borderTop: "1px solid rgba(250,248,245,0.10)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontSize: 12, color: "rgba(250,248,245,0.45)", flexWrap: "wrap", gap: 12,
        }}>
          <span>© 2026 Translate Health · Built by patients, for patients</span>
          <span style={{ fontFamily: "var(--font-mono)" }}>v 0.1.0 · Founding 500</span>
        </div>
      </div>
    </footer>
  );
};

window.Waitlist = Waitlist;
window.Footer = Footer;
