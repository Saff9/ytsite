"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function VideoPlayerPage() {
  const params = useParams();
  const videoId = params?.id as string;

  if (!videoId) {
    return (
      <section className="max-w-3xl mx-auto py-20 text-center">
        <div className="text-6xl mb-6 float-anim">🎬</div>
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text)', fontFamily: "'Syne', sans-serif" }}>Video Not Found</h1>
        <p className="text-sm mb-8" style={{ color: 'var(--text-3)' }}>This video doesn't seem to exist.</p>
        <Link href="/videos" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white btn-glow"
          style={{ background: 'linear-gradient(135deg, var(--accent), #4f46e5)', boxShadow: '0 4px 18px var(--accent-glow)' }}>
          ← Back to Videos
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto py-16 pb-24 px-4">
      <Link href="/videos" className="inline-flex items-center gap-2 text-sm font-medium link-muted mb-8 group fade-in-up">
        <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Videos
      </Link>

      <div className="glass-card overflow-hidden fade-in-up" style={{ animationDelay: '100ms' }}>
        <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
          <iframe src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            className="absolute top-0 left-0 w-full h-full" style={{ borderRadius: '22px 22px 0 0' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title="Video Player" />
        </div>
        <div className="px-6 py-4 flex items-center justify-between" style={{ borderTop: '1px solid var(--glass-bdr)' }}>
          <div className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-2)' }}>
            <svg className="w-4 h-4" style={{ color: 'var(--red)' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Genzowais
          </div>
          <a href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold hover:scale-105 transition-transform"
            style={{ background: 'rgba(220,38,38,0.14)', border: '1px solid rgba(220,38,38,0.2)', color: '#fca5a5' }}>
            Watch on YouTube ↗
          </a>
        </div>
      </div>

      <div className="mt-6 glass rounded-2xl px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 fade-in-up" style={{ animationDelay: '200ms' }}>
        <div>
          <p className="font-semibold" style={{ color: 'var(--text)' }}>Enjoying the content?</p>
          <p className="text-sm" style={{ color: 'var(--text-3)' }}>Subscribe for more videos like this.</p>
        </div>
        <a href="https://www.youtube.com/@genzowais?sub_confirmation=1" target="_blank" rel="noopener noreferrer"
          className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white btn-glow"
          style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)', boxShadow: '0 4px 16px var(--red-glow)' }}>
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
          Subscribe
        </a>
      </div>
    </section>
  );
}
