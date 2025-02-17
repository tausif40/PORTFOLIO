"use client"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "John Doe",
    role: "CEO, TechCorp",
    content:
      "Working with [Your Name] was a fantastic experience. Their attention to detail and creative problem-solving skills truly set them apart.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Jane Smith",
    role: "Project Manager, WebSolutions",
    content:
      "[Your Name] consistently delivered high-quality work on time. Their expertise in frontend development significantly improved our project outcomes.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    name: "Alex Johnson",
    role: "Lead Developer, InnovateTech",
    content:
      "I was impressed by [Your Name]'s ability to quickly grasp complex concepts and translate them into elegant, user-friendly interfaces.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-100/50 to-violet-200 dark:from-gray-800 dark:to-purple-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          What People Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="backdrop-blur-lg bg-white bg-opacity-30 dark:bg-gray-800 dark:bg-opacity-30 rounded-xl p-6 shadow-xl"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 italic">&ldquo;{testimonial.content}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

