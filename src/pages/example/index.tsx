import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";
import InputQuestion from "../components/InputQuestion";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import {
  TiHeartOutline,
  TiGroupOutline,
  TiChartBarOutline,
} from "react-icons/ti";

interface QuestionProps {
  id: number;
  question: string;
}

function Example() {
  const [question, setQuestion] = useState<QuestionProps[]>([
    {
      id: 1,
      question: "",
    },
  ]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-between gap-3 p-3">
      {/* <div className="absolute bg-rose-600 w-screen h-[100px] blur-[90px]"/> */}
      {/* <h2 className="z-50">Chronia</h2> */}
      <h2>Your goals</h2>
      {/* <textarea name="" id="" cols={60} rows={30}></textarea>
      <button>Yes!</button> */}

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-1">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="b] z-50  flex flex-col items-start justify-start gap-4 rounded-xl border-neutral-200 border-neutral-900  p-9 "
        >
          <div className="rounded-xl bg-gradient-to-r from-pink-600 to-rose-700 p-1">
            <TiHeartOutline size={30} />
          </div>
          <h3 className="flex items-center gap-1 font-bold text-white">
            Love / Relationships
          </h3>

          <div className="flex w-full flex-col items-center justify-center  gap-2">
            {question.map((q, index) => (
              <InputQuestion index={index} />
            ))}
            {question.length < 5 && (
              <div className="w-full ">
                <motion.button
                whileHover={{scale: 1.1}}
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
                <HiPlus/>
              </motion.button>
              </div>
            )}
          </div>
        </motion.div>

        {/* <div className="z-50 flex  flex-col items-start justify-start gap-4 rounded-xl border-[1px] border-neutral-200 border-neutral-900 bg-[#170F23] p-9 ">
          <div className="rounded-xl bg-gradient-to-r from-sky-600 to-blue-700 p-1">
            <TiGroupOutline size={30} />
          </div>
          <h3 className="flex items-center gap-1  font-bold text-white">
            Social
          </h3>
        
          <div className="flex w-full flex-col items-center justify-center  gap-2">
            {question.map((q, index) => (
              <InputQuestion index={index} />
            ))}
            {question.length < 5 && (
              <button
                onClick={() => {
                  setQuestion([
                    ...question,
                    {
                      id: 0,
                      question: "",
                    },
                  ]);
                }}
                className="rounded-full border-[2px] p-1"
              >
                <HiPlus size={13} color="gray" />
              </button>
            )}
          </div>
        </div>

        <div className="z-50 flex  flex-col items-start justify-start gap-4 rounded-xl border-[1px] border-neutral-200 border-neutral-900 bg-[#170F23] p-9 ">
          <div className="rounded-xl bg-green-600 p-1">
            <TiChartBarOutline size={30} />
          </div>
          <h3 className="flex items-center gap-1  font-bold text-white">
            Finanze
          </h3>
        
          <div className="flex w-full flex-col items-center justify-center  gap-2">
            {question.map((q, index) => (
              <InputQuestion index={index} />
            ))}
            {question.length < 5 && (
              <button
                onClick={() => {
                  setQuestion([
                    ...question,
                    {
                      id: 0,
                      question: "",
                    },
                  ]);
                }}
                className="rounded-full border-[2px] p-1"
              >
                <HiPlus size={13} color="gray" />
              </button>
            )}
          </div>
        </div> */}
      </div>

      {/* <div className="flex flex-col items-start justify-start gap-2 rounded-xl border-[1px] border-neutral-200 p-4 shadow-sm">
        <div className="rounded-full border-[1px] border-sky-200 bg-sky-100 px-3 py-[1px]">
          <p className="text-xs font-bold text-sky-400">Social</p>
        </div>
        <h4>What is your goal in 6 months?</h4>
        <input type="text" className="text-xs" />
      </div> */}
      <motion.button
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.25 }}
        whileTap={{ scale: 0.7 }}
        className="next-button"
      >
        Continue <FaArrowRight />
      </motion.button>
    </div>
  );
}

export default Example;
