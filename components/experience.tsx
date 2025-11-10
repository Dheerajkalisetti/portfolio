"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function Experience() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  const experiences = [
    {
      title: "Software Engineer",
      company: "Zinzu.io",
      location: "Seattle, USA (Remote)",
      period: "Mar 2024 – Present",
      description:
        "Building a game-changing big data analytics platform enabling no-code data querying and visualization.",
      highlights: [
        "Full-stack React & Django development with secure OAuth integration",
        "GA4 analytics, anomaly detection, and behavior flow visualization",
        "Spark, PySpark, Hadoop, BigQuery, Dataproc infrastructure",
        "HTTPS, SSL, load balancing, and DNS setup for production",
      ],
    },
    {
      title: "Software Development Engineer Intern",
      company: "Quotient Technologies",
      location: "Bangalore, India",
      period: "Oct 2022 – Mar 2024",
      description: "Designed and deployed scalable software solutions.",
      highlights: [
        "Reduced bug resolution time by 35%",
        "ALC Offer Migration and Tiered Pinning projects",
        "Airflow migration from RunDeck",
      ],
    },
    {
      title: "Cyber Security Trainee",
      company: "Verzeo EduTech",
      location: "Virtual",
      period: "Apr 2021 – May 2021",
      description: "Network security and vulnerability assessment.",
      highlights: [
        "Network log monitoring and analysis",
        "Penetration testing simulations",
        "Security posture documentation",
      ],
    },
  ]

  return (
    <section id="experience" ref={ref} className="relative py-20 px-6 border-t border-neon-purple/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-balance"
        >
          <span className="bg-gradient-to-r from-neon-purple to-electric-blue bg-clip-text text-transparent">
            Professional Journey
          </span>
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-electric-blue/5 to-aqua/5 border border-electric-blue/20 backdrop-blur-md hover:border-neon-purple/40 transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/10"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-electric-blue font-semibold mb-1">{exp.company}</p>
                  <p className="text-foreground/60 text-sm">{exp.location}</p>
                </div>
                <div className="text-sm text-neon-purple font-semibold mt-4 md:mt-0">{exp.period}</div>
              </div>
              <p className="text-foreground/70 mb-4">{exp.description}</p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight, j) => (
                  <li key={j} className="flex gap-3 text-foreground/60 text-sm">
                    <span className="text-aqua mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
