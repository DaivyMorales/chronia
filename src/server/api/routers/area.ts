import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const areaRouter = createTRPCRouter({
  getAreas: publicProcedure.query(({ ctx }) => {
    return ctx.db.area.findMany();
  }),

  createArea: publicProcedure
    .input(
      z.object({
        name: z.string(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.db.area.create({
        data: {
          name: input.name,
        },
      });
    }),
});
