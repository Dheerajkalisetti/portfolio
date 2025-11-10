"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import TechStack from "@/components/tech-stack"
import Achievements from "@/components/achievements"
import Contact from "@/components/contact"
import ParticleBackground from "@/components/particle-background"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="relative bg-background text-foreground overflow-hidden">
      <ParticleBackground mousePos={mousePosition} />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <TechStack />
      <Achievements />
      <Contact />
    </div>
  )
}
