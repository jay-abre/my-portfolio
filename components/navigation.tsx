'use client'

import { useState, useEffect } from 'react'
import { motion, useViewportScroll } from 'framer-motion'
import { Home, User, BookOpen, Briefcase, Code, Folder, Mail } from 'lucide-react'

const navItems = [
  { name: 'Home', icon: Home, href: '#home' },
  { name: 'About', icon: User, href: '#about' },
  { name: 'Education', icon: BookOpen, href: '#education' },
  { name: 'Experience', icon: Briefcase, href: '#experience' },
  { name: 'Skills', icon: Code, href: '#skills' },
  { name: 'Projects', icon: Folder, href: '#projects' },
  { name: 'Contact', icon: Mail, href: '#contact' },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState('home')
  const { scrollY } = useViewportScroll()

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.name.toLowerCase())
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom > 100
        }
        return false
      })
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    scrollY.onChange(handleScroll)
    return () => scrollY.clearListeners()
  }, [scrollY])

  return (
    <nav className="fixed top-1/2 -translate-y-1/2 left-4 z-50 hidden lg:block">
      <ul className="flex flex-col gap-6">
        {navItems.map((item, index) => (
          <motion.li
            key={item.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <a
              href={item.href}
              className={`flex items-center text-foreground hover:text-primary transition-colors ${
                activeSection === item.name.toLowerCase() ? 'text-primary' : ''
              }`}
            >
              <item.icon className="w-6 h-6" />
              <span className="ml-2 text-sm font-medium">{item.name}</span>
              {activeSection === item.name.toLowerCase() && (
                <motion.div
                  className="w-2 h-2 rounded-full bg-primary ml-2"
                  layoutId="activeSection"
                />
              )}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  )
}

