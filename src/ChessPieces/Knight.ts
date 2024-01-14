import ChessBoard from "../ChessBoard";
import ChessTile from "../ChessTile";
import ChessPiece from "./ChessPiece";

export default class Knight extends ChessPiece {
  pieceSymbol = () => this.color=="black" ?  "♞" : "♘";
  
  hasMoved:boolean;

  findValidMoves(boardState:ChessBoard): Array<{ x: number; y: number; }> {
    const validPositions:Array<{x:number, y:number}> = []
    const {myPos} = this
    
    let tileOne = boardState.getTileAtPosition(myPos.x+2, myPos.y+1)
    let tileTwo = boardState.getTileAtPosition(myPos.x+1, myPos.y+2)
    let tileThree = boardState.getTileAtPosition(myPos.x-2, myPos.y+1)
    let tileFour = boardState.getTileAtPosition(myPos.x-1, myPos.y+2)
    
    let tileFive = boardState.getTileAtPosition(myPos.x-2, myPos.y-1)
    let tileSix = boardState.getTileAtPosition(myPos.x-1, myPos.y-2)
    let tileSeven = boardState.getTileAtPosition(myPos.x+2, myPos.y-1)
    let tileEight = boardState.getTileAtPosition(myPos.x+1, myPos.y-2);

    [tileOne,tileTwo,tileThree,tileFour,tileFive,tileSix,tileSeven,tileEight].forEach(tile=>{
      // skip if the tile doesn't exist
      if(!tile) return;
      // 
      if(!tile.currentPiece || tile.currentPiece.color != this.color) {
        validPositions.push(tile)
      }
    })


    return validPositions
  }
  
  clone(boardTiles:Array<Array<ChessTile>>): ChessPiece {
    return new Knight(boardTiles, this.currentTile.y, this.currentTile.x, this.color)
  }
}