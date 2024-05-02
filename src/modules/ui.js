import { generateChessboard, placeKnight } from './dom';

// getStartandEnd coordinates

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
        sizeInput.setCustomValidity('Please enter an integer between 1 and 8.');
        sizeInput.reportValidity();
    } else {
        // If the input is valid, clear any previous error message
        sizeInput.setCustomValidity('');
    }

    // Call DOM method to change the size of the chessboard
    generateChessboard(size, 50);
    // Place the knight in the new location
    placeKnight(0, 0, 50);
}

// update the display
// calculate the path

// Button Inputs
export function changeSize() {
    const sizeButton = document.getElementById('update-button');
    sizeButton.addEventListener('click', () => {
        updateSize();
    });
}

export function changeCoordinates() {
    return 0;
}
