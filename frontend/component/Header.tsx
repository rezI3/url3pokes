import Image from "next/image";
import { css } from "@emotion/react";

const Header: React.FC = () => {
  const headerImgUrl: string = "/url3pokes.png";

  return (
    <div css={styles.container}>
      <Image
        src={headerImgUrl}
        alt="header"
        width={250}
        height={80}
      />
    </div>
  );
};

const styles = {
  container: css`
    width: 100vw;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `
};

export default Header;
