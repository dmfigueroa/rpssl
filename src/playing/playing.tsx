import { useEffect, useState } from "react";
import { Options } from "../picker/picker";
import Option from "../picker/option";
import icons from "../icons";
import { resolveGame } from "../resolver";
import Header from "./header";
import ContinueButton from "./continue-button";

const FIVE_SECONDS = 3000;
const TIMER_INTERVAL = 100;
const DEFAULT_OPTION: Options = "rock"; // Shouldn't be repeated (also on App.tsx)

interface PlayingProps {
  playerChoice: Options;
  playerWins: () => void;
  cpuWins: () => void;
  continuePlaying: () => void;
}

const Playing = ({
  playerChoice,
  playerWins,
  cpuWins,
  continuePlaying,
}: PlayingProps) => {
  const [timeLeft, setTimeLeft] = useState(FIVE_SECONDS);
  const [cpuChoice, setCpuChoice] = useState<Options>(DEFAULT_OPTION);
  const [choosing, setChoosing] = useState(true);
  const [result, setResult] = useState("draw");

  const chooseRandom = () => {
    const options = Object.values(Options);
    const randomIndex = Math.floor(Math.random() * options.length);
    setCpuChoice(options[randomIndex]);
  };

  const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const chooseWinner = (playerChoice: Options, cpuChoice: Options) => {
    const result = resolveGame(playerChoice, cpuChoice);
    if (result === "win") {
      playerWins();
    } else if (result === "lose") {
      cpuWins();
    }
    setResult(result);
  };

  useEffect(() => {
    if (timeLeft === 0) {
      setChoosing(false);
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
      <Header choosing={choosing} result={result} />
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
      {!choosing && <ContinueButton continuePlaying={continuePlaying} />}
    </div>
  );
};

export default Playing;
