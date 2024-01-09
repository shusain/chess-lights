import { ChessPiece } from "./ChessPieces/ChessPiece";

export class ChessTile {
    id: number
    y: number
    x: number
    
    isValidPosition: boolean

    prevLight: ChessTile;
    nextLight: ChessTile;

    currentPiece:ChessPiece|null;

    get tileBaseColor () {
        return (this.id+(this.y%2))%2==0 ? "green" : "blue"
    }

    constructor(id, x, y, public isOn=false, public hue=0, public saturation=100, public brightness=50) {
        this.id = id
        this.x = x
        this.y = y
    }
}