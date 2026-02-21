export default function AboutPage() {
  return (
    <main className="min-h-screen pt-28 pb-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm text-white/50 uppercase tracking-widest mb-2">Our Story</p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-8">About Genzowais</h1>

        {/* Avatar */}
        <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-5xl font-semibold text-white mx-auto mb-8 shadow-lg shadow-indigo-500/20">
          G
        </div>

        <div className="glass-card p-8 text-left">
          <p className="text-white/70 leading-relaxed mb-4">
            Welcome to Genzowais – your destination for technology, tutorials, and creative content.
          </p>
          <p className="text-white/70 leading-relaxed mb-4">
            We believe in sharing knowledge that empowers creators to build amazing things. 
            From coding tutorials to creative tips, we're here to help you grow.
          </p>
          <p className="text-white/70 leading-relaxed">
            Subscribe to join our community and stay updated with the latest content.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="https://www.youtube.com/@genzowais?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-youtube"
          >
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </main>
  );
}
