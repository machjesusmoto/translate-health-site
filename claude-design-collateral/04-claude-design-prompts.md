# Claude Design — Prompts & Instructions

## How to Use These

1. Go to https://claude.ai/design (requires Pro/Max/Team subscription)
2. Upload the collateral files from this folder as reference documents
3. Paste the prompts below, one at a time
4. Iterate with Claude Design's refinement controls

---

## Prompt 1: Design System & Homepage

```
I'm redesigning the website for Translate Health, an AI health coordination platform for chronic illness patients. 

I've uploaded three reference documents:
- 01-brand-brief.md — Brand positioning, tone, color palette, visual direction
- 02-feature-map.md — Full product feature map (7 AI agents)
- 03-sitemap-content.md — Site architecture and content outline

Please create:
1. A cohesive design system with colors, typography, spacing, and component styles
2. A high-fidelity homepage mockup that includes:
   - Hero section with tagline "You talk. We translate. Doctors listen." and a primary CTA
   - "How It Works" section showing 4 steps: Talk → Translate → Analyze → Share
   - Brief preview of the 7 AI agents (Coordinator, Translator, Analyst, Storyteller, Advocate, Librarian, Scout) as cards or icons
   - Trust signals section (privacy-first, HIPAA-aligned, data ownership)
   - Waitlist signup CTA

The feel should be: clean, calm, trustworthy. Medical but not sterile. Think Aesop meets Notion.
Colors: Deep sage green (#2c5f2d) primary, warm cream (#faf8f5) background, soft coral (#e07a5f) accent, charcoal (#2d2d2d) text.

Make it feel like a modern SaaS landing page, not a basic Jekyll site.
```

**After Claude Design generates this:** Use the inline comment and edit features to refine. Then export as HTML or handoff to Claude Code.

---

## Prompt 2: Provider Report Mockup

```
Create a mockup of a provider visit preparation report that Translate Health generates.

This is a one-page clinical summary that patients bring to appointments. It needs to be:
- Clean and scannable (doctors have 15 minutes)
- Data-dense but readable
- Professional but not cold

Include:
- Patient summary header (name placeholder, date range, visit type)
- Key metrics table: sleep avg, pain episodes, severity trends, BP trends
- Correlation insight: "Nights with 3+ interruptions → 2.3x higher next-day pain"
- Symptom timeline sparkline (mini chart)
- Notable events section
- Questions for provider section

Design it as a clean PDF-style layout, letter size, with the Translate Health brand colors (sage green primary, cream background, charcoal text).
```

**Use this for:** The "For Providers" page, the Founding 500 application screenshots, and general marketing.

---

## Prompt 3: Dashboard Mockup

```
Create a mockup of the Translate Health patient dashboard.

This is a web-based personal health dashboard where users review their data. Include:

1. **Daily Digest card** — Today's parsed check-ins with edit/correct buttons
2. **Trends section** — Line charts for: sleep hours, pain severity, fatigue, blood pressure over 30 days
3. **Correlations card** — "Sleep quality → Next-day pain: r=0.72" with a mini scatter plot
4. **Weekly Summary card** — "Week of Apr 21: Sleep avg 5.8h (↓ from 6.4). Heel pain: 4 episodes."
5. **Provider Reports section** — "Generate report for:" with provider type selector (Neurologist, Rheumatologist, PCP, etc.)
6. **Agent Activity feed** — "The Analyst detected a new pattern: Your BP spikes 2 hours after stimulant dose."

Use the Translate Health design system: sage green (#2c5f2d), cream (#faf8f5), coral (#e07a5f) for alerts, charcoal (#2d2d2d) text. Clean, spacious, medical but human.
```

---

## Prompt 4: The Agent Team — Visual Explainer

```
Create a visual explainer showing Translate Health's 7 AI agents as a team.

Each agent should have:
- A simple, consistent icon
- Name and one-line description
- Brief capability list

The agents are:
1. **The Coordinator** — Keeps you on track. Adaptive check-ins, gentle re-engagement, never guilt-trips.
2. **The Translator** — Natural language → structured data. "Bad night, knees hurt like a 6" becomes actionable data.
3. **The Analyst** — Finds patterns you'd miss. Sleep → pain correlations, medication timing effects.
4. **The Storyteller** — Your week in review. Trends, insights, flags — in language you understand.
5. **The Advocate** — Formats data for your doctor. Specialty-tailored reports that change appointments.
6. **The Librarian** — Unifies your health data. Epic, wearables, everything in one place.
7. **The Scout** — Context-aware. Travel prep, appointment gaps, seasonal patterns.

Layout as a grid or horizontal flow. Use the Translate Health brand colors. Make it feel like a team roster, not a feature list.
```

---

## Prompt 5: Pitch Deck (Founding 500 Application)

```
Create a 6-slide pitch deck for Translate Health to submit to a startup program.

Slide 1: Title — "Translate Health: AI Health Coordination for Chronic Illness"
Slide 2: Problem — 3 pain points: memory crisis, communication crisis, coordination crisis
Slide 3: Solution — 7 AI agent team, natural language input, provider-ready output
Slide 4: Traction — "Built and deployed for 6+ months. Personal health stack handling 3x daily check-ins, provider reports, correlation analysis."
Slide 5: Vision — "Every chronic illness patient deserves a health intelligence team"
Slide 6: Ask — "Joining the Founding 500 to scale from personal stack to patient platform"

Use the Translate Health brand: sage green, cream, charcoal. Clean, professional, warm. Include placeholder for a product screenshot on Slide 3.
```

**Export as PDF** for the Founding 500 application attachments.

---

## Prompt 6: Mobile SMS Conversation Mockup

```
Create a realistic mockup of an SMS conversation between a patient and Translate Health.

Show 6-8 message bubbles:
- AI: "Morning check-in: How'd you sleep? Any pain or symptoms right now?"
- Patient: "bad night maybe 5 hrs, knees hurt like a 6, really tired even tho i slept"
- AI: "Got it — 5hrs sleep, knee pain 6/10, fatigue despite rest. That fatigue-despite-sleep pattern is something I'm tracking. Talk later 👋"
- [Later] Patient: "ugh sharp pain in my heel just started, feels like 9/10"
- AI: "Ouch, noted — heel pain 9/10, sharp, started just now. Anything happen right before?"
- Patient: "nothing i was just sitting"
- AI: "Interesting — no activity trigger. That's useful data. Hang in there 💪"

Style as iPhone message bubbles. Green for AI, gray/blue for patient. Clean, readable. Show the Translate Health name at the top.
```

**Use for:** Homepage hero, How It Works page, Founding 500 application.

---

## Export Strategy

After designing in Claude Design:

1. **For the website:** Export pages as HTML or handoff to Claude Code with: "Build this as Jekyll pages using the minimal theme with custom CSS. Keep it deployable on GitHub Pages."

2. **For marketing:** Export pitch deck as PDF, report mockup as PDF/PNG

3. **For the Founding 500 app:** Export screenshots of the agent setup, product mockups, and pitch deck

---

## Tips for Working with Claude Design

- **Start broad, then refine.** Get the overall layout first, then use inline comments to tweak specific elements.
- **Use the adjustment knobs** for spacing, color, and layout — faster than re-prompting.
- **Import the color palette explicitly** — paste the hex codes into your first prompt.
- **Iterate on one page at a time** — don't try to design the whole site in one conversation.
- **Save versions** — Claude Design lets you branch from any point.
