"use client";
import React, { useState } from "react";
import Link from "next/link";

interface Video { id: string; title: string; thumbnail: string; published: string; }

export default function VideoCard({ video }: { video: Video }) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const date = new Date(video.published).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });

  return (
    <Link href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
      <article className="glass-card group relative h-full flex flex-col cursor-pointer fade-in-up" style={{ minHeight: 290 }}>
        {/* Thumbnail */}
        <div className="relative overflow-hidden rounded-t-[22px] flex-shrink-0" style={{ aspectRatio: '16/9' }}>
          {!imgLoaded && <div className="absolute inset-0 shimmer rounded-t-[22px]" />}
          <img src={video.thumbnail} alt={video.title} onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-50 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`} />
          {/* Play */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-14 h-14 rounded-full flex items-center justify-center ring-glow"
              style={{ background: 'rgba(220,38,38,0.9)', backdropFilter: 'blur(8px)', boxShadow: '0 0 40px var(--red-glow)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <svg className="w-6 h-6 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </div>
          </div>
          {/* Vignette */}
          <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: 'linear-gradient(to top, var(--bg), transparent)' }} />
          {/* Badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2 py-0.5 rounded-lg text-xs font-medium"
            style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(12px)', border: '1px solid var(--glass-bdr)', color: 'var(--text-2)' }}>
            <svg className="w-3 h-3" style={{ color: 'var(--red)' }} viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            YouTube
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-grow p-5">
          <h3 className="text-sm font-semibold leading-snug flex-grow line-clamp-2" style={{ color: 'var(--text)' }}>{video.title}</h3>
          <div className="flex items-center justify-between mt-3 pt-3" style={{ borderTop: '1px solid var(--glass-bdr)' }}>
            <span className="text-xs flex items-center gap-1.5" style={{ color: 'var(--text-3)' }}>
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {date}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: 'rgba(99,102,241,0.12)', color: 'var(--accent-2)', border: '1px solid rgba(99,102,241,0.2)' }}>
              Watch →
            </span>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/4 right-1/4 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: 'linear-gradient(90deg, transparent, var(--accent-glow), transparent)' }} />
      </article>
    </Link>
  );
}
