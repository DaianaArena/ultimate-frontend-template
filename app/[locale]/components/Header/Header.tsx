"use client";
import { motion } from "framer-motion";

interface HeaderProps {
  message: string;
}

const Header = ({ message }: HeaderProps) => {
  return (
    <motion.div
      className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-600 dark:text-gray-400 text-opacity-80"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {message}
    </motion.div>
  );
};

export default Header;
