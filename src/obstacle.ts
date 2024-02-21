import { Point } from "./point";

export class Obstacle {
  public readonly Position: Point;

  constructor(position: Point) {
    this.Position = position;
  }
}