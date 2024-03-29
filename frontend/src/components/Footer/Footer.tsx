import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";

import Button from "../Button";

/**
 * Footer component that provides input fields for user interaction,
 * links to social media accounts, and copyright information.
 *
 * @returns {JSX.Element} The rendered Footer component.
 */
const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <div className="text-4xl font-bold mb-6 px-6">
            <div>Need advice for</div>
            <div>your next HARVEST!</div>
          </div>
          <div className="md:px-6 ">
            {/* Input fields */}
            <input
              type="text"
              placeholder="Enter your name..."
              className="border-b-2 mb-3 py-2 px-4 mr-10 focus:outline-none focus:border-green-500 bg-transparent text-white"
            />
            <input
              type="text"
              placeholder="Enter your phone number"
              className="border-b-2 py-2 px-4 focus:outline-none focus:border-green-500 bg-transparent text-white"
            />
            {/* More input fields */}
            <div className="flex-col mb-6">
              <input
                type="email"
                placeholder="example@gmail.com.np"
                className="border-b-2 mb-3 py-2 px-4 mr-10 focus:outline-none focus:border-green-500 bg-transparent text-white"
              />
              <input
                type="text"
                placeholder="Tell us about yourself"
                className="border-b-2 py-2 px-4 focus:outline-none focus:border-green-500 bg-transparent text-white"
              />
            </div>
            {/* Submit button */}
            <Button className="w-40 bg-green-600 text-white rounded-lg text-lg px-4 py-2 hover:bg-green-700">
              Send Message
            </Button>
          </div>
        </div>

        {/* Social media links section */}
        <div className="md:w-1/2 grid place-content-center md:gap-8">
          <div className="mb-4 md:mb-0">
            <p className="text-6xl font-bold mb-6">Follow Us</p>
            <div className="flex justify-center items-center space-x-4 ">
              <p>
                <SiFacebook className="text-3xl " />
              </p>
              <p>
                <AiFillInstagram className="text-3xl" />
              </p>
              <p>
                <FaLinkedin className="text-3xl" />
              </p>
              <p>
                <FaYoutube className="text-3xl " />
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright notice */}
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-6" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023{" "}
        <a href="#" className="hover:underline">
          GrowMore™
        </a>
        . All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
