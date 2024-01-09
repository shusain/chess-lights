import { ChessBoard } from "./ChessBoard"
import { ILightPattern } from "./ILightPattern"
import { RowPattern } from "./RowPattern"
import { SequencePattern } from "./SequencePattern"
import { SnakePattern } from "./SnakePattern"

export class ChessLightsMain {
    chessBoard:ChessBoard
    mode: ILightPattern

    constructor() {
        // Waiting for page to be loaded to get the elemnets on the page and add listeners/setup the game
        window.addEventListener('DOMContentLoaded', () => {

            // Listener for the drop down menu
            document.getElementById('mode').addEventListener('change', (event) => {
                this.changeMode(event)
            })

            setInterval(() => {
                this.updateDisplay()
            }, 100)

            this.chessBoard = new ChessBoard()
            this.chessBoard.setupDataModel()
            this.chessBoard.setupPiecesOnBoard()
            this.buildBoard()
            // this.mode = new SequencePattern()
        });
    }

    /**
     * Called on an interval to update the DOM elements that represent the board visually based on the board model
     */
    updateDisplay() {
        if(this.mode) {
            this.chessBoard = this.mode.updatePattern(this.chessBoard)
        }

        this.chessBoard.flatTileList.forEach(tile => {

            let curTileElm = document.getElementById(`tile-${tile.id}`)
            const evenOrOddTile = (tile.id+1) % 2 == 0 ? 'even':'odd'
            const onOrOffTile = tile.isOn ? 'on':'off'
            curTileElm.className = `chess-tile ${onOrOffTile} ${evenOrOddTile}`
            if(tile.isOn) {
                curTileElm.style.backgroundColor = `hsl(${tile.hue}, ${tile.saturation}%, ${tile.brightness}%)`
            } else {
                curTileElm.style.backgroundColor = tile.tileBaseColor
            }
            
            if(tile.currentPiece) {
                curTileElm.style.color = tile.currentPiece.color
            }

            let displayText = ""
            if(tile.currentPiece) {
                displayText = tile.currentPiece.type()
            }

            curTileElm.innerHTML = `${displayText}`
        })
    }

    /**
     * Method handles drop down change events and creates the corresponding light pattern/sequence handler.  Used primarily for prototyping LED patterns for LED chess board.
     * 
     * @param event an event from the select/options dropdown, the event.target.value is used to determine which Pattern instance to create
     */
    changeMode(event) {
        switch(event.target.value) {
            case 'snake': this.mode = new SnakePattern()
            break;
            case 'sequence': this.mode = new SequencePattern()
            break;
            case 'row': this.mode = new RowPattern()
            break;
            case 'none': this.mode = null
            break;
        }
    }

    /**
     * Clears out and rebuilds the DOM elements for the board based on the board model
     * deals with finding valid moves and highlighting cells on the board based on the
     * board model
     */
    buildBoard() {
        let chessBoard = document.getElementById('chess-board')
        
        while (chessBoard.firstChild) {
            chessBoard.removeChild(chessBoard.firstChild);
        }

        // Maps all the tiles row by row into DOM elements
        const boardRowDOMElms = this.chessBoard.boardTiles
            .map((tileRow) => {

                // Maps all the cells of a given row into DOM elements
                const cells = tileRow.map((tile) => {
                    let tileDiv = document.createElement('div')
                    tileDiv.className = `chess-tile ${tile.id % 2 == 0 ? 'even':'odd'}  ${tile.isOn ? 'on':'off'}`
                    tileDiv.id=`tile-${tile.id}`

                    let tileClickHandler = () => {
                        if(tile.isValidPosition) {
                            this.chessBoard.movePiece(this.chessBoard.selectedPiece.currentTile, tile)
                            this.chessBoard.turnOffAll();
                            this.chessBoard.markAllInvalid();
                            this.chessBoard.currentPlayersTurn = this.chessBoard.currentPlayersTurn === "white" ? "black" : "white";
                        }
                        else {
                            let selectedPiece = this.chessBoard.selectPiece(tile.x, tile.y)
                            let wasOn = tile.isOn;
                            
                            this.chessBoard.turnOffAll();
                            
                            if(selectedPiece) {
                                tile.isOn = !wasOn
                                if(tile.isOn) {
                                    this.chessBoard.markAllInvalid();
                                    let validMoves = selectedPiece.findValidMoves(this.chessBoard)
    
                                    validMoves.forEach(validMove => {
                                        // Marking all the valid moves for the selected piece on the board
                                        this.chessBoard.getTileAtPosition(validMove.x, validMove.y).isValidPosition = true
                                        this.chessBoard.getTileAtPosition(validMove.x, validMove.y).isOn = true
                                    })
                                }
                            }
                        }
                    }

                    tileDiv.addEventListener('click', tileClickHandler)
                    return tileDiv
                })
                let rowDiv = document.createElement('div')
                rowDiv.className = 'row'
                cells.forEach(cell => {rowDiv.appendChild(cell)})
                return rowDiv
            })
        boardRowDOMElms.forEach(boardRowDOMElm => chessBoard.appendChild(boardRowDOMElm))
        
    }
}
new ChessLightsMain()