"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/your-form-id", {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch { setStatus("error"); }
  };

  return (
    <section className="max-w-2xl mx-auto py-20 px-4">
      <div className="text-center mb-12 fade-in-up">
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>Get in Touch</p>
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-5 text-glow" style={{ fontFamily: "'Syne', sans-serif" }}>Contact</h1>
        <p className="text-sm max-w-sm mx-auto leading-relaxed" style={{ color: 'var(--text-3)' }}>
          Have a question or collaboration idea? I'd love to hear from you.
        </p>
      </div>

      <div className="glass-card p-8 sm:p-10 fade-in-up" style={{ animationDelay: '150ms' }}>
        {status === "sent" ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-5 float-anim">✉️</div>
            <h2 className="text-2xl font-bold mb-3" style={{ color: 'var(--text)', fontFamily: "'Syne', sans-serif" }}>Message Sent!</h2>
            <p className="text-sm" style={{ color: 'var(--text-3)' }}>Thanks for reaching out. I'll get back to you soon.</p>
            <button onClick={() => { setStatus("idle"); setForm({ name: "", email: "", message: "" }); }}
              className="mt-6 px-6 py-2.5 rounded-xl text-sm font-semibold"
              style={{ background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.22)', color: 'var(--accent-2)' }}>
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {[{ name: "name", label: "Name", type: "text", ph: "Your name" }, { name: "email", label: "Email", type: "email", ph: "you@example.com" }].map(({ name, label, type, ph }) => (
              <div key={name} className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>{label}</label>
                <input type={type} name={name} value={(form as any)[name]} onChange={handleChange} placeholder={ph} required className="glass-input w-full px-4 py-3 text-sm" />
              </div>
            ))}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--text-3)' }}>Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} placeholder="Tell me what's on your mind…" rows={5} required className="glass-input w-full px-4 py-3 text-sm resize-none" />
            </div>
            {status === "error" && <p className="text-sm text-center" style={{ color: '#f87171' }}>Something went wrong. Please try again.</p>}
            <button type="submit" disabled={status === "sending"}
              className="w-full py-3.5 px-6 rounded-2xl text-sm font-bold text-white btn-glow disabled:opacity-50"
              style={{ background: 'linear-gradient(135deg, var(--accent), #4f46e5)', boxShadow: '0 8px 24px var(--accent-glow)', border: '1px solid rgba(255,255,255,0.06)' }}>
              {status === "sending" ? "Sending…" : "Send Message →"}
            </button>
          </form>
        )}
      </div>
      <p className="mt-6 text-center text-sm fade-in-up" style={{ color: 'var(--text-4)', animationDelay: '300ms' }}>
        Or find me on <a href="https://www.youtube.com/@genzowais" target="_blank" rel="noopener noreferrer" className="font-medium link-muted">YouTube</a>
      </p>
    </section>
  );
}
