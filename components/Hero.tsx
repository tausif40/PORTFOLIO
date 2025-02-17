"use client"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center">
      <div className="text-center">
        <motion.h1
          className="text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          I'm   A Frontend Developer
        </motion.h1>
        <motion.p
          className="text-xl mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Crafting engaging web experiences with cutting-edge technologies
        </motion.p>
        <motion.a
          href="/"
          className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-violet-600 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View resume
        </motion.a>
      </div>
    </section>
  )
}

