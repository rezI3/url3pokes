type Pokes = {
  first: string;
  second: string;
  third: string;
};

const PokesView: React.FC<{ pokes: Pokes }> = (props) => {
  const { first, second, third } = props.pokes;
  return (
    <div>
      <>{first}</>
      <>{second}</>
      <>{third}</>
    </div>
  );
};

export default PokesView;
