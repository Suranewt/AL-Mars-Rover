import { point } from './point';

class Rover {

    private direction : String;;
    private point : String;


    public constructor (direction : String, x : number,y : number, point : String) {
        this.direction = direction;
        this.point = point;
    }

    public Avancer(direction : String, x : number,y : number, distance : number) {
        if (direction === "S") {
            y = y - distance;
        } else if (direction === "N") {
            y = y + distance;
        } else if (direction === "E") {
            x = x + distance;
        } else if (direction === "W") {
            x = x - distance;
        }

    }

    public Reculer(direction : String, x : number,y : number, distance : number) {
        if (direction ===  "S") {
            y = y + distance;
        } else if (direction === "N") {
            y = y - distance;
        } else if (direction === "E") {
            x = x - distance;
        } else if (direction === "W") {
            x = x + distance;
        }

    }


    public turnLeft(direction: string) {
        if (direction === "N") {
            direction = "W";
        } else if (direction === "E") {
            direction = "N";
        } else if (direction === "S") {
            direction = "E";
        } else if (direction === "W") {
            direction = "S";
        }
    }

    public turnRight(direction: string) {
        if (direction === "N") {
            direction = "E";
        } else if (direction === "E") {
            direction = "S";
        } else if (direction === "S") {
            direction = "W";
        } else if (direction === "W") {
            direction = "N";
        }
    }

    public getPosition(x: number, y: number, direction: string) {
        return "position X :" + x + "position Y :" + y + "Direction :" + direction;
    }

}