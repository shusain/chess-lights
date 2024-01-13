import Bishop from "./ChessPieces/Bishop";
import ChessTile from "./ChessTile"
import Knight from "./ChessPieces/Knight";
import Pawn from "./ChessPieces/Pawn";
import Rook from "./ChessPieces/Rook";
import Queen from "./ChessPieces/Queen";
import King from "./ChessPieces/King";
import ChessPiece from "./ChessPieces/ChessPiece";
import Player from "./Player";

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

  constructor() {
    this.setupDataModel()
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
    console.log(this.selectedPiece)
    return this.selectedPiece
  }

  /**
   * Method will move a piece from one tile to another so long as the move
   * doesn't put or leave the current player's king in check.
   * 
   * @param fromTile The tile to move the piece from
   * @param toTile The tile to move the piece to
   * @returns [boolean] true if the piece was moved false if it was not
   */
  movePiece(fromTile: ChessTile, toTile: ChessTile): boolean {
    console.log('moving piece', fromTile, toTile)

    toTile.currentPiece = fromTile.currentPiece

    if (toTile.currentPiece instanceof Pawn) {
      toTile.currentPiece.hasMoved = true
    }

    fromTile.currentPiece = null
    toTile.currentPiece.currentTile = toTile

    return true
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
  }

  makeRow(rowNum: number) {
    this.boardTiles[rowNum] = []

    for (let x = 0; x < 8; x++) {
      const newLightObject = new ChessTile(this.counter++, x, rowNum)

      this.boardTiles[rowNum].push(newLightObject)

      this.flatTileList.push(newLightObject)
    }
  }

  checkIfCurrentPlayerIsInCheck() {
    this.checkIfPlayerIsInCheck(this.currentPlayer)
  }

  checkIfPlayerIsInCheck(targetPlayer:Player) {
    const otherPlayer = this.whitePlayer == targetPlayer ? this.blackPlayer : this.whitePlayer

    otherPlayer.pieces.forEach(piece => {
      const validMoves = piece.findValidMoves(this)
      // If king is in check
      if(targetPlayer.king && validMoves.find(val => val.x == targetPlayer.king.currentTile.x && val.y == targetPlayer.king.currentTile.y) ) {
        alert("king in check")
      }
    })
  }

  /**
   * Will see if moving any of the target player's pieces will result in the
   * player no longer being in check
   * 
   * @param targetPlayer The player to see if cannot make a move to get out of
   * check mate
   */
  checkIfPlayerIsInCheckmate(targetPlayer:Player) {
    const otherPlayer = this.whitePlayer == targetPlayer ? this.blackPlayer : this.whitePlayer

    let currentBoardState = this.clone()
    otherPlayer.pieces.forEach(piece => {
      const validMoves = piece.findValidMoves(this)
      // If king is in check
      if(targetPlayer.king && validMoves.find(val => val.x == targetPlayer.king.currentTile.x && val.y == targetPlayer.king.currentTile.y) ) {
        alert("king in check")
      }
    })
  }

  clone() {
    let clonedBoard = new ChessBoard()

    // Just copying the players since we only need them for reference of their pieces
    // and won't be changing the players pieces when checking board states
    clonedBoard.players = this.players

    return clonedBoard
  }

  tileClickHandler(tile: ChessTile) {
    if (tile.isValidPosition) {
      this.movePiece(this.selectedPiece.currentTile, tile)
      this.turnOffAllTileLights();
      this.markAllInvalid();
      this.changeCurrentPlayer();
      this.checkIfCurrentPlayerIsInCheck();
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
            this.getTileAtPosition(validMove.x, validMove.y).isValidPosition = true
            this.getTileAtPosition(validMove.x, validMove.y).isOn = true
          })
        }
      }
    }

    this.redraw = true

  }
}