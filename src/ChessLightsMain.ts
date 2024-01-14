import ChessBoard from "./ChessBoard"
import ILightPattern from "./LightPatterns/ILightPattern"
import { RowPattern } from "./LightPatterns/RowPattern"
import { SequencePattern } from "./LightPatterns/SequencePattern"
import { SnakePattern } from "./LightPatterns/SnakePattern"

export class ChessLightsMain {
  chessBoard: ChessBoard
  mode: ILightPattern

  constructor() {
    // Waiting for page to be loaded to get the elements on the page and add
    // listeners/setup the game
    window.addEventListener('DOMContentLoaded', () => {

      // Listener for the drop down menu
      document.getElementById('mode').addEventListener('change', (event) => {
        this.changeMode(event)
      })

      setInterval(() => {
        this.chessBoard.updateDisplay(this.mode)
      }, 100)

      this.chessBoard = new ChessBoard('chess-board')
      this.chessBoard.drawInitialBoard()
      // this.mode = new SequencePattern()
    });
  }


  /**
   * Method handles drop down change events and creates the corresponding light
   * pattern/sequence handler.  Used primarily for prototyping LED patterns for
   * LED chess board.
   * 
   * @param event an event from the select/options dropdown, the event.target.value is used to determine which Pattern instance to create
   */
  changeMode(event) {
    switch (event.target.value) {
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
  
}
new ChessLightsMain()