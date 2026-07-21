import { getSkill } from "./lib/skills";
import { DownloadButton } from "./components/DownloadButton";

export default function Home() {
  const skill = getSkill("course-and-syllabus-designer");
  return <><section className="hero"><div><p className="eyebrow">Faculty AI support</p><h1>Design a course or refresh a syllabus with a guided AI Skill.</h1><p className="lede">The {skill.name} helps instructors turn course goals, weekly topics, assignments, policies, and prior syllabi into clear teaching materials while keeping faculty in control.</p><div className="actions"><DownloadButton skill={skill} /><a className="secondary" href="/how-to-use">Learn how to begin</a></div></div><aside className="panel"><h2>Current release</h2><p><strong>{skill.name}</strong></p><p>Status: {skill.status}<br />Version: {skill.version}<br />Platforms: {skill.platforms.join(" and ")}</p></aside></section><section className="grid"><article className="card"><h2>Plan</h2><p>Start from a course idea, existing syllabus, or list of learning goals.</p></article><article className="card"><h2>Draft</h2><p>Ask for weekly modules, assignments, policies, reading structures, and Word-ready output.</p></article><article className="card"><h2>Refine</h2><p>Review, revise, and keep institutional and accessibility needs visible.</p></article></section></>;
}
