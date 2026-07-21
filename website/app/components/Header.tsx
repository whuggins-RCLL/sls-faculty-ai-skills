import Link from "next/link";

const nav = [
  ["Skills", "/skills"],
  ["Install in ChatGPT", "/install-chatgpt"],
  ["Install in Claude", "/install-claude"],
  ["How to use", "/how-to-use"],
  ["Troubleshooting", "/troubleshooting"],
  ["About", "/about"],
];

export function Header() {
  return (
    <header className="siteHeader">
      <Link className="brand" href="/">SLS Faculty AI Skills</Link>
      <nav aria-label="Main navigation">
        {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
    </header>
  );
}
