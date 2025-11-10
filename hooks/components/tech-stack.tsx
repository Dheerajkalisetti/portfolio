"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function TechStack() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const techCategories = [
    {
      name: "Programming",
      items: ["Python", "Java", "JavaScript", "SQL"],
    },
    {
      name: "Frameworks",
      items: ["Django", "React", "React Native", "Vite"],
    },
    {
      name: "Big Data",
      items: ["Apache Spark", "Hadoop", "DuckDB", "PySpark"],
    },
    {
      name: "Cloud",
      items: ["AWS", "GCP", "Azure", "CI/CD"],
    },
    {
      name: "DevOps",
      items: ["Docker", "Kubernetes", "Nginx", "Load Balancing"],
    },
    {
      name: "Security",
      items: ["OAuth 2.0", "Encryption", "API Security", "SSL/TLS"],
    },
  ]

  return (
    <section id="tech-stack" ref={ref} className="relative py-20 px-6 border-t border-neon-purple/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-balance"
        >
          <span className="bg-gradient-to-r from-neon-purple to-aqua bg-clip-text text-transparent">Tech Stack</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-electric-blue/10 to-neon-purple/10 border border-electric-blue/20 backdrop-blur-md"
            >
              <h3 className="text-lg font-bold text-electric-blue mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((item, j) => (
                  <motion.span
                    key={j}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 rounded-full bg-foreground/10 text-foreground/80 text-sm border border-foreground/20 hover:border-electric-blue hover:text-electric-blue transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
