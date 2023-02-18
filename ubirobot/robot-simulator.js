export class InvalidInputError extends Error {
  constructor() {
    super();
    //throw new Error("Remove this statement and implement this function");
  }
}

export class Robot {
  constructor() {
    this.allowedDirecions = ["east", "west", "north", "south"];
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
    throw new Error("Remove this statement and implement this function");
  }

  turnRight() {
    switch (this.robotBearing) {
      case "north":
        //this.
        break;

      default:
        break;
    }

    //throw new Error("Remove this statement and implement this function");
  }

  turnLeft() {
    throw new Error("Remove this statement and implement this function");
  }

  at() {
    throw new Error("Remove this statement and implement this function");
  }

  advance() {
    throw new Error("Remove this statement and implement this function");
  }

  instructions() {
    throw new Error("Remove this statement and implement this function");
  }

  place() {
    throw new Error("Remove this statement and implement this function");
  }

  evaluate() {
    throw new Error("Remove this statement and implement this function");
  }
}
