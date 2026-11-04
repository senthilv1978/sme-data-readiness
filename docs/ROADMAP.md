# Roadmap and Known Limitations

## Current MVP

- One browser-based, 20-question self-assessment.
- Five weighted pillars, maturity bands, separate completion/confidence and risk flags.
- Rule-triggered recommendations and simple action status tracking.
- Versioned local browser persistence, JSON export, print-to-PDF and delete control.
- No accounts, backend, automated integrations, AI-generated content, analytics or sharing links.

## Known limitations

- Questions, scoring bands, confidence formula and recommendation content are initial hypotheses, not validated benchmarks.
- Action prioritization factors are predefined; users cannot currently edit impact, risk, frequency or effort inputs.
- Action status and free-text context remain in one browser; there is no multi-user collaboration or assessment history.
- Print-to-PDF output depends on browser print support and should be reviewed before sharing.
- No automated backup, sync, authentication, or cloud recovery is provided.
- The experience is currently English-only and does not localize legal or sector-specific guidance.
- Accessibility has design-oriented semantics and visible focus handling but needs formal WCAG 2.2 AA testing.

## Potential next steps after validation

1. Test question comprehension and completion time with representative SMEs.
2. Have qualified reviewers validate security/privacy findings and action wording.
3. Add automated unit, accessibility, browser-flow and print-layout checks.
4. Enable same-model reassessment comparison and improve action ownership/dependency editing.
5. Consider accounts, secure sharing or integrations only after separate security, privacy and operational design.

This roadmap is not a delivery commitment. Prioritize based on pilot learning.
