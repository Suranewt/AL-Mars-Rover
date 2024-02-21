import {Point} from "./point";

export class Orientation {
    public static readonly Nord: Orientation = new Orientation(false, false);
    public static readonly Sud: Orientation = new Orientation(true, false);
    public static readonly Est: Orientation = new Orientation(false, true);
    public static readonly Ouest: Orientation = new Orientation(true, true);

    private readonly estInversé: boolean;
    private readonly estLongitudinal: boolean;

    private constructor(estInversé: boolean, estLongitudinal: boolean) {
        this.estInversé = estInversé;
        this.estLongitudinal = estLongitudinal;
    }

    Déplacer(position: Point) {
        if(this.estLongitudinal) {
            if(this.estInversé) return position.DécrémenterLongitude()
            else return position.IncrémenterLongitude();
        }

        if(this.estInversé) return position.DécrémenterLatitude();
        return position.IncrémenterLatitude();
    }

    Opposée() {
        if(this == Orientation.Nord)
            return Orientation.Sud;
        if(this == Orientation.Ouest)
            return Orientation.Est;
        return Orientation.Nord;
        throw new Error("Orientation inconnue");
        // TODO : Cas Ouest
    }
    AGauche(): Orientation {
        if (this === Orientation.Nord) return Orientation.Ouest;
        if (this === Orientation.Ouest) return Orientation.Sud;
        if (this === Orientation.Sud) return Orientation.Est;
        if (this === Orientation.Est) return Orientation.Nord;
        throw new Error("Orientation inconnue");
    }

    ADroite(): Orientation {
        if (this === Orientation.Nord) return Orientation.Est;
        if (this === Orientation.Est) return Orientation.Sud;
        if (this === Orientation.Sud) return Orientation.Ouest;
        if (this === Orientation.Ouest) return Orientation.Nord;
        throw new Error("Orientation inconnue");
    }
}