import Link from "next/link";
import VideoCard from "@/components/VideoCard";
import { getVideos } from "@/lib/youtube";

export default async function Home() {
  const videos = await getVideos();

  return (
    <main className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-7xl font-bold text-white fade-in-up" style={{ animationDelay: "0ms" }}>
            Genzowais
          </h1>
          <p className="mt-6 text-lg text-white/60 max-w-xl mx-auto fade-in-up" style={{ animationDelay: "100ms" }}>
            Technology, tutorials & creative content for the modern creator.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 fade-in-up" style={{ animationDelay: "200ms" }}>
            <a
              href="https://www.youtube.com/@genzowais?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-youtube"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Subscribe
            </a>
            <Link href="/videos" className="btn-secondary">
              Browse Videos
            </Link>
          </div>
        </div>
      </section>

      {/* All Videos Section */}
      {videos && videos.length > 0 && (
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-2xl font-semibold text-white">Latest Videos</h2>
              <Link href="/videos" className="text-sm text-white/50 hover:text-white transition-colors">
                View all →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.slice(0, 6).map((video, index) => (
                <div key={video.id} className="fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <VideoCard video={video} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty State */}
      {(!videos || videos.length === 0) && (
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="glass-card p-12">
              <p className="text-6xl mb-4">🎬</p>
              <h2 className="text-xl font-medium text-white mb-2">No Videos Yet</h2>
              <p className="text-white/50">
                The channel is being set up. Check back soon.
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
