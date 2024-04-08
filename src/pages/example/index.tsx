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
import { api } from "@/utils/api";
import { createCaller } from "@/server/api/root";
import { useFormik } from "formik";
import axios from "axios";
import AreaQuestion from "../components/AreaQuestion";

function Example() {
  const useQuery = api.area.getAreas.useQuery();
  // const trpc = createCaller();

  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: async (values) => {
      // const response = await trpc.area.createArea.mutate({
      //   name: values.name,
      // });
      // console.log(response);
    },
  });

  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-between gap-3 p-3">
      {/* <div className="absolute bg-rose-600 w-screen h-[100px] blur-[90px]"/> */}
      {/* <h2 className="z-50">Chronia</h2> */}
      <h3 className="text-2xl">Ask yourself</h3>
      <p className="text-lg font-medium text-neutral-400">
        What would you like to ask 3 month old Deivy in this area of life?
      </p>
      {/* <textarea name="" id="" cols={60} rows={30}></textarea>
      <button>Yes!</button> */}

      {/* <form onSubmit={formik.handleSubmit}>
        <input type="text" onChange={formik.handleChange} name="name" />
        <button>send</button>
      </form> */}

      {/* <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Error: {error.message}</div>
        ) : (
          <ul>{data?.map((area) => <li key={area.id}>{area.name}</li>)}</ul>
        )}
      </div> */}

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-1">
        {useQuery.data?.map((area) => (
          <AreaQuestion name={area.name} key={area.id} id={area.id} />
        ))}
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
      <motion.button className="next-button">
        Continue <FaArrowRight />
      </motion.button>
    </div>
  );
}

export default Example;
