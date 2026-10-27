import makeWASocket from './Socket/index.js';
import chalk from "chalk";

const C = {
    reset: '\x1b[0m', bold: '\x1b[1m', dim: '\x1b[2m',
    cyan: '\x1b[36m', green: '\x1b[32m', magenta: '\x1b[35m', gray: '\x1b[90m'
};

const asciiLines = [
    "⠀⠀⠀⠀⠀⠀⠀⢀⣠⣤⣤⣶⣶⣶⣶⣤⣤⣄⡀⠀⠀⠀⠀⠀⠀⠀",
    "⠀⠀⠀⠀⢀⣤⣾⣿⣿⠿⠟⠛⠛⠛⠛⠻⠿⣿⣿⣷⣤⡀⠀⠀⠀⠀",
    "⠀⠀⠀⣴⣿⣿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⠻⣿⣿⣦⠀⠀⠀",
    "⠀⢀⣾⣿⡿⠁⠀⠀⣴⣦⣄⠀⠀⠀⠀⠀⣀⣤⣶⡀⠈⢿⣿⣷⡀⠀",
    "⠀⣾⣿⡟⠁⠀⠀⠀⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠈⢻⣿⣷⠀",
    "⢠⣿⣿⠁⠀⠀⠀⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣦⠀⠀⠈⣿⣿⡄",
    "⢸⣿⣿⠀⠀⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⣿⣿⡇",
    "⠘⣿⣿⡦⠤⠒⠒⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠧⠤⢴⣿⣿⠃",
    "⠀⢿⣿⣧⡀⠀⢤⡀⠙⠻⠿⣿⣿⣿⣿⣿⡿⠟⠋⠁⠀⢀⣼⣿⡿⠀",
    "⠀⠈⢿⣿⣷⡀⠈⢿⣦⣤⣾⣿⣿⣿⣿⣿⣷⣄⠀⠀⢀⣾⣿⡿⠁⠀",
    "⠀⠀⠀⠻⣿⣿⣦⣄⡉⣿⣿⢿⣿⠉⢻⣿⢿⣿⣠⣴⣿⣿⠟⠀⠀⠀",
    "⠀⠀⠀⠀⠈⠛⢿⣿⣿⣿⣧⣼⣿⣤⣾⣷⣶⣿⣿⡿⠛⠁⠀⠀⠀⠀",
    "⠀⠀⠀⠀⠀⠀⠀⠈⠙⠛⠛⠿⠿⠿⠿⠛⠛⠋⠁⠀⠀⠀⠀⠀⠀⠀"
];

const sideText = ["", "", "", "", "", "Thanks For Use Baileys", "", "", "", "", "", "", ""];

for (let i = 0; i < asciiLines.length; i++) {
    console.log(C.bold + C.cyan + asciiLines[i] + C.reset + "     " + (sideText[i] || ""));
}

console.log(C.dim + C.gray + "___________________________________________" + C.reset);
console.log(C.dim + "└─ Creator       " + C.reset + C.gray + "│ " + C.reset + C.magenta + "@Lsqltmux" + C.reset);
console.log(C.dim + "└─ Status        " + C.reset + C.gray + "│ " + C.reset + C.green + "Connected" + C.reset);
console.log(C.dim + "└─ Custom Pair   " + C.reset + C.gray + "│ " + C.reset + C.bold + C.green + "Yes" + C.reset);
console.log(C.dim + "└─ Support Relay " + C.reset + C.gray + "│ " + C.reset + C.bold + C.green + "Yes" + C.reset);
console.log(C.dim + C.gray + "-------------------------------------------" + C.reset);
console.log('');

export * from '../WAProto/index.js';
export * from './Utils/index.js';
export * from './Types/index.js';
export * from './Defaults/index.js';
export * from './WABinary/index.js';
export * from './WAM/index.js';
export * from './WAUSync/index.js';
export * from './Store/index.js';
export { makeWASocket };
export default makeWASocket;
//# sourceMappingURL=index.js.map
