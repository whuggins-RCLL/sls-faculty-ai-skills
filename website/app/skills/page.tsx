import Link from "next/link";
import { getSkills } from "../lib/skills";
import { SkillCard } from "../components/SkillCard";

const judgmentSlugs = [
  "faculty-ai-compass",
  "ai-system-anatomy-lab",
  "ai-product-and-vendor-decoder",
  "ai-claims-cross-examiner",
  "problem-to-ai-use-case-studio",
  "ai-capability-and-failure-lab",
  "ai-pilot-and-evaluation-designer",
  "ai-governance-and-human-judgment-simulator",
  "ai-teaching-transfer-studio",
];

const judgmentMeta: Record<string, { question: string; available: boolean }> = {
  "faculty-ai-compass": { question: "Where should I begin?", available: true },
  "ai-system-anatomy-lab": { question: "What is the system made of?", available: true },
  "ai-product-and-vendor-decoder": { question: "What is this current product, and what does it add?", available: true },
  "ai-claims-cross-examiner": { question: "What is being claimed, and what does the evidence establish?", available: true },
  "problem-to-ai-use-case-studio": { question: "Is AI appropriate for the problem?", available: false },
  "ai-capability-and-failure-lab": { question: "What happens when we test the behavior directly?", available: true },
  "ai-pilot-and-evaluation-designer": { question: "Does the workflow perform acceptably?", available: false },
  "ai-governance-and-human-judgment-simulator": { question: "Who has authority, responsibility, and stopping power?", available: false },
  "ai-teaching-transfer-studio": { question: "How should this affect teaching?", available: false },
};

const pathways = [
  { title: "I feel lost", route: "Compass → System Anatomy Lab → Capability and Failure Lab" },
  { title: "I heard a product claim", route: "Compass → Product Decoder → Claims Cross-Examiner" },
  { title: "I have a problem to solve", route: "Compass → Problem-to-AI Use Case Studio → Pilot Designer" },
  { title: "Institutional agent or workflow", route: "Compass → System Anatomy Lab → Governance Simulator → Pilot Designer" },
  { title: "Teach students about AI", route: "Compass → Capability and Failure Lab → Teaching Transfer Studio" },
  { title: "Vendor demonstration prep", route: "Compass → Product Decoder" },
];

export default function SkillsCatalog() {
  const allSkills = getSkills();
  const teachingSkills = allSkills.filter((s) => !judgmentSlugs.includes(s.slug));
  const judgmentSkills = judgmentSlugs
    .map((slug) => allSkills.find((s) => s.slug === slug))
    .filter(Boolean);

  return (
    <>
      <p className="eyebrow">Catalog</p>
      <h1>Skills catalog</h1>
      <p className="lede">Downloadable Skill metadata is loaded from the release manifest so this catalog can be updated without rewriting page content.</p>

      <section className="card hero-card">
        <p className="eyebrow">SLS AI Judgment Series</p>
        <h2>Problem first. Tool second. Evidence always.</h2>
        <p>
          The SLS AI Judgment Series helps Stanford Law School faculty understand AI systems, interrogate claims, evaluate products,
          identify appropriate use cases, test performance, design governance, and translate understanding into teaching. It is
          vendor-neutral, evidence-centered, and does not require every faculty member to complete every Skill.
        </p>
        <div className="actions">
          <Link className="primary" href="/skills/faculty-ai-compass">Start with the SLS AI Compass</Link>
        </div>
      </section>

      <section className="grid two">
        <article className="card">
          <h3>Start where you are</h3>
          <p>
            The <strong>SLS AI Compass</strong> is the conversational front door: no scores, no rankings, decision-based orientation,
            Faculty AI Learning Maps, Field Notebook entries, and return-and-resume support.
          </p>
        </article>
        <article className="card">
          <h3>Time and depth</h3>
          <p>Five-minute clarity, twenty-minute labs, forty-five-minute studios, ninety-minute workshops, or self-directed pathways—matched to your question, not a fixed curriculum.</p>
        </article>
      </section>

      <section className="card">
        <h2>Eight destination Skills</h2>
        <p className="route-map-text">
          Text route map: Compass (your question) → understand the system → decode products and examine claims → define the problem →
          test capabilities and failures → design a pilot → establish governance → transfer learning into teaching. Routes may begin or end at any appropriate point.
        </p>
        <div className="grid two">
          {judgmentSlugs.filter((s) => s !== "faculty-ai-compass").map((slug) => {
            const meta = judgmentMeta[slug];
            const skill = allSkills.find((s) => s.slug === slug);
            return (
              <article key={slug} className="card compact">
                <h3>{skill?.name ?? slug}</h3>
                <p><strong>Question:</strong> {meta.question}</p>
                <p><strong>Status:</strong> {meta.available ? (skill?.status ?? "Development") : "Planned — not yet available"}</p>
                {skill && meta.available ? (
                  <Link className="secondary" href={`/skills/${slug}`}>View details</Link>
                ) : (
                  <p className="muted">This destination Skill is planned; the Compass can still orient you toward the question it will address.</p>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section className="card">
        <h2>Suggested pathways</h2>
        <div className="grid two">
          {pathways.map((p) => (
            <article key={p.title} className="card compact">
              <h3>{p.title}</h3>
              <p>{p.route}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Judgment Series downloads</h2>
        <section className="grid two">{judgmentSkills.map((skill) => skill && <SkillCard key={skill.slug} skill={skill} />)}</section>
      </section>

      <section className="card">
        <h2>Teaching and Course Design collection</h2>
        <p>
          A separate collection for course artifacts—syllabi, sessions, assessments, policies, questions, accessibility reviews, and reading lists.
          The Compass routes to these Skills when a complete teaching deliverable is needed.
        </p>
        <section className="grid two">{teachingSkills.map((skill) => <SkillCard key={skill.slug} skill={skill} />)}</section>
      </section>
    </>
  );
}
