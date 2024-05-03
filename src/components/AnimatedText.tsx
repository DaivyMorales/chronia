import React from "react";
import { motion } from "framer-motion";

export interface AnimatedTextProps {
  text: string | undefined | null;
  delay?: number | undefined;
}

const defaultAnimations = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

function AnimatedText({ text, delay }: AnimatedTextProps) {
  return (
    <motion.span
      initial="hidden"
      animate="visible"
      className="inline-block text-left text-[10px]"
      transition={{ staggerChildren: 0.01, duration: 0.05, delay: delay }}
    >
      {text?.split("").map((char) => (
        <motion.span variants={defaultAnimations} transition={{ delay: delay }}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

export default AnimatedText;
