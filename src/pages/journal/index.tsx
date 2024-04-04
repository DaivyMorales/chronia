import React from "react";
import { useFormik } from "formik";
import axios from "axios";

function Journal() {
  const formik = useFormik({
    initialValues: {
      title: "",
      summary: "",
    },
    onSubmit: async (values) => {
      const response = await axios.post("/api/journal", values);
      console.log(response)
      if(response.status === 200) {
        console.log("HAZ CREADO UN DATOOO")
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="">title</label>
          <input
            type="text"
            onChange={formik.handleChange}
            name="title"
            placeholder="My day with Juan"
          />
        </div>
        <div>
          <label htmlFor="">Summary</label>
          <textarea
            name="summary"
            onChange={formik.handleChange}
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <button
          type="submit"
          className="rounded-xl bg-red-500 p-2 p-2 text-sm font-bold text-white"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default Journal;
