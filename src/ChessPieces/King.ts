import { ChessBoard } from "../ChessBoard";
import { ChessTile } from "../ChessTile";
import { ChessPiece } from "./ChessPiece";

export default class King extends ChessPiece {
  pieceSymbol = () => this.color=="black" ?  "♚" : "♔";
  
  hasMoved:boolean;

  findValidMoves(boardState:ChessBoard): Array<{ x: number; y: number; }> {
    const validPositions:Array<{x:number, y:number}> = []

    const {myPos, direction} = this;

    // Cardinal positions
    let tileOneAbove = boardState.getTileAtPosition(myPos.x, myPos.y+direction)
    let tileOneBelow = boardState.getTileAtPosition(myPos.x, myPos.y-direction)
    let tileOneLeft = boardState.getTileAtPosition(myPos.x-1, myPos.y)
    let tileOneRight = boardState.getTileAtPosition(myPos.x+1, myPos.y)

    // Diaganol moves
    let tileTL = boardState.getTileAtPosition(myPos.x+direction, myPos.y+direction)
    let tileBL = boardState.getTileAtPosition(myPos.x+direction, myPos.y-direction)
    let tileTR = boardState.getTileAtPosition(myPos.x-direction, myPos.y+direction)
    let tileBR = boardState.getTileAtPosition(myPos.x-direction, myPos.y-direction)

    const addTilePositionIfValid = (tile:ChessTile) => {
      if(tile && (!tile.currentPiece || (tile.currentPiece && tile.currentPiece.color!=this.color))) {
        validPositions.push({x:tile.x,y:tile.y})
      }
    }

    [tileOneAbove, tileOneBelow, tileOneLeft, tileOneRight, tileTL, tileBL, tileTR, tileBR].forEach(tile => {
      addTilePositionIfValid(tile)
    })
    
    return validPositions
  }
}