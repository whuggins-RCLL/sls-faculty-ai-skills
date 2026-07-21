# Skill Packaging

Use the repository scripts rather than manual ZIP creation. Package each Skill by name so release archives do not overwrite one another.

```bash
python3 scripts/validate_skill_package.py skills/course-and-syllabus-designer
python3 scripts/package_skill.py skills/course-and-syllabus-designer --output dist/course-and-syllabus-designer/skill.zip
python3 scripts/validate_skill_package.py skills/class-session-planner
python3 skills/class-session-planner/scripts/validate_session_plan.py --self-test
python3 scripts/package_skill.py skills/class-session-planner --output dist/class-session-planner/skill.zip
python3 -m pytest
```

The packager prints the archive listing, reopens the ZIP, and validates that it contains exactly one top-level skill directory with no escaping paths or forbidden metadata. Do not use Finder compression. Do not commit generated ZIP files unless release policy explicitly changes.
