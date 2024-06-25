import React from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="home"
      className="hero py-10 flex justify-center">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://images.unsplash.com/photo-1552960562-daf630e9278b?q=100&w=900"
          alt=""
          className="max-w-xs rounded-b-box rounded-t-[14rem] shadow-2xl outline outline-base-content/5 md:max-w-md"
        />
        <div className="text-center lg:text-start">
          <span className="badge badge-outline badge-lg">Award winning educational platform</span>
          <h1 className="font-urbanist text-3xl font-black uppercase md:text-7xl">
            Launch your accounting
            <span className="text-cyan-500"> career in UAE & KSA</span>
          </h1>
          <p className="py-6 font-urbanist lg:max-w-lg">
            Build your Life Abroad, Not Just a Career
          </p>
          <div className="flex gap-2 max-lg:justify-center">
            <a
              href="#contactus"
              className="btn btn-neutral md:btn-lg rounded-full font-urbanist shadow-md">
              Explore Courses
            </a>
            <a href="/" className="btn btn-ghost md:btn-lg rounded-full font-urbanist font-light">
              Read success stories
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Hero