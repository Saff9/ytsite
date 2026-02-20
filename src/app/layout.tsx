import './globals.css';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Genzowais — Official Channel',
  description: 'Official website for the Genzowais YouTube channel.',
  themeColor: '#000000',
  icons: {
    icon: '/favicon.svg',
    apple: '/icon.svg',
  },
};

const themeScript = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    if (saved && ['dark','midnight','dim'].indexOf(saved) !== -1) {
      document.documentElement.setAttribute('data-theme', saved);
    } else {
      var dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'dim');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex flex-col min-h-screen antialiased" style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}>
        {/* Ambient orbs */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="orb w-[600px] h-[600px] -top-48 -left-32" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.10), transparent 65%)' }} />
          <div className="orb w-[400px] h-[400px] -top-16 right-0" style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.07), transparent 65%)', animationDelay: '4s' }} />
          <div className="orb w-[400px] h-[400px] bottom-0 left-1/3" style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.06), transparent 65%)', animationDelay: '8s' }} />
        </div>

        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
