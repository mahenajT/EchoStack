import { assets, testimonialsData } from "../assets/assets.js";
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="full-flex flex-col container mx-auto p-14 md:px-29 lg:px-32 w-full overflow-hidden"
      id="Testimonial"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Customer{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Testimonials
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Hear what our clients have to say about working with us.
      </p>
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-8">
        {testimonialsData.map((item, index) => {
          return (
            <div
              key={index}
              className="lg:max-w-[320px] max-w-[450px] border border-gray-300 shadow-lg rounded px-8 py-12 text-center"
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl text-gray-700 font-medium">{item.name}</h2>
              <p className="text-gray-500 mb-4 text-sm">{item.title}</p>
              <div className="full-flex gap-1 text-red-500 mb-4">
                {Array.from({ length: item.rating }, (item, idx) => {
                  return <img key={idx} src={assets.star_icon} alt="img" />;
                })}
              </div>
              <p className="text=gray-600">{item.text}</p>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Testimonials;
