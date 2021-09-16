import { concatAndOutput } from "../util";

class Iterator {
  constructor(el) {
    this.index = 0;
    this.elements = el;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

const comments = `/* Used often for working with data; rather than 
having data mapped in several areas, you can hold it in a central 
iterator and provide methods (like next and previous) to 
return information as needed (keeps data in a central area) */`;

const output = concatAndOutput(comments, Iterator);

export default output;
