import { concatAndOutput } from "../util";

class TrafficTower {
  constructor() {
    this.airplanes = [];
  }

  requestPositions() {
    return this.airplanes.map((airplane) => {
      return airplane.position;
    });
  }
}

class Airplane {
  constructor(position, trafficTower) {
    this.position = position;
    this.trafficTower = trafficTower;
    this.trafficTower.airplanes.push(this);
  }

  requestPositions() {
    return this.trafficTower.requestPositions();
  }
}

const comments = `/* Handles communication between components, 
as a single source of truth. This allows other components to 
remain simple, while the complexity of handling communication 
is handled in one area.  (Easy pattern to follow, may lead 
to redundant code over time). */`;

const output = concatAndOutput(comments, TrafficTower, Airplane);
export default output;
