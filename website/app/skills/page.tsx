import { getSkills } from "../lib/skills";
import { SkillCard } from "../components/SkillCard";

export default function SkillsCatalog() {
  const skills = getSkills();
  return <><p className="eyebrow">Catalog</p><h1>Skills catalog</h1><p className="lede">Downloadable Skill metadata is loaded from the release manifest so this catalog can be updated without rewriting page content.</p><section className="card"><h2>SLS AI Judgment Series</h2><p>The SLS AI Judgment Series helps faculty understand AI systems, interrogate claims, evaluate products, identify appropriate use cases, test performance, design governance, and translate AI understanding into teaching. It is vendor-neutral and problem-first.</p><p><strong>Roadmap:</strong> AI System Anatomy Lab, SLS AI Product Decoder, and SLS AI Claims Cross-Examiner are in development. Remaining planned workflows include Problem-to-AI Use Case Studio, AI Pilot and Evaluation Designer, AI Governance and Human Judgment Simulator, and AI Teaching Transfer Studio. Planned Skills are not displayed as downloadable until released.</p></section><section className="grid two">{skills.map((skill) => <SkillCard key={skill.slug} skill={skill} />)}</section></>;
}
