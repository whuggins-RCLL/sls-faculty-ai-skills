"use client";

import Link from "next/link";
import { useState } from "react";

const nav: [string, string][] = [
  ["Skills", "/skills"],
  ["What's a skill file?", "/what-is-a-skill-file"],
  ["How to use", "/how-to-use"],
  ["Install", "/install-claude"],
  ["Help", "/troubleshooting"],
  ["About", "/about"],
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <Link className="brand" href="/" onClick={() => setOpen(false)}>
        <span className="brandMark" aria-hidden="true">SLS</span>
        <span>Faculty AI Skills</span>
      </Link>

      <button
        className="navToggleBtn"
        aria-expanded={open}
        aria-controls="primary-nav"
        onClick={() => setOpen((v) => !v)}
      >
        {open ? "Close" : "Menu"}
      </button>

      <nav
        id="primary-nav"
        className={`primaryNav${open ? " isOpen" : ""}`}
        aria-label="Main navigation"
      >
        {nav.map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link className="navCta" href="/skills" onClick={() => setOpen(false)}>
          Browse skills
        </Link>
      </nav>
    </header>
  );
}
