import React from "react";
import { motion } from "framer-motion";

export default function MoveSteps({ steps, onClick }) {
  return (
    <motion.div
      className="flex items-center bg-blue-500 text-white px-4 py-2 mb-2 text-sm cursor-pointer rounded"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {`Move ${steps} steps`}
    </motion.div>
  );
}
