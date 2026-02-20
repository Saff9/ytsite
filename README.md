# 🎬 Genzowais — Official Channel Website

> A premium, glass-morphism YouTube channel website built with **Next.js 13**, **Tailwind CSS**, and **TypeScript**. Features a pure-black cinematic aesthetic with three switchable themes and a floating pill navigation.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Saff9/ytsite)

---

## ✨ Features

| Feature | Description |
|---|---|
| 🖤 **Pure Black Design** | True `#000000` background for maximum contrast |
| 🎨 **3 Themes** | Dark, Midnight (navy), Dim (warm gray) — auto-detects device preference |
| 💊 **Floating Pill Header** | Glass navbar that morphs to pill shape on scroll |
| 🔤 **Premium Typography** | Syne (headings) + Plus Jakarta Sans (body) |
| 🃏 **Glass Cards** | Backdrop-blur panels with iridescent top edges |
| 🎬 **YouTube Integration** | Auto-fetches latest videos via YouTube Data API |
| 📱 **Fully Responsive** | Mobile-first design with smooth hamburger menu |
| ⚡ **Performance** | CSS-only animations, `will-change` hints, minimal JS |
| 🌐 **SEO Optimized** | Proper meta tags, semantic HTML, Open Graph ready |

---

## 🏗️ Architecture

```mermaid
graph TD
    A[Next.js 13 App Router] --> B[Layout]
    B --> C[Header Component]
    B --> D[Page Content]
    B --> E[Footer Component]
    
    D --> F[Home Page]
    D --> G[Videos Page]
    D --> H[About Page]
    D --> I[Contact Page]
    D --> J[Video Player Page]
    
    F --> K[VideoCard Component]
    G --> K
    
    C --> L[Theme Toggle]
    L --> M[localStorage]
    L --> N[CSS Variables]
    
    style A fill:#000,stroke:#6366f1,color:#fff
    style B fill:#0a0a0a,stroke:#6366f1,color:#fff
    style C fill:#111,stroke:#818cf8,color:#fff
    style E fill:#111,stroke:#818cf8,color:#fff
    style L fill:#111,stroke:#a78bfa,color:#fff
```

## 🎨 Theme System

```mermaid
flowchart LR
    A[Page Load] --> B{localStorage<br/>has theme?}
    B -->|Yes| C[Apply saved theme]
    B -->|No| D{prefers-color-scheme?}
    D -->|dark| E[Apply 'dark']
    D -->|light| F[Apply 'dim']
    C --> G[Render]
    E --> G
    F --> G
    G --> H[User clicks toggle]
    H --> I[Cycle: dark → midnight → dim]
    I --> J[Save to localStorage]
    J --> G

    style A fill:#000,stroke:#6366f1,color:#fff
    style G fill:#0a0a0a,stroke:#818cf8,color:#fff
    style I fill:#111,stroke:#a78bfa,color:#fff
```

### Theme Comparison

| Token | 🌑 Dark | 🌊 Midnight | 🌗 Dim |
|---|---|---|---|
| `--bg` | `#000000` | `#020617` | `#18181b` |
| `--text` | `#ffffff` | `#f8fafc` | `#fafafa` |
| `--accent` | `#6366f1` | `#3b82f6` | `#a78bfa` |
| Vibe | Pure black | Deep navy | Warm gray |

---

## 📁 Project Structure

```
ytsite/
├── public/
│   ├── icon.svg              # App icon (512x512)
│   └── favicon.svg           # Browser favicon (32x32)
├── src/
│   ├── app/
│   │   ├── globals.css       # Theme tokens, glass utilities, animations
│   │   ├── layout.tsx        # Root layout with theme injection
│   │   ├── page.tsx          # Home — hero, stats, video grid
│   │   ├── about/page.tsx    # About — bio, stats, values
│   │   ├── contact/page.tsx  # Contact — glass form (Formspree)
│   │   └── videos/
│   │       ├── page.tsx      # Video listing with skeleton loading
│   │       └── [id]/page.tsx # Video player with subscribe CTA
│   ├── components/
│   │   ├── Header.tsx        # Floating pill nav + theme toggle
│   │   ├── Footer.tsx        # Glass footer with brand + links
│   │   └── VideoCard.tsx     # Thumbnail card with hover effects
│   └── lib/
│       └── youtube.ts        # YouTube Data API integration
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18+
- **npm** or **yarn**
- A **YouTube Data API v3** key

### Installation

```bash
# Clone the repository
git clone https://github.com/Saff9/ytsite.git
cd ytsite

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your YouTube API key

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

| Variable | Description | Required |
|---|---|---|
| `YOUTUBE_API_KEY` | YouTube Data API v3 key | ✅ |
| `YOUTUBE_CHANNEL_ID` | Your YouTube channel ID | ✅ |

---

## 🌐 Deployment (Vercel)

This project is **Vercel-ready** out of the box:

1. Push to GitHub
2. Import the repo on [vercel.com](https://vercel.com)
3. Add environment variables (`YOUTUBE_API_KEY`, `YOUTUBE_CHANNEL_ID`)
4. Deploy — Vercel auto-detects Next.js

Or use the one-click deploy button at the top of this README.

```mermaid
flowchart LR
    A[GitHub Push] --> B[Vercel Build]
    B --> C[Next.js SSR/SSG]
    C --> D[Edge Network CDN]
    D --> E[Live Site]
    
    style A fill:#000,stroke:#6366f1,color:#fff
    style B fill:#0a0a0a,stroke:#818cf8,color:#fff
    style E fill:#111,stroke:#22c55e,color:#fff
```

---

## 🛠️ Tech Stack

```mermaid
graph LR
    A[Next.js 13] --> B[React 18]
    A --> C[TypeScript]
    A --> D[Tailwind CSS]
    A --> E[App Router]
    
    F[APIs] --> G[YouTube Data API v3]
    F --> H[Formspree]
    
    I[Fonts] --> J[Syne]
    I --> K[Plus Jakarta Sans]
    
    style A fill:#000,stroke:#6366f1,color:#fff
    style F fill:#0a0a0a,stroke:#ef4444,color:#fff
    style I fill:#111,stroke:#a78bfa,color:#fff
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <strong>Built with ❤️ by Genzowais</strong><br/>
  <sub>Crafted with passion · Built for creators</sub>
</p>
