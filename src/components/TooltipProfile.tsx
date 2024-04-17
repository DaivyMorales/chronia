import React from "react";
import { TiRadarOutline } from "react-icons/ti";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";

interface TooltipProfileProps {
  tooltipProfileRef: React.RefObject<HTMLDivElement>;
}

function TooltipProfile({ tooltipProfileRef }: TooltipProfileProps) {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      ref={tooltipProfileRef}
      className="absolute right-0 top-8 w-[170px] rounded-b-[7px] rounded-l-[7px] border-[1px] border-neutral-400 bg-[#DDDDD6] px-2 py-1 shadow-sm backdrop-blur backdrop-saturate-200"
    >
      <div onClick={() => signOut()} className="flex items-center text-red-500">
        <TiRadarOutline />
        <p className="text-xs">Log out</p>
      </div>
    </motion.div>
  );
}

export default TooltipProfile;
