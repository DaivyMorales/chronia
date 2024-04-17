import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { api } from "@/utils/api";
import AreaQuestion from "../../components/AreaQuestion";
import { useFormik } from "formik";
import { useState } from "react";
import { useSession } from "next-auth/react";

export interface Questions {
  questionId?: string;
  questionDescription: string;
  areaId?: string;
}

function Example() {
  const { data: session } = useSession();

  const useQuery = api.area.getAreas.useQuery();
  const mutation = api.question.createQuestion.useMutation();

  const [questions, setQuestions] = useState<Questions[]>([]);

  const formik = useFormik({
    initialValues: {
      questions: [],
    },
    onSubmit: async () => {
      if (session?.user) {
        questions.map(async (question: Questions) => {
          await mutation.mutateAsync({
            question_description: question.questionDescription,
            areaId: question.areaId || "",
            userId: session.user.id,
          });
        });
      }
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
      className="relative flex min-h-screen w-full flex-col items-start justify-between gap-3  px-3 py-10"
    >
      <div className="z-10 flex flex-col items-start justify-start gap-1">
        <h2 className=" ">Ask yourself</h2>
        <p className="text-sm font-medium text-neutral-400">
          What would you like to ask 3 month old {session?.user.name} in these
          life areas?
          <br />
          The AI will answer those your questions
        </p>
      </div>

      <div className="flex flex-col justify-start items-start gap-5 w-full">
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
