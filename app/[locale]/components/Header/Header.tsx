'use client';
import { motion } from "framer-motion"

const Header = ({message }) => {
  return (
    
    <motion.div
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    >
    {message}</motion.div>
  )
}

export default Header