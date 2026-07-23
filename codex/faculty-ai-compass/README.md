# Codex task: SLS AI Compass

Work in `whuggins-RCLL/sls-faculty-ai-skills`.

## Prerequisite note

Four Judgment Series destination Skills remain planned and are not yet merged on `main`:

- `problem-to-ai-use-case-studio`
- `ai-pilot-and-evaluation-designer`
- `ai-governance-and-human-judgment-simulator`
- `ai-teaching-transfer-studio`

Four destination Skills are available: System Anatomy Lab, Product Decoder, Claims Cross-Examiner, and Capability and Failure Lab. The Compass routes to all eight destinations by name using self-contained reference material; it does not read sibling Skill files at runtime.

## Read first

- `AGENTS.md`
- `docs/codex-prompts/faculty-ai-compass.md` (full specification)
- `scripts/validate_skill_package.py`
- `scripts/package_skill.py`
- `releases/skills.json`

## Implement

Build `skills/faculty-ai-compass/` per the full specification.

## Verify

```bash
python3 scripts/validate_skill_package.py skills/faculty-ai-compass
python3 scripts/package_skill.py skills/faculty-ai-compass --output dist/faculty-ai-compass/skill.zip
python3 scripts/validate_skill_package.py dist/faculty-ai-compass/skill.zip --zip
```

Validate all existing Skills, run repository tests, validate manifest, lint and build website.

Do not alter existing Skill behavior or download URLs.
