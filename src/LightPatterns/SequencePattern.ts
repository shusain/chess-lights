import ChessBoard from "../ChessBoard";
import ILightPattern from "./ILightPattern";

export class SequencePattern implements ILightPattern {
    firstRun = true
    constructor() {
    }
    updatePattern(currentBoard:ChessBoard): void {
        if(this.firstRun) {
            currentBoard.turnOffAllTileLights()
            currentBoard.flatTileList[0].isOn = true
            this.firstRun = false
        }
        let currentlyLit = currentBoard.findCurrentlyLit()
        
        if(currentlyLit.length > 0) {

            for (let i = currentlyLit.length - 1; 0 <= i; i--) {
                const lightData = currentlyLit[i];
                
                lightData.isOn = false;
                lightData.nextLight.isOn = true;
            }
        }
    }
}