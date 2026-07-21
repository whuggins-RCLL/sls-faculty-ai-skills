# Skill Packaging

Use the repository scripts rather than manual ZIP creation.

```bash
python3 scripts/validate_skill_package.py skills/course-and-syllabus-designer
python3 scripts/package_skill.py skills/course-and-syllabus-designer
python3 -m pytest
```

The packager writes `dist/skill.zip`, prints the archive listing, reopens the ZIP, and validates that it contains exactly one top-level skill directory with no escaping paths or forbidden metadata. Do not commit generated ZIP files.
