import { Options } from "./picker/picker";

const wins: Record<Options, Options[]> = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["paper", "spock"],
    spock: ["scissors", "rock"],
};

export function resolveGame(player: Options, cpu: Options) {
    if (player === cpu) return "draw";
    if (wins[player].includes(cpu)) return "win";
    return "loose";
}
