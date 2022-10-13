import Picker from "./picker/picker";
import Playing from "./playing/playing";
import useGameStore from "./stores/game";

const App = () => {
  const playerScore = useGameStore((state) => state.score.player);
  const cpuScore = useGameStore((state) => state.score.cpu);
  const state = useGameStore((state) => state.state);

  return (
    <>
      <div className="fixed top-4 left-4 flex flex-col justify-center items-start justify-self-start self-start">
        <span>Player: {playerScore}</span>
        <span>CPU: {cpuScore}</span>
      </div>
      {state === "choosing" ? <Picker /> : <Playing />}
    </>
  );
};

export default App;
