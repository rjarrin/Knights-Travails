/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import chessboard from './index';

// Define the possible knight moves
const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
];

function isValidMove(x, y) {
    return (
        x >= 0 &&
        x < chessboard.tilesPerRow &&
        y >= 0 &&
        y < chessboard.tilesPerRow
    );
}

export default function knightMoves() {
    const start = [chessboard.knightPosX, chessboard.knightPosY];
    const queue = [[start]];
    const visited = new Set();
    const pathMap = new Map();

    while (queue.length > 0) {
        const path = queue.shift();
        const current = path[path.length - 1];

        if (
            current[0] === chessboard.endPosX &&
            current[1] === chessboard.endPosY
        ) {
            return path;
        }

        moves.forEach((move) => {
            const next = [current[0] + move[0], current[1] + move[1]];
            if (
                isValidMove(next[0], next[1]) &&
                !visited.has(next.toString())
            ) {
                visited.add(next.toString());
                const newPath = [...path, next];
                queue.push(newPath);
                pathMap.set(next.toString(), current);
            }
        });
    }
    return null;
}
