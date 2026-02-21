"use client";
import React from "react";
import Link from "next/link";

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    thumbnail: string;
    publishedAt: string;
  };
}

export default function VideoCard({ video }: VideoCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <Link href={`/videos/${video.id}`} className="block group">
      <article className="glass-card overflow-hidden h-full">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Play overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
              <svg className="w-6 h-6 text-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-white line-clamp-2 group-hover:text-white/90 transition-colors">
            {video.title}
          </h3>
          <p className="mt-2 text-xs text-white/40">
            {formatDate(video.publishedAt)}
          </p>
        </div>
      </article>
    </Link>
  );
}
