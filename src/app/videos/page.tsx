"use client";
import React, { useEffect, useState } from "react";
import { fetchVideos } from "@/lib/youtube";
import VideoCard from "@/components/VideoCard";

export default function VideosPage() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos().then((d) => { setVideos(d); setLoading(false); }).catch(() => setLoading(false));
  }, []);

  return (
    <section className="py-16 pb-28">
      <div className="text-center mb-14 fade-in-up">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>Library</p>
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 text-glow" style={{ fontFamily: "'Syne', sans-serif" }}>All Videos</h1>
        <div className="w-20 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }} />
      </div>

      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => <div key={i} className="glass-card shimmer fade-in-up" style={{ height: 270, animationDelay: `${i * 70}ms` }} />)}
        </div>
      )}

      {!loading && videos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
          {videos.map((v) => <VideoCard key={v.id} video={v} />)}
        </div>
      )}

      {!loading && videos.length === 0 && (
        <div className="text-center py-24 glass rounded-3xl">
          <div className="text-7xl mb-6 float-anim">🎬</div>
          <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text)', fontFamily: "'Syne', sans-serif" }}>No Videos Yet</h2>
          <p className="text-sm max-w-sm mx-auto" style={{ color: 'var(--text-3)' }}>The channel is being set up. Check back soon.</p>
          <a href="https://www.youtube.com/@genzowais" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl text-sm font-bold text-white btn-glow"
            style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)', boxShadow: '0 4px 16px var(--red-glow)' }}>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
            Visit on YouTube
          </a>
        </div>
      )}
    </section>
  );
}
