import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function Journal(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { title, summary } = req.body;

  const prisma = new PrismaClient();

  switch (req.method) {
    case "POST":
      try {
        const newJournal = await prisma.journal.create({
          data: {
            title: title,
            summary: summary,
          },
        });

        res.status(200).json(newJournal);
      } catch (error) {
        console.log(error);
      }
      break;

    default:
      break;
  }
}
