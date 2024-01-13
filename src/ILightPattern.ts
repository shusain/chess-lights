import ChessBoard from "./ChessBoard";

export default interface ILightPattern {
    updatePattern(currentBoard:ChessBoard): ChessBoard
}