import ChessPiece from "./ChessPieces/ChessPiece";
import {getFile, getRank} from "./ChessPieces/util"

export default class ChessTile {
    id: number
    y: number
    x: number
    
    isValidPosition: boolean
    canKingSideCastle: boolean
    canQueenSideCastle: boolean

    prevLight: ChessTile;
    nextLight: ChessTile;

    currentPiece:ChessPiece|null;

    get tileBaseColor () {
        return (this.id+(this.y%2))%2==0 ? "black" : "white"
    }

    constructor(id, x, y, public isOn=false, public hue=0, public saturation=100, public brightness=50) {
        this.id = id
        this.x = x
        this.y = y
    }

    // Just clones the object with properties needed for checking valid positions
    // for checking hypothetical board states
    clone() {
        return new ChessTile(this.id, this.x, this.y)
    }
    toString() {
        return `${getFile(this.x)}${getRank(this.y)} with Piece ${this.currentPiece}`
    }
}