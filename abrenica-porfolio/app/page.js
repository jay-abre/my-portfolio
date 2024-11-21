'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { ModeToggle } from '@/components/mode-toggle'
import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Education } from '@/components/education'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { Background } from '@/components/background'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="relative">
      <Background />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX }}
      />
      <div className="flex flex-col lg:flex-row min-h-screen bg-background text-foreground">
        <Navigation />
        <main className="flex-1 p-8 md:p-12 lg:p-16 overflow-hidden">
          <ModeToggle className="fixed top-4 right-4 z-50" />
          <div className="max-w-6xl mx-auto">
            <Hero />
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </div>
        </main>
      </div>
    </div>
  )
}

