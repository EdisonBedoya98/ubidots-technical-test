export class InvalidInputError extends Error {
  constructor() {
    super();
  }
}
class Position {
  constructor(x, y, bearing) {
    this.x = x;
    this.y = y;
    this.bearing = bearing;
  }
  setCoordinates(x, y) {
    this.x = x;
    this.y = y;
  }

  setPosition(x, y, bearing) {
    this.x = x;
    this.y = y;
    this.bearing = bearing;
  }

  get coordinates() {
    return [this.x, this.y];
  }
}
export class Robot {
  constructor() {
    this.allowedDirections = ["east", "west", "north", "south"];
    this.position = new Position(0, 0, "north");
  }

  orient(bearing) {
    if (!this.allowedDirections.includes(bearing))
      throw new InvalidInputError();

    this.position.bearing = bearing;
  }

  get bearing() {
    return this.position.bearing;
  }

  get coordinates() {
    return this.position.coordinates;
  }

  turnRight() {
    switch (this.position.bearing) {
      case "north":
        this.position.bearing = "east";
        break;
      case "east":
        this.position.bearing = "south";
        break;
      case "south":
        this.position.bearing = "west";
        break;
      case "west":
        this.position.bearing = "north";
        break;
    }
  }

  turnLeft() {
    switch (this.position.bearing) {
      case "north":
        this.position.bearing = "west";
        break;
      case "east":
        this.position.bearing = "north";
        break;
      case "south":
        this.position.bearing = "east";
        break;
      case "west":
        this.position.bearing = "south";
        break;
    }
  }

  at(x, y) {
    this.position.setCoordinates(x, y);
  }

  advance() {
    switch (this.position.bearing) {
      case "north":
        this.position.y += 1;
        break;
      case "east":
        this.position.x += 1;
        break;
      case "south":
        this.position.y -= 1;
        break;
      case "west":
        this.position.x -= 1;
        break;
    }
  }

  static instructions(instructions) {
    const instructionsArray = instructions.split("");
    const decodedInstructions = [];

    for (let index = 0; index < instructionsArray.length; index++) {
      switch (instructionsArray[index]) {
        case "L":
          decodedInstructions.push("turnLeft");
          break;
        case "R":
          decodedInstructions.push("turnRight");
          break;
        case "A":
          decodedInstructions.push("advance");
          break;
      }
    }
    return decodedInstructions;
  }

  place({ x, y, direction }) {
    this.position.setPosition(x, y, direction);
  }

  evaluate(instructions) {
    const decodedIntructions = Robot.instructions(instructions);
    for (let index = 0; index < decodedIntructions.length; index++) {
      switch (decodedIntructions[index]) {
        case "turnLeft":
          this.turnLeft();
          break;
        case "turnRight":
          this.turnRight();
          break;
        case "advance":
          this.advance();
          break;
      }
    }
  }
}
