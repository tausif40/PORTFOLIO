import dynamic from "next/dynamic"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Education from "@/components/Education"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import MovingShapes from "@/components/Animation/MovingShapes"
import { Toaster } from "react-hot-toast";
import "../styles/globals.css";

const Scene = dynamic(() => import("@/components/Scene"), { ssr: false })

export default function Home() {
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <main className="min-h-screen bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300 dark:from-gray-900 dark:via-purple-900 dark:to-violet-900 text-gray-800 dark:text-white">
        <div className="fixed inset-0 z-0">
          <Scene />
          <MovingShapes />
        </div>
        <div className="relative z-10">
          <Header />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  )
}

