import React from "react";
import { motion } from "framer-motion";

export default function GoToPosition({ x, y, onClick }) {
  return (
    <motion.div
      className="flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
      onClick={() => onClick()}
    >
      {`Go to x: ${x} y: ${y}`}
    </motion.div>
  );
}
