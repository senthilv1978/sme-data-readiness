# SME Data Readiness & Transformation

A lightweight, client-side self-assessment that helps small and medium-sized businesses understand how they use data, identify practical risks, and choose a realistic improvement to start with.

> **Status:** MVP / pilot-ready foundation. Scores, maturity bands, questions and rules are initial product content and have not been externally validated. Review recommendations with appropriate professionals before relying on them.

## What it does

- Guides a respondent through five dimensions and 20 behaviorally anchored questions.
- Calculates transparent 0–100 pillar and overall maturity scores using versioned weights.
- Treats “Not sure” as unknown, shows completion and confidence separately, and requires 80% completion before showing an overall score.
- Shows risk flags independently of the weighted average.
- Produces answer-triggered practical actions with first steps, effort, dependencies, suggested owner, time horizon, and success measure.
- Saves progress in versioned browser local storage; supports JSON export, browser print / Save as PDF, and deletion.
- Requires no account, backend, API key, analytics, or third-party assessment service.

## Quick start

Requirements: Node.js 20 or later and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Create a production build with:

```bash
npm run build
npm start
```

## How the scoring works

Each scored answer (1–5) is normalized as `(answer - 1) / 4 * 100`. Pillars are the mean of valid scored answers. The default weights are infrastructure 25%, quality 20%, governance and security 20%, analytics and BI 20%, and people and strategy 15%. If a pillar has no scored answers, its weight is excluded and remaining weights are normalized. “Not sure” does not receive a zero; it is omitted from the score and lowers confidence. The overall score appears when at least 80% of questions have any response.

Maturity bands: 0–20 Ad hoc; >20–40 Emerging; >40–60 Defined; >60–80 Managed; >80–100 Optimizing. These are initial bands, not industry benchmarks. Action priority is a planning index: `impact × risk reduction × frequency ÷ effort`, with factors from 1–5. The factors are currently content-defined and should be challenged by the user.

## Privacy and limitations

Assessment data stays in the browser’s local storage. It is not transmitted by this app. Local storage is accessible to anyone using the same browser profile/device and can be removed by browser cleanup. Do not enter passwords, customer records, account details, or unnecessary sensitive information. JSON export and print output may contain profile details and answers; store them carefully.

This self-assessment is not an audit, certification, legal or compliance assessment, security review, penetration test, or guarantee of AI readiness. A high score does not cancel a risk flag. Seek qualified professional advice for material security, privacy, legal, regulatory, or operational concerns.

## Documentation

- [User Manual](docs/USER_MANUAL.md)
- [Product and scoring methodology](docs/METHODOLOGY.md)
- [Privacy notice](docs/PRIVACY.md)
- [Roadmap and known limitations](docs/ROADMAP.md)
- [Contributing](CONTRIBUTING.md)
- [MIT License](LICENSE)

## GitHub publication checklist

Before publishing, replace `https://example.com` in `app/layout.tsx` with the final canonical deployment URL, review the assessment wording and recommendations with SME/security/privacy reviewers, and add the intended maintainer contact and repository URL. Confirm the GitHub repository description, topics, license, and default branch. Do not include real assessment exports in issues or commits.

## Tech stack

Next.js App Router, React, TypeScript, CSS, and browser local storage. No database or external scoring service.
