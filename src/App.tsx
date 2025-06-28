import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Background3D from './components/Background3D';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Configure ScrollTrigger for better performance
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
      ignoreMobileResize: true
    });

    // Optimize ScrollTrigger refresh rate
    ScrollTrigger.defaults({
      scroller: window,
      toggleActions: "play none none reverse"
    });

    // Custom cursor effect with throttling
    const cursor = document.createElement('div');
    cursor.className = 'fixed w-3 h-3 bg-neonBlue/40 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100';
    document.body.appendChild(cursor);

    let animationId: number;
    const moveCursor = (e: MouseEvent) => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      
      animationId = requestAnimationFrame(() => {
        cursor.style.left = e.clientX - 6 + 'px';
        cursor.style.top = e.clientY - 6 + 'px';
      });
    };

    document.addEventListener('mousemove', moveCursor, { passive: true });

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', moveCursor);
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor);
      }
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyber-gradient text-white font-orbitron overflow-x-hidden">
      {/* 3D Background with Error Boundary */}
      <ErrorBoundary
        fallback={
          <div className="fixed inset-0 -z-10">
            {/* Fallback CSS-only background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>
            <div className="absolute inset-0">
              {/* CSS Stars */}
              <div className="stars"></div>
              <div className="stars2"></div>
              <div className="stars3"></div>
            </div>
            {/* Animated elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-neonBlue/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border border-neonPurple/30 rounded-full animate-bounce"></div>
          </div>
        }
      >
        <Background3D />
      </ErrorBoundary>
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Simplified scroll indicator */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="w-px h-32 bg-gradient-to-b from-transparent via-neonBlue to-transparent opacity-50"></div>
        <div className="w-2 h-2 bg-neonPurple rounded-full absolute left-1/2 top-0 transform -translate-x-1/2"></div>
      </div>
    </div>
  );
}

export default App;