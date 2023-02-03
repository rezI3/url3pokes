import { Paper } from "@mui/material";
import { css } from "@emotion/react";

type Poke = {
  name: string;
  imgUrl: string;
};

const PokesViewItem = (props: Poke) => {
  const pokeBallImgUrl: string =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png";
  return (
    <Paper elevation={3} css={styles.paper}>
      <>
        <div css={styles.container}>
          <img
            src={props.imgUrl !== "" ? props.imgUrl : pokeBallImgUrl}
            alt={`${props.name}の画像`}
            loading="lazy"
          />
        </div>
        <div css={styles.container}>
          <div css={styles.name}>{props.name}</div>
        </div>
      </>
    </Paper>
  );
};

const styles = {
  paper: css`
    display: flex;
    height: 15vh;
    width: 20vw;
  `,
  container: css`
    margin: auto 0;
    width: 8vw;
  `,
  name: css`
    font-size: 120%;
  `,
};

export default PokesViewItem;
