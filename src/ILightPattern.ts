import { ChessBoard } from "./ChessBoard";

export interface ILightPattern {
    updatePattern(currentBoard:ChessBoard): ChessBoard
}