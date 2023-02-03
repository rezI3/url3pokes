import { Button, InputAdornment, TextField } from "@material-ui/core";

import { useState } from "react";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import URLView from "./URLView";
import { css } from "@emotion/react";

type Pokes = {
  first: string;
  second: string;
  third: string;
};

const FromPoke = () => {
  const [pokes, setPokes] = useState<Pokes>({
    first: "",
    second: "",
    third: "",
  });
  const [url, setUrl] = useState<string>("");

  const handleChange = (value: string, key: string) => {
    const prevPokes: Pokes = pokes;
    const newPokes: Pokes = { ...prevPokes, [key]: value };
    setPokes(newPokes);
  };

  const handleClick = async () => {
    // TODO: APIをを叩いて画像を表示する処理

    console.log("click!!");

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
      setUrl("urlが存在してなかったよ");
      console.log("error");
    } else {
      setUrl(data.url);
      console.log(data.url);
    }
  };

  return (
    <div css={styles.container}>
      <div css={styles.textContainer}>
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
      <div css={styles.subContainer}>
        <Button
          variant="contained"
          onClick={handleClick}
          css={styles.button}
          color="primary"
        >
          urlゲットだぜ
        </Button>
      </div>
      <div css={styles.subContainer}>
        <URLView url={url} />
      </div>
    </div>
  );
};

const styles = {
  container: css`
    display: flex;
    justify-content: space-between;
  `,
  textContainer: css`
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 40vh;
    padding-top: 1vh;
    justify-content: space-between;
    margin-top: 3vh;
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

export default FromPoke;
