import { useState } from "react";
import Picker, { type Options } from "./picker/picker";
import Playing from "./picker/playing";

type State = "choosing" | "playing" | "result";
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

  const chooseCpu = (option: Options) => {
    setState("result");
  };

  const renderState = (state: State) => {
    switch (state) {
      case "choosing":
        return <Picker choose={choosePlayer} />;
      case "playing":
        return <Playing playerChoice={playerChoice} choose={chooseCpu} />;
      case "result":
        return playerChoice;
    }
  };

  return (
    <>
      {renderState(state)}
    </>
  );
};

export default App;
