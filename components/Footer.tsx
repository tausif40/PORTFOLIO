"use client"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-violet-500 text-white py-8">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="mb-4 md:mb-0">&copy; 2023 Your Name. All rights reserved.</p>
          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <FaGithub className="text-2xl hover:text-pink-200 transition duration-300" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <FaLinkedin className="text-2xl hover:text-pink-200 transition duration-300" />
            </motion.a>
            <motion.a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <FaTwitter className="text-2xl hover:text-pink-200 transition duration-300" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

