/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import '../style.css';
import logoImage from '../images/pixel_logo.png';
import knightSVG from '../images/chess-knight.svg';
import chessboard from './index';

export function placeKnight() {
    // Initial knight placement will be 0,0
    const board = document.getElementById('chessboard-svg');
    const knight = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'image',
    );
    knight.setAttributeNS('http://www.w3.org/1999/xlink', 'href', knightSVG);
    knight.setAttribute('x', chessboard.knightPosX * chessboard.tilePixels);
    knight.setAttribute('y', chessboard.knightPosY * chessboard.tilePixels);
    knight.setAttribute('width', chessboard.tilePixels);
    knight.setAttribute('height', chessboard.tilePixels);
    // Determine the color of the square the knight is on
    const squareColor = (chessboard.knightPosX + chessboard.knightPosY) % 2 === 0 ? 'white' : 'black';
    // Apply the correct filter based on the square color
    knight.setAttribute(
        'filter',
        squareColor === 'black'
            ? 'brightness(0) saturate(100%) invert(98%) sepia(100%) saturate(7%) hue-rotate(184deg) brightness(104%) contrast(102%)'
            : 'brightness(0) saturate(100%) invert(0%) sepia(93%) saturate(0%) hue-rotate(199deg) brightness(95%) contrast(105%)',
    );
    board.appendChild(knight);
}

export function generateChessboard() {
    // Identify the main container
    const container = document.getElementById('main-container');
    // Check if the chessboard container already exists and remove it
    const existingChessboardContainer = document.getElementById(
        'chessboard-container',
    );
    if (existingChessboardContainer) {
        container.removeChild(existingChessboardContainer);
    }
    // Chessboard container
    const chessBoardContainer = document.createElement('div');
    chessBoardContainer.id = 'chessboard-container';
    // Prepare board SVG
    const board = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    board.setAttribute('width', chessboard.tilesPerRow * chessboard.tilePixels);
    board.setAttribute('height', chessboard.tilesPerRow * chessboard.tilePixels);
    board.id = 'chessboard-svg';
    // Iterate through board rows
    for (let i = 0; i < chessboard.tilesPerRow; i += 1) {
        // Iterate through the board columns
        for (let j = 0; j < chessboard.tilesPerRow; j += 1) {
            // Create the tile
            const tile = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'rect',
            );
            // Set tile attributes (i.e., x, y, width, height, fill color)
            tile.setAttribute('x', i * chessboard.tilePixels);
            tile.setAttribute('y', j * chessboard.tilePixels);
            tile.setAttribute('width', chessboard.tilePixels);
            tile.setAttribute('height', chessboard.tilePixels);
            tile.setAttribute('fill', (i + j) % 2 === 0 ? 'white' : 'black');
            tile.classList.add('tile');
            board.appendChild(tile);
        }
    }
    chessBoardContainer.appendChild(board);

    // Append the chessboard to the container
    container.appendChild(chessBoardContainer);
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
    sideContainer.id = 'side-container';

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
    sizeInput.max = '8';
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

    // Update display button
    const updateButton = document.createElement('button');
    updateButton.id = 'update-button';
    updateButton.textContent = 'Update Chessboard Display';
    sideContainer.appendChild(updateButton);

    // Calculate path button
    const pathButton = document.createElement('button');
    pathButton.id = 'calculate-path';
    pathButton.textContent = 'Calculate Path';
    sideContainer.appendChild(pathButton);

    // Append all container elements to the main container
    container.appendChild(sideContainer);

    // Modular call to create the chessboard graph (init: 8x8)
    generateChessboard();
    // Place the knight image on the board)
    placeKnight();
}
