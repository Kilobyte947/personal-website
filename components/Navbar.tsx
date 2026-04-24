"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/resume", label: "Resume" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="max-w-3xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent hover:from-indigo-500 hover:to-violet-500 transition-all"
        >
          Nick Wang
        </Link>
        <ul className="flex items-center gap-6">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm transition-colors relative ${
                  pathname === href
                    ? "text-indigo-600 font-medium"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {label}
                {pathname === href && (
                  <span className="absolute -bottom-[18px] left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
