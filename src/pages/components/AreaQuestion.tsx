import React, { useState } from "react";
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

interface QuestionProps {
  id: number;
  question: string;
}

interface AreaQuestionProps {
  name: string;
  id: string;
}

function AreaQuestion({ name, id }: AreaQuestionProps) {
  const [question, setQuestion] = useState<QuestionProps[]>([
    {
      id: 1,
      question: "",
    },
  ]);

  const emojiArea = () => {
    switch (name) {
      case "Love / Relationships":
        return <TiHeartOutline size={30} />;
        break;
      case "Spirituality":
        return <TiFeather size={30} />;
        break;
      case "Social life / interactions":
        return <TiGroupOutline size={30} />;
        break;
      case "Health":
        return <TiThermometer size={30} />;
        break;
      case "Hobbies":
        return <TiNotesOutline size={30} />;
        break;
      case "Personal growth and development":
        return <TiChartLineOutline size={30} />;
        break;

      default:
        break;
    }
  };

  const colorGradientArea = () => {
    switch (name) {
      case "Love / Relationships":
        return "bg-gradient-to-r from-pink-600 to-rose-700";
        break;
      case "Spirituality":
        return "bg-gradient-to-r from-cyan-600 to-green-700";
        break;
      case "Social life / interactions":
        return "bg-gradient-to-r from-sky-600 to-blue-700";
        break;
      case "Health":
        return "bg-gradient-to-r from-green-600 to-lime-700";
        break;
      case "Hobbies":
        return "bg-gradient-to-r from-indigo-600 to-red-700";
        break;
      case "Personal growth and development":
        return "bg-gradient-to-r from-stone-600 to-neutral-700";
        break;

      default:
        break;
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="b] z-50  flex flex-col items-start justify-start gap-4 rounded-xl border-neutral-200 border-neutral-900  p-9 "
    >
      <div className={`rounded-xl ${colorGradientArea()} p-1`}>
        {emojiArea()}
      </div>
      <h3 className="flex items-center gap-1 font-bold text-white">{name}</h3>

      <div className="flex w-full flex-col items-center justify-center  gap-2">
        {question.map((q, index) => (
          <InputQuestion index={index} />
        ))}
        {question.length < 5 && (
          <div className="w-full ">
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => {
                setQuestion([
                  ...question,
                  {
                    id: 0,
                    question: "",
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
