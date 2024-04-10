import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
} from "@/server/api/trpc";

export const questionRouter = createTRPCRouter({
  createQuestion: protectedProcedure
    .input(
      z.object({
        areaId: z.string(),
        question_description: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.question.create({
        data: {
          question_description: input.question_description,
          areaId: input.areaId,
        },
      });
    }),
});
