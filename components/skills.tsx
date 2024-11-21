import { motion } from 'framer-motion'

const skillsData = [
  { category: "Frontend", skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", skills: ["Java Spring Boot", "Python", "NodeJS", "PHP"] },
  { category: "Database", skills: ["MongoDB", "PostgreSQL", "MySQL"] },
  { category: "DevOps", skills: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
]

export function Skills() {
  return (
    <section id="skills" className="min-h-screen py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.category}
            className="bg-card text-card-foreground rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

