"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 mb-6">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
            {/* Brand */}
            <div className="flex flex-col items-center md:items-start gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center text-white font-extrabold text-sm"
                  style={{ background: 'linear-gradient(135deg, var(--accent), #4f46e5)', boxShadow: '0 0 14px var(--accent-glow)' }}>G</div>
                <span className="font-bold text-lg" style={{ color: 'var(--text)', fontFamily: "'Syne', sans-serif" }}>Genzowais</span>
              </div>
              <p className="text-sm leading-relaxed text-center md:text-left max-w-[200px]" style={{ color: 'var(--text-3)' }}>
                Technology, tutorials &amp; creative content.
              </p>
            </div>
            {/* Nav */}
            <div className="flex flex-col items-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: 'var(--text-4)' }}>Navigate</p>
              <div className="flex flex-wrap justify-center gap-4">
                {[{ href: '/', label: 'Home' }, { href: '/videos', label: 'Videos' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }].map(({ href, label }) => (
                  <Link key={href} href={href} className="text-sm link-muted">{label}</Link>
                ))}
              </div>
            </div>
            {/* Subscribe */}
            <div className="flex flex-col items-center md:items-end gap-3">
              <a href="https://www.youtube.com/@genzowais?sub_confirmation=1" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white btn-glow"
                style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)', boxShadow: '0 4px 16px var(--red-glow)', border: '1px solid rgba(255,255,255,0.08)' }}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                Subscribe
              </a>
              <p className="text-xs" style={{ color: 'var(--text-4)' }}>© {year} Genzowais</p>
            </div>
          </div>
          <div className="mt-8 h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, var(--accent-glow), transparent)' }} />
          <p className="mt-4 text-center text-xs" style={{ color: 'var(--text-4)' }}>Crafted with passion · Built for creators</p>
        </div>
      </div>
    </footer>
  );
}
