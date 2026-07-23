# Codex task: SLS AI Capability and Failure Lab

Work in `whuggins-RCLL/sls-faculty-ai-skills`.

## Prerequisite note

Branch from `main` when all four prior Judgment Series Skills and collection foundation are available. As of implementation, `problem-to-ai-use-case-studio` (Skill #4) remains planned—not yet merged. Skills 1–3 and collection foundation are on `main`.

## Read first

- `AGENTS.md`
- `scripts/validate_skill_package.py`
- `scripts/package_skill.py`
- `releases/skills.json`
- Existing Judgment Series Skills for pattern reference

## Implement

Build `skills/ai-capability-and-failure-lab/` per the full specification in the user task prompt.

## Verify

```bash
python3 scripts/validate_skill_package.py skills/ai-capability-and-failure-lab
python3 scripts/package_skill.py skills/ai-capability-and-failure-lab --output dist/ai-capability-and-failure-lab/skill.zip
python3 scripts/validate_skill_package.py dist/ai-capability-and-failure-lab/skill.zip --zip
```

Validate all existing Skills, run repository tests, validate manifest, lint and build website.

Do not alter existing Skill behavior or download URLs.
