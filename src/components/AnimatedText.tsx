import React from "react";
import { motion } from "framer-motion";

export interface AnimatedTextProps {
  text: string;
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function AnimatedText({ text }: AnimatedTextProps) {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      className="inline-block text-left text-[10px]"
      transition={{ staggerChildren: 0.01,  duration: 0.05 }}
    >
      {text.split("").map((char) => (
        <motion.span variants={defaultAnimations}>{char}</motion.span>
      ))}
    </motion.span>
  );
}

export default AnimatedText;
