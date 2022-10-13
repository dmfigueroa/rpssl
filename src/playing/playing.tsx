import { useEffect, useState } from "react";
import { resolveGame } from "../helpers/resolver";
import icons from "../icons";
import Option from "../picker/option";
import useGameStore, { chooseCpu, cpuWins, Options, playerWins } from "../stores/game";
import ContinueButton from "./continue-button";
import Header from "./header";

type Results = "win" | "loose" | "draw" | "choosing";

const FIVE_SECONDS = 3000;
const TIMER_INTERVAL = 100;

const Playing = () => {
  const [timeLeft, setTimeLeft] = useState(FIVE_SECONDS);
  const playerChoice = useGameStore((state) => state.choices.player);
  const cpuChoice = useGameStore((state) => state.choices.cpu);
  const [result, setResult] = useState<Results>("choosing");

  const chooseRandom = () => {
    const options = Object.values(Options);
    const randomIndex = Math.floor(Math.random() * options.length);
    chooseCpu(options[randomIndex]);
  };

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const chooseWinner = (playerChoice: Options, cpuChoice: Options) => {
    const result = resolveGame(playerChoice, cpuChoice);
    if (result === "win") {
      playerWins();
    } else if (result === "loose") {
      cpuWins();
    }
    setResult(result);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      setResult("choosing");
      chooseWinner(playerChoice, cpuChoice);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - TIMER_INTERVAL);
      chooseRandom();
    }, TIMER_INTERVAL);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  return (
    <div className="flex flex-col justify-center items-center">
      <Header choosing={result === "choosing"} result={result} />
      <div className="flex justify-center items-center my-12">
        <div className="flex flex-col justify-center items-center">
          <span className="text-xs">You</span>
          <Option
            className="col-span-3 ml-auto"
            icon={icons[playerChoice]}
            title={capitalize(playerChoice)}
          />
        </div>
        <span className="mx-4 text-4xl">vs</span>
        <div className="flex flex-col justify-center items-center">
          <span className="text-xs">CPU</span>
          <Option
            className="col-span-3 ml-auto"
            icon={icons[cpuChoice]}
            title={capitalize(cpuChoice)}
          />
        </div>
      </div>
      {result !== 'choosing' && <ContinueButton />}
    </div>
  );
};

export default Playing;
