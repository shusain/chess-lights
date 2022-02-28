import { ChessBoard } from "./ChessBoard"
import { ILightPattern } from "./ILightPattern"
import { RowPattern } from "./RowPattern"
import { SequencePattern } from "./SequencePattern"
import { SnakePattern } from "./SnakePattern"

export class ChessLightsMain {
    chessBoard:ChessBoard
    mode: ILightPattern

    constructor() {
        window.addEventListener('DOMContentLoaded', (event) => {
            document.getElementById('mode').addEventListener('change', (event) => {
                console.log((<HTMLSelectElement>document.getElementById('mode')).value)
                this.changeMode(event)
            })
            console.log('DOM fully loaded and parsed');
            setInterval(() => {
                this.updateDisplay()
            }, 100)

            this.chessBoard = new ChessBoard()
            this.chessBoard.setupDataModel()
            this.buildBoard()
            this.mode = new SequencePattern()
        });
    }

    updateDisplay() {
        if(this.mode) {
            this.chessBoard = this.mode.updatePattern(this.chessBoard)
        }

        this.chessBoard.flatLightList.forEach(lightData => {
            document.getElementById(`tile-${lightData.id}`).className = `chess-tile ${lightData.id % 2 == 0 ? 'even':'odd'}  ${lightData.isOn ? 'on':'off'}`
        })
    }

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

    buildBoard() {
        let chessBoard = document.getElementById('chess-board')
        
        while (chessBoard.firstChild) {
            chessBoard.removeChild(chessBoard.firstChild);
        }

        const lightRowDOMElms = this.chessBoard.lightRows
            .map((lightDataRow) => {
                const cells = lightDataRow.map((lightData)=>{
                    let tileDiv = document.createElement('div')
                    tileDiv.className = `chess-tile ${lightData.id % 2 == 0 ? 'even':'odd'}  ${lightData.isOn ? 'on':'off'}`
                    tileDiv.id=`tile-${lightData.id}`
                    tileDiv.innerHTML = `${lightData.id}`
                    tileDiv.addEventListener('click', ()=>{
                        lightData.isOn = !lightData.isOn;
                    })
                    return tileDiv
                })
                let rowDiv = document.createElement('div')
                rowDiv.className = 'row'
                cells.forEach(cell => {rowDiv.appendChild(cell)})
                return rowDiv
            })
        lightRowDOMElms.forEach(lightRowDOMElm => chessBoard.appendChild(lightRowDOMElm))
        
    }
}
new ChessLightsMain()