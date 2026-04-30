# Personal Health Stack → Product Feature Map

This document maps Dylan's personal health automation scripts to generalized product features. The site should reflect this full capability, not just the SMS check-in MVP.

## The Agent Team

Translate Health isn't one app — it's a coordinated team of AI agents:

### 1. The Coordinator ( Engagement & Adherence )
**Personal scripts:** `smart_checkin.py`, `gap_escalation.py`, `catchup_checkin.py`, `welcome_back.py`, `checkin_streaks.py`

**Product feature:** Adaptive engagement system
- Generates personalized check-in prompts based on recent data and context
- Detects when someone falls off the tracking wagon (ADHD, pain crises, life chaos)
- Escalates gently — never guilt-trips
- Generates "welcome back" briefings after extended absences, restoring context
- Tracks engagement patterns and adapts frequency/tone

**Site copy:** *"Life happens. The Coordinator notices when you've missed a few days and checks in with context, not guilt. 'You mentioned knee pain was spiking last week — how's it now?'"*

### 2. The Translator ( Natural Language → Structured Data )
**Personal scripts:** `parse_checkin.py`, `conversation_capture.py`

**Product feature:** Universal health parser
- Natural language check-ins become structured data automatically
- "Bad night, maybe 5 hrs, knees hurt like a 6, really tired" → sleep: 5h, knee pain: 6/10, fatigue: high
- Passive capture from casual conversation (not just formal check-ins)
- Confidence scoring + confirmation loop

**Site copy:** *"Text naturally. 'Ugh sharp heel pain just started, feels like 9/10.' The Translator extracts: location, severity, onset, quality — and asks clarifying questions when needed."*

### 3. The Analyst ( Pattern Detection & Correlation )
**Personal scripts:** `correlate.py`, `extract_trends.py`

**Product feature:** Health intelligence engine
- Cross-variable correlation: sleep → next-day pain, medication timing → BP, weather → joints
- Same-day clustering: what symptoms flare together
- Time-of-day patterns: stimulant effects, circadian rhythms
- Anomaly detection: "This fatigue pattern is new — no clear trigger"

**Site copy:** *"The Analyst spots patterns you'd never notice. 'Your worst pain days follow nights with 3+ sleep interruptions. That's a 2.3x multiplier.'"*

### 4. The Storyteller ( Summaries & Reports )
**Personal scripts:** `weekly_digest.py`, `monthly_report.py`, `sparkline.py`, `generate_dashboard.py`

**Product feature:** Health narrative generator
- Weekly digests with trends, flags, and insights
- Monthly comprehensive reports
- Interactive HTML dashboard with sparklines and trends
- Multiple formats: text, PDF, shareable links

**Site copy:** *"Your week in review: Sleep averaged 5.8 hrs (down from 6.4). Heel pain: 4 episodes, no activity correlation. Your fatigue tracks with sleep quality, not duration — worth mentioning to your doctor."*

### 5. The Advocate ( Provider Communication )
**Personal scripts:** `provider_prep.py`, `appointment_gap_fill.py`

**Product feature:** Clinical communication suite
- Provider visit prep docs: concise one-pagers tailored to specialty (neuro, rheum, PCP, cardiology)
- Pre-appointment gap detection: "You have a neurologist visit Thursday but only 3 days of data. Quick catch-up?"
- Structured reports with statistical summaries providers actually read
- Shareable links with expiration

**Site copy:** *"The Advocate formats your data for the 15-minute appointment. Your rheumatologist gets: 12 heel pain episodes, 67% at 8/10+, zero activity correlation. That's a conversation-changer."*

### 6. The Librarian ( Data Integration & Export )
**Personal scripts:** `parse_epic_ccda.py`, `action_tracker.py`

**Product feature:** Health data unification
- Import from Epic MyChart (CCDA XML)
- Import from Apple Health, Google Fit, Whoop (Phase 2)
- Action item tracking: appointments to schedule, tests to follow up on
- Complete data export in standard formats
- Your data is yours — take it anywhere

**Site copy:** *"The Librarian pulls your existing data — Epic labs, wearable trends, medication lists — so nothing lives in a silo."*

### 7. The Scout ( Context-Aware Tracking )
**Personal scripts:** `trip_prep.py`

**Product feature:** Contextual health intelligence
- Travel preparation: medication packing lists, timezone-aware check-ins, travel health risks
- Appointment-aware: pre-visit data collection, post-visit follow-up
- Seasonal patterns: weather correlation, allergy tracking
- Life event adaptation

**Site copy:** *"The Scout knows context matters. Planning a trip? It adjusts check-ins for time zones, reminds you to pack meds, and tracks how travel affects your symptoms."*

## Unified Platform Vision

**Input layer:** SMS, WhatsApp, web chat, voice (future), device APIs (future)
**Agent layer:** Coordinator → Translator → Analyst → Storyteller → Advocate → Librarian → Scout
**Output layer:** Weekly digests, provider reports, dashboards, data exports, actionable alerts

**The patient experience:**
1. Text naturally throughout your day
2. AI agents structure, correlate, and analyze behind the scenes
3. Get weekly insights that actually teach you something
4. Walk into appointments with data your provider can use
5. Never start from zero after a gap — the system remembers

**The provider experience:**
1. Patient shows up with a clean, structured summary
2. See trends, correlations, and flags at a glance
3. Spend the appointment on decisions, not data gathering
4. Optionally offer the platform to all patients (B2B expansion)
