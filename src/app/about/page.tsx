export const metadata = { title: 'About | Genzowais', description: 'Learn more about Genzowais' };

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <div className="text-center mb-16 fade-in-up">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>Our Story</p>
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-glow" style={{ fontFamily: "'Syne', sans-serif" }}>About Genzowais</h1>
        <div className="w-24 h-1 mx-auto rounded-full" style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }} />
      </div>

      <div className="glass-card p-8 sm:p-12 mb-10 fade-in-up" style={{ animationDelay: '100ms' }}>
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-3xl flex items-center justify-center text-4xl font-extrabold text-white float-anim"
              style={{ background: 'linear-gradient(135deg, var(--accent), #4f46e5)', boxShadow: '0 0 40px var(--accent-glow)', border: '1px solid rgba(255,255,255,0.10)', fontFamily: "'Syne', sans-serif" }}>
              G
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--text)', fontFamily: "'Syne', sans-serif" }}>Who We Are</h2>
            <p className="leading-relaxed mb-4" style={{ color: 'var(--text-2)' }}>
              Genzowais is a creator focused on technology, tutorials, and innovative content. We believe in making complex topics accessible, engaging, and genuinely useful.
            </p>
            <p className="leading-relaxed" style={{ color: 'var(--text-3)' }}>
              Our mission is to empower viewers with knowledge and inspire creativity through high-quality videos crafted with precision.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 stagger-children">
        {[{ label: 'Content Focus', value: 'Tech & Tutorials' }, { label: 'Visual Quality', value: '8K Ready' }, { label: 'Mission', value: 'Educate & Inspire' }, { label: 'Platform', value: 'YouTube' }].map(({ label, value }) => (
          <div key={label} className="glass-card text-center p-5 fade-in-up">
            <p className="text-sm font-bold mb-1 text-accent">{value}</p>
            <p className="text-xs uppercase tracking-wider" style={{ color: 'var(--text-4)' }}>{label}</p>
          </div>
        ))}
      </div>

      <div className="glass rounded-3xl p-8 fade-in-up" style={{ animationDelay: '300ms' }}>
        <h2 className="text-xl font-bold mb-6 text-center" style={{ color: 'var(--text)', fontFamily: "'Syne', sans-serif" }}>What Drives Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[{ icon: '⚡', title: 'Quality', desc: 'Every video is crafted with precision and purpose.' }, { icon: '🎓', title: 'Education', desc: 'We simplify complex topics so everyone can learn.' }, { icon: '🚀', title: 'Innovation', desc: 'Always exploring the bleeding edge of technology.' }].map(({ icon, title, desc }) => (
            <div key={title} className="text-center">
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="font-semibold mb-2" style={{ color: 'var(--text)' }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-3)' }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
