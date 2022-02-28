export class ChessTile {
    id: number
    y: number
    x: number
    isOn: boolean
    prevLight: ChessTile
    nextLight: ChessTile
    constructor(id, x, y, isOn=false) {
        this.id = id
        this.x = x
        this.y = y
        this.isOn = isOn
    }
}