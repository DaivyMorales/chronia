import React, { useState } from "react";
import { motion } from "framer-motion";
import { TiRefreshOutline } from "react-icons/ti";
import AnimatedText from "./AnimatedText";
import { PersonsExample } from "@/utils/personExample";

function LandingExample() {
  const [selectedPersonIndex, setSelectedPersonIndex] = useState(0);

  const handleNextPerson = () => {
    setSelectedPersonIndex(
      (prevIndex) => (prevIndex + 1) % PersonsExample.length,
    );
  };

  const selectedPerson = PersonsExample[selectedPersonIndex];

  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <div className="flex h-full items-center justify-end">
        <div className="flex flex-col items-center justify-center gap-20">
          <div className="relative relative z-10 flex w-[325px] gap-4 rounded-xl border-[1px] border-dashed border-neutral-800 p-4 shadow-md backdrop-blur backdrop-saturate-200">
            <div className="absolute -top-16 flex flex-col items-center">
              <p className="text-[9px] font-normal text-neutral-500">
                Ask youself...
              </p>
              <img src="/svgs/arrow-bottom.png" className="h-[45px]" alt="" />
            </div>
            <img
              src={selectedPerson?.imageUrl}
              className="h-[27px] w-[27px] rounded-full"
            />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                <p className="text-xs font-bold">{selectedPerson?.name}</p>{" "}
              </div>

              <div className="flex flex-col items-start gap-2">
                <p className="text-left text-[12px] text-neutral-700 ">
                  <span className="font-bold text-black">1.</span>{" "}
                  {selectedPerson?.question}
                </p>

                <div
                  className={`rounded-full bg-${selectedPerson?.colors.main}-600 px-5 py-[2px]`}
                >
                  <p className="text-[8px] text-white">
                    {selectedPerson?.area.name}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-start gap-2 rounded-xl p-4">
            <div className="absolute -top-12 right-0 flex flex-col items-center">
              <p className="text-[12px] font-normal text-neutral-500">
                According to your daily journals, Get IA reflection
              </p>
              <img
                src="/svgs/arrow-bottom.png"
                className="h-[45px] rotate-45 scale-x-[-1]"
                alt=""
              />
            </div>
            <div
              className={`box relative z-10 flex gap-4 rounded-xl border-[1px] border-dashed border-neutral-800 bg-gradient-to-r from-transparent to-${selectedPerson?.colors.main}-200 p-4 shadow-md backdrop-blur backdrop-saturate-200`}
            >
              <span className="text-[25px] ">{selectedPerson?.area.emoji}</span>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <p className="text-xs font-normal">
                    {selectedPerson?.area.name}
                  </p>{" "}
                  <span className="rounded-full bg-neutral-800 px-2 py-[2px] text-[8px] text-white">
                    1 question answered
                  </span>
                </div>

                <div className="h-3 w-[250px] rounded-full bg-gray-200">
                  <div
                    className={`flex h-3 items-center justify-center rounded-full bg-${selectedPerson?.colors.main}-600`}
                    style={{ width: `${selectedPerson?.reflect.percent}%` }}
                  >
                    <p className="text-[8px] font-normal text-white">
                      {selectedPerson?.reflect.percent}%
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <AnimatedText text={selectedPerson?.reflect.description} />
            <motion.button
              onClick={handleNextPerson}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
              className="text-md flex items-center gap-1 rounded-md px-6 py-2 font-medium text-neutral-400 hover:bg-neutral-300"
            >
              New Example <TiRefreshOutline size={13} />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingExample;
