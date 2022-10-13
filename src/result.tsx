interface ResultProps {
  result: string;
  continuePlaying: () => void;
}

const Result = ({ result, continuePlaying }: ResultProps) => {
  return (
    <>
      <div className="flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col justify-center items-center">
          <span className="text-4xl md:text-6xl lg:text-9xl">
            {result === "draw" ? "It's a draw" : `You ${result}`}
          </span>
        </div>
        <button
          className="my-3 mx-auto border-solid border-2 rounded p-2 px-4"
          onClick={continuePlaying}
        >
          Play Again!
        </button>
      </div>
    </>
  );
};

export default Result;
