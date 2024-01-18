import Bishop from "./ChessPieces/Bishop";
import ChessTile from "./ChessTile"
import Knight from "./ChessPieces/Knight";
import Pawn from "./ChessPieces/Pawn";
import Rook from "./ChessPieces/Rook";
import Queen from "./ChessPieces/Queen";
import King from "./ChessPieces/King";
import ChessPiece from "./ChessPieces/ChessPiece";
import Player from "./Player";
import ILightPattern from "./LightPatterns/ILightPattern";

type BoardPosition = {
  x:number
  y:number
}

/**
 * Builds the board and keeps track of the game state (selected piece, current player etc)
 * 
 * The board is an x/y grid drawn top to bottom left to right
 */
export default class ChessBoard {
  redraw: boolean = true
  boardTiles: Array<Array<ChessTile>> = []
  flatTileList: Array<ChessTile> = []
  players: Array<Player> = []
  counter = 0
  selectedPiece: ChessPiece

  get currentPlayersTurn(): "white" | "black" {
    return this.currentPlayer.color
  }
  currentPlayer: Player
  get whitePlayer() {
    return this.players[0]
  }
  get blackPlayer() {
    return this.players[1]
  }

  constructor(private targetElement:string, autoSetupPieces:boolean = true) {
    this.setupDataModel()
    if(autoSetupPieces)
      this.setupPiecesOnBoard()
  }

  /**
   * 
   * @param x Horizontal offset from 0 for tile to get (0-7)
   * @param y Vetical offset from 0 for tile to get (0-7)
   * @returns A ChessTile if one exists at the position or null if the position is out of bounds
   */
  getTileAtPosition(x: number, y: number): ChessTile | null {
    try {
      return this.boardTiles[y][x];
    } catch (e) {
      return null
    }
  }

  /**
   * 
   * @param x Horizontal offset from 0 for Piece to get (0-7)
   * @param y Vertical offset from 0 for Piece to get (0-7)
   * @returns Piece on tile at given position or null if no piece or invalid tile
   */
  getPieceAtPosition(x: number, y: number): ChessPiece | null {
    try {
      return this.boardTiles[y][x].currentPiece
    } catch (e) {
      return null
    }
  }

  /**
   * 
   * @param x Horizontal offset from 0 for Piece to select (0-7)
   * @param y Vertical offset from 0 for Piece to select (0-7)
   * @returns The selected piece if a piece existed on the tile at the given position or null if no piece or tile at position
   */
  selectPiece(x: number, y: number): ChessPiece | null {
    // Don't return a piece if a tile has a piece, but the piece isn't the same color as the current player
    this.selectedPiece = this.getPieceAtPosition(x, y)

    // console.log(`Selected Piece: ${this.selectedPiece} on board: ${this.targetElement}`)
    return this.selectedPiece
  }

  isPlayerInCheckAfterClonedBoardMove(fromTile: BoardPosition, toTile: BoardPosition):boolean {
    let clonedBoardState = this.clone()
    clonedBoardState.movePiecePosition(fromTile, toTile)
    clonedBoardState.redraw = true
    clonedBoardState.updateDisplay()
    return clonedBoardState.checkIfPlayerIsInCheck()
  }

  /**
   * Method will move a piece from one tile to another so long as the move
   * doesn't put or leave the current player's king in check.
   * 
   * @param fromTile The tile to move the piece from
   * @param toTile The tile to move the piece to
   * @returns [boolean] true if the piece was moved false if it was not
   */
  movePiece(fromTile: ChessTile, toTile: ChessTile, withChecking:boolean=true): boolean {
    console.log(`moving piece from: ${fromTile}, to: ${toTile} on board: ${this.targetElement}`)

    // Cloning the current board so can simulate the move and see if the
    // current players king is left in check
    if(withChecking)
    {
      let willMovePutPlayerIntoCheck = this.isPlayerInCheckAfterClonedBoardMove(fromTile, toTile)
      console.log(`will move leave player in check ${willMovePutPlayerIntoCheck}`)
  
      if(willMovePutPlayerIntoCheck) return false
    }
    

    if(toTile.currentPiece) {
      if(toTile.currentPiece.color=="white")
      this.players[0].pieces = this.players[0].pieces.filter(piece => piece!= toTile.currentPiece)
      if(toTile.currentPiece.color=="black")
      this.players[1].pieces = this.players[1].pieces.filter(piece => piece!= toTile.currentPiece)
    }
    toTile.currentPiece = fromTile.currentPiece

    if (toTile.currentPiece instanceof Pawn) {
      toTile.currentPiece.hasMoved = true
      if(toTile.y == 0 || toTile.y==7) {
        let theNewQueen = new Queen(this.boardTiles, toTile.y, toTile.x, toTile.currentPiece.color)
        this.currentPlayer.pieces.splice(this.currentPlayer.pieces.indexOf(toTile.currentPiece), 1, theNewQueen)
        toTile.currentPiece = theNewQueen
      }
    }

    fromTile.currentPiece = null
    toTile.currentPiece.currentTile = toTile


    return true
  }

