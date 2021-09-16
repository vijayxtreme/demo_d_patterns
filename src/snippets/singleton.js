import { concatAndOutput } from "../util";

class BeachBodyUtils {
  constructor() {
    if (typeof BeachBodyUtils.instance === "object") {
      return BeachBodyUtils.instance;
    }
    this.setup();
    BeachBodyUtils.instance = this;
    return this;
  }
  setup() {
    console.log(`setting up utils once`);
  }
}

const BeachBodyUtilsv1 = `const BeachBodyUtilsv1 = (function() {
  // using closure to mimic private variables and methods
  let instance;
  const setup = () => console.log('setting up utils in v1 once');
  return class Util {
    constructor() {
      if (instance) {
        return instance;
      }
      instance = this;
      setup();
    }
  };
})()`;

const comments = `/* A single representation of a class or instance in an 
application.  (e.g. one DOM, one Window, one instance of a 
library per application.  Downside is objects are public
in JavaScript. You can use closures with local variables 
inside a function to keep some methods private
or check out the # syntax in ES2019 with Babel  */`;

const output = concatAndOutput(comments, BeachBodyUtils, BeachBodyUtilsv1);
export default output;
