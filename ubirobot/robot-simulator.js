export class InvalidInputError extends Error {
  constructor() {
    super();
  }
}

export class Robot {
  constructor() {
    this.allowedDirecions = ["east", "west", "north", "south"];
    this.robotPosition = [0, 0];
  }

  orient(direction) {
    if (!this.allowedDirecions.includes(direction))
      throw new InvalidInputError();

    this.robotBearing = direction;
  }

  get bearing() {
    return this.robotBearing;
  }

  get coordinates() {
    return this.robotPosition;
  }

  turnRight() {
    switch (this.robotBearing) {
      case "north":
        this.robotBearing = "east";
        break;
      case "east":
        this.robotBearing = "south";
        break;
      case "south":
        this.robotBearing = "west";
        break;
      case "west":
        this.robotBearing = "north";
        break;
    }
  }

  turnLeft() {
    switch (this.robotBearing) {
      case "north":
        this.robotBearing = "west";
        break;
      case "east":
        this.robotBearing = "north";
        break;
      case "south":
        this.robotBearing = "east";
        break;
      case "west":
        this.robotBearing = "south";
        break;
    }
  }

  at(x, y) {
    this.robotPosition = [x, y];
  }

  advance() {
    const x = this.robotPosition[0];
    const y = this.robotPosition[1];

    switch (this.robotBearing) {
      case "north":
        this.robotPosition = [x, y + 1];
        break;
      case "east":
        this.robotPosition = [x + 1, y];
        break;
      case "south":
        this.robotPosition = [x, y - 1];
        break;
      case "west":
        this.robotPosition = [x - 1, y];
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
    this.robotPosition = [x, y];
    this.robotBearing = direction;
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
