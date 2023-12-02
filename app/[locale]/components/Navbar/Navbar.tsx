"use client";
import { motion } from "framer-motion";
import Link from "next-intl/link";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font">
              <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center md:justify-between">
                <a className=" w-52 flex title-font font-medium justify-center items-center text-gray-900 dark:text-white mb-4 md:mb-0">
                  <span className=" text-xl text-center  dark:text-white">
                    Ultimate Boilerplate
                  </span>
                </a>
                <nav className="  w-52  flex flex-wrap items-center text-base justify-center">
                  <Link
                    className="mx-5 hover:text-pink-700 dark:text-white"
                    href="/"
                    locale="en"
                  >
                    🇺🇸
                  </Link>
                  <p className="mx-5">|</p>
                  <Link
                    className="mx-5 hover:text-pink-700 dark:text-white"
                    href="/"
                    locale="es"
                  >
                    🇪🇸
                  </Link>
                </nav>
                <div className=" w-52 flex justify-center md:justify-end">
                  <ThemeSwitcher />
                </div>
                
              </div>
            </header>
  );
};

export default Navbar;
