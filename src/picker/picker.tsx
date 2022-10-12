import Option from "./options/option";
import {
  faHandBackFist,
  faHandLizard,
  faHandPaper,
  faHandScissors,
  faHandSpock,
} from "@fortawesome/free-solid-svg-icons";

type Options = "rock" | "paper" | "scissors" | "lizard" | "spock";

const Picker = () => {
  const choose = (option: Options) => {
    console.log(option);
  };

  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-2">
      <Option
        className="col-span-3 ml-auto"
        icon={faHandBackFist}
        title="Rock"
        onClick={() => choose("rock")}
      />
      <Option
        className="col-span-3 mr-auto"
        icon={faHandPaper}
        title="Paper"
        onClick={() => choose("paper")}
      />
      <Option
        className="col-span-2"
        icon={faHandScissors}
        title="Scissors"
        onClick={() => choose("scissors")}
      />
      <Option
        className="col-span-2"
        icon={faHandLizard}
        title="Lizard"
        onClick={() => choose("lizard")}
      />
      <Option
        className="col-span-2"
        icon={faHandSpock}
        title="Spock"
        onClick={() => choose("spock")}
      />
    </div>
  );
};

export default Picker;
