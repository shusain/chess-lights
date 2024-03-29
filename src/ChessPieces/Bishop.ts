import ChessBoard from "../ChessBoard";
import ChessTile from "../ChessTile";
import ChessPiece from "./ChessPiece";

export default class Bishop extends ChessPiece {
  get fenType(): string {
    return 'B'
  }
  pieceSymbol = () => this.color=="black" ?  "♝" : "♗";
  
  hasMoved:boolean;

  findValidMoves(boardState:ChessBoard): Array<{ x: number; y: number; }> {
    const validPositions:Array<{x:number, y:number}> = []
    const {myPos} = this

    
    // All spaces to other "diaganol 1"
    for(let i=myPos.x+1, j=myPos.y+1; i < 8 && j<8; i++, j++) {
      let curTile = boardState.getTileAtPosition(i, j)
      // If we run into the same color stop
      if(curTile.currentPiece && curTile.currentPiece.color == this.color)
      break;

      // If we run into a piece with a different color include it and stop
      if(curTile.currentPiece && curTile.currentPiece.color != this.color) {
        validPositions.push(curTile)
        break
      }
      else if(curTile) {
        validPositions.push(curTile)
      }
    }
    
    // All spaces to other "diaganol 2"
    for(let i=myPos.x-1, j=myPos.y-1; i >= 0 && j >= 0; i--, j--) {
      let curTile = boardState.getTileAtPosition(i, j)
      // If we run into the same color stop
      if(curTile.currentPiece && curTile.currentPiece.color == this.color)
      break;

      // If we run into a piece with a different color include it and stop
      if(curTile.currentPiece && curTile.currentPiece.color != this.color) {
        validPositions.push(curTile)
        break
      }
      else if(curTile) {
        validPositions.push(curTile)
      }
    }

    
    // All spaces to other "diaganol 3"
    for(let i=myPos.x+1, j=myPos.y-1; i < 8 && j >= 0; i++, j--) {
      let curTile = boardState.getTileAtPosition(i, j)
      // If we run into the same color stop
      if(curTile.currentPiece && curTile.currentPiece.color == this.color)
      break;

      // If we run into a piece with a different color include it and stop
      if(curTile.currentPiece && curTile.currentPiece.color != this.color) {
        validPositions.push(curTile)
        break
      }
      else if(curTile) {
        validPositions.push(curTile)
      }
    }

    // All spaces to other "diaganol 4"
    for(let i=myPos.x-1, j=myPos.y+1; i >= 0 && j < 8; i--, j++) {
      let curTile = boardState.getTileAtPosition(i, j)
      // If we run into the same color stop
      if(curTile.currentPiece && curTile.currentPiece.color == this.color)
      break;

      // If we run into a piece with a different color include it and stop
      if(curTile.currentPiece && curTile.currentPiece.color != this.color) {
        validPositions.push(curTile)
        break
      }
      else if(curTile) {
        validPositions.push(curTile)
      }
    }
    return validPositions

  }

  clone(boardTiles:Array<Array<ChessTile>>): ChessPiece {
    return new Bishop(boardTiles, this.currentTile.y,this.currentTile.x, this.color)
  }
}