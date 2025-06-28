import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';

export default function Header() {
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-neonBlue/20"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1 
          className="text-2xl md:text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Kalisetti Portfolio
        </motion.h1>
        
        <motion.button
          onClick={handleContactClick}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-neonBlue/20 to-neonPurple/20 
                   border border-neonBlue/50 rounded-lg font-orbitron font-medium text-white
                   hover:from-neonBlue/30 hover:to-neonPurple/30 hover:border-neonPurple/70
                   transition-all duration-300 backdrop-blur-sm"
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 240, 255, 0.4)' }}
          whileTap={{ scale: 0.95 }}
        >
          <Mail size={18} />
          <span className="hidden sm:inline">Contact Me</span>
        </motion.button>
      </div>
    </motion.header>
  );
}