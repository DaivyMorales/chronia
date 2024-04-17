import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Questions } from "@/pages/example";

interface InputQuestionProps {
  index: number;
  areaId: string;
  setQuestions: React.Dispatch<React.SetStateAction<Questions[]>>;
  questions: Questions[];
}

function InputQuestion({
  index,
  areaId,
  setQuestions,
  questions,
}: InputQuestionProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [questionId, setQuestionId] = useState("");
  const [questionDescription, setQuestionDescription] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const generateRandomId = () => {
    return `id-${Math.random().toString(36).substr(2, 9)}`;
  };

  useEffect(() => {
    const questionId = generateRandomId();
    setQuestionId(questionId);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setQuestionDescription(newValue);
    autoAdjustHeight(e);
  };

  const handleSave = () => {
    const existingQuestionIndex = questions.findIndex(
      (q) => q.questionId === questionId,
    );

    if (existingQuestionIndex !== -1) {
      const updatedQuestions = [...questions];
      updatedQuestions[existingQuestionIndex] = {
        ...updatedQuestions[existingQuestionIndex],
        questionDescription: questionDescription,
      };
      setQuestions(updatedQuestions);
    } else {
      setQuestions([
        ...questions,
        {
          questionId: questionId!,
          questionDescription: questionDescription,
          areaId: areaId!,
        },
      ]);
    }
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
      className="flex w-full justify-center items-center gap-2"
    >
      <p
        className={`${isFocused ? "text-neutral-300" : ""} font-semibold text-neutral-400 flex`}
      >
        {index + 1}.
      </p>
      <textarea
        name={`questions[${questionId}].question_description`}
        ref={textareaRef}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        onBlur={handleSave}
        rows={1}
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
        className={`  textarea-question w-full resize-none whitespace-normal rounded-lg  bg-transparent px-4 py-2 text-[13px] font-normal text-black placeholder:text-neutral-500`}
        placeholder="Write a question here"
      />
    </motion.div>
  );
}

export default InputQuestion;
