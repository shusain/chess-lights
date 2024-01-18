import ChessPiece from "./ChessPieces/ChessPiece";
import King from "./ChessPieces/King";

export default class Player {
  pieces: Array<ChessPiece> = []
  inCheck: boolean = false
  inCheckmate: boolean = false
  inStalemate: boolean = false

  constructor(public color: "white" | "black") { }
  get king() {
    return this.pieces.find((value,index,obj) => {
      return value instanceof King
    })
  }
  clone() {
    return new Player(this.color)
  }
  toString() {
    return `${this.color} player, pieces: ${this.pieces}, in check: ${this.inCheck}, in stalemate: ${this.inStalemate}, in checkmate: ${this.inCheckmate}`
  }
}