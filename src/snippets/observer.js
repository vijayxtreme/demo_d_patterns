import { concatAndOutput } from "../util";

class Product {
  constructor() {
    this.price = 0;
    this.actions = [];
  }

  setBasePrice(val) {
    this.price = val;
    this.notifyAll();
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions = this.actions.filter((el) => !(el instanceof observer));
  }

  notifyAll() {
    return this.actions.forEach((el) => el.update(this));
  }
}

class Fees {
  update(product) {
    product.price = product.price * 1.2;
  }
}

class Profit {
  update(product) {
    product.price = product.price * 2;
  }
}
const comments = `/* Promotes "loose coupling" between 
subscribers and observers -- Observers typically hold 
state, while subscribers can "watch" an observer and 
upon state change respond appropriately.  Add and 
subtract subscribers on the fly  (e.g. React state, MVC) - 
and the app will remain stable.  (Efficient app) */`;

const output = concatAndOutput(comments, Product, Fees, Profit);
export default output;
