import React, { useState } from "react";
import { motion } from "framer-motion";
import { TiRefreshOutline } from "react-icons/ti";
import AnimatedText from "./AnimatedText";
import { PersonsExample } from "@/utils/personExample";
import Image from "next/image";

function LandingExample() {
  const [selectedPersonIndex, setSelectedPersonIndex] = useState(0);

  const handleNextPerson = () => {
    setSelectedPersonIndex(
      (prevIndex) => (prevIndex + 1) % PersonsExample.length,
    );
  };

  const selectedPerson = PersonsExample[selectedPersonIndex];

  return (
    <div className="flex w-full h-[729px] flex-col items-center justify-center gap-8 ">
      <div className="flex h-full items-center justify-end">
        <div className="flex flex-col items-center justify-center gap-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="relative relative z-10 flex w-[325px] gap-4 rounded-xl border-[1px] border-dashed border-neutral-800 p-4 shadow-md backdrop-blur backdrop-saturate-200"
          >
            <div className="absolute -top-16 flex flex-col items-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-[9px] font-normal text-neutral-500"
              >
                Ask youself...
              </motion.p>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                src="/svgs/arrow-bottom.png"
                className="h-[45px]"
                alt=""
              />
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
          </motion.div>

          <div className="relative flex items-start justify-start gap-2 rounded-xl p-2">
            <div className="absolute -top-12 right-0 flex flex-col items-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                className="text-[12px] font-normal text-neutral-500"
              >
                According to your daily journals, Get IA reflection
              </motion.p>
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3 }}
                src="/svgs/arrow-bottom.png"
                className="h-[45px] rotate-45 scale-x-[-1]"
                alt=""
              />
            </div>

            <motion.img
              initial={{ opacity: 0, scale: 0.7, rotate: "90deg" }}
              animate={{ opacity: 1, scale: 1.1, rotate: "0deg" }}
              transition={{ delay: 3.1 }}
              width={25}
              height={25}
              src="/chronia-logo.png"
              alt="chronia-logo"
              className="z-50"
            />
            <div className="flex flex-col items-start justify-start gap-3 pt-1 ">
              <motion.p
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1.1 }}
                transition={{ delay: 3.1 }}
              >
                Chronia says:
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}
                className={`box relative z-10 flex gap-4 rounded-xl border-[1px] border-dashed border-neutral-800 bg-gradient-to-r from-transparent  to-${selectedPerson?.colors.main}-200 p-4 shadow-md backdrop-blur backdrop-saturate-200`}
              >
                <span className="text-[25px] ">
                  {selectedPerson?.area.emoji}
                </span>
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
              </motion.div>

              <AnimatedText
                text={selectedPerson?.reflect.description}
                delay={4.4}
              />
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
    </div>
  );
}

export default LandingExample;
