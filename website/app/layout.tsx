import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/Header";

export const metadata: Metadata = {
  title: "SLS Faculty AI Skills",
  description: "Faculty-friendly AI skills for course and syllabus design.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><a className="skip" href="#main">Skip to content</a><Header /><main id="main">{children}</main><footer className="footer">A Stanford Law School-inspired project site. No official Stanford logos or seals are used.</footer></body></html>;
}
