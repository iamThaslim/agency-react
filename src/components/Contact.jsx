import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { EmailIcon, FacebookIcon, InstagramIcon, LinkedinIcon, LocationIcon, PhoneIcon, TwitterIcon } from "./Icons";
import Footer from "./Footer";
import Map from "./Map";
import CompanyDetails from "./CompanyDetails";

const Contact = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="contactus"
      className="mt-20">
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex w-full flex-col justify-center">
        <h1 className="text-center font-urbanist text-2xl font-semibold md:text-5xl">
          Get in touch
        </h1>
        <span className="text-md mt-2 px-2 text-center font-urbanist md:mt-4 md:px-5 md:text-xl">
          Contact us now and scale your business
        </span>
      </motion.div>
      <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="container mx-auto px-6 py-10">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <CompanyDetails />
          <div className="card mt-8 lg:mx-6 lg:w-1/2">
            <Map />
          </div>
        </div>
      </motion.div>
      <Footer />
    </motion.section>
  )
}

export default Contact
