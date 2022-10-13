import { useState } from "react";
import Picker, { type Options } from "./picker/picker";
import Playing from "./playing";
import { resolveGame } from "./resolver";
import Result from "./result";

type State = "choosing" | "playing" | "result";
const DEFAULT_OPTION: Options = "rock";

const App = () => {
  const [playerScore, setPlayerScore] = useState(0);
  const [cpuScore, setCpuScore] = useState(0);
  const [matchResult, setMatchResult] = useState("");
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
    chooseWinner(playerChoice, option);
  };

  const chooseWinner = (playerChoice: Options, cpuChoice: Options) => {
    const result = resolveGame(playerChoice, cpuChoice);
    if (result === "win") {
      playerWins();
    } else if (result === "lose") {
      cpuWins();
    }
    setMatchResult(result);
  };

  const renderState = (state: State) => {
    switch (state) {
      case "choosing":
        return <Picker choose={choosePlayer} />;
      case "playing":
        return <Playing playerChoice={playerChoice} choose={chooseCpu} />;
      case "result":
        return (
          <Result
            result={matchResult}
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
