import ChessPiece from "./ChessPieces/ChessPiece";
import King from "./ChessPieces/King";

export default class Player {
  pieces: Array<ChessPiece> = []
  inCheck: boolean
  inCheckmate: boolean
  inStalemate: boolean

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
    return `${this.color} player, pieces: ${this.pieces}`
  }
}