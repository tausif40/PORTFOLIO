"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"
import { Badge } from "./ui/badge"

const projects = [
  {
    id: 0.1,
    title: "Zappy ",
    subtitle: "Event Management",
    description: "A full-featured event management website where users can plan, customize, and book events with services like catering, decor, and photography.",
    image: "/img/zappy.png",
    stack: ["Next.js", "Redux toolkit", "Socket", "google auth", "Zod with react hook form",],
    fullDescription: "This event management platform allows users to create and manage events with real-time form validation, image uploads, and add-on selections. It features a responsive UI, user authentication, and an admin dashboard to manage services and bookings.",
    github: "https://github.com/tausif40",
    live: "https://zappy-gilt.vercel.app",
    isWorking: true,
  },
  {
    id: 1,
    title: "AnyUni",
    subtitle: "Overseas Education Consultant",
    description: "AnyUNI is an overseas education consultant that helps students from all over the world find the perfect study abroad program.",
    image: "/img/anyuni.jpg",
    stack: ["Next.js", "Redux toolkit", "tailwind css", "google auth", "captcha verify"],
    fullDescription: "AnyUNI is an overseas education consultant that helps students from all over the world find the perfect study abroad program.",
    github: "https://github.com/tausif40",
    live: "https://www.anyuni.io",
    isWorking: false,
  },
  {
    id: 2,
    title: "More Matrimony",
    subtitle: "Online Matrimonial Service",
    description: "It is an online matrimonial service. The platform allows users to create profiles, search for potential matches, and connect securely.",
    image: "/img/morematrimony.jpg",
    stack: ["HTML", "CSS", "Javascript", "React.js", "Redux toolkit", "Tailwind CSS"],
    fullDescription: "A full description of Project 2 with more details about its features and implementation.",
    github: "https://github.com/tausif40",
    live: "https://morematrimony.com",
    isWorking: false,
  },
  {
    id: 3,
    title: "Best Fitted Wardrobe",
    subtitle: "Bespoke Wardrobe Design",
    description: "Best fitted wardrobe creates and installs luxury bespoke wardrobes and kitchens, designed and crafted in London and Essex.",
    image: "/img/bestfittedwardrobe-co-uk.jpg",
    stack: ["HTML", "CSS", "Javascript", "React.js", "Tailwind CSS"],
    fullDescription: "Best fitted wardrobe creates and installs luxury bespoke wardrobes and kitchens, designed and crafted in London and Essex.",
    github: "https://github.com/tausif40",
    live: "https://bestfittedwardrobe.co.uk",
    isWorking: false,
  },
  {
    id: 4,
    title: "My Portfolio",
    subtitle: "Personal Portfolio Website",
    description: "This portfolio showcases of my skills in advanced UI/UX design, animations, and performance-optimized web development.",
    image: "/img/portfolio.jpg",
    stack: ["HTML", "CSS", "Javascript", "NEXT", "Framer Motion", "Tailwind CSS"],
    fullDescription: "This portfolio showcases of my skills in advanced UI/UX design, animations, and performance-optimized web development.",
    github: "https://github.com/tausif40",
    live: "https://tausif-portfolio-pi.vercel.app",
    isWorking: false,
  },
  {
    id: 5,
    title: "Auro Terra Energy",
    subtitle: "Biomass Pellets",
    description: "Powering Sustainability with Biomass Pellets. benefits of biomass pellets as an eco-friendly and sustainable energy source.",
    image: "/img/auro-terra-energy.jpg",
    stack: ["HTML", "CSS", "Javascript", "JQuery", "Bootstrap", "SCSS"],
    fullDescription: "Powering Sustainability with Biomass Pellets. benefits of biomass pellets as an eco-friendly and sustainable energy source.",
    github: "https://github.com/tausif40",
    live: "https://auro-terra-energy.vercel.app",
    isWorking: false,
  },
  // {
  //   id: 5,
  //   title: "patel Automotive",
  //   description: "Powering Sustainability with Biomass Pellets. benefits of biomass pellets as an eco-friendly and sustainable energy source.",
  //   image: "/img/patelautomotive.jpg",
  //   stack: ["HTML", "CSS", "Javascript", "React", "Tailwind css", "Node", "Mongo DB"],
  //   fullDescription: "Powering Sustainability with Biomass Pellets. benefits of biomass pellets as an eco-friendly and sustainable energy source.",
  //   github: "https://github.com/tausif40/Patel-Automotive",
  //   live: "thttps://patelautomotive.in",
  // },
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-14 mb-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative backdrop-blur-lg bg-white bg-opacity-30 dark:bg-gray-800 dark:bg-opacity-30 rounded-xl overflow-hidden shadow-xl flex flex-col justify-between"
            >
              <div>
                {project.isWorking && <Badge className="absolute top-3 right-3 border-amber-400 bg-[#fef08a] text-amber-800 text-sm font-normal mb-4 shadow-lg hover:bg-[#fef08a]">Currently Working</Badge>}
                <img src={project.image} alt={project.title} className="w-full h-60 object-cover object-top"
                  onClick={() => setSelectedProject(project)} />
                <div className="px-6 mt-4">
                  <div className="flex gap-2 items-center mb-2">
                    <h3 className="text-xl font-semibold cursor-pointer" onClick={() => setSelectedProject(project)}>{project.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">({project.subtitle})</p>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        // className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm"
                        className=" dark:text-gray-200 px-2 py-[2px] rounded-full border bg-pink-400/30 border-pink-800 text-sm text-pink-900 font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between px-6 pb-6 pt-2">
                <motion.button
                  onClick={() => setSelectedProject(project)}
                  className="bg-gray-700 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-violet-600 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gradient-to-r from-pink-500 to-violet-500 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-violet-600 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Visit Site
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 max-w-4xl w-full flex gap-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative min-w-72 max-w-72 overflow-hidden rounded-lg">
                <img src={selectedProject?.image} alt={selectedProject?.title} className="w-full object-cover object-top border" />
                {selectedProject.isWorking && <Badge className="absolute top-3 right-3 border-amber-400 bg-[#fef08a] text-amber-800 text-sm font-normal mb-4 shadow-lg hover:bg-[#fef08a]">Currently Working</Badge>}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">{selectedProject?.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{selectedProject?.fullDescription}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProject?.stack.map((tech) => (
                    <span
                      key={tech}
                      // className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm"
                      className=" dark:text-gray-200 px-2 py-[2px] rounded-full border bg-pink-400/30 border-pink-800 text-sm text-pink-900 font-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-8 justify-end">
                  <motion.a
                    href={selectedProject?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-full hover:bg-gray-900 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="mr-2" />
                    GitHub
                  </motion.a>
                  <motion.a
                    href={selectedProject?.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-gradient-to-r from-pink-500 to-violet-500 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-violet-600 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Visit Site
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

