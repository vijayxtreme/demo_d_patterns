import { concatAndOutput } from "../util";

class Person {
  constructor() {
    if (typeof Person.instance === "object") {
      return Person.instance;
    }
    Person.instance = this;
    return this;
  }
}

const output = concatAndOutput(Person);
export default output;
