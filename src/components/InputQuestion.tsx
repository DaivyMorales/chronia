import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useFormik, FormikErrors } from "formik";

interface InputQuestionProps {
  index: number;
  areaId: string;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean) => void;
}

function InputQuestion({ index, areaId, setFieldValue }: InputQuestionProps) {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    setFieldValue("question_description", e.target.value);
    setFieldValue("areaId", areaId);
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
      className="flex w-full items-center gap-2"
    >
      <p
        className={`${isFocused ? "text-neutral-300" : ""} font-semibold text-neutral-400`}
      >
        {index + 1}.
      </p>
      <textarea
        name="question_description"
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
