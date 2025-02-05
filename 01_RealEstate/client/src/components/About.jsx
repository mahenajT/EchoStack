import { assets } from "../assets/assets.js";
import { motion } from "framer-motion";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="full-flex flex-col container mx-auto p-14 md:px-6 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Committed to deliver exceptional real estate solutions.
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-15">
        <img
          src={assets.brand_img}
          className="w-full max-w-lg max-h-[500px] object-cover md:w-1/2  rounded-2xl"
        />
        <div className="flex flex-col items-center md:items-start mt-15 md:mt-3 lg:mt-8 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellence</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            With over a decade of experience, we have become a trusted name in
            real estate, delivering exceptional spaces that meet evolving client
            needs. Your vision is our mission. Join us in shaping the future of
            real estate.
          </p>
          <button className="btn-dark">Learn More</button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
