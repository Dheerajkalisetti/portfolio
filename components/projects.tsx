"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const projects = [
    {
      title: "aiHub – Multi-AI Chat Platform",
      description:
        "Unified conversational workspace integrating Grok, DeepSeek, Claude, and ChatGPT with persistent sessions and responsive UI.",
      tech: ["React", "FastAPI", "Multi-AI Integration", "Real-time Sync"],
      color: "from-electric-blue",
    },
    {
      title: "Real Estate Platform",
      description:
        "Full-stack web and mobile application for property listings and lead tracking. Improved agent productivity by 60%.",
      tech: ["Django REST", "React", "Expo Go", "PostgreSQL"],
      color: "from-aqua",
    },
    {
      title: "Auction Management System",
      description: "Django-based auction platform with dynamic bidding, secure transactions, and real-time updates.",
      tech: ["Django", "WebSocket", "PostgreSQL", "Redis"],
      color: "from-neon-purple",
    },
  ]

  return (
    <section id="projects" ref={ref} className="relative py-20 px-6 border-t border-neon-purple/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-balance"
        >
          <span className="bg-gradient-to-r from-aqua to-neon-purple bg-clip-text text-transparent">
            Featured Projects
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`p-6 rounded-2xl bg-gradient-to-br ${project.color}/10 to-foreground/5 border border-electric-blue/20 backdrop-blur-md hover:border-neon-purple/40 transition-all duration-300 group cursor-pointer`}
            >
              <div className="mb-4 h-1 w-12 bg-gradient-to-r from-electric-blue to-aqua rounded-full group-hover:w-24 transition-all duration-300" />
              <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-foreground/70 text-sm mb-6 leading-relaxed">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs px-3 py-1 rounded-full bg-electric-blue/10 text-electric-blue border border-electric-blue/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
