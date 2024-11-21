import { motion } from 'framer-motion'

const educationData = [

  {
    degree: "Bachelor of Science in Information Technology ",
    school: "Mapua University",
    year: "2021 - 2025",
    description: "Specializing in Application Development"
  }
]

export function Education() {
  return (
    <section id="education" className="min-h-screen py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.degree}
            className="mb-8 bg-card text-card-foreground rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
            <p className="text-primary mb-1">{edu.school}</p>
            <p className="text-sm text-muted-foreground mb-2">{edu.year}</p>
            <p>{edu.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

