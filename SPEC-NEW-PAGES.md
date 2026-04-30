# Spec: New Pages for TCR A2P Campaign Resubmission

**Repo:** translate-health-site (GitHub Pages, Jekyll minimal theme)
**Domain:** translatehealth.app
**Context:** Twilio A2P 10DLC campaign was rejected because message samples referenced URLs that don't resolve. Need these pages to exist and contain real content before resubmitting.

## Pages to Create

All pages follow the same pattern as existing `privacy.md` and `terms.md` — simple Jekyll markdown files in the repo root.

### 1. `register.md` → translatehealth.app/register

**Purpose:** User registration / onboarding page. Doesn't need to be functional — needs to clearly describe the registration process and show a consent-aware signup flow.

**Content:**
- Heading: "Get Started with Translate Health"
- Brief description of what TH does (1-2 sentences)
- Explanation of the signup process:
  1. Provide your phone number
  2. Consent to health data collection (with link to privacy policy)
  3. Consent to AI processing of your check-ins
  4. Receive a one-time passcode via SMS
  5. Start tracking
- Note about MHMDA consent: "We require separate, explicit consent for data collection and for AI processing of your health data. Your consent can be withdrawn at any time."
- A styled placeholder form (HTML within markdown is fine for Jekyll):
  - Phone number input field
  - Checkbox: "I consent to the collection of my health data as described in the [Privacy Policy](/privacy)"
  - Checkbox: "I consent to AI processing of my health check-ins as described in the [Privacy Policy](/privacy)"
  - "Register" button (non-functional, can link to # or show "Coming soon" on click)
- Link to Privacy Policy and Terms of Service
- Note: "Currently in beta. Sign up to be notified when we launch." with an email input (non-functional is fine)
- Footer: © 2026 Translate Health

### 2. `dashboard.md` → translatehealth.app/dashboard

**Purpose:** Personal health dashboard landing. Shows what users will have access to.

**Content:**
- Heading: "Your Health Dashboard"
- Subheading: "Coming Soon"
- Description of what the dashboard will include:
  - **Daily digest:** Review and correct today's parsed check-ins
  - **Trends:** Blood pressure, pain, sleep, fatigue over time
  - **Correlations:** AI-detected patterns between symptoms, sleep, and triggers
  - **Provider reports:** Generate and share structured reports for doctor appointments
  - **Data export:** Download your complete health history in standard formats
- A mockup/preview section showing example cards or a placeholder UI sketch (can be descriptive text or simple styled divs)
- Note: "Access your dashboard by logging in with your registered phone number."
- Link to register page: "Don't have an account? [Get started](/register)"
- Footer: © 2026 Translate Health

### 3. `settings.md` → translatehealth.app/settings

**Purpose:** User settings and notification preferences page.

**Content:**
- Heading: "Settings & Preferences"
- Subheading: "Coming Soon"
- Description of settings users will be able to manage:
  - **Notification preferences:** Choose SMS, WhatsApp, or push notifications. Set check-in reminder times.
  - **Check-in schedule:** Configure AM, midday, and PM check-in windows
  - **Tracked symptoms:** Customize which symptoms and body areas you track
  - **Privacy controls:**
    - View and manage your consent settings
    - Withdraw consent for data collection or AI processing at any time
    - Request a copy of your data
    - Request deletion of your data
  - **Account:** Update phone number, email, delete account
- Note: "You can also manage preferences via SMS. Text HELP for available commands."
- Links to Privacy Policy and Terms
- Footer: © 2026 Translate Health

### 4. `support.md` → translatehealth.app/support

**Purpose:** Help and support page.

**Content:**
- Heading: "Support & Help"
- **Quick commands** section:
  - Text **STOP** to unsubscribe from all SMS messages
  - Text **HELP** to receive a list of available commands
  - Text **PRIVACY** to receive a link to our privacy policy
  - Text **TERMS** to receive a link to our terms of service
- **FAQ** section with 4-6 common questions:
  - "How does Translate Health work?" — Brief explanation of the flow
  - "Is my health data secure?" — Yes, encrypted, not sold, your control
  - "Can I share my data with my doctor?" — Yes, provider reports coming soon
  - "How do I delete my data?" — Text STOP + contact support, or use settings page when available
  - "What does AI processing mean?" — Your check-in text is parsed by AI to extract structured data (BP, pain levels, etc.). The AI does not store or learn from your data.
  - "Is this a medical service?" — No, with standard disclaimer
- **Contact** section:
  - Email: support@translatehealth.app
  - SMS: Reply HELP to any message
- Links to Privacy Policy and Terms
- Footer: © 2026 Translate Health

## Style Notes

- Match the existing tone: professional but human, not corporate
- Keep the minimal Jekyll theme — no custom CSS needed unless it's simple inline styles for the registration form
- All pages should link back to the homepage and to each other where relevant
- Update `index.md` to add links to the new pages in the Links section

## Acceptance Criteria

1. All four markdown files exist in repo root
2. Each page renders correctly via Jekyll (test with `bundle exec jekyll serve` or just verify markdown is valid)
3. `index.md` updated with links to all new pages
4. All inter-page links use relative paths (`/register`, `/dashboard`, etc.)
5. No broken links between pages
6. Content is real and substantive (not lorem ipsum) — TCR reviewers will read these
7. Commit and push to main branch (GitHub Pages auto-deploys)
