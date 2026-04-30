/* Translate Health — Shared atoms (icons, marks, primitives) */

const TH_Logo = ({ size = 28, color = "currentColor" }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: 10, color }}>
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Two arcs translating into one — speech becoming structure */}
      <path d="M6 11 C 6 7, 10 5, 14 7 L 14 11" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <path d="M18 21 L 18 25 C 22 27, 26 25, 26 21" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round" />
      <circle cx="10" cy="16" r="1.6" fill={color} />
      <circle cx="16" cy="16" r="1.6" fill={color} />
      <circle cx="22" cy="16" r="1.6" fill={color} />
    </svg>
    <span style={{
      fontFamily: "var(--font-display)",
      fontSize: 19,
      fontWeight: 420,
      letterSpacing: "-0.01em",
      color,
    }}>Translate Health</span>
  </span>
);

const Arrow = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 14 14" className="arrow" aria-hidden="true">
    <path d="M2 7 H11 M7.5 3.5 L11 7 L7.5 10.5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ---------- Agent glyphs — minimalist marks, not literal icons ---------- */
const AgentGlyph = ({ name, size = 56 }) => {
  const stroke = "currentColor";
  const sw = 1.4;
  const common = {
    width: size, height: size, viewBox: "0 0 56 56", fill: "none",
    stroke, strokeWidth: sw, strokeLinecap: "round", strokeLinejoin: "round"
  };
  switch (name) {
    case "Coordinator": // concentric attention rings
      return (
        <svg {...common}>
          <circle cx="28" cy="28" r="6" />
          <circle cx="28" cy="28" r="13" opacity="0.55" />
          <circle cx="28" cy="28" r="20" opacity="0.25" />
          <circle cx="28" cy="28" r="2" fill={stroke} stroke="none" />
        </svg>
      );
    case "Translator": // speech → grid
      return (
        <svg {...common}>
          <path d="M8 16 Q8 11, 13 11 H22 Q27 11, 27 16 V22 Q27 27, 22 27 H17 L13 31 V27 Q8 27, 8 22 Z" />
          <rect x="32" y="14" width="16" height="3" rx="1" />
          <rect x="32" y="22" width="11" height="3" rx="1" />
          <rect x="32" y="30" width="14" height="3" rx="1" />
        </svg>
      );
    case "Analyst": // scatter + correlation line
      return (
        <svg {...common}>
          <path d="M8 44 V12 M8 44 H48" />
          <circle cx="14" cy="36" r="1.6" fill={stroke} stroke="none" />
          <circle cx="20" cy="32" r="1.6" fill={stroke} stroke="none" />
          <circle cx="26" cy="26" r="1.6" fill={stroke} stroke="none" />
          <circle cx="32" cy="22" r="1.6" fill={stroke} stroke="none" />
          <circle cx="38" cy="18" r="1.6" fill={stroke} stroke="none" />
          <circle cx="44" cy="14" r="1.6" fill={stroke} stroke="none" />
          <path d="M11 38 L46 14" opacity="0.4" />
        </svg>
      );
    case "Storyteller": // pages with sparkline
      return (
        <svg {...common}>
          <rect x="10" y="10" width="26" height="34" rx="2" />
          <path d="M16 22 L20 18 L24 23 L28 16 L32 21" />
          <line x1="16" y1="32" x2="30" y2="32" />
          <line x1="16" y1="37" x2="26" y2="37" />
          <path d="M40 14 V46 H20" opacity="0.3" />
        </svg>
      );
    case "Advocate": // shield with line items
      return (
        <svg {...common}>
          <path d="M28 8 L44 14 V28 Q44 40, 28 48 Q12 40, 12 28 V14 Z" />
          <line x1="20" y1="22" x2="36" y2="22" />
          <line x1="20" y1="28" x2="32" y2="28" />
          <line x1="20" y1="34" x2="34" y2="34" />
        </svg>
      );
    case "Librarian": // stacked layers
      return (
        <svg {...common}>
          <path d="M28 8 L48 18 L28 28 L8 18 Z" />
          <path d="M8 28 L28 38 L48 28" />
          <path d="M8 38 L28 48 L48 38" opacity="0.55" />
        </svg>
      );
    case "Scout": // compass / map mark
      return (
        <svg {...common}>
          <circle cx="28" cy="28" r="18" />
          <path d="M22 34 L28 18 L34 34 L28 30 Z" fill={stroke} fillOpacity="0.15" />
          <line x1="28" y1="6" x2="28" y2="10" />
          <line x1="28" y1="46" x2="28" y2="50" />
          <line x1="6" y1="28" x2="10" y2="28" />
          <line x1="46" y1="28" x2="50" y2="28" />
        </svg>
      );
    default:
      return <svg {...common}><circle cx="28" cy="28" r="14" /></svg>;
  }
};

/* Sparkline path generator */
const Sparkline = ({ values, width = 120, height = 32, color = "var(--sage-700)", strokeWidth = 1.4 }) => {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const stepX = width / (values.length - 1);
  const points = values.map((v, i) => [i * stepX, height - ((v - min) / range) * height * 0.85 - height * 0.075]);
  const d = points.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(" ");
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
      <path d={d} fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={points[points.length - 1][0]} cy={points[points.length - 1][1]} r="2" fill={color} />
    </svg>
  );
};

Object.assign(window, { TH_Logo, Arrow, AgentGlyph, Sparkline });
