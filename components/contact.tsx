"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const socialLinks = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/kalisetti-dheeraj" },
    { name: "GitHub", url: "https://github.com" },
    { name: "Email", url: "mailto:dheerajkalisetti@gmail.com" },
  ]

  return (
    <section id="contact" ref={ref} className="relative py-20 px-6 border-t border-neon-purple/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-neon-purple via-electric-blue to-aqua bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you. Reach out and let's create
            something amazing together.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="p-8 rounded-2xl bg-gradient-to-br from-electric-blue/10 to-aqua/10 border border-electric-blue/20 backdrop-blur-md mb-8"
        >
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-4 py-3 rounded-lg bg-background/50 border border-foreground/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="px-4 py-3 rounded-lg bg-background/50 border border-foreground/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all duration-300"
            />
          </div>
          <textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-background/50 border border-foreground/20 text-foreground placeholder-foreground/40 focus:outline-none focus:border-electric-blue focus:ring-1 focus:ring-electric-blue transition-all duration-300 resize-none"
          />
          <button
            type="submit"
            className="mt-6 w-full px-8 py-3 rounded-full bg-gradient-to-r from-electric-blue to-aqua text-background font-semibold hover:shadow-lg hover:shadow-electric-blue/50 transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border-2 border-neon-purple text-neon-purple hover:bg-neon-purple/10 transition-all duration-300 font-semibold text-sm"
            >
              {link.name}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-neon-purple/20 text-center text-foreground/50 text-sm"
        >
          <p>© 2025 Kalisetti Dheeraj Babu. All rights reserved.</p>
          <p className="mt-2">Built with React, Tailwind CSS, and Framer Motion</p>
        </motion.div>
      </div>
    </section>
  )
}
