"use client"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-500 to-violet-500 text-white pt-8 pb-4">
      <div className="container mx-auto px-6 py-2">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >

          <motion.a className="mb-4 md:mb-0 cursor-pointer"
            href="https://drive.google.com/file/d/1-fCXw-zWAA2HwmdWNW1091qaN9iCnbG_/view?usp=drive_link"
            target="_blank"
          >
            <p className="hidden md:block cursor-pointer text-md px-2 py-[2px] rounded-full border bg-pink-400/30 border-pink-800 text-pink-900 font-light">My resume is <span className="text-violet-800 font-semibold">here</span></p>
          </motion.a>
          <div className="flex space-x-4">
            <motion.a
              href="https://github.com/tausif40"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 20, damping: 3 }}
            >
              <FaGithub className="text-2xl hover:text-pink-200 transition duration-300" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/muhammad-tausif-0142692a9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 10, damping: 3 }}
            >
              <FaLinkedin className="text-2xl hover:text-pink-200 transition duration-300" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/tausif_778"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ type: "spring", stiffness: 10, damping: 3 }}
            >
              <FaInstagram className="text-2xl hover:text-pink-200 transition duration-300" />
            </motion.a>
          </div>
        </motion.div>
        <div className="flex flex-col items-center justify-center mt-8">
          <p className="block md:hidden mb-8 cursor-pointer text-md px-2 py-[2px] rounded-full border bg-pink-400/30 border-pink-800 text-pink-900 font-light ">My resume is
            <motion.a className="text-violet-800 font-semibold" href="https://drive.google.com/file/d/1-fCXw-zWAA2HwmdWNW1091qaN9iCnbG_/view?usp=drive_link"
              target="_blank">&nbsp;here</motion.a>
          </p>
          <p className="mb-2">Thanks for visiting ❤️</p>
          <p>&copy; 2025 tausif. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

