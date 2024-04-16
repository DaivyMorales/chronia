import React from "react";
import { useFormik } from "formik";
import axios from "axios";

function Journal() {
  const today = new Date();
  const dateString = today.toLocaleDateString();

  const formik = useFormik({
    initialValues: {
      title: "",
      summary: "",
    },
    onSubmit: async (values) => {
      const response = await axios.post("/api/journal", values);
      console.log(response);
      if (response.status === 200) {
        console.log("HAZ CREADO UN DATOOO");
      }
    },
  });

  return (
    <div className="flex h-screen w-full items-center justify-center gap-3">
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col items-start justify-start gap-1">
          <p className="underline">{dateString}</p>
         <div className="flex  gap-2 items-center justify-center">
         <div className="w-[15px] h-[15px] rounded-full bg-sky-500"/><h2 className="text-center">Spirituality</h2>

         </div>
          <ul className="flex items-center justify-center gap-2 text-neutral-400">
            <li className="text-xs font-medium text-neutral-400">
              Mindfulness
            </li>{" "}
            ·
            <li className="text-xs font-medium text-neutral-400">
              Contemplation
            </li>{" "}
            ·
            <li className="text-xs font-medium text-neutral-400">
              Enlightenment
            </li>
          </ul>
        </div>

        <div>
          <textarea
            name="summary"
            onChange={formik.handleChange}
            cols={30}
           
            className=" w-full sm:w-[400px] lg:w-[650px] min-h-[500px] max-h-[1000px] bg-transparent resize-none whitespace-normal rounded-lg py-2 text-[14px] font-normal text-black placeholder:text-neutral-500"
            placeholder="Tell us what did you do this day? "
          ></textarea>
        </div>
        {/* <button
          type="submit"
          className="rounded-xl bg-red-500 p-2 p-2 text-sm font-bold text-white"
        >
          Save
        </button> */}
      </form>
    </div>
  );
}

export default Journal;
