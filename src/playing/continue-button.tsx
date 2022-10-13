const ContinueButton = ({
  continuePlaying,
}: {
  continuePlaying: () => void;
}) => (
  <button
    className="my-3 mx-auto border-solid border-2 rounded p-2 px-4"
    onClick={continuePlaying}
  >
    Play Again!
  </button>
);

export default ContinueButton;
