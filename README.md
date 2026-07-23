# SLS Faculty AI Skills

SLS Faculty AI Skills is a collection of reusable AI skill guidance for faculty-centered course design and AI judgment. The repository emphasizes faculty control, source integrity, restricted-material safeguards, accessibility, institution-specific policy adaptation, vendor neutrality, evidence before deployment, and human responsibility.

## Collections

### Set 1: Faculty Teaching and Course Design

The existing teaching collection includes seven Skills: Course and Syllabus Designer; Class Session Planner; Assessment and Rubric Builder; Faculty AI Policy Builder; Socratic Question and Hypothetical Designer; Teaching Materials Accessibility Reviewer; and Reading List and Course Materials Curator.

### Stanford Law School Faculty AI Lab — SLS AI Judgment Series

Tagline: Problem first. Tool second. Evidence always.

The AI Judgment Series helps faculty understand AI systems, interrogate claims, evaluate products, identify appropriate use cases, test performance, design governance, and translate AI understanding into teaching.

**Collection relationship:**

```text
Compass
   ↓
Understand the system
   ↓
Decode products and examine claims
   ↓
Define the problem
   ↓
Test capabilities and failures
   ↓
Design a pilot
   ↓
Establish governance
   ↓
Transfer learning into teaching
```

Routes may begin or end at any appropriate point. Not every faculty member must complete every Skill.

#### Skills (nine total)

1. **SLS AI Compass** — Where should I begin? Conversational front door; personalized Learning Maps; no scores or rankings. (`skills/faculty-ai-compass/`)
2. **SLS AI System Anatomy Lab** — What is the system made of? (`skills/ai-system-anatomy-lab/`)
3. **SLS AI Product Decoder** — What is this current product, and what does it add? (`skills/ai-product-and-vendor-decoder/`)
4. **SLS AI Claims Cross-Examiner** — What is being claimed, and what does the evidence establish? (`skills/ai-claims-cross-examiner/`)
5. **SLS Problem-to-AI Use Case Studio** — Is AI appropriate for the problem? (planned)
6. **SLS AI Capability and Failure Lab** — What happens when we test the behavior directly? (`skills/ai-capability-and-failure-lab/`)
7. **SLS AI Pilot and Evaluation Designer** — Does the workflow perform acceptably? (planned)
8. **SLS AI Governance and Human Judgment Simulator** — Who has authority, responsibility, and stopping power? (planned)
9. **SLS AI Teaching Transfer Studio** — How should this affect teaching? (planned)

Development Skills on `main`: Compass, System Anatomy Lab, Product Decoder, Claims Cross-Examiner, and Capability and Failure Lab. Planned destination Skills are named by the Compass but are not yet merged or downloadable.

Collection charter: start with the problem; remain vendor neutral; require evidence before deployment; keep human responsibility explicit; apply a Stanford Lens to mission, data, privacy, teaching, and authority; use current web research for changed product, policy, service, benchmark, cost, and Stanford-status claims; keep learning accessible and conversational; and use fictional composite scenario safeguards without attributing invented proposals to real people.

## AI Judgment Series Skill distinction

- **SLS AI Compass** answers: Where should I begin? It orients faculty, diagnoses through realistic decisions, recommends the smallest useful destination, and maintains Faculty AI Learning Maps and Field Notebook entries without scoring or ranking.
- **SLS AI System Anatomy Lab** answers: What is this system made of? It teaches the enduring mental model behind AI systems: layers, data flow, retrieval, agents, hosting, adaptation, training, ownership, and control.
- **SLS AI Product Decoder** answers: What is this current product, and what additional value does it provide? It researches and explains a specific current product, feature, model, or vendor: identity, tier, architecture, dependencies, differentiation, Stanford public-information status, comparable alternatives, faculty use cases, vendor-demo questions, and safe narrow trials.
- **SLS AI Claims Cross-Examiner** answers: What exactly is being claimed, and what does the evidence establish? It helps faculty clarify ambiguous terms, classify claim types, examine evidence and counterevidence, calibrate confidence, and propose useful questions or experiments.
- **SLS AI Capability and Failure Lab** answers: What happens when we test the behavior directly? It helps faculty predict, run, observe, compare, and interpret safe controlled experiments involving capabilities and failure modes such as source use, omissions, variability, prompt sensitivity, sycophancy, retrieval, confidence, context conflicts, permissions, and human-review burden.

## Repository structure

- `shared/` contains reusable design-source principles and policy placeholders that should inform skills in this repository. Deployable Skills must copy required runtime material into their own directories.
- `skills/course-and-syllabus-designer/` contains the Skill for planning an entire course, redesigning a course, and drafting syllabus materials.
- `skills/ai-system-anatomy-lab/` contains the self-contained AI Judgment Series Skill for understanding AI-system layers.
- `skills/ai-product-and-vendor-decoder/` contains the self-contained AI Judgment Series Skill for researching and explaining a specific current AI product, feature, model, or vendor.
- `skills/ai-claims-cross-examiner/` contains the self-contained AI Judgment Series Skill for examining and testing claims about AI against evidence, scope, and uncertainty.
- `skills/ai-capability-and-failure-lab/` contains the self-contained AI Judgment Series Skill for predicting, testing, observing, and interpreting AI capabilities and failure modes through safe controlled experiments.
- `skills/faculty-ai-compass/` contains the self-contained AI Judgment Series front-door Skill for orientation, routing, Learning Maps, and Field Notebook entries without scoring faculty.
- `evaluations/` contains evaluation prompts, expected behaviors, fixtures, and regression checks.
- `website/` contains the standalone Next.js catalog.

## Core commitments

1. Keep faculty responsible for academic judgment, course goals, grading policies, AI-system decisions, and final content approval.
2. Cite and preserve source material accurately when adapting institutional, disciplinary, or instructor-provided content.
3. Avoid exposing restricted, confidential, privileged, unpublished, personally identifiable student, and institutional data.
4. Design accessible materials and learning experiences from the start.
5. Replace policy placeholders with local institutional requirements before production use.
6. Use current authoritative web research for current product, provider, model, Stanford service, policy, pricing, benchmark, security, and data-use claims.

## Getting started

1. Review the relevant shared design-source guidance in `shared/`.
2. Ensure deployable Skills are self-contained and do not reference shared paths at runtime.
3. Add program-, school-, or course-specific reference material to the relevant Skill `references/` directory only when it can be safely shared with AI systems.
4. Add evaluations under the matching `evaluations/<skill-slug>/` directory as workflows mature.
5. Run source validation, packaging, ZIP validation, evaluations, linting, and website builds before release.

## Status

This repository is an early-stage collection. Content should be reviewed by faculty, accessibility specialists, technical owners, privacy/security experts, and institutional policy owners before operational deployment.

## Website deployment note

The public website is a standalone Next.js application under `website/`. When deploying to Vercel, set **Root Directory = `website`** so the site builds independently from the Skill packaging workflow. A root-level `vercel.json` and npm workspace scripts are also present so a Vercel project accidentally pointed at the repository root builds the static-exported `website` app and serves `website/out`.
