import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface InputQuestionProps {
  index: number;
}

function InputQuestion({ index }: InputQuestionProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    autoAdjustHeight(e);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const autoAdjustHeight = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      // transition={{duration: 0.3}}
      className="flex items-center gap-2"
    >
      <p
        className={`${isFocused ? "text-neutral-100" : ""} font-semibold text-neutral-500`}
      >
        {index + 1}.
      </p>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        rows={1}
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
        className={` ${isFocused ? "" : "text-neutral-300"} textarea-question w-[363px] resize-none whitespace-normal rounded-lg  bg-neutral-900 px-4 py-2 text-sm font-normal text-neutral-200 placeholder:text-neutral-500`}
        placeholder="Write a question here"
      />
    </motion.div>
  );
}

export default InputQuestion;
