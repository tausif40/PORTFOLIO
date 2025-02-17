"use client"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const Circle = ({ size, color, duration, delay }) => (
  <motion.div
    className={`absolute rounded-full ${color}`}
    style={{
      width: size,
      height: size,
    }}
    animate={{
      x: ["0%", "100%", "0%"],
      y: ["0%", "100%", "0%"],
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration,
      ease: "easeInOut",
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      delay,
    }}
  />
)

export default function MovingCircles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const resizeCircles = () => {
      if (containerRef.current) {
        containerRef.current.style.width = `${window.innerWidth}px`
        containerRef.current.style.height = `${window.innerHeight}px`
      }
    }

    resizeCircles()
    window.addEventListener("resize", resizeCircles)

    return () => {
      window.removeEventListener("resize", resizeCircles)
    }
  }, [])

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none hidden lg:block">
      <Circle size="80px" color="bg-red-400 opacity-30" duration={20} delay={0} />
      <Circle size="120px" color="bg-indigo-500 opacity-20" duration={25} delay={2} />
      <Circle size="150px" color="bg-pink-500 opacity-20" duration={30} delay={4} />
      <Circle size="100px" color="bg-[#cd4eb6] opacity-40" duration={22} delay={1} />
      <Circle size="160px" color="bg-indigo-400 opacity-20" duration={27} delay={3} />
    </div>
  )
}

