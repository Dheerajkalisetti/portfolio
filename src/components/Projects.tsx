import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Cinematic Dashboard',
    description: 'A futuristic data visualization dashboard with 3D elements and real-time animations.',
    tech: ['React', 'Three.js', 'GSAP', 'TypeScript'],
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'Neural Network Visualizer',
    description: 'Interactive 3D visualization of neural networks with cyberpunk aesthetics.',
    tech: ['WebGL', 'React', 'Framer Motion', 'TensorFlow.js'],
    image: 'https://images.pexels.com/photos/159613/ghz-cpu-processor-computing-159613.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Holographic Portfolio',
    description: 'Award-winning portfolio featuring holographic elements and particle systems.',
    tech: ['React Three Fiber', 'GLSL', 'PostProcessing', 'Blender'],
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: '#',
    demo: '#'
  }
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Optimized title animation
    if (titleRef.current) {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play none none reverse',
            once: true // Only animate once for better performance
          }
        }
      );
    }

    // Optimized cards animation with batch processing
    const cards = document.querySelectorAll('.project-card');
    if (cards.length > 0) {
      gsap.fromTo(cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15, // Reduced stagger for smoother animation
          scrollTrigger: {
            trigger: cards[0],
            start: 'top 90%',
            end: 'bottom 10%',
            toggleActions: 'play none none reverse',
            once: true
          }
        }
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === titleRef.current || 
            Array.from(cards).includes(trigger.trigger as Element)) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 
          ref={titleRef}
          className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold text-center mb-16
                   text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple"
        >
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card group"
              whileHover={{ y: -5 }} // Reduced hover movement
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <div className="relative overflow-hidden rounded-xl backdrop-blur-md 
                            bg-gradient-to-br from-black/40 to-gray-900/40 
                            border border-neonBlue/30 hover:border-neonPurple/50
                            transition-all duration-300 hover:shadow-xl hover:shadow-neonBlue/10">
                
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 
                             group-hover:scale-105" // Reduced scale for smoother animation
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 
                                transition-opacity duration-300">
                    <motion.a
                      href={project.github}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-lg 
                               hover:bg-neonBlue/20 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} className="text-white" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-lg 
                               hover:bg-neonPurple/20 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={16} className="text-white" />
                    </motion.a>
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-orbitron font-bold text-white mb-3 
                               group-hover:text-neonBlue transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-orbitron bg-neonPurple/20 
                                 text-neonPurple border border-neonPurple/30 rounded-full
                                 group-hover:bg-neonBlue/20 group-hover:text-neonBlue
                                 group-hover:border-neonBlue/30 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Subtle Glow Effect */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 pointer-events-none
                              bg-gradient-to-r from-neonBlue/5 to-neonPurple/5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}