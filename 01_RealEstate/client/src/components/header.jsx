import Navbar from "./navbar.jsx";
import { motion } from "framer-motion";
import { assets } from "../assets/assets.js";
const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${assets.header_img})`,
      }}
      id="Header"
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-white container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 "
      >
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold lg:pt-20 pt-15">
          Find your vibe, find your home.
        </h2>
        <div className="space-x-6 mt-10 flex items-center justify-center">
          <a className="btn-outline" href="#Projects">
            Projects
          </a>
          <a className="btn" href="#Contact">
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
