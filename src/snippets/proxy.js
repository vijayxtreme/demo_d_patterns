import { concatAndOutput } from "../util";

class Car {
  drive() {
    return "driving";
  }
}

class CarProxy {
  constructor(driver) {
    this.driver = driver;
  }
  drive() {
    return this.driver.age < 18 ? "too young to drive" : new Car().drive();
  }
}

class Driver {
  constructor(age) {
    this.age = age;
  }
}

const comments = `/* Code is received by an in-between class 
or method and then based on logic executed or 
directed elsewhere.  (E.g. fetch requests can be grouped 
together via a proxy to reduce constant pinging of an API). */`;

const output = concatAndOutput(comments, Car, CarProxy, Driver);
export default output;
