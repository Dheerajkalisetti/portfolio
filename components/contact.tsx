"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import emailjs from '@emailjs/browser'

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
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<string | null>(null)
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  // Initialize EmailJS with your public key (get from emailjs.com dashboard)
  // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS user ID (e.g., 'user_abc123')
  emailjs.init('juj8_YyCFZ3F5SDV-')

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    if (!validateForm()) {
      setStatus('Please fix the errors below.')
      return
    }

    setLoading(true)
    setStatus(null)
    setErrors({})

    try {
      // Replace with your EmailJS service ID and template ID

      const serviceId = 'service_mi3t3lk'; // e.g., 'service_abc123'
      const templateId = 'template_3hehj47'; // e.g., 'template_def456'

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'dheerajkalisetti@gmail.com' // Your email to receive messages
      };

      const result = await emailjs.send(serviceId, templateId, templateParams);

      console.log('EmailJS success:', result.status, result.text);
      setStatus('Message sent successfully! I\'ll get back to you soon.')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('Failed to send message. Please try again later.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: 'name' | 'email' | 'message', value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }))
    }
    if (status === 'Please fix the errors below.') {
      setStatus(null)
    }
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
          {status && (
            <div className={`mb-4 p-3 rounded-lg text-sm ${status.includes('successfully') || status.includes('sent')
              ? 'bg-green-900/50 text-green-300 border border-green-500/30'
              : 'bg-red-900/50 text-red-300 border border-red-500/30'
              }`}>
              {status}
            </div>
          )}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                required
                disabled={loading}
                className={`w-full px-4 py-3 rounded-lg bg-background/50 border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-1 focus:ring-electric-blue transition-all duration-300 ${errors.name
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-foreground/20 focus:border-electric-blue focus:ring-electric-blue'
                  } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                required
                disabled={loading}
                className={`w-full px-4 py-3 rounded-lg bg-background/50 border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-1 focus:ring-electric-blue transition-all duration-300 ${errors.email
                  ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                  : 'border-foreground/20 focus:border-electric-blue focus:ring-electric-blue'
                  } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => handleChange('message', e.target.value)}
              rows={5}
              required
              disabled={loading}
              className={`w-full px-4 py-3 rounded-lg bg-background/50 border text-foreground placeholder-foreground/40 focus:outline-none focus:ring-1 focus:ring-electric-blue transition-all duration-300 resize-none ${errors.message
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                : 'border-foreground/20 focus:border-electric-blue focus:ring-electric-blue'
                } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`mt-6 w-full px-8 py-3 rounded-full font-semibold transition-all duration-300 ${loading
              ? 'opacity-50 cursor-not-allowed bg-gray-600'
              : 'bg-gradient-to-r from-electric-blue to-aqua text-background hover:shadow-lg hover:shadow-electric-blue/50'
              }`}
          >
            {loading ? 'Sending...' : 'Send Message'}
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