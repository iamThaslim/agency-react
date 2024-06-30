import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { EmailIcon, FacebookIcon, InstagramIcon, LinkedinIcon, LocationIcon, PhoneIcon, TwitterIcon } from "./Icons";

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
          <div className="lg:mx-0 lg:mt-0 lg:flex lg:w-1/2 lg:flex-col lg:items-center">
            <div className="mt-6 space-y-8 md:mt-8">
              <p className="-mx-2 flex items-start">
                <LocationIcon />
                <span className="mx-2 w-72 truncate font-urbanist text-base-content">
                  Company Location
                </span>
              </p>

              <p className="-mx-2 flex items-start">
                <PhoneIcon />
                <span className="mx-2 w-72 truncate font-urbanist text-base-content">
                  +1 (555) 234-5678
                </span>
              </p>

              <p className="-mx-2 flex items-start">
                <EmailIcon />
                <span className="mx-2 w-72 truncate font-urbanist text-base-content">
                  abc@example.com
                </span>
              </p>
            </div>

            <div className="mt-6 w-80 md:mt-8">
              <h3 className="text-base-400 ">Follow us</h3>

              <div className="-mx-1.5 mt-4 flex ">
                <a
                  className="btn mx-1.5 rounded-full bg-base-100"
                  href="https://www.twitter.com"
                  aria-label="twitter">
                    <TwitterIcon />
                </a>

                <a
                  className="btn mx-1.5 rounded-full bg-base-100"
                  href="https://www.linkedin.com"
                  aria-label="linkedin">
                    <LinkedinIcon />
                </a>

                <a
                  className="btn mx-1.5 rounded-full bg-base-100"
                  href="https://www.facebook.com"
                  aria-label="facebook">
                    <FacebookIcon />
                </a>

                <a
                  className="btn mx-1.5 rounded-full bg-base-100"
                  href="https://www.instagram.com"
                  aria-label="instagram">
                    <InstagramIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="card mt-8 lg:mx-6 lg:w-1/2">
            <div className="card-body mx-auto w-full overflow-hidden rounded-lg px-8 py-10 shadow-xl outline outline-base-content/5 lg:max-w-xl">
              <h1 className="card-title">What do you want to ask</h1>

              <form className="mt-6">
                <div className="flex-1">
                  <label htmlFor="name" className="mb-2 block text-sm">
                    Full Name
                  </label>
                  <input
                    id="name"
                    autoComplete="name"
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="mt-6 flex-1">
                  <label htmlFor="email" className="mb-2 block text-sm">
                    Email address
                  </label>
                  <input
                    id="email"
                    autoComplete="email"
                    type="email"
                    placeholder="abcd@example.com"
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="mt-6 w-full">
                  <label htmlFor="message" className="mb-2 block text-sm">
                    Message
                  </label>
                  <textarea
                    id="message"
                    autoComplete="message"
                    className="textarea textarea-bordered w-full"
                    placeholder="Message"></textarea>
                </div>

                <button className="btn btn-neutral mt-6 w-full transform px-6 py-3 text-sm font-medium capitalize duration-300  ">
                  stay in touch
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
      <div className="flex items-center justify-center py-10 font-urbanist text-sm lg:text-lg">
        <h1>© 2024 Digital Agency. All rights reserved. </h1>
      </div>
    </motion.section>
  )
}

export default Contact
