# Contributing

Thank you for helping improve the SME Data Readiness MVP.

## Before proposing a change

- Open an issue describing the user problem, affected flow and suggested outcome.
- For changes to questions, scoring, risk conditions or recommendations, include the reason, affected model content, and any subject-matter review needed.
- Do not include real company assessment data, personal information, credentials or private customer material in issues or pull requests.

## Development

1. Fork the repository and create a focused branch.
2. Install dependencies with `npm install` and run `npm run dev`.
3. Keep scoring logic transparent and independent of user-interface wording where practical.
4. Preserve local-only privacy unless an explicitly reviewed architecture change is accepted.
5. Update README or docs when user-visible behavior, storage, scoring, limitations or setup changes.
6. Run `npm run typecheck` and `npm run build` before submitting and describe the checks performed.

## Pull requests

Keep changes focused. Include a concise summary, the user problem addressed, relevant screenshots for visual changes, accessibility notes, and any known limitations. Never claim legal compliance, security certification, benchmark validity or AI readiness without appropriate evidence and review.
