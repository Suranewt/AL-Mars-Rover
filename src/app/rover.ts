class Rover {

    private x : number;
    private y : number;
    private direction : String;;
    private position : String;


    public constructor (direction : String, x : number,y : number, position : String) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.position = position;
    }

    public Avancer(direction : String, x : number,y : number) {
        if (direction === "S") {
            y--;
        } else if (direction === "N") {
            y++;
        } else if (direction === "E") {
            x++;
        } else if (direction === "W") {
            x--;
        }

    }

    public Reculer(direction : String, x : number,y : number) {
        if (direction ===  "S") {
            y++;
        } else if (direction === "N") {
            y--;
        } else if (direction === "E") {
            x--;
        } else if (direction === "W") {
            x++;
        }

    }


    private turnLeft(direction: string) {
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

    private turnRight(direction: string) {
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
        return x + " " + y + " " + direction;
    }

}