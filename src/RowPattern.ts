import { ChessBoard } from "./ChessBoard";
import { ILightPattern } from "./ILightPattern";

export class RowPattern implements ILightPattern {
    currentlyLitLightRow = 0
    updatePattern(currentBoard:ChessBoard): ChessBoard {
        currentBoard.turnOffAll()

        currentBoard.lightRows[this.currentlyLitLightRow].forEach(lightData => lightData.isOn = true)
        this.currentlyLitLightRow++
        if(this.currentlyLitLightRow >= currentBoard.lightRows.length) {
            this.currentlyLitLightRow = 0
        }
        return currentBoard
    }
}