import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'DERMATEL: An Integrated Web-Based Telemedicine System',
    description: 'A telemedicine platform designed to improve the management of eczema through remote consultations and personalized treatment.',
    image: '/dermatel.png',
    github: 'https://github.com/jay-abre/dermatel',
    live: 'https://dermatel-production.up.railway.app/',
  },
  {
    title: 'Digital Wallet Microservice Application',
    description: 'Digital Wallet Microservice Application is a secure, scalable platform designed to manage digital wallets, transactions, and user accounts using a microservices architecture.',
    image: '/wallet.png',
    github: 'https://github.com/jay-abre/payment-gateway-system-springboot.git',
    live: 'https://github.com/jay-abre/payment-gateway-system-springboot.git',
  },
  {
    title: 'Powersash',
    description: 'PowerSash Landing Page is a sleek and modern website designed to showcase high-quality woodwork and craftsmanship.',
    image: '/powersash.jpg',
    github: 'https://github.com/jay-abre/powersash-landing-page.git',
    live: 'https://powersashent.vercel.app/',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 px-4 lg:px-24">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-lg group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary mr-4"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary"
                >
                  <ExternalLink className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-justify">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}