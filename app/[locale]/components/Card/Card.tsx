"use client";
import { motion } from "framer-motion";
import React, { ReactNode } from 'react';
interface CardProps {
  title: string;
  desc: string;
  CTA: string;
  icon: ReactNode; 
  link: string;
}



const Card = ({ title, desc, CTA, icon, link }: CardProps) => {



  return (
    <motion.div
    className="p-4 md:w-1/3 flex flex-col text-center items-center"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-pink-400 mb-5 flex-shrink-0">
                
                {icon}
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-800 dark:text-white text-lg title-font font-medium mb-3">
                {title}
                </h2>
                <p className="leading-relaxed text-base text-gray-600 dark:text-gray-400">
                {desc}
                </p>
                <a 
                className="mt-3 text-pink-400 inline-flex items-center"
                href={link}
                target="_blank"
                >
                {CTA}
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
    </motion.div>
  );
};

export default Card;