  // This method doesn't depend on being passed the tile itself necessarily it
  // will use the given position to find the 
  movePiecePosition(fromPosition: BoardPosition, toPosition: BoardPosition) {
    let fromTile = this.getTileAtPosition(fromPosition.x, fromPosition.y)
    let toTile = this.getTileAtPosition(toPosition.x, toPosition.y)

    this.movePiece(fromTile, toTile, false)
  }

  /**
   * Sets the isValidPosition to false for all tiles
   */
  markAllInvalid() {
    this.flatTileList.forEach(light => light.isValidPosition = false)
  }

  /**
   * Sets up the initial data model(s) for the tiles, creates all the rows
   * that make up the grid of tiles and populates each row with tiles
   */
  setupDataModel() {
    for (let y = 0; y < 8; y++) {
      this.makeRow(y)
    }

    // setup link list references between objects
    let prevLight
    for (let i = 0; i < this.flatTileList.length; i++) {
      const currentLight = this.flatTileList[i];
      currentLight.prevLight = prevLight
      if (i < this.flatTileList.length - 1) {
        currentLight.nextLight = this.flatTileList[i + 1]
      }
    }

    this.flatTileList[0].prevLight = this.flatTileList[this.flatTileList.length - 1]
    this.flatTileList[this.flatTileList.length - 1].nextLight = this.flatTileList[0]
  }

  setupPiecesOnBoard() {
    // White back row
    let whiteRook1 = new Rook(this.boardTiles, 0, 0)
    let whiteRook2 = new Rook(this.boardTiles, 0, 7)

    let whiteKnight1 = new Knight(this.boardTiles, 0, 1)
    let whiteKnight2 = new Knight(this.boardTiles, 0, 6)

    let whiteBishop1 = new Bishop(this.boardTiles, 0, 2)
    let whiteBishop2 = new Bishop(this.boardTiles, 0, 5)

    let whiteQueen = new Queen(this.boardTiles, 0, 3)
    let whiteKing = new King(this.boardTiles, 0, 4)

    // Black back row
    let blackRook1 = new Rook(this.boardTiles, 7, 0, "black")
    let blackRook2 = new Rook(this.boardTiles, 7, 7, "black")

    let blackKnight1 = new Knight(this.boardTiles, 7, 1, "black")
    let blackKnight2 = new Knight(this.boardTiles, 7, 6, "black")

    let blackBishop1 = new Bishop(this.boardTiles, 7, 2, "black")
    let blackBishop2 = new Bishop(this.boardTiles, 7, 5, "black")

    let blackQueen = new Queen(this.boardTiles, 7, 3, "black")
    let blackKing = new King(this.boardTiles, 7, 4, "black")

    const whitePawns = []
    const blackPawns = []

    for (let x = 0; x < 8; x++) {
      // White pawns
      const whitePawn = new Pawn(this.boardTiles, 1, x)
      whitePawns.push(whitePawn)

      // Black pawns
      const blackPawn = new Pawn(this.boardTiles, 6, x, "black")
      blackPawns.push(blackPawn)
    }

    const player1 = new Player("white")
    player1.pieces = [whiteRook1, whiteRook2, whiteKnight1, whiteKnight2, whiteBishop1, whiteBishop2, whiteQueen, whiteKing, ...whitePawns]

    const player2 = new Player("black")
    player2.pieces = [blackRook1, blackRook2, blackKnight1, blackKnight2, blackBishop1, blackBishop2, blackQueen, blackKing, ...blackPawns]

    this.players = [player1, player2]

    this.currentPlayer = player1
  }

