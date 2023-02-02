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

  const res = await prisma.url3pokes.findFirst({
    where: {
      first: first,
      second: second,
      third: third,
    },
  });
  console.log(res.url);

  if (res === null) {
    res.status(404);
    res.end(JSON.stringify({ url: null }));
  }

  res.status(200);
  res.end(JSON.stringify({ url: res.url }));
};

export default handler;
