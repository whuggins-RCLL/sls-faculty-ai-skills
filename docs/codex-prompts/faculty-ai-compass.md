# Codex Build Specification: SLS AI Compass

Canonical implementation: `skills/faculty-ai-compass/`

This is the ninth and final Skill in the Stanford Law School Faculty AI Lab **SLS AI Judgment Series**. The full build specification was provided in the Codex task prompt. Key identity:

- **Directory:** `faculty-ai-compass`
- **Display name:** SLS AI Compass
- **Tagline:** Start where you are. Find the questions that matter.
- **Collection tagline:** Problem first. Tool second. Evidence always.

## Mission summary

Conversational front door that orients faculty, diagnoses through realistic decisions (not trivia), recommends the smallest useful destination among eight Judgment Series Skills, produces Faculty AI Learning Maps and Field Notebook entries, and supports return-and-resume—without scoring, ranking, or certifying faculty.

## Structure

See `skills/faculty-ai-compass/SKILL.md` and `skills/faculty-ai-compass/references/` for the complete self-contained runtime content.

## Prerequisites

Four destination Skills remain planned on `main`: Problem-to-AI Use Case Studio, Pilot and Evaluation Designer, Governance Simulator, Teaching Transfer Studio. The Compass routes to them by name using copied boundaries in `references/judgment-series-routing.md`.

## Verification

```bash
python3 scripts/validate_skill_package.py skills/faculty-ai-compass
python3 scripts/package_skill.py skills/faculty-ai-compass --output dist/faculty-ai-compass/skill.zip
python3 scripts/validate_skill_package.py dist/faculty-ai-compass/skill.zip --zip
```

Evaluations: `evaluations/faculty-ai-compass/`
