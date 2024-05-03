/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { generateChessboard, placeKnight, placeNumberedCircles } from './dom';
import chessboard from './index';
import knightMoves from './knight';

function validateCoordinates(input) {
    const coordinates = input.value.split(',').map(Number);
    // Check if the coordinates are valid (e.g., in [0, size] range, are integers)
    if (
        coordinates.length !== 2 ||
        !Number.isInteger(coordinates[0]) ||
        !Number.isInteger(coordinates[1])
    ) {
        return false;
    }
    const [x, y] = coordinates;
    return (
        x >= 0 &&
        x < chessboard.tilesPerRow &&
        y >= 0 &&
        y < chessboard.tilesPerRow
    );
}

function updatePath() {
    // Retrieve coordinate inputs
    const endInput = document.getElementById('end-input');

    // Validate the coordinates
    if (!validateCoordinates(endInput)) {
        endInput.setCustomValidity(
            'Invalid coordinates. Please enter coordinates in the format "x,y" where x and y are integers between 0 and the chessboard size',
        );
        endInput.reportValidity();
        return;
    }
    endInput.setCustomValidity('');

    // Store coordinates in array [x,y]
    const [endX, endY] = endInput.value.split(',').map(Number);

    chessboard.endPosX = endX;
    chessboard.endPosY = endY;
}

// change chessboard dimensions
function updateSize() {
    const sizeInput = document.getElementById('size-input');
    let size = parseInt(sizeInput.value, 10);

    // Check if the input is not a number or out of range [1,8]
    if (Number.isNaN(size) || size < 1 || size > 8) {
        // Reset to the nearest valid value (1 or 8)
        size = size < 1 ? 1 : 8;
        sizeInput.value = size;
        // Show the error message
        sizeInput.setCustomValidity(
            'Please enter an integer between 1 and 8.\n Automatically updating to valid input size.',
        );
        sizeInput.reportValidity();
    } else {
        // If the input is valid, clear any previous error message
        sizeInput.setCustomValidity('');
    }
    chessboard.tilesPerRow = size;
    // Call DOM method to change the size of the chessboard
    generateChessboard();
}

function updateKnight() {
    // Retrieve coordinate inputs
    const startInput = document.getElementById('start-input');

    // Validate the coordinates
    if (!validateCoordinates(startInput)) {
        startInput.setCustomValidity(
            'Invalid coordinates. Please enter coordinates in the format "x,y" where x and y are integers between 0 and the chessboard size',
        );
        startInput.reportValidity();
        return;
    }
    startInput.setCustomValidity('');

    // Store coordinates in array [x,y]
    const [startX, startY] = startInput.value.split(',').map(Number);

    chessboard.knightPosX = startX;
    chessboard.knightPosY = startY;
    placeKnight();
}

// Button Inputs
export function changeSize() {
    const sizeButton = document.getElementById('update-button');
    sizeButton.addEventListener('click', () => {
        updateSize();
        updateKnight();
    });
}

export function calculatePath() {
    const pathButton = document.getElementById('calculate-path');
    pathButton.addEventListener('click', () => {
        updateSize();
        updateKnight();
        updatePath();
        const path = knightMoves();
        if (path === null) {
            alert(
                'Error: Invalid Path\nYour end-coordinates are out-of-bounds! Try other ending coordinates or increase the size of the chessboard',
            );
            return;
        }
        placeNumberedCircles(path);
    });
}
