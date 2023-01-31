import FromPoke from "./FromPoke";
import ToPoke from "./ToPoke";

type Props = {
  value: number
}

const TabContent = (props : Props) => {
  if (props.value === 0) {
    return <FromPoke />;
  } else {
    return <ToPoke />;
  }
};

export default TabContent;
