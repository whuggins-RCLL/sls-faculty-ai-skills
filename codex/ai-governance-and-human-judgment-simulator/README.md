# Codex task: SLS AI Governance and Human Judgment Simulator

Work in `whuggins-RCLL/sls-faculty-ai-skills`.

## Prerequisite note

Branch from `main` only when all six prior Judgment Series Skills and collection
foundation are available:

- `ai-system-anatomy-lab`
- `ai-product-and-vendor-decoder`
- `ai-claims-cross-examiner`
- `problem-to-ai-use-case-studio`
- `ai-capability-and-failure-lab`
- `ai-pilot-and-evaluation-designer`

Otherwise use the newest branch containing all six prior Skills and the current
collection foundation. Stop and identify missing prerequisites rather than
recreating a parallel collection foundation.

## Read first

- `AGENTS.md`
- `docs/codex-prompts/ai-governance-and-human-judgment-simulator.md`
- `scripts/validate_skill_package.py`
- `scripts/package_skill.py`
- `releases/skills.json`

## Implement

Build `skills/ai-governance-and-human-judgment-simulator/` per the full
specification in `docs/codex-prompts/ai-governance-and-human-judgment-simulator.md`.

## Verify

```bash
python3 scripts/validate_skill_package.py skills/ai-governance-and-human-judgment-simulator
python3 scripts/package_skill.py skills/ai-governance-and-human-judgment-simulator --output dist/ai-governance-and-human-judgment-simulator/skill.zip
python3 scripts/validate_skill_package.py dist/ai-governance-and-human-judgment-simulator/skill.zip --zip
```

Validate all existing Skills, run repository tests, validate manifest, lint and
build website.

Do not alter existing Skill behavior or download URLs.
