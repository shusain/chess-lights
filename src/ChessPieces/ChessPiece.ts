import { ChessBoard } from "../ChessBoard";
import { ChessTile } from "../ChessTile";

/**
 * Abstract Base Class for common properties/methods for all of the pieces
 */
export abstract class ChessPiece {
  abstract pieceSymbol() : string
  abstract findValidMoves(boardState : ChessBoard) : Array<{ x: number; y: number; }>

  constructor(public currentTile:ChessTile = null, public color: "white" | "black" = "white") {}

  get direction() { return this.color === "white" ? 1 : -1 }

  get myPos(){
      return {
        x: this.currentTile.x,
        y: this.currentTile.y
      }
  }
}