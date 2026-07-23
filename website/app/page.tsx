import Link from "next/link";
import { getSkill, getSkills } from "./lib/skills";
import { DownloadButton } from "./components/DownloadButton";

export default function Home() {
  const featured = getSkill("course-and-syllabus-designer");
  const available = getSkills().filter((s) => s.downloadUrl.startsWith("/downloads/"));
  const highlights = available.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div>
          <div className="hero-eyebrow-row">
            <span className="pill"><span className="dot" />Stanford Law School faculty</span>
            <span className="pill">{available.length} skills available</span>
          </div>
          <h1>AI teaching partners, built for how law faculty actually work.</h1>
          <p className="lede">
            Each skill is a ready-made assistant for ChatGPT or Claude &mdash; design a course,
            plan a class, build an assessment, or set an AI policy. You bring the judgment;
            the skill does the drafting and the busywork.
          </p>
          <div className="actions">
            <Link className="primary" href="/skills">Browse the skills</Link>
            <Link className="secondary" href="/what-is-a-skill-file">New to this? Start here</Link>
          </div>
        </div>

        <aside className="panel hero-card">
          <p className="eyebrow">Featured</p>
          <h2 style={{ fontSize: "1.5rem" }}>{featured.name}</h2>
          <p className="muted">{featured.summary}</p>
          <p style={{ margin: "0.4rem 0 0" }}>
            <span className={`pill ${featured.status === "Pilot" ? "pilot" : ""}`}>
              <span className="dot" />{featured.status} &middot; v{featured.version}
            </span>
          </p>
          <div className="actions">
            <DownloadButton skill={featured} />
            <Link className="secondary" href={`/skills/${featured.slug}`}>Details</Link>
          </div>
        </aside>
      </section>

      <section>
        <p className="eyebrow">How it works</p>
        <h2>Up and running in three steps</h2>
        <div className="grid" style={{ marginTop: "1.2rem" }}>
          <article className="card">
            <p className="eyebrow" style={{ color: "var(--cardinal)" }}>Step 1</p>
            <h3>Download the skill</h3>
            <p className="muted">One click gets you a small file that packages the assistant&rsquo;s instructions. No account or install to manage.</p>
          </article>
          <article className="card">
            <p className="eyebrow" style={{ color: "var(--cardinal)" }}>Step 2</p>
            <h3>Add it to ChatGPT or Claude</h3>
            <p className="muted">Upload the file once. From then on the assistant knows how to help with that specific teaching task.</p>
          </article>
          <article className="card">
            <p className="eyebrow" style={{ color: "var(--cardinal)" }}>Step 3</p>
            <h3>Ask in plain language</h3>
            <p className="muted">&ldquo;Help me design a syllabus for my new seminar.&rdquo; The skill asks smart questions and drafts alongside you.</p>
          </article>
        </div>
      </section>

      <section>
        <Link className="card interactive" href="/what-is-a-skill-file">
          <p className="eyebrow" style={{ color: "var(--gold)" }}>Plain-English explainer</p>
          <h2 style={{ fontSize: "1.6rem" }}>Wait &mdash; what is a &ldquo;.md file&rdquo; anyway?</h2>
          <p className="muted" style={{ maxWidth: "70ch" }}>
            No jargon. A two-minute explanation of what these files are, why they&rsquo;re used, and
            why you never have to open or edit one to benefit. Read the explainer &rarr;
          </p>
        </Link>
      </section>

      <section>
        <p className="eyebrow">The collection</p>
        <h2>A few places to start</h2>
        <div className="grid" style={{ marginTop: "1.2rem" }}>
          {highlights.map((skill) => (
            <Link key={skill.slug} className="card interactive" href={`/skills/${skill.slug}`}>
              <span className={`pill ${skill.status === "Pilot" ? "pilot" : ""}`}>
                <span className="dot" />{skill.status}
              </span>
              <h3 style={{ marginTop: "0.7rem" }}>{skill.name}</h3>
              <p className="muted">{skill.summary}</p>
            </Link>
          ))}
        </div>
        <div className="actions">
          <Link className="secondary" href="/skills">See all skills</Link>
        </div>
      </section>

      <section className="card">
        <p className="eyebrow">Faculty in control</p>
        <h2>A drafting partner, not a decision-maker</h2>
        <p className="muted" style={{ maxWidth: "72ch" }}>
          These skills are designed to surface options, structure your thinking, and produce clean
          first drafts &mdash; while keeping your pedagogical choices, academic judgment, and institutional
          responsibilities front and center. They never invent authorities or stand in for official policy.
        </p>
      </section>
    </>
  );
}
