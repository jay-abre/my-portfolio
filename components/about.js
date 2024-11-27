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
          className="text-lg mb-6 text-justify"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Hi! I’m James, a passionate and dedicated software developer specializing in backend development and web-based applications. With hands-on experience in Java Spring Boot, React.js, and microservices architecture, I have developed and built scalable, secure, and efficient systems that solve real-world problems.
        </motion.p>
        <motion.p
          className="text-lg mb-6 text-justify"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I’ve worked on diverse projects, including a Digital Wallet Microservice Application and DERMATEL: An Integrated Web-Based Telemedicine System, showcasing my ability to integrate modern technologies like Docker, Kubernetes, and RESTful APIs while following best practices like Test-Driven Development (TDD).
        </motion.p>
        <motion.p
          className="text-lg text-justify"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          When I'm not coding, you can find me playing instrument and engaging in sports.
        </motion.p>
      </div>
    </section>
  )
}