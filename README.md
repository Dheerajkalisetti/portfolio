# 🚀 Kalisetti Portfolio - Cinematic UI/UX Showcase

<div align="center">
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Three.js-0.159.0-000000?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-10.16.16-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/GSAP-3.12.2-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
</div>

<div align="center">
  <h3>🎬 Oscar-Level Cinematic Portfolio Experience</h3>
  <p>A cutting-edge portfolio showcasing the future of digital experiences with immersive 3D graphics, cinematic animations, and cyberpunk aesthetics.</p>
</div>

---

## ✨ Features

### 🎭 **Cinematic Experience**
- **3D Background** - Rotating wireframe icosahedron with particle systems
- **WebGL Effects** - Bloom post-processing and dynamic lighting
- **Cyberpunk Aesthetic** - Neon blue (#00f0ff) and purple (#8b00ff) theme
- **Custom Animations** - Movie-quality transitions and micro-interactions

### 🚀 **Performance Optimized**
- **Error Boundaries** - Graceful WebGL fallback with CSS animations
- **Responsive Design** - Mobile-first approach with adaptive layouts
- **Smooth Scrolling** - GSAP-powered scroll-triggered animations
- **Memory Management** - Optimized 3D resource cleanup

### 🛠️ **Modern Tech Stack**
- **React 18** with TypeScript for type-safe development
- **React Three Fiber** for seamless 3D integration
- **Framer Motion** for fluid 2D animations
- **Tailwind CSS** with custom cyberpunk theme
- **GSAP** for professional scroll animations

---

## 🎯 Live Demo

🌐 **[View Live Portfolio](https://kalisetti.in)**

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/kalisetti-portfolio.git

# Navigate to project directory
cd kalisetti-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

---

## 🏗️ Project Structure

```
kalisetti-portfolio/
├── src/
│   ├── components/
│   │   ├── Background3D.tsx      # 3D scene with WebGL effects
│   │   ├── ErrorBoundary.tsx     # WebGL error handling
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Hero.tsx              # Main hero section
│   │   ├── Projects.tsx          # Portfolio showcase
│   │   ├── Contact.tsx           # Contact form & social links
│   │   └── Footer.tsx            # Site footer
│   ├── App.tsx                   # Main application component
│   ├── main.tsx                  # Application entry point
│   └── index.css                 # Global styles & animations
├── public/                       # Static assets
├── tailwind.config.js           # Tailwind configuration
└── package.json                 # Dependencies & scripts
```

---

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--neon-blue: #00f0ff;
--neon-purple: #8b00ff;

/* Background Gradient */
--cyber-gradient: linear-gradient(135deg, #000000 0%, #1a1a2e 50%, #16213e 100%);
```

### Typography
- **Primary Font**: Orbitron (Google Fonts)
- **Weights**: 400, 700, 900
- **Usage**: Futuristic, sci-fi aesthetic

### Animation Principles
- **Easing**: Custom cubic-bezier curves for cinematic feel
- **Duration**: 0.3s - 1.2s based on element importance
- **Stagger**: 0.1s - 0.15s for sequential animations

---

## 🔧 Key Technologies

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | UI Framework | 18.3.1 |
| **TypeScript** | Type Safety | 5.5.3 |
| **Three.js** | 3D Graphics | 0.159.0 |
| **React Three Fiber** | React 3D Integration | 8.15.12 |
| **Framer Motion** | 2D Animations | 10.16.16 |
| **GSAP** | Scroll Animations | 3.12.2 |
| **Tailwind CSS** | Styling Framework | 3.4.1 |
| **Vite** | Build Tool | 5.4.2 |

---

## 🎬 Portfolio Sections

### 1. **Hero Section**
- Large-scale typography with gradient effects
- Animated CTA buttons with hover states
- Floating decorative elements

### 2. **Featured Projects**
- **Cinematic Dashboard** - 3D data visualization
- **Neural Network Visualizer** - Interactive 3D networks
- **Holographic Portfolio** - Particle system showcase

### 3. **Contact Section**
- Interactive form with cyberpunk styling
- Social media integration
- Animated form validation

---

## 🚀 Performance Features

### 3D Optimizations
- **Adaptive Quality** - Adjusts based on device capability
- **Frame Rate Limiting** - Maintains 60fps on all devices
- **Memory Management** - Proper WebGL resource cleanup
- **Error Recovery** - CSS fallback for WebGL failures

### Animation Optimizations
- **RequestAnimationFrame** - Smooth cursor tracking
- **Intersection Observer** - Efficient scroll triggers
- **Reduced Motion** - Respects user accessibility preferences

---

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 90+ | ✅ Full |
| Firefox | 88+ | ✅ Full |
| Safari | 14+ | ✅ Full |
| Edge | 90+ | ✅ Full |

**Note**: WebGL features gracefully degrade to CSS animations on unsupported devices.

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

---

## 🔧 Development Scripts

```bash
# Development
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview build
npm run lint         # ESLint check
```

---

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
dist
```

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the Apache License.

---

## 🙏 Acknowledgments

- **Three.js Community** - For incredible 3D web capabilities
- **Framer Motion** - For smooth animation primitives
- **GSAP** - For professional scroll animations
- **Pexels** - For high-quality stock imagery
- **Google Fonts** - For the Orbitron typeface

---

## 📞 Contact

**Dheeraj Kalisetti**
- 🌐 Portfolio: [kalisetti.in](https://kalisetti.in)
- 💼 LinkedIn: [linkedin.com/in/kalisetti-dheeraj](https://linkedin.com/in/kalisetti-dheeraj)
- 📧 Email: dheerajkalisetti@gmail.com
- 🐙 GitHub: [@Dheerajkalisetti](https://github.com/Dheerajkalisetti)

---

<div align="center">
  <p>⭐ Star this repo if you found it helpful!</p>
  <p>Made with ❤️ and lots of ☕</p>
</div>
