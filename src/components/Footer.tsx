"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="mt-24 py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <Link href="/" className="text-lg font-semibold text-white">
                Genzowais
              </Link>
              <p className="text-sm text-white/50">
                Technology, tutorials & creative content.
              </p>
            </div>

            {/* Nav */}
            <nav className="flex flex-wrap items-center justify-center gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/videos", label: "Videos" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="px-4 py-2 text-sm text-white/50 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                >
                  {label}
                </Link>
              ))}
            </nav>

            {/* Subscribe */}
            <a
              href="https://www.youtube.com/@genzowais?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-youtube"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-center text-xs text-white/30">
              © {year} Genzowais. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
