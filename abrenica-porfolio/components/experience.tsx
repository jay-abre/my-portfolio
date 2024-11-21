import { motion } from 'framer-motion'

const experienceData = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2020 - Present",
    responsibilities: [
      "Lead a team of 5 developers in creating scalable web applications",
      "Implemented microservices architecture, improving system efficiency by 40%",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    title: "UI/UX Designer",
    company: "Creative Solutions LLC",
    period: "2018 - 2020",
    responsibilities: [
      "Designed user-centered interfaces for mobile and web applications",
      "Conducted user research and usability testing",
      "Collaborated with product managers to define product requirements"
    ]
  },
  {
    title: "Junior Web Developer",
    company: "StartUp Ventures",
    period: "2016 - 2018",
    responsibilities: [
      "Developed and maintained company websites using HTML, CSS, and JavaScript",
      "Assisted in the implementation of responsive design principles",
      "Participated in agile development processes"
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="min-h-screen py-16">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        {experienceData.map((exp, index) => (
          <motion.div
            key={exp.title}
            className="mb-8 bg-card text-card-foreground rounded-lg p-6 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
            <p className="text-primary mb-1">{exp.company}</p>
            <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
            <ul className="list-disc list-inside">
              {exp.responsibilities.map((resp, i) => (
                <li key={i} className="mb-1">{resp}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

