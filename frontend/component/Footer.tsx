import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";
import Link from "next/link";
import { css } from "@emotion/react";

const Footer: React.FC = () => {
  const githubUrl: string = "https://github.com/rezI3";

  return (
    <div css={styles.container}>
      <IconButton href={githubUrl} target="_blank" size="large">
        <GitHubIcon />
      </IconButton>
    </div>
  );
};

const styles = {
  container: css`
    width: 97vw;
    height: 10vh;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
  `,
};

export default Footer;
