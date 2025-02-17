"use client"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa"
import { useTheme } from "next-themes"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="fixed w-full z-50">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="container mx-auto px-6 py-4"
      >
        <nav className="flex justify-between items-center backdrop-blur-md bg-white bg-opacity-50 dark:bg-gray-800 dark:bg-opacity-50 rounded-full px-6 py-3">
          <motion.h1
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500"
            whileHover={{ scale: 1.05 }}
          >
            Tausif
          </motion.h1>
          <ul className="hidden md:flex space-x-6">
            {["About", "Skills", "Projects", "Education", "Contact"].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.1 }}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-800 dark:text-white hover:text-pink-500 dark:hover:text-pink-400"
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
            <motion.a
              href="https://github.com/tausif40"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 20, damping: 3 }}
            >
              <FaGithub className="text-2xl text-gray-800 dark:text-white hover:text-pink-500 dark:hover:text-pink-400" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-tausif-0142692a9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 10, damping: 3 }}
            >
              <FaLinkedin className="text-2xl text-gray-800 dark:text-white hover:text-pink-500 dark:hover:text-pink-400" />
            </motion.a>
            <motion.button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-white dark:bg-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {theme === "dark" ? "🌞" : "🌙"}
            </motion.button>
            <button className="md:hidden text-gray-800 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </nav>
      </motion.div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-b-2xl overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-gray-800 px-3 dark:text-white hover:bg-pink-50 hover:dark:bg-gray-700 hover:text-pink-500 dark:hover:text-pink-400"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

