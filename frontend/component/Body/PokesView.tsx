type Pokes = {
  first: string;
  second: string;
  third: string;
};

const PokesView: React.FC<{ pokes: Pokes }> = (props) => {
  const { first, second, third } = props.pokes;
  return (
    <div>
      <div>{first}</div>
      <div>{second}</div>
      <div>{third}</div>
    </div>
  );
};

export default PokesView;
