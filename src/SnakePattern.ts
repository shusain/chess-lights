import ChessBoard from "./ChessBoard";
import ILightPattern from "./ILightPattern";

export class SnakePattern implements ILightPattern {
    snakeHead = 0
    snakeLength = 12
    updatePattern(currentBoard:ChessBoard): ChessBoard {
        currentBoard.turnOffAllTileLights()

        let snakeHeadElm = currentBoard.flatTileList[this.snakeHead]
        snakeHeadElm.isOn = true

        let curLight = snakeHeadElm
        for (let i = 0; i < this.snakeLength; i++) {
            curLight = curLight.nextLight
            curLight.isOn = true
            if(i==0)
                this.snakeHead = curLight.id
        }
        return currentBoard
    }
}