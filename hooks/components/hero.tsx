"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <motion.div
        className="text-center max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-6 inline-block">
          <div className="px-4 py-2 rounded-full border border-electric-blue/50 bg-electric-blue/10 backdrop-blur-md">
            <span className="text-sm text-electric-blue font-medium">Welcome to my digital space</span>
          </div>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-6xl md:text-7xl font-bold mb-6 text-balance">
          <span className="bg-gradient-to-r from-electric-blue via-aqua to-neon-purple bg-clip-text text-transparent">
            Kalisetti Dheeraj Babu
          </span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-foreground/70 mb-8 max-w-2xl mx-auto">
          Software Engineer • Big Data Specialist • Cloud Architect
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base md:text-lg text-foreground/60 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Building next-generation data analytics platforms and scalable systems across AWS, GCP, and Azure. Passionate
          about distributed computing, cybersecurity, and elegant software engineering.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-electric-blue to-aqua text-background font-semibold hover:shadow-lg hover:shadow-electric-blue/50 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border-2 border-neon-purple text-neon-purple font-semibold hover:bg-neon-purple/10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-electric-blue/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
