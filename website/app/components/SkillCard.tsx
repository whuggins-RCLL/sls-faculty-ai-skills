import Link from "next/link";
import type { Skill } from "../lib/skills";
import { DownloadButton } from "./DownloadButton";

export function SkillCard({ skill }: { skill: Skill }) {
  return (
    <article className="card">
      <p className="eyebrow">{skill.status} · v{skill.version}</p>
      <h2>{skill.name}</h2>
      <p>{skill.summary}</p>
      <p><strong>Works with:</strong> {skill.platforms.join(" and ")}</p>
      <div className="actions"><DownloadButton skill={skill} /><Link className="secondary" href={`/skills/${skill.slug}`}>View skill details</Link></div>
    </article>
  );
}
