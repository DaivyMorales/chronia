import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import InputQuestion from "./InputQuestion";
import { HiPlus } from "react-icons/hi";
import {
  TiHeartOutline,
  TiGroupOutline,
  TiThermometer,
  TiNotesOutline,
  TiFeather,
  TiChartLineOutline,
} from "react-icons/ti";
import { Questions } from "@/pages/example";

interface InputQuestionProps {
  question: boolean;
}

interface AreaQuestionProps {
  name: string;
  id: string;
  addQuestion: (areaId: string) => void;
  setQuestions: React.Dispatch<React.SetStateAction<Questions[]>>;
  questions: Questions[];
}

function AreaQuestion({
  name,
  id,
  addQuestion,
  setQuestions,
  questions,
}: AreaQuestionProps) {
  const [inputQuestion, setInputQuestion] = useState<InputQuestionProps[]>([
    {
      question: true,
    },
  ]);

  const emojiArea = () => {
    switch (name) {
      case "Love / Relationships":
        return <TiHeartOutline size={20} color="white" />;
        break;
      case "Spirituality":
        return <TiFeather size={20} color="white" />;
        break;
      case "Social life / Interactions":
        return <TiGroupOutline size={20} color="white" />;
        break;
      case "Health":
        return <TiThermometer size={20} color="white" />;
        break;
      case "Hobbies":
        return <TiNotesOutline size={20} color="white" />;
        break;
      case "Personal growth / Development":
        return <TiChartLineOutline size={20} color="white" />;
        break;

      default:
        break;
    }
  };

  const colorGradientArea = () => {
    switch (name) {
      case "Love / Relationships":
        return "bg-pink-400 ";
        break;
      case "Spirituality":
        return "bg-cyan-400 ";
        break;
      case "Social life / Interactions":
        return "bg-sky-400 ";
        break;
      case "Health":
        return "bg-green-400 ";
        break;
      case "Hobbies":
        return "bg-indigo-400 ";
        break;
      case "Personal growth / Development":
        return "bg-stone-400 ";
        break;

      default:
        break;
    }
  };
  return (
    <motion.div
      // initial={{ opacity: 0, x: -100, scale: 0.9 }}
      // whileInView={{ opacity: 1, x: 0, scale: 1 }}
      // transition={{ duration: 0.6 }}
      className="z-50   flex flex-col items-start justify-start gap-4  border-neutral-200  p-9 "
    >
      <div className="flex items-center gap-2">
        <div className={`rounded-lg ${colorGradientArea()} p-1`}>
          {emojiArea()}
        </div>
        <h3 className="flex items-center gap-1 font-bold text-black">{name}</h3>
      </div>

      <div className="flex w-full flex-col items-center justify-center  gap-2">
        {inputQuestion.map((q, index) => (
          <InputQuestion
            key={index}
            index={index}
            areaId={id}
            setQuestions={setQuestions}
            questions={questions}
          />
        ))}
        {inputQuestion.length < 5 && (
          <div className="w-full ">
            <motion.button
              type="button"
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                addQuestion(id);
                setInputQuestion([
                  ...inputQuestion,
                  {
                    question: true,
                  },
                ]);
              }}
              className="rounded-full border-[1px] border-neutral-500 p-1 text-[8px] text-neutral-400 hover:border-neutral-200 hover:text-neutral-200"
            >
              <HiPlus />
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default AreaQuestion;
