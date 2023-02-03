import { Button, InputAdornment, TextField } from "@material-ui/core";

import { useState } from "react";
import LinkIcon from "@mui/icons-material/Link";
import PokesView from "./PokesView";
import { css } from "@emotion/react";

type Pokes = {
  first: Poke;
  second: Poke;
  third: Poke;
};

type Poke = {
  name: string;
  imgUrl: string;
};

const ToPoke = () => {
  const [pokes, setPokes] = useState<Pokes>({
    first: { name: "", imgUrl: "" },
    second: { name: "", imgUrl: "" },
    third: { name: "", imgUrl: "" },
  });
  const [url, setUrl] = useState<string>("");

  const handleChange = (value: string, key: string) => {
    setUrl(value);
  };

  const handleClick = async () => {
    const res = await fetch("/api/toPoke", {
      method: "POST",
      body: JSON.stringify({
        url: url,
      }),
    });

    const data = await res.json();

    // TODO:APIを叩いて、ポケモンの画像を表示する処理
    setPokes(data.pokes);
  };

  return (
    <div css={styles.container}>
      <div css={styles.subContainer}>
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
        multiline
      />
      </div>
      <div css={styles.subContainer}>
      <Button variant="contained" onClick={handleClick} css={styles.button} color="primary">
        ポケモンゲットだぜ
      </Button>
      </div>
      <PokesView pokes={pokes} />
    </div>
  );
};

const styles = {
  container: css`
    display: flex;
    justify-content: space-between;
  `,
  subContainer: css`
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
`,
  button: css`
    height: 10vh;
    width: 15vw;
    margin-top: 100vh;
  `,
};

export default ToPoke;
