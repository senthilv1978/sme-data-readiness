# Product and Scoring Methodology

## Assessment dimensions

The initial model has four questions in each of five dimensions:

| Dimension | Weight | Example coverage |
|---|---:|---|
| Infrastructure | 25% | Information discovery, integration, organization, source inventory |
| Data quality | 20% | Accuracy, duplicates, shared definitions, correction process |
| Governance & security | 20% | Ownership, access, backups and incident response |
| Analytics & BI | 20% | Reporting, KPI definitions, decision support and report checks |
| People & strategy | 15% | Business alignment, skills, accountability and change involvement |

Each response uses behaviorally anchored choices scored 1–5 or “Not sure yet.” The content is version 1.0 and should be refined through SME discovery, accessibility review and subject-matter review.

## Score calculation

Question score: `(answer − 1) ÷ 4 × 100`.

Pillar score: arithmetic mean of its scored, applicable answers. Overall score: sum of each available pillar score multiplied by its weight, with available weights renormalized if a pillar has no scored answers. All calculations retain full precision; displayed values are rounded to integers.

An unanswered question does not contribute a value. “Not sure” is recorded as an unknown and excluded from maturity averages. Completion counts both scored and “Not sure” answers. Overall maturity is withheld until at least 80% of questions have a response. A pillar with no scored answers is displayed as insufficient data.

Confidence is displayed separately from maturity. The current simple indicator is 70% response completeness plus 30% scored-answer coverage. It is an orientation aid, not a statistical confidence interval and not verification of evidence.

## Maturity labels

| Range | Label | Interpretation |
|---|---|---|
| 0–20 | Ad hoc | Practices are absent, informal or highly fragmented |
| >20–40 | Emerging | Some tools and practices exist but are inconsistent |
| >40–60 | Defined | Important practices are documented and repeatable |
| >60–80 | Managed | Practices are measured, governed and widely adopted |
| >80–100 | Optimizing | Capabilities are actively improved and support advanced use cases |

These are initial product bands, not validated industry benchmarks. “Optimizing” does not mean AI-ready.

## Risk and recommendation rules

Governance responses of 1 or 2 for access management, backup/recovery, or incident response trigger visible risk flags. The overall average never suppresses these flags. The action library uses explicit answer conditions for selected issues in access, backup/recovery, incident response, data quality, disconnected systems, reporting, KPI definitions and people/strategy. A low pillar score alone does not trigger every action.

Action priority is `impact × risk reduction × frequency ÷ effort`, with each factor currently set by product content on a 1–5 scale. Critical-risk actions naturally receive high priority, but users should check the suggested order and adapt it to context.

Recommendations are generic, vendor-neutral starting points. They require review by qualified security, privacy, legal, operational or sector experts when relevant. Local prices and regulatory duties are not assessed.

## Validation needed

Before making public benchmark or impact claims, run discovery interviews and a diverse 5–10 SME pilot. Review comprehension, completion time, question relevance, recommendation usefulness, risk wording, keyboard/screen-reader experience and actual follow-through. Maintain a model version for changes to questions, weights, thresholds and rules so longitudinal comparisons remain interpretable.
