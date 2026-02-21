import { getVideos } from "@/lib/youtube";
import VideoCard from "@/components/VideoCard";

export default async function VideosPage() {
  const videos = await getVideos();

  return (
    <main className="min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-white/50 uppercase tracking-widest mb-2">Library</p>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white">All Videos</h1>
        </div>

        {videos && videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div key={video.id} className="fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                <VideoCard video={video} />
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
