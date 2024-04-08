import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { api } from "@/utils/api";
import AreaQuestion from "../components/AreaQuestion";

function Example() {
  const [currectIndex, setCurrectIndex] = useState(0);

  const handleNextArea = () => {
    setCurrectIndex(currectIndex + 1);
  };

  const useQuery = api.area.getAreas.useQuery();

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-between gap-3 p-3">
      <div className="flex flex-col items-center justify-center gap-1">
        <h3 className="text-2xl">Ask yourself</h3>
        <p className="text-lg font-medium text-neutral-400">
          What would you like to ask 3 month old Deivy in this area of life?
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-1">
        {useQuery.data?.map((area) => (
          <AreaQuestion name={area.name} key={area.id} id={area.id} />
        ))}
      </div>

      <motion.button className="next-button">
        Continue <FaArrowRight />
      </motion.button>
    </div>
  );
}

export default Example;
