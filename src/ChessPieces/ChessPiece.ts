import { ChessBoard } from "../ChessBoard";
import { ChessTile } from "../ChessTile";

export abstract class ChessPiece {
  abstract type() : string

  constructor(public currentTile:ChessTile = null, public color: "white" | "black" = "white") {}

  abstract findValidMoves(boardState : ChessBoard) : Array<{ x: number; y: number; }>
  
  getDirection = () => this.color === "white" ? 1 : -1

  getPosition = () => ({
    x: this.currentTile.x,
    y: this.currentTile.y
  })
}