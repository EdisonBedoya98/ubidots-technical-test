export class InvalidInputError extends Error {
  constructor() {
    super();
    //throw new Error("Remove this statement and implement this function");
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

    //throw new Error("Remove this statement and implement this function");
  }

  get bearing() {
    return this.robotBearing;
    // throw new Error("Remove this statement and implement this function");
  }

  get coordinates() {
    return this.robotPosition;
    // throw new Error("Remove this statement and implement this function");
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

    //throw new Error("Remove this statement and implement this function");
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

    // throw new Error("Remove this statement and implement this function");
  }

  at(x, y) {
    this.robotPosition = [x, y];
    // throw new Error("Remove this statement and implement this function");
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
    // new Error("Remove this statement and implement this function");
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
    // throw new Error("Remove this statement and implement this function");
  }

  place({ x, y, direction }) {
    this.robotPosition = [x, y];
    this.robotBearing = direction;
    //throw new Error("Remove this statement and implement this function");
  }

  evaluate(instructions) {
    //instructions(instructions);
    //throw new Error("Remove this statement and implement this function");
  }
}
