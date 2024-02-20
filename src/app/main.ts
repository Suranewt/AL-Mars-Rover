import { Orientation } from './Orientation';
import { Rover } from './Rover';

const ROVER = new Rover(0, 0, Orientation.Nord);

ROVER.avancer(8);
ROVER.tournerDroite();
ROVER.reculer(4);

console.log(ROVER.getPosition());
