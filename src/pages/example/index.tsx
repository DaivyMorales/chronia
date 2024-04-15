import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { api } from "@/utils/api";
import AreaQuestion from "../../components/AreaQuestion";
import { useFormik } from "formik";
import { useState } from "react";

export interface Questions {
  questionId: string;
  questionDescription: string;
  areaId: string;
}

function Example() {
  const useQuery = api.area.getAreas.useQuery();
  const mutation = api.question.createQuestion.useMutation();

  const [questions, setQuestions] = useState<Questions[]>([]);

  const formik = useFormik({
    initialValues: {
      questions: [],
    },
    onSubmit: async () => {
      questions.map(async (question: Questions) => {
        await mutation.mutateAsync({
          question_description: question.questionDescription,
          areaId: question.areaId,
        });
      });
    },
  });

  const addQuestion = (areaId: string) => {
    formik.setFieldValue("questions", [
      ...formik.values.questions,
      {
        question_description: "",
        areaId,
      },
    ]);
  };

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="relative flex h-screen w-full flex-col items-center justify-between gap-3 p-3"
    >
      <div className="flex flex-col items-center justify-center gap-1">
        <h3 className="text-2xl">Ask yourself</h3>
        <p className="text-lg font-medium text-neutral-400">
          What would you like to ask 3 month old Deivy in this area of life?
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-1">
        {useQuery.data?.map((area) => (
          <AreaQuestion
            name={area.name}
            key={area.id}
            id={area.id}
            setQuestions={setQuestions}
            questions={questions}
            addQuestion={addQuestion}
          />
        ))}
      </div>

      <motion.button className="next-button">
        Continue <FaArrowRight />
      </motion.button>
    </form>
  );
}

export default Example;
