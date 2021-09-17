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

const example = `const bbutils = new BeachBodyUtils()
const bbutils1 = new BeachBodyUtils()
console.log(bbutils === bbutils1)
bbutils.setup() //oh noes we set up again!

const bbutils2 = new BeachBodyUtilsv1()
const bbutils3 = new BeachBodyUtilsv1()
console.log(bbutils2 === bbutils3)
bbutils2.setup() //doesn't work`;

const comments = `/* A single representation of a class or instance in an 
application.  (e.g. one DOM, one Window, one instance of a 
library per application.  Downside is objects are public
in JavaScript. You can use closures with local variables 
inside a function to keep some methods private
or check out the # syntax in ES2019 with Babel  */`;

const output = concatAndOutput(
  comments,
  BeachBodyUtils,
  BeachBodyUtilsv1,
  example
);
export default output;
