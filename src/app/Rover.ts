import { Orientation } from './Orientation';
import { Point } from './Point';

export class Rover {
    private _position: Point;
    private _orentation: Orientation;

    constructor(posX: number, posY: number, orientation: Orientation) {
        this._position = new Point(posX, posY);
        this._orentation = orientation;
    }

    /**
     * Avancer de n cases
     * @param n - Nombre de case(s) à avancer
     */
    public avancer(n: number) {
        switch (this._orentation) {
            case Orientation.Nord:
                this._position.incrementerY(n);
                break;

            case Orientation.Est:
                this._position.incrementerX(n);
                break;

            case Orientation.Sud:
                this._position.decrementerY(n);
                break;

            case Orientation.Ouest:
                this._position.decrementerX(n);
                break;
        }
    }

    /**
     * Reculer de n cases
     * @param n - Nombre de case(s) à reculer
     */
    public reculer(n: number) {
        switch (this._orentation) {
            case Orientation.Nord:
                this._position.decrementerY(n);
                break;

            case Orientation.Est:
                this._position.decrementerX(n);
                break;

            case Orientation.Sud:
                this._position.incrementerY(n);
                break;

            case Orientation.Ouest:
                this._position.incrementerX(n);
                break;
        }
    }

    /**
     * Tourner l'orientation du robot de 90° vers la gauche
     */
    public tournerGauche() {
        this._orentation =
            this._orentation - 1 < 0
                ? Orientation.Ouest
                : (this._orentation -= 1);
    }

    /**
     * Tourner l'orientation du robot de 90° vers la droite
     */
    public tournerDroite() {
        this._orentation =
            this._orentation + 1 > Orientation.Ouest
                ? Orientation.Nord
                : (this._orentation += 1);
    }

    /**
     * Récupérer la position du robot
     */
    public getPosition(): Point {
        return this._position;
    }
}
