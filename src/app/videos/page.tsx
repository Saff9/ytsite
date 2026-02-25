import { getVideos } from "@/lib/youtube";
import VideoCard from "@/components/VideoCard";

// Ad component for between video rows
function BannerAd() {
  return (
    <div className="col-span-full my-8 flex justify-center">
      <div id="container-0468e4bd50315776ced555d5c77276f3" className="w-full max-w-4xl mx-auto"></div>
    </div>
  );
}

export default async function VideosPage() {
  const videos = await getVideos();

  // Split videos into rows of 3 for ad placement
  const videoRows = [];
  if (videos && videos.length > 0) {
    for (let i = 0; i < videos.length; i += 3) {
      videoRows.push(videos.slice(i, i + 3));
    }
  }

  return (
    <main className="min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-white/50 uppercase tracking-widest mb-2">Library</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white">All Videos</h1>
        </div>

        {videos && videos.length > 0 ? (
          <div className="space-y-6">
            {videoRows.map((row, rowIndex) => (
              <div key={rowIndex}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {row.map((video, index) => (
                    <div key={video.id} className="fade-in-up" style={{ animationDelay: `${(rowIndex * 3 + index) * 50}ms` }}>
                      <VideoCard video={video} />
                    </div>
                  ))}
                </div>
                {/* Insert ad after first row and every 2nd row thereafter */}
                {rowIndex === 0 && <BannerAd />}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="glass-card p-12 max-w-md mx-auto">
              <p className="text-6xl mb-4">🎬</p>
              <h2 className="text-xl font-medium text-white mb-2">No Videos Yet</h2>
              <p className="text-white/50">
                The channel is being set up. Check back soon.
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
