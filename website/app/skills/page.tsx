import { getSkills } from "../lib/skills";
import { SkillCard } from "../components/SkillCard";

export default function SkillsCatalog() {
  const skills = getSkills();
  return <><p className="eyebrow">Catalog</p><h1>Skills catalog</h1><p className="lede">Downloadable Skill metadata is loaded from the release manifest so this catalog can be updated without rewriting page content.</p><section className="grid two">{skills.map((skill) => <SkillCard key={skill.slug} skill={skill} />)}</section></>;
}
