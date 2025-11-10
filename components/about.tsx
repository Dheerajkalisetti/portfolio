"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section id="about" ref={ref} className="relative py-20 px-6 border-t border-neon-purple/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              <span className="bg-gradient-to-r from-electric-blue to-aqua bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-foreground/70 text-lg mb-4 leading-relaxed">
              I'm a Software Engineer with deep expertise in distributed systems and big data engineering. Currently at
              Zinzu.io, I'm building game-changing analytics platforms that enable teams to query and visualize massive
              datasets without code.
            </p>
            <p className="text-foreground/70 text-lg mb-4 leading-relaxed">
              With 3+ years of experience, I've worked across the full cloud stack (AWS, GCP, Azure) and mastered
              technologies like Apache Spark, Hadoop, and various streaming frameworks. I'm passionate about creating
              elegant solutions to complex problems.
            </p>
            <p className="text-foreground/70 text-lg leading-relaxed">
              Beyond code, I hold AWS and Azure certifications, and I'm committed to continuous learning in
              cybersecurity and cloud architecture.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Experience", value: "3+" },
              { label: "Projects", value: "15+" },
              { label: "Certifications", value: "4" },
              { label: "Deployed", value: "Production" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-electric-blue/10 to-aqua/10 border border-electric-blue/20 backdrop-blur-md hover:border-neon-purple/40 transition-colors duration-300"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-foreground/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
