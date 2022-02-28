import { ChessTile } from "./ChessTile"

export class ChessBoard {
    lightRows = []
    flatLightList:Array<ChessTile> = []
    counter = 0

    setupDataModel() {
        for (let y = 0; y < 8; y++) {
            this.makeRow(y)
        }

        // setup link list references between objects
        let prevLight
        for (let i = 0; i < this.flatLightList.length; i++) {
            const currentLight = this.flatLightList[i];
            currentLight.prevLight = prevLight
            if(i < this.flatLightList.length - 1) {
                currentLight.nextLight = this.flatLightList[i+1]
            }
        }

        this.flatLightList[0].prevLight = this.flatLightList[this.flatLightList.length - 1]
        this.flatLightList[this.flatLightList.length - 1].nextLight = this.flatLightList[0]
        this.flatLightList[0].isOn = true
    }
    
    /**
     * return Array of currently lit positions
     */
    findCurrentlyLit() {
        return this.flatLightList.filter(element => element.isOn )
    }

    turnOffAll() {
        this.flatLightList.forEach(light => light.isOn = false)
    }

    makeRow(rowNum) {
        this.lightRows[rowNum] = []

        for (let x = 0; x < 8; x++) {
            const newLightObject = new ChessTile(this.counter++, x, rowNum)

            this.lightRows[rowNum].push(newLightObject)
            this.flatLightList.push(newLightObject)
        }
    }
}