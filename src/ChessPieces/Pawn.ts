import { ChessBoard } from "../ChessBoard";
import { ChessTile } from "../ChessTile";
import { ChessPiece } from "./ChessPiece";

export default class Pawn extends ChessPiece {
  type = () => this.color=="black" ?  "♟︎" : "♙";
  
  public hasMoved:boolean;

  findValidMoves(boardState:ChessBoard): Array<{ x: number; y: number; }> {
    const validPositions:Array<{x:number, y:number}> = []
    let myPos = {
      x: this.currentTile.x,
      y: this.currentTile.y
    }

    let direction = this.color == "white" ? 1 : -1

    let tileTL = boardState.getTileAtPosition(myPos.x+this.getDirection(), myPos.y+this.getDirection())
    let tileTR = boardState.getTileAtPosition(myPos.x-this.getDirection(), myPos.y+this.getDirection())
    

    const addTilePositionIfValid = (tile:ChessTile) => {
      if(tile && (tile.currentPiece && tile.currentPiece.color!=this.color)) {
        validPositions.push({x:tile.x,y:tile.y})
      }
    }

    [tileTL,tileTR].forEach(tile=>addTilePositionIfValid(tile))

    let pieceOneAhead = boardState.getPieceAtPosition(myPos.x, myPos.y+direction)
    if(!pieceOneAhead) {
      validPositions.push({
        x: myPos.x,
        y: myPos.y+direction
      })
    }

    // Pawn can move two spots if hasn't moved yet
    if(!this.hasMoved) {
      let twoPiecesAhead = boardState.getPieceAtPosition(myPos.x, myPos.y+direction*2)
      if(!twoPiecesAhead) {
        validPositions.push({
          x: myPos.x,
          y: myPos.y+direction*2
        })
      }
    }

    return validPositions;
  }
}