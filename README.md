# SLS Faculty AI Skills

SLS Faculty AI Skills is a starter collection of reusable AI skill guidance for faculty-centered course design. The repository emphasizes faculty control, source integrity, restricted-material safeguards, accessibility, and institution-specific policy adaptation.

## Repository structure

- `shared/` contains reusable principles and policy placeholders that should inform all skills in this repository.
- `skills/course-and-syllabus-designer/` contains the initial skill for designing courses and syllabi.
- `evaluations/course-and-syllabus-designer/` is reserved for evaluation prompts, rubrics, fixtures, and regression checks for the course and syllabus designer skill.

## Core commitments

1. Keep faculty responsible for academic judgment, course goals, grading policies, and final content approval.
2. Cite and preserve source material accurately when adapting institutional, disciplinary, or instructor-provided content.
3. Avoid exposing restricted, confidential, or personally identifiable student and institutional data.
4. Design accessible materials from the start.
5. Replace policy placeholders with local institutional requirements before production use.

## Getting started

1. Review the shared guidance in `shared/`.
2. Customize `shared/institutional-policy-placeholders.md` for your institution.
3. Add program-, school-, or course-specific reference material to the relevant skill `references/` directory only when it can be safely shared with AI systems.
4. Add evaluations under `evaluations/course-and-syllabus-designer/` as workflows mature.

## Status

This repository is an initial scaffold. Content should be reviewed by faculty, accessibility specialists, and institutional policy owners before operational deployment.

## Website deployment note

The public website is a standalone Next.js application under `website/`. When deploying to Vercel, set **Root Directory = `website`** so the site builds independently from the Skill packaging workflow. A root-level `vercel.json` and npm workspace scripts are also present so a Vercel project accidentally pointed at the repository root builds the `website` app and copies `website/.next` to the root `.next` output expected by that deployment mode.
