import Link from "next/link";
import VideoCard from "@/components/VideoCard";
import { getVideos } from "@/lib/youtube";

// Ad component for between video rows
function BannerAd() {
  return (
    <div className="col-span-full my-8 flex justify-center">
      <div id="container-0468e4bd50315776ced555d5c77276f3" className="w-full max-w-4xl mx-auto"></div>
    </div>
  );
}

export default async function Home() {
  const videos = await getVideos();
  const latestVideos = videos?.slice(0, 6) || [];
  
  // Split videos into rows of 3 for ad placement
  const videoRows = [];
  for (let i = 0; i < latestVideos.length; i += 3) {
    videoRows.push(latestVideos.slice(i, i + 3));
  }

  return (
    <main className="min-h-screen pt-28">
      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm text-white/70">Watch Now</span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-bold text-white fade-in-up bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent" style={{ animationDelay: "0ms" }}>
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
              className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-medium overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                Subscribe
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <Link href="/videos" className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
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
              <div>
                <h2 className="text-2xl font-semibold text-white">Latest Videos</h2>
                <p className="text-white/50 mt-1">Fresh content from the channel</p>
              </div>
              <Link href="/videos" className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1">
                View all 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="space-y-6">
              {videoRows.map((row, rowIndex) => (
                <div key={rowIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {row.map((video, index) => (
                      <div key={video.id} className="fade-in-up" style={{ animationDelay: `${(rowIndex * 3 + index) * 100}ms` }}>
                        <VideoCard video={video} />
                      </div>
                    ))}
                  </div>
                  {/* Insert ad after first row */}
                  {rowIndex === 0 && <BannerAd />}
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
            <div className="glass-card p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-blue-500/10"></div>
              <div className="relative z-10">
                <p className="text-6xl mb-4">🎬</p>
                <h2 className="text-xl font-medium text-white mb-2">No Videos Yet</h2>
                <p className="text-white/50">
                  The channel is being set up. Check back soon.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
