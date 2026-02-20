/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'Space Grotesk', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          purple: '#7c3aed',
          blue:   '#2563eb',
          cyan:   '#0891b2',
          pink:   '#9333ea',
        },
        glass: {
          bg:     'rgba(255, 255, 255, 0.04)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        surface: {
          DEFAULT: '#020617',
          50:  '#0f172a',
          100: '#1e293b',
          200: '#334155',
        },
      },
      screens: {
        '2xl': '1536px',
        '4k':  '2560px',
        '8k':  '7680px',
      },
      backdropBlur: {
        xs:  '2px',
        '4xl': '80px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'aurora': 'linear-gradient(135deg, #7c3aed 0%, #2563eb 50%, #0891b2 100%)',
        'glass-shine': 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)',
      },
      boxShadow: {
        'glass':    '0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.06) inset',
        'glass-lg': '0 20px 80px rgba(0,0,0,0.6), 0 0 40px rgba(139,92,246,0.15)',
        'glow-sm':  '0 0 20px rgba(139,92,246,0.35)',
        'glow-md':  '0 0 40px rgba(139,92,246,0.4), 0 0 80px rgba(59,130,246,0.2)',
        'glow-lg':  '0 0 80px rgba(139,92,246,0.5), 0 0 120px rgba(59,130,246,0.3)',
        'glow-red': '0 0 30px rgba(239,68,68,0.5), 0 0 60px rgba(239,68,68,0.25)',
      },
      animation: {
        'aurora':     'auroraShift 18s ease-in-out infinite alternate',
        'float':      'float 6s ease-in-out infinite',
        'shimmer':    'shimmer 2.5s infinite linear',
        'ring-pulse': 'ringPulse 3s ease-in-out infinite',
        'gradient':   'gradientSpin 5s linear infinite',
        'fade-up':    'fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) both',
        'orb-drift':  'orbDrift 12s ease-in-out infinite alternate',
        'spin-slow':  'spin 20s linear infinite',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
    },
  },
  plugins: [],
};
