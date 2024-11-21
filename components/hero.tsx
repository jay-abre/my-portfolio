import { motion } from 'framer-motion'
import Image from 'next/image'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Jane Doe
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Full Stack Developer & UI/UX Designer
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#contact"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors inline-block"
            >
              Get in touch
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-12 lg:mt-0 lg:w-1/2"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Jane Doe"
            width={400}
            height={400}
            className="rounded-full border-4 border-primary mx-auto lg:mx-0"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}

