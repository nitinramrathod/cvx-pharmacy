# CVX Pharmacy — Advanced Clinical Pharmacy Website

A world-class Next.js 14 healthcare website for **CVX Pharmacy**, Jalna, Maharashtra.

## 🚀 Tech Stack

- **Next.js 14** (App Router, Server Components)
- **TypeScript** — fully typed
- **Tailwind CSS** with custom healthcare theme
- **Framer Motion** — premium animations
- **Zod + React Hook Form** — form validation
- **next-themes** — dark/light mode
- **Lucide React** icons
- **react-countup** — animated stats
- **react-hot-toast** — toast notifications

## 📁 Project Structure

```
cvx-pharmacy/
├── app/
│   ├── layout.tsx              # Root layout + SEO metadata
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global styles, CSS variables
│   ├── not-found.tsx           # 404 page
│   ├── about/
│   │   ├── page.tsx
│   │   └── client.tsx          # About page client components
│   ├── services/
│   │   ├── page.tsx
│   │   └── client.tsx          # Services with expandable cards
│   ├── medicines/
│   │   ├── page.tsx
│   │   └── client.tsx          # Medicine catalog with search/filter
│   ├── insights/
│   │   ├── page.tsx
│   │   ├── client.tsx          # Blog listing
│   │   └── [slug]/
│   │       ├── page.tsx        # Dynamic article page (SSG)
│   │       └── client.tsx      # Article with reading progress
│   └── contact/
│       ├── page.tsx
│       └── client.tsx          # Contact form with Zod validation
├── components/
│   ├── animations/
│   │   └── AnimatedSection.tsx # Reusable scroll animations
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky navbar + mobile drawer
│   │   ├── Footer.tsx          # Full-featured footer
│   │   └── ThemeProvider.tsx   # next-themes wrapper
│   ├── sections/               # All home page sections
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyChooseSection.tsx
│   │   ├── MTMSection.tsx
│   │   ├── NCDSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── BlogPreviewSection.tsx
│   │   ├── FAQSection.tsx
│   │   └── CTASection.tsx
│   └── ui/
│       ├── ScrollProgress.tsx  # Top scroll progress bar
│       └── BackToTop.tsx       # Floating back-to-top button
├── constants/
│   └── index.ts                # All site data, config, content
├── schemas/
│   └── contact.ts              # Zod contact form schema
├── types/
│   └── index.ts                # TypeScript interfaces
├── hooks/
│   ├── useScrollProgress.ts
│   └── useMediaQuery.ts
├── lib/
│   └── utils.ts                # cn() utility
├── tailwind.config.ts          # Custom theme + animations
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## ⚡ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

| Route | Page |
|-------|------|
| `/` | Home — Hero, Stats, Services, MTM, NCD, Testimonials, Blog, FAQ |
| `/about` | About — Story, Mission/Vision, Timeline, Team, Philosophy |
| `/services` | Services — All 9 clinical services with expandable cards |
| `/medicines` | Medicines — Catalog with search, category filter, product cards |
| `/insights` | Blog — Article listing with featured hero |
| `/insights/streptokinase-vs-alteplase` | Featured: Thrombolytics comparison with table |
| `/insights/[slug]` | Dynamic article pages (statically generated) |
| `/contact` | Contact — Form (Zod validated), hours, location, WhatsApp CTA |

## ✨ Key Features

- 🌗 **Dark/Light mode** with smooth transitions
- 📱 **Mobile-first** responsive design
- 🎬 **Framer Motion** — stagger reveals, floating elements, scroll animations
- 📊 **Animated stat counters** on scroll
- 🔍 **Medicine search & filter** with live results
- 📝 **Contact form** with Zod validation + success state
- 📖 **Reading progress bar** on article pages
- 🚀 **SEO** — metadata, OG tags, static generation for blog
- ♿ **Accessible** — ARIA labels, focus rings, motion reduction support
- ⬆️ **Back to top** button + scroll progress indicator

## 🎨 Design System

- **Primary**: Blue (`#3b91f2`) → Cyan (`#06b6d4`) gradients
- **Font Display**: Sora (headings)
- **Font Body**: DM Sans (body text)
- **Glass morphism** cards with `backdrop-blur`
- **Animated grid** backgrounds
- **Blob** gradient animations

## 📞 Contact Info (CVX Pharmacy)

- 📍 Choudhary Nagar, Jalna, Maharashtra 431203
- 📞 +91 80022 55800
- 💬 WhatsApp: https://wa.me/918002255800
- ✉️ care@cvxpharmacy.in

## ⚠️ Medical Disclaimer

Content on this website is for educational purposes only and should not be considered as medical advice. Always consult your physician or clinical pharmacist before starting, stopping, or changing any medication.
