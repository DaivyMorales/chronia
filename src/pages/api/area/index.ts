import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

export default async function Area(req: NextApiRequest, res: NextApiResponse) {
  const { name } = req.body;

  const prisma = new PrismaClient();

  switch (req.method) {
    case "POST":
      try {
        const newJournal = await prisma.area.create({
          data: {
            name,
          },
        });

        res.status(200).json(newJournal);
      } catch (error) {
        res.status(500).json({ message: error });
        console.log(error);
      }
      break;

    default:
      break;
  }
}
