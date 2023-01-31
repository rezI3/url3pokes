import { Button, InputAdornment, TextField } from "@material-ui/core";

import { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import PokesView from "./PokesView";

type Pokes = {
  first: string;
  second: string;
  third: string;
};

const ToPoke = () => {
  const [pokes, setPokes] = useState<Pokes>({ first: "", second: "", third: "" });
  const [url, setUrl] = useState<string>("");

  const handleChange = (value: string, key: string) => {
    setUrl(value);
  };

  const handleClick = async () => {
    const result = await fetch("/api/toPoke", {
      method: "POST",
      body: JSON.stringify({
        url: url,
      }),
    });

    const data = await result.json();

    // TODO:APIを叩いて、ポケモンの画像を表示する処理
    setPokes(data.pokes);
  };

  return (
    <div>
      <TextField
        id="url"
        variant="outlined"
        onChange={(e) => handleChange(e.target.value, "first")}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LinkIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" onClick={handleClick}>
        ポケモンゲットだぜ
      </Button>
      <PokesView pokes={pokes}/>
    </div>
  );
};

export default ToPoke;
