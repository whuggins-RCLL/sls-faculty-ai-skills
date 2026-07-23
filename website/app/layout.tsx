import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "SLS Faculty AI Skills",
  description:
    "Guided AI teaching assistants for Stanford Law School faculty — design courses, plan classes, build assessments and policies, and keep faculty judgment in control.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <footer className="footer">
          <div className="footer-inner">
            <div>
              <p style={{ margin: "0 0 0.3rem", fontWeight: 600, color: "var(--ink)" }}>
                SLS Faculty AI Skills
              </p>
              <p style={{ margin: 0, maxWidth: "42ch" }}>
                A Stanford Law School&ndash;inspired faculty project. No official Stanford
                logos, seals, or wordmarks are used.
              </p>
            </div>
            <nav aria-label="Footer navigation">
              <Link href="/skills">Skills</Link>
              <Link href="/what-is-a-skill-file">What&apos;s a skill file?</Link>
              <Link href="/how-to-use">How to use</Link>
              <Link href="/troubleshooting">Help</Link>
              <Link href="/about">About</Link>
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
