import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-neonBlue/20 backdrop-blur-md bg-black/20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 font-orbitron">
            © 2025 Dheeraj Kalisetti. All rights reserved.
          </p>
          
          {/* Decorative Elements */}
          <div className="flex justify-center items-center gap-4 mt-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-neonBlue to-transparent"></div>
            <motion.div 
              className="w-2 h-2 bg-neonPurple rounded-full"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: 'easeInOut'
              }}
            />
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-neonPurple to-transparent"></div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}