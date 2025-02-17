"use client"
import { motion } from "framer-motion"
import { FaGraduationCap } from "react-icons/fa"

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    school: "University Name",
    year: "2018 - 2022",
    description: "Focused on web development, algorithms, and software engineering principles.",
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    school: "Coding Academy",
    year: "2022",
    description: "Intensive program covering modern web technologies and best practices.",
  },
  {
    degree: "UI/UX Design Certification",
    school: "Design Institute",
    year: "2023",
    description: "Specialized course on creating intuitive and visually appealing user interfaces.",
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Education & Certifications
        </h2>
        <div className="space-y-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start backdrop-blur-lg bg-white bg-opacity-30 dark:bg-gray-800 dark:bg-opacity-30 rounded-xl p-6 shadow-xl"
            >
              <div className="mr-4">
                <FaGraduationCap className="text-4xl text-pink-500" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.degree}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.school}</p>
                <p className="text-gray-500 dark:text-gray-400 mb-2">{item.year}</p>
                <p className="text-gray-700 dark:text-gray-200">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

