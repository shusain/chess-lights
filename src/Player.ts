import ChessPiece from "./ChessPieces/ChessPiece";
import King from "./ChessPieces/King";

export default class Player {
  pieces: Array<ChessPiece>
  constructor(public color: "white" | "black") { }
  get king() {
    return this.pieces.find((value,index,obj) => {
      return value instanceof King
    })
  }
}