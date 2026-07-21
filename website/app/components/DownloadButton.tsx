import type { Skill } from "../lib/skills";

export function DownloadButton({ skill }: { skill: Skill }) {
  return (
    <a className="downloadButton" href={skill.downloadUrl} aria-label={`Download ${skill.name} skill ZIP version ${skill.version}`}>
      Download Skill ZIP
    </a>
  );
}
