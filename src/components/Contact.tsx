import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github, Linkedin, Mail, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com',
    color: 'hover:text-neonBlue hover:border-neonBlue/50'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://linkedin.com',
    color: 'hover:text-neonPurple hover:border-neonPurple/50'
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:dheerajkalisetti@gmail.com',
    color: 'hover:text-neonBlue hover:border-neonBlue/50'
  }
];

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // Initialize EmailJS with your public key (get from emailjs.com dashboard)
  // Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS user ID (e.g., 'user_abc123')
  emailjs.init('juj8_YyCFZ3F5SDV-');

  useEffect(() => {
    // Optimized animations with better performance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse',
        once: true
      }
    });

    // Batch animations for better performance
    if (titleRef.current && contentRef.current) {
      tl.fromTo(titleRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" }
      )
      .fromTo(contentRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );
    }

    // Optimized social links animation
    const socialElements = document.querySelectorAll('.social-link');
    if (socialElements.length > 0) {
      tl.fromTo(socialElements,
        { opacity: 0, x: -30, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out"
        },
        "-=0.3"
      );
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) => {
        if (trigger.trigger === sectionRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);
    alert("i am here")

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
      alert(JSON.stringify(result))
      console.log('EmailJS success:', result.status, result.text);
      setStatus('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-orbitron font-bold mb-8
                     text-transparent bg-clip-text bg-gradient-to-r from-neonBlue to-neonPurple"
          >
            Let's Connect
          </h2>
          
          <div ref={contentRef} className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-300 font-orbitron leading-relaxed">
              Ready to create something extraordinary together? 
              <br />
              <span className="text-neonBlue">Let's build the future of digital experiences.</span>
            </p>
            
            {/* Contact Form */}
            <motion.div 
              className="backdrop-blur-md bg-gradient-to-br from-black/40 to-gray-900/40 
                       border border-neonBlue/30 rounded-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {status && (
                  <motion.p 
                    className={`font-orbitron text-sm p-3 rounded-lg ${
                      status.includes('successfully') ? 'bg-green-900/50 text-green-300 border border-green-500/30' : 'bg-red-900/50 text-red-300 border border-red-500/30'
                    }`}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {status}
                  </motion.p>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-orbitron text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 
                               rounded-lg text-white font-orbitron
                               focus:border-neonBlue focus:outline-none focus:ring-2 
                               focus:ring-neonBlue/20 transition-all duration-300"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-orbitron text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/30 border border-gray-600 
                               rounded-lg text-white font-orbitron
                               focus:border-neonPurple focus:outline-none focus:ring-2 
                               focus:ring-neonPurple/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-orbitron text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/30 border border-gray-600 
                             rounded-lg text-white font-orbitron resize-none
                             focus:border-neonBlue focus:outline-none focus:ring-2 
                             focus:ring-neonBlue/20 transition-all duration-300"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto flex items-center justify-center gap-3 px-8 py-4
                           bg-gradient-to-r from-neonBlue/30 to-neonPurple/30
                           border-2 border-neonBlue/50 rounded-lg
                           font-orbitron font-bold text-white disabled:opacity-50 disabled:cursor-not-allowed
                           hover:from-neonBlue/40 hover:to-neonPurple/40 
                           hover:border-neonPurple/70 hover:shadow-xl
                           transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ 
                    scale: loading ? 1 : 1.02, 
                    boxShadow: loading ? 'none' : '0 0 20px rgba(0, 240, 255, 0.4)' 
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <Send size={20} />
                  )}
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            </motion.div>
            
            {/* Social Links */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-8">
              <span className="text-gray-400 font-orbitron">Find me on:</span>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-link flex items-center justify-center w-12 h-12 
                                border-2 border-gray-600 rounded-lg text-gray-400
                                transition-all duration-300 backdrop-blur-sm
                                hover:scale-105 hover:shadow-lg ${social.color}`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <IconComponent size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}