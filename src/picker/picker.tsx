import Option from "./option";
import icons from "../icons";

export const Options = ["rock", "paper", "scissors", "lizard", "spock"] as const;
export type Options = typeof Options[number];

const Picker = ({ choose }: { choose: (option: Options) => void }) => {
  return (
    <>
      <div className="my-10">
        <h1 className="text-center text-2xl font-bold">Choose an Option</h1>
        <p className="text-center text-xs">The CPU will choose one randomly</p>
      </div>
      <div className="grid grid-cols-6 grid-rows-2 gap-2">
        <Option
          className="col-span-3 ml-auto"
          icon={icons.rock}
          title="Rock"
          onClick={() => choose("rock")}
        />
        <Option
          className="col-span-3 mr-auto"
          icon={icons.paper}
          title="Paper"
          onClick={() => choose("paper")}
        />
        <Option
          className="col-span-2"
          icon={icons.scissors}
          title="Scissors"
          onClick={() => choose("scissors")}
        />
        <Option
          className="col-span-2"
          icon={icons.lizard}
          title="Lizard"
          onClick={() => choose("lizard")}
        />
        <Option
          className="col-span-2"
          icon={icons.spock}
          title="Spock"
          onClick={() => choose("spock")}
        />
      </div>
    </>
  );
};

export default Picker;
