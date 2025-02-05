import { assets } from "../assets/assets.js";

const Footer = () => {
  return (
    <>
      <div
        className=" text-white footer pt-10 px-4 md:px-20 lg:mt-32 bg-black w-full overflow-hidden"
        id="Footer"
      >
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
          <div className="w-full md:w-1/3 mb-8 md:mb-0 ">
            <img src={assets.logo} width={45} alt="logo" />
            <p className="text-gray-300 mt-4">
              Your trusted partner in finding dream homes and smart investments.
              Explore properties that fit your lifestyle
            </p>
          </div>
          <div className="text-gray-300 w-full md:w-1/5 mb-8 md:mb-0 ">
            <h3 className="text-white text-xl mb-3 font-bold">Company</h3>
            <ul className="flex flex-col gap-2 ">
              <a href="#Header">Home</a>
              <a href="#About">About Us</a>
              <a href="#Contact">Contact Us</a>
              <a href="#">Privacy Policy</a>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-8 md:mb-0 ">
            <h3 className="text-xl mb-3 font-bold">
              Subscribe to our newsletter today!
            </h3>
            <p className="text-gray-300 mb-4 max-w-80">
              Stay updated with the latest property listings, market insights,
              and exclusive offers.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-2 rounded text-gray-300 border border-gray-300 focus:outline-0 w-full md:w-auto"
              />
              <button className="btn">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="mx-0 border-t border-gray-700 py-4 mt-10 text-center text-gray-400">
          Copyright 2024 © mahenajT. All Right Reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
