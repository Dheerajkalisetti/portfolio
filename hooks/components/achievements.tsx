"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Achievements() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const achievements = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "2024",
      link: "https://www.credly.com/badges/4a4b743c-84c0-426b-8b2e-de4b96bc4080",
    },
    {
      title: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      date: "2024",
      link: "https://www.credly.com/badges/d4994218-535e-4833-8b97-e87be6ae9e4a",
    },
    {
      title: "Juniper Networks Certified Associate – JNCIA",
      issuer: "Juniper Networks",
      date: "2023",
      link: "https://www.credly.com/badges/b8075f10-1a24-45a0-bbc3-9efbaa18566f",
    },
    {
      title: "ServiceNow Certified System Administrator",
      issuer: "ServiceNow",
      date: "2023",
      link: "#",
    },
  ]

  return (
    <section id="achievements" ref={ref} className="relative py-20 px-6 border-t border-neon-purple/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-balance"
        >
          <span className="bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
            Certifications & Awards
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, i) => (
            <motion.a
              key={i}
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ scale: 1.02, x: 4 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-aqua/10 to-electric-blue/10 border border-aqua/30 backdrop-blur-md hover:border-neon-purple/50 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-electric-blue transition-colors mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-foreground/60">{achievement.issuer}</p>
                </div>
                <span className="text-xs px-3 py-1 rounded-full bg-neon-purple/20 text-neon-purple font-semibold">
                  {achievement.date}
                </span>
              </div>
              <div className="h-1 w-8 bg-gradient-to-r from-electric-blue to-aqua rounded-full group-hover:w-16 transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
