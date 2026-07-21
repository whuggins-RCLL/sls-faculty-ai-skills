import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const required = ["app/layout.tsx", "app/page.tsx", "app/lib/skills.ts", "../releases/skills.json"];
const missing = required.filter((file) => !existsSync(join(process.cwd(), file)));
if (missing.length) {
  console.error(`Missing required website files: ${missing.join(", ")}`);
  process.exit(1);
}
const manifest = JSON.parse(readFileSync(join(process.cwd(), "../releases/skills.json"), "utf8"));
if (!Array.isArray(manifest) || !manifest[0]?.downloadUrl) {
  console.error("Release manifest must include downloadable skill metadata.");
  process.exit(1);
}
console.log("Website lint checks passed.");
