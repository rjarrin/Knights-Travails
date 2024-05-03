/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import chessboard from './index';

// Define the possible knight moves in terms of x and y coordinates
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

// Check if a move is valid within the chessboard boundaries
function isValidMove(x, y) {
    return (
        x >= 0 &&
        x < chessboard.tilesPerRow &&
        y >= 0 &&
        y < chessboard.tilesPerRow
    );
}

// A breadth-first search (BFS) algorithm to find a path for the knight to reach the end position from the start position.
export default function knightMoves() {
    // Initialize the start position of the knight
    const start = [chessboard.knightPosX, chessboard.knightPosY];
    const queue = [[start]];
    // Set to keep track of visited positions
    const visited = new Set();
    // Map to keep track of the path to each position
    const pathMap = new Map();

    while (queue.length > 0) {
        // Dequeue the next path to process
        const path = queue.shift();
        // Get the current position from the path
        const current = path[path.length - 1];

        // Check if the current position is the end position
        if (
            current[0] === chessboard.endPosX &&
            current[1] === chessboard.endPosY
        ) {
            // If the end position is reached, return the path
            return path;
        }

        // Iterate over each possible move
        moves.forEach((move) => {
            const next = [current[0] + move[0], current[1] + move[1]];
            if (
                isValidMove(next[0], next[1]) &&
                !visited.has(next.toString())
            ) {
                // Mark the position as visited
                visited.add(next.toString());
                // Create a new path by adding the next position to the current path
                const newPath = [...path, next];
                // Enqueue the new path
                queue.push(newPath);
                // Map the next position to the current position for path reconstruction
                pathMap.set(next.toString(), current);
            }
        });
    }
    // If no path is found, return null
    return null;
}
