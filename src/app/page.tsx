import { fetchVideos } from '@/lib/youtube';
import VideoCard from '@/components/VideoCard';

export const metadata = {
  title: 'Home | Genzowais',
  description: 'Official website for the Genzowais YouTube channel.',
};

export default async function HomePage() {
  const videos = await fetchVideos();

  return (
    <>
      {/* ══════ HERO ══════ */}
      <section className="relative text-center py-28 sm:py-40 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
          <div style={{ width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, var(--accent-glow), transparent 70%)', opacity: 0.3, animation: 'orbDrift 16s ease-in-out infinite alternate' }} />
        </div>

        {/* Badge */}
        <div className="inline-flex mb-8 fade-in-up">
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest"
            style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-bdr)', color: 'var(--text-2)', backdropFilter: 'blur(16px)' }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
            Official Creator Channel
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-7xl sm:text-9xl font-extrabold tracking-tight mb-5 leading-none fade-in-up" style={{ animationDelay: '80ms', fontFamily: "'Syne', sans-serif" }}>
          <span className="text-glow">Genzowais</span>
        </h1>

        <p className="text-base sm:text-lg font-medium mb-3 fade-in-up" style={{ animationDelay: '160ms', color: 'var(--text-2)' }}>
          Technology · Tutorials · Creative Content
        </p>
        <p className="text-sm mb-14 max-w-md mx-auto leading-relaxed fade-in-up" style={{ animationDelay: '220ms', color: 'var(--text-3)' }}>
          Welcome to the official digital home. Explore latest videos, thoughts, and creations.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 fade-in-up" style={{ animationDelay: '300ms' }}>
          <a href="https://www.youtube.com/@genzowais?sub_confirmation=1" target="_blank" rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold text-white btn-glow"
            style={{ background: 'linear-gradient(135deg, #dc2626, #b91c1c)', boxShadow: '0 8px 28px var(--red-glow)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <svg className="w-5 h-5 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </a>
          <a href="/videos" className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold btn-glow"
            style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-bdr)', backdropFilter: 'blur(16px)', color: 'var(--text-2)' }}>
            Browse Videos →
          </a>
        </div>
      </section>

      {/* ══════ STATS ══════ */}
      <section className="mb-16">
        <div className="glass rounded-3xl px-8 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: 'Videos', value: videos?.length ? `${videos.length}+` : '—', icon: '🎬' },
            { label: 'Platform', value: 'YouTube', icon: '▶️' },
            { label: 'Category', value: 'Tech & Tutorials', icon: '⚡' },
            { label: 'Language', value: 'English', icon: '🌐' },
          ].map(({ label, value, icon }) => (
            <div key={label} className="text-center">
              <p className="text-2xl mb-1">{icon}</p>
              <p className="text-xl font-bold text-accent">{value}</p>
              <p className="text-xs uppercase tracking-widest mt-0.5 font-medium" style={{ color: 'var(--text-4)' }}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════ VIDEOS ══════ */}
      <section className="pb-28">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'var(--accent)' }}>Content</p>
            <h2 className="text-3xl sm:text-4xl font-bold" style={{ color: 'var(--text)', fontFamily: "'Syne', sans-serif" }}>Latest Videos</h2>
          </div>
          <a href="/videos" className="hidden sm:inline-flex items-center gap-2 text-sm font-medium link-muted">
            View all →
          </a>
        </div>

        {videos && videos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
            {videos.slice(0, 6).map((video) => <VideoCard key={video.id} video={video} />)}
          </div>
        ) : (
          <div className="text-center py-24 glass rounded-3xl">
            <div className="text-6xl mb-5 float-anim">🎬</div>
            <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text)' }}>Content Coming Soon</h3>
            <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--text-3)' }}>Channel is being configured. Check back shortly.</p>
          </div>
        )}
      </section>
    </>
  );
}
