import { setChoosingState } from "../stores/game";

const ContinueButton = () => (
  <button
    className="my-3 mx-auto border-solid border-2 rounded p-2 px-4"
    onClick={setChoosingState}
  >
    Play Again!
  </button>
);

export default ContinueButton;
