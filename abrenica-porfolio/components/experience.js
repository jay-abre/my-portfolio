import { motion } from 'framer-motion'

const experienceData = [
  {
    title: "AI Engineer Intern",
    company: "Stratpoint Technologies ",
    period: "Jun 2024 - Sept 2024",
    responsibilities: [
      "Collaborated with AI engineers on a chatbot development project, contributing to its design, implementation, and enhancement to improve conversational AI capabilities.",
      "Assisted in rigorous testing and debugging to ensure chatbot accuracy and reliability.",
      "Mentored junior devDesigned and implemented a FastAPI application to integrate chatbot functionalities seamlessly into the system."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "Stratpoint Technologies",
    period: "Jun 2024 - Sept 2024",
    responsibilities: [
      "Backend Development: Developed and maintained server-side applications for a payment gateway system using Node.js, TypeScript, and Java microservices with Spring Boot, adhering to best practices in software design and scalability.",
      "API Development: Designed and implemented RESTful APIs for payment processing, integrated third-party payment services, and ensured robust functionality through Test-Driven Development (TDD) with JUnit, Mockito, and Testcontainers.",
      "Deployment and CI/CD: Streamlined deployment processes with Docker containerization, orchestrated microservices deployment for the payment gateway system using local Kubernetes and GitHub Actions, and optimized CI/CD pipelines to ensure seamless integration and delivery."
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

