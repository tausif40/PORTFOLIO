"use client"
import { motion } from "framer-motion"
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNpm } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs, SiTypescript, SiFramer, SiRedux, SiShadcnui, SiSocketdotio } from "react-icons/si"
import { IoLogoFirebase } from "react-icons/io5";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React", icon: FaReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-500" },
  { name: "Shadcn UI", icon: SiShadcnui, color: "text-gray-600" },
  { name: "Socket IO", icon: SiSocketdotio, color: "text-gray-800" },
  { name: "Firebase", icon: IoLogoFirebase, color: "text-[#dd2c00]" },
  { name: "redux toolkit", icon: SiRedux, color: "text-[#764abc]" },
  { name: "Framer Motion", icon: SiFramer, color: "text-purple-500" },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Skills & Technologies
        </h2>
        {/* <div className="bg-red-300/30 rounded-b-md">
          <motion.div className="text-center backdrop-blur-lg bg-opacity-20 bg-white text-2xl py-2 rounded-t-md z-20 text-gray-700">Languages</motion.div> */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 py-6 px-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center backdrop-blur-lg bg-white bg-opacity-30 dark:bg-gray-800 dark:bg-opacity-30 rounded-xl p-6 shadow-lg"
            >
              <skill.icon className={`text-5xl ${skill.color} mb-4`} />
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
          {/* </div> */}
        </div>

      </div>
    </section>
  )
}

