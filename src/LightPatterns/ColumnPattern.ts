import ChessBoard from "../ChessBoard";
import ILightPattern from "./ILightPattern";

export class RowPattern implements ILightPattern {
    currentlyLitLightRow = 0
    updatePattern(currentBoard:ChessBoard): void {
        currentBoard.turnOffAllTileLights()

        currentBoard.boardTiles[this.currentlyLitLightRow].forEach(lightData => lightData.isOn = true)
        this.currentlyLitLightRow++
        if(this.currentlyLitLightRow >= currentBoard.boardTiles.length) {
            this.currentlyLitLightRow = 0
        }
    }
}