import '../style.css';
import logoImage from '../images/pixel_logo.png';

function generateChessboard() {
    // Identify the main container
    const container = document.getElementById('main-container');
    // Chessboard container
    const chessBoard = document.createElement('div');
    chessBoard.id = 'chessboard-container';
    // Append the chessboard to the container
    container.appendChild(chessBoard);
}

export function generateHeader() {
    // Identify the header
    const header = document.getElementById('header');

    // Create the logo image for the container
    const logo = document.createElement('img');
    logo.id = 'logo-image';
    logo.src = logoImage;
    logo.alt = 'Logo';

    // Create title text for site
    const title = document.createElement('h1');
    title.textContent = "Knight's Tour";

    // Append the elements to the header
    header.appendChild(logo);
    header.appendChild(title);
}

export function generateMain() {
    // Identify the container
    const container = document.getElementById('main-container');

    // Make sidebar container for input fields
    const sideContainer = document.createElement('div');

    // Chessboard size: Container
    const chessboardSize = document.createElement('div');
    // Chessboard size: Label
    const sizeLabel = document.createElement('label');
    sizeLabel.htmlFor = 'size-input';
    sizeLabel.textContent = 'Chessboard Size:';
    // Chessboard size: Input
    const sizeInput = document.createElement('input');
    sizeInput.id = 'size-input';
    sizeInput.type = 'number';
    sizeInput.min = '1';
    sizeInput.placeholder = 'Enter chessboard size (e.g., 8)';
    // Append 'Chessboard size' elements to side container
    chessboardSize.appendChild(sizeLabel);
    chessboardSize.appendChild(sizeInput);
    sideContainer.appendChild(chessboardSize);

    // Start Coordinates: Container
    const startContainer = document.createElement('div');
    // Start Coordinates: Label
    const startLabel = document.createElement('label');
    startLabel.htmlFor = 'start-input';
    startLabel.textContent = 'Start Coordinates:';
    // Start Coordinates: Input
    const startInput = document.createElement('input');
    startInput.id = 'start-input';
    startInput.type = 'text';
    startInput.placeholder = 'Start coordinates (e.g., 0,0)';
    // Append 'Start Coordinates' elements to the side container
    startContainer.appendChild(startLabel);
    startContainer.appendChild(startInput);
    sideContainer.appendChild(startContainer);

    // End Coordinates: Container
    const endContainer = document.createElement('div');
    // End Coordinates: Label
    const endLabel = document.createElement('label');
    endLabel.htmlFor = 'end-input';
    endLabel.textContent = 'End Coordinates:';
    // End Coordinates: Input
    const endInput = document.createElement('input');
    endInput.id = 'end-input';
    endInput.type = 'text';
    endInput.placeholder = 'End coordinates (e.g., 7,7)';
    // Append 'Start Coordinates' elements to the side container
    endContainer.appendChild(endLabel);
    endContainer.appendChild(endInput);
    sideContainer.appendChild(endContainer);

    // Calculate path button
    const pathButton = document.createElement('button');
    pathButton.id = 'calculate-path';
    pathButton.textContent = 'Calculate Path';
    sideContainer.appendChild(pathButton);

    // Modular call to create the chessboard graph
    generateChessboard();

    // Append all container elements to the main container
    container.appendChild(sideContainer);
}
