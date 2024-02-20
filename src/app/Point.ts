export class Point {
    private _posX: number;
    private _posY: number;

    constructor(x: number, y: number) {
        this._posX = x;
        this._posY = y;
    }

    public incrementerX(n: number) {
        this._posX += n;
    }

    public incrementerY(n: number) {
        this._posY += n;
    }

    public decrementerX(n: number) {
        this._posX -= n;
    }

    public decrementerY(n: number) {
        this._posY -= n;
    }

    public getPosX(): number {
        return this._posX;
    }

    public getPosY(): number {
        return this._posY;
    }
}
