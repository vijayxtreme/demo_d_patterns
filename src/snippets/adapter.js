import { concatAndOutput } from "../util";

class Soldier {
  constructor(level) {
    this.level = level;
  }

  attack() {
    return this.level * 1;
  }
}

class Jedi {
  constructor(level) {
    this.level = level;
  }

  attackWithSaber() {
    return this.level * 100;
  }
}

class JediAdapter {
  constructor(jedi) {
    this.jedi = jedi;
  }

  attack() {
    return this.jedi.attackWithSaber();
  }
}
const comments = `/* When an application may need to talk to 
another application (or different codebase), but an API is 
incompatible.  The adapter translates "requests" between one 
application to another. */`;

const output = concatAndOutput(comments, Soldier, Jedi, JediAdapter);

export default output;
