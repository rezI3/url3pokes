import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { resourceUsage } from "process";

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
  const { first, second, third }: Pokes = JSON.parse(req.body);

  console.log(first)

  if (first === "" || second === "" || third === "") {
    res.status(404);
    return { url: null };
  }

  console.log(first);

  const result = await prisma.url3pokes.findFirst({
    where: {
      first: first,
      second: second,
      third: third,
    },
  });
  console.log(result.url);

  if (result === null) {
    res.status(404);
    res.end(JSON.stringify({ url: null }));
  }

  res.status(200);
  res.end(JSON.stringify({ url: result.url }));
};

export default handler;
