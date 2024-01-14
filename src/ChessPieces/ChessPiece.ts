import ChessBoard from "../ChessBoard";
import ChessTile from "../ChessTile";

/**
 * Abstract Base Class for common properties/methods for all of the pieces
 */
export default abstract class ChessPiece {
  abstract pieceSymbol(): string
  /**
   * 
   * @param boardState The current board state to find valid moves on
   */
  abstract findValidMoves(boardState: ChessBoard): Array<{ x: number; y: number; }>
  abstract clone(boardTiles:Array<Array<ChessTile>>): ChessPiece
  public currentTile: ChessTile = null

  constructor(boardTiles: Array<Array<ChessTile>>, x: number, y: number, public color: "white" | "black" = "white") {
    boardTiles[x][y].currentPiece = this
    this.currentTile = boardTiles[x][y]
  }

  get direction() { return this.color === "white" ? 1 : -1 }

  get myPos() {
    return {
      x: this.currentTile.x,
      y: this.currentTile.y
    }
  }

  toString() {
    return `${this.pieceSymbol()}`
  }

}