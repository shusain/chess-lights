import ChessPiece from "./ChessPieces/ChessPiece";
import King from "./ChessPieces/King";
import Rook from "./ChessPieces/Rook";

export default class Player {
  pieces: Array<ChessPiece> = []
  inCheck: boolean = false
  inCheckmate: boolean = false
  inStalemate: boolean = false
  canKingSideCastle: boolean = false
  canQueenSideCastle: boolean = false

  constructor(public color: "white" | "black") { }
  
  get king():King {
    return this.pieces.find((value,index,obj) => {
      return value instanceof King
    }) as King
  }

  get kingHasMoved() {
    return this.king.hasMoved
  }

  get kingSideRook():Rook {
    return this.pieces.find((value,index,obj) => {
      return value instanceof Rook && value.kingSideRook
    }) as Rook
  }

  get kingSideRookHasMoved() {
    if(!this.kingSideRook) return true
    
    return this.kingSideRook.hasMoved
  }

  get queenSideRook():Rook {
    return this.pieces.find((value,index,obj) => {
      return value instanceof Rook && !value.kingSideRook
    }) as Rook
  }

  get queenSideRookHasMoved() {
    if(!this.queenSideRook) return true

    return this.queenSideRook.hasMoved
  }

  
  clone() {
    return new Player(this.color)
  }
  toString() {
    return `${this.color} player, pieces: ${this.pieces}, in check: ${this.inCheck}, in stalemate: ${this.inStalemate}, in checkmate: ${this.inCheckmate}`
  }
}