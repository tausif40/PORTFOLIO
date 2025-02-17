"use client"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="backdrop-blur-lg bg-white bg-opacity-30 dark:bg-gray-800 dark:bg-opacity-30 rounded-3xl p-8 shadow-xl"
        >
          <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            About Me
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <motion.img
              src="https://res.cloudinary.com/drfni1iqf/image/upload/v1739558126/resume/tausif_bookgk.jpg"
              alt="Tausif"
              className="rounded-full w-64 h-64 object-cover mb-8 md:mb-0 md:mr-8"
              whileHover={{ scale: 1.05, rotate: 5 }}
            />
            <div>
              <p className="text-xl mb-4">
                Hello! I'm Tausif, a professional frontend developer with a keen eye for design and a love for
                creating seamless user experiences. With expertise in HTML, CSS, JavaScript, React, and Next.js, I bring
                ideas to life through code.
              </p>
              <p className="text-xl mb-4">
                My journey in web development started 2 years ago, and since then, I've been constantly learning and
                adapting to new technologies. I believe in writing clean, efficient code and creating responsive,
                accessible websites that look great on any device.
              </p>
              <p className="text-xl">
                When I'm not coding, you can find me exploring new design trends, learning about the latest web technologies, playing video games, or enjoying a good book. I'm always excited to take on new
                challenges and collaborate on innovative projects!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

