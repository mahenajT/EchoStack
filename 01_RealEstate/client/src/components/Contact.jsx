import { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "38f00d66-4d77-4fe6-ac1e-53393e7ad8a6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully👍");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With us
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 mx-auto text-center mb-8">
        Get in touch with us for any inquiries, support, or project
        collaboration.
      </p>
      <form
        onSubmit={onSubmit}
        className="max-w-xl md:max-w-2xl mx-auto text-gray-600 pt-8"
      >
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Your Name
            <input
              type="text"
              placeholder="Your Name"
              name="Name"
              required
              className="w-full focus:outline-0 border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>
          <div className="w-full md:w-1/2 text-left md:pl-4">
            Your Email
            <input
              type="email"
              placeholder="Your Email"
              name="Email"
              required
              className="w-full focus:outline-0 border border-gray-300 rounded py-3 px-4 mt-2"
            />
          </div>
        </div>
        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 focus:outline-0 rounded py-3 px-4 mt-2 h-48 resize-none"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
        <button className="btn-dark">{result ? result : "Send Message"}</button>
      </form>
    </motion.div>
  );
};

export default Contact;
