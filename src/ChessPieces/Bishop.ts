import { ChessBoard } from "../ChessBoard";
import { ChessPiece } from "./ChessPiece";

export default class Bishop extends ChessPiece {
  type = () => this.color=="black" ?  "♝" : "♗";
  
  hasMoved:boolean;

  direction:boolean; // if true moving up the board if false moving down the board

  findValidMoves(boardState:ChessBoard): Array<{ x: number; y: number; }> {
    const validPositions:Array<{xPosition:number, yPosition:number}> = []
    throw new Error("Method not implemented.");
  }
}