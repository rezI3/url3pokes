import PokesViewItem from "./PokesViewItem";

type Pokes = {
  first: Poke;
  second: Poke;
  third: Poke;
};

type Poke = {
  name: string;
  imgUrl: string;
};

const PokesView: React.FC<{ pokes: Pokes }> = (props) => {
  const { first, second, third } = props.pokes;
  return (
    <div>
      <PokesViewItem {...first}/>
      <PokesViewItem {...second}/>
      <PokesViewItem {...third}/>
    </div>
  );
};

const css = {

}

export default PokesView;
