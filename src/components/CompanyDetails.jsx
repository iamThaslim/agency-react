import { motion } from "framer-motion";
import { fadeIn} from "../utils/motion";
import { EmailIcon, FacebookIcon, InstagramIcon, LinkedinIcon, LocationIcon, PhoneIcon, TwitterIcon } from "./Icons";

const CompanyDetails = () => {
  return ( 
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
              <a className="btn mx-1.5 rounded-full bg-base-100" href="https://www.twitter.com" aria-label="twitter">
                <TwitterIcon />
              </a>
              <a className="btn mx-1.5 rounded-full bg-base-100" href="https://www.linkedin.com" aria-label="linkedin">
                <LinkedinIcon />
              </a>
              <a className="btn mx-1.5 rounded-full bg-base-100" href="https://www.facebook.com" aria-label="facebook">
                <FacebookIcon />
              </a>
              <a className="btn mx-1.5 rounded-full bg-base-100" href="https://www.instagram.com" aria-label="instagram">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
 
export default CompanyDetails;