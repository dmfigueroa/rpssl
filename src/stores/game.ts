import create from "zustand";

export const Options = [
    "rock",
    "paper",
    "scissors",
    "lizard",
    "spock",
  ] as const;
  export type Options = typeof Options[number];

const DEFAULT_OPTION: Options = "rock";

interface GameState {
  score: {
    player: number;
    cpu: number;
  };
  state: "choosing" | "playing";
  choices: {
    player: Options;
    cpu: Options;
  };
}

const useGameStore = create<GameState>(() => ({
  score: {
    player: 0,
    cpu: 0,
  },
  state: "choosing",
  choices: {
    player: DEFAULT_OPTION,
    cpu: DEFAULT_OPTION,
  },
}));

export const playerWins = () =>
  useGameStore.setState((state) => ({
    ...state,
    score: { ...state.score, player: state.score.player + 1 },
  }));
export const cpuWins = () =>
  useGameStore.setState((state) => ({
    ...state,
    score: { ...state.score, cpu: state.score.cpu + 1 },
  }));

export const choosePlayer = (choice: Options) =>
  useGameStore.setState((state) => ({
    ...state,
    state: "playing",
    choices: { ...state.choices, player: choice },
  }));

export const chooseCpu = (choice: Options) =>
  useGameStore.setState((state) => ({
    ...state,
    choices: { ...state.choices, cpu: choice },
  }));

export const setChoosingState = () =>
  useGameStore.setState((state) => ({
    ...state,
    state: "choosing",
  }));

export default useGameStore;
