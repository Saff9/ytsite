"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/videos", label: "Videos" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const themes = ["dark", "midnight", "dim"] as const;
type Theme = (typeof themes)[number];
const themeIcons: Record<Theme, string> = { dark: "🌑", midnight: "🌊", dim: "🌗" };

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Auto-detect: if system prefers light → use dim; otherwise saved or dark
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved && themes.includes(saved)) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const auto: Theme = prefersDark ? "dark" : "dim";
      setTheme(auto);
      document.documentElement.setAttribute("data-theme", auto);
    }
  }, []);

  const cycle = () => {
    const idx = themes.indexOf(theme);
    const next = themes[(idx + 1) % themes.length];
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={cycle}
      className="theme-btn"
      aria-label={`Theme: ${theme}`}
      title={`Theme: ${theme} — click to switch`}
    >
      <span className="text-sm">{themeIcons[theme]}</span>
    </button>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-3 pb-1">
      <div
        className={`glass-nav w-full max-w-5xl transition-all duration-400 ${scrolled ? "rounded-full px-5" : "rounded-[1.75rem] px-6"
          }`}
      >
        <div className="flex items-center justify-between gap-4" style={{ height: 54 }}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center font-extrabold text-sm text-white"
              style={{
                background: "linear-gradient(135deg, var(--accent), #4f46e5)",
                backgroundSize: "300% 300%",
                animation: "gradientSpin 6s linear infinite",
                boxShadow: `0 0 18px var(--accent-glow)`,
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              G
            </div>
            <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "'Syne', sans-serif", color: "var(--text)" }}>
              Genzowais
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className="relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-250"
                  style={{
                    color: active ? "var(--accent-2)" : "var(--text-3)",
                    background: active ? "rgba(99,102,241,0.12)" : "transparent",
                    border: active ? "1px solid rgba(99,102,241,0.25)" : "1px solid transparent",
                  }}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-2.5 flex-shrink-0">
            <ThemeToggle />

            <a
              href="https://www.youtube.com/@genzowais?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold text-white btn-glow"
              style={{
                background: "linear-gradient(135deg, #dc2626, #b91c1c)",
                boxShadow: "0 4px 16px var(--red-glow)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden theme-btn"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1">
                <span className="block w-3.5 h-px transition-all duration-200" style={{ background: "var(--text)", transform: menuOpen ? "rotate(45deg) translateY(3px)" : "none" }} />
                <span className="block w-3.5 h-px transition-all duration-200" style={{ background: "var(--text)", opacity: menuOpen ? 0 : 1 }} />
                <span className="block w-3.5 h-px transition-all duration-200" style={{ background: "var(--text)", transform: menuOpen ? "rotate(-45deg) translateY(-3px)" : "none" }} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-72 pb-3" : "max-h-0"}`}>
          <div className="rounded-2xl p-2 flex flex-col gap-1 mt-1" style={{ background: "rgba(0,0,0,0.5)", border: "1px solid var(--glass-bdr)", backdropFilter: "blur(20px)" }}>
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link key={href} href={href} onClick={() => setMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                  style={{ color: active ? "var(--accent-2)" : "var(--text-3)", background: active ? "rgba(99,102,241,0.12)" : "transparent" }}
                >{label}</Link>
              );
            })}
            <a href="https://www.youtube.com/@genzowais?sub_confirmation=1" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white mt-1"
              style={{ background: "linear-gradient(135deg, #dc2626, #b91c1c)" }}>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