  changeCurrentPlayer() {
    this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0];
    console.log(`Switched players is now ${this.currentPlayer} turn`)
  }

  makeRow(rowNum: number) {
    this.boardTiles[rowNum] = []

    for (let x = 0; x < 8; x++) {
      const newLightObject = new ChessTile(this.counter++, x, rowNum)

      this.boardTiles[rowNum].push(newLightObject)

      this.flatTileList.push(newLightObject)
    }
  }

  checkIfPlayerIsInCheck(targetPlayer:Player = this.currentPlayer):boolean {
    const otherPlayer = this.whitePlayer == targetPlayer ? this.blackPlayer : this.whitePlayer

    let kingIsInCheck = false
    otherPlayer.pieces.forEach(piece => {
      const validMoves = piece.findValidMoves(this)
      // If king is in check
      if(targetPlayer.king && validMoves.find(val => val.x == targetPlayer.king.currentTile.x && val.y == targetPlayer.king.currentTile.y) ) {
        kingIsInCheck = true
      }
    })
    return kingIsInCheck
  }

  /**
   * Will see if moving any of the target player's pieces will result in the
   * player no longer being in check, will be called only if the target players
   * king is already known to be in check currently
   * 
   * @param targetPlayer The player to see if cannot make a move to get out of
   * check mate
   */
  cannotMakeAnyMoveWithoutLeavingKingInCheck(targetPlayer:Player = this.currentPlayer) {
    // For each of the target players pieces we'll clone the board, make the valid move and see if the player
    // is in check on the cloned board.
    let anyMoveGetsKingOutofCheck = false
    targetPlayer.pieces.forEach(piece => {
      const clonedBoard = this.clone()
      const validMoves = piece.findValidMoves(clonedBoard)
      validMoves.forEach(move => {
        anyMoveGetsKingOutofCheck = anyMoveGetsKingOutofCheck || !clonedBoard.isPlayerInCheckAfterClonedBoardMove(piece.currentTile, move)
      })
    })
    return !anyMoveGetsKingOutofCheck
  }


  clone() {
    const clonedBoard = new ChessBoard('hypothetical-board', false)

    // Cloning players so can maniuplate their pieces in new board states
    clonedBoard.players = this.players.map(player=>player.clone())

    clonedBoard.currentPlayer = this.currentPlayer.color == "white" ? clonedBoard.whitePlayer : clonedBoard.blackPlayer


    // Cloning board tiles so can manipulate what piece is on what tile without 
    // effecting the actual game being played.
    clonedBoard.boardTiles = this.boardTiles.map<Array<ChessTile>>((rowOfTiles) => {
        const newRowOfTiles = rowOfTiles.map(singleTile => {
          const clonedTile = singleTile.clone()
          if(singleTile.currentPiece) {
            clonedTile.currentPiece = singleTile.currentPiece.clone(clonedBoard.boardTiles)
            if(clonedTile.currentPiece) {
              if(clonedTile.currentPiece.color == "black")
                clonedBoard.blackPlayer.pieces.push(clonedTile.currentPiece)
              if(clonedTile.currentPiece.color == "white")
                clonedBoard.whitePlayer.pieces.push(clonedTile.currentPiece)
            }
          }
          return clonedTile
        })
        return newRowOfTiles
    })
    clonedBoard.selectPiece(this.selectedPiece.currentTile.x, this.selectedPiece.currentTile.y)
    clonedBoard.tileClickHandler(clonedBoard.selectedPiece.currentTile)
    clonedBoard.drawInitialBoard()
    clonedBoard.updateDisplay()
    return clonedBoard
  }

  tileClickHandler(tile: ChessTile) {
    if (tile.isValidPosition) {
      if(this.movePiece(this.selectedPiece.currentTile, tile)) {
        this.turnOffAllTileLights();
        this.markAllInvalid();
        this.currentPlayer.inCheck = this.checkIfPlayerIsInCheck();
        console.log(`checking if current player ${this.currentPlayer} is in check`)
        // switching over to other player
        this.changeCurrentPlayer();
        // Checking if the new player is now in check.
        console.log(`checking if current player ${this.currentPlayer} is in check`)
        this.currentPlayer.inCheck = this.checkIfPlayerIsInCheck();
        if(this.currentPlayer.inCheck) {
          this.currentPlayer.inCheckmate = this.cannotMakeAnyMoveWithoutLeavingKingInCheck()
        } else {
          this.currentPlayer.inStalemate = this.cannotMakeAnyMoveWithoutLeavingKingInCheck()
        }
      }
    }
    else {
      this.markAllInvalid();
      let selectedPiece = this.selectPiece(tile.x, tile.y)
      let wasOn = tile.isOn;
      this.turnOffAllTileLights();

      if (selectedPiece && selectedPiece.color == this.currentPlayersTurn) {
        tile.isOn = !wasOn
        if (tile.isOn) {
          let validMoves = selectedPiece.findValidMoves(this)

          validMoves.forEach(validMove => {
            // Marking all the valid moves for the selected piece on the board
            let potentialMovePosition = this.getTileAtPosition(validMove.x, validMove.y)
            if(potentialMovePosition){
              potentialMovePosition.isValidPosition = true
              potentialMovePosition.isOn = true
            }
          })
        }
      }
    }

    this.redraw = true
  }
  

  /**
   * return Array of currently lit positions
   */
  findCurrentlyLit() {
    return this.flatTileList.filter(element => element.isOn)
  }

  /**
   * Sets the isOn property to false for all tiles
   */
  turnOffAllTileLights() {
    this.flatTileList.forEach(light => light.isOn = false)
  }

  
  /**
   * Called on an interval to update the DOM elements that represent the board
   * visually based on the board model
   */
  updateDisplay(lightMode:ILightPattern = null) {

    // If using a lighting mode then update the tile light pattern on each display update
    if (lightMode) {
      lightMode.updatePattern(this)
      this.redraw = true
    }

    // If chessboard marked for redraw (after moves) update all the tile styles and contents
    if(this.redraw) {
      let gameStatusText = ""

      if(this.whitePlayer.inCheck)
        gameStatusText += "White player is in check. "
      if(this.blackPlayer.inCheck)
        gameStatusText += "Black player is in check. "

      if(this.whitePlayer.inCheckmate)
        gameStatusText = "White player is in checkmate. GG"
      if(this.blackPlayer.inCheckmate)
        gameStatusText = "Black player is in checkmate. GG"

      if(this.whitePlayer.inStalemate || this.blackPlayer.inStalemate)
        gameStatusText = "Game is in stalemate. GG"

      document.getElementById('game-status').innerHTML = gameStatusText

      this.flatTileList.forEach(tile => {
  
        let curTileElm = document.getElementById(`${this.targetElement}-tile-${tile.id}`)
        const onOrOffTile = tile.isOn ? 'on' : 'off'
  
        const newClassName = `chess-tile ${onOrOffTile} tile-color-${tile.tileBaseColor}`
        if(curTileElm.className != newClassName)
        curTileElm.className = `chess-tile ${onOrOffTile} tile-color-${tile.tileBaseColor}`
  
        if (tile.currentPiece) {
          curTileElm.style.color = tile.currentPiece.color
        }
  
        let displayText = ""
        if (tile.currentPiece) {
          displayText = tile.currentPiece.pieceSymbol()
        }
  
        curTileElm.innerHTML = `${displayText}`
      })
      this.redraw = false
    }
  }

  /**
   * Clears out and rebuilds the DOM elements for the board based on the board model
   * deals with finding valid moves and highlighting cells on the board based on the
   * board model
   */
  drawInitialBoard() {
    let chessBoard = document.getElementById(this.targetElement)

    // Emptying out the elements from the board container
    while (chessBoard.firstChild) {
      chessBoard.removeChild(chessBoard.firstChild);
    }

    // Maps all the tiles row by row into DOM elements
    const boardRowDOMElms = this.boardTiles
      .map((tileRow) => {

        // Maps all the cells of a given row into DOM elements
        const cells = tileRow.map((tile) => {
          let tileDiv = document.createElement('div')
          tileDiv.className = `chess-tile ${tile.id % 2 == 0 ? 'even' : 'odd'}  ${tile.isOn ? 'on' : 'off'} tile-color-${tile.tileBaseColor}`
          tileDiv.id = `${this.targetElement}-tile-${tile.id}`

          tileDiv.addEventListener('click', () => { this.tileClickHandler(tile) })
          return tileDiv
        })
        let rowDiv = document.createElement('div')
        rowDiv.className = 'row'
        cells.forEach(cell => { rowDiv.appendChild(cell) })
        return rowDiv
      })
    boardRowDOMElms.forEach(boardRowDOMElm => chessBoard.appendChild(boardRowDOMElm))

  }
}