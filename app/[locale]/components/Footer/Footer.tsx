"use client";
import { motion } from "framer-motion";
//Icons
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TbWorldCode } from "react-icons/tb";
import { SiBuymeacoffee } from "react-icons/si";

const Footer = ( ) => {
  return (
    <footer className="text-gray-400  body-font">
              <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                  <span className="ml-3 text-xl text-gray-800 dark:text-white">
                    Daiana Arena Boilerplates
                  </span>
                </a>
                <p className="text-sm text-gray-800 dark:text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
                  © 2023 —
                  <a
                    href="http://daianaarena.vercel.app/"
                    className="text-gray-800 dark:text-gray-400 ml-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @dai.tsx
                  </a>
                </p>
                <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                  <a 
                  className="ml-3 text-pink-500"
                  href="https://www.buymeacoffee.com/arenadaianadev"
                  target="_blank"
                  >
                  <SiBuymeacoffee size={20}/>
                  </a>
                  <a 
                  className="ml-3 text-gray-800 dark:text-gray-400"
                  href="http://daianaarena.vercel.app/"
                  target="_blank"
                  >
                  <TbWorldCode size={20}/>
                  </a>
                  <a 
                  className="ml-3 text-gray-800 dark:text-gray-400"
                  href="https://www.instagram.com/dai.tsx/"
                  target="_blank"
                  >
                  <FaInstagram size={20}/>
                  </a>
                  <a 
                  className="ml-3 text-gray-800 dark:text-gray-400"
                  href="https://www.linkedin.com/in/arenadaiana/"
                  target="_blank"
                  >
                  <FaLinkedinIn size={20}/>
                  </a>
                </span>
              </div>
            </footer>
  );
};

export default Footer;
