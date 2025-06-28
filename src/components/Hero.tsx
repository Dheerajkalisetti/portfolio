import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleViewProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-transparent 
                     bg-clip-text bg-gradient-to-r from-neonBlue via-white to-neonPurple
                     drop-shadow-2xl leading-tight"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          >
            Dheeraj Kalisetti
          </motion.h1>
          
          {/* Subheading */}
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl font-orbitron text-gray-300 max-w-4xl mx-auto
                     leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Crafting Cinematic UI/UX Experiences
          </motion.p>
          
          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <motion.button
              onClick={handleViewProjects}
              className="inline-flex items-center gap-3 px-8 py-4 mt-8 
                       bg-gradient-to-r from-neonBlue/30 to-neonPurple/30
                       border-2 border-neonBlue/50 rounded-lg
                       font-orbitron font-bold text-lg text-white
                       hover:from-neonBlue/40 hover:to-neonPurple/40 
                       hover:border-neonPurple/70 hover:shadow-2xl
                       transition-all duration-300 backdrop-blur-sm"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: '0 0 30px rgba(0, 240, 255, 0.6)' 
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
              <ChevronDown size={24} className="animate-bounce" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-neonBlue rounded-full opacity-60"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-32 right-20 w-6 h-6 bg-neonPurple rounded-full opacity-50"
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.5, 0.9, 0.5]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />
    </section>
  );
}