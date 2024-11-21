import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-16">
      <div className="max-w-3xl">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          I'm a passionate full stack developer and UI/UX designer with over 5 years of experience in creating beautiful, functional, and user-centered digital experiences.
        </motion.p>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          My journey in tech started when I built my first website at the age of 15. Since then, I've been on a continuous learning path, always eager to adopt new technologies and improve my skills.
        </motion.p>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          When I'm not coding, you can find me exploring nature trails, reading sci-fi novels, or experimenting with new recipes in the kitchen.
        </motion.p>
      </div>
    </section>
  )
}

