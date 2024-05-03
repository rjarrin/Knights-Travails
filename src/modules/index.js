/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import { generateHeader, generateMain } from './dom';
import { changeSize, calculatePath } from './ui';
import Chessboard from './chessboard';

const chessboard = new Chessboard(8, 50);
export default chessboard;

generateHeader();
generateMain();
changeSize();
calculatePath();
