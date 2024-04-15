import React, { ChangeEvent, useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useFormik, FormikErrors } from "formik";
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
    // addQuestion(areaId);
    const questionId = generateRandomId();
    setQuestionId(questionId);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    // // addQuestion(areaId);
    // setFieldValue(`questions.question_description`, newValue);
    // setFieldValue(`questions.areaId`, areaId);
    // // setFieldValue(`questions.questionId`, questionId);
    setQuestionDescription(newValue);
    autoAdjustHeight(e);
  };

  const handleSave = () => {
    // Check if the question already exists
    const existingQuestionIndex = questions.findIndex(
      (q) => q.questionId === questionId,
    );

    if (existingQuestionIndex !== -1) {
      // If the question already exists, update it
      const updatedQuestions = [...questions];
      updatedQuestions[existingQuestionIndex] = {
        ...updatedQuestions[existingQuestionIndex],
        questionDescription: questionDescription,
      };
      setQuestions(updatedQuestions);
    } else {
      // If the question doesn't exist, add it
      setQuestions([
        ...questions,
        {
          questionId: questionId || "", // Ensure questionId has a value
          questionDescription: questionDescription,
          areaId: areaId || "", // Ensure areaId has a value
        },
      ]);
    }

    // Clear the question description
    setQuestionDescription("");
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
        name={`questions[${questionId}].question_description`}
        ref={textareaRef}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        onBlur={handleSave}
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
