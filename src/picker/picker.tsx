import icons from "../icons";
import { choosePlayer } from "../stores/game";
import Option from "./option";

const Picker = () => (
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
        onClick={() => choosePlayer("rock")}
      />
      <Option
        className="col-span-3 mr-auto"
        icon={icons.paper}
        title="Paper"
        onClick={() => choosePlayer("paper")}
      />
      <Option
        className="col-span-2"
        icon={icons.scissors}
        title="Scissors"
        onClick={() => choosePlayer("scissors")}
      />
      <Option
        className="col-span-2"
        icon={icons.lizard}
        title="Lizard"
        onClick={() => choosePlayer("lizard")}
      />
      <Option
        className="col-span-2"
        icon={icons.spock}
        title="Spock"
        onClick={() => choosePlayer("spock")}
      />
    </div>
  </>
);

export default Picker;
