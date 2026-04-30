/* Nav */
const Nav = () => {
  const links = ["How it works", "Agents", "For providers", "About"];
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(250,248,245,0.82)",
      backdropFilter: "saturate(180%) blur(12px)",
      WebkitBackdropFilter: "saturate(180%) blur(12px)",
      borderBottom: "1px solid rgba(45,45,45,0.06)",
    }}>
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 68,
      }}>
        <TH_Logo color="var(--ink-900)" />
        <nav style={{ display: "flex", gap: 32 }}>
          <a href="#how" style={{ fontSize: 14, color: "var(--ink-700)", textDecoration: "none", fontWeight: 450, letterSpacing: "-0.005em" }}>How it works</a>
          <a href="#agents" style={{ fontSize: 14, color: "var(--ink-700)", textDecoration: "none", fontWeight: 450, letterSpacing: "-0.005em" }}>Agents</a>
          <a href="#" style={{ fontSize: 14, color: "var(--ink-700)", textDecoration: "none", fontWeight: 450, letterSpacing: "-0.005em", opacity: 0.5 }}>For providers</a>
          <a href="#" style={{ fontSize: 14, color: "var(--ink-700)", textDecoration: "none", fontWeight: 450, letterSpacing: "-0.005em", opacity: 0.5 }}>About</a>
        </nav>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href="#" style={{ fontSize: 14, color: "var(--ink-700)", textDecoration: "none", fontWeight: 450 }}>Sign in</a>
          <a href="#waitlist" className="btn btn-primary" style={{ padding: "10px 18px", fontSize: 14 }}>
            Join waitlist <Arrow />
          </a>
        </div>
      </div>
    </header>
  );
};

window.Nav = Nav;
