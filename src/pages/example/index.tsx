import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";

function Example() {
  const [quiestions, setQuiestions] = useState([]);

  const DecirHola = () => {
    console.log("hola");
  };

  
  return (
    <div className="flex h-screen w-full flex-col items-center justify-between gap-3 p-3">
      <div>Chronia</div>
      {/* <textarea name="" id="" cols={60} rows={30}></textarea>
      <button>Yes!</button> */}
      <div className="flex flex-col items-start justify-start gap-4 rounded-xl  border-neutral-200 p-4 ">
        <div className="rounded-full border-[1px] border-rose-200 bg-rose-100 px-3 py-[1px]">
          <p className="text-sm font-bold text-rose-400">Love</p>
        </div>
        <div className="">
          <h3>What you would like to ask yourself in 3 months?</h3>
          <p className="text-neutral-400">
            Write max 5 question that you want to do yourself
          </p>
        </div>
        <div className="flex w-full items-center justify-start  gap-2">
          <input type="text" className="question-input" />{" "}
          <button className="rounded-full border-[1px] p-1">
            <HiPlus size={13} color="gray" />
          </button>
        </div>
      </div>

      {/* <div className="flex flex-col items-start justify-start gap-2 rounded-xl border-[1px] border-neutral-200 p-4 shadow-sm">
        <div className="rounded-full border-[1px] border-sky-200 bg-sky-100 px-3 py-[1px]">
          <p className="text-xs font-bold text-sky-400">Social</p>
        </div>
        <h4>What is your goal in 6 months?</h4>
        <input type="text" className="text-xs" />
      </div> */}
      <button className="next-button">Continue</button>
    </div>
  );
}

export default Example;
