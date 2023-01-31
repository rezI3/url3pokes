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

  // TODO: 文字列を数字3つに変換する処理
  // const pokeNumbers: PokeNumbers = toNumbers(url);
  const pokes: Pokes = { first: "", second: "", third: "" };

  // TODO: APIを叩いて、図鑑番号からポケモン名に変換する処理
  for (const key of Object.keys(pokes)) {
    // const pokeNumber: number = pokeNumbers[key];
    // const result = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon/${pokeNumber}`
    // );

    // const speciesUrl = result.data.species.url;
    // const responseSpecies = await fetch(speciesUrl);
    // const name = responseSpecies.data.names.find(
    //   (v) => v.language.name === "ja"
    // );

    // pokes[key] = name;
    console.log(key)
  }

  res.status(200);
  return { pokes: pokes };
};

// const toNumbers = (url: string): PokeNumbers => {
//   const urlArray = url.split("");

//   const sum = urlArray
//     .map((char) => char.charCodeAt(0))
//     .reduce((acc, x) => acc + x);

//   const numLen: number = Number(String(sum).length) / 3;

//   const numArray = url.match(/.{numlen}/g);
//   const nums: PokeNumbers = {
//     first: (Number(numArray[0]) % 151) + 1,
//     second: (Number(numArray[1]) % 151) + 1,
//     third: (Number(numArray[2]) % 151) + 1,
//   };

//   return nums;
// };

export default handler;
