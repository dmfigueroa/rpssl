import { useState } from "react";
import Picker, { type Options } from "./picker/picker";
import Playing from "./playing/playing";

type State = "choosing" | "playing";
const DEFAULT_OPTION: Options = "rock";

const App = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [state, setState] = useState<State>("choosing");
  const [playerChoice, setPlayerChoice] = useState<Options>(DEFAULT_OPTION);

  const playerWins = () => {
    setPlayerScore((prev) => prev + 1);
  };

  const cpuWins = () => {
    setCpuScore((prev) => prev + 1);
  };

  const choosePlayer = (option: Options) => {
    setState("playing");
    setPlayerChoice(option);
  };

  const renderState = (state: State) => {
    switch (state) {
      case "choosing":
        return <Picker choose={choosePlayer} />;
      case "playing":
        return (
          <Playing
            playerChoice={playerChoice}
            playerWins={playerWins}
            cpuWins={cpuWins}
            continuePlaying={() => setState("choosing")}
          />
        );
    }
  };

  return (
    <>
      <div className="fixed top-4 left-4 flex flex-col justify-center items-start justify-self-start self-start">
        <span>Player: {playerScore}</span>
        <span>CPU: {cpuScore}</span>
      </div>
      <div>{renderState(state)}</div>
    </>
  );
};

export default App;
