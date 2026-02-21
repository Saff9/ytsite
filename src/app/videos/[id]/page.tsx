"use client";
import React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function VideoPlayerPage() {
  const params = useParams();
  const videoId = params?.id as string;

  if (!videoId) {
    return (
      <section className="max-w-3xl mx-auto py-28 text-center px-6">
        <div className="glass-card p-12">
          <p className="text-6xl mb-4">🎬</p>
          <h1 className="text-2xl font-semibold text-white mb-4">Video Not Found</h1>
          <p className="text-white/50 mb-8">This video doesn't seem to exist.</p>
          <Link href="/videos" className="btn-secondary">
            ← Back to Videos
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-4xl mx-auto py-16 pb-24 px-6">
      <Link href="/videos" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Videos
      </Link>

      {/* Video Player */}
      <div className="glass-card overflow-hidden">
        <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video Player"
          />
        </div>
        <div className="px-6 py-4 flex items-center justify-between border-t border-white/10">
          <div className="flex items-center gap-2 text-sm text-white/50">
            <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Genzowais
          </div>
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-white/50 hover:text-white transition-colors"
          >
            Watch on YouTube ↗
          </a>
        </div>
      </div>

      {/* Subscribe CTA */}
      <div className="mt-6 glass-card rounded-xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-medium text-white">Enjoying the content?</p>
          <p className="text-sm text-white/50">Subscribe for more videos like this.</p>
        </div>
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
    </section>
  );
}
