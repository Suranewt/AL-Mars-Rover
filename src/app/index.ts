type Direction = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST';

class Rover {
  private x: number;
  private y: number;
  private direction: Direction;

  constructor(x: number, y: number, direction: Direction) {
    this.x = x;
    this.y = y;
    this.direction = direction;
  }

  public executeCommand(command: string) {
    switch (command.toLowerCase()) {
      case 'avance':
        this.moveForward();
        break;
      case 'recule':
        this.moveBackward();
        break;
      case 'gauche':
        this.turnLeft();
        break;
      case 'droite':
        this.turnRight();
        break;
      default:
        console.log("Commande inconnue:", command);
    }
  }

  private moveForward() {
    switch (this.direction) {
      case 'NORTH':
        this.y += 1;
        break;
      case 'SOUTH':
        this.y -= 1;
        break;
      case 'EAST':
        this.x += 1;
        break;
      case 'WEST':
        this.x -= 1;
        break;
    }
  }

  private moveBackward() {
    switch (this.direction) {
      case 'NORTH':
        this.y -= 1;
        break;
      case 'SOUTH':
        this.y += 1;
        break;
      case 'EAST':
        this.x -= 1;
        break;
      case 'WEST':
        this.x += 1;
        break;
    }
  }

  private turnLeft() {
    const directions: Direction[] = ['NORTH', 'WEST', 'SOUTH', 'EAST'];
    this.direction = directions[(directions.indexOf(this.direction) + 1) % 4];
  }

  private turnRight() {
    const directions: Direction[] = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
    this.direction = directions[(directions.indexOf(this.direction) + 1) % 4];
  }

  public getStatus() {
    return `Position: (${this.x}, ${this.y}), Direction: ${this.direction}`;
  }
}


const rover = new Rover(0, 0, 'NORTH');
console.log(rover.getStatus()); //  initial state

rover.executeCommand('avance');
console.log(rover.getStatus()); 

rover.executeCommand('droite');
rover.executeCommand('avance');
console.log(rover.getStatus()); 

rover.executeCommand('gauche');
console.log(rover.getStatus()); 
