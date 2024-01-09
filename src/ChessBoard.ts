import Bishop from "./ChessPieces/Bishop";
import { ChessTile } from "./ChessTile"
import Knight from "./ChessPieces/Knight";
import Pawn from "./ChessPieces/Pawn";
import Rook from "./ChessPieces/Rook";
import Queen from "./ChessPieces/Queen";
import King from "./ChessPieces/King";
import { ChessPiece } from "./ChessPieces/ChessPiece";

export class ChessBoard {
    boardTiles: Array<Array<ChessTile>> = []
    flatTileList:Array<ChessTile> = []

    counter = 0
    currentPlayersTurn: "white" | "black" = "white"
    selectedPiece : ChessPiece

    getTileAtPosition(x:number, y:number): ChessTile|null {
        try {
            return this.boardTiles[y][x];
        } catch(e) {
            return null
        }
    }

    selectPiece(x:number, y:number): ChessPiece|null {
        // Don't return a piece if a tile has a piece, but the piece isn't the same color as the current player
        this.selectedPiece = this.getPieceAtPosition(x,y)
        console.log(this.selectedPiece)
        return this.selectedPiece
    }
    
    getPieceAtPosition(x:number, y:number): ChessPiece|null {
        try {
            return this.boardTiles[y][x].currentPiece
        } catch(e){
            return null
        }
    }

    movePiece(fromTile:ChessTile, toTile:ChessTile):void {
        console.log('moving piece',fromTile, toTile)

        toTile.currentPiece = fromTile.currentPiece
        
        if(toTile.currentPiece instanceof Pawn) {
            toTile.currentPiece.hasMoved = true
        }

        fromTile.currentPiece = null
        toTile.currentPiece.currentTile = toTile
    }

    setupDataModel() {
        for (let y = 0; y < 8; y++) {
            this.makeRow(y)
        }

        // setup link list references between objects
        let prevLight
        for (let i = 0; i < this.flatTileList.length; i++) {
            const currentLight = this.flatTileList[i];
            currentLight.prevLight = prevLight
            if(i < this.flatTileList.length - 1) {
                currentLight.nextLight = this.flatTileList[i+1]
            }
        }

        this.flatTileList[0].prevLight = this.flatTileList[this.flatTileList.length - 1]
        this.flatTileList[this.flatTileList.length - 1].nextLight = this.flatTileList[0]
    }

    setupPiecesOnBoard() {
        // White back row
        this.boardTiles[0][0].currentPiece = new Rook(this.boardTiles[0][0])
        this.boardTiles[0][7].currentPiece = new Rook(this.boardTiles[0][7])

        this.boardTiles[0][1].currentPiece = new Knight(this.boardTiles[0][1])
        this.boardTiles[0][6].currentPiece = new Knight(this.boardTiles[0][6])

        this.boardTiles[0][2].currentPiece = new Bishop(this.boardTiles[0][2])
        this.boardTiles[0][5].currentPiece = new Bishop(this.boardTiles[0][5])

        this.boardTiles[0][3].currentPiece = new Queen(this.boardTiles[0][3])
        this.boardTiles[0][4].currentPiece = new King(this.boardTiles[0][4])

        
        // Black back row
        this.boardTiles[7][0].currentPiece = new Rook(this.boardTiles[7][0], "black")
        this.boardTiles[7][7].currentPiece = new Rook(this.boardTiles[7][7], "black")

        this.boardTiles[7][1].currentPiece = new Knight(this.boardTiles[7][1], "black")
        this.boardTiles[7][6].currentPiece = new Knight(this.boardTiles[7][6], "black")

        this.boardTiles[7][2].currentPiece = new Bishop(this.boardTiles[7][2], "black")
        this.boardTiles[7][5].currentPiece = new Bishop(this.boardTiles[7][5], "black")

        this.boardTiles[7][4].currentPiece = new King(this.boardTiles[7][4], "black")
        this.boardTiles[7][3].currentPiece = new Queen(this.boardTiles[7][3], "black")

        for(let x=0; x < 8; x++) {
            // White pawns
            this.boardTiles[1][x].currentPiece = new Pawn(this.boardTiles[1][x])

            // Black pawns
            this.boardTiles[6][x].currentPiece = new Pawn(this.boardTiles[6][x], "black")
        }
    }
    
    /**
     * return Array of currently lit positions
     */
    findCurrentlyLit() {
        return this.flatTileList.filter(element => element.isOn )
    }

    turnOffAll() {
        this.flatTileList.forEach(light => light.isOn = false)
    }

    markAllInvalid() {
        this.flatTileList.forEach(light => light.isValidPosition = false)
    }

    makeRow(rowNum: number) {
        this.boardTiles[rowNum] = []

        for (let x = 0; x < 8; x++) {
            const newLightObject = new ChessTile(this.counter++, x, rowNum)

            this.boardTiles[rowNum].push(newLightObject)

            this.flatTileList.push(newLightObject)
        }
    }
}