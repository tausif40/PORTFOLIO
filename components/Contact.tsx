"use client"
import { useRef, useState } from "react"
import { motion } from "framer-motion"
import { FaPaperPlane } from "react-icons/fa"
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   mobile: "",
  //   message: "",
  // })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true);
    const loadingToast = toast.loading('Sending...');
    // console.log(formData)
    emailjs.sendForm('service_6iweohj', 'template_yq85uat', form.current, 'fJNjYfFHkKhzjxsR7')
      .then((result) => {
        console.log("Message sent:", result.text);
        form.current.reset();
        toast.success(("Send successfully!"), { id: loadingToast })
      })
      .catch((error) => {
        toast.success(("Sending Failed!"), { id: loadingToast })
        console.error("Error sending message:", error.text);
      })
      .finally(() => {
        setLoading(false);
      });
  }



  return (
    <motion.div
      id="contact"
      className="py-20 backdrop-blur-lg bg-white bg-opacity-30 dark:bg-gray-800 dark:bg-opacity-30"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
          Get in Touch
        </h2>
        <motion.form
          ref={form}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="max-w-lg pb-6 mx-auto backdrop-blur-lg bg-white bg-opacity-30 dark:bg-gray-800 dark:bg-opacity-30 rounded-xl p-8 shadow-xl"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name"
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border rounded-lg focus:outline-none focus:border-pink-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email"
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border rounded-lg focus:outline-none focus:border-pink-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="mobile" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Mobile (Optional)</label>
            <input type="number" id="mobile" name="mobile"
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border rounded-lg focus:outline-none focus:border-pink-500 appearance-none"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Message</label>
            <textarea id="message" name="message" rows={4}
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border rounded-lg focus:outline-none focus:border-pink-500"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-violet-500 text-white font-bold py-2 px-4 rounded-lg hover:from-pink-600 hover:to-violet-600 transition duration-300 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={loading}
          >
            <FaPaperPlane className="mr-2" />
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </motion.div>
  )
}

