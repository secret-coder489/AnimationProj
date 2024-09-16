import React from "react";
import { motion } from "framer-motion";
import MoveSteps from "./animations/MoveSteps";
import TurnDegrees from "./animations/TurnDegrees";
import GoToPosition from "./animations/GoToPosition";
import RepeatAnimation from "./animations/RepeatAnimation";

export default function Sidebar({ onAnimationSelect }) {
  return (
    <motion.div
      className="w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-4 border-r border-gray-200 bg-gray-50"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="font-bold text-lg mb-2">{"Events"}</div>
      <motion.div
        className="flex items-center bg-yellow-500 text-white px-4 py-2 mb-2 text-sm cursor-pointer rounded"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={() => onAnimationSelect('eventClick')}
      >
        {"When "}
        <span className="text-green-600 mx-2">⚑</span>
        {"clicked"}
      </motion.div>
      <motion.div
        className="flex items-center bg-yellow-500 text-white px-4 py-2 mb-2 text-sm cursor-pointer rounded"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={() => onAnimationSelect('spriteClick')}
      >
        {"When this sprite clicked"}
      </motion.div>
      <div className="font-bold text-lg mb-2">{"Motion"}</div>
      <MoveSteps steps={10} onClick={() => onAnimationSelect('move', 10)} />
      <GoToPosition x={100} y={100} onClick={() => onAnimationSelect('goto', 100, 100)} />
      <TurnDegrees degrees={15} onClick={() => onAnimationSelect('turn', 15)} />
      <RepeatAnimation times={10} onClick={() => onAnimationSelect('repeat', 10)} />
    </motion.div>
  );
}
