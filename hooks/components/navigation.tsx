"use client"

import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ["About", "Experience", "Projects", "Tech Stack", "Contact"]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/30 border-b border-neon-purple/20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold bg-gradient-to-r from-electric-blue via-aqua to-neon-purple bg-clip-text text-transparent">
          Dheeraj
        </div>

        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm text-foreground/70 hover:text-electric-blue transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="px-6 py-2 rounded-full bg-gradient-to-r from-electric-blue to-aqua text-background font-semibold hover:shadow-lg hover:shadow-electric-blue/50 transition-all duration-300 text-sm"
        >
          Connect
        </a>
      </div>
    </nav>
  )
}
