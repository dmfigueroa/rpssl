const Header = ({ choosing = false, result = 'draw' }) => {
  return choosing ? (
    <h1 className="text-center text-2xl font-bold">The CPU is choosing...</h1>
  ) : (
    <div className="flex flex-col justify-center items-center">
      <span className="text-4xl md:text-6xl lg:text-9xl">
        {result === "draw" ? "It's a draw" : `You ${result}`}
      </span>
    </div>
  );
};

export default Header;