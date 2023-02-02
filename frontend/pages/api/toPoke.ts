import { NextApiResponse } from "next";
import { NextApiRequest } from "next";
import { PrismaClient } from "@prisma/client";
import { Numbers } from "@mui/icons-material";

const prisma = new PrismaClient({
  log: ["query", "error", "info", "warn"],
});

type Pokes = {
  first: string;
  second: string;
  third: string;
};

type PokeNumbers = {
  first: number;
  second: number;
  third: number;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Pokes | Pokes>
) => {
  const { url }: { url: string } = JSON.parse(req.body);

  if (url === "") {
    res.status(404);
    return { pokes: null };
  }

  // 文字列を図鑑番号3つに変換する処理
  const pokeNumbers: PokeNumbers = toNumbers(url);
  const pokes: Pokes = { first: "", second: "", third: "" };

  // APIを叩いて、図鑑番号からポケモン名に変換する処理
  for (const [key, value] of Object.entries(pokeNumbers)) {
    const pokeNumber: number = value;

    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokeNumber}`
    );
    // 上のfetchでの呼び出し結果が完了するまで、awaitで待機する
    const data = await res.json();
    const names = data.names as {
      language: { name: string; url: string };
      name: string;
    }[];

    const result = names.find((element) => element.language.name === "ja");
    const name = result.name;

    pokes[key] = name;
  }

  // URLとポケモン3匹をDBに保存する処理
  await prisma.url3pokes.create({
    data: {
      url: url,
      first: pokes.first,
      second: pokes.second,
      third: pokes.third,
    },
  });

  res.status(200);
  res.end(JSON.stringify({ pokes: pokes }));
};

const toNumbers = (url: string): PokeNumbers => {
  // urlの文字を3等分に分割
  const urlArray: [string, string, string] = splitString(url);

  // 文字列から文字コードに変換 -> その後、151までの数字に変換する
  const nums: number[] = urlArray.map((str) => {
    let sum: number = 0;
    for (const char of str.split("")) {
      sum += char.charCodeAt(0);
    }
    return (sum % 151) + 1;
  });

  const pokeNumbers: PokeNumbers = {
    first: nums[0],
    second: nums[1],
    third: nums[2],
  };
  return pokeNumbers;
};

const splitString = (str: string): [string, string, string] => {
  const length = Math.floor(str.length / 3);
  const firstStr = str.substring(0, length);
  const secondStr = str.substring(length, length * 2);
  const thirdStr = str.substring(length * 2);
  return [firstStr, secondStr, thirdStr];
};

export default handler;
