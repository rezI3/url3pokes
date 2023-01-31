import { Button, InputAdornment, TextField } from "@material-ui/core";

import { useState } from "react";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import URLView from "./URLView";

type Pokes = {
  first: string;
  second: string;
  third: string;
};

const FromPoke = () => {
  const [pokes, setPokes] = useState<Pokes>({ first: "", second: "", third: "" });
  const [url, setUrl] = useState<string>("");

  const handleChange = (value: string, key: string) => {
    const prevPokes: Pokes = pokes;
    const newPokes: Pokes = { ...prevPokes, [key]: value };
    setPokes(newPokes);
  };

  const handleClick = async () => {
    // TODO: APIをを叩いて画像を表示する処理


    console.log("click!!")

    const { first, second, third } = pokes;

    // DBを叩いて、urlを取得する処理
    const result = await fetch("/api/fromPoke", {
      method: "POST",
      body: JSON.stringify({
        first: first,
        second: second,
        third: third,
      }),
    });

    const data = await result.json();

    if (data.url === null) {
      setUrl("urlが存在してなかったよ")
      console.log("error");
    } else {
      setUrl(data.url);
      console.log(data.url)
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "200px" }}>
        <TextField
          id="firstPoke"
          variant="outlined"
          onChange={(e) => handleChange(e.target.value, "first")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CatchingPokemonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="secondPoke"
          variant="outlined"
          onChange={(e) => handleChange(e.target.value, "second")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CatchingPokemonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          id="thirdPoke"
          variant="outlined"
          onChange={(e) => handleChange(e.target.value, "third")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <CatchingPokemonIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Button variant="contained" onClick={handleClick}>
        urlゲットだぜ
      </Button>
      <URLView url={url} />
    </div>
  );
};

export default FromPoke;
