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
  other: {
    '7searchppc': '0a09bf751224fe06826230f37591fb76',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2054366626825410" crossOrigin="anonymous" />
        {/* Banner Ad Script */}
        <script async data-cfasync="false" src="https://pl28791059.effectivegatecpm.com/0468e4bd50315776ced555d5c77276f3/invoke.js"></script>
      </head>
      <body className="flex flex-col min-h-screen bg-black text-white antialiased">
        {/* Premium ambient background */}
        <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-1/4 w-[800px] h-[800px] rounded-full opacity-20 animate-pulse" 
            style={{ background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full opacity-15 animate-pulse" 
            style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)', animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full opacity-10" 
            style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 60%)' }} />
          {/* Additional accent light */}
          <div className="absolute top-1/4 right-1/3 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)' }} />
        </div>

        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* Google AdSense Auto Ads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-2054366626825410",
                enable_page_level_ads: true
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
