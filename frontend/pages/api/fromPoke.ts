import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ["query", "error", "info", "warn"],
});

type Pokes = {
  first: string;
  second: string;
  third: string;
};

type RetValue = {
  url: string;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<RetValue | RetValue>
) => {
  const { first, second, third }: Pokes = req.body;

  if (first === "" || second === "" || third === "") {
    res.status(404);
    return { url: null };
  }

  const result = await prisma.url3pokes.findFirst({
    where: {
      first: "ファイヤー",
      second: "フリーザー",
      third: "サンダー",
    },
  });
  console.log(result);
  // console.log(result.url);

  if (result === null) {
    res.status(404);
    return { url: null };
  }

  res.status(200);
  return { url: result.url };
};

export default handler;
