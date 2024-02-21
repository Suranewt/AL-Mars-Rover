import { Point } from "./point";
import { Orientation } from "./orientation";
import { Obstacle } from "./obstacle";

export class Rover {
    private obstacles: Obstacle[] = [];
    public readonly Position: Point;
    public readonly Orientation: Orientation;

    public constructor(position: Point = new Point(), orientation: Orientation = Orientation.Nord) {
        this.Position = position;
        this.Orientation = orientation;
    }

    public setObstacles(obstacles: Obstacle[]) {
        this.obstacles = obstacles;
    }

    private isPathClear(position: Point): boolean {
        return !this.obstacles.some(obstacle => obstacle.Position.Latitude === position.Latitude && obstacle.Position.Longitude === position.Longitude);
    }

    public Avancer(): Rover {
        let nouvellePosition = this.Orientation.Déplacer(this.Position);
        if (this.isPathClear(nouvellePosition)) {
            return new Rover(nouvellePosition, this.Orientation);
        } else {
            console.log("Obstacle détecté! Mouvement annulé.");
            return this; // Ensure this instance is returned without position change
        }
    }
    
    public Reculer(): Rover {
        let nouvellePosition = this.Orientation.Opposée().Déplacer(this.Position);
        if (this.isPathClear(nouvellePosition)) {
            return new Rover(nouvellePosition, this.Orientation);
        } else {
            console.log("Obstacle détecté! Mouvement annulé.");
            return this; // Reste à la position actuelle si un obstacle est détecté
        }
    }

    public TournerAGauche(): Rover {
        return new Rover(this.Position, this.Orientation.AGauche());
    }

    public TournerADroite(): Rover {
        return new Rover(this.Position, this.Orientation.ADroite());
    }
}
