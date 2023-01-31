import { Button, IconButton } from "@material-ui/core";
import GitHubIcon from "@mui/icons-material/GitHub";
import { margin } from "@mui/system";
import Link from "next/link";

const Footer: React.FC = () => {
  const githubUrl: string = "https://github.com/rezI3";

  return (
    <div>
      <Link href={githubUrl} target="_blank">github</Link>
    </div>
  );
};

export default Footer;
