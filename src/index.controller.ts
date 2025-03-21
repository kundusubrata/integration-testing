import { Request, Response } from "express";
import { z } from "zod";
import { prismaClient } from "./db";

const inputBody = z.object({
  a: z.number(),
  b: z.number(),
});

export const sumIndex = async (req: Request, res: Response): Promise<void> => {
  const result = inputBody.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({ error: "Invalid input" });
    return;
  }
  
  if (result.data.a > 1000000 || result.data.b > 1000000) {
    res.status(422).json({
      message: "Sorry we dont support big numbers",
    });
    return;
  }

  const add = result.data.a + result.data.b;

  await prismaClient.request.create({
    data: {
      a: result.data.a,
      b: result.data.b,
      result: add,
      type: "Sum",
    },
  });

  res.json({ add });
};
