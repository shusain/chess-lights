import { ChessBoard } from "../ChessBoard";
import { ChessTile } from "../ChessTile";
import { ChessPiece } from "./ChessPiece";

export default class King extends ChessPiece {
  type = () => this.color=="black" ?  "♚" : "♔";
  
  hasMoved:boolean;

  findValidMoves(boardState:ChessBoard): Array<{ x: number; y: number; }> {
    const validPositions:Array<{x:number, y:number}> = []

    const myPos = this.getPosition();

    let tileOneAbove = boardState.getTileAtPosition(myPos.x, myPos.y+this.getDirection())
    let tileOneBelow = boardState.getTileAtPosition(myPos.x, myPos.y-this.getDirection())
    let tileOneLeft = boardState.getTileAtPosition(myPos.x-1, myPos.y)
    let tileOneRight = boardState.getTileAtPosition(myPos.x+1, myPos.y)
    let tileTL = boardState.getTileAtPosition(myPos.x+this.getDirection(), myPos.y+this.getDirection())
    let tileBL = boardState.getTileAtPosition(myPos.x+this.getDirection(), myPos.y-this.getDirection())
    let tileTR = boardState.getTileAtPosition(myPos.x-this.getDirection(), myPos.y+this.getDirection())
    let tileBR = boardState.getTileAtPosition(myPos.x-this.getDirection(), myPos.y-this.getDirection())

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