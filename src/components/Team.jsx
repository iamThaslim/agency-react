import React from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "../utils/motion"

const team = [
  {
    name: "Jack",
    profile:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "Founder & CEO",
  },
  {
    name: "John",
    profile:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "CoFounder & CTO",
  },
  {
    name: "Emily",
    profile:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "Head of Growth",
  },
  {
    name: "Sam",
    profile:
      "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "App Developer",
  },
  {
    name: "Antonio",
    profile:
      "https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "Web Developer",
  },

  {
    name: "Mark",
    profile:
      "https://images.unsplash.com/photo-1567784177951-6fa58317e16b?ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    position: "Video Editor",
  },
  {
    name: "Chris",
    profile:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=256&h=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "Web Developer",
  },

  {
    name: "Christopher",
    profile:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=256&h=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "Video Editor",
  },

  {
    name: "Albert",
    profile:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=256&h=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    position: "App Developer",
  },
]

const Team = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="team"
      className="flex flex-col items-center justify-center">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center">
        <h1 className="font-urbanist text-center text-2xl font-semibold md:text-5xl">Meet Our Instructors</h1>
        <span className="text-md font-urbanist mt-4 px-2 text-center md:mt-4 md:px-5 md:text-xl">
          Guiding You To Excellence
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {team.map((item, index) => (
          <div key={index} className="card w-80 border border-base-content/10 shadow-sm lg:w-96">
            <figure className="lpx-10 pt-10">
              <img src={item.profile} alt="Shoes" className="h-44 w-44 rounded-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="font-urbanist card-title font-bold">{item.name}</h2>
              <h2 className="font-urbanist font-semibold opacity-70">{item.position}</h2>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Team
