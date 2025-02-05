import { assets } from "../assets/assets.js";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled when the component is unmounted
    };
  }, [showMobileMenu]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        <img src={assets.logo} width={45} alt="logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-gray-200">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-200">
            About
          </a>
          <a href="#Project" className="cursor-pointer hover:text-gray-200">
            Projects
          </a>
          <a href="#Testimonial" className="cursor-pointer hover:text-gray-200">
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-7  py-2 rounded-lg cursor-pointer ">
          Sign up
        </button>
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="img"
        />
      </div>
      {/*--------- mobile-menu*/}
      <div
        className={`bg-white md:hidden ${
          showMobileMenu ? "fixed w-full" : "h-0 w-0"
        } right-0 top-0 bottom-0 left-0 overflow-hidden transition-all duration-800 ease-in-out`}
      >
        <div className="flex justify-end p-6 cursor-pointer">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6"
            alt="img"
          />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-14 mx-5 text-lg font-medium">
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Header"
            className="text-4xl px-4 py-2 rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#About"
            className="text-4xl px-4 py-2 rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Project"
            className="text-4xl px-4 py-2 rounded-full inline-block"
          >
            Projects
          </a>
          <a
            onClick={() => setShowMobileMenu(false)}
            href="#Testimonial"
            className="text-4xl px-4 py-2 rounded-full inline-block"
          >
            Testimonials
          </a>
        </ul>
        <div className="flex justify-center mt-8">
          <button className="bg-neutral-950 text-white px-7 text-2xl py-2 rounded-lg cursor-pointer ">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
